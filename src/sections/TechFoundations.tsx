import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const categories = [
  {
    title: "Languages",
    skills: ['Python', 'JavaScript (ES6+)', 'Dart', 'C'],
  },
  {
    title: "Frontend",
    skills: ["React","Flutter (Android & Web)", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs","Session Handling"],
  },
  {
    title: "Database & Cloud",
    skills: ["Firebase", "MySQL"],
  },
  {
    title: "Security & Systems",
    skills: ["JWT", "RBAC", "OpenCV", "Socket Programming"],
  },
  {
    title: "Tools",
    skills: ["Git","Github", "Postman", "Vite","npm"],
  },
];

const TechFoundations = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl mb-12">Technical Foundations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:bg-[#2e3235] transition-[background-color] duration-1000 ease-in-out"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechFoundations;
