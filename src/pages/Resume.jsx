const summary = `CompTIA Security+ and Network+ certified analyst with hands-on experience in threat detection and incident response through a home lab running ELK Stack SIEM and OpenEDR. Built a suite of AI-powered security tools including a static vulnerability scanner, phishing detector, and hardened API backend. Actively progressing through TryHackMe SOC Level 1 path. Seeking SOC Analyst role to apply threat hunting, log analysis, and security automation skills.`

const skills = [
  {
    label: 'Systems & Networking',
    items: 'Windows 10/11, Linux, Event Viewer, Reliability Monitor, IPv4 Networks, Internet Diagnostics, PC Troubleshooting, System Imaging',
  },
  {
    label: 'Security Tools',
    items: 'Wireshark, Nmap, tcpdump, OpenEDR, ELK SIEM, Ghidra, PEStudio, hashcat, TryHackMe',
  },
  {
    label: 'Cloud & DevOps',
    items: 'AWS (S3, CloudFront, Route 53), Git, FastAPI, LangGraph, Postman',
  },
  {
    label: 'Programming',
    items: 'Python, JavaScript, HTML, CSS, SQL, C++, Java, React, Django',
  },
]

const experience = [
  {
    title: 'Founder & Software Developer',
    company: 'Makcro Drone Works LLC — Starkville, MS',
    date: 'Jul 2022 — Dec 2025',
    bullets: [
      'Designed custom assessment tools and data visualization applications using Python, Django, and React, transforming raw client data into actionable business intelligence.',
      'Hardened WordPress infrastructure against SQL injection attacks using Cloudflare WAF and WPForms configurations; managed FAA Part 107 compliance, client acquisition, and technical documentation for aerial mapping and inspection services.',
    ],
  },
  {
    title: 'Web Developer & Digital Operations',
    company: '777 Bison Ranch — Rapid City, SD (Remote)',
    date: 'Jan 2022 — Sept 2024',
    bullets: [
      'Built and maintained WordPress/WooCommerce platform handling sensitive customer payment data, generating approximately $11K in first-year revenue.',
      'Scaled brand presence to 150K Facebook followers and 65K TikTok followers through strategic content creation.',
    ],
  },
  {
    title: 'Information Technology Intern',
    company: 'Doosan Bobcat — Bismarck, ND',
    date: 'Jun 2018 — Dec 2018',
    bullets: [
      'Diagnosed and maintained work terminals, laptops, desktops, and printers across enterprise environment; performed system diagnostics using Windows reliability tools and Event Viewer to troubleshoot crashes, performance issues, and hardware failures.',
      'Deployed standardized computer images via IPv4 networks, enabling efficient hardware replacement and configuration management across the organization.',
    ],
  },
]

const certifications = [
  {
    name: 'CompTIA Network+ (N10-009)',
    issuer: 'CompTIA',
    date: '2026',
    link: null,
  },
  {
    name: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: '2025',
    link: null,
  },
  {
    name: 'FAA Part 107 Remote Pilot',
    issuer: 'Federal Aviation Administration',
    date: '2023',
    link: null,
  },
  {
    name: 'B.S. Computer Science',
    issuer: 'SD School of Mines & Technology',
    date: '2022',
    link: null,
  },
]

export default function Resume() {
  return (
    <div className="page">

      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
        <div>
          <p className="section-label">// RESUME</p>
          <h2 style={{ color: '#fff', marginBottom: '0.4rem' }}>Makiya Crochiere</h2>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
            crochieremakiya@gmail.com &nbsp;·&nbsp; 970-846-1536<br />
            <a href="https://github.com/MakiyaCro" target="_blank" rel="noreferrer">github.com/MakiyaCro</a>
            &nbsp;·&nbsp;
            <a href="https://linkedin.com/in/makiya-crochiere" target="_blank" rel="noreferrer">linkedin.com/in/makiya-crochiere</a>
            &nbsp;·&nbsp;
            <a href="https://makiyacrochiere.com" target="_blank" rel="noreferrer">makiyacrochiere.com</a>
          </p>
        </div>
        <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
          ↓ Download PDF
        </a>
      </div>

      {/* ── Summary ── */}
      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-dim)', lineHeight: '1.85', padding: '1rem 1.25rem', background: 'var(--bg-card)', borderLeft: '2px solid var(--green-dim)' }}>
          {summary}
        </p>
      </section>

      {/* ── Skills ── */}
      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="cert-grid">
          {skills.map((s) => (
            <div className="cert-card" key={s.label}>
              <h3>{s.label}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.79rem', lineHeight: '1.7' }}>{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Work Experience ── */}
      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.title + job.company}>
              <div className="timeline-header">
                <h3>{job.title}</h3>
                <span className="timeline-date">{job.date}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications & Education ── */}
      <section className="resume-section">
        <h2>Education &amp; Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <h3>
                {cert.link
                  ? <a href={cert.link} target="_blank" rel="noreferrer">{cert.name}</a>
                  : cert.name}
              </h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
