import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteNav } from "@/data/navigation";

const activeMap: Record<string, string> = {
  "/": "!text-processes",
  "/overview": "!text-processes",
  "/processes": "!text-processes bg-processes/8",
  "/resources": "!text-resources bg-resources/8",
  "/values": "!text-values bg-values/8",
  "/workplan": "!text-parchment bg-white/6",
  "/outputs": "!text-parchment bg-white/6",
};

export function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-ink sticky top-0 z-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex items-stretch h-[52px]">
        <Link
          to="/"
          className="font-serif text-[18px] font-semibold text-parchment no-underline py-4 pr-6 mr-4 tracking-[0.04em] border-r border-r-[#1e1c18] flex items-center"
        >
          ARIES
        </Link>
        <div className="site-nav-links hidden md:flex items-stretch flex-1">
          {siteNav.map((item, i) => {
            const isExternal = /^https?:\/\//.test(item.path);
            const isActive = !isExternal && pathname === item.path;
            const active = isActive ? activeMap[item.path] || "" : "";
            const isOverview = item.path === "/";
            const isUtility = item.path === "/workplan" || item.path === "/outputs" || isExternal;
            const borderClass = isUtility
              ? "border-l border-l-[#1e1c18]"
              : "border-r border-r-[#1e1c18]";
            const baseColor = isOverview && !isActive ? "text-processes" : "";
            const className = `font-mono text-[10px] tracking-[0.14em] uppercase text-mid no-underline px-5 flex items-center transition-colors duration-200 hover:text-parchment ${borderClass} ${baseColor} ${active}`;
            if (isExternal) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  rel="noopener"
                  className={className}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className={className}
                style={i === 0 ? {} : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto flex items-center justify-center w-10 h-10 self-center text-parchment"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="2" y1="5" x2="18" y2="5" />
                <line x1="2" y1="10" x2="18" y2="10" />
                <line x1="2" y1="15" x2="18" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink border-t border-t-[#1e1c18] px-5 pb-4">
          {siteNav.map((item) => {
            const isExternal = /^https?:\/\//.test(item.path);
            const isActive = !isExternal && pathname === item.path;
            const active = isActive ? activeMap[item.path] || "" : "";
            const className = `block font-mono text-[11px] tracking-[0.14em] uppercase text-mid no-underline py-3 border-b border-b-[#1e1c18] transition-colors duration-200 hover:text-parchment ${active}`;
            if (isExternal) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={className}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
