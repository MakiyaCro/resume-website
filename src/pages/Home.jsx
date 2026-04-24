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
            <p className="hero-title">&gt; Software Developer &amp; Security-Focused Engineer</p>
            <p className="hero-bio">
              CS graduate, drone company founder, and builder of AI-powered tools.
              I work across the stack — from FastAPI backends and Django apps to
              Chrome extensions and local LLM integrations. Currently seeking new
              opportunities in software development, security, or IT.
            </p>
            <div className="hero-links">
              <a
                className="btn"
                href="https://github.com/MakiyaCro"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn"
                href="https://makcrodroneworks.com"
                target="_blank"
                rel="noreferrer"
              >
                Drone Co.
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
              Founded and operated Makcro Drone Works LLC, delivering aerial mapping
              services and custom software to clients across agriculture, real estate,
              and construction. Passionate about security tooling, AI agents, and automation.
            </p>
          </div>
          <div className="about-card">
            <h3>Core Skills</h3>
            <ul>
              <li>Python, JavaScript, HTML/CSS, SQL, PHP</li>
              <li>React, Django, Redux, FastAPI</li>
              <li>AI Agents &amp; Local LLMs (Ollama)</li>
              <li>Security: Wireshark, Nmap, ELK SIEM, OpenEDR</li>
              <li>WordPress, WooCommerce, Git, Heroku</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
