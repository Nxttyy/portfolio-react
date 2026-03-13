import {
  Terminal,
  Blocks,
  FlaskConical,
  Monitor,
  Cloud,
  BarChart,
  Atom,
  Database,
  Package,
  GitBranch,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "Python", icon: Terminal },
    { name: "Django", icon: Blocks },
    { name: "Flask", icon: FlaskConical },
    { name: "Linux", icon: Monitor },
    { name: "AWS", icon: Cloud },
    { name: "PowerBI", icon: BarChart },
    { name: "React", icon: Atom },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Package },
    { name: "Git", icon: GitBranch },
  ];

  return (
    <section className="mb-12">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="terminal-card">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 text-muted-foreground transition-all duration-300 cursor-default"
              >
                <div className="p-1 transition-transform group-hover:-translate-y-1">
                  <Icon className="w-5 h-5 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
