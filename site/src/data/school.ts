// Single source of truth for school facts. Update here, and the whole site updates.
// Lists that are empty ([]) hide their section on the site until real content is added.
// See CONTENT-REVIEW.md in the repo root for everything that still needs the school's confirmation.

export const school = {
  brand: 'Topheight Schools',
  academy: { name: 'Topheight Academy', levels: 'Nursery & Primary', colours: 'Blue & White' },
  college: { name: 'Topheight College', levels: 'Secondary (JSS 1 – SS 3)', colours: 'Yellow & Blue' },
  motto: ['Humility', 'Empathy', 'Prospect'] as const,
  founded: 2015,
  rcNumber: 'DE31706',
  address: {
    street: 'Phase 2, No. 2 Elder Thaddeus Ediale Street, off Ibusa Expressway',
    area: 'Akwofor',
    city: 'Asaba',
    postcode: '320108',
    state: 'Delta State',
    country: 'NG',
  },
  phones: ['+2348032969491', '+2348038894126'],
  phonesDisplay: ['0803 296 9491', '0803 889 4126'],
  whatsapp: '2348032969491', // TODO confirm which number is on WhatsApp
  email: '', // TODO school email address
  social: { facebook: '', instagram: '' }, // TODO
  // Google Search Console "HTML tag" code: paste only the content="..." value here
  googleVerification: '',
  hours: [
    { days: 'Monday – Thursday', time: '7:45am – 3:00pm' },
    { days: 'Friday', time: '7:45am – 1:00pm' },
    { days: 'Saturday & Sunday', time: 'Closed' },
  ],
  mapQuery: 'Topheight Academy, Elder Thaddeus Ediale Street, Akwofor, Asaba',
  // WASSCE results, read from the school's 2026 results banner. Set a value to null to hide it.
  waec: {
    year: 2026 as number | null,
    candidates: 22 as number | null,
    fiveCreditsPct: 100 as number | null, // credits (A1–C6) in English & Maths plus 5+ credits overall
    a1Count: 50 as number | null,         // shown as "50+" (actual count read ≈ 59; confirm with principal)
  },
};

export const houses = [
  { colour: 'Purple', cls: 'bg-house-purple' },
  { colour: 'Green', cls: 'bg-house-green' },
  { colour: 'Yellow', cls: 'bg-house-yellow' },
  { colour: 'Red', cls: 'bg-house-red' },
  { colour: 'Blue', cls: 'bg-house-blue' },
];

// Shown only when filled in. { name, role, photo?, message? }
export const leadership: { name: string; role: string; message?: string }[] = [];

// Shown only when filled in. { quote, name, relation } e.g. relation: 'Parent, Primary 4'
export const testimonials: { quote: string; name: string; relation: string }[] = [];

export const academyStages = [
  { name: 'Nursery', classes: 'Pre-Nursery – Nursery 2', text: 'Play-based learning that builds early reading, numbers, speech and social confidence in a safe, caring setting.' },
  { name: 'Primary', classes: 'Primary 1 – Primary 6', text: 'A strong foundation in English, Mathematics and Basic Science, with creative arts, ICT and character education.' },
];

export const collegeSubjects = {
  junior: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'Civic Education', 'Christian Religious Studies', 'Agricultural Science', 'Home Economics', 'Business Studies', 'Computer Studies', 'Cultural & Creative Arts', 'Physical & Health Education'],
  science: ['Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Agricultural Science'],
  arts: ['Literature in English', 'Government', 'Christian Religious Studies', 'History'],
  commercial: ['Economics', 'Commerce', 'Financial Accounting'],
};

export const admissionSteps = [
  { title: 'Enquire', text: 'Message us on WhatsApp, call, or fill the enquiry form. Tell us your child’s age and the class you are applying for.' },
  { title: 'Visit the school', text: 'Come and see the classrooms and laboratory and meet the team. Visits are by appointment during school hours.' },
  { title: 'Assessment', text: 'Your child takes a short, friendly assessment so we can place them in the right class.' },
  { title: 'Registration', text: 'Complete the admission form, submit the required documents and get ready for the first day.' },
];

export const admissionDocs = [
  'Completed admission form',
  'Copy of birth certificate',
  'Recent passport photographs',
  'Last school report (for transfers into Primary or JSS)',
];

export const faqs = [
  { q: 'Where is Topheight Schools located?', a: 'Phase 2, No. 2 Elder Thaddeus Ediale Street, off Ibusa Expressway, Akwofor, Asaba, Delta State.' },
  { q: 'What are the school hours?', a: 'Monday to Thursday 7:45am – 3:00pm, and Friday 7:45am – 1:00pm.' },
  { q: 'Which classes do you admit?', a: 'We admit children into Nursery and Primary at Topheight Academy, and into JSS and SSS at Topheight College, subject to available space.' },
  { q: 'Can I visit before applying?', a: 'Yes. Send us a WhatsApp message or call to book a convenient time.' },
  { q: 'Can candidates from other schools write WAEC at Topheight?', a: 'Yes. Topheight College is an approved WAEC examination centre. Contact us for registration details and deadlines.' },
  { q: 'How much are the school fees?', a: 'Fees depend on the class. Please contact the school office for the current fee schedule.' },
];

export const whatsappLink = (text = 'Hello Topheight Schools, I would like to make an enquiry about admission.') =>
  `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&z=16&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapQuery)}`;
export const fullAddress = `${school.address.street}, ${school.address.area}, ${school.address.city} ${school.address.postcode}, ${school.address.state}`;

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/academy', label: 'Academy' },
  { href: '/college', label: 'College' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/waec-centre', label: 'WAEC Centre' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];
