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
  tagline: "디자인을 정확하게 구현하고, 더 나은 사용 경험을 고민하는 퍼블리셔입니다",
  location: "Seoul, KR",
  email: "son115502@gmail.com",
  available: true,
  availabilityText: "Available for freelance",
};

export const heroStat = {
  value: "10+",
  label: "함께한 프로젝트",
};

export const avatarClasses = ["bg-play-blue", "bg-play-amber", "bg-play-teal"];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
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
  intro: "디자인을 이해하고 구현하는 퍼블리셔",
  detail:
    "디자인의 의도를 정확하게 이해하고 이를 화면에 자연스럽게 구현하는 과정을 중요하게 생각합니다. UI 디자인부터 퍼블리싱까지 직접 작업하며 사용자의 시선과 동선을 고려한 화면을 만들기 위해 노력합니다. 작은 디테일까지 놓치지 않는 꼼꼼함으로, 보기 좋은 디자인을 넘어 누구나 편하게 사용할 수 있는 완성도 높은 웹 서비스를 구현하는 것이 목표입니다.",
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
title: "Research",
    description: "프로젝트를 시작하기 전에 요구사항과 서비스의 목적을 먼저 파악합니다. 사용자 관점에서 필요한 기능과 화면 구성을 정리하고, 래퍼런스 조사와 정보 구조를 분석하며 전체적인 방향을 설정합니다. 이후의 디자인과 개발 과정이 자연스럽게 이어질 수 있도록 프로젝트의 기반을 만드는 단계입니다.",
  },
  {
    index: "02",
    title: "Design",
    description: "사용자의 흐름을 고려하여 화면을 설계하고, 디자인 시스템과 컴포넌트를 활용해 일관성 있는 UI를 제작합니다. 컬러, 타이포그래피, 간격 등 작은 요소까지 세심하게 고려하며 보기 좋은 화면을 넘어 누구나 직관적으로 사용할 수 있는 인터페이스를 만드는데 집중합니다.",
  },
  {
    index: "03",
    title: "Publish",
    description: "디자인의 의도를 그대로 전달할 수 있도록 HTML, CSS, JavaScript를 활용해 화면을 구현합니다. 퍼블리싱 과정에서 발생할 수 있는 문제를 사전에 예방하고, 반응형 레이아웃과 컴포넌트 구조를 고려하여 다양한 환경에서도 안정적으로 동작하는 화면을 만드는 것을 목표로 합니다. 유지보수가 쉬운 코드와 재사용성을 함께 고려하여 작업합니다.",
  },
  {
    index: "04",
    title: "Improve",
    description: "구현이 끝난 후에도 실제 사용성을 점검하며 화면을 지속적으로 개선합니다. UI의 디테일과 인터랙션을 확인하고, 발견된 문제를 수정하며 더 자연스러운 사용자 경험을 만들어갑니다. 작은 피드백도 놓치지 않고 반영하여 프로젝트의 완성도를 높이는 과정을 중요하게 생각합니다.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@sonyejin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
