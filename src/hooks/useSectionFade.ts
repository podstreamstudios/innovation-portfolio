import { useEffect } from "react";

/**
 * Observes all elements matching `selector` within a container,
 * toggling the `visible` class as they enter/leave the viewport.
 */
export function useSectionFade(
  containerSelector = "main",
  sectionSelector = "section[id]",
) {
  useEffect(() => {
    const container = document.querySelector(containerSelector) ?? document;
    const sections = container.querySelectorAll(sectionSelector);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" },
    );

    sections.forEach((s) => {
      s.classList.add("section-fade");
      io.observe(s);
    });

    return () => io.disconnect();
  }, [containerSelector, sectionSelector]);
}
