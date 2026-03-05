import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollspy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    function update() {
      const scrollY = window.scrollY;
      const offset = 160; // account for sticky navs
      let current = idsRef.current[0];

      for (const t of targets) {
        if (t.offsetTop - offset <= scrollY) {
          current = t.id;
        }
      }
      setActiveId(current);
    }

    // initial
    update();

    // listen for hash changes (click navigation)
    function onHash() {
      const h = location.hash.replace("#", "");
      if (h && idsRef.current.includes(h)) setActiveId(h);
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", onHash);
    };
  }, [ids]);

  const setActive = useCallback((id: string) => setActiveId(id), []);

  return { activeId, setActive };
}
