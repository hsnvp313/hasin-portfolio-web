import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const projects = [
  {
    title: "S-Mart – Smart Retail Automation",
    tech: ["Flutter", "Python", "Firebase","JWT","OpenCV"],
    highlights: [
      "QR-based workflow for product scanning and checkout",
      "Real-time Firestore sync across devices",
      "JWT & RBAC-based authentication system",
    ],
    github: "#",
    color: 'from-blue-500/10 to-purple-500/10'
  },
  {
    title: "MobBox – Real-Time Mobile Controller",
    tech: ["Flutter", "Python", "Sockets","TCP"],
    highlights: [
      "TCP socket communication between devices",
      "Cross-device architecture with low latency",
      "Real-time input streaming and response",
    ],
    github: "#",
    color: 'from-green-500/10 to-teal-500/10'
  },
  {
    title: "Smart Dashboard – React Admin Panel",
    tech: ["React", "REST API","Vite","Tailwind"],
    highlights: [
      "Modular component architecture",
      "API integration with error handling",
      "Responsive layout with data visualization",
    ],
    github: "#",
    color: 'from-orange-500/10 to-red-500/10'
  },
  {
    title: "Lunar Tracker – Moon Phase Web App",
    tech: ["HTML", "CSS", "JavaScript",],
    highlights: [
      "Astronomical calculations for moon phases",
      "Clean, minimal UI with responsive design",
      "Vanilla JS with no framework dependency",
    ],
    github: "#",
    color: 'from-indigo-500/10 to-pink-500/10'
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SelectedWork = () => {
  const { ref, controls } = useScrollFadeIn(0.1);

  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="container max-w-5xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={stagger}
        >
          <motion.h2 className="text-3xl mb-12" variants={fadeUp}>
            Selected Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className={`p-6 rounded-xl bg-background border border-border bg-gradient-to-br ${project.color} shadow-sm hover:shadow-md transition-shadow`}
                variants={fadeUp}
              >
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-hover transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
