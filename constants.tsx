import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'bhamashah-state-data-center',
    title: 'BHAMASHAH STATE DATA CENTER',
    location: 'Jaipur',
    mainCategory: 'ARCHITECTURE',
    category: 'Institutional',
    year: '2020',
    area: '3,60,000 SQFT',
    cost: 'Rs. 350 Cr',
    client: 'Sterling & Wilson Pvt. Ltd',
    image: 'https://i.postimg.cc/tRmg5wRG/bhamasa-data-center.png',
    gallery: [
      'https://i.postimg.cc/tRmg5wRG/bhamasa-data-center.png'
    ],
    description: 'A landmark digital infrastructure project designed for extreme resilience and structural performance. Features high-end materials, custom engineering integration, and modern geometric monumentality inspired by technological advancement.',
    status: 'Completed',
    typology: 'Institutional / Infrastructure',
  },
  {
    id: 'rajiv-gandhi-advanced-technology',
    title: 'RAJIV GANDHI CENTER OF ADVANCED TECHNOLOGY',
    location: 'Jaipur',
    mainCategory: 'ARCHITECTURE',
    category: 'Education',
    year: '2022',
    area: '1,22,485 SQFT',
    cost: 'Rs. 30 Cr',
    client: 'Rajasthan Government',
    image: 'https://i.postimg.cc/bv8Yrjgd/rajeev-gandi.png',
    gallery: [
      'https://i.postimg.cc/bv8Yrjgd/rajeev-gandi.png'
    ],
    description: 'A cutting-edge IT finishing school that serves as an educational center in Jaipur. Designed with crystalline glass structures, airy lecture spaces, and fluid internal pathways that encourage scientific learning and exchange.',
    status: 'Completed',
    typology: 'Institutional / Education',
  },
  {
    id: 'bhamashah-technology-hub',
    title: 'BHAMASHAH TECHNOLOGY HUB',
    location: 'Jaipur',
    mainCategory: 'ARCHITECTURE',
    category: 'Work',
    year: '2021',
    area: '3,60,000 SQFT',
    cost: 'Rs. 350 Cr',
    client: 'Sterling & Wilson Pvt. Ltd.',
    image: 'https://i.postimg.cc/zvL86DzQ/Bhamashah.png',
    gallery: [
      'https://i.postimg.cc/zvL86DzQ/Bhamashah.png'
    ],
    description: 'A premier collaborative environment for startup incubation and high-tech corporate research. Built around a dramatic central atrium that optimizes natural light penetration while maximizing social encounter spaces.',
    status: 'Completed',
    typology: 'Institutional / Tech Hub',
  },
  {
    id: 'civil-hospital-medical-college-sola',
    title: 'CIVIL HOSPITAL AND MEDICAL COLLEGE SOLA',
    location: 'Ahmedabad',
    mainCategory: 'ARCHITECTURE',
    category: 'Health',
    year: '2019',
    area: '15,00,000 SQFT • 1000 Beds',
    cost: 'Rs. 150 Cr (Est.)',
    client: 'Hospitech Management Pvt. Ltd.',
    image: 'https://i.postimg.cc/HsyTtLPv/Civil-Hospital.png',
    gallery: [
      'https://i.postimg.cc/HsyTtLPv/Civil-Hospital.png'
    ],
    description: 'A heavy clinical complex integrating a tertiary care 1000-bed hospital with teaching classrooms and residential halls. Focuses on patient-centric spatial organization, intuitive navigation, and sustainable thermal performance.',
    status: 'Completed',
    typology: 'Healthcare / Medical College',
  },
  {
    id: 'christian-hospital-bissam-cuttack',
    title: 'CHRISTIAN HOSPITAL',
    location: 'Bissam Cuttack',
    mainCategory: 'ARCHITECTURE',
    category: 'Health',
    year: '2018',
    area: '13.5 Acre • 200 Beds',
    cost: 'Rs. 13 Cr (Phase I)',
    client: 'ECOFIRST Pvt. Ltd.',
    image: 'https://i.postimg.cc/prnMk0kR/Christian-Hospital.png',
    gallery: [
      'https://i.postimg.cc/prnMk0kR/Christian-Hospital.png'
    ],
    description: 'Sensitive landscape integration and healing environments for a historic rural healthcare campus in Odisha. Low-tech sustainable air circulation systems combined with raw structural concrete finishes.',
    status: 'Completed',
    typology: 'Healthcare / Rural Campus',
  },
  {
    id: 'staff-housing-nimbahera',
    title: 'STAFF HOUSING',
    location: 'Nimbahera',
    mainCategory: 'ARCHITECTURE',
    category: 'Residential',
    year: '2017',
    area: '20 HA • 5,35,000 SQFT',
    cost: 'Rs. 90 Cr (Est.)',
    client: 'Lafarge India',
    image: 'https://i.postimg.cc/52JjYvNf/Staff-Housin.png',
    gallery: [
      'https://i.postimg.cc/52JjYvNf/Staff-Housin.png'
    ],
    description: 'A luxury grid of residential blocks nested in Nimbaheras industrial terrain. Balanced microclimate, wide walkways, and modular construction techniques that ensure rapid structural assembly and modern insulation.',
    status: 'Completed',
    typology: 'Residential / Township planning',
  },

  // HERITAGE CONSERVATION & HOSPITALITY PROJECTS
  {
    id: 'mundota-fort-palace',
    title: 'Mundota Fort & Palace',
    location: 'Rajasthan',
    mainCategory: 'ARCHITECTURE',
    category: 'Heritage Conservation & Hospitality',
    year: '2023',
    area: '52,000 SQFT',
    rooms: '125 Luxurious Rooms',
    heritageDetails: '450-Year-Old Palace',
    cost: 'Rs. 12 Cr',
    client: 'Mundota Family',
    image: 'https://i.ibb.co/W4mfYTqg/Screenshot-2026-05-20-144001.png',
    gallery: [
      'https://i.ibb.co/W4mfYTqg/Screenshot-2026-05-20-144001.png'
    ],
    description: 'Adaptive reuse and heritage conservation project involving restoration and hospitality redevelopment of the historic Mundota Fort & Palace into a luxury heritage destination while preserving the architectural identity and historic character of the original structure.',
    status: 'Completed',
    typology: 'Heritage Restoration & Luxury Hospitality',
  },
  {
    id: 'diggi-palace-hotel',
    title: 'Diggi Palace Hotel',
    location: 'Jaipur, Rajasthan',
    mainCategory: 'ARCHITECTURE',
    category: 'Heritage Conservation & Hospitality',
    year: '1860',
    area: '1,01,000 SQFT',
    rooms: '80 Luxurious Rooms',
    builtYear: '1860',
    client: 'Thakur Ram Pratap Singh Diggi',
    image: 'https://i.ibb.co/q3304G6P/s1654x900.jpg',
    gallery: [
      'https://i.ibb.co/q3304G6P/s1654x900.jpg'
    ],
    description: 'Luxury heritage hospitality restoration project focused on preserving the historical palace architecture while integrating refined hospitality experiences and modern functionality within a heritage environment.',
    status: 'Completed',
    typology: 'Heritage Restoration & Luxury Hospitality',
  },
  {
    id: 'hotel-diggi-fort',
    title: 'Hotel Diggi Fort',
    location: 'Rajasthan',
    mainCategory: 'ARCHITECTURE',
    category: 'Heritage Conservation & Hospitality',
    year: '2022',
    area: '76,00,000 SQFT',
    rooms: '60 Luxury Rooms',
    client: 'Thakur Ram Pratap Singh Diggi',
    image: 'https://i.ibb.co/mr1XDhwZ/Screenshot-2026-05-20-113418.png',
    gallery: [
      'https://i.ibb.co/mr1XDhwZ/Screenshot-2026-05-20-113418.png'
    ],
    description: 'Heritage hospitality development project combining conservation-sensitive restoration with contemporary hospitality planning while maintaining the cultural and architectural legacy of the historic fort property.',
    status: 'Completed',
    typology: 'Heritage Restoration & Luxury Hospitality',
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'indermohan-singh-nagpal',
    name: 'Indermohan Singh Nagpal',
    role: 'Director',
    qualification: 'B.Arch',
    almaMater: 'APIED Gujarat',
    experience: '35+ Years of Experience',
    image: 'https://i.ibb.co/V03r6pF9/ims.png',
    bio: 'Experienced architect specializing in medical colleges, hospitals, institutional infrastructure, commercial developments, and large-scale public projects from concept development to detailed execution drawings.',
    featuredProjects: [
      'AIIMS Raipur',
      'AIIMS Patna',
      'Military Hospital Dehradun',
      'Sola Medical College Ahmedabad',
      'Bhamashah State Data Centre',
      'Bhamashah Techno Hub',
      'Christian Hospital Bissam Cuttack',
      'Diggi Palace',
      'Diggi Fort',
      'Mundota Palace'
    ]
  },
  {
    id: 'saurabh-gupta',
    name: 'Saurabh Gupta',
    role: 'Director',
    qualification: 'B.Arch',
    almaMater: 'IIT Roorkee',
    experience: '27+ Years of Experience',
    image: 'https://i.ibb.co/tMmypJr0/sg.png',
    bio: 'Architect with extensive experience in residential, commercial, institutional, township, healthcare, and data infrastructure projects from concept development through detailed execution documentation.',
    featuredProjects: [
      'Sola Medical College Ahmedabad',
      'Bhamashah State Data Centre',
      'Bhamashah Techno Hub',
      'Township at Chittorgarh',
      'Rajasthan Data Control Centres',
      'Group Housing at Bhiwadi'
    ]
  }
];
