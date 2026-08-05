export const brand = {
  name: 'Boody',
  logoSrc: '/boody-logo.svg',
  freeShippingThreshold: 60,
  tagline: 'Better basics, powered by bamboo',
};

const blackImages = [
  { src: '/images/boody/fb-black-1.jpg', alt: 'Boody Full Briefs in Black', showBadge: true },
  { src: '/images/boody/fb-black-2.jpg', alt: 'Boody Full Briefs Black back view' },
  { src: '/images/boody/fb-black-3.jpg', alt: 'Boody Full Briefs Black side view' },
  { src: '/images/boody/fb-black-4.jpg', alt: 'Boody Full Briefs Black detail' },
];

const shellImages = [
  { src: '/images/boody/fb-shell-1.jpg', alt: 'Boody Full Briefs in Shell', showBadge: true },
  { src: '/images/boody/fb-shell-2.jpg', alt: 'Boody Full Briefs Shell side view' },
  { src: '/images/boody/fb-shell-3.jpg', alt: 'Boody Full Briefs Shell detail' },
];

const greyImages = [
  { src: '/images/boody/fb-grey-1.jpg', alt: 'Boody Full Briefs in Light Grey Marl', showBadge: true },
  { src: '/images/boody/fb-grey-2.jpg', alt: 'Boody Full Briefs Light Grey Marl side view' },
  { src: '/images/boody/fb-grey-3.jpg', alt: 'Boody Full Briefs Light Grey Marl back view' },
];

const duneImages = [
  { src: '/images/boody/fb-dune-1.jpg', alt: 'Boody Full Briefs in Dune', showBadge: true },
  { src: '/images/boody/fb-dune-2.jpg', alt: 'Boody Full Briefs Dune side view' },
];

export const product = {
  title: 'Full Briefs',
  subtitle: 'Bamboo viscose · Everyday comfort',
  badge: 'Best Seller',
  rating: 5,
  reviewCount: 4820,
  description:
    'Our softest everyday brief, made from organically grown bamboo viscose. Breathable, stretchy, and kind to your skin — comfort that feels like nothing else.',
  serving: 'Everyday wear. Machine washable.',
  images: blackImages,
  colors: [
    { id: 'black', label: 'Black', hex: '#1a1a1a', images: blackImages },
    { id: 'shell', label: 'Shell', hex: '#e8d5c4', images: shellImages },
    { id: 'light-grey-marl', label: 'Light Grey Marl', hex: '#c8c8c8', images: greyImages },
    { id: 'dune', label: 'Dune', hex: '#c4a882', images: duneImages },
  ],
  sizes: [
    { id: 'xs', label: 'XS', price: 18 },
    { id: 's', label: 'S', price: 18 },
    { id: 'm', label: 'M', price: 18 },
    { id: 'l', label: 'L', price: 18 },
    { id: 'xl', label: 'XL', price: 18 },
    { id: '2xl', label: '2XL', price: 18 },
  ],
  frequencies: [],
  benefits: [
    'Organically grown bamboo viscose',
    'Breathable & moisture-wicking',
    'OEKO-TEX® certified',
    'Soft stretch for all-day comfort',
    'Planet-friendly everyday essential',
  ],
  ingredients: '95% bamboo viscose, 5% elastane. OEKO-TEX® Standard 100.',
  howToUse: 'Machine wash cold. Line dry or tumble dry low. Do not bleach.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'NYC Pop-up', address: '120 Broadway, New York, NY 10271', dist: '0.2 mi' },
  { name: 'LA Studio', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.4 mi' },
  { name: 'SF Locker', address: '500 Pine St, San Francisco, CA 94108', dist: '0.5 mi' },
];

export const timeSlots = ['9am-10am', '10am-11am', '11am-12pm', '1pm-2pm', '2pm-3pm'];

export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
