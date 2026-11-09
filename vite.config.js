import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The résumé button is only rendered when the PDF is actually shipped,
// so the live site can never link to a 404.
const RESUME_FILE = "Priyanshu_Dubey_Resume.pdf";
const hasResume = existsSync(new URL(`./public/${RESUME_FILE}`, import.meta.url));

if (!hasResume && process.env.NODE_ENV !== "test") {
  console.warn(
    `\n⚠  public/${RESUME_FILE} not found — the "Download résumé" button will be hidden.\n`,
  );
}

export default defineConfig({
  plugins: [react()],
  define: {
    __RESUME_PATH__: JSON.stringify(hasResume ? `/${RESUME_FILE}` : ""),
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
    include: ["src/**/*.test.{js,jsx}"],
    css: false,
  },
});
