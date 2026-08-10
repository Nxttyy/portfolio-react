interface Job {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const WorkExperience = () => {
  const jobs: Job[] = [
    {
      company: "Cedar Street Analytics",
      companyUrl: "https://www.cedarstreet.io",
      role: "Senior Full-Stack Engineer",
      period: "2024 - Present",
      responsibilities: [
        "Architected and deployed CI/CD pipelines automating GitHub-to-AWS deployments, with structured logging and rotation for production observability",
        "Built secure, multi-tenant backend APIs and UI with role-based Power BI embedding",
        "Designed and shipped an AI chatbot microservice with LLM-driven natural-language-to-SQL, sandboxed by a custom per-tenant query security layer",
        "Optimized embedded analytics to cut costs and improve performance",
      ],
    },
    {
      company: "Numlock",
      companyUrl: "https://numlk.io/",
      role: "Founding Backend Developer",
      period: "2025 - Present",
      responsibilities: [
        "Designed multi-level architecture integrating major cloud providers for automated billing insights",
        "Built a retrieval-augmented AI chatbot letting customers query their cloud billing data in natural language, backed by a pgvector RAG pipeline",
        "Shipped statistical anomaly detection surfacing cloud and AI-provider cost spikes, extending billing coverage to OpenAI and Anthropic spend",
        "Implemented advanced auth flows including SSO and passwordless login",
      ],
    },
    {
      company: "GumiSofts",
      companyUrl: "https://github.com/gumisofts",
      role: "Backend Developer Intern",
      period: "2024",
      responsibilities: [
        "Developed notification and file management modules for a client inventory app",
        "Collaborated on backend systems in a production environment",
      ],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="terminal-card">
            <div className="mb-3">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link text-lg font-semibold"
              >
                {job.company}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                {job.role} • {job.period}
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-muted-foreground">→</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
