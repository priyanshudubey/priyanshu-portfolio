import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { navLinks, site } from "../data/content";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="switch mx-1 shrink-0"
      data-on={isDark ? "true" : "false"}
    >
      {/* A physical slider: the knob carries the icon and slides right in dark mode. */}
      <span className="switch-knob">
        {isDark ? (
          <Moon aria-hidden="true" className="h-3 w-3" />
        ) : (
          <Sun aria-hidden="true" className="h-3 w-3" />
        )}
      </span>
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);
  const navRef = useRef(null);
  const listRef = useRef(null);
  const [pill, setPill] = useState(null);

  // Sliding highlight behind the active desktop link.
  useEffect(() => {
    const measure = () => {
      const el = active ? listRef.current?.querySelector(`a[href="#${active}"]`) : null;
      const list = listRef.current?.getBoundingClientRect();
      const rect = el?.getBoundingClientRect();
      setPill(rect && list ? { left: rect.left - list.left, width: rect.width } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Scroll progress + navbar background, at most once per animation frame.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
      setScrolled(window.scrollY > 16);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Active-section tracking: highlight the section crossing the upper part of the viewport.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const current = navLinks.find((l) => visible.get(l.id));
        setActive(current ? current.id : "");
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or a click outside it.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, [isOpen]);

  const linkClass = (id) =>
    `rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
      active === id ? "neu-inset-sm text-accent" : "neu-raised-xs text-ink-soft hover:text-ink"
    }`;

  return (
    <>
      <div id="scroll-progress" ref={progressRef} aria-hidden="true" />

      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-paper/90 shadow-[0_10px_24px_-14px_rgb(var(--neu-lo)/0.9)]" : "bg-paper/70"
        }`}
      >
        <nav aria-label="Main" className="container-site flex h-16 items-center justify-between">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="keycap keycap-accent mb-0 h-8 w-8 rounded-lg">
              <Terminal aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="font-mono text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
              {site.shortName}
              <span aria-hidden="true" className="text-accent">
                _
              </span>
            </span>
            <span className="sr-only">, back to top</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            <ul ref={listRef} className="relative flex items-center gap-1">
              <li
                aria-hidden="true"
                className="neu-inset-sm pointer-events-none absolute inset-y-0 rounded-xl transition-[left,width,opacity] duration-300 ease-out"
                style={{ left: pill?.left ?? 0, width: pill?.width ?? 0, opacity: pill ? 1 : 0 }}
              />
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    className={`relative block rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                      active === link.id ? "text-accent" : "text-ink-soft hover:text-ink"
                    }`}
                    aria-current={active === link.id ? "location" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <a href="#contact" className="keycap keycap-accent ml-2 rounded-xl px-4 py-2 text-sm">
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`rounded-xl p-2 text-ink-soft transition-colors hover:text-accent ${
                isOpen ? "neu-inset-sm" : "neu-raised-xs"
              }`}
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        <div id="mobile-menu" hidden={!isOpen} className="bg-paper/95 px-4 pb-6 pt-3 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block ${linkClass(link.id)} py-3`}
                  aria-current={active === link.id ? "location" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="keycap keycap-accent mt-5 flex w-full px-5 py-3 text-sm"
          >
            Get in touch
          </a>
        </div>
      </header>
    </>
  );
}
