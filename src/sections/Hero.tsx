const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container max-w-4xl py-24">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Dubai, UAE · Immediate Joiner
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          Hasin Swalah VP
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-3">
          Junior Software Developer · Flutter & Full-Stack Developer
        </p>
        <p className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Developing secure, scalable and real-time systems — continuously
          learning, refining and improving with every build.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-card text-foreground border border-border shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  "Python",
  "JavaScript (ES6+)",
  "Dart",
  "React",
  "Tailwind",
  "Flutter",
  "Node.js",
  "Express",
  "Firebase",
  "MySQL",
  "JWT",
  "RBAC",
  "OpenCV",
  "Socket Programming",
  "REST APIs",
  "Git",
  "Postman",
];

export default Hero;
