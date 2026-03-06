import { ImagesScrollingAnimation, type ProjectItem } from "@/components/ui/images-scrolling-animation";

const demoProjects: ProjectItem[] = [
  {
    title: "S-Mart - Smart Retail Automation",
    tech: ["Flutter", "Python", "Firebase"],
    highlights: ["QR-based checkout flow", "Firestore sync", "JWT and RBAC auth"],
    github: "https://github.com/hsnvp313/S-Mart",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "MobBox - Real-Time Mobile Controller",
    tech: ["Flutter", "Python", "TCP"],
    highlights: ["Socket communication", "Low-latency architecture", "Realtime stream"],
    github: "https://github.com/hsnvp313/Mob-Box-The-Game-Controller-Prompt-Engineered",
    color: "from-emerald-500/10 to-teal-500/10",
  },
];

export default function DemoOne() {
  return <ImagesScrollingAnimation projects={demoProjects} />;
}
