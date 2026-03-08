import { Reveal } from "@/components/Reveal";

export function WorkPlan() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-ink text-parchment relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20 relative z-2">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-mid mb-5">
            ARIES Certificate &mdash; Development Progress
          </p>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-light tracking-tight leading-[1.05] mb-6">
            Work Plan
          </h1>
          <p className="font-sans text-[15px] text-parchment/60 max-w-[600px] leading-relaxed">
            Curriculum development timeline, institutional pathway, and delivery milestones for the nine-module professional certificate program.
          </p>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[200px] font-semibold text-white/[0.04] leading-none select-none pointer-events-none z-1 tracking-tight hidden md:block">WP</div>
      </header>

      {/* DEVELOPMENT STATUS */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Current Status &mdash; March 2026</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          From prototype curriculum to <em className="italic">institutional proposal</em>
        </h2>
        <p className="text-[15px] leading-[1.75] text-[#2a2820] max-w-[760px] mb-4">
          All nine module syllabi, assignment briefs, and case study frameworks have been drafted. The ARIES Certificate is currently under evaluation for fit with the BCIT Bachelor of Creative Industries (BCI) program. A parallel pathway through the BCIT Tech Collider is being explored for pilot delivery.
        </p>

        <Reveal>
          <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
          <table className="timeline-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Stack</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { milestone: "MC1\u2013MC3 syllabi and assignments", tag: "tag-p", stack: "Processes", status: "complete", statusLabel: "Complete", notes: "All three syllabi, rubrics, and case study frameworks drafted and reviewed." },
                { milestone: "MC4\u2013MC6 syllabi and assignments", tag: "tag-r", stack: "Resources", status: "complete", statusLabel: "Complete", notes: "Engestr\u00f6m full activity system, Change Laboratory design, Habermas governance framing all integrated." },
                { milestone: "MC7\u2013MC9 syllabi and assignments", tag: "tag-v", stack: "Values", status: "complete", statusLabel: "Complete", notes: "Capstone design finalized: boundary object pitch + 40-minute governance performance + six pro forma financial statements." },
                { milestone: "ARIES Certificate website", tag: "tag-all", stack: "All Stacks", status: "complete", statusLabel: "Complete", notes: "Six-page site: program overview, three stack pages, work plan, outputs. All assignment blocks integrated." },
                { milestone: "PDF brief library", tag: "tag-all", stack: "All Stacks", status: "complete", statusLabel: "Complete", notes: "Nine individual assignment/syllabus PDFs generated. MC1\u2013MC9 fully documented." },
                { milestone: "Casablanca @ The American pre-viz", tag: "tag-p", stack: "Processes", status: "complete", statusLabel: "Complete", notes: "57-page Mitacs Accelerate proposal. Four Vancouver venues. Submitted to Mitacs / FDU Vancouver." },
                { milestone: "Advanced Certificate concept note (AC1\u2013AC3)", tag: "tag-all", stack: "Post-ARIES", status: "complete", statusLabel: "Complete", notes: "10-slide pitch deck. Strategyzer/BMC licensing integration. BCIT Tech Collider, Sept 2026 / Jan 2027 target." },
                { milestone: "BCIT BCI program alignment review", tag: "tag-all", stack: "Institutional", status: "active", statusLabel: "In Progress", notes: "Evaluating fit as bridge between BCIT BCI degree and Strategyzer-licensed professional credential." },
                { milestone: "Pilot cohort formation", tag: "tag-all", stack: "Delivery", status: "pending", statusLabel: "Pending", notes: "Target: 12\u201318 students. Venue: BCIT Tech Collider, 555 Seymour St, Vancouver." },
                { milestone: "Strategyzer licensing negotiation", tag: "tag-v", stack: "Values", status: "pending", statusLabel: "Pending", notes: "Formal licensing of Business Model Canvas + Value Proposition Canvas learning outcomes for AC1\u2013AC3." },
              ].map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.milestone}</strong></td>
                  <td><span className={`stack-tag ${row.tag}`}>{row.stack}</span></td>
                  <td><span className={`status-badge status-${row.status}`}>{row.statusLabel}</span></td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Reveal>
      </div>

      {/* THREE-PHASE DEVELOPMENT */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Development Architecture</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          Three phases of <em className="italic">program development</em>
        </h2>

        <Reveal className="phase-grid">
          {[
            {
              number: "Phase 1",
              title: "Theoretical Foundation",
              period: "2002\u20132015 \u00b7 SFU, IAT 203, MASc, MBA",
              items: [
                "IAT 203 Cultural Icons and Popular Art (SFU, 2002\u20132006)",
                "2006 MASc thesis: three-lens Benjamin extension",
                "2010 MBA Applied Project: S/E/E/D methodology, SEEDFEED framework",
                "PSL framework development: Products\u2013Services\u2013Licences architecture",
                "RPV reconceptualization as autopoietic coordination system",
              ],
            },
            {
              number: "Phase 2",
              title: "Curriculum Architecture",
              period: "2024\u20132025 \u00b7 Curriculum development research",
              items: [
                "Nine-module structure: three stacks, three sub-certificates, integrated credential",
                "5Ws+H diagnostic framework formalized (original contribution 05)",
                "Engestr\u00f6m full CHAT integration across MC5\u2013MC6",
                "Three-skill Claude architecture: MC3 \u2192 MC7 progression designed",
                "Boundary object pitch capstone design (MC9)",
              ],
            },
            {
              number: "Phase 3",
              title: "Institutional Deployment",
              period: "2026 \u2192 \u00b7 BCIT, Tech Collider, Strategyzer",
              items: [
                "BCIT BCI degree alignment review (active)",
                "Pilot delivery via BCIT Tech Collider",
                "Advanced Certificate pitch (AC1\u2013AC3): Sept 2026 / Jan 2027",
                "Strategyzer licensing integration (AC stage)",
                "Mitacs Accelerate partnership (FDU Vancouver)",
              ],
            },
          ].map((phase) => (
            <div key={phase.number} className="phase-card">
              <div className="phase-card-number">{phase.number}</div>
              <div className="phase-card-title">{phase.title}</div>
              <div className="phase-card-period">{phase.period}</div>
              <ul>
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>

      {/* INSTITUTIONAL PATHWAY */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Institutional Pathway</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          BCI &rarr; ARIES &rarr; <em className="italic">Advanced Certificate</em>
        </h2>

        <Reveal className="context-grid">
          {[
            { label: "Entry Point", title: "BCIT Bachelor of Creative Industries", desc: "60-credit degree completion program for diploma graduates from creative fields. Launched May 2025 through BCIT School of Business and Media. Integrates entrepreneurship, design thinking, ethics, and emerging technologies \u2014 the institutional context within which ARIES is positioned as a specialized professional certificate." },
            { label: "Bridge", title: "ARIES Certificate", desc: "Nine modules building the theoretical literacy \u2014 PSL framework, permission architecture design, RPV governance \u2014 that makes Strategyzer tools analytically rigorous rather than procedurally mechanical. Pilot delivery via BCIT Tech Collider, 555 Seymour Street, Vancouver. First cohort target: 12\u201318 students." },
            { label: "Advanced Credential", title: "AC1\u2013AC3 Advanced Certificate", desc: "Post-ARIES: three advanced modules translating ARIES outputs into Strategyzer/BMC commercial deployment. Business Model Canvas (AC1), Value Proposition Canvas (AC2), Revenue Model Integration (AC3). Formally licensed Strategyzer outcomes. Target intake: September 2026 or January 2027." },
            { label: "Research Partnership", title: "Mitacs Accelerate \u2014 FDU Vancouver", desc: "Submitted Mitacs Accelerate proposal: \u201cAs Time Goes By\u201d \u2014 Immersive Event Pre-Visualization. PI: Joel A. Flynn, FDU Vancouver. 18 months, $60K total. Four Vancouver venues. Casablanca @ The American as the pre-visualization research case study embedded in MC2." },
          ].map((block) => (
            <div key={block.label} className="context-block">
              <div className="context-block-label">{block.label}</div>
              <div className="context-block-title">{block.title}</div>
              <p>{block.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* FOOTER */}
      <div className="bg-ink py-6 px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-1 md:gap-0 justify-between font-mono text-[10px] tracking-[0.1em] uppercase text-[#2a2820]">
          <span>ARIES Certificate in Cultural Production &amp; Platform Economics</span>
          <span>Work Plan &middot; March 2026</span>
        </div>
      </div>
    </>
  );
}
