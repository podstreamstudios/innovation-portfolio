import { type StackMeta } from "@/data/stacks";

interface StackHeaderProps {
  stack: StackMeta;
}

export function StackHeader({ stack }: StackHeaderProps) {
  return (
    <header className="bg-ink text-parchment relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20 relative z-2">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mid mb-6">
          Stack {stack.number} &middot; {stack.moduleRange} &middot;{" "}
          {stack.format.split(" / ")[0].split(" \u2192")[0]}
        </p>
        <h1 className="font-serif text-[clamp(48px,7vw,80px)] font-normal leading-[0.95] text-parchment mb-4 whitespace-pre-line">
          {stack.title}
        </h1>
        <p className="font-serif text-[clamp(14px,1.8vw,18px)] font-light italic text-mid mb-8">
          {stack.subtitle}
        </p>
        <p className="font-serif text-[clamp(16px,1.8vw,20px)] font-light leading-relaxed text-parchment max-w-[680px] mb-10">
          {stack.description}
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          {[
            { label: "Modules", value: stack.moduleRange.replace("\u2013", " \u00b7 ").replace("MC", "MC").replace("MC", "MC") },
            { label: "Format", value: stack.format },
            { label: "Credits", value: stack.credits },
            { label: "RPV Register", value: stack.rpv },
            { label: "Dialectical Position", value: stack.dialectical },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">
                {item.label}
              </div>
              <div className="font-sans text-[16px] font-medium text-parchment/70">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[280px] font-semibold text-white/[0.03] leading-none select-none pointer-events-none z-1">
        {stack.letter}
      </div>
    </header>
  );
}
