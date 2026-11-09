import { existsSync } from "node:fs";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { navLinks, site } from "./data/content";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Priyanshu/);
  });

  it("has no duplicate element ids", () => {
    const { container } = render(<App />);
    const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);
    expect(ids.length).toBe(new Set(ids).size);
  });

  it("does not nest <section> elements", () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll("section section")).toHaveLength(0);
  });

  it("points every nav link at a section that exists, in page order", () => {
    const { container } = render(<App />);
    const sectionOrder = [...container.querySelectorAll("section[id]")].map((s) => s.id);
    const navOrder = navLinks.map((l) => l.id);
    navOrder.forEach((id) => expect(sectionOrder).toContain(id));
    expect(navOrder).toEqual(sectionOrder.filter((id) => navOrder.includes(id)));

    const nav = screen.getByRole("navigation", { name: "Main" });
    within(nav)
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"))
      .filter((href) => href.startsWith("#"))
      .forEach((href) => expect(container.querySelector(href)).not.toBeNull());
  });

  it("only links to the résumé when the PDF is shipped", () => {
    render(<App />);
    const link = screen.queryByRole("link", { name: /résumé/i });
    if (site.resume) {
      expect(existsSync(`public${site.resume}`)).toBe(true);
      expect(link).toHaveAttribute("href", site.resume);
    } else {
      expect(link).toBeNull();
    }
  });

  it("gives external links rel=noopener", () => {
    const { container } = render(<App />);
    container.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute("rel")).toMatch(/noopener/);
    });
  });
});
