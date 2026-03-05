import { Link } from "react-router-dom";
import { StackHeader } from "@/components/layout/StackHeader";
import { ModuleNav } from "@/components/layout/ModuleNav";
import { Reveal } from "@/components/Reveal";
import { useSectionFade } from "@/hooks/useSectionFade";
import { stacks, stackContinues, type StackId } from "@/data/stacks";
import { getStackModules } from "@/data/moduleContent";

interface StackPageProps {
  stackId: StackId;
}

export function StackPage({ stackId }: StackPageProps) {
  const stack = stacks[stackId];
  const { modules, cascades } = getStackModules(stackId);
  const continues = stackContinues[stackId];
  useSectionFade();

  return (
    <>
      <StackHeader stack={stack} />
      <ModuleNav links={modules.map((m) => ({ id: m.id, label: m.navLabel }))} />

      {modules.map((mod, i) => (
        <div key={mod.id}>
          <section id={mod.id} className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20">
            <Reveal className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-10">
              <div className="font-serif text-[48px] md:text-[72px] font-light text-rule leading-none">
                {mod.number}
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-mid mb-2">
                  {mod.code} &middot; {mod.stackLabel}
                </div>
                <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-normal leading-[1.15] mb-2">
                  {mod.title}
                </h2>
                <p className="font-serif text-[16px] italic text-mid m-0">{mod.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-1 pt-0 md:pt-2">
                {mod.badges.map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-16">
              <Reveal className="overflow-x-auto [&>p]:text-[16px] [&>p]:leading-[1.75] [&>p]:text-[#3a3830] [&>p]:max-w-[680px] [&>p]:mb-5 [&>h3]:font-sans [&>h3]:text-[17px] [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3">
                {mod.mainContent}
              </Reveal>
              <Reveal>
                {mod.sidebar}
              </Reveal>
            </div>
          </section>

          {cascades[i] && (
            <div className="flex items-center gap-4 px-5 md:px-12 py-6 max-w-[1200px] mx-auto">
              <div className="flex-1 h-px bg-rule" />
              <span className="font-mono text-[10px] tracking-[0.1em] text-mid text-center">
                {cascades[i].text}
              </span>
              <div className="flex-1 h-px bg-rule" />
            </div>
          )}
        </div>
      ))}

      {/* Stack Continues */}
      <div className="bg-parchment border-t border-t-rule">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {continues.map((c) => (
            <div key={c.path}>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-2">
                {c.label}
              </div>
              <Link
                to={c.path}
                className={`font-sans text-[16px] font-bold text-ink no-underline hover:text-processes transition-colors`}
              >
                {c.linkText}
              </Link>
              <p className="text-[16px] text-[#3a3830] leading-relaxed mt-2 max-w-[480px]">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Simple footer for stack pages */}
      <div className="bg-ink py-6 px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-1 md:gap-0 justify-between font-mono text-[10px] tracking-[0.1em] uppercase text-[#2a2820]">
          <span>ARIES Certificate in Cultural Production &amp; Platform Economics</span>
          <span>{stack.rpv} Certificate &middot; Stack {stack.number}</span>
        </div>
      </div>
    </>
  );
}
