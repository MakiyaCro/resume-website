const experience = [
  {
    title: 'Founder / Drone Pilot & Software Developer',
    company: 'Makcro Drone Works LLC — Starkville, MS',
    date: 'Jul 2022 — Dec 2025',
    bullets: [
      'Delivered professional aerial mapping and inspection services for real estate, construction, and agricultural clients using DJI systems and DroneDeploy; processed GPS metadata into actionable deliverables.',
      'Designed and developed custom assessment tools and data visualization applications for clients using Python, Django, and React.',
      'Managed all aspects of operations: client acquisition, FAA Part 107 compliance, project coordination, safety protocols, and technical documentation.',
    ],
  },
  {
    title: 'Web Developer & Social Media Manager',
    company: '777 Bison Ranch — Rapid City, SD (Remote)',
    date: 'Jan 2022 — Sept 2024',
    bullets: [
      'Built and maintained a secure WordPress/WooCommerce e-commerce platform handling sensitive payment data; launched merchandise sales generating ~$11K in revenue in the first year.',
      'Drove 650% follower growth on Facebook (20K → 150K), scaled TikTok from zero to 65K followers, and produced multiple videos surpassing one million views each.',
      'Grew Instagram from 1K to 3K followers and established a YouTube channel reaching 1K subscribers; generated $3.2K in Facebook ad revenue.',
    ],
  },
  {
    title: 'Call Center Internet Technician',
    company: 'Golden West Technology — Rapid City, SD',
    date: 'Jul 2019 — Oct 2019',
    bullets: [
      'Diagnosed and resolved connectivity issues across DSL, cable, fiber, and wireless technologies via remote diagnostics.',
      'Communicated technical solutions clearly to non-technical customers; created detailed repair tickets for field technicians.',
    ],
  },
  {
    title: 'Information Technology Intern',
    company: 'Doosan Bobcat — Bismarck, ND',
    date: 'Jun 2018 — Dec 2018',
    bullets: [
      'Diagnosed and maintained enterprise hardware including terminals, laptops, desktops, printers, and televisions.',
      'Performed system diagnostics using Windows Event Viewer and Reliability Monitor to troubleshoot crashes and hardware failures.',
      'Deployed standardized computer images via IPv4 networks for efficient hardware replacement and configuration management.',
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

const skills = [
  { label: 'Languages', items: 'Python, JavaScript, HTML/CSS, C++, SQL, Java, PHP, R' },
  { label: 'Frameworks & Tools', items: 'React, Django, Redux, FastAPI, Git, WordPress, WooCommerce, Postman, Heroku' },
  { label: 'Security', items: 'Wireshark, Nmap, OpenEDR, ELK SIEM, TryHackMe' },
  { label: 'OS & Networking', items: 'Windows 10/11, Linux, Event Viewer, IPv4 Networks, System Imaging' },
]

export default function Resume() {
  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
        <div>
          <p className="section-label">// RESUME</p>
          <h2 style={{ color: '#fff' }}>Makiya Crochiere</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
            crochieremakiya@gmail.com &nbsp;·&nbsp; 970-846-1536 &nbsp;·&nbsp;
            <a href="https://github.com/MakiyaCro" target="_blank" rel="noreferrer">github.com/MakiyaCro</a> &nbsp;·&nbsp;
            <a href="https://makcrodroneworks.com" target="_blank" rel="noreferrer">makcrodroneworks.com</a>
          </p>
        </div>
        <a
          className="btn btn-outline"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* ── Skills ── */}
      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="cert-grid">
          {skills.map((s) => (
            <div className="cert-card" key={s.label}>
              <h3>{s.label}</h3>
              <p className="cert-issuer" style={{ color: 'var(--text-dim)', fontSize: '0.8rem', lineHeight: '1.6' }}>{s.items}</p>
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
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
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
