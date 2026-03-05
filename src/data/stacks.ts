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
      description: "MC4\u2013MC6 escalates from practitioner analysis to institutional diagnosis. S/E/E/D shifts register. The Crowe/Curtis case study extends the Thompson/Hayes comparative method to institutional and jurisdictional scale.",
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
