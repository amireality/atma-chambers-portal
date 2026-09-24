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
  imageUrl?: string;
}

export const leadCounsel: CounselProfile = {
  id: "tarun-kumar-mishra",
  name: "Adv. Tarun Kumar Mishra",
  role: "FOUNDER & LEAD COUNSEL",
  qualifications: "B.Sc., LL.B.",
  registration: "Enrolment No.: R/3207/2010",
  imageUrl: "/tarun-mishra.jpg",
  profileText: [
    "Adv. Tarun Kumar Mishra is the Founder and Lead Counsel of Tarun Mishra & Associates, a legal practice based in Jaipur, Rajasthan, with a practice extending to matters across India, subject to the applicable rules and requirements of the concerned court, tribunal or authority.",
    "His practice encompasses litigation, legal advisory and representation across a range of areas including Constitutional and Administrative Law, Public Procurement and Government Contracts, Pharmaceutical and Drug Regulatory Law, Criminal Law, Civil and Commercial Disputes, Arbitration and related proceedings.",
    "As the Founder and Lead Counsel, Adv. Tarun Kumar Mishra provides the principal legal direction to the Chambers. His role involves examining the factual and legal dimensions of matters, identifying the relevant legal and procedural issues and developing an appropriate approach to the matter in accordance with its circumstances.",
    "The practice places particular emphasis on understanding the complete context of a legal matter before determining the course of action. This includes examination of relevant documents, chronology of events, statutory provisions, regulations, contractual obligations, judicial precedents and procedural requirements, as may be applicable to the matter.",
    "His work includes matters concerning governmental and administrative action, public procurement and government contracts, regulatory proceedings, civil and commercial disputes, criminal proceedings, arbitration and constitutional remedies. The Chambers also handles matters arising under specialised regulatory frameworks, including proceedings and disputes under the Drugs and Cosmetics Act, 1940 and associated rules.",
    "In matters involving public authorities and governmental decisions, the practice deals with questions concerning statutory powers, administrative decisions, procedural fairness, tender and procurement processes, eligibility conditions, bid evaluation, debarment and blacklisting, forfeiture of earnest money and security deposits and related legal proceedings, subject to the facts and maintainability of each matter.",
    "The pharmaceutical and drug regulatory practice includes matters arising under the Drugs and Cosmetics Act, 1940 and the Drugs Rules, 1945, including licensing-related issues, inspections, sampling and testing, laboratory reports, regulatory notices, administrative proceedings and prosecutions.",
    "In litigation and dispute resolution, the Chambers handles civil and commercial disputes, contractual matters, recovery claims, injunctions, property and tenancy disputes, arbitration proceedings and related court applications. Criminal practice includes criminal complaints, trial proceedings, discharge applications, petitions for quashing, revisions and appeals, including matters arising under regulatory and special enactments.",
    "Adv. Tarun Kumar Mishra also handles constitutional and writ matters involving the exercise of public power and the enforcement of legal and constitutional rights. Such proceedings may involve challenges to administrative decisions, statutory actions or other acts of public authorities before the appropriate constitutional court.",
    "The practice also undertakes appellate and related proceedings where the nature of the matter permits such intervention. Depending upon the forum and applicable procedural requirements, the Chambers may coordinate with local counsel where necessary for matters outside its principal jurisdiction.",
    "The underlying approach of Adv. Tarun Kumar Mishra and the Chambers is based on preparation, legal analysis and clarity of strategy. Each matter is considered on its own facts and applicable law rather than through a predetermined formula. The objective is to understand the legal position, identify the available remedies and provide representation or advice appropriate to the circumstances of the matter.",
    "As Founder and Lead Counsel, Adv. Tarun Kumar Mishra is supported by the associate advocates of the Chambers in research, documentation, drafting and preparation. This collaborative structure enables the practice to bring together strategic legal direction with detailed preparation across the different stages of a matter."
  ],
  practiceAreas: ["CONST", "PROC", "PHARMA", "CRIM", "CIV/COMM", "ADR", "CONT", "APPL"],
};

export const associates: CounselProfile[] = [
  { 
    id: "j-p-bhardwaj",
    name: "Adv. J. P. Bhardwaj", 
    role: "ASSOCIATE ADVOCATE",
    imageUrl: "/jp-bhardwaj.jpg",
    profileText: [
      "Adv. J. P. Bhardwaj is an Associate Advocate with Tarun Mishra & Associates and forms part of the Chambers' collaborative legal practice under the overall direction of Founder and Lead Counsel, Adv. Tarun Kumar Mishra.",
      "As part of the Chambers, Adv. J. P. Bhardwaj contributes to the preparation and handling of legal matters undertaken by the practice. His work forms part of the detailed process that supports legal advice, litigation and representation, including examination of factual and documentary material, legal research, drafting and procedural preparation as required by the nature of a matter.",
      "The preparation of a legal matter often involves examination of documents, identification of relevant issues, review of applicable statutory provisions and judicial authorities and consideration of the procedural requirements applicable to the forum in which the matter is being handled. His role within the Chambers contributes to these aspects of matter preparation.",
      "Working alongside the Founder and Lead Counsel and the other members of the team, Adv. J. P. Bhardwaj participates in the collaborative preparation of matters across the Chambers' areas of practice. This includes assisting with the organisation and analysis of case material and supporting the development of legal documentation and submissions where required.",
      "His role reflects the Chambers' broader approach to legal practice, in which strategic direction and detailed preparation operate together. Matters are examined from their factual, documentary, legal and procedural perspectives before the appropriate course of action is pursued.",
      "Adv. J. P. Bhardwaj is therefore part of the team that supports the Chambers in carrying matters through the different stages of legal preparation, from research and documentation to drafting and litigation-related assistance."
    ],
    practiceAreas: []
  },
  { 
    id: "dikshant-prajapat",
    name: "Adv. Dikshant Prajapat", 
    role: "ASSOCIATE ADVOCATE",
    imageUrl: "/dikshant-prajapat.jpg",
    profileText: [
      "Adv. Dikshant Prajapat is an Associate Advocate with Tarun Mishra & Associates and is part of the Chambers' collaborative legal team working under the overall direction of Founder and Lead Counsel, Adv. Tarun Kumar Mishra.",
      "His role within the Chambers contributes to the preparation and handling of matters undertaken by the practice. Legal work frequently requires detailed examination of documents and facts alongside research into the applicable statutory, regulatory and procedural framework. Adv. Dikshant Prajapat contributes to this wider process as part of the associate team.",
      "His work may involve legal research, review of case material, examination of documents, drafting and procedural preparation, depending upon the requirements of the matter. These functions form an important part of the preparation undertaken before legal advice is provided or a matter proceeds before a court, tribunal, authority or other appropriate forum.",
      "Working alongside the Founder and Lead Counsel and the other members of the Chambers, Adv. Dikshant Prajapat contributes to a coordinated approach to matter preparation. The team works to ensure that relevant factual material, documents, legal provisions and procedural considerations are appropriately examined before the matter progresses.",
      "His role within the Chambers reflects the practice's emphasis on preparation and legal analysis. Rather than treating research, drafting and procedural preparation as separate from representation, the Chambers considers them integral parts of developing a matter and determining the appropriate legal approach."
    ],
    practiceAreas: []
  },
  { 
    id: "shubham-agarwal",
    name: "Adv. Shubham Agarwal", 
    role: "ASSOCIATE ADVOCATE",
    profileText: ["Information regarding professional experience, educational qualifications, and practice areas is currently being updated and will be published upon verification."],
    practiceAreas: []
  }
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
