"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import { Github } from "lucide-react";
import { useRef } from "react";

export type ProjectItem = {
  title: string;
  tech: string[];
  highlights: string[];
  github: string;
  color?: string;
};

type StickyCardProps = {
  i: number;
  project: ProjectItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const StickyCard_001 = ({ i, project, progress, range, targetScale }: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.article
        style={{ scale,  top: `calc(-3vh + ${i * 13 + 105}px)` }}
        className={`relative -top-1/2 flex origin-top flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xl
          h-[188px] w-[290px]
          sm:h-[198px] sm:w-[390px]
          md:h-[210px] md:w-[470px]
          lg:h-[220px] lg:w-[560px]
          `}
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color ?? "from-primary/12 to-sky-500/12"} opacity-70`} />
        <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-1.5 text-sm font-semibold text-heading sm:text-base">{project.title}</h3>
        <div className="mb-2 flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary sm:text-xs">
              {tech}
            </span>
          ))}
        </div>
        <ul className="mb-1.5 space-y-2">
          {project.highlights.slice(0, 3).map((point) => (
            <li key={point} className="flex items-start gap-2 text-[11px] leading-snug text-foreground sm:text-xs">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:text-primary-hover sm:text-xs py-2"
          >
          <Github className="h-3.5 w-3.5" />
          View on GitHub
        </a>
        </div>
      </motion.article>
    </div>
  );
};

type ImagesScrollingAnimationProps = {
  projects: ProjectItem[];
};

const ImagesScrollingAnimation = ({ projects }: ImagesScrollingAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[22vh] pt-[1vh] sm:pb-[26vh] sm:pt-[2vh] lg:pb-[15vh] lg:pt-[3vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(0.66, 1 - (projects.length - i - 1) * 0.08);
          return (
            <StickyCard_001
              key={`p_${i}_${project.title}`}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { ImagesScrollingAnimation, StickyCard_001 };
