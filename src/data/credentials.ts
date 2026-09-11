export interface Credential {
  id: string;
  title: string;
  institution: string;
  credentialType: 'certification' | 'diploma' | 'academics';
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skillsAcquired: string[];
  description: string;
}

export const CREDENTIALS_DATA: Credential[] = [
  {
    id: 'cred-01',
    title: 'Diploma in Computer Engineering',
    institution: 'Gujarat Technological University (GTU)',
    credentialType: 'diploma',
    issueDate: 'Ongoing / Present',
    skillsAcquired: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Web Technologies (HTML/CSS/JS)',
      'Software Engineering Principles'
    ],
    description:
      'Pursuing formal technical education in computer engineering, providing an architectural and programmatic foundation that informs accessible, component-based UI design and smooth developer handoff.'
  },
  {
    id: 'cred-02',
    title: 'Certified UI/UX Designer',
    institution: 'Xipra Tech',
    credentialType: 'certification',
    issueDate: '2024',
    credentialId: 'XT-UIUX-2024',
    skillsAcquired: [
      'User Research & Personas',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Figma Design Systems & Tokens',
      'Usability Testing & WCAG AA'
    ],
    description:
      'Rigorous industry certification mastering the full UX double-diamond framework, design system tokens, interactive prototypes in Figma, and accessibility standards.'
  },
  {
    id: 'cred-03',
    title: 'Graphic Design Professional Course',
    institution: 'Xipra Tech',
    credentialType: 'certification',
    issueDate: '2024',
    credentialId: 'XT-GD-2024',
    skillsAcquired: [
      'Visual Identity & Branding',
      'Typography Hierarchy',
      'Adobe Illustrator & Vector Art',
      'Adobe Photoshop & 3D Mockups',
      'Print Production & Packaging'
    ],
    description:
      'Specialized curriculum focused on brand identity creation, corporate style guides, packaging guidelines, color theory, and Swiss editorial typography.'
  },
  {
    id: 'cred-04',
    title: 'Higher Secondary Certificate (12th Science)',
    institution: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
    credentialType: 'academics',
    issueDate: 'Completed',
    skillsAcquired: [
      'Physics & Analytical Logic',
      'Mathematics & Quantitative Problem Solving',
      'Scientific Methodology'
    ],
    description:
      'Completed 12th grade in Science stream with strong emphasis on mathematical logic, structured problem solving, and analytical reasoning.'
  }
];

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; isTool?: boolean }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Wireframing', level: 'Advanced' },
      { name: 'Interactive Prototyping', level: 'Advanced' },
      { name: 'Design Systems', level: 'Advanced' },
      { name: 'User Flow Mapping', level: 'Intermediate' },
      { name: 'WCAG Accessibility', level: 'Intermediate' },
      { name: 'Information Architecture', level: 'Intermediate' }
    ]
  },
  {
    title: 'Graphic Design & Branding',
    skills: [
      { name: 'Brand Identity', level: 'Advanced' },
      { name: 'Logo Design & Typography', level: 'Advanced' },
      { name: 'Packaging & Print', level: 'Intermediate' },
      { name: 'Social Media Assets', level: 'Advanced' },
      { name: 'Vector Illustration', level: 'Intermediate' }
    ]
  },
  {
    title: 'Tools & Software',
    skills: [
      { name: 'Figma', level: 'Expert', isTool: true },
      { name: 'Adobe Illustrator', level: 'Advanced', isTool: true },
      { name: 'Adobe Photoshop', level: 'Advanced', isTool: true },
      { name: 'Canva', level: 'Advanced', isTool: true },
      { name: 'VS Code & Git', level: 'Intermediate', isTool: true }
    ]
  },
  {
    title: 'Engineering & Code',
    skills: [
      { name: 'HTML5 & CSS3', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'JavaScript / TypeScript', level: 'Intermediate' },
      { name: 'React / Next.js Basics', level: 'Familiar' }
    ]
  }
];
