import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Contact = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container max-w-3xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-foreground mb-10">
            Open to opportunities in software development across the UAE.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <a
              href="mailto:hasinswalahvp@gmail.com"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/hsnvp313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-heading shadow-sm transition-colors hover:border-primary/40"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hsnvp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-heading shadow-sm transition-colors hover:border-primary/40"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
