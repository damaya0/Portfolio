type Education = {
  institution: string
  degree: string
  duration: string
  gpa?: string
  achievements?: string[]
  coursework?: string[]
  id: string
}

type InternExperience = {
  title: string
  company: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
  images?: string[]
  id: string
}

type Award = {
  title: string
  organization: string
  year?: string
  description?: string
  image?: string
  awards?: string[]
  id: string
}

type AcademicProject = {
  name: string
  description: string
  link?: string
  technologies?: string[]
  image?: string
  id: string
}

type Skill = {
  category: string
  items: string[]
  id: string
}

type Accomplishment = {
  title: string
  organization: string
  year: string
  description?: string
  id: string
}

type VolunteeringRole = {
  role: string
  startDate: string
  endDate: string
  description?: string
}

type Volunteering = {
  organization: string
  icon?: string
  image?: string
  roles: VolunteeringRole[]
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EDUCATION: Education[] = [
  {
    institution: 'University of Moratuwa',
    degree: 'BSc (Hons) Electronic & Telecommunication Engineering',
    duration: 'Aug 2022 – Present',
    gpa: '3.79/4.0',
    achievements: [
      "Dean's List (Semesters 1, 2, 4, 6)",
    ],
    coursework: [
      'Linear Algebra',
      'Applied Statistics',
      'Image Processing and Machine Vision',
      'Pattern Recognition',
      'Digital System Design',
      'Circuit Design',
      'Embedded Systems and Applications',
      'Data Structures and Algorithms',
    ],
    id: 'edu1',
  },
  {
    institution: 'Ananda College, Colombo 10',
    degree: 'GCE Advanced Level',
    duration: 'Jan 2018 – Oct 2020',
    achievements: [
      '🏆 Ranked 9th in Sri Lanka and 3rd in Colombo District',
    ],
    coursework: ['Combined Mathematics', 'Physics', 'Chemistry'],
    id: 'edu2',
  },
]

export const INTERN_EXPERIENCE: InternExperience[] = [
  {
    title: 'Software Engineering Intern',
    company: 'WSO2',
    duration: 'June 2024 – December 2024',
    description:
      'Working on integration solutions and microservices architecture, contributing to enterprise-level software development.',
    responsibilities: [
      'Developed modules using the Ballerina programming language',
      'Worked as Editor for Ballerina Central',
      'Designed and Developed an Agentic-AI System for Mi Diagnostics',
      'Did a research on Advance Data Synchronization with Gateways',
    ],
    technologies: [
      'Ballerina',
      'Java',
      'Python',
      'Agentic-AI',
      'LangChain',
      'LangGraph',
      'React',
      'TypeScript',
    ],
    id: 'intern1',
  },
]

export const AWARDS: Award[] = [
  // Awards with images - displayed first
  {
    title: '1st Runners up – Spark Challenge 2024',
    organization: 'Industry Competition',
    image: '/awards/spark-challenge.jpg',
    id: 'award1',
  },
  {
    title: 'Best Community Project Award',
    organization: 'Innovation Bootcamp by Meta',
    year: '2023',
    image: '/awards/community-project.jpg',
    id: 'award4',
  },
  {
    title: 'Gavelier of the Year',
    organization: 'Gavel Club',
    year: '2023',
    image: '/awards/gavelier-year.jpg',
    id: 'award5',
  },
  {
    title: 'Spirit of Service',
    organization: 'Rotaract UoM',
    year: '2023',
    image: '/awards/spirit-service.jpg',
    id: 'award6',
  },
  // School Awards - Separate section (moved to end)
  {
    title: 'School Awards - Final Prize Giving',
    organization: 'Ananda College',
    year: '2020',
    description:
      'I won eight prestigious prizes and awards at the final prize giving of my school life. I received these prizes from honorable then president Ranil Wickremesinghe.',
    image: '/awards/school-awards.jpg',
    awards: [
      'C.W. Leadbeater Challenge Cup - Island 9th',
      'Fritz Kunz Memorial Award',
      'C.M. Weerarathna Memorial Award',
      'P.De.S.Kularathna Memorial Award',
      'Jayantha Mallimarachchi Memorial Award',
      'OBA Japan Branch Award',
      'Harold Jayathilaka Memorial Award for Physics',
      'Muhandiram Charles Memorial Award for Combined Mathematics',
    ],
    id: 'award_school',
  },
  // Awards without images
  {
    title: 'Merit Award – Predicta 1.0 Machine Learning Competition',
    organization: 'ML Competition',
    description: 'Ranked 7th',
    id: 'award2',
  },
  {
    title: 'ScholarX Mentee',
    organization: 'SEF',
    year: '2024',
    id: 'award3',
  },
  {
    title: 'Mahapola Higher Education Scholarship (Merit)',
    organization: 'Government of Sri Lanka',
    id: 'award7',
  },
  {
    title: 'Most Outstanding student of the physical science section in grade 12',
    organization: 'Ananda College',
    id: 'award9',
  },
]

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    name: 'Multimodal Wild Animal Detection System',
    description: 'Currently Developing a mass-deployable edge detection node to mitigate Human-Elephant Conflict (HEC) by fusing computer vision and seismic data. The system runs YOLOv5/v11 models with Quantization Aware Training (QAT) on a Qualcomm QCS6490/Raspberry Pi architecture, integrated with a custom PCB for geophone signal filtering. Features include STA/LTA algorithms for footstep detection and an off-grid solar power management system.',
    technologies: ['Edge AI', 'YOLOv5', 'YOLOv11', 'QAT', 'Qualcomm QCS6490', 'Raspberry Pi', 'PCB Design', 'Seismic Sensing', 'Solar Power'],
    image: '/projects/wild-animal.jpg',
    id: 'project1',
  },
  {
    name: 'Smart Water Bottle',
    description: 'Developed a mobile companion app for a smart water bottle using Flutter and Firebase. The application visualizes real-time hydration data transmitted by an ESP-based ultrasonic sensor system. Key features include dynamic daily goal setting, historical consumption analytics, and automated push notifications to encourage consistent hydration habits.',
    technologies: ['Flutter', 'Firebase', 'IoT', 'ESP', 'Embedded Systems'],
    image: '/projects/smart-water.jpg',
    link: 'https://github.com/damaya0/Smart-Water-Bottle',
    id: 'project3',
  },
  {
    name: 'Depth Camera Using Single Cam',
    description: 'Engineered a cost-effective depth measurement system integrating hardware and software. Designed a custom PCB (ATmega328P) to control precise camera rotation, enabling stereo-like image capture from a single lens. The pipeline employs Python, OpenCV, and YOLOv8 for object detection, utilizing SIFT algorithms and triangulation logic to calculate depth from 2D images.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision', 'PCB Design', 'ATmega328P', 'SIFT'],
    image: '/projects/depth-camera.png',
    link: 'https://github.com/damaya0/Depth-Camera',
    id: 'project9',
  },
  {
    name: 'RAKI Elderly Assistant',
    description: 'Created an AI-powered virtual caretaker designed to provide emotional support for elderly Sinhala speakers. Built using Python and FastAPI, the application integrates with the OpenAI API to bridge language barriers, offering a conversational interface that makes digital companionship accessible to non-English speaking seniors.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'AI', 'NLP'],
    image: '/projects/raki-elderly.jpg',
    link: 'https://github.com/damaya0/rekawarana-code',
    id: 'project5',
  },
  {
    name: 'Transformer Tracker',
    description: 'Developed a full-stack asset management system for power transformers using Java Spring Boot and React (TypeScript). The platform streamlines inspection tracking and integrates a Python FastAPI microservice utilizing YOLOv5. This AI pipeline performs automated anomaly detection on thermal images, identifying faults like loose joints via a seamless RESTful architecture.',
    technologies: ['Java Spring Boot', 'React', 'TypeScript', 'Python', 'FastAPI', 'YOLOv5', 'Computer Vision'],
    image: '/projects/transformer-tracker.jpg',
    link: 'https://github.com/damaya0/EN3350-TransTrack',
    id: 'project13',
  },
  {
    name: 'Lead Acid Battery Charger',
    description: 'Designed a dual-stage (CC-CV) charger for 12V lead-acid batteries, optimizing charging efficiency and battery health. The system transitions from a constant 1A current to a regulated 13.3V maintenance phase. Implemented using analog electronics with dual NE555 timer ICs to control Pulse Width Modulation (PWM) for precise voltage stabilization.',
    technologies: ['Power Electronics', 'Circuit Design', 'Analog Electronics', 'NE555', 'PWM'],
    image: '/projects/battery-charger.jpg',
    link: 'https://github.com/damaya0/Lead-Acid-Battery-Charger',
    id: 'project14',
  },
  {
    name: 'Joint Phase Noise and Channel Estimation for Sub-THz Communication',
    description:
      'Final year project focusing on advanced communication systems',
    technologies: ['Signal Processing', 'Communication Systems'],
    link: 'https://github.com/damaya0/SubTHz-Joint-Estimation',
    id: 'project2',
  },
  {
    name: 'UniLink Social Platform',
    description: 'Social networking platform for university students',
    technologies: ['Web Development', 'Full Stack'],
    link: 'https://github.com/damaya0/Unilink-social-media-platform-m',
    id: 'project4',
  },
  {
    name: 'nanoGPT Implementation',
    description: 'Implementation of a compact GPT language model',
    technologies: ['Deep Learning', 'PyTorch', 'NLP'],
    link: 'https://github.com/damaya0/nanoGPT',
    id: 'project6',
  },
  {
    name: 'Anomaly Detection Chest X-ray System',
    description: 'Medical imaging system for detecting anomalies in chest X-rays',
    technologies: ['Deep Learning', 'Computer Vision', 'Medical Imaging'],
    link: 'https://github.com/damaya0/Implementation-of-Dual-Distribution-Discrepancy-for-Anomaly-Detection',
    id: 'project7',
  },
  {
    name: 'Smart Medibox',
    description: 'Smart medication dispenser with reminder system',
    technologies: ['IoT', 'Arduino', 'Embedded Systems'],
    id: 'project8',
  },
  {
    name: 'UART FPGA Implementation',
    description: 'Hardware implementation of UART protocol on FPGA',
    technologies: ['FPGA', 'Digital Design', 'Verilog'],
    id: 'project10',
  },
  {
    name: 'Autonomous Robot',
    description: 'Self-navigating robot with obstacle avoidance',
    technologies: ['Robotics', 'Embedded Systems', 'Arduino'],
    id: 'project11',
  },
  {
    name: 'Future Weather Prediction',
    description: 'Machine learning model for weather forecasting',
    technologies: ['Machine Learning', 'Python', 'Data Analysis'],
    link: 'https://github.com/damaya0/Predicta-1.0-P259',
    id: 'project12',
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['English (Professional)', 'Sinhala (Native)'],
    id: 'skill1',
  },
  {
    category: 'Programming',
    items: ['Python', 'C++', 'MATLAB', 'Java'],
    id: 'skill2',
  },
  {
    category: 'Software & Tools',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Altium',
      'LTSpice',
      'OpenCV',
      'Arduino',
    ],
    id: 'skill3',
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Project Management', 'Public Speaking'],
    id: 'skill4',
  },
]

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    title: 'WSO2 Certified Micro Integrator Practitioner - V4',
    organization: 'WSO2',
    year: '2024',
    id: 'cert1',
  },
  {
    title: 'High Performance + Mission Critical Software Development using C++',
    organization: 'LSEG',
    year: '2024',
    id: 'cert2',
  },
  {
    title: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI (Coursera)',
    year: '2024',
    id: 'cert3',
  },
  {
    title: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    year: 'Ongoing',
    id: 'cert4',
  },
  {
    title: 'Computer Vision and Image Processing Essentials',
    organization: 'IBM (Coursera)',
    year: '2024',
    id: 'cert5',
  },
  {
    title: 'Marketing Foundations',
    organization: 'LinkedIn',
    year: '2019',
    id: 'cert6',
  },
]

export const VOLUNTEERING: Volunteering[] = [
  {
    organization: 'Gavel Club of University of Moratuwa',
    image: '/volunteering/gavel.jpg',
    roles: [
      {
        role: 'Vice President of Membership',
        startDate: 'March 2024',
        endDate: 'March 2025',
        description:
          'Managed membership database and mentoring programs. Organized joint club meetings to foster growth. Successfully increased membership from over 60 people during tenure.',
      },
      {
        role: 'Project Chairperson (Chapter-X)',
        startDate: 'January 2024',
        endDate: 'March 2024',
        description: 'Served as Co-chairperson of Chapter-X.',
      },
      {
        role: 'Member',
        startDate: 'January 2023',
        endDate: 'March 2024',
        description:
          'Logistic Pillar Head for Speech Olympiad XVI and Project Chairperson for Ruhuna-Mora joint meeting. Achievements include Speech Olympiad XVI Finalist, Speech Olympiad XV Semi-Finalist, and 4th place at Eloquence inter-university public speaking competition.',
      },
    ],
    id: 'org1',
  },
  {
    organization: 'Rotaract Club of University of Moratuwa',
    image: '/volunteering/rotaract.jpg',
    roles: [
      {
        role: 'Inducted Member',
        startDate: 'January 2023',
        endDate: 'December 2024',
        description:
          'Worked as an organizing committee member in over 10 voluntary projects. Roles included moderating the Induction Ceremony, compere for Sri Lanka Model Rotaract United Nations, and moderating the Kerdizo workshop.',
      },
      {
        role: 'Chairperson (Boon-Digiti)',
        startDate: 'February 2023',
        endDate: 'August 2023',
        description:
          'Volunteered as co-chairperson of the project Boon-Digiti, an initiative by the international service avenue.',
      },
      {
        role: 'Chairperson (Annual Prom Night)',
        startDate: 'May 2023',
        endDate: 'July 2023',
        description:
          'Volunteered as the co-chairperson of the annual prom night.',
      },
      {
        role: 'Chairperson (Are You Ready?)',
        startDate: 'February 2023',
        endDate: 'May 2023',
        description:
          'Co-chaired "Career Insight," a sub-project of the official career fair of the University of Moratuwa, "Are You Ready?".',
      },
    ],
    id: 'org2',
  },
  {
    organization: 'IEEE Professional Communication Student Branch Chapter of University of Moratuwa',
    image: '/volunteering/ieee.jpg',
    roles: [
      {
        role: 'Chairperson',
        startDate: 'March 2024',
        endDate: 'Present',
        description: 'Leading the student branch chapter.',
      },
      {
        role: 'Assistant Treasurer',
        startDate: 'January 2023',
        endDate: 'June 2025',
        description: 'Managed financial operations of the chapter.',
      },
    ],
    id: 'org3',
  },
  {
    organization: 'Old Anandian Engineers\' Guild',
    image: '/volunteering/oaeg.jpg',
    roles: [
      {
        role: 'Assistant Director',
        startDate: 'March 2023',
        endDate: 'March 2023',
        description:
          'Served in a leadership capacity for the guild for a specific tenure.',
      },
      {
        role: 'Committee Member',
        startDate: 'March 2022',
        endDate: 'March 2023',
        description:
          'Served as a full-time committee member, contributing to management and organization.',
      },
    ],
    id: 'org4',
  },
  {
    organization: 'Electronic Club UOM',
    image: '/volunteering/eclub.jpg',
    roles: [
      {
        role: 'Committee Member',
        startDate: 'August 2023',
        endDate: 'August 2024',
        description:
          'Part of the organizing committee for the flagship event of the department, Envoyage. Developed compering and leadership skills.',
      },
    ],
    id: 'org5',
  },
  {
    organization: 'Electronic and Telecom. Engineering - University of Moratuwa',
    image: '/volunteering/entc.jpg',
    roles: [
      {
        role: 'Batch Representative',
        startDate: 'January 2024',
        endDate: 'May 2025',
        description:
          'Serving as the full-time batch representative for the department, demonstrating communication and leadership skills.',
      },
    ],
    id: 'org6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Designing and Implementing an Agentic AI analyzer for WSO2 Micro Integrator diagnostics',
    description: 'An in-depth look at building an intelligent AI analyzer for WSO2 Micro Integrator using agentic AI principles',
    link: 'https://medium.com/@damsithadikari2001/designing-and-implementing-an-agentic-ai-analyzer-for-wso2-micro-integrator-diagnostics-ae6eaae7628a',
    uid: 'blog-1',
  },
  {
    title: 'Ballerina Integration for HubSpot Companies API',
    description: 'A comprehensive guide to integrating Ballerina with HubSpot Companies API',
    link: 'https://medium.com/@damsithadikari2001/ballerina-integration-for-hubspot-companies-api-6c4497de4692',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/damaya0',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/damsith-adikari-5244711a0/',
  },
]

export const EMAIL = 'damsithadikari2001@gmail.com'
export const PHONE = '+94 713 843 356'
