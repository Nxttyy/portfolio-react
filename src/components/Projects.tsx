import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  graphic: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  noAccent?: boolean;
  tech?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Dora",
      description:
        "A personal library and reading catalogue powered by the Open Library API. Search, organize, and share your bookshelf through a clean, minimal interface.",
      graphic: "graphic-feature",
      githubUrl: "https://github.com/Nxttyy/myshelf-openlib-catalogue",
      liveUrl: "https://dora.nty.et",
      featured: true,
      tech: [
        "Python",
        "FastAPI",
        "SQLModel",
        "PostgreSQL",
        "Alembic",
        "Pydantic",
        "JWT/OAuth2",
        "Jinja2",
        "Vanilla JS",
        "httpx",
      ],
    },
    {
      title: "Kalendae",
      description:
        "A Telegram bot that turns forwarded messages into Google Calendar events. Forward it anything mentioning an event and it extracts the title, date, time, and location, then adds it to your calendar — with support for multiple connected Google accounts.",
      graphic: "graphic-feature-2",
      githubUrl: "https://github.com/Nxttyy/snooze",
      liveUrl: "https://t.me/parsenremind_bot",
      featured: true,
      noAccent: true,
      tech: [
        "Python",
        "FastAPI",
        "python-telegram-bot",
        "SQLModel",
        "PostgreSQL",
        "Alembic",
        "Google Calendar API",
        "OAuth2",
        "Cryptography",
        "httpx",
      ],
    },
    {
      title: "Libgen Book Downloader",
      description:
        "Python-based CLI tool for searching and downloading books from Library Genesis, featuring flexible query options and customizable download paths.",
      graphic: "graphic-2",
      githubUrl: "https://github.com/Nxttyy/libgen-api-cli",
    },
    {
      title: "Anon Chat-App",
      description:
        "Flask and Socket.IO–powered web app enabling real-time anonymous chat rooms with a lightweight and minimalist design.",
      graphic: "graphic-3",
      githubUrl: "https://github.com/Nxttyy/Chat-App",
      liveUrl: "https://chat.nty.et",
    },
    {
      title: "English - Amharic Dictionary",
      description:
        "Flask-based web app providing fast English-to-Amharic word translations through a simple, user-friendly interface.",
      graphic: "graphic-4",
      githubUrl: "https://github.com/Nxttyy/AmharicDictionary",
      liveUrl: "https://en-amh.nty.et",
    },
    {
      title: "Campus Sync",
      description:
        "Full-stack React–Django application serving as a fair, student-focused marketplace for sharing and valuing campus events and information.",
      graphic: "graphic-1",
      githubUrl: "https://github.com/GDSC-Hackaton",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="section-heading">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`terminal-card group flex ${
              project.featured
                ? `md:col-span-2 flex-col md:flex-row gap-6 ${
                    project.noAccent ? "" : "border-accent"
                  }`
                : "flex-col"
            }`}
          >
            <div
              className={`border-[3px] border-border aspect-video overflow-hidden ${
                project.featured ? "mb-4 md:mb-0 md:w-2/5 md:shrink-0" : "mb-4"
              }`}
            >
              <div
                className={`project-graphic ${project.graphic} w-full h-full transition-transform duration-700 ease-out group-hover:scale-110`}
                role="img"
                aria-label={`${project.title} graphic`}
              >
                <span className="grain" />
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h3
                  className={`font-bold ${
                    project.featured ? "text-xl" : "text-lg"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider border border-border text-muted-foreground px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-4 text-sm font-semibold">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
