import { Reveal } from "@/components/Reveal";

export function Outputs() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-ink text-parchment relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-20 relative z-2">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-mid mb-5">
            ARIES Certificate &mdash; Research and Development Outputs
          </p>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-light tracking-tight leading-[1.05] mb-6">
            Outputs
          </h1>
          <p className="font-sans text-[15px] text-parchment/60 max-w-[640px] leading-relaxed">
            The research artifacts, theoretical contributions, and institutional documents that make the ARIES Certificate a testable theoretical claim, not just a curriculum.
          </p>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-serif text-[200px] font-semibold text-white/[0.04] leading-none select-none pointer-events-none z-1 tracking-tight hidden md:block">OUT</div>
      </header>

      {/* MAJOR RESEARCH OUTPUTS */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Major Research Outputs</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          Documents, proposals, <em className="italic">and frameworks</em>
        </h2>
        <p className="text-[15px] leading-[1.75] text-[#2a2820] max-w-[760px] mb-4">
          Three bodies of research underpin the ARIES Certificate: the foundational academic work (2006 MASc, 2010 MBA), the curriculum development research (2024&ndash;2026), and the institutional deployment documentation. Together they constitute the evidence base for the certificate&rsquo;s theoretical claims.
        </p>

        <Reveal className="outputs-grid">
          <div className="output-card">
            <div className="output-card-type">Academic Thesis</div>
            <div className="output-card-title">Travels in Intertextuality: The Autopoietic Identity of Remix Culture</div>
            <div className="output-card-meta">Flynn, J. (2006) &middot; SFU MASc Thesis &middot; Simon Fraser University</div>
            <div className="output-card-desc">The foundational document. Extends Benjamin&rsquo;s two-lens exhibition/cult value dialectic into a three-lens system by introducing exchange value as the economic and governance layer. The ARIES name and methodology encode this three-lens structure. First articulation of the PSL architecture and of RPV as a coordinated analytical system rather than a categorization tool.</div>
            <span className="output-card-tag tag-all">Foundation</span>
          </div>
          <div className="output-card">
            <div className="output-card-type">MBA Applied Project</div>
            <div className="output-card-title">SEEDFEED: The Interactive Marketing and Design of a Digital Video Ecosystem</div>
            <div className="output-card-meta">Flynn, J. (2010) &middot; SFU MBA Applied Project &middot; Simon Fraser University</div>
            <div className="output-card-desc">Refines Bill Moggridge&rsquo;s interaction design methodology into the S/E/E/D framework (Study, Explore, Evaluate, Design). Maps the four phases to Wartofsky&rsquo;s three artifact levels. Introduces the non-linear but navigable structure that becomes MC3&rsquo;s central methodology. First formal articulation of RPV as a system rather than a checklist.</div>
            <span className="output-card-tag tag-p">Processes &middot; MC3</span>
          </div>
          <div className="output-card">
            <div className="output-card-type">Research Proposal</div>
            <div className="output-card-title">As Time Goes By: Immersive Event Pre-Visualization</div>
            <div className="output-card-meta">Flynn, J. (2025) &middot; Mitacs Accelerate Proposal &middot; FDU Vancouver &middot; $60K / 18 months</div>
            <div className="output-card-desc">57-page Mitacs Accelerate research proposal. Embeds the Casablanca @ The American event design as a live research case &mdash; testing ARIES methodology in a real venue context across four Vancouver sites: Painter&rsquo;s Lodge, The American Bar, Relish Bar, and the Hollywood Theatre. The exemplar case study embedded in MC2.</div>
            <span className="output-card-tag tag-p">Processes &middot; MC2</span>
          </div>
          <div className="output-card">
            <div className="output-card-type">Curriculum Design Research</div>
            <div className="output-card-title">ARIES Certificate &mdash; Nine Module Syllabi and Assignment Briefs</div>
            <div className="output-card-meta">Flynn, J. (2025&ndash;2026) &middot; Curriculum development research</div>
            <div className="output-card-desc">Nine complete module documents (MC1&ndash;MC9), each containing a full syllabus, theoretical framework integration, assignment brief, evaluation rubric, and learning outcomes. Constitutes the primary evidence base for the five original theoretical contributions. All modules developed as fully deployable teaching documents.</div>
            <span className="output-card-tag tag-all">All Stacks</span>
          </div>
          <div className="output-card">
            <div className="output-card-type">Institutional Pitch Deck</div>
            <div className="output-card-title">Advanced Certificate Concept Note &mdash; AC1&ndash;AC3</div>
            <div className="output-card-meta">Flynn, J. (2026) &middot; 10-slide concept note &middot; BCIT Tech Collider</div>
            <div className="output-card-desc">Post-ARIES advanced credential concept: three modules translating ARIES outputs into formally licensed Strategyzer outcomes. Business Model Canvas (AC1), Value Proposition Canvas (AC2), Revenue Model Integration (AC3). BCIT Tech Collider, 555 Seymour St, Vancouver. Target: 12&ndash;18 students. Intake: September 2026 or January 2027.</div>
            <span className="output-card-tag tag-v">Values &middot; Post-ARIES</span>
          </div>
          <div className="output-card">
            <div className="output-card-type">Program Website</div>
            <div className="output-card-title">ARIES Certificate &mdash; Six-Page Site</div>
            <div className="output-card-meta">phd.crooney.ca &middot; March 2026</div>
            <div className="output-card-desc">Full six-page site documenting the certificate: program overview with theoretical spine and five original contributions; three stack pages each with full module content, frameworks, and assignment blocks; work plan; outputs. Designed as the institutional proposal document and the student-facing program description simultaneously.</div>
            <span className="output-card-tag tag-all">All Stacks</span>
          </div>
        </Reveal>
      </div>

      {/* PDF BRIEF LIBRARY */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16 border-b border-b-rule">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Assignment Brief Library</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          Nine module PDFs &mdash; <em className="italic">all nine microcredentials</em>
        </h2>
        <p className="text-[15px] leading-[1.75] text-[#2a2820] max-w-[760px] mb-4">
          Each PDF contains the full assignment brief, evaluation rubric, theoretical framework references, and learning outcomes for a single module. Available for distribution to prospective institutional partners and students.
        </p>

        <Reveal className="pdf-grid">
          {[
            { code: "MC1", title: "Persona, Voice, and Cultural Identity", desc: "YOU\u00ae Audio Essay (50%) + Thompson/Hayes Comparative Persona Analysis (25%) + Written Context & Reflection (25%). 1.5 CEUs \u00b7 40\u201350 hours.", tag: "tag-p", stack: "Processes" },
            { code: "MC2", title: "Cultural Systems, Icons, and Experiential Design", desc: "Pre-Visualization Design Package across all three ARIES layers + Individual Reflective Documentation (25%). 3.0 CEUs \u00b7 6\u20137 weeks.", tag: "tag-p", stack: "Processes" },
            { code: "MC3", title: "Cultural Product Circulation and Interaction Design", desc: "S/E/E/D Circulation Strategy Package (25\u201330 slides) + Claude Skill build-and-evaluate arc + ARIES Pilot Stop analysis. 3.0 CEUs \u00b7 40\u201350 hours.", tag: "tag-p", stack: "Processes" },
            { code: "MC4", title: "Institutional Mediation and Archival Voice", desc: "Fogerty v. Fantasy (1994) \u2014 Crowe/Curtis positional analysis. 5Ws+H diagnostic grid + Audio Essay (8\u201312 min). Paired work. 3.0 CEUs \u00b7 5 weeks.", tag: "tag-r", stack: "Resources" },
            { code: "MC5", title: "Institutions, Installations, and Archival Systems", desc: "Dual Installation Pre-Visualization for Canadian War Museum + National WWII Museum. Teams of 3\u20134. 3.0 CEUs \u00b7 6 weeks.", tag: "tag-r", stack: "Resources" },
            { code: "MC6", title: "Institutional System Diagnosis and Change Laboratory", desc: "Full Engestr\u00f6m six-node mapping + Change Laboratory modeling + Governance & AI Position Statement. Same teams as MC5. 3.0 CEUs \u00b7 6\u20138 weeks.", tag: "tag-r", stack: "Resources" },
            { code: "MC7", title: "AI-Augmented Design Studio Orchestration", desc: "Studio Charter + RPV Architecture Map + Dual Value Proposition Analysis + Three-Skill Architecture. Team (student-formed). 3.0 CEUs.", tag: "tag-v", stack: "Values" },
            { code: "MC8", title: "Licensing Architecture, Innovation, and Trust Calibration", desc: "Permission Architecture Dossier (PSL Map, Process Transparency, Innovation Calibration, Benjamin\u2019s Test). Same team. 3.0 CEUs.", tag: "tag-v", stack: "Values" },
            { code: "MC9", title: "Boundary Object Pitch and Governance Performance", desc: "Six pro forma financial statements + 40-minute live defence (20 min presentation + 20 min reviewer dialogue). Capstone. 3.0 CEUs.", tag: "tag-v", stack: "Values \u00b7 Capstone" },
          ].map((pdf) => (
            <div key={pdf.code} className="pdf-row">
              <div className="pdf-icon">PDF</div>
              <div className="pdf-info">
                <div className="pdf-title">{pdf.code} &mdash; {pdf.title}</div>
                <div className="pdf-desc">{pdf.desc}</div>
                <span className={`pdf-stack ${pdf.tag}`}>{pdf.stack}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* FIVE ORIGINAL CONTRIBUTIONS */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12 md:py-16">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mid mb-4">Theoretical Contributions</div>
        <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-light tracking-tight mb-6">
          Five original contributions <em className="italic">beyond the literature</em>
        </h2>

        <Reveal className="contributions-list-outputs">
          {[
            { num: "Contribution 01", title: "The Three-Lens Extension of Benjamin\u2019s Dialectic", attr: "Flynn, 2006 \u00b7 MASc Thesis, SFU", desc: "Extends Benjamin\u2019s exhibition value / cult value two-term dialectic into a three-term system by introducing exchange value as the economic and governance layer \u2014 the term that determines whose exhibition value is distributed and whose cult value is protected." },
            { num: "Contribution 02", title: "The S/E/E/D Methodology for Cultural System Design", attr: "Flynn, 2010 \u00b7 MBA Applied Project, SFU", desc: "Refines Moggridge\u2019s interaction design process into a navigable four-phase structure \u2014 Study, Explore, Evaluate, Design \u2014 mapped onto Wartofsky\u2019s artifact levels. Non-linear but purposefully structured." },
            { num: "Contribution 03", title: "RPV as a Coordinated System of Analytical Lenses", attr: "Flynn, 2010 \u00b7 MBA Applied Project, SFU", desc: "Reconceptualizes Christensen\u2019s RPV framework through Beer\u2019s VSM and Maturana and Varela\u2019s autopoiesis: Resources, Processes, and Values are not three independent categories but three interdependent perspectives on a self-reproducing system." },
            { num: "Contribution 04", title: "Permission Architectures and Governance of Cultural Imagination", attr: "Flynn, 2006; extended 2015 through PSL framework", desc: "Maps exhibition value, cult value, and exchange value onto Wartofsky\u2019s three artifact levels and a Products\u2013Services\u2013Licences architecture. Tertiary artifacts do not merely regulate activity \u2014 they structure the imaginative conditions under which cultural production becomes possible." },
            { num: "Contribution 05", title: "5Ws+H as Diagnostic Lenses for Activity Systems", attr: "Flynn, 2026 \u00b7 Curriculum development research", desc: "Reconceptualizes the journalistic 5Ws+H as institutional diagnostic lenses mapped onto Vygotsky\u2019s triangle and Wartofsky\u2019s artifact levels. WHO/WHAT/WHERE \u2192 primary; WHEN/HOW \u2192 secondary; WHY \u2192 tertiary permission architecture." },
          ].map((c) => (
            <div key={c.num} className="contrib-card-out">
              <div className="contrib-card-out-num">{c.num}</div>
              <div className="contrib-card-out-title">{c.title}</div>
              <div className="contrib-card-out-attr">{c.attr}</div>
              <p>{c.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* FOOTER */}
      <div className="bg-ink py-6 px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-1 md:gap-0 justify-between font-mono text-[10px] tracking-[0.1em] uppercase text-[#2a2820]">
          <span>ARIES Certificate in Cultural Production &amp; Platform Economics</span>
          <span>Outputs &middot; March 2026</span>
        </div>
      </div>
    </>
  );
}
