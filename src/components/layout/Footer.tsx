export function Footer() {
  return (
    <footer className="bg-ink text-mid py-10 md:py-12 px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3a3830] mb-3">
            Program
          </div>
          <div className="text-[16px] leading-relaxed text-mid font-light">
            ARIES Certificate in Innovation System Orchestration for the Creative Industries
            <br />
            Nine modules &middot; Three stacks &middot; Three sub-certificates
            <br />
            MC1&ndash;MC9
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3a3830] mb-3">
            Institutional Context
          </div>
          <div className="text-[16px] leading-relaxed text-mid font-light">
            Under evaluation for fit with BCIT Bachelor of Creative Industries (BCI) program.
            <br />
            Pilot delivery: BCIT Tech Collider, 555 Seymour Street, Vancouver.
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3a3830] mb-3">
            Theoretical Foundations
          </div>
          <div className="text-[16px] leading-relaxed text-mid font-light">
            Wartofsky &middot; Engestr&ouml;m &middot; Vygotsky &middot; Benjamin &middot; Berger
            &middot; Cole &middot; Beer &middot; Maturana &amp; Varela &middot; Foucault &middot;
            Lessig &middot; Pistor &middot; Christensen
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 md:mt-12 pt-6 border-t border-t-[#1e1c18] flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center font-mono text-[11px] tracking-[0.1em] uppercase text-mid/50">
        <span>Joel Flynn &middot; March 2026</span>
        <span>Program Overview v1.0</span>
      </div>
    </footer>
  );
}
