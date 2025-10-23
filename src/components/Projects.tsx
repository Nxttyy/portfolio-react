import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Campus Sync",
      description:
        "Full-stack React–Django application serving as a fair, student-focused marketplace for sharing and valuing campus events and information.",
      thumbnail: "/gradient-1.webp",
      githubUrl: "https://github.com/GDSC-Hackaton",
      liveUrl: "https://natty.pythonanywhere.com/",
    },
    {
      title: "Libgen Book Downloader",
      description:
        "Python-based CLI tool for searching and downloading books from Library Genesis, featuring flexible query options and customizable download paths.",
      thumbnail: "/gradient-2.webp",
      githubUrl: "https://github.com/Nxttyy/libgen-api-cli",
    },
    {
      title: "Anon Chat-App",
      description:
        "Flask and Socket.IO–powered web app enabling real-time anonymous chat rooms with a lightweight and minimalist design.",
      thumbnail: "/gradient-3.webp",
      githubUrl: "https://github.com/Nxttyy/Chat-App",
      liveUrl: "https://chat.nathnaelyirga.dev",
    },
    {
      title: "English - Amharic Dictionary",
      description:
        "Flask-based web app providing fast English-to-Amharic word translations through a simple, user-friendly interface.",
      thumbnail: "/gradient-4.webp",
      githubUrl: "https://github.com/Nxttyy/AmharicDictionary",
      liveUrl: "https://en-amh.nathnaelyirga.dev",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="section-heading">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="terminal-card">
            {project.thumbnail && (
              <div className="mb-4 border border-border aspect-video bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">
                  <img src={project.thumbnail} alt="thumbnail" />
                </span>
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
