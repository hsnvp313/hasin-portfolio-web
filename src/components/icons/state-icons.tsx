import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type StateIconProps = {
  size?: number;
  color?: string;
  className?: string;
  duration?: number;
  done?: boolean;
  open?: boolean;
};

const cn = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(" ");

const useAutoToggle = (duration: number, enabled = true) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setValue(false);
      return;
    }

    const id = window.setInterval(() => {
      setValue((prev) => !prev);
    }, duration);

    return () => window.clearInterval(id);
  }, [duration, enabled]);

  return value;
};

export function DownloadDoneIcon({
  size = 40,
  color = "currentColor",
  className,
  duration = 2400,
  done,
}: StateIconProps) {
  const autoDone = useAutoToggle(duration, done === undefined);
  const isDone = done ?? autoDone;

  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <path d="M8 28v4a2 2 0 002 2h20a2 2 0 002-2v-4" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <AnimatePresence mode="wait">
        {isDone ? (
          <motion.path
            key="check"
            d="M14 22l6 6 8-10"
            stroke={color}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        ) : (
          <motion.g
            key="arrow"
            initial={{ y: -4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <line x1="20" y1="6" x2="20" y2="24" stroke={color} strokeWidth={2} strokeLinecap="round" />
            <polyline
              points="14,18 20,24 26,18"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}

export function MenuCloseIcon({
  size = 40,
  color = "currentColor",
  className,
  duration = 2000,
  open,
}: StateIconProps) {
  const autoOpen = useAutoToggle(duration, open === undefined);
  const isOpen = open ?? autoOpen;

  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("", className)} style={{ width: size, height: size }}>
      <motion.line
        x1="10"
        x2="30"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        animate={isOpen ? { y1: 20, y2: 20, rotate: 45 } : { y1: 12, y2: 12, rotate: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        style={{ transformOrigin: "20px 20px" }}
      />
      <motion.line
        x1="10"
        y1="20"
        x2="30"
        y2="20"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "20px 20px" }}
      />
      <motion.line
        x1="10"
        x2="30"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        animate={isOpen ? { y1: 20, y2: 20, rotate: -45 } : { y1: 28, y2: 28, rotate: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        style={{ transformOrigin: "20px 20px" }}
      />
    </svg>
  );
}
