import { useEffect, useRef } from "react";

/**
 * useReveal – attaches IntersectionObserver to every element
 * with .reveal, .reveal-left, or .reveal-scale class inside the ref'd container.
 */
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current || document;
    const targets = container.querySelectorAll(".reveal, .reveal-left, .reveal-scale");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useReveal;
