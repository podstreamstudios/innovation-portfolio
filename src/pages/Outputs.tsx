export function Outputs() {
  return (
    <>
      <header className="bg-ink text-parchment relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20 relative z-2">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-parchment/90 mb-6">
            Mitacs / portfolio artifacts
          </p>
          <h1 className="font-serif text-[clamp(48px,7vw,80px)] font-normal leading-[0.95] text-parchment mb-4 whitespace-pre-line">
            {"Outputs\n& Evidence"}
          </h1>
          <p className="font-serif text-[clamp(14px,1.8vw,18px)] font-light italic text-mid mb-8">
            The &ldquo;proof shelf&rdquo; that demonstrates the system is real
          </p>
          <p className="font-serif text-[clamp(16px,1.8vw,20px)] font-light leading-relaxed text-parchment max-w-[680px] mb-10">
            This page is where reviewers, partners, and supervisors can quickly find artifacts: pitch
            materials, pre-visualizations, memos, and documented case studies produced by the ARIES
            studio model.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">What it is</div>
              <div className="text-[16px] font-medium text-parchment/70">Downloads &middot; links &middot; documentation</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-mid mb-1">Why it matters</div>
              <div className="text-[16px] font-medium text-parchment/70">Evidence of feasibility + applied impact</div>
            </div>
          </div>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[280px] font-semibold text-white/[0.04] leading-none select-none pointer-events-none z-1 hidden md:block">O</div>
      </header>

      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-8 md:gap-16">
            <div>
              <h3 className="font-sans text-[17px] font-bold mt-0 mb-4">Key Documents</h3>
              <ul className="link-list">
                <li><a href="/assets/Advanced_Certificate_Pitch_Deck.pptx">Advanced Certificate Pitch Deck (March 2026)</a></li>
                <li><a href="/assets/Casablanca_Event_PreViz_Mitacs_Accelerate-2.pdf">Casablanca Event PreViz (Mitacs Accelerate)</a></li>
              </ul>

              <h3 className="font-sans text-[17px] font-bold mt-8 mb-4">Case Study Dossiers</h3>
              <p className="text-[16px] leading-[1.75] text-[#3a3830]">As you publish case studies, link them here (PDF or web pages) with a short abstract, methods, and outcomes.</p>

              <h3 className="font-sans text-[17px] font-bold mt-8 mb-4">Reusable Templates</h3>
              <p className="text-[16px] leading-[1.75] text-[#3a3830] mb-4">Recommended additions:</p>
              <ul className="outcomes-list">
                <li>ARIES &rarr; Strategyzer translation worksheet</li>
                <li>Six-statement pro forma template (annotated)</li>
                <li>Boundary-object pitch deck template</li>
                <li>Licensing / permission architecture dossier template</li>
              </ul>
            </div>

            <aside>
              <div className="sidebar-card">
                <div className="sidebar-card-label">Evidence Strategy</div>
                <p className="text-[16px] leading-relaxed text-[#3a3830] mb-2">Keep this page lightweight: each artifact gets a short label, one-sentence purpose, and a clean link.</p>
                <p className="text-[16px] leading-relaxed text-[#3a3830] m-0">Whenever possible, include the &ldquo;what was learned&rdquo; memo alongside the artifact.</p>
              </div>
              <div className="sidebar-card">
                <div className="sidebar-card-label">Next Additions</div>
                <ul className="deliverables-list">
                  <li><span className="deliverable-weight">+</span>BCIT alignment memo (BCI + Tech Collider)</li>
                  <li><span className="deliverable-weight">+</span>Mitacs concept brief (1 page)</li>
                  <li><span className="deliverable-weight">+</span>Studio model spec (v1)</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
