import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const Contact = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="contact" className="py-20 md:py-28">
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
          <div className="flex items-center justify-center gap-5">
            <a
              href="mailto:hasinswalahvp@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/hasinvp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card text-heading font-medium text-sm border border-border hover:border-primary/40 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hasinvp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card text-heading font-medium text-sm border border-border hover:border-primary/40 transition-colors shadow-sm"
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
