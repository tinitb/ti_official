import os

base = os.path.dirname(os.path.abspath(__file__))

# ─── events.js ───────────────────────────────────────────────────────────────
events_js = r"""// src/data/events.js – All Think India MANIT Chapter events.
// Sort: newest-first where dates are known; undated events after.
// imagePath: used by the component to attempt a dynamic import.
// When the file is absent, a parchment placeholder card is shown.

export const EVENTS = [
  {
    id: 'cleanliness-drive',
    title: 'Cleanliness Drive',
    subtitle: 'Swachhata Hi Seva 2026 — Jan Bhagidari for Swachhata',
    category: 'Civic & Social',
    date: '1 October 2026',
    venue: 'MANIT Porch, Bhopal',
    imagePath: '../assets/events/cleanliness-drive.webp',
    featured: true,
    bullets: [
      'On the occasion of Gandhi Jayanti, Think India MANIT organized a Swachhata Awareness Drive under the spirit of Jan Bhagidari for Swachhata.',
      'Students actively participated in a Swachhata Rally, carrying awareness placards and spreading the message of cleanliness, proper waste disposal, and responsible civic behaviour.',
      'The initiative highlighted that clean surroundings are essential for a safe, healthy, and sustainable society.',
      'Through collective participation, the campaign encouraged everyone to "Be the Change" and make cleanliness a part of everyday life.',
    ],
  },
  {
    id: 'aws-workshop',
    title: 'AWS Workshop',
    subtitle: 'Building Production-Ready RAG Applications on AWS',
    category: 'Innovation',
    date: '8 August 2026',
    time: '11:00 AM – 2:00 PM',
    venue: 'NTB TB113 & TB114, MANIT Bhopal',
    imagePath: '../assets/events/aws-workshop.webp',
    featured: true,
    bullets: [
      'Hands-on workshop for students eager to explore the future of AI and cloud technologies.',
      'A session on how Retrieval-Augmented Generation (RAG) applications are built and deployed on AWS, led by industry experts.',
      'Conducted in collaboration with the AWS User Group Bhopal.',
    ],
  },
  {
    id: 'block-printing',
    title: 'Block Printing Workshop',
    subtitle: 'Our First Step to Design and Making Art',
    category: 'Cultural',
    date: '19 October 2024',
    time: '10 AM – 5 PM',
    venue: 'LRC, MANIT Bhopal',
    imagePath: '../assets/events/block-printing.webp',
    featured: false,
    bullets: [
      'A hands-on workshop introducing students to the timeless art of block printing.',
      'Conducted under expert guidance, combining tradition with modern creativity.',
      'Witnessed participation from 600+ students, showcasing enthusiasm and artistry.',
      "Revived appreciation for India's rich textile heritage through creative expression.",
    ],
  },
  {
    id: 'freedom-wall',
    title: 'Freedom Wall',
    subtitle: 'Describe Your Thoughts by an Art',
    category: 'Cultural',
    date: '19 October 2024',
    time: '10 AM – 6 PM',
    venue: 'LRC, MANIT Bhopal',
    imagePath: '../assets/events/freedom-wall.webp',
    featured: false,
    bullets: [
      'Transformed a blank wall into a vibrant space of expression, creativity, and patriotism.',
      'Encouraged students to voice their thoughts, ideas, and emotions freely through art and words.',
      'Became a visual symbol of unity and individuality, celebrating the spirit of independence.',
      'Sparked thoughtful expression across campus, reminding students that freedom thrives through creativity and responsibility.',
    ],
  },
  {
    id: 'voting-campaign',
    title: 'Voting Campaign',
    subtitle: 'General Election 2024 — Your Vote, Your Voice',
    category: 'Civic & Social',
    date: 'April – June 2024',
    imagePath: '../assets/events/voting-campaign.webp',
    featured: false,
    bullets: [
      'Conducted in collaboration with the Election Commission of India (ECI) to promote youth participation in elections.',
      "Inspired students to recognize the power of their vote and its influence on the nation's future.",
      'Featured engaging on-ground activities that turned awareness into responsible action.',
      'Strengthened civic consciousness among students, fostering a sense of responsibility towards the nation.',
    ],
  },
  {
    id: 'pottery-workshop',
    title: 'Pottery Workshop',
    subtitle: 'The Art of Clay — Unleash Your Creativity',
    category: 'Cultural',
    date: '16 March 2024',
    time: '10 AM – 6 PM',
    venue: 'LRC, MANIT Bhopal',
    imagePath: '../assets/events/pottery-workshop.webp',
    featured: false,
    bullets: [
      'An immersive pottery workshop encouraging students to reconnect with ancient craft traditions.',
      'Conducted in collaboration with the official Think India handle — a forum of students from National Institutes.',
      'Provided a creative space for self-expression, mindfulness, and hands-on learning.',
      "Fostered appreciation for artisans and craftspeople who keep India's heritage alive.",
    ],
  },
  {
    id: 'innofest-3',
    title: 'Innofest 3.0',
    subtitle: 'Innovate. Ideate. Inspire.',
    category: 'Innovation',
    date: '7 – 9 February',
    imagePath: '../assets/events/innofest-3.webp',
    featured: false,
    bullets: [
      'Celebrated innovation, entrepreneurship and creativity through inspiring talks and hands-on sessions.',
      'Featured Ms. Tripti Tiwari, Mr. Sanket Hartalkar, Mr. Surya Gupta, Mr. Sahil Kumar, and Mr. Sumit Pandey.',
      'Brought together young innovators to present breakthrough ideas and foster collaborative problem-solving.',
    ],
  },
  {
    id: 'indiglam-2',
    title: 'Indiglam 2.0',
    subtitle: 'Where Tradition Meets Modern Elegance',
    category: 'Cultural',
    date: '7 – 9 February',
    imagePath: '../assets/events/indiglam-2.webp',
    featured: false,
    bullets: [
      "A vibrant showcase celebrating India's cultural elegance and youthful confidence.",
      'Blended tradition with modern flair through creative styling and performance.',
      'Drew energetic participation, filling the campus with colour and enthusiasm.',
      'Promoted self-expression, pride, and unity through fashion and culture.',
    ],
  },
  {
    id: 'swarndeep',
    title: 'Swarndeep',
    subtitle: "Celebrating India's Golden Heritage",
    category: 'Cultural',
    prizes: 'Prizes worth ₹4,000',
    imagePath: '../assets/events/swarndeep.webp',
    featured: false,
    bullets: [
      "A thought-provoking session celebrating India's golden heritage and timeless values.",
      'Connected ancient wisdom with modern perspectives through meaningful discussions.',
      "Drew active participation from students eager to explore India's cultural depth.",
      "Fostered pride, awareness, and reflection on the nation's enduring legacy.",
    ],
  },
  {
    id: 'innofest-2',
    title: 'Innofest 2.0',
    subtitle: 'Innovate. Ideate. Inspire.',
    category: 'Innovation',
    date: '18 October',
    time: '3:00 PM',
    imagePath: '../assets/events/innofest-2.webp',
    featured: false,
    bullets: [
      'Celebrated innovation, entrepreneurship and creativity through inspiring talks and hands-on sessions.',
      'Featured Ms. Arshi Khan, Co-Founder of Student Khabri & College Khabri and a TEDx Speaker, who shared insights on startups and youth empowerment.',
      'Brought together young innovators to present breakthrough ideas and foster collaborative problem-solving.',
      'Created a vibrant space for students to learn, network, and translate imagination into impactful innovation.',
    ],
  },
  {
    id: 'human-chain',
    title: 'Human Chain Event',
    subtitle: 'Swabhav Swachhata – Sanskaar Swachhata',
    category: 'Civic & Social',
    imagePath: '../assets/events/human-chain.webp',
    featured: false,
    bullets: [
      'A powerful demonstration of unity and social awareness across the MANIT campus.',
      'Organized under the Swachhata Pakhwada initiative to promote cleanliness and responsibility.',
      'Reflected collective commitment towards building a cleaner and more conscious community.',
      'Echoed the message of "Clean Campus, Green Campus" across the institute, inspiring action for change.',
    ],
  },
  {
    id: 'bharat-buzz-3-event',
    title: 'Bharat Buzz 3.0',
    subtitle: "India's Pulse — Delivered to Your Screen",
    category: 'Digital Media',
    imagePath: '../assets/buzz/bharat-buzz-3.webp',
    featured: false,
    bullets: [
      "A vibrant video series bringing the pulse of India's major events and developments to screens nationwide.",
      'Garnered 200K+ views across platforms, reflecting wide reach and strong viewer engagement.',
      'Offered crisp, insightful takes on politics, economy, technology, and culture.',
      "Empowered youth to stay informed, aware, and connected with India's dynamic growth story.",
    ],
  },
];

export const EVENT_CATEGORIES = ['All', 'Cultural', 'Civic & Social', 'Innovation', 'Digital Media'];
"""

# ─── guests.js ────────────────────────────────────────────────────────────────
guests_js = r"""// src/data/guests.js – Previous guests of Think India MANIT Chapter.
export const GUESTS = [
  {
    id: 'parikipandla-narahari',
    name: 'Mr. Parikipandla Narahari',
    designation: 'IAS Officer, Motivational Speaker & Author',
    imagePath: '../assets/guests/parikipandla-narahari.webp',
  },
  {
    id: 'udit-sangwan',
    name: 'Mr. Udit Sangwan',
    designation: 'Co-Founder, AgriGator (Agricultural Logistics Startup)',
    imagePath: '../assets/guests/udit-sangwan.webp',
  },
  {
    id: 'sanjay-bhargava',
    name: 'Mr. Sanjay Bhargava',
    designation: 'Starlink Country Director for India; Founding Team, PayPal',
    imagePath: '../assets/guests/sanjay-bhargava.webp',
  },
  {
    id: 'himanshu-rai',
    name: 'Dr. Himanshu Rai',
    designation: 'Thought Leader & Academician',
    imagePath: '../assets/guests/himanshu-rai.webp',
  },
  {
    id: 'shridhar-venkat',
    name: 'Mr. Shridhar Venkat',
    designation: 'CEO, Akshaya Patra Foundation',
    imagePath: '../assets/guests/shridhar-venkat.webp',
  },
  {
    id: 'advaita-kala',
    name: 'Mrs. Advaita Kala',
    designation: 'Author, Screenwriter & Columnist',
    imagePath: '../assets/guests/advaita-kala.webp',
  },
  {
    id: 'bv-acharya',
    name: 'Mr. B. V. Acharya',
    designation: 'Senior Advocate & Former Advocate General, Karnataka',
    imagePath: '../assets/guests/bv-acharya.webp',
  },
  {
    id: 'zakia-soman',
    name: 'Mrs. Zakia Soman',
    designation: 'Author, Liberal Humanist, Activist & Co-Founder, BMMA',
    imagePath: '../assets/guests/zakia-soman.webp',
  },
  {
    id: 'arshi-khan',
    name: 'Ms. Arshi Khan',
    designation: 'Co-Founder, Student Khabri & College Khabri; TEDx Speaker',
    imagePath: '../assets/guests/arshi-khan.webp',
  },
  {
    id: 'sashikant-chaudhary',
    name: 'Mr. Sashikant Chaudhary',
    designation: 'Co-Founder (Stealth Startup); Managing Director, GlobalLogic India',
    imagePath: '../assets/guests/sashikant-chaudhary.webp',
  },
];
"""

# ─── buzz.js ─────────────────────────────────────────────────────────────────
buzz_js = r"""// src/data/buzz.js – Bharat Buzz social-media series and digital impact items.
export const BUZZ_ITEMS = [
  {
    id: 'bharat-buzz-2',
    title: 'Bharat Buzz 2.0',
    focus: 'Union Budget 2024-25',
    description: 'A compelling video series breaking down the highlights of the Union Budget 2024-25, making complex policy accessible and engaging for students across the country.',
    imagePath: '../assets/buzz/bharat-buzz-2.webp',
    collaborators: [],
  },
  {
    id: 'bharat-buzz-3',
    title: 'Bharat Buzz 3.0',
    focus: 'Martyrdom of Captain Anshuman Singh',
    description: 'Garnered 200K+ views across platforms with a deeply moving tribute to the bravery and sacrifice of Captain Anshuman Singh, sparking national conversations on valour and duty.',
    imagePath: '../assets/buzz/bharat-buzz-3.webp',
    collaborators: [
      { handle: '@nda_is_dream', desc: 'Digital creator', followers: '57.2K' },
      { handle: '@nda.in.dna', desc: 'Armed forces community', followers: '65.3K' },
      { handle: '@iamsimratsahota', desc: 'Ex-NDA, content creator, entrepreneur & author', followers: '75.4K' },
    ],
  },
  {
    id: 'paris-olympics',
    title: "Paris Olympics 2024",
    focus: "India's Olympic Journey in Paris 2024",
    description: "A celebratory series capturing India's remarkable performance at the Paris Olympics 2024, uniting students in pride and sporting passion.",
    imagePath: '../assets/buzz/paris-olympics.webp',
    collaborators: [
      { handle: '@indian_pridee', desc: 'Digital creator & blogger on Indian sporting wins', followers: '19.8K' },
      { handle: '@upsc.desire', desc: 'Current affairs for UPSC/IAS/IFS/IPS/SSC/Railways aspirants', followers: '419K' },
      { handle: '@indian_sports_pulse', desc: 'Blogger on Indian sports and Olympics', followers: '14.7K' },
    ],
  },
  {
    id: 'paralympics',
    title: 'Paralympics 2024',
    focus: 'A Historic Performance by Team India',
    description: 'Team India scripted history at the Paralympic Games with a record-breaking haul of 29 medals — 7 Gold, 9 Silver, and 13 Bronze — their best-ever Paralympic performance.',
    imagePath: '../assets/buzz/paralympics.webp',
    medals: { gold: 7, silver: 9, bronze: 13, total: 29 },
    collaborators: [
      { handle: '@indian_pridee', desc: 'Digital creator & blogger', followers: '19.8K' },
      { handle: '@suhas_ly', desc: 'Athlete, IAS Officer, World Champion 2024, Asian Para Games 2023, Arjuna Awardee 2021', followers: '26.1K' },
    ],
    likedBy: [
      { name: 'Gulfam Ahmed', desc: 'Para powerlifter, 6-time national medalist, Karamveer Chakra awardee, TEDx speaker' },
      { name: 'Jagseer Singh', desc: 'Arjuna Award winner, first Indian gold medalist at Asian Para Games' },
      { name: 'Laxita Sandilya', desc: 'Silver medalist, Asian U20 Athletics Championship' },
      { name: 'Parmjeet Kumar', desc: 'Bronze medalist at World Championships and Asian Para Games' },
    ],
  },
];

export const ECI_RECOGNITION = {
  title: 'Election Commission of India Recognition',
  description: 'Think India MANIT served as an Election Ambassador in the ECI campaign. Received merchandise and a certificate of appreciation from the Election Commission of India for outstanding contributions to voter awareness.',
  imagePath: '../assets/buzz/eci-certificate.webp',
};
"""

# ─── stats.js ─────────────────────────────────────────────────────────────────
stats_js = r"""// src/data/stats.js – Key impact statistics for the Why Think India section.
// All figures sourced from official chapter slides.
export const STATS = [
  {
    id: 'instagram-views',
    value: 2500000,
    display: '2.5M+',
    label: 'Instagram Views',
    sublabel: 'on Bharat Buzz series',
    suffix: '',
  },
  {
    id: 'block-printing',
    value: 600,
    display: '600+',
    label: 'Students',
    sublabel: 'at Block Printing Workshop',
    suffix: '+',
  },
  {
    id: 'buzz-3-views',
    value: 200000,
    display: '200K+',
    label: 'Views',
    sublabel: 'on Bharat Buzz 3.0',
    suffix: '',
  },
  {
    id: 'followers',
    value: 7828,
    display: '7,828',
    label: 'Followers',
    sublabel: 'on official Think India handle',
    suffix: '',
  },
  {
    id: 'guests',
    value: 10,
    display: '10',
    label: 'Distinguished Guests',
    sublabel: 'National leaders & experts',
    suffix: '+',
  },
];
"""

files = {
    'src/data/events.js': events_js,
    'src/data/guests.js': guests_js,
    'src/data/buzz.js': buzz_js,
    'src/data/stats.js': stats_js,
}

for path, content in files.items():
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {path} ({len(content)} bytes)')
