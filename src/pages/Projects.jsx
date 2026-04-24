const projects = [
  {
    title: 'Secure-File-Scanner-Agent',
    description:
      'Local AI-powered code vulnerability scanner. Upload source files, detect security issues with Qwen via Ollama, and generate patched fixes — all offline. No code leaves your machine.',
    tags: ['HTML', 'Python', 'Ollama', 'AI Security'],
    link: 'https://github.com/MakiyaCro/Secure-File-Scanner-Agent',
    linkLabel: '→ GitHub',
  },
  {
    title: 'phish-scanner',
    description:
      'Chrome extension that scans Gmail emails for phishing using rule-based heuristics and a local Ollama LLM. Detects spoofed senders, typosquatted domains, and urgency language — no data leaves your machine.',
    tags: ['JavaScript', 'Chrome Extension', 'Ollama', 'Security'],
    link: 'https://github.com/MakiyaCro/phish-scanner',
    linkLabel: '→ GitHub',
  },
  {
    title: 'Basic-Weather-AI-Agent',
    description:
      'AI-powered weather agent that fetches real-time conditions and recommends activities using LangGraph, Ollama (Qwen), and a security-hardened FastAPI backend with rate limiting and input validation.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Ollama'],
    link: 'https://github.com/MakiyaCro/Basic-Weather-AI-Agent',
    linkLabel: '→ GitHub',
  },
  {
    title: 'WorkForceCompass Application',
    description:
      'Full-stack application built with Django and React that helps companies match candidates with behavioral attributes and generates targeted interview questions based on assessment results.',
    tags: ['Django', 'React', 'Python', 'Full-Stack'],
    link: 'https://github.com/MakiyaCro/GriefLeader-Frontline-Worker-Assessment',
    linkLabel: '→ GitHub',
  },
  {
    title: 'Grief-Leaders-Survey-Web-and-Analyis',
    description:
      'WordPress-based survey system with a data analytics backend that compiles results into automated reports for clients. Includes comprehensive end-user documentation.',
    tags: ['JavaScript', 'WordPress', 'Analytics'],
    link: 'https://github.com/MakiyaCro/Grief-Leaders-Survey-Web-and-Analyis',
    linkLabel: '→ GitHub',
  },
  {
    title: 'ELK Stack SIEM & OpenEDR Home Lab',
    description:
      'Deployed and configured an ELK Stack SIEM and OpenEDR endpoint detection platform in a home lab, ingesting and correlating security logs to practice threat detection and incident response workflows.',
    tags: ['ELK Stack', 'OpenEDR', 'Security', 'SIEM'],
    link: null,
    linkLabel: null,
  },
  {
    title: 'Starcitizen-Puzzle-Challenge',
    description:
      'A browser-based puzzle challenge built for a Star Citizen org. A fun side project demonstrating interactive game logic in JavaScript.',
    tags: ['JavaScript', 'Game'],
    link: 'https://github.com/MakiyaCro/Starcitizen-Puzzle-Challenge-',
    linkLabel: '→ GitHub',
  },
]

export default function Projects() {
  return (
    <div className="page">
      <p className="section-label">// PROJECTS &amp; AGENTS</p>
      <h2 style={{ color: '#fff', marginBottom: '0.4rem' }}>Things I&apos;ve Built</h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '2rem' }}>
        Software, security tools, AI agents, and client applications.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-card-header">
              <h3>{p.title}</h3>
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.linkLabel}
                </a>
              )}
            </div>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
