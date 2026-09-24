export const firm = {
  name: "Advocate Tarun Mishra and Associates",
  shortName: "ATMA+",
  displayName: {
    first: "ADVOCATE TARUN MISHRA",
    second: "& ASSOCIATES",
  },
  domain: "Advtarunmishra.com",
  descriptor: "ADVOCATES & LEGAL PRACTITIONERS",
  barCouncilReg: "R/3207/2010",
} as const;

export interface CounselProfile {
  id: string;
  name: string;
  role: string;
  qualifications?: string;
  registration?: string;
  profileText: string[];
  practiceAreas: string[];
}

export const leadCounsel: CounselProfile = {
  id: "tarun-kumar-mishra",
  name: "Adv. Tarun Kumar Mishra",
  role: "LEAD COUNSEL",
  qualifications: "B.Sc., LL.B.",
  registration: "Bar Council Registration: R/3207/2010",
  profileText: [
    "Adv. Tarun Kumar Mishra is the Lead Counsel at Advocate Tarun Mishra & Associates, a legal practice established in 2010 and based in Jaipur, Rajasthan.",
    "His practice is structured around legal research, strategic analysis, advocacy and representation across matters involving constitutional and administrative law, regulatory issues, commercial disputes, government procurement, criminal law and appellate proceedings."
  ],
  practiceAreas: ["CONST", "PHARMA", "PROC", "CIV/COMM", "ADR", "APPL"],
};

export const associates: CounselProfile[] = [
  { 
    id: "j-p-bhardwaj",
    name: "Adv. J. P. Bhardwaj", 
    role: "ASSOCIATE ADVOCATE",
    profileText: ["Information regarding professional experience, educational qualifications, and practice areas is currently being updated and will be published upon verification."],
    practiceAreas: []
  },
  { 
    id: "shubham-agarwal",
    name: "Adv. Shubham Agarwal", 
    role: "ASSOCIATE ADVOCATE",
    profileText: ["Information regarding professional experience, educational qualifications, and practice areas is currently being updated and will be published upon verification."],
    practiceAreas: []
  },
  { 
    id: "dikshant-prajapat",
    name: "Adv. Dikshant Prajapat", 
    role: "ASSOCIATE ADVOCATE",
    profileText: ["Information regarding professional experience, educational qualifications, and practice areas is currently being updated and will be published upon verification."],
    practiceAreas: []
  },
];

export const contact = {
  telephones: ["+91 8955801545", "+91 9414353632"],
  email: "tkm1971@gmail.com",
} as const;

export const office = {
  lines: [
    "E-51(B), Sudershanpura",
    "Bais godam, Near Moksh Dham",
    "Jaipur 302006",
  ],
  single:
    "E-51(B), Sudershanpura, Bais godam, Near Moksh Dham, Jaipur 302006",
} as const;

export const location = {
  city: "JAIPUR",
  state: "RAJASTHAN",
  country: "INDIA",
  latitude: "26.9124° N",
  longitude: "75.7873° E",
} as const;

export type PracticeArea = {
  index: string;
  code: string;
  title: string;
  span: string;
};

export const practiceAreas: PracticeArea[] = [
  { index: "01", code: "CONST", title: "Constitutional & Administrative", span: "md:col-span-6" },
  { index: "02", code: "PHARMA", title: "Pharma & Drug Regulatory", span: "md:col-span-3" },
  { index: "03", code: "PROC", title: "Govt Tenders & Public Procurement", span: "md:col-span-3" },
  { index: "04", code: "CRIM", title: "Criminal", span: "md:col-span-4" },
  { index: "05", code: "CIV/COMM", title: "Civil & Commercial", span: "md:col-span-4" },
  { index: "06", code: "ADR", title: "Arbitration & ADR", span: "md:col-span-4" },
  { index: "07", code: "CONT", title: "Contractual Disputes", span: "md:col-span-3" },
  { index: "08", code: "CONS", title: "Consumer Law", span: "md:col-span-3" },
  { index: "09", code: "REG", title: "Regulatory Advisory", span: "md:col-span-6" },
  { index: "10", code: "APPL", title: "Appellate & High Court Proceedings", span: "md:col-span-12" },
];

export const disclaimer = {
  heading: "WEBSITE DISCLAIMER",
  paragraphs: [
    "Under the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising, directly or indirectly.",
    "The information contained on this website is made available solely for informational purposes. By proceeding, you acknowledge that you are seeking this information on your own initiative and that no advertisement, solicitation, invitation or inducement has been made by the Firm or its advocates.",
    "The information published on this website does not constitute legal advice and access to or use of this website does not create an advocate–client relationship.",
    "By continuing, you acknowledge and accept this notice.",
  ],
  storageKey: "atm-bci-gateway-accepted",
} as const;
