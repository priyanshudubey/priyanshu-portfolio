import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Starts looping decorative animations once the page is idle after load, and
 * pauses them in sections that are off-screen (CSS in index.css).
 */
export function useMotionBudget() {
  useEffect(() => {
    const root = document.documentElement;
    let idle = 0;
    const start = () => {
      const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
      idle = ric(() => root.classList.add("motion-ready"), { timeout: 2000 });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => e.target.classList.toggle("offscreen", !e.isIntersecting)),
        { rootMargin: "100px 0px" },
      );
      document.querySelectorAll("main > section").forEach((s) => observer.observe(s));
    }

    return () => {
      window.removeEventListener("load", start);
      (window.cancelIdleCallback || clearTimeout)(idle);
      observer?.disconnect();
    };
  }, []);
}

/**
 * One document-level listener that feeds the cursor position to the `.card`
 * under the pointer, driving the radial glow in index.css.
 */
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia?.("(hover: hover)").matches) return undefined;
    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest(".card") : null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

/**
 * Counts a stat like "4+" up from 0 when it scrolls into view.
 * Renders the final value on the server so no-JS readers see real numbers.
 */
export function CountUp({ value, duration = 1400 }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      return undefined;
    }
    const target = Number(match[1]);
    const suffix = match[2];
    let frame = 0;
    setDisplay(`0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${Math.round(eased * target)}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once per value
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

/**
 * Cycles through `words`, re-triggering an enter animation on each change.
 * The first word is rendered on the server; screen readers get a static label.
 */
export function RotatingWords({ words, interval = 2600, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true" className={className}>
        <span key={index} className="word-in">
          {words[index]}
        </span>
        <span className="caret ml-1 opacity-70" />
      </span>
    </>
  );
}

/**
 * Scales `barRef` (scaleY 0→1) as `ref` scrolls past a line 60% down the
 * viewport. Writes the style directly so scrolling never re-renders React.
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((line - rect.top) / rect.height, 0), 1);
      if (barRef.current) barRef.current.style.transform = `scaleY(${progress})`;
      // Light up each dot once the fill has reached it.
      const fillEnd = rect.top + progress * rect.height;
      el.querySelectorAll(".timeline-dot").forEach((dot) => {
        const d = dot.getBoundingClientRect();
        dot.classList.toggle("reached", d.top + d.height / 2 <= fillEnd + 1);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return [ref, barRef];
}
