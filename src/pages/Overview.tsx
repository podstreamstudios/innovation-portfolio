import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { PageNav } from "@/components/layout/PageNav";
import { useSectionFade } from "@/hooks/useSectionFade";
import { useScrollspy } from "@/hooks/useScrollspy";
import { stackCards } from "@/data/stacks";
import {
  spineTable,
  acronymBreakdown,
  contributions,
  certifiesList,
} from "@/data/overview";
import type { StackId } from "@/data/stacks";

const stackColorClass: Record<StackId, { accent: string; credential: string }> = {
  processes: { accent: "bg-processes", credential: "text-processes border-processes" },
  resources: { accent: "bg-resources", credential: "text-resources border-resources" },
  values: { accent: "bg-values", credential: "text-values border-values" },
};

const overviewSections = [
  { id: "origin", label: "Origin" },
  { id: "stacks", label: "Three Stacks" },
  { id: "spine", label: "Theoretical Spine" },
  { id: "playlist", label: "Playlist Logic" },
  { id: "contributions", label: "Contributions" },
  { id: "pathway", label: "Pathway" },
  { id: "certifies", label: "What It Certifies" },
];

export function Overview() {
  useSectionFade();
  const { activeId } = useScrollspy(overviewSections.map((s) => s.id));

  return (
    <>
      {/* HEADER */}
      <header className="bg-ink text-parchment relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 pt-12 md:pt-20 pb-12 md:pb-[72px] relative z-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mid mb-8 opacity-0 animate-fade-up [animation-delay:0.1s]">
            ARIES Certificate in Innovation System Orchestration for the Creative Industries
          </p>
          <div className="flex gap-0 mb-4 opacity-0 animate-fade-up [animation-delay:0.25s]">
            {"ARIES".split("").map((letter, i) => (
              <span
                key={i}
                className="font-serif text-[clamp(64px,8vw,108px)] font-semibold leading-[0.9] tracking-tight text-parchment"
              >
                {letter}
              </span>
            ))}
          </div>
          <p className="font-serif text-[clamp(14px,1.8vw,18px)] font-light italic text-mid mb-12 opacity-0 animate-fade-up [animation-delay:0.4s]">
            Autopoietic Remix for Intertextual and Experiential Systems
          </p>
          <p className="font-serif text-[clamp(18px,2.2vw,24px)] font-light leading-[1.55] text-parchment max-w-[680px] opacity-0 animate-fade-up [animation-delay:0.55s]">
            A nine-module professional certificate in cultural production, institutional analysis,
            and ecosystem governance &mdash; designed for creative industries practitioners who need
            to understand what they are inside of.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-t-[#1e1c18]">
          {(["processes", "resources", "values"] as const).map((id, i) => (
            <div
              key={id}
              className={`px-5 md:px-12 py-5 md:py-7 border-r border-r-[#1e1c18] last:border-r-0 opacity-0 animate-fade-up`}
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            >
              <div className={`font-mono text-[10px] tracking-[0.16em] uppercase mb-1.5 ${
                id === "processes" ? "text-processes" : id === "resources" ? "text-resources" : "text-values"
              }`}>
                Stack {i + 1} &middot; MC{i * 3 + 1}&ndash;MC{i * 3 + 3}
              </div>
              <div className="font-sans text-[16px] font-medium text-parchment/70">
                {stackCards[i].credential}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[280px] font-semibold text-white/[0.03] leading-none select-none pointer-events-none z-1">
          ARIES
        </div>
      </header>

      {/* PAGE NAV */}
      <PageNav sections={overviewSections} activeId={activeId} />

      {/* ORIGIN */}
      <section id="origin" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          Origin &amp; Intellectual History
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          A program built from <em className="italic text-mid">inside</em> the problem it studies
        </h2>
        <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-10">
          The ARIES certificate rebuilds the architecture of IAT 203: Cultural Icons and Popular Art
          (SFU, 2002&ndash;2006) at professional certificate register &mdash; adding theoretical
          depth, jurisdictional literacy, and industry case analysis.
        </p>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mt-12">
          <div>
            <p className="text-[16px] leading-[1.75] text-[#3a3830] max-w-[680px] mb-5">
              Teaching IAT 203 produced a 2006 MASc thesis:{" "}
              <em>
                Travels in Intertextuality: The Autopoietic Identity of Remix Culture
              </em>{" "}
              (Flynn, 2006). The thesis extended Walter Benjamin&rsquo;s two-lens exhibition value /
              cult value dialectic into a three-lens system &mdash; adding the economic and
              governance lens that Benjamin&rsquo;s framework needed but never fully articulated.
            </p>
            <p className="text-[16px] leading-[1.75] text-[#3a3830] max-w-[680px] mb-5">
              That third lens - exchange value - is the layer that determines whose exhibition value
              gets distributed, whose cult value gets protected, and who controls the conditions
              under which the first two layers operate. The ARIES name encodes this three-lens
              structure into a series of stacked microcredentials. The certificate is what that
              theoretical statement has become when extended to its full institutional and ecosystem
              complexity.
            </p>
            <p className="text-[16px] leading-[1.75] text-[#3a3830] max-w-[680px] mb-5">
              The certificate exists in two registers simultaneously: it is a professional credential
              in the creative industries, and it is a reflexive theoretical instrument that applies
              to itself the same analytical standards it teaches, i.e. Benjamin&rsquo;s test &mdash;
              is what you have designed theoretically &ldquo;the aestheticization of
              politics&rdquo;? Or is it &ldquo;the politicization of art&rdquo;?
            </p>
          </div>
          <div>
            <blockquote className="font-serif text-[clamp(22px,2.5vw,32px)] font-normal italic leading-[1.45] text-ink border-l-[3px] border-l-processes pl-7">
              &ldquo;The teaching of IAT 203 produced both a methodology and a question: how do you
              design a cultural system that can sustain value without aestheticizing the cause it
              claims to serve?&rdquo;
              <cite className="block font-mono text-[11px] not-italic tracking-[0.12em] uppercase text-mid mt-5">
                &mdash; Joel Flynn, March 2026
              </cite>
            </blockquote>

            <div className="mt-10 border border-rule">
              {acronymBreakdown.map((row) => (
                <div
                  key={row.letter}
                  className="grid grid-cols-[64px_1fr] border-b border-b-rule last:border-b-0 hover:bg-parchment transition-colors"
                >
                  <div className="font-serif text-[40px] font-light text-mid flex items-center justify-center border-r border-r-rule py-6">
                    {row.letter}
                  </div>
                  <div className="p-6 pl-8">
                    <div className="font-sans text-[14px] font-bold tracking-[0.06em] uppercase mb-1.5">
                      {row.term}
                    </div>
                    <p className="text-[16px] leading-relaxed text-[#3a3830] m-0 max-w-full">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* THREE STACKS */}
      <section id="stacks" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          Program Architecture
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          Three stacks. <em className="italic text-mid">One argument.</em>
        </h2>
        <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-10">
          The three stacks are not interchangeable. Each builds genuine prerequisite competence
          before the next begins. The sequence is the design.
        </p>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-12 bg-rule">
          {stackCards.map((card) => {
            const colors = stackColorClass[card.id];
            return (
              <Link
                to={`/${card.id}`}
                key={card.id}
                className="bg-cream px-9 py-12 no-underline text-ink block hover:bg-parchment transition-colors cursor-pointer"
              >
                <div className={`w-8 h-[3px] mb-7 ${colors.accent}`} />
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-3">
                  {card.modules}
                </div>
                <div className="font-serif text-[28px] font-normal mb-2">{card.name}</div>
                <span
                  className={`font-mono text-[11px] tracking-[0.08em] inline-block border px-2.5 py-1 mb-6 ${colors.credential}`}
                >
                  {card.credential}
                </span>
                <p className="text-[16px] leading-relaxed text-[#3a3830] mb-7 max-w-full">
                  {card.description}
                </p>
                <ul className="list-none border-t border-t-rule pt-5">
                  {card.moduleList.map((m) => (
                    <li
                      key={m.code}
                      className="text-[16px] leading-normal text-mid py-2 border-b border-b-rule last:border-b-0 grid grid-cols-[36px_1fr] gap-2 max-w-full m-0"
                    >
                      <span className="font-mono text-[10px] tracking-[0.1em] text-mid pt-0.5">
                        {m.code}
                      </span>
                      <span className="text-ink text-[16px]">{m.name}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </Reveal>
      </section>

      {/* THEORETICAL SPINE */}
      <section id="spine" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          Theoretical Spine
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          Every framework describes <em className="italic text-mid">the same architecture</em>
        </h2>
        <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-10">
          Independent disciplines have converged on the same three-level structure through different
          routes. Recognizing this convergence is itself a form of analytical competence.
        </p>
        <Reveal>
          <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
          <table className="w-full border-collapse mt-12 text-[16px] min-w-[600px]">
            <thead>
              <tr>
                {spineTable.headers.map((h) => (
                  <th
                    key={h}
                    className="font-mono text-[9px] tracking-[0.18em] uppercase text-mid text-left p-3 pb-3 border-b-2 border-b-ink whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spineTable.rows.map((row) => (
                <tr
                  key={row.label}
                  className={
                    row.dark
                      ? "bg-ink text-parchment hover:bg-[#1e1c18]"
                      : "hover:[&>td]:bg-parchment"
                  }
                >
                  <td className="p-4 border-b border-b-rule align-top">
                    <span
                      className={`font-sans font-bold text-[12px] tracking-[0.06em] uppercase whitespace-nowrap ${
                        row.dark
                          ? "text-parchment"
                          : row.color === "processes"
                            ? "text-processes"
                            : row.color === "resources"
                              ? "text-resources"
                              : row.color === "values"
                                ? "text-values"
                                : "text-ink"
                      }`}
                    >
                      {row.label}
                    </span>
                  </td>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`p-4 align-top leading-normal ${
                        row.dark ? "border-b-0" : "border-b border-b-rule"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Reveal>
        <p className="mt-8 text-[14px] text-mid font-mono tracking-[0.06em]">
          The frameworks are not parallel translations of the same idea. They are interlocking
          dimensions of the same activity system, each necessary to make the others fully legible.
        </p>
      </section>

      {/* PLAYLIST LOGIC */}
      <section id="playlist" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          The Playlist Logic
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          Why the sequence is <em className="italic text-mid">designed</em> this way
        </h2>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12 items-start">
          <div>
            <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-7">
              RPV is the certificate&rsquo;s organizing spine &mdash; but students encounter it
              resequenced: Processes first, then Resources, then Values.
            </p>
            <p className="text-[16px] leading-[1.75] text-[#3a3830] max-w-[680px] mb-5">
              This resequencing is only possible because RPV is a <em>system</em> rather than three
              independent categories. A playlist is not a random reordering of tracks. It is the
              same album, resequenced for the listener&rsquo;s readiness. The album holds together
              because its structure is stable. The resequencing works because the system sustains it.
            </p>
            <p className="text-[16px] leading-[1.75] text-[#3a3830] max-w-[680px] mb-5">
              A student who encounters Resources first &mdash; institutional systems, archival
              authority, funding structures &mdash; has no practitioner anchor from which to
              understand what those systems are doing <em>to</em>. Stack 1 builds that anchor. Only
              then does it matter that institutions constrain, mediate, and shape all of that.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-[80px_1fr] gap-6 mb-6 items-start">
              <div className="font-serif text-[13px] italic text-right pt-0.5 text-processes">Thesis</div>
              <div>
                <strong className="font-sans text-[13px] font-bold block mb-1 text-processes">Stack 1 &mdash; Processes</strong>
                <p className="text-[16px] text-[#3a3830] m-0 max-w-full">Identity and cultural self-articulation. The practitioner&rsquo;s irreproducible relationship to their own work and voice.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-6 mb-6 items-start">
              <div className="font-serif text-[13px] italic text-right pt-0.5 text-resources">Antithesis</div>
              <div>
                <strong className="font-sans text-[13px] font-bold block mb-1 text-resources">Stack 2 &mdash; Resources</strong>
                <p className="text-[16px] text-[#3a3830] m-0 max-w-full">Institutional systems that constrain, mediate, and appropriate that work. The structural tension between practitioner and institution.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-6 mb-6 items-start">
              <div className="font-serif text-[13px] italic text-right pt-0.5 text-values">Synthesis</div>
              <div>
                <strong className="font-sans text-[13px] font-bold block mb-1 text-values">Stack 3 &mdash; Values</strong>
                <p className="text-[16px] text-[#3a3830] m-0 max-w-full">Governed ecosystem orchestration that resolves the tension into something that can sustain itself &mdash; producing, distributing, protecting, and perpetuating value over time.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTRIBUTIONS */}
      <section
        id="contributions"
        className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule"
      >
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          Five Original Theoretical Contributions
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          Beyond the <em className="italic text-mid">established</em> literature
        </h2>
        <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-10">
          The certificate is built on established theoretical foundations. Its curriculum design has
          produced five original contributions that extend beyond the existing literature.
        </p>

        <Reveal className="mt-12">
          {contributions.map((c) => (
            <div
              key={c.number}
              className="grid grid-cols-[48px_1fr] gap-6 py-8 border-b border-b-rule last:border-b-0"
            >
              <div className="font-serif text-4xl font-light text-rule leading-none pt-1">
                {c.number}
              </div>
              <div>
                <h3 className="font-sans text-[16px] font-bold mb-1.5 tracking-[0.02em]">
                  {c.title}
                </h3>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-mid mb-3">
                  {c.attribution}
                </div>
                {c.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[16px] text-[#3a3830] m-0 max-w-full [&:not(:last-child)]:mb-3"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* PATHWAY */}
      <section id="pathway" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          Institutional Pathway
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 tracking-tight">
          BCI &rarr; ARIES &rarr; <em className="italic text-mid">Strategyzer</em>
        </h2>
        <p className="font-serif text-[clamp(17px,1.8vw,21px)] font-light leading-relaxed text-[#2a2820] max-w-[720px] mb-10">
          The certificate is designed as a bridge between the BCIT Bachelor of Creative Industries
          degree and a formalized Strategyzer-licensed professional credential, facilitated through
          the BCIT Tech Collider.
        </p>

        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_24px_1fr_24px_1fr] gap-0 items-center">
          {[
            {
              label: "Entry",
              name: "BCIT BCI Degree",
              desc: "60-credit degree completion program for diploma graduates from creative fields. Launched May 2025, BCIT School of Business + Media. Integrates entrepreneurship, design thinking, ethics, and emerging technologies.",
              highlight: false,
            },
            {
              label: "Bridge",
              name: "ARIES Certificate",
              desc: "Nine modules building the theoretical literacy \u2014 PSL framework, permission architecture design, RPV governance \u2014 that makes Strategyzer\u2019s tools analytically rigorous rather than procedurally mechanical. Pilot delivery via BCIT Tech Collider, 555 Seymour Street, Vancouver.",
              highlight: true,
            },
            {
              label: "Outcome",
              name: "Strategyzer Licensed",
              desc: "Formally licensed Strategyzer learning outcomes \u2014 Business Model Canvas, Value Proposition Canvas, revenue logic modeling. BCI graduates who complete ARIES arrive at Strategyzer-licensed learning with the institutional and governance literacy to make those tools genuinely powerful.",
              highlight: false,
            },
          ].map((node, i) => (
            <div key={node.name} className="contents">
              {i > 0 && (
                <div className="text-center text-mid text-lg hidden md:block">&rarr;</div>
              )}
              <div
                className={`bg-parchment border p-7 ${
                  node.highlight ? "border-ink border-2" : "border-rule"
                }`}
              >
                <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-2">
                  {node.label}
                </div>
                <div className="font-sans text-[16px] font-bold mb-2">{node.name}</div>
                <p className="text-[16px] text-[#3a3830] leading-relaxed m-0 max-w-full">
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CERTIFIES */}
      <section id="certifies" className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-24">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mid mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-rule">
          What the Certificate Certifies
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4 tracking-tight">
          Stack 1 taught you to produce.
          <br />
          <em className="italic text-mid">
            Stack 2 taught you to diagnose.
            <br />
            Stack 3 taught you to orchestrate.
          </em>
        </h2>
        <p className="mb-0 mt-4 font-serif text-lg italic text-mid">
          MC9 proves whether you can perform.
        </p>

        <Reveal as="ul" className="mt-12 list-none">
          {certifiesList.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[24px_1fr] gap-4 py-5 border-b border-b-rule last:border-b-0 text-[16px] leading-relaxed text-[#2a2820] max-w-[720px] m-0"
            >
              <span className="font-mono text-[13px] text-mid pt-0.5">&rarr;</span>
              {item}
            </li>
          ))}
        </Reveal>
      </section>
    </>
  );
}
