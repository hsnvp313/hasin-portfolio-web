import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "QSpiders",
    points: [
      "Built full-stack modules with React and Node.js",
      "Implemented JWT authentication and RBAC authorization",
      "Optimized CRUD operations and API performance",
      "Debugging, testing, and code review workflows",
    ],
  },
  {
    role: "IT Support Assistant",
    company: "Akshaya E Center",
    points: [
      "Windows installation and system configuration",
      "Hardware troubleshooting and maintenance",
      "Basic networking setup and diagnostics",
      "End-user technical support",
    ],
  },
];

const Experience = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="experience" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <h2 className="text-3xl mb-12">Professional Experience</h2>
          <div className="relative border-l-2 border-border pl-8 space-y-10">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <h3 className="text-lg font-semibold text-heading">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {exp.company}
                </p>
                <ul className="space-y-1.5">
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
