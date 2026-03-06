import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { MenuCloseIcon } from "@/components/icons/state-icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const shouldUseDark = storedTheme === "dark";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2">
      <div className="rounded-full border border-white/35 bg-white/25 px-3 py-2 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.65)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/20">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#hero"
            className="shrink-0 rounded-full px-2 py-1 text-lg font-extrabold tracking-[0.06em] text-heading dark:text-slate-100 dark:[text-shadow:0_1px_10px_rgba(15,23,42,0.55)] sm:px-3 sm:py-1.5 sm:text-xl md:text-2xl"
          >
            <span className="text-primary">H</span>asin.
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="liquid-link rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-heading dark:text-slate-100/95 dark:[text-shadow:0_1px_8px_rgba(15,23,42,0.55)] dark:hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="liquid-link rounded-full p-2 text-muted-foreground hover:text-heading dark:text-slate-100/95 dark:[text-shadow:0_1px_8px_rgba(15,23,42,0.55)] dark:hover:text-white"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              <span className="relative z-10 inline-flex">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </span>
            </button>
          </div>

          <button
            className="inline-flex rounded-full p-2 text-foreground transition-colors hover:bg-white/45 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <MenuCloseIcon open={open} size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 rounded-2xl border border-white/35 bg-white/40 p-3 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.65)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="liquid-link rounded-xl px-3 py-2 text-sm text-foreground hover:text-heading"
                onClick={() => setOpen(false)}
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="liquid-link rounded-xl px-3 py-2 text-left text-sm text-foreground hover:text-heading"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDark ? "Light mode" : "Dark mode"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
