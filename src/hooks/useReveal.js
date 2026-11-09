import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they scroll into view.
 *
 * Elements are only hidden once this runs (it adds `reveal-ready` to <html>),
 * so the prerendered HTML stays fully visible if JS is slow or disabled.
 * Reduced-motion users get the content immediately (see index.css).
 */
export default function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    // Anything already on screen is shown without waiting for a frame.
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
      else observer.observe(el);
    });
    // Hide the not-yet-visible elements *instantly*: without `reveal-instant`
    // they would all transition from visible to hidden at once during load.
    const root = document.documentElement;
    root.classList.add("reveal-instant", "reveal-ready");
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove("reveal-instant")),
    );

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
}
