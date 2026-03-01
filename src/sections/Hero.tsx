import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import resume from "@/assets/resume.pdf";
import lightHeroImage from "@/assets/tecl.svg";
import darkHeroImage from "@/assets/a.svg";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { delay, duration: 0.5 },
});

const Hero = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Hasin_Swalah_VP_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url(${isDark ? darkHeroImage : lightHeroImage})` }}
    >
      <div className="container flex min-h-screen max-w-6xl items-center py-10 md:py-14">
        <div id="11" className="mx-auto max-w-3xl lg:ml-auto lg:mr-0">
          <motion.div className="flex items-center gap-4 sm:gap-5" {...fade(0)}>
            <div>
              <p className="mb-3 text-2xl font-mono leading-tight sm:text-3xl md:mb-4" {...fade(0.1)}>
                Hey, I'm
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="mb-4 text-3xl leading-tight sm:text-5xl md:text-[3.25rem]"
            {...fade(0.1)}
          >
            Hasin Swalah VP
          </motion.h1>

          <motion.p
            className="mb-2 text-lg text-muted-foreground sm:text-xl"
            {...fade(0.2)}
          >
            Junior Software Developer
          </motion.p>

          <motion.p
            className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground"
            {...fade(0.3)}
          >
            Developing secure, scalable and real-time systems - continuously
            learning, refining and improving with every build.
          </motion.p>

          <motion.div className="flex flex-wrap gap-2.5 sm:gap-3" {...fade(0.4)}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover sm:px-5"
            >
              <ArrowDown className="h-4 w-4" />
              View Projects
            </a>
            <a
              onClick={handleDownloadResume}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-heading shadow-sm transition-colors hover:border-primary/40 sm:px-5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/hsnvp313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary/40"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/hsnvp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary/40"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
