// Single source of truth for school facts. Update here, and the whole site updates.
// Anything marked `pending` is waiting on real information from the school.

export const school = {
  brand: 'Topheight Schools',
  academy: { name: 'Topheight Academy', levels: 'Nursery & Primary', colours: 'Blue & White' },
  college: { name: 'Topheight College', levels: 'Secondary (JSS & SSS)', colours: 'Yellow & Blue' },
  motto: ['Humility', 'Empathy', 'Prospect'] as const,
  founded: 2015,
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
  // TODO: confirm which number is on WhatsApp
  whatsapp: '2348032969491',
  hours: [
    { days: 'Monday – Thursday', time: '7:45am – 3:00pm' },
    { days: 'Friday', time: '7:45am – 1:00pm' },
    { days: 'Saturday & Sunday', time: 'Closed' },
  ],
  mapQuery: 'Topheight Academy, Elder Thaddeus Ediale Street, Akwofor, Asaba',
  // pending: real WAEC figures from the principal
  waec: { candidates: null as number | null, fiveCreditsPct: null as number | null, year: null as number | null },
};

export const whatsappLink = (text = 'Hello Topheight Schools, I would like to make an enquiry about admission.') =>
  `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&z=16&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapQuery)}`;
