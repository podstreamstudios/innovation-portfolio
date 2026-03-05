import { Link } from "react-router-dom";

export function WorkPlan() {
  return (
    <>
      <header className="bg-ink text-parchment relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20 relative z-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-parchment/90 mb-6">
            Mitacs / BCIT framing
          </p>
          <h1 className="font-serif text-[clamp(48px,7vw,80px)] font-normal leading-[0.95] text-parchment mb-4 whitespace-pre-line">
            {"Innovation System Orchestration\nfor the Creative Industries"}
          </h1>
          <p className="font-serif text-[clamp(14px,1.8vw,18px)] font-light italic text-mid mb-8">
            Work Plan &mdash; research pathway, roles, and milestones
          </p>
          <p className="font-serif text-[clamp(16px,1.8vw,20px)] font-light leading-relaxed text-parchment max-w-[680px] mb-10">
            This page translates the ARIES curriculum architecture into a Mitacs-ready work plan
            aligned with BCIT (BCI + Tech Collider) and future commercialization translation
            through Strategyzer.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">Institutional Anchor</div>
              <div className="text-[16px] font-medium text-parchment/70">BCIT &middot; BCI &middot; Tech Collider</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">Method</div>
              <div className="text-[16px] font-medium text-parchment/70">Studio-based R&amp;D + evaluation</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">Outputs</div>
              <div className="text-[16px] font-medium text-parchment/70">Toolkits &middot; Case studies &middot; Evidence</div>
            </div>
          </div>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[280px] font-semibold text-white/[0.04] leading-none select-none pointer-events-none z-1 hidden md:block">W</div>
      </header>

      <section className="py-12 md:py-20 border-b-2 border-b-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-8 md:gap-16">
            <div>
              <h3 className="font-sans text-[17px] font-bold mt-0 mb-4">Research Aim</h3>
              <p className="lead-p">Prototype and evaluate a governance-literate studio model for the creative industries &mdash; and produce a translation pathway from ARIES system architectures into industry-standard innovation tools.</p>

              <h3 className="font-sans text-[17px] font-bold mt-8 mb-4">Work Packages</h3>
              <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
              <table className="framework-table">
                <thead><tr><th>WP</th><th>Focus</th><th>Evidence Produced</th></tr></thead>
                <tbody>
                  <tr><td><span className="fw-label">WP1</span></td><td>Document the ARIES system architecture (Stacks 1&ndash;3)</td><td>Program map + model spec + assessment logic</td></tr>
                  <tr><td><span className="fw-label">WP2</span></td><td>Build pilot case-study pathways</td><td>Case dossiers, annotated artifacts, evaluation rubrics</td></tr>
                  <tr><td><span className="fw-label">WP3</span></td><td>Institutional alignment at BCIT</td><td>Feasibility notes, delivery model, partner roles</td></tr>
                  <tr><td><span className="fw-label">WP4</span></td><td>Translation protocol (ARIES &rarr; Strategyzer)</td><td>Mapping templates + example pitch package</td></tr>
                  <tr><td><span className="fw-label">WP5</span></td><td>Evaluation + iteration</td><td>Findings memo, design revisions, next-cohort plan</td></tr>
                </tbody>
              </table>
              </div>

              <h3 className="font-sans text-[17px] font-bold mt-8 mb-4">Milestones</h3>
              <div className="register-flow">
                {[
                  { mod: "M1", focus: "System documentation", move: "ARIES model spec + evidence shelf structure." },
                  { mod: "M2", focus: "BCIT integration draft", move: "BCI/Tech Collider delivery + stakeholder alignment." },
                  { mod: "M3", focus: "Translation + demo", move: "Strategyzer-compatible pitch package + review event plan." },
                ].map(m => (
                  <div key={m.mod} className="register-cell">
                    <div className="register-cell-mod">{m.mod}</div>
                    <div className="register-cell-focus">{m.focus}</div>
                    <div className="register-cell-move">{m.move}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside>
              <div className="sidebar-card">
                <div className="sidebar-card-label">Partner Logic</div>
                <p className="text-[16px] leading-relaxed text-[#3a3830] mb-2"><strong>BCIT</strong>: institutional delivery + Tech Collider demonstration venue.</p>
                <p className="text-[16px] leading-relaxed text-[#3a3830] mb-2"><strong>ARIES</strong>: governance-literate studio architecture + curriculum system.</p>
                <p className="text-[16px] leading-relaxed text-[#3a3830] m-0"><strong>Strategyzer</strong>: downstream translation and deployment language.</p>
              </div>
              <div className="sidebar-card">
                <div className="sidebar-card-label">Quick Links</div>
                <ul className="link-list">
                  <li><Link to="/outputs">Outputs &amp; Evidence Shelf</Link></li>
                  <li><Link to="/processes">Processes Certificate</Link></li>
                  <li><Link to="/resources">Resources Certificate</Link></li>
                  <li><Link to="/values">Values Certificate</Link></li>
                </ul>
              </div>
              <div className="sidebar-card">
                <div className="sidebar-card-label">Status</div>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mid">Draft &mdash; portfolio framing</p>
                <p className="text-[16px] leading-relaxed text-[#3a3830] m-0">Use this site as the public-facing documentation layer while partner conversations progress.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
