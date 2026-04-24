export default function Home() {
  return (
    <div className="page">
      {/* ── Hero (two-column: text left, photo right) ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">// HELLO WORLD</p>
            <h1>
              Makiya Crochiere<span className="cursor" />
            </h1>
            <p className="hero-title">&gt; Security Analyst &amp; Software Developer</p>
            <p className="hero-bio">
              CompTIA Security+ and Network+ certified analyst with hands-on threat detection
              experience via ELK Stack SIEM and OpenEDR. Builder of AI-powered security tools
              and actively progressing through TryHackMe SOC Level 1. Seeking a SOC Analyst
              role to apply threat hunting, log analysis, and security automation skills.
            </p>
            <div className="hero-links">
              <a className="btn" href="https://github.com/MakiyaCro" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href="https://linkedin.com/in/makiya-crochiere" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-outline" href="mailto:crochieremakiya@gmail.com">
                Email Me
              </a>
            </div>
          </div>

          <div className="hero-photo-slot">
            <img src="/profile.jpg" alt="Makiya Crochiere" />
          </div>
        </div>
      </section>

      {/* ── Credentials bar ── */}
      <section className="credentials-bar">
        <div className="credential-item">
          <span className="cred-icon">▣</span>
          <div>
            <p className="cred-title">B.S. Computer Science</p>
            <p className="cred-sub">SD School of Mines &amp; Technology<br />Class of 2022</p>
          </div>
        </div>
        <div className="credential-item">
          <span className="cred-icon">▣</span>
          <div>
            <p className="cred-title">CompTIA Security+</p>
            <p className="cred-sub">SY0-701 Certified<br />2025</p>
          </div>
        </div>
        <div className="credential-item">
          <span className="cred-icon">▣</span>
          <div>
            <p className="cred-title">CompTIA Network+</p>
            <p className="cred-sub">N10-009 Certified<br />2026</p>
          </div>
        </div>
        <div className="credential-item">
          <span className="cred-icon">▣</span>
          <div>
            <p className="cred-title">FAA Part 107</p>
            <p className="cred-sub">Remote Pilot Certification<br />2023</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── About ── */}
      <section>
        <p className="section-label">// ABOUT</p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Background</h3>
            <p>
              CS graduate and founder of Makcro Drone Works LLC. Built AI-powered security
              tools, deployed ELK Stack SIEM and OpenEDR in a home lab, and earned CompTIA
              Security+ and Network+ certifications. Currently pursuing SOC analyst roles
              with a focus on threat detection and security automation.
            </p>
          </div>
          <div className="about-card">
            <h3>Core Skills</h3>
            <ul>
              <li>Security: ELK SIEM, OpenEDR, Wireshark, Nmap</li>
              <li>Python, JavaScript, React, Django, FastAPI</li>
              <li>AI Agents &amp; Local LLMs (Ollama, LangGraph)</li>
              <li>AWS: S3, CloudFront, Route 53</li>
              <li>TryHackMe SOC Level 1 (in progress)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
