import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const About = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="about" className="relative z-10 py-20 md:py-28 bg-card">
      <div className="container max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <h2 className="text-3xl mb-8">About</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Computer Science graduate with hands-on experience building
              full-stack applications across mobile, web, and backend systems.
              Focused on clean architecture, secure authentication (JWT & RBAC),
              and real-time communication.
            </p>
            <p>
              Built production-oriented projects involving QR-based workflows,
              socket programming, and Firebase-driven real-time sync. Strong
              debugging mindset with a preference for structured, maintainable
              code.
            </p>
            <p className="text-muted-foreground">
              Based in Dubai, UAE — available for immediate joining.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
