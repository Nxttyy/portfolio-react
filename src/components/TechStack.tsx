const TechStack = () => {
  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🇩" },
    { name: "Flask", icon: "🌶️" },
    { name: "Linux", icon: "🐧" },
    { name: "AWS", icon: "☁️" },
    { name: "PowerBI", icon: "📊" },
    { name: "React", icon: "⚛️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
  ];

  return (
    <section className="mb-12">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="terminal-card">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-3 border border-border hover:bg-muted transition-colors"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
