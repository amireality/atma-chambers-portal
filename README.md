# Advocate Chambers

BUILD: Advocate Tarun Mishra and Associates — Institutional Legal Website
Build a polished, production-quality website for the following Indian law practice.
This is a design-first institutional website, not a conventional marketing website.
The visual direction should combine:
- high-end editorial design
- European boutique legal chambers
- architectural portfolios
- premium institutional publications
- restrained Indian professional identity

Think Monocle / high-end editorial / private chambers, not a generic "law firm website."

1. VERIFIED FIRM INFORMATION
Use these particulars exactly.
Firm: Advocate Tarun Mishra and Associates
Domain: Advtarunmishra.com
Lead Counsel: Adv. Tarun Kumar Mishra (B.Sc., LL.B., Bar Council Reg: R/3207/2010)
Associate Advocates: Adv. J. P. Bhardwaj, Adv. Shubham Agarwal, Adv. Dikshant Prajapat
Do not invent qualifications, enrolment numbers, titles, memberships, awards, experience claims, or other professional credentials for the associates.

2. VERIFIED CONTACT INFORMATION
Telephone: +91 8955801545, +91 9414353632
Email: tkm1971@gmail.com
Office: E-51(B), Sudershanpura, Bais godam, Near Moksh Dham, Jaipur 302006

3. PRACTICE AREAS (Use exactly these ten, no added marketing claims):
- Constitutional & Administrative (CONST)
- Pharma & Drug Regulatory (PHARMA)
- Govt Tenders & Public Procurement (PROC)
- Criminal (CRIM)
- Civil & Commercial (CIV/COMM)
- Arbitration & ADR (ADR)
- Contractual Disputes (CONT)
- Consumer Law (CONS)
- Regulatory Advisory (REG)
- Appellate & High Court Proceedings (APPL)

4. REGULATORY REQUIREMENTS
Strict compliance with Bar Council of India Rule 36. No marketing claims, no slogans, no "hire us", no testimonials, no case-success counters, no artificial urgency.

5. IMPORTANT DISCLAIMER IMPLEMENTATION
Create a mandatory click-through disclaimer gateway.
Gateway must appear before visitor can interact. Page behind must be indistinct blurred background (dark overlay, backdrop blur, glassmorphism, thin architectural borders).
Visitor must click "ACCEPT & ENTER →" before accessing the site.
Persist acceptance in localStorage (key: atm-bci-gateway-accepted).
If value is "true", skip gateway. No alternative "skip" option.

6. DISCLAIMER COPY:
"WEBSITE DISCLAIMER
Under the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising, directly or indirectly.
The information contained on this website is made available solely for informational purposes. By proceeding, you acknowledge that you are seeking this information on your own initiative and that no advertisement, solicitation, invitation or inducement has been made by the Firm or its advocates.
The information published on this website does not constitute legal advice and access to or use of this website does not create an advocate–client relationship.
By continuing, you acknowledge and accept this notice."

7. PRIMARY VISUAL SYSTEM
Rich Midnight / Warm Brass
Background: #080B0F
Secondary background: #0C1117
Card: #121922
Elevated surface: #1A232D
Primary text: #F4F0E8
Secondary text: #AAB1B8
Primary accent: #B99A62
Accent highlight: #D8C49A
Use brass primarily for thin rules, metadata, active states, tiny labels, borders on hover.

8. TYPOGRAPHY
Display: Cormorant Garamond (firm name, section headings, counsel names, practice-area titles)
Body: Geist or Inter (navigation, interface, contact info)
Monospace: IBM Plex Mono (Bar Council registration, coordinates, codes, labels, metadata)

9. GEOMETRY
Avoid modern SaaS styling. Default border-radius: 0 (Maximum: 2px). Thin borders: rgba(255,255,255,0.08). Large negative space.

10. HEADER
Height: 72px. Sticky. Translucent dark background with backdrop blur. Bottom border: 1px solid rgba(255,255,255,0.08).
Desktop Left: ATMA+
Navigation: COUNSEL, PRACTICE, CHAMBERS
Right: JAIPUR / IN
NO legal icons/clichés.

11. HERO — SCREEN 2
Top metadata: JAIPUR · RAJASTHAN · INDIA
Main display: ADVOCATE TARUN MISHRA & ASSOCIATES (Large Cormorant Garamond, Desktop: 90-115px. "& ASSOCIATES" in italic and Warm Brass).
Below hero: LOCATION JAIPUR | LATITUDE 26.9124° N | LONGITUDE 75.7873° E (city level, not office coords). Thin brass line followed by "ADVOCATES & LEGAL PRACTITIONERS".

12. COUNSEL — SCREEN 2 CONTINUED
Section label: 02 / COUNSEL. Heading: THE CHAMBERS. Secondary label: PROFESSIONAL PARTICULARS.
Horizontal rows separated by thin rules for Counsel.
Hover on desktop: slightly brighter, name moves 1px upward, brass rule extends, metadata prominent.

13. PRACTICE AREAS — SCREEN 3
Section label: 03 / PRACTICE. Main heading: AREAS OF PRACTICE.
Sophisticated 10-item bento grid (12-column desktop). Architectural composition (spanning 2, 3, 4, 6 columns). Each tile: small number, small monospace code, large serif practice name, thin brass detail line.
Hover: border transitions toward Warm Brass, subtle lighter background, tiny corner glow, title shifts 1-2px up, brass line grows.

14. CHAMBERS — SCREEN 4
Section: 04 / CHAMBERS. Large heading: CHAMBERS JAIPUR (Cormorant Garamond).
Right side: ADDRESS, TELEPHONE, ELECTRONIC CORRESPONDENCE.
Phone/email should be tel:/mailto: links but styled as plain typographic links, no buttons.

15. FOOTER
Left: ADVOCATE TARUN MISHRA AND ASSOCIATES
Center: BAR COUNCIL REG. R/3207/2010
Right: JAIPUR · RAJASTHAN · INDIA
Use IBM Plex Mono. Thin top border.

16. TECHNICAL ARCHITECTURE
Use React, TypeScript, Tailwind CSS.
Create reusable components (/components/ComplianceGate.tsx, Header.tsx, Hero.tsx, CounselRoster.tsx, PracticeGrid.tsx, Chambers.tsx, Footer.tsx).
Store all firm data centrally in /lib/firmData.ts (name, domain, leadCounsel, associates, contact, office, location).

17. OTHER
Implement semantic HTML, keyboard accessibility, reduced-motion support. No chatbots, NO marketing components. Build the complete website now, with all sections connected and the mandatory disclaimer gateway functioning.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c1475bfe-8237-486f-94ef-62340cecab19).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
