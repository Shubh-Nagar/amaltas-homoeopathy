/**
 * Navigation structure for the entire site.
 * Add/remove items here and the change propagates to Navbar + MobileMenu + Footer links.
 */
export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'About the Institution', href: '/about/institution' },
      { label: 'Vision & Mission',      href: '/about/vision-mission' },
      { label: "Founder's Message",      href: '/about/founder-message' },
      { label: "Chairman's Message",    href: '/about/chairman-message' },
      { label: "Principal's Message",   href: '/about/principal-message' },
      { label: 'Awards & Achievements',        href: '/about/awards' },
      { label: 'Recognition & Affiliation',   href: '/about/recognition-affiliation' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Admission Details',     href: '/academics/admission-details' },
      { label: 'Admission Procedure',   href: '/admissions/procedure' },
      // { label: 'Fees Structure',        href: '/admissions/fees' },
      { label: 'Enquiry Form',          href: '#enquiry' },
      { label: 'Scholarships',          href: '/admissions/scholarships' },
      { label: 'Download Brochure',     href: '/homeopathy brochure.pdf', target: '_blank' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Departments',           href: '/academics/departments' },
      { label: 'Teaching Faculty',      href: '/academics/teaching-faculty' },
      { label: 'Sanctioned Intake',     href: '/academics/sanctioned-intake' },
      { label: 'Admitted Students',     href: '/academics/admitted-students' },
      { label: 'Library',               href: '/academics/library' },
      { label: 'Research Publications', href: '/academics/research-publications' },
      { label: 'Academic Calendar',     href: '/academics/academic-calendar' },
      // { label: 'Results',               href: '#results' },
    ],
  },
  {
    label: 'Hospital',
    children: [
      { label: 'Hospital Departments',    href: '/hospital/departments' },
      { label: 'Hospital Staff',          href: '/hospital/staff' },
      { label: 'Citizen Charter',         href: '/hospital/citizen-charter' },
      { label: 'Instruments & Equipment', href: '/hospital/instruments-equipment' },
    ],
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Hostel & Canteen',  href: '/campus/hostel-canteen' },
      { label: 'Transportation',    href: '/campus/transportation' },
      { label: 'Gallery',           href: '/campus/gallery' },
      { label: 'Events',            href: '/campus/events' },
      { label: 'Anti-Ragging Cell', href: '/campus/anti-ragging' },
      { label: 'News',             href: '/news' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

/* Quick-link / resource / contact data used by the Footer.
   Kept here so all "what the institution says about itself" lives in /data. */
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About',       href: '/about/institution' },
    { label: 'Admissions',  href: '/admissions/procedure' },
    { label: 'Departments', href: '/academics/departments' },
    { label: 'Hospital',    href: '/hospital/departments' },
    { label: 'Faculty',     href: '/academics/teaching-faculty' },
    { label: 'Gallery',     href: '/campus/gallery' },
  ],
  resources: [
    { label: 'Download Brochure',       href: '/homeopathy brochure.pdf', target: '_blank' },
    { label: 'Citizen Charter',         href: '/hospital/citizen-charter' },
    { label: 'Research Publications',   href: '/academics/research-publications' },
    { label: 'Recognition & Affiliation', href: '/about/recognition-affiliation' },
    { label: 'Anti-Ragging Cell',       href: '/campus/anti-ragging' },
  ],
};

export const CONTACT = {
  address: 'Village Bangar, Dewas–Ujjain Highway, District Dewas, MP — 455001',
  tollFree: '1800-571-2113',
  phone: '9685096500',
  email: 'homoeopathy@amaltasgroup.co.in',
};

/**
 * Leadership — used by both the Leadership grid and the Principal's Message section.
 * Order here = display order in the Leadership section.
 */
export const LEADERSHIP = [
 
  {
    id: 'director',
    name: 'Shri Suresh Singh Bhadoria',
    role: 'Founder',
    image: '/leadership/suresh-sir.jpeg',
    href: '/about/founder-message',
    blurb:
      'Founded Amaltas on a vision of ethical homoeopathic education — building physicians who serve communities across India.',
    message:
      'Welcome to the Amaltas Homoeopathic College Hospital & Research Centre and the path to success and a satisfying career. A career that will prepare you for responsibilities that will influence the advancement of healthcare and allow you to help the suffering people of the world.\n\nMy aim and goal since the beginning has been to deliver quality education, training, and accessible medical care to the general public. Our Institutes have led the way in developing high levels of discipline, work, culture, and educational ambition. We provide the greatest facilities and instructors to our students in order to enhance their abilities and empower them to confront difficulties with confidence. Our students are encouraged to take advantage of the clinical materials and academic resources within the campus. Every year, a large number of students graduate from our colleges and go on to serve as health care providers all around India. We have an outstanding team of faculty offering quality education and training. We believe that solid academic set-up, is built on constant engagement with specialists, scholars, and peers. I appreciate the Principal\'s, Medical Superintendent\'s, and faculty members\' unwavering commitment to the advancement of homoeopathy and the education of students.\n\nAs future doctors you should possess skills to provide comprehensive care with compassion. I am sure that your experience at Amaltas Homoeopathic College Hospital & Research Centre will be a wonderful one. I assure you that we shall enable you in attaining the highest level of professional standard.',
  },
   {
    id: 'chairman',
    name: 'Shri Mayankraj S. Bhadoria',
    role: 'Chairman',
    image: '/leadership/chairman.jpg',
    href: '/about/chairman-message',
    blurb:
      'Steering the Amaltas Group with a vision of accessible, ethical, and excellence-driven medical education across central India.',
  },
  {
    id: 'principal',
    name: 'Dr. Yogendra Singh Bhadoria',
    role: 'Principal & Medical Superintendent',
    image: '/leadership/principal.jpg',
    href: '/about/principal-message',
    blurb:
      "Guiding the institute's daily academic and clinical life, with a commitment to homoeopathy practised in its truest, classical form.",
    quote:
      "Homoeopathy works as nature's own law of cure. Our purpose at Amaltas is to train physicians who understand this principle in both depth and dignity — and who carry it with integrity into the communities they will serve.",
  },
];

/**
 * Campus & facilities — slides for the FacilitiesShowcase auto-slider.
 * Order here = order of appearance. Lead with the iconic building shot.
 */
export const CAMPUS_SLIDES = [
  {
    image: '/campus/campus.jpg',
    tag: 'Our Campus',
    title: 'Amaltas Institute of Homoeopathy Hospital & Research Center',
    description:
      'Purpose-built infrastructure on the Dewas–Ujjain Highway, set within the wider 27-acre Amaltas Group campus.',
  },
  {
    image: '/campus/teaching.png',
    tag: 'Teaching Hospital',
    title: 'Excellent Teaching Faculty',
    description:
      'Our fully operational multi-speciality teaching hospital gives BHMS students hands-on patient exposure from the very first clinical year.',
  },
  {
    image: '/campus/anatomy-museum.jpg',
    tag: 'Anatomy Department',
    title: 'Anatomy & Specimen Gallery',
    description:
      'A fully catalogued specimen museum covering every regional system — upper limb, thorax, abdomen, brain — for hands-on dissection-room learning.',
  },
  {
    image: '/campus/physiology-lab.jpg',
    tag: 'Para-clinical',
    title: 'Physiology & Microscopy Lab',
    description:
      'Individual workstations equipped with monocular microscopes and instrumentation for routine and advanced physiological investigation.',
  },
  {
    image: '/campus/2U8A7507.jpg',
    tag: 'Diagnostics',
    title: 'Diagnostics & Research Laboratory',
    description:
      'State-of-the-art diagnostic equipment operated by trained clinical staff — bridging homoeopathic diagnosis with modern investigative science.',
  },
  {
    image: '/campus/clinical-hall.jpg',
    tag: 'Clinical Training',
    title: 'Clinical Examination Hall',
    description:
      'Curtained examination bays and demonstration charts for systematic clinical-method training — from history-taking to physical examination.',
  },
  {
    image: '/campus/amaltas_photo.jpeg',
    tag: 'Amaltas Group',
    title: 'A Multi-Institutional Campus',
    description:
      'The Amaltas Group campus houses medical, homoeopathy, nursing, ayurvedic and paramedical colleges — creating a rare multidisciplinary learning ecosystem.',
  },
];
