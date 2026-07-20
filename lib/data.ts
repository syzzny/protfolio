import { Project, ProcessStep, Skill, SocialLink } from "@/types";

export const projectGradients = [
  "from-foreground via-foreground/90 to-accent/40",
  "from-muted via-foreground/80 to-accent/30",
  "from-accent/50 via-foreground/85 to-foreground",
  "from-foreground via-accent/20 to-muted",
];

export const chipClasses = [
  "bg-play-blue/10 text-play-blue border-play-blue/25",
  "bg-play-teal/10 text-play-teal border-play-teal/25",
  "bg-play-amber/10 text-play-amber border-play-amber/25",
  "bg-play-purple/10 text-play-purple border-play-purple/25",
  "bg-play-lime/10 text-play-lime border-play-lime/25",
];

export const solidPlayClasses = [
  "bg-play-blue",
  "bg-play-teal",
  "bg-play-amber",
  "bg-play-purple",
  "bg-play-lime",
];

export const personal = {
  name: "손예진",
  nameEn: "Yejin's portfolio",
  title: "UI/UX Designer & Publisher",
  tagline: "디자인을 정확하게 구현하고, 더 나은 사용 경험을 고민하는 퍼블리셔",
  location: "Seoul, KR",
  email: "hello@sonyejin.com",
};

export const heroStat = {
  value: "10+",
  label: "함께한 프로젝트",
};

export const avatarClasses = ["bg-play-blue", "bg-play-amber", "bg-play-teal"];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  {
    category: "Design",
    items: [
      { name: "Figma", level: 5 },
      { name: "Photoshop", level: 4 },
      { name: "Illustrator", level: 4 },
    ],
  },
  {
    category: "Publishing",
    items: [
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
      { name: "Sass", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "React", level: 3 },
      { name: "Bootstrap", level: 5 },
      { name: "Styled-components", level: 5 },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "Notion", level: 5 },
      { name: "GitHub", level: 3 },
    ],
  },
];

export const aboutText = {
  intro: "사용자의 흐름을 이해하고, 그 흐름이 자연스러운 화면이 되도록 디자인하고 퍼블리싱합니다.",
  detail:
    "디자인과 퍼블리싱 사이의 간극을 줄이는 데 관심이 많습니다. 인터랙션 하나, 여백 1px까지 의도를 담아 작업하며, 기획-디자인-구현이 끊기지 않는 결과물을 만듭니다.",
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Nova Finance",
    category: "Web App · UX Design",
    year: "2025",
    role: "Product Designer",
    coverImage: "",
    images: [],
    summary: "복잡한 금융 데이터를 직관적인 대시보드로 재설계",
    description:
      "개인 자산관리 서비스의 정보 구조를 재설계하고, 데이터 시각화 중심의 대시보드를 새로 만들었습니다. 사용자 리서치부터 디자인 시스템 구축, 퍼블리싱까지 전 과정을 담당했습니다.",
    tools: ["Figma", "React", "Next.js"],
  },
  {
    slug: "project-two",
    title: "Atelier Mono",
    category: "Branding · Web",
    year: "2024",
    role: "UI Designer / Publisher",
    coverImage: "",
    images: [],
    summary: "미니멀 라이프스타일 브랜드의 아이덴티티와 웹 경험",
    description:
      "브랜드 아이덴티티에 맞춘 그리드 시스템과 타이포그래피를 정립하고, 반응형 웹사이트로 퍼블리싱했습니다. 스크롤 인터랙션에 공을 들였습니다.",
    tools: ["Figma", "Framer Motion", "GSAP"],
  },
  {
    slug: "project-three",
    title: "Loop Studio",
    category: "Portfolio Platform",
    year: "2024",
    role: "Frontend Publisher",
    coverImage: "",
    images: [],
    summary: "크리에이터를 위한 포트폴리오 퍼블리싱 플랫폼",
    description:
      "다양한 크리에이터의 작업물을 담는 템플릿형 플랫폼의 프론트엔드를 퍼블리싱했습니다. 접근성과 성능 최적화를 함께 고려했습니다.",
    tools: ["TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    slug: "project-four",
    title: "Signal Health",
    category: "Mobile App · UX",
    year: "2023",
    role: "UX Designer",
    coverImage: "",
    images: [],
    summary: "헬스케어 앱의 온보딩 및 데이터 트래킹 경험 설계",
    description:
      "복잡한 건강 데이터를 사용자가 이해하기 쉬운 흐름으로 재구성했습니다. 사용성 테스트를 반복하며 온보딩 이탈률을 낮췄습니다.",
    tools: ["Figma", "Protopie", "Maze"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "리서치와 요구사항 분석을 통해 문제를 정의합니다.",
  },
  {
    index: "02",
    title: "Design",
    description: "정보 구조를 설계하고 UI 시스템을 구축합니다.",
  },
  {
    index: "03",
    title: "Build",
    description: "디자인을 반응형 웹으로 정교하게 퍼블리싱합니다.",
  },
  {
    index: "04",
    title: "Refine",
    description: "테스트와 피드백을 통해 디테일을 다듬습니다.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@sonyejin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
