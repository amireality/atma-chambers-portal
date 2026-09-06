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

export const leadCounsel = {
  name: "Adv. Tarun Kumar Mishra",
  role: "LEAD COUNSEL",
  qualifications: "B.Sc., LL.B.",
  registration: "BAR COUNCIL REG: R/3207/2010",
} as const;

export const associates = [
  { name: "Adv. J. P. Bhardwaj", role: "ASSOCIATE ADVOCATE" },
  { name: "Adv. Shubham Agarwal", role: "ASSOCIATE ADVOCATE" },
  { name: "Adv. Dikshant Prajapat", role: "ASSOCIATE ADVOCATE" },
] as const;

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
