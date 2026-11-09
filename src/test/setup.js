import "@testing-library/jest-dom/vitest";

// jsdom lacks these browser APIs.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver;
window.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
