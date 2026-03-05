import type { StackModules } from "./modules";
import type { StackId } from "./stacks";

function processesModules(): StackModules {
  return {
    modules: [
      {
        id: "mc1",
        number: 1,
        code: "MC1",
        stackLabel: "Processes Certificate",
        title: <>Persona, Voice,<br />and Cultural Identity</>,
        subtitle: "YOU\u00ae Audio Essay / Proto-Podcast",
        badges: ["1.5 CEUs", "6\u20138 weeks", "Individual", "Soundtrap"],
        navLabel: "MC1 \u2014 Persona & Identity",
        mainContent: (
          <>
            <p className="lead-p">Imagine you are a student enrolled in a prestigious design school in 2007. On your desk sits Bill Moggridge&rsquo;s <em>Designing Interactions</em>, just published. Before you make anything, the institution is already a framing device. It shapes what you make before you make it.</p>
            <p>This is the time capsule frame of MC1. The course is frozen at 2006 &mdash; just before three ruptures reshaped cultural production: platform-mediated podcast identity, algorithmic social media feeds, and generative AI. This freeze is not nostalgic. It is methodological. By bracketing the present, students experience voice, persona, and identity before algorithmic optimization and AI-assisted reframing became ambient conditions.</p>

            <h3>The First Lesson</h3>
            <p>The course opens with a provocation: &ldquo;We shape our tools, and thereafter our tools shape us.&rdquo; The quote is widely attributed to Marshall McLuhan. It is not his. It was written by John Culkin, a Jesuit priest who was summarizing McLuhan&rsquo;s ideas in 1967. The myth has more cultural currency than the fact &mdash; McLuhan&rsquo;s brand name confers exhibition value on the idea; Culkin&rsquo;s name has at best cult value among specialists.</p>
            <p>When an AI confidently attributes the Culkin quote to McLuhan, it does not merely make an error. It reproduces and accelerates cultural mythology. This is what AI does with tertiary artifacts: it generates frames and interpretive lenses at scale, amplifying existing mythologies as readily as creating new ones. <strong>AI is a tertiary artifact that produces tertiary artifacts &mdash; a framing machine built from framing.</strong></p>

            <h3>Theoretical Foundation: Wartofsky &amp; RPV</h3>
            <table className="framework-table">
              <thead><tr><th>Wartofsky Level</th><th>In MC1 Practice</th><th>RPV Equivalent</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Primary Artifact</span></td><td>The audio file; Soundtrap as production tool</td><td>Resources</td></tr>
                <tr><td><span className="fw-label">Secondary Artifact</span></td><td>Podcasting conventions; production workflows</td><td>Processes</td></tr>
                <tr><td><span className="fw-label">Tertiary Artifact</span></td><td>The persona frame; brand as framing system</td><td>Values</td></tr>
              </tbody>
            </table>

            <p>Branding operates at the tertiary level. A brand is not a logo &mdash; it is a framing structure that organizes meaning and produces value. The YOU&reg; audio essay is not autobiography. It is the deliberate construction of a market-facing identity expressed through a cultural product.</p>

            <h3>The Comparative Case Study</h3>
            <div className="versus">
              <div className="versus-side">
                <div className="versus-name">Hunter S. Thompson</div>
                <div className="versus-era">1937&ndash;2005 &middot; Pre-Platform</div>
                <p className="versus-desc">Constructed voice entirely through text and visual collaboration. His alter ego &ldquo;Raoul Duke&rdquo; eventually overtook the person: &ldquo;I&rsquo;m really in the way as a person, the myth has taken over.&rdquo; Film adaptations removed Thompson from his own representation. Multi-platform presence was fragmented and largely out of his hands.</p>
              </div>
              <div className="versus-divider">vs</div>
              <div className="versus-side">
                <div className="versus-name">Chris Hayes</div>
                <div className="versus-era">b. 1979 &middot; Platform Era</div>
                <p className="versus-desc">Constructs persona across platforms he controls: television, podcast, book, live event. Uses his literal voice as primary medium. His mythology is contained by continuous presence &mdash; no alter ego, no intermediating actors. Continuous self-narration as platform strategy.</p>
              </div>
            </div>
            <p>The comparison reveals how journalist personas worked before podcasting, what changes when literal voice becomes the primary medium, and why mythology formation follows different logics pre- and post-platform. <strong>This comparative logic continues in Stack 2:</strong> Cameron Crowe (Rolling Stone journalist turned filmmaker) vs. Adam Curtis (BBC archival essayist).</p>

            <h3>From Oil Painting to Personal Brand</h3>
            <p>In 1973, Berger&rsquo;s <em>Ways of Seeing</em> examined how oil paintings functioned as markers of wealth and ritual authority. With photography, reproduction altered the cultural function of the image &mdash; oil paintings lost their singular aura (Benjamin). In their place emerged the publicity image, which frames aspiration and constructs value through projection. Branding is the modern continuation of the publicity image.</p>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Walter Benjamin", "Marx Wartofsky", "Roland Barthes", "Jean Baudrillard", "John Berger", "Christensen RPV"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Required Viewing</div>
              <ul className="reading-list">
                <li>Berger, Ways of Seeing &mdash; Episode 4 (BBC, 1972)</li>
                <li>BBC Omnibus: Fear and Loathing on the Road to Hollywood (1978)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Readings</div>
              <ul className="reading-list">
                <li>Benjamin, &ldquo;The Work of Art in the Age of Mechanical Reproduction&rdquo; (excerpts)</li>
                <li>Baudrillard, &ldquo;Simulacra and Simulation&rdquo; (excerpts)</li>
                <li>Seabrook, &ldquo;Nobrow&rdquo; (excerpts)</li>
                <li>Wartofsky &mdash; three-level artifact theory (provided)</li>
                <li>Christensen &mdash; RPV framework (provided)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Final Deliverables</div>
              <ul className="deliverables-list">
                <li><span className="deliverable-weight">50%</span>YOU&reg; Audio Essay (8&ndash;12 min, MP3 from Soundtrap)</li>
                <li><span className="deliverable-weight">50%</span>Thompson/Hayes Comparative Persona Analysis (4&ndash;6 pages)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC1 Certifies</div>
              <ul className="outcomes-list">
                <li>Analyze identity as a culturally constructed artifact</li>
                <li>Apply Wartofsky&rsquo;s three-level artifact theory to cultural production</li>
                <li>Map Wartofsky&rsquo;s framework onto Christensen&rsquo;s RPV as parallel systems</li>
                <li>Conduct comparative case study analysis across media eras</li>
                <li>Produce structured audio compositions using cloud-based tools</li>
                <li>Recognize platform affordances and constraints in identity construction</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc2",
        number: 2,
        code: "MC2",
        stackLabel: "Processes Certificate",
        title: <>Cultural Systems, Icons,<br />and Experiential Design</>,
        subtitle: "Curated Event / Installation / Virtual Environment",
        badges: ["3.0 CEUs", "6\u20137 weeks", "Individual", "ARIES Introduced"],
        navLabel: "MC2 \u2014 Cultural Systems & ARIES",
        mainContent: (
          <>
            <p className="lead-p">MC2 introduces ARIES &mdash; the certificate&rsquo;s foundational methodology &mdash; and the four-framework convergence table that is the theoretical core of the entire program.</p>
            <p>This microcredential centers on culture as a system: spatialization of meaning, curatorial authority, and experiential design as cultural argument. Students analyze cultural icons not as isolated objects but as networks of meanings, then design spatial or experiential environments that translate cultural theory into coordinated encounters.</p>

            <h3>The Four-Framework Convergence</h3>
            <p>Four independently developed frameworks from different disciplines converge on the same underlying three-lens structure. Their structural homology points toward something real &mdash; a deep grammar of how human systems organize resources, practices, and meaning.</p>
            <table className="framework-table">
              <thead><tr><th>Christensen RPV</th><th>Wartofsky</th><th>ARIES</th><th>IDEO (reformulated)</th><th>Urban Informatics</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Resources</span></td><td>Primary artifacts</td><td>Cultural Reservoir</td><td>Viability</td><td>Technology</td></tr>
                <tr><td><span className="fw-label">Processes</span></td><td>Secondary artifacts</td><td>Experiential Assembly</td><td>Feasibility</td><td>People</td></tr>
                <tr><td><span className="fw-label">Values</span></td><td>Tertiary artifacts</td><td>Value Objectification</td><td>Desirability</td><td>Place</td></tr>
              </tbody>
            </table>

            <h3>ARIES as Methodology</h3>
            <p>ARIES is not a workflow or checklist. It is a synthetic theoretical instrument for coordinating cultural production across three analytical layers:</p>
            <p><strong>Cultural Reservoir (Intertextual Inputs)</strong> &mdash; the available cultural materials, icons, texts, and references. The primary lens: what is in the tackle box?</p>
            <p><strong>Experiential Assembly (Remix Operations)</strong> &mdash; spatial, temporal, and atmospheric orchestration. The secondary lens: can the people involved actually deploy those resources? This is where the designable gap between digital representation and embodied presence lives.</p>
            <p><strong>Value Objectification (Authorization Layer)</strong> &mdash; licences, permissions, revenue models, cultural capital. The tertiary lens: is the value proposition compelling enough to sustain this, and whose governance determines the outcome?</p>

            <div className="case-study">
              <div className="case-study-label">Exemplar Case Study</div>
              <div className="case-study-title">Casablanca @ The American</div>
              <p className="case-study-desc">Students analyze a complete ARIES pre-visualization for a Bourdain Birthday Week event at The American (Main Street, Vancouver) &mdash; learning how film iconography (Cultural Reservoir) becomes spatial event design, how iconic scenes translate to venue architecture, and how licensing shapes feasibility. The exemplar is then applied: students design for a venue in their own city using the same methodology and Urban Informatics T/P/P diagnostic.</p>
            </div>

            <h3>Pre-Visualization as Tertiary Artifact</h3>
            <p>Pre-visualization tools are not neutral documentation methods &mdash; they are Wartofsky tertiary artifacts that shape design thinking itself. Different tools make different design possibilities visible or invisible. The tool is the framing device. This is MC1&rsquo;s lesson operating at the design methodology level.</p>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Walter Benjamin", "Maturana & Varela", "Stafford Beer", "Umberto Eco", "John Berger", "Urban Informatics"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Required Viewing</div>
              <ul className="reading-list"><li>Berger, Ways of Seeing &mdash; Episode 1 (BBC, 1972)</li></ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Readings</div>
              <ul className="reading-list">
                <li>Gorrini, &ldquo;Urban Informatics to Understand Citizens&rsquo; Needs in Transport Planning&rdquo;</li>
                <li>Casablanca @ The American pre-viz PDF (exemplar)</li>
                <li>Maturana &amp; Varela &mdash; autopoiesis (excerpts, provided)</li>
                <li>Beer &mdash; viable systems model (excerpts, provided)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC2 Certifies</div>
              <ul className="outcomes-list">
                <li>Treat cultural icons as systems, not isolated objects</li>
                <li>Apply ARIES methodology across all three coordinated layers</li>
                <li>Explain structural homology between RPV, Wartofsky, IDEO, and Urban Informatics</li>
                <li>Apply the Urban Informatics T/P/P diagnostic to venue analysis</li>
                <li>Produce client-facing pre-visualizations suitable for pitch presentations</li>
                <li>Demonstrate remix methodology through calibrated framework alignment</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc3",
        number: 3,
        code: "MC3",
        stackLabel: "Processes Certificate",
        title: <>Cultural Product Circulation<br />and Interaction Design</>,
        subtitle: "Designing Distribution, Experience, and Value Across Cities",
        badges: ["3.0 CEUs", "6\u20137 weeks", "Individual", "S/E/E/D Introduced"],
        navLabel: "MC3 \u2014 Circulation & Interaction Design",
        mainContent: (
          <>
            <p className="lead-p">Building on MC1 (persona as artifact) and MC2 (experiential systems via ARIES), students now design strategies for how their own presence and work move, adapt, and create value over time across cities, platforms, and communities.</p>
            <p>Distribution is not a marketing function. It is a design problem. MC3 introduces the S/E/E/D method &mdash; synthesizing Bill Moggridge&rsquo;s <em>Designing Interactions</em> (MIT Press, 2007) with the SEEDFEED framework (Flynn, SFU MBA Applied Project, 2010). Students design a multi-city promotional tour for themselves as cultural creators.</p>

            <h3>The S/E/E/D Method</h3>
            <table className="framework-table">
              <thead><tr><th>Phase</th><th>Interrogative</th><th>Wartofsky Level</th><th>What It Does</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Study</span></td><td>What / Where / Who</td><td>Primary artifact</td><td>Constraints, synthesis, framing &mdash; the objective inventory of what exists</td></tr>
                <tr><td><span className="fw-label">Explore</span></td><td>When / How</td><td>Secondary artifact</td><td>Ideation, envisioning, visualization &mdash; constructing and testing relationships</td></tr>
                <tr><td><span className="fw-label">Evaluate</span></td><td>Why</td><td>Tertiary artifact</td><td>Uncertainty, selection, evaluation &mdash; bringing values to bear on alternatives</td></tr>
                <tr><td><span className="fw-label">Design</span></td><td>What If</td><td>Double stimulation</td><td>The circulation strategy package &mdash; the WHAT IF made tangible</td></tr>
              </tbody>
            </table>

            <h3>AI Integration: Building a Claude Skill</h3>
            <p>MC1 established AI as a mythology machine &mdash; a tertiary artifact that produces tertiary artifacts. MC3 moves from <em>observing</em> AI as mythology machine to <strong>building one</strong>.</p>
            <p>Students configure a Claude Skill &mdash; a structured, reusable capability &mdash; targeted at a specific tour planning task. Then they evaluate that skill using S/E/E/D.</p>

            <table className="framework-table">
              <thead><tr><th>Wartofsky Level</th><th>AI Relationship</th><th>Module</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Primary</span></td><td>Claude as a tool you use. Prompt &rarr; response. Largely opaque.</td><td>MC1</td></tr>
                <tr><td><span className="fw-label">Secondary</span></td><td>Claude as a tool you build. Encode instructions, constraints, output format. Partially transparent.</td><td>MC3</td></tr>
                <tr><td><span className="fw-label">Tertiary</span></td><td>Claude as a coordinated three-skill architecture governing the studio&rsquo;s production, process, and governance capacity.</td><td>MC7</td></tr>
              </tbody>
            </table>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Bill Moggridge", "George Miller", "S/E/E/D Method", "ARIES (applied)", "Wartofsky", "Engestr\u00f6m (D-phase)"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Texts</div>
              <ul className="reading-list">
                <li>Moggridge, Designing Interactions &mdash; Chapter 10 (MIT Press, 2007)</li>
                <li>Flynn, SEEDFEED (SFU MBA, 2010)</li>
                <li>Miller, &ldquo;The Magical Number Seven, Plus or Minus Two&rdquo; (1956)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC3 Certifies</div>
              <ul className="outcomes-list">
                <li>Apply S/E/E/D methodology to cultural circulation design</li>
                <li>Design a multi-city promotional tour as an interaction system</li>
                <li>Configure a Claude Skill for a specific tour planning task</li>
                <li>Evaluate AI outputs against S/E/E/D phases</li>
                <li>Apply Miller&rsquo;s Law as a cognitive constraint on routing design</li>
                <li>Distinguish automation from irreducible human judgment</li>
              </ul>
            </div>
            <div className="sidebar-card bg-ink !border-ink">
              <div className="sidebar-card-label !text-[#3a3830]">Prepares You For</div>
              <h4 className="text-parchment text-[16px] mb-2">Stack 2 &mdash; Resources Certificate</h4>
              <p className="text-parchment/60 text-[16px]">S/E/E/D shifts register in MC4: from design method to analytical lens. The same interrogatives now diagnose institutional systems already in operation rather than build new ones from scratch.</p>
            </div>
          </>
        ),
      },
    ],
    cascades: [
      { text: "MC1 \u2192 MC2: Practitioner identity established. Now: design the system." },
      { text: "MC2 \u2192 MC3: System designed. Now: put it into circulation." },
    ],
  };
}

function resourcesModules(): StackModules {
  return {
    modules: [
      {
        id: "mc4",
        number: 4,
        code: "MC4",
        stackLabel: "Resources Certificate",
        title: <>Institutional Mediation<br />and Archival Voice</>,
        subtitle: "From Scene to Institution: Authorship Under Constraint",
        badges: ["3.0 CEUs", "5 weeks", "Pairs", "Soundtrap"],
        navLabel: "MC4 \u2014 Archival Voice",
        mainContent: (
          <>
            <p className="lead-p">MC4 is the bridge between Stack 1 and Stack 2. Students carry the analytical muscle developed in MC1&ndash;MC3 into institutional terrain &mdash; from how communicators construct identity to how institutions shape what can be said and how.</p>

            <h3>The Alienation Mechanic: Fogerty v. Fantasy Records</h3>
            <div className="case-card">
              <div className="case-card-label">Load-Bearing Case Study</div>
              <div className="case-card-title">Fogerty v. Fantasy, Inc. (U.S. Supreme Court, 1994)</div>
              <p className="case-card-desc">In 1970, John Fogerty wrote &ldquo;Run Through the Jungle&rdquo; for Creedence Clearwater Revival. Fantasy Records held the publishing rights. In 1985, Fogerty recorded &ldquo;The Old Man Down the Road&rdquo; for a different label. Fantasy sued him for plagiarizing himself &mdash; claiming his new song infringed the song they owned. Fogerty won at jury trial but spent one million dollars in legal fees.</p>
            </div>

            <h3>The Comparative Case Study: Crowe vs. Curtis</h3>
            <div className="register-flow">
              <div className="register-cell">
                <div className="register-cell-mod">Crowe Position</div>
                <div className="register-cell-focus">Hollywood Studio System</div>
                <div className="register-cell-move">American commercial media. Exhibition value logic operating on practitioners: rights-as-property, scale reproduction, work-for-hire.</div>
              </div>
              <div className="register-cell">
                <div className="register-cell-mod">vs.</div>
                <div className="register-cell-focus" style={{ paddingTop: 28, color: "var(--color-mid)", fontSize: 20, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>vs.</div>
              </div>
              <div className="register-cell">
                <div className="register-cell-mod">Curtis Position</div>
                <div className="register-cell-focus">BBC Public Broadcasting</div>
                <div className="register-cell-move">British/Canadian public broadcasting. Cult value being institutionally protected: irreproducible encounter with archival material. Moral rights tradition preserves the author&rsquo;s ongoing relationship to the work.</div>
              </div>
            </div>

            <h3>Primary Content: The World at War</h3>
            <p><em>The World at War</em> (Thames Television/ITV, 1973) &mdash; Episodes 1 and 26 &mdash; is the module&rsquo;s primary analytical object.</p>

            <h3>The 5Ws+H as Diagnostic Instrument</h3>
            <table className="framework-table">
              <thead><tr><th>5Ws+H</th><th>Wartofsky Level</th><th>S/E/E/D Phase</th><th>What It Diagnoses</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Who / What / Where</span></td><td>Primary artifact</td><td>Study</td><td>Objective, verifiable conditions</td></tr>
                <tr><td><span className="fw-label">When / How</span></td><td>Secondary artifact</td><td>Explore</td><td>Sequences and processes</td></tr>
                <tr><td><span className="fw-label">Why</span></td><td>Tertiary artifact</td><td>Evaluate</td><td>The permission architecture</td></tr>
              </tbody>
            </table>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Vygotsky S\u2192X\u2192R", "Walter Benjamin", "Lawrence Lessig", "Baudrillard", "Lyotard", "Umberto Eco", "Foucault"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Primary Viewing</div>
              <ul className="reading-list">
                <li>The World at War, Episode 1: &ldquo;A New Germany, 1933&ndash;1939&rdquo; (Thames/ITV, 1973)</li>
                <li>The World at War, Episode 26: &ldquo;Remember&rdquo; (Thames/ITV, 1973)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Final Deliverables</div>
              <ul className="deliverables-list">
                <li><span className="deliverable-weight">10%</span>Positional Statement (individual, 300&ndash;400 words)</li>
                <li><span className="deliverable-weight">20%</span>5Ws+H Diagnostic Grid (pair)</li>
                <li><span className="deliverable-weight">30%</span>Episode Review Audio Essay + Production Notes (pair, 8&ndash;12 min)</li>
                <li><span className="deliverable-weight">30%</span>Music Composition + Artistic Statement (pair, 4&ndash;8 min)</li>
                <li><span className="deliverable-weight">10%</span>Peer Review Response</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC4 Certifies</div>
              <ul className="outcomes-list">
                <li>Diagnose the alienation mechanic in institutional mediation contexts</li>
                <li>Apply Vygotsky&rsquo;s S&rarr;X&rarr;R model to institutional analysis</li>
                <li>Apply 5Ws+H as diagnostic instrument at Wartofsky&rsquo;s three levels</li>
                <li>Inhabit and analyze an institutional subject position analytically</li>
                <li>Produce critical audio work integrating archival material under fair use</li>
                <li>Distinguish jurisdictional frameworks: US work-for-hire vs. moral rights tradition</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc5",
        number: 5,
        code: "MC5",
        stackLabel: "Resources Certificate",
        title: <>Institutions, Installations<br />and Archival Systems</>,
        subtitle: "Re-Visualization, Museum Mediation, and Resource Coordination",
        badges: ["3.0 CEUs", "6 weeks", "Teams of 3\u20134", "Spatial Design"],
        navLabel: "MC5 \u2014 Spatial Mediation",
        mainContent: (
          <>
            <p className="lead-p">MC4 asked how individuals work with archival voice. MC5 asks how institutions coordinate archives, space, technology, and public authority.</p>
            <h3>The Museum as Discourse Machine</h3>
            <p>Before photography, art existed as cult value &mdash; objects of sacred or aristocratic significance. When the French Revolution confiscated the Palais du Louvre and declared its holdings the property of the French nation, the museum was born &mdash; not from a neutral desire to educate the public, but from a specific political act.</p>

            <div className="pull-quote"><p>Foucault: the museum does not simply display history. It produces history as a historical object that can be encountered, interpreted, and integrated into national memory.</p></div>

            <h3>The Hyperreality Risk</h3>
            <p>Umberto Eco identified the logic of hyperreality in simulations: the reconstruction exceeds the archive. Emotional intensity outruns documentation. For institutions handling WWII material, this risk is not hypothetical.</p>

            <h3>The Dual Museum Assignment</h3>
            <p>Students design a digital installation for both the Canadian War Museum (Ottawa) and the National WWII Museum (New Orleans) &mdash; same archival content, two different institutional contexts.</p>

            <div className="contradiction-grid">
              <div className="contradiction-row">
                <div className="contradiction-cell font-semibold text-xs">Dimension</div>
                <div className="contradiction-cell font-semibold text-xs">Canadian War Museum</div>
                <div className="contradiction-cell font-semibold text-xs">National WWII Museum</div>
              </div>
              {[
                ["Funding Model", "Public funding \u2014 interpretive autonomy protected", "Philanthropic dependence \u2014 donor visibility shapes narrative"],
                ["Rights Tradition", "Moral rights \u2014 author\u2019s ongoing relationship to work", "Work-for-hire doctrine \u2014 rights fully transferable at point of sale"],
                ["Memory Culture", "Ambivalent, mediating \u2014 sacrifice within larger Allied effort", "Triumphalist, commemorative \u2014 American liberation narrative"],
                ["Design Norm", "Restraint, historical gravity, archival fidelity", "Immersive experience, emotional intensity, spectacle"],
              ].map(([dim, can, us]) => (
                <div key={dim} className="contradiction-row">
                  <div className="contradiction-cell font-semibold text-xs">{dim}</div>
                  <div className="contradiction-cell">{can}</div>
                  <div className="contradiction-cell">{us}</div>
                </div>
              ))}
            </div>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Foucault", "Walter Benjamin", "Umberto Eco", "Roland Barthes", "Engestr\u00f6m (partial)", "Baudrillard"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Final Deliverables</div>
              <ul className="deliverables-list">
                <li><span className="deliverable-weight">20%</span>Institutional Comparative Brief (5&ndash;7 pages)</li>
                <li><span className="deliverable-weight">20%</span>Historical Re-Visualization Package (annotated)</li>
                <li><span className="deliverable-weight">30%</span>Dual Installation Pre-Visualization Deck (15&ndash;20 slides)</li>
                <li><span className="deliverable-weight">10%</span>Trivia Corpus + Competition Space Pre-Viz</li>
                <li><span className="deliverable-weight">20%</span>Team Reflection (1500&ndash;2000 words)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC5 Certifies</div>
              <ul className="outcomes-list">
                <li>Translate archival audio into historically grounded visual-spatial design</li>
                <li>Distinguish imaginative re-visualization from spectacle (Eco&rsquo;s hyperreality discipline)</li>
                <li>Analyze institutional constraints shaping installation design across national contexts</li>
                <li>Apply the museum-as-discourse-machine framework to design decisions</li>
                <li>Compare Canadian and American institutional governance frameworks</li>
                <li>Identify unresolved systemic tensions as preparation for Change Laboratory</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc6",
        number: 6,
        code: "MC6",
        stackLabel: "Resources Certificate",
        title: <>Institutional System Diagnosis<br />and Change Laboratory</>,
        subtitle: "Cross-National Activity System Mapping and Governance Under Intervention",
        badges: ["3.0 CEUs", "6\u20138 weeks", "Teams (same as MC5)", "Engestr\u00f6m Full System"],
        navLabel: "MC6 \u2014 Change Laboratory",
        mainContent: (
          <>
            <p className="lead-p">MC6 asks the hardest question of Stack 2: if the MC5 installation and trivia corpus were formally introduced into each museum&rsquo;s operational system, what would break?</p>

            <h3>The Full Engestr&ouml;m Activity System</h3>
            <table className="framework-table">
              <thead><tr><th>CHAT Node</th><th>5Ws+H</th><th>Economic Logic</th><th>In Museum Context</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Subject</span></td><td>Who (acts)</td><td>&mdash;</td><td>Curators, technologists, educators, administrators</td></tr>
                <tr><td><span className="fw-label">Tools</span></td><td>How</td><td>&mdash;</td><td>Digital mediation technologies, archives, pre-visualization systems</td></tr>
                <tr><td><span className="fw-label">Object &rarr; Outcome</span></td><td>What / Why</td><td>&mdash;</td><td>Institutional transformation goal; the Installation as intervention</td></tr>
                <tr><td><span className="fw-label">Rules / Exchange</span></td><td>Where</td><td>Market/Legal</td><td>Funding constraints, licensing, exhibition standards</td></tr>
                <tr><td><span className="fw-label">Community of Practice</span></td><td>What (collective)</td><td>Consumerist</td><td>Museums, historians, archivists, donors, visitors</td></tr>
                <tr><td><span className="fw-label">Division of Labour</span></td><td>Who (distributed)</td><td>Socialist</td><td>Who does what; whether effort flows toward community benefit or hierarchy</td></tr>
              </tbody>
            </table>

            <h3>The Change Laboratory</h3>
            <div className="register-flow">
              {[
                { mod: "Phase 1", focus: "Mirror", move: "Surface the tensions. The institutional system reveals its assumptions by resisting the previsualization." },
                { mod: "Phase 2\u20133", focus: "Analyze & Model", move: "Trace institutional roots. Propose reconfigurations using activity system maps as mediating representations." },
                { mod: "Phase 4\u20135", focus: "Stress Test & Consolidate", move: "Test against four economic logics. Determine whether intervention stabilizes or destabilizes institutional legitimacy." },
              ].map(p => (
                <div key={p.mod} className="register-cell">
                  <div className="register-cell-mod">{p.mod}</div>
                  <div className="register-cell-focus">{p.focus}</div>
                  <div className="register-cell-move">{p.move}</div>
                </div>
              ))}
            </div>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Engestr\u00f6m (full CHAT)", "Vygotsky (double stimulation)", "Habermas", "Lawrence Lessig", "Foucault", "Umberto Eco"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Final Deliverables</div>
              <ul className="deliverables-list">
                <li><span className="deliverable-weight">25%</span>Dual Activity System Maps (visual + annotated)</li>
                <li><span className="deliverable-weight">30%</span>Contradiction Analysis Report (1500&ndash;2000 words)</li>
                <li><span className="deliverable-weight">25%</span>Change Laboratory Modeling Summary</li>
                <li><span className="deliverable-weight">20%</span>Governance &amp; AI Position Statement</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC6 Certifies</div>
              <ul className="outcomes-list">
                <li>Map institutional activity systems using Engestr&ouml;m&rsquo;s full six-node model</li>
                <li>Identify, categorize, and communicate systemic contradictions</li>
                <li>Apply Change Laboratory as structured rehearsal space for institutional intervention</li>
                <li>Analyze economic logics across CHAT sub-triangles in real institutions</li>
                <li>Reason about governance under technological mediation</li>
                <li>Assess AI epistemologically &mdash; what it makes invisible, not only what it enables</li>
              </ul>
            </div>
            <div className="sidebar-card bg-ink !border-ink">
              <div className="sidebar-card-label !text-[#3a3830]">Prepares You For</div>
              <h4 className="text-parchment text-[16px] mb-2">Stack 3 &mdash; Values Certificate</h4>
              <p className="text-parchment/60 text-[16px]">Stack 3 moves from diagnosis to construction. Students who leave MC6 knowing precisely what the institutional system cannot accommodate &mdash; and why &mdash; are ready to design systems that can.</p>
            </div>
          </>
        ),
      },
    ],
    cascades: [
      { text: "MC4 \u2192 MC5: Archival voice established. Now: where does it live institutionally?" },
      { text: "MC5 \u2192 MC6: Installation designed. Now: what breaks when it enters the real system?" },
    ],
  };
}

function valuesModules(): StackModules {
  return {
    modules: [
      {
        id: "mc7",
        number: 7,
        code: "MC7",
        stackLabel: "Values Certificate",
        title: <>AI-Augmented Design<br />Studio Orchestration</>,
        subtitle: "From Institutional Diagnosis to Systemic Orchestration",
        badges: ["Team", "Three-Skill Architecture", "Rule of Seven"],
        navLabel: "MC7 \u2014 Studio Orchestration",
        mainContent: (
          <>
            <p className="lead-p">MC7 marks the transition from institutional diagnosis to systemic orchestration. Students formally design an AI-augmented branding and activation studio capable of coordinating cultural production, institutional resources, sponsor ecosystems, and public-facing value propositions simultaneously.</p>

            <h3>Opening Analytical Unit: Berger, Episode 2</h3>
            <div className="pull-quote"><p>In whatever ecosystem you are designing &mdash; who is the spectator-owner? Who is arranged for their gaze? And do you know you are making that choice?</p></div>

            <h3>The Studio Role Architecture</h3>
            <div className="role-grid">
              {[
                { tag: "PRIMARY \u00b7 Resources", name: "Hacker", layer: "Resource Architect", desc: "Builds the instruments of the system. Develops technological infrastructure, configures AI tools, constructs digital and media assets." },
                { tag: "SECONDARY \u00b7 Processes", name: "Hipster", layer: "Process Designer", desc: "Arranges and assembles the instruments. Designs workflows and experience sequences, transforms raw tools into coordinated outputs." },
                { tag: "TERTIARY \u00b7 Values", name: "Hustler", layer: "Value Orchestrator", desc: "Conducts the performance. Frames value propositions across stakeholders, negotiates sponsorship alignment, stewards legitimacy and public trust." },
              ].map(r => (
                <div key={r.name} className="role-cell">
                  <div className="role-tag">{r.tag}</div>
                  <div className="role-name">{r.name}</div>
                  <div className="role-layer">{r.layer}</div>
                  <div className="role-desc">{r.desc}</div>
                </div>
              ))}
            </div>

            <h3>Three-Skill Architecture</h3>
            <table className="framework-table">
              <thead><tr><th>Role</th><th>Skill Category</th><th>Wartofsky Level</th><th>S/E/E/D Failure Mode</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Hacker</span></td><td>Category 1 &mdash; Asset Creation</td><td>Primary / Resources</td><td>Visible and concrete &mdash; wrong format, wrong dimensions.</td></tr>
                <tr><td><span className="fw-label">Hipster</span></td><td>Category 2 &mdash; Workflow Automation</td><td>Secondary / Processes</td><td>Process-level &mdash; wrong step sequence, skipped governance checkpoint.</td></tr>
                <tr><td><span className="fw-label">Hustler</span></td><td>Category 3 &mdash; MCP / Governance</td><td>Tertiary / Values</td><td>Governance-level, potentially invisible until pressure.</td></tr>
              </tbody>
            </table>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["John Berger", "Miller\u2019s Law", "Christensen RPV", "Wartofsky", "Umberto Eco", "Engestr\u00f6m", "Autopoiesis"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Required Viewing</div>
              <ul className="reading-list">
                <li>Berger, Ways of Seeing &mdash; Episode 2 (BBC, 1973)</li>
                <li>The Wonderful, Horrible Life of Leni Riefenstahl (1993)</li>
                <li>Dementia (1955) / Daughter of Horror (1957)</li>
                <li>The Last Waltz (1978, dir. Scorsese)</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC7 Certifies</div>
              <ul className="outcomes-list">
                <li>Apply Berger&rsquo;s spectator-owner framework to cultural production system design</li>
                <li>Design a governance-aware AI-augmented studio using RPV and Wartofsky</li>
                <li>Architect hybrid human&ndash;AI workflows across Hacker/Hipster/Hustler roles</li>
                <li>Apply Miller&rsquo;s Rule of Seven as perceptual architecture constraint</li>
                <li>Evaluate system coherence through Viability, Feasibility, and Desirability</li>
                <li>Identify the boundary object between intersecting activity systems</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc8",
        number: 8,
        code: "MC8",
        stackLabel: "Values Certificate",
        title: <>Licensing Architecture,<br />Innovation, and Trust Calibration</>,
        subtitle: "Permission as Orchestrated Constraint",
        badges: ["Team", "PSL Master Framework", "Benjamin\u2019s Test"],
        navLabel: "MC8 \u2014 Licensing Architecture",
        mainContent: (
          <>
            <p className="lead-p">MC8 formalizes the governance layer of orchestration. If MC7 required teams to design a studio capable of coordinating shared value, MC8 asks: who is authorized to act within that system &mdash; and under what conditions?</p>

            <h3>The PSL Master Framework</h3>
            <table className="psl-table">
              <thead><tr><th>Wartofsky</th><th>RPV</th><th>Economic Form</th><th>Benjamin</th><th>Functional Expression</th></tr></thead>
              <tbody>
                <tr className="psl-row-p"><td>Primary Artifact</td><td><span className="psl-accent">Resources</span></td><td><strong>Products</strong></td><td>Exhibition Value</td><td>Tangible asset or tool; the technological layer. Ownership is possession-based.</td></tr>
                <tr className="psl-row-s"><td>Secondary Artifact</td><td><span className="psl-accent">Processes</span></td><td><strong>Services</strong></td><td>Cult Value</td><td>Structured activity performed; the social/relational layer. The irreproducible encounter.</td></tr>
                <tr className="psl-row-l"><td className="text-parchment/60">Tertiary Artifact</td><td><span className="psl-accent-dark">Values</span></td><td className="text-parchment font-bold">Licences</td><td className="text-parchment/60">Economic/Governance</td><td className="text-parchment/70">Permission structure; the governance layer. Determines whose exhibition value circulates and in whose interest.</td></tr>
              </tbody>
            </table>

            <h3>Comparative Licensing Models</h3>
            <table className="framework-table">
              <thead><tr><th>Model</th><th>Control</th><th>Permission</th><th>AI Destabilization</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">Proprietary</span></td><td>Centralized in originating institution</td><td>Explicit, negotiated, fee-based</td><td>AI reproduces methodology without license</td></tr>
                <tr><td><span className="fw-label">Transactional</span></td><td>Distributed by statutory mechanism</td><td>Automatic per reproduction event</td><td>AI-generated covers collapse trigger, attribution, and &ldquo;original&rdquo;</td></tr>
                <tr><td><span className="fw-label">Graduated Open</span></td><td>Distributed by design; creator signals intent</td><td>Built into the object; users self-govern</td><td>AI training on CC corpus &mdash; is the output a derivative?</td></tr>
              </tbody>
            </table>

            <h3>Benjamin&rsquo;s Test</h3>
            <p>Benjamin wrote his essay to be fundamentally unusable for fascist purposes. The permission architecture students design in MC8 is their own tertiary artifact. It encodes, at the governance layer, whose interests are served, whose voice is protected, and whose imagination is foreclosed.</p>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Key Theoretical Figures</div>
              <div>
                {["Walter Benjamin", "John Berger (Ep.3)", "John Willinsky", "Katharina Pistor", "Thea Lim", "Lokesh Vyas", "Owen Chapman"].map(t => <span key={t} className="theory-pill">{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Required Viewing</div>
              <ul className="reading-list"><li>Berger, Ways of Seeing &mdash; Episode 3 (BBC, 1973)</li></ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC8 Certifies</div>
              <ul className="outcomes-list">
                <li>Apply the PSL framework to map assets across three economic layers</li>
                <li>Analyze the thought police dimension of the tertiary/licence layer</li>
                <li>Evaluate licensing models against AI-mediated governance challenges</li>
                <li>Design permission architecture that encodes stated values structurally</li>
                <li>Apply Benjamin&rsquo;s test reflexively to their own governance architecture</li>
                <li>Map revenue flows transparently across all stakeholder positions</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: "mc9",
        number: 9,
        code: "MC9",
        stackLabel: "Values Certificate \u00b7 Capstone",
        title: <>Boundary Object Pitch<br />and Governance Performance</>,
        subtitle: "Shared Values in Public Performance",
        badges: ["Team", "External Reviewers", "Live Defence", "Capstone"],
        navLabel: "MC9 \u2014 Capstone Performance",
        mainContent: (
          <>
            <p className="lead-p">MC9 is the culminating performance of the ARIES Certificate. Students publicly present and defend their AI-augmented design studio architecture (MC7) and licensing/transparency framework (MC8) through a shared-value boundary object: a fully designed charity fundraiser activation concept of the team&rsquo;s own choosing.</p>

            <h3>Stack Completion</h3>
            <div className="three-panel">
              {[
                { label: "Stack 1 \u2014 Processes", title: "You learned to produce", body: "YOU\u00ae personal brand. Cultural artifact construction. Framing literacy. Individual practitioner identity established before institutional complexity entered." },
                { label: "Stack 2 \u2014 Resources", title: "You learned to diagnose", body: "Contradiction mapping. Change Laboratory. Institutional system analysis. Knowing precisely what institutional systems cannot accommodate \u2014 and why." },
                { label: "Stack 3 \u2014 Values", title: "You learned to orchestrate", body: "Studio architecture, permission design, shared-value governance. MC9 proves whether you can perform. Systemic coherence, not aesthetic persuasion." },
              ].map(p => (
                <div key={p.label} className="panel-cell">
                  <div className="panel-label">{p.label}</div>
                  <div className="panel-title">{p.title}</div>
                  <div className="panel-body">{p.body}</div>
                </div>
              ))}
            </div>

            <h3>The Pro Forma Financial Architecture</h3>
            <table className="framework-table">
              <thead><tr><th>Statement</th><th>PSL Layer</th><th>Key Architectural Question</th></tr></thead>
              <tbody>
                <tr><td><span className="fw-label">1 &mdash; Event P&amp;L</span></td><td>All three layers</td><td>Is the event surplus / breakeven / deficit a governance choice &mdash; or a miscalculation?</td></tr>
                <tr><td><span className="fw-label">2 &mdash; Donation Flow</span></td><td>Licences layer</td><td>Is the charity genuinely central &mdash; or aesthetically central and financially peripheral?</td></tr>
                <tr><td><span className="fw-label">3 &mdash; Sponsor Value (&times;7)</span></td><td>Licences + Services</td><td>Does each sponsor statement show genuine shared value &mdash; or value extraction with charitable alibi?</td></tr>
                <tr><td><span className="fw-label">4 &mdash; Charity Impact</span></td><td>Services + Licences</td><td>Economic, reputational, and community value generated.</td></tr>
                <tr><td><span className="fw-label">5 &mdash; Studio Sustainability</span></td><td>All three layers</td><td>Do resources regenerate? Do processes stabilize? Does trust compound?</td></tr>
                <tr><td><span className="fw-label">6 &mdash; Shared Value Reconciliation</span></td><td>Values layer</td><td>One statement all stakeholders can read from their own position.</td></tr>
              </tbody>
            </table>

            <h3>The Autopoietic Test</h3>
            <div className="dark-card">
              <div className="dark-card-label">Final Evaluation Question</div>
              <div className="dark-card-title">If launched, would this studio reproduce itself?</div>
              <p className="dark-card-body">Do resources regenerate &mdash; can the studio fund its next activation from this one? Do processes stabilize &mdash; can the workflow be repeated without rebuilding from scratch? Do stakeholders re-engage &mdash; would sponsors, the cause, and the venue return? Does trust compound &mdash; does the activation leave all stakeholders more committed than before?</p>
            </div>
          </>
        ),
        sidebar: (
          <>
            <div className="sidebar-card">
              <div className="sidebar-card-label">Evaluation Criteria</div>
              <ul className="deliverables-list">
                <li><span className="deliverable-weight">25%</span>Structural coherence &mdash; RPV/PSL alignment and pro forma reconciliation</li>
                <li><span className="deliverable-weight">20%</span>Orchestration clarity &mdash; role differentiation, human/AI governance</li>
                <li><span className="deliverable-weight">20%</span>Institutional and community fit &mdash; cause centrality, stakeholder alignment</li>
                <li><span className="deliverable-weight">20%</span>Licensing and transparency integrity &mdash; permission architecture defence</li>
                <li><span className="deliverable-weight">15%</span>Resilience under critique &mdash; systemic absorption, legitimacy under pressure</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-label">What MC9 Certifies</div>
              <ul className="outcomes-list">
                <li>Present a governance-aware studio architecture with systemic clarity under external scrutiny</li>
                <li>Defend a pro forma shared-value financial architecture across multiple stakeholder positions</li>
                <li>Demonstrate RPV alignment in real-time public articulation</li>
                <li>Respond coherently to institutional critique without losing systemic coherence</li>
                <li>Distinguish legitimacy from compliance in live dialogue</li>
                <li>Demonstrate the autopoietic test: the studio would sustain itself if launched</li>
              </ul>
            </div>
            <div className="sidebar-card bg-values !border-values">
              <div className="sidebar-card-label !text-white/50">Integrated Credential</div>
              <div className="font-serif text-xl font-light text-white mb-2.5 leading-tight">ARIES Certificate in Cultural Production &amp; Platform Economics</div>
              <p className="text-[16px] text-white/70 m-0 max-w-full leading-relaxed">All nine microcredentials. The full PRV arc. MC9 completion earns the integrated ARIES Certificate.</p>
            </div>
          </>
        ),
      },
    ],
    cascades: [
      { text: "MC7 \u2192 MC8: Studio built. Now: formalize who is authorized to act within it." },
      { text: "MC8 \u2192 MC9: The score is formalized. Now: perform and defend it live." },
    ],
  };
}

const stackModuleMap: Record<StackId, () => StackModules> = {
  processes: processesModules,
  resources: resourcesModules,
  values: valuesModules,
};

export function getStackModules(stackId: StackId): StackModules {
  return stackModuleMap[stackId]();
}
