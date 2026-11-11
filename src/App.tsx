import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity, ArrowDown, ArrowUpRight, BrainCircuit, Cloud, Code2,
  GitBranch, Menu, Workflow, X, Sparkles, ShieldCheck,
  Mail, Github, Linkedin, MapPin, Zap,
} from 'lucide-react'
import { profile, skills, projects, experience } from './data'
import SectionHeading from './components/SectionHeading'

const iconMap = { cloud: Cloud, workflow: Workflow, activity: Activity, code: Code2, brain: BrainCircuit, 'git-branch': GitBranch }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">B</span><span>bhubesh<span className="muted">.dev</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Skills', 'Experience', 'Projects'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let's connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="availability" variants={fadeUp}><span className="pulse" /> BUILDING RELIABLE SYSTEMS & AI SOLUTIONS</motion.div>
            <motion.p className="eyebrow hero-eyebrow" variants={fadeUp}>HELLO, I'M</motion.p>
            <motion.h1 variants={fadeUp}>Bhubesh <span className="gradient-text">S R.</span></motion.h1>
            <motion.h2 variants={fadeUp}>DevOps Engineer <i>/</i> SRE <i>/</i> AI Engineer</motion.h2>
            <motion.p className="hero-intro" variants={fadeUp}>I automate the work that slows teams down, build resilient cloud infrastructure, and turn practical AI ideas into useful engineering solutions.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={15} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
            </motion.div>
            <motion.div className="hero-meta" variants={fadeUp}><MapPin size={13} /> {profile.location} <span>•</span> Cloud · Automation · GenAI</motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .25 }}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="terminal">
              <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>~/bhubesh/engineering</span><span className="terminal-menu">•••</span></div>
              <div className="terminal-body">
                <p><b>➜</b> <em>whoami</em></p><p className="term-output">Bhubesh S R</p>
                <p><b>➜</b> <em>cat focus.txt</em></p><p className="term-output">Cloud-native engineering<br />DevOps & SRE automation<br />Agentic AI · LLM · RAG</p>
                <p><b>➜</b> <em>kubectl get priorities</em></p>
                <div className="terminal-tags"><span>reliability</span><span>automation</span><span>impact</span></div>
                <p className="terminal-cursor">➜ <i /></p>
              </div>
            </div>
            <div className="floating-card card-top"><span className="float-icon"><Zap size={17} /></span><div><strong>Automation first</strong><small>Less toil. More impact.</small></div></div>
            <div className="floating-card card-bottom"><span className="float-icon green-icon"><ShieldCheck size={17} /></span><div><strong>Reliability minded</strong><small>Observe · Improve · Repeat</small></div></div>
          </motion.div>
        </section>

        <motion.section className="metrics section" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }}>
          {[['15h', 'monthly effort saved', 'through automation*'], ['41h', 'effort saved with', 'mainframe job automation*'], ['133h', 'annual effort saved', 'with document workflows*']].map(([value, line1, line2]) => (
            <motion.div className="metric" variants={fadeUp} key={value}><strong>{value}</strong><span>{line1}<br />{line2}</span></motion.div>
          ))}
          <div className="metric metric-note"><span>*Reported outcomes from project work. Details can be discussed.</span></div>
        </motion.section>

        <section className="section" id="about">
          <SectionHeading index="01" eyebrow="ABOUT" title="Engineering with" accent="purpose." />
          <div className="about-grid">
            <p className="about-lead">I’m an engineer interested in the intersection of platform reliability, cloud infrastructure, automation, and applied AI.</p>
            <div className="about-detail">
              <p>At Accenture, I work across software engineering and SRE-oriented workflows, helping improve operational efficiency through automation and AI-enabled solutions. I enjoy understanding a problem end-to-end — from the infrastructure and APIs to the agent or workflow that makes it simpler.</p>
              <p>My approach is practical: build, measure, automate, document, and keep improving.</p>
              <div className="education"><span>EDUCATION</span><p><b>MCA</b> · Vellore Institute of Technology <small>2022 — 2024</small></p><p><b>BCA</b> · Hindustan Institute of Technology and Science <small>2019 — 2022</small></p></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading index="02" eyebrow="TOOLKIT" title="Tools I build" accent="with." subtitle="A practical mix of cloud, platform engineering, software, and AI tooling." />
          <motion.div className="skill-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>
            {skills.map(skill => { const Icon = iconMap[skill.icon as keyof typeof iconMap]; return (
              <motion.article className="skill-card" variants={fadeUp} key={skill.title}>
                <div className="skill-icon"><Icon size={21} /></div><h3>{skill.title}</h3><p>{skill.items}</p>
              </motion.article>
            )})}
          </motion.div>
          <div className="cert-strip"><Sparkles size={21} /><div><small>CERTIFICATION</small><strong>Databricks Certified AI Engineer</strong></div><ArrowUpRight className="cert-arrow" size={17} /></div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading index="03" eyebrow="EXPERIENCE" title="Where I've" accent="contributed." />
          <div className="timeline"><div className="timeline-line" />
            {experience.map(item => <motion.article className="experience-item" key={item.company} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="timeline-dot" /><div className="experience-date">{item.date}</div>
              <div className="experience-content"><div className="experience-title"><h3>{item.role}</h3><span>{item.company}</span></div>
                <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </motion.article>)}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading index="04" eyebrow="SELECTED WORK" title="Things I've" accent="built." subtitle="A selection of engineering projects and applied automation initiatives." />
          <motion.div className="project-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}>
            {projects.map(project => <motion.article className="project-card" variants={fadeUp} key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              {project.impact && <div className="project-impact"><strong>{project.impact}</strong><span>{project.impactLabel}</span></div>}
              <div className="project-stack">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </motion.article>)}
          </motion.div>
        </section>

        <section className="section approach-section">
          <SectionHeading index="05" eyebrow="HOW I WORK" title="From problem to" accent="production." />
          <div className="approach-grid">
            <div><span>01</span><h3>Understand</h3><p>Find the bottleneck, define the outcome, and understand the operational context.</p></div>
            <div><span>02</span><h3>Build</h3><p>Design a maintainable solution with automation, observability, and security in mind.</p></div>
            <div><span>03</span><h3>Improve</h3><p>Measure impact, learn from feedback, and iterate toward more reliable systems.</p></div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">06 / CONTACT</p><h2>Have a challenge<br />worth <span className="gradient-text">solving?</span></h2>
          <p className="contact-copy">I'm always interested in conversations around DevOps, SRE, cloud platforms, automation, and applied AI.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={15} /> Email me <ArrowUpRight size={15} /></a>
            <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={15} /></a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="contact-foot"><span>© {new Date().getFullYear()} Bhubesh S R</span><span>Designed to build what's next. <b>↗</b></span></div>
        </section>
      </main>
    </>
  )
}

export default App
