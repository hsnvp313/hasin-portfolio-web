import { ImagesScrollingAnimation, type ProjectItem } from "@/components/ui/images-scrolling-animation";

const projects: ProjectItem[] = [
  {
    title: "S-Mart - Smart Retail Automation",
    tech: ["Flutter", "Python", "Firebase", "JWT", "OpenCV"],
    highlights: [
      "QR-based workflow for product scanning and checkout",
      "Real-time Firestore sync across devices",
      "JWT and RBAC-based authentication system",
    ],
    github: "https://github.com/hsnvp313/S-Mart",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "MobBox - Real-Time Mobile Controller",
    tech: ["Flutter", "Python", "Sockets", "TCP"],
    highlights: [
      "TCP socket communication between devices",
      "Cross-device architecture with low latency",
      "Real-time input streaming and response",
    ],
    github: "https://github.com/hsnvp313/Mob-Box-The-Game-Controller-Prompt-Engineered",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Smart Dashboard - React Admin Panel",
    tech: ["React", "REST API", "Vite", "Tailwind"],
    highlights: [
      "Modular component architecture",
      "API integration with error handling",
      "Responsive layout with data visualization",
    ],
    github: "https://github.com/hsnvp313/Smart-Dashboard",
    color: "from-orange-500/10 to-rose-500/10",
  },
  {
    title: "Lunar Tracker - Moon Phase Web App",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Astronomical calculations for moon phases",
      "Clean, minimal UI with responsive design",
      "Vanilla JS with no framework dependency",
    ],
    github: "https://github.com/hsnvp313/Moon-Phase-Tracker-Web-App",
    color: "from-indigo-500/10 to-fuchsia-500/10",
  },
];

const SelectedWork = () => {
  return (
    <section id="projects" className="bg-card py-20 md:py-28">
      <div className="container  mb-2 max-w-5xl">
        <h2 className="mb-2  text-3xl">Selected Works</h2>
      </div>
      <ImagesScrollingAnimation projects={projects} />
    </section>
  );
};

export default SelectedWork;
