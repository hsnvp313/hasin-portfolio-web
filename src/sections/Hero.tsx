import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Suspense, lazy } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero3DCanvas = lazy(() => import("@/components/Hero3DCanvas"));

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { delay, duration: 0.5 },
});

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container max-w-6xl py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div className="flex items-center gap-5 mb-8" {...fade(0)}>
              <img
                src={profilePhoto}
                alt="Hasin Swalah VP"
                className="w-24 h-24 rounded-full object-cover border-2 border-border shadow-sm"
                loading="eager"
              />
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-primary">
                  Dubai, UAE · Immediate Joiner
                </p>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-[3.25rem] leading-tight mb-4"
              {...fade(0.1)}
            >
              Hasin Swalah VP
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-2"
              {...fade(0.2)}
            >
              Junior Software Developer
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed"
              {...fade(0.3)}
            >
              Developing secure, scalable and real-time systems — continuously
              learning, refining and improving with every build.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" {...fade(0.4)}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors"
              >
                <ArrowDown className="w-4 h-4" />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card text-heading font-medium text-sm border border-border hover:border-primary/40 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/hasinvp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors shadow-sm text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/hasinvp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors shadow-sm text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column – 3D */}
          <motion.div
            className="hidden lg:block h-[420px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Loading…
                </div>
              }
            >
              <Hero3DCanvas />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
