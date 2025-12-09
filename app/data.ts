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
  company: string
  title: string
  duration: string
  responsibilities: string[]
  link?: string
  id: string
}

type Award = {
  title: string
  organization: string
  year?: string
  description?: string
  id: string
}

type AcademicProject = {
  name: string
  description: string
  link?: string
  technologies?: string[]
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

type Volunteering = {
  role: string
  organization: string
  duration?: string
  description?: string
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
      'Z-score 2.8655',
      'Ranked 9th in Sri Lanka and 3rd in Colombo District',
    ],
    coursework: ['Combined Mathematics', 'Physics', 'Chemistry'],
    id: 'edu2',
  },
]

export const INTERN_EXPERIENCE: InternExperience[] = [
  {
    company: 'WSO2',
    title: 'Software Engineering Intern',
    duration: 'Dec 2024 – May 2025',
    responsibilities: [
      'Designed and implemented an Agentic AI analyzer for WSO2 Micro Integrator diagnostics',
      'Developed Ballerina integration for HubSpot Companies API',
    ],
    link: 'https://wso2.com',
    id: 'intern1',
  },
]

export const AWARDS: Award[] = [
  {
    title: '1st Runners up – Spark Challenge 2024',
    organization: 'Industry Competition',
    id: 'award1',
  },
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
    title: 'Best Community Project Award',
    organization: 'Innovation Bootcamp by Meta',
    year: '2023',
    id: 'award4',
  },
  {
    title: 'Gavelier of the Year',
    organization: 'Gavel Club',
    year: '2023',
    id: 'award5',
  },
  {
    title: 'Spirit of Service',
    organization: 'Rotaract UoM',
    year: '2023',
    id: 'award6',
  },
  {
    title: 'Mahapola Higher Education Scholarship (Merit)',
    organization: 'Government of Sri Lanka',
    id: 'award7',
  },
  {
    title: 'CW Leadbeater Challenge Cup',
    organization: 'Ananda College',
    id: 'award8',
  },
  {
    title: 'Harold Jayathilaka Memorial Award',
    organization: 'Ananda College',
    id: 'award9',
  },
  {
    title: 'Muhandiram Charles Memorial Award',
    organization: 'Ananda College',
    id: 'award10',
  },
  {
    title: 'Ananda Pradeepa Award',
    organization: 'Ananda College',
    id: 'award11',
  },
]

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    name: 'Multimodal Wild Animal Detection System',
    description:
      'Final year project in collaboration with Dialog Axiata for wildlife detection using multimodal approaches',
    technologies: ['Machine Learning', 'Computer Vision'],
    id: 'project1',
  },
  {
    name: 'Joint Phase Noise and Channel Estimation for Sub-THz Communication',
    description:
      'Final year project focusing on advanced communication systems',
    technologies: ['Signal Processing', 'Communication Systems'],
    id: 'project2',
  },
  {
    name: 'Smart Water Bottle',
    description: 'IoT-based smart water bottle with health tracking features',
    technologies: ['IoT', 'Embedded Systems'],
    id: 'project3',
  },
  {
    name: 'UniLink Social Platform',
    description: 'Social networking platform for university students',
    technologies: ['Web Development', 'Full Stack'],
    id: 'project4',
  },
  {
    name: 'RAKI Elderly Assistant',
    description: 'AI-powered assistant system for elderly care',
    technologies: ['AI', 'Python'],
    id: 'project5',
  },
  {
    name: 'nanoGPT Implementation',
    description: 'Implementation of a compact GPT language model',
    technologies: ['Deep Learning', 'PyTorch', 'NLP'],
    id: 'project6',
  },
  {
    name: 'Anomaly Detection Chest X-ray System',
    description: 'Medical imaging system for detecting anomalies in chest X-rays',
    technologies: ['Deep Learning', 'Computer Vision', 'Medical Imaging'],
    id: 'project7',
  },
  {
    name: 'Smart Medibox',
    description: 'Smart medication dispenser with reminder system',
    technologies: ['IoT', 'Arduino', 'Embedded Systems'],
    id: 'project8',
  },
  {
    name: 'Depth Camera Using Single Cam',
    description: 'Depth estimation system using monocular camera',
    technologies: ['Computer Vision', 'Python', 'OpenCV'],
    id: 'project9',
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
    title: 'High Performance + Mission Critical Software Development using C++',
    organization: 'LSEG',
    year: '2024',
    id: 'cert1',
  },
  {
    title: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI (Coursera)',
    year: '2024',
    id: 'cert2',
  },
  {
    title: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    year: 'Ongoing',
    id: 'cert3',
  },
  {
    title: 'Marketing Foundations',
    organization: 'LinkedIn',
    year: '2019',
    id: 'cert4',
  },
]

export const VOLUNTEERING: Volunteering[] = [
  {
    role: 'Chairperson',
    organization: 'IEEE Professional Communication Chapter',
    duration: '2025 – Present',
    id: 'vol1',
  },
  {
    role: 'Assistant Treasurer',
    organization: 'IEEE Professional Communication Chapter',
    duration: '2023 – 2025',
    id: 'vol2',
  },
  {
    role: 'Field Representative',
    organization: 'University of Moratuwa',
    duration: 'Semesters 4–6',
    id: 'vol3',
  },
  {
    role: 'Vice President (Membership)',
    organization: 'Gavel Club',
    id: 'vol4',
  },
  {
    role: 'Marketing Committee Member',
    organization: 'EXMO',
    id: 'vol5',
  },
  {
    role: 'Executive, External Relations',
    organization: 'Electronic Club',
    id: 'vol6',
  },
  {
    role: 'Assistant Director Projects',
    organization: 'Old Anandians Engineering Guild',
    id: 'vol7',
  },
  {
    role: 'Public Speaking Competitor',
    organization: 'Various Competitions',
    description:
      'Semi-Finalist Speech Olympiad XV, Finalist Speech Olympiad XVI, 4th at Eloquence (Inter-Uni), Semi-finalist Mora Lenz Media Awards',
    id: 'vol8',
  },
  {
    role: 'Event Organizer',
    organization: 'Various University Events',
    description:
      'ChapterX, Boon Digiti, Prom Night, Gavel Meetings, Career Insight, Speech Olympiad, Congregation, Envoyage',
    id: 'vol9',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
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
    link: 'https://linkedin.com/in/Damsith-Adikari',
  },
]

export const EMAIL = 'damsithadikari2001@gmail.com'
export const PHONE = '+94 713 843 356'
