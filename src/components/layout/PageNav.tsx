import { useState } from "react";

interface PageNavProps {
  sections: { id: string; label: string }[];
  activeId: string;
}

export function PageNav({ sections, activeId }: PageNavProps) {
  const [open, setOpen] = useState(false);
  const activeLabel = sections.find((s) => s.id === activeId)?.label ?? sections[0]?.label;

  return (
    <nav className="bg-parchment border-b border-b-rule sticky top-[52px] z-100">
      {/* Desktop */}
      <div className="page-nav-desktop max-w-[1200px] mx-auto px-5 md:px-12 flex items-stretch gap-0">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`font-mono text-[11px] tracking-[0.12em] uppercase no-underline py-[18px] px-6 border-r border-r-rule first:border-l first:border-l-rule transition-colors duration-200 flex items-center relative ${
              activeId === item.id
                ? "text-ink bg-ink/[0.06] subnav-active"
                : "text-mid hover:text-ink hover:bg-cream"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="page-nav-mobile">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-3 font-mono text-[11px] tracking-[0.12em] uppercase text-ink"
        >
          <span>{activeLabel}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="2,4 6,8 10,4" />
          </svg>
        </button>
        {open && (
          <div className="border-t border-t-rule px-5 pb-2">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block font-mono text-[11px] tracking-[0.12em] uppercase no-underline py-3 border-b border-b-rule last:border-b-0 transition-colors duration-200 ${
                  activeId === item.id ? "text-ink" : "text-mid"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
