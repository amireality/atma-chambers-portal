export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // General / Chambers
  {
    id: "g1",
    category: "General",
    question: "Where is the Chambers located?",
    answer: "Our principal Chambers is located at E-51(B), Sudershanpura, Bais godam, Near Moksh Dham, Jaipur 302006, Rajasthan. We primarily practice before the Rajasthan High Court, Jaipur Bench."
  },
  {
    id: "g2",
    category: "General",
    question: "How do I schedule a consultation?",
    answer: "Consultations with our counsel are strictly by appointment. You can request an appointment by emailing us at tkm1971@gmail.com or contacting our chambers via the phone numbers provided on our Contact page."
  },
  {
    id: "g3",
    category: "General",
    question: "Does the Chambers handle matters outside of Rajasthan?",
    answer: "Yes. While our primary jurisdiction is the Rajasthan High Court, our appellate and arbitration practice extends across India, subject to the procedural requirements of the respective forums. We frequently coordinate with local counsel for matters outside our principal jurisdiction."
  },
  
  // Constitutional & Admin
  {
    id: "c1",
    category: "CONST",
    question: "What matters fall under writ jurisdiction?",
    answer: "Writ jurisdiction under Article 226 of the Constitution is invoked to enforce fundamental rights or for any other purpose against the State, its instrumentalities, or public authorities. This includes challenges to arbitrary administrative actions, statutory vires, and enforcement of public duties."
  },
  
  // Public Procurement
  {
    id: "p1",
    category: "PROC",
    question: "Can I challenge a government tender evaluation?",
    answer: "Yes, provided there is a violation of natural justice, arbitrariness, mala fides, or a deviation from the essential conditions of the tender. The courts exercise judicial review over the decision-making process rather than acting as appellate technical experts."
  },
  {
    id: "p2",
    category: "PROC",
    question: "What is the recourse against a blacklisting order?",
    answer: "An order of blacklisting involves severe civil consequences. It can be challenged if it was issued without a specific show-cause notice proposing blacklisting, or if it violates the principles of natural justice and proportionality."
  },

  // Pharma
  {
    id: "ph1",
    category: "PHARMA",
    question: "What happens if a drug sample fails testing?",
    answer: "If a Government Analyst declares a drug 'Not of Standard Quality' (NSQ), the manufacturer has the statutory right under Section 25(3) of the Drugs and Cosmetics Act to challenge the report within 28 days by requesting testing at the Central Drugs Laboratory (CDL)."
  },

  // Arbitration
  {
    id: "a1",
    category: "ADR",
    question: "Can an arbitration clause be invoked if the main contract is void?",
    answer: "Under the doctrine of severability (Section 16 of the Arbitration and Conciliation Act), an arbitration clause is treated as an agreement independent of the other terms of the contract. Therefore, the tribunal retains jurisdiction to decide whether the main contract is null and void."
  },
  
  // Criminal
  {
    id: "cr1",
    category: "CRIM",
    question: "Can an FIR in a commercial dispute be quashed?",
    answer: "Yes. Under Section 482 CrPC (now Section 528 BNSS), the High Court has inherent powers to quash criminal proceedings if it is found that a purely civil dispute has been given a criminal cloak to exert pressure, or if the allegations do not prima facie constitute an offense."
  }
];
