export type StackId = "processes" | "resources" | "values";

export interface StackMeta {
  id: StackId;
  number: number;
  moduleRange: string;
  format: string;
  credits: string;
  rpv: string;
  dialectical: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  activeClass: string;
  moduleIds: string[];
}

export const stacks: Record<StackId, StackMeta> = {
  processes: {
    id: "processes",
    number: 1,
    moduleRange: "MC1\u2013MC3",
    format: "Individual / Self-paced",
    credits: "7.5 CEUs total",
    rpv: "Processes",
    dialectical: "Thesis",
    letter: "P",
    title: "Processes\nCertificate",
    subtitle: "Thesis: Identity, Practice, and Cultural Self-Articulation",
    description:
      "How cultural artifacts are constructed, framed, and set into motion \u2014 and what it means to be the practitioner who does that. Stack 1 builds the individual practitioner anchor before institutional complexity is encountered. You must know what you are before you can diagnose what institutions do to you.",
    activeClass: "active-p",
    moduleIds: ["mc1", "mc2", "mc3"],
  },
  resources: {
    id: "resources",
    number: 2,
    moduleRange: "MC4\u2013MC6",
    format: "Paired \u2192 Team (assigned)",
    credits: "9.0 CEUs total",
    rpv: "Resources",
    dialectical: "Antithesis",
    letter: "R",
    title: "Resources\nCertificate",
    subtitle: "Antithesis: Institutional Systems, Archival Authority, Structural Constraint",
    description:
      "Within what institutional infrastructures do cultural artifacts circulate \u2014 and who controls the conditions of that circulation? Stack 2 shifts the same analytical muscle developed in Stack 1 into a new register: from designing cultural systems to diagnosing institutional ones already in operation.",
    activeClass: "active-r",
    moduleIds: ["mc4", "mc5", "mc6"],
  },
  values: {
    id: "values",
    number: 3,
    moduleRange: "MC7\u2013MC9",
    format: "Team (student-formed)",
    credits: "9.0 CEUs total",
    rpv: "Values",
    dialectical: "Synthesis",
    letter: "V",
    title: "Values\nCertificate",
    subtitle: "Synthesis: Orchestration, Governance, and Shared Value in Public Performance",
    description:
      "How a value-generating ecosystem is designed to sustain itself \u2014 and how that design is defended before external scrutiny. Stack 3 synthesizes production (Stack 1) and diagnosis (Stack 2) into governance-capable orchestration. MC9 proves whether you can perform.",
    activeClass: "active-v",
    moduleIds: ["mc7", "mc8", "mc9"],
  },
};

export interface StackCard {
  id: StackId;
  modules: string;
  name: string;
  credential: string;
  description: string;
  moduleList: { code: string; name: string }[];
}

export const stackCards: StackCard[] = [
  {
    id: "processes",
    modules: "MC1 \u2013 MC3 \u00b7 Individual",
    name: "Processes",
    credential: "Processes Certificate",
    description:
      "How cultural artifacts are constructed, framed, and set into motion \u2014 and what it means to be the practitioner who does that. Builds individual analytical and production capacity before institutional complexity is encountered.",
    moduleList: [
      { code: "MC1", name: "Persona, Voice and Cultural Identity" },
      { code: "MC2", name: "Cultural Systems, Icons and Experiential Design" },
      { code: "MC3", name: "Cultural Product Circulation and Interaction Design" },
    ],
  },
  {
    id: "resources",
    modules: "MC4 \u2013 MC6 \u00b7 Paired",
    name: "Resources",
    credential: "Resources Certificate",
    description:
      "Within what institutional infrastructures cultural artifacts circulate \u2014 and who controls the conditions of that circulation. Students analyze institutional systems already in operation rather than building from scratch.",
    moduleList: [
      { code: "MC4", name: "Institutional Mediation and Archival Voice" },
      { code: "MC5", name: "Spatial Mediation and Institutional Authority" },
      { code: "MC6", name: "Systems Mapping and Change Laboratory" },
    ],
  },
  {
    id: "values",
    modules: "MC7 \u2013 MC9 \u00b7 Team",
    name: "Values",
    credential: "Values Certificate",
    description:
      "How a value-generating ecosystem can be designed to remain innovative, trustworthy, and sustainable under AI mediation and regulatory constraint. The synthesis that only becomes possible once practitioner and institution have both been fully inhabited.",
    moduleList: [
      { code: "MC7", name: "AI-Augmented Design Studio Orchestration" },
      { code: "MC8", name: "Licensing Architecture, Innovation and Trust Calibration" },
      { code: "MC9", name: "Boundary Object Pitch and Governance Performance" },
    ],
  },
];

export interface StackContinues {
  label: string;
  path: string;
  linkText: string;
  description: string;
}

export const stackContinues: Record<StackId, StackContinues[]> = {
  processes: [
    {
      label: "Next Stack",
      path: "/resources",
      linkText: "Resources Certificate \u2192",
      description: "Stack 1 ends with a complete methodological toolkit: artifact theory, ARIES, S/E/E/D, four-framework convergence, and calibrated AI research practice. MC4 applies this toolkit to institutional systems the student has not yet had to contend with. S/E/E/D shifts register \u2014 from design method to diagnostic lens. The Crowe/Curtis case study extends the Thompson/Hayes comparative logic to institutional and jurisdictional scale.",
    },
    {
      label: "Integrated Credential",
      path: "/",
      linkText: "ARIES Certificate \u2192",
      description: "All nine modules. The full PRV arc: Processes (thesis) \u2192 Resources (antithesis) \u2192 Values (synthesis). MC9 proves whether you can perform under live scrutiny.",
    },
  ],
  resources: [
    {
      label: "Previous Stack",
      path: "/processes",
      linkText: "\u2190 Processes Certificate",
      description: "MC1\u2013MC3 built the individual practitioner anchor \u2014 persona, experiential design methodology, and AI-augmented circulation. Stack 2 diagnosed what institutions do to all of that.",
    },
    {
      label: "Next Stack",
      path: "/values",
      linkText: "Values Certificate \u2192",
      description: "MC7\u2013MC9 moves from institutional diagnosis to ecosystem construction. Students design governance-capable systems for shared value creation \u2014 and defend them live before external reviewers in MC9.",
    },
  ],
  values: [
    {
      label: "Previous Stack",
      path: "/resources",
      linkText: "\u2190 Resources Certificate",
      description: "MC4\u2013MC6 taught you to diagnose institutional systems under intervention. Change Laboratory identified precisely what the system cannot accommodate. Stack 3 builds systems that can.",
    },
    {
      label: "Program Overview",
      path: "/",
      linkText: "ARIES Overview \u2192",
      description: "The full program architecture \u2014 theoretical spine, five original contributions, institutional pathway, and the complete PRV dialectic from thesis through antithesis to synthesis.",
    },
  ],
};

export interface StackIntroSection {
  leftColumn: { heading: string; content: string; isLead?: boolean }[];
  rightColumn: { heading: string; content: string; isLead?: boolean }[];
}

export const stackIntros: Record<StackId, StackIntroSection> = {
  processes: {
    leftColumn: [
      { heading: "From Consumption to Construction", content: "Most students in the creative industries encounter media as consumers. Stack 1 requires them to become cultural creators \u2014 and analysts of their own practice.", isLead: true },
      { heading: "", content: "Stack 1 asks: How are cultural artifacts constructed, assembled, and set into motion in the first place? And what does it mean to be the person who does that? Students move from interpretation to creation to distribution \u2014 examining narrative framing and myth formation, persona construction across media eras, tool influence on design thinking, experiential coordination, cultural circulation, and AI as a framing machine that requires critical evaluation." },
      { heading: "Tools as Perceptual Frames", content: "The core insight that underpins the entire certificate is introduced here: tools do not simply help us act \u2014 tools shape what we perceive as possible. A podcast platform, a spatial design tool, and an AI assistant are all Wartofsky tertiary artifacts. They don\u2019t just help you do things. They shape what you think is worth doing." },
      { heading: "", content: "Stack 1 traces this principle across three registers: MC1 examines audio production tools and media platforms as framing devices. MC2 examines pre-visualization tools as tertiary artifacts \u2014 the tool you use to imagine an event shapes what kind of event you imagine. MC3 examines AI research tools as tertiary artifacts \u2014 outputs carry the framing structures of the training data, and students evaluate those outputs against primary sources to discover the pattern." },
    ],
    rightColumn: [
      { heading: "The Time Capsule", content: "MC1 and MC2 operate from a 2007 vantage point \u2014 the moment Moggridge published Designing Interactions, just before podcasting, social media, and AI restructured cultural production. Students design as though in a pre-platform design school: Moggridge\u2019s textbook on the desk, Benjamin\u2019s exhibition/cult value distinction in hand, algorithmic mediation not yet naturalized." },
      { heading: "", content: "MC3 shifts into the present. Tours happen now, in platform-era conditions. But the temporal awareness built in MC1 and MC2 doesn\u2019t disappear \u2014 it becomes the analytical lens through which students evaluate what platform logic has done to cultural circulation, and where human curatorial authority still operates." },
      { heading: "", content: "The time capsule is not nostalgia. It is a methodological instrument for making the present visible." },
      { heading: "The Analytical Pattern", content: "The Thompson/Hayes comparative case study in MC1 is not incidental to the program. It is a demonstration of an analytical logic \u2014 compare two practitioners across different conditions, identify the structural variable that explains the difference \u2014 that recurs in MC4 (Crowe vs. Curtis) and throughout Stack 2 at higher institutional complexity. Students who complete MC1 will recognize the structure when they encounter it again." },
    ],
  },
  resources: {
    leftColumn: [
      { heading: "From Individual Voice to Institutional Context", content: "Stack 1 foregrounded persona and media construction. Stack 2 introduces institutional mediation. Students move from individual authorship, expressive framing, and media skill development \u2014 to archival access, curatorial constraints, regulatory context, funding structures, cross-national memory politics, and organizational mission alignment.", isLead: true },
      { heading: "", content: "Creative production is never free-floating. It is embedded in structured environments. What Stack 2 makes visible is what those environments do to the practitioner \u2014 and what the practitioner can do back." },
      { heading: "Resources as Structured Access", content: "In RPV terms, Stack 2 focuses on what resources exist, who controls them, who may access them, under what rules, and within which communities of practice. Resources here means archival materials, institutional legitimacy, venue space, exhibition infrastructure, national narratives, donor expectations, and technological installations. Access to resources is governed by rules of engagement and exchange. Institutional design shapes what can be produced \u2014 and what cannot." },
    ],
    rightColumn: [
      { heading: "Contradiction Literacy", content: "Stack 2 names a specific competence: contradiction literacy. Students learn to identify structural tensions between engagement and gravitas, donor influence and curatorial neutrality, immersive technology and archival fidelity, national narrative and transnational history, educational mission and spectacle. These tensions are not failures. They are structural features of institutional life." },
      { heading: "Visualization as Institutional Negotiation", content: "In Stack 2, visualization tools are not aesthetic devices \u2014 they are institutional negotiation instruments. Students use previsualization to reveal potential tensions before implementation, model how installations alter visitor activity systems, anticipate regulatory friction, and surface cross-system contradictions. Previsualization becomes a second stimulus: a way of seeing institutional constraints before material intervention. This is structural rehearsal, not spectacle." },
      { heading: "", content: "Stack 2 strengthens structural awareness before students attempt orchestration in Stack 3. Before orchestration comes diagnosis." },
    ],
  },
  values: {
    leftColumn: [
      { heading: "From Analysis to Orchestration", content: "Stack 1 built practitioner identity. Stack 2 diagnosed institutional systems. Stack 3 asks: can you design a governed ecosystem that produces, distributes, and sustains value \u2014 and defend that design under live scrutiny?", isLead: true },
      { heading: "", content: "The shift from Stack 2 to Stack 3 is from diagnosis to construction. Students are no longer analyzing existing systems. They are building new ones \u2014 with explicit governance architectures, AI integration, licensing frameworks, and financial models. The capstone (MC9) requires them to defend the entire construction before external reviewers." },
      { heading: "RPV as System, Not Checklist", content: "In Stack 3, RPV operates as a fully coordinated system. Resources (what the studio has access to), Processes (how it operates), and Values (what it will and will not do) must be designed as interdependent elements of a self-sustaining architecture. A studio that has resources and processes but no values is a production house without governance. A studio that has values but no processes is a mission statement without capacity." },
    ],
    rightColumn: [
      { heading: "The Orchestration Metaphor", content: "MC7 uses orchestration deliberately. An orchestrator does not play every instrument. They design the conditions under which each instrument contributes to a coherent whole. The studio lead in MC7 designs role differentiation, AI integration boundaries, value proposition architecture, and governance protocols \u2014 then coordinates them into a system that can produce under real constraints." },
      { heading: "The Central Question", content: "Stack 3\u2019s central question is Benjamin\u2019s test applied to the student\u2019s own design: is what you have built \u201cthe aestheticization of politics\u201d (a system that looks legitimate but concentrates power) or \u201cthe politicization of art\u201d (a system that genuinely distributes governance and sustains shared value)?" },
      { heading: "", content: "MC9 is where the answer becomes public. The boundary object pitch is not a presentation. It is a governance performance \u2014 a live demonstration that the system you have designed can withstand scrutiny from people who have no investment in your success." },
    ],
  },
};
