// src/data/buzz.js – Bharat Buzz social-media series and digital impact items.
export const BUZZ_ITEMS = [
  {
    id: 'bharat-buzz-2',
    title: 'Bharat Buzz 2.0',
    focus: 'Union Budget 2024-25',
    description: 'A compelling video series breaking down the highlights of the Union Budget 2024-25, making complex policy accessible and engaging for students across the country.',
    imagePath: '../assets/buzz/bharat-buzz-2.png',
    collaborators: [],
  },
  {
    id: 'bharat-buzz-3',
    title: 'Bharat Buzz 3.0',
    focus: 'Martyrdom of Captain Anshuman Singh',
    description: 'Garnered 200K+ views across platforms with a deeply moving tribute to the bravery and sacrifice of Captain Anshuman Singh, sparking national conversations on valour and duty.',
    imagePath: '../assets/buzz/bharat-buzz-3.png',
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
    imagePath: '../assets/buzz/paris-olympics.png',
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
    imagePath: '../assets/buzz/paralympics.png',
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
  imagePath: '../assets/buzz/eci-certificate.png',
};
