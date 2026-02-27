import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const roles = [
  {
    title: "Vice Lead",
    org: "Google Developer Student Clubs (GDSC)",
    desc: "Co-led technical initiatives and organized developer workshops for the campus community.",
  },
  {
    title: "Campus Lead",
    org: "TinkerHub",
    desc: "Managed learning programs and coordinated peer-to-peer tech sessions on campus.",
  },
  {
    title: "Quality & Operations Lead",
    org: "IEDC",
    desc: "Oversaw project quality and streamlined operational workflows for the innovation cell.",
  },
];

const Leadership = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="leadership" className="py-20 md:py-28 bg-card">
      <div className="container max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl mb-12">Leadership & Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="p-5 rounded-xl bg-background border border-border shadow-sm"
              >
                <h3 className="text-base font-semibold text-heading mb-0.5">
                  {role.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {role.org}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
