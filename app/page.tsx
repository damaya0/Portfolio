'use client'
import { Reveal } from '@/components/ui/reveal'
import {
  EDUCATION,
  AWARDS,
  ACADEMIC_PROJECTS,
  SKILLS,
  ACCOMPLISHMENTS,
  VOLUNTEERING,
  BLOG_POSTS,
  EMAIL,
  PHONE,
  SOCIAL_LINKS,
} from './data'

function Section({
  index,
  title,
  id,
  children,
}: {
  index: string
  title: React.ReactNode
  id: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-[var(--line)] py-16 md:py-24"
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <span className="eyebrow">{index}</span>
            <h2 className="display mt-3 text-4xl md:text-5xl">{title}</h2>
          </Reveal>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  )
}

export default function Personal() {
  const awardsWithImages = AWARDS.filter((a) => a.image)

  return (
    <>
      {/* About */}
      <Section index="01 — About" title="About" id="about">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="sm:col-span-2 space-y-5">
              <p className="text-xl leading-relaxed">
                I build at the intersection of hardware and software — from
                edge-AI detection nodes and custom PCBs to agentic-AI systems and
                full-stack applications.
              </p>
              <p className="leading-relaxed text-[var(--muted)]">
                Currently an Electronic &amp; Telecommunication Engineering
                undergraduate at the University of Moratuwa. Outside of
                engineering I&apos;m into hiking, public speaking, history and
                coffee.
              </p>
              <dl className="mt-8 space-y-3 border-t border-[var(--line)] pt-6 font-mono text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--muted)]">Location</dt>
                  <dd>Western Province, Sri Lanka</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--muted)]">Email</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`} className="link-underline">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--muted)]">Phone</dt>
                  <dd>
                    <a href={`tel:${PHONE}`} className="link-underline">
                      {PHONE}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="sm:col-span-1">
              <img
                src="/profile/profile.jpg"
                alt="Damsith Adikari"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Work */}
      <Section index="02 — Work" title="Work" id="experience">
        <div className="space-y-12">
          {/* Full-time */}
          <Reveal>
            <article className="grid gap-3 md:grid-cols-4">
              <div className="font-mono text-sm text-[var(--muted)]">
                Jul 2026 — Present
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl">
                  Software Engineer ·{' '}
                  <span className="text-[var(--muted)]">WSO2</span>
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">
                  Joining WSO2 full-time after my internship, continuing to work
                  on integration and AI-driven enterprise software.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Internship */}
          <Reveal>
            <article className="grid gap-3 md:grid-cols-4">
              <div className="font-mono text-sm text-[var(--muted)]">
                Jun — Dec 2024
              </div>
              <div className="md:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl">
                    Software Engineering Intern ·{' '}
                    <span className="text-[var(--muted)]">WSO2</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
                    A six-month internship across two projects.
                  </p>
                </div>

                <div className="space-y-6 border-l border-[var(--line)] pl-5">
                  <div>
                    <h4 className="font-medium">
                      Agentic AI Diagnostic Analyzer
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      A tool-augmented agentic RAG framework that automates root
                      cause analysis for WSO2 Micro Integrator — parsing JVM
                      thread dumps/logs and integrating Pinecone and GitHub APIs
                      for semantic code analysis, delivered as a React/Flask app.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Python', 'OpenAI', 'LangChain / RAG', 'Pinecone', 'Flask', 'React'].map(
                        (t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ),
                      )}
                    </div>
                    {BLOG_POSTS[0] && (
                      <a
                        href={BLOG_POSTS[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-3 inline-block text-sm"
                      >
                        Read the write-up ↗
                      </a>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium">
                      HubSpot CRM Connector for Ballerina
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      A reusable Ballerina connector for the HubSpot Companies
                      REST API with OAuth 2.0 and full CRUD / batch support.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Ballerina', 'HubSpot REST API', 'OAuth 2.0'].map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    {BLOG_POSTS[1] && (
                      <a
                        href={BLOG_POSTS[1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-3 inline-block text-sm"
                      >
                        Read the write-up ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Internship snaps */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <img
                      key={n}
                      src={`/internship/experience-${n}.jpg`}
                      alt={`WSO2 internship ${n}`}
                      className="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Education */}
      <Section index="03 — Education" title="Education" id="education">
        <div className="space-y-10">
          {EDUCATION.map((edu) => (
            <Reveal key={edu.id}>
              <article className="grid gap-3 border-b border-[var(--line)] pb-10 md:grid-cols-4">
                <div className="font-mono text-sm text-[var(--muted)]">
                  {edu.duration}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl">{edu.degree}</h3>
                  <p className="mt-1 text-[var(--muted)]">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="mt-2 font-mono text-sm">GPA {edu.gpa}</p>
                  )}
                  {edu.achievements && (
                    <ul className="mt-3 space-y-1 text-sm text-[var(--muted)]">
                      {edu.achievements.map((a, i) => (
                        <li key={i}>{a.replace('🏆', '—')}</li>
                      ))}
                    </ul>
                  )}
                  {edu.coursework && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <span key={c} className="tag">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        index="04 — Selected work"
        title={<>Projects</>}
        id="projects"
      >
        <div className="border-t border-[var(--line)]">
          {ACADEMIC_PROJECTS.map((project, i) => {
            const Row = project.link ? 'a' : 'div'
            return (
              <Reveal key={project.id}>
                <Row
                  {...(project.link
                    ? {
                        href: project.link,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  className="index-row group flex items-start gap-4 border-b border-[var(--line)] py-6"
                >
                  <span className="eyebrow w-8 shrink-0 pt-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="display text-2xl md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <p className="mt-2 font-mono text-xs text-[var(--muted)]">
                        {project.technologies.join('  ·  ')}
                      </p>
                    )}
                  </div>
                  {project.link && (
                    <span className="shrink-0 pt-2 text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  )}
                </Row>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Awards */}
      <Section
        index="05 — Recognition"
        title={<>Awards</>}
        id="awards"
      >
        <div className="space-y-2">
          {AWARDS.map((award) => (
            <Reveal key={award.id}>
              <article className="grid gap-2 border-b border-[var(--line)] py-5 md:grid-cols-4">
                <div className="font-mono text-sm text-[var(--muted)]">
                  {award.year || '—'}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg">{award.title}</h3>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {award.organization}
                  </p>
                  {award.description && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {award.description}
                    </p>
                  )}
                  {award.awards && (
                    <ul className="mt-3 grid gap-1 text-sm text-[var(--muted)] sm:grid-cols-2">
                      {award.awards.map((sub, i) => (
                        <li key={i}>— {sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Photo strip */}
        <Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {awardsWithImages.map((award) => (
              <img
                key={award.id}
                src={award.image}
                alt={award.title}
                className="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Skills */}
      <Section index="06 — Toolkit" title="Skills" id="skills">
        <div className="space-y-8">
          {SKILLS.map((skill) => (
            <Reveal key={skill.id}>
              <div className="grid gap-3 border-b border-[var(--line)] pb-8 md:grid-cols-4">
                <h3 className="font-mono text-sm uppercase tracking-wider text-[var(--muted)]">
                  {skill.category}
                </h3>
                <div className="md:col-span-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Certifications */}
          <Reveal>
            <div className="grid gap-3 md:grid-cols-4">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[var(--muted)]">
                Certifications
              </h3>
              <ul className="md:col-span-3 space-y-3">
                {ACCOMPLISHMENTS.map((cert) => (
                  <li
                    key={cert.id}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--line)] pb-3"
                  >
                    <span className="text-sm">{cert.title}</span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {cert.organization} · {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Volunteering */}
      <Section
        index="07 — Community"
        title={<>Volunteering</>}
        id="volunteering"
      >
        <div className="space-y-10">
          {VOLUNTEERING.map((org) => (
            <Reveal key={org.id}>
              <article className="border-b border-[var(--line)] pb-10">
                <h3 className="text-xl">{org.organization}</h3>
                <ul className="mt-4 space-y-4">
                  {org.roles.map((role, i) => (
                    <li key={i} className="grid gap-1 md:grid-cols-4">
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {role.startDate} — {role.endDate}
                      </span>
                      <div className="md:col-span-3">
                        <p className="font-medium">{role.role}</p>
                        {role.description && (
                          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                            {role.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured */}
      <Section index="08 — Featured" title="Featured" id="featured">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              src: 'https://www.youtube.com/embed/UzZ8kH0aw7I',
              title: 'EXMO 2024 — Live Streaming Host',
              note: "University of Moratuwa's annual exhibition",
            },
            {
              src: 'https://www.youtube.com/embed/BdzZoRsX7ME',
              title: 'Speech Olympiad XVI — Finalist',
              note: 'Finalist speech, 16th Speech Olympiad',
            },
            {
              src: 'https://www.youtube.com/embed/XsH5kpwsd_U',
              title: 'Abhina Drama — “Maradodalawa”',
              note: 'Stage performance',
            },
            {
              src: 'https://www.youtube.com/embed/PMilG23Z-yc',
              title: 'Real Analysis — Kuppi Session',
              note: 'Study sessions for the junior batch',
            },
          ].map((v) => (
            <Reveal key={v.src}>
              <div>
                <div className="aspect-video w-full overflow-hidden border border-[var(--line)]">
                  <iframe
                    className="h-full w-full"
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium">{v.title}</h3>
                <p className="text-sm text-[var(--muted)]">{v.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-16 border-t border-[var(--line)] py-20 md:py-32"
      >
        <Reveal>
          <span className="eyebrow">09 — Contact</span>
          <h2 className="display mt-4 text-[clamp(2.5rem,8vw,6rem)]">
            Let&apos;s talk.
          </h2>
          <p className="mt-6 max-w-md text-lg text-[var(--muted)]">
            Always open to new opportunities and interesting problems.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="link-underline mt-8 inline-block font-display text-2xl md:text-3xl"
          >
            {EMAIL}
          </a>
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-sm text-[var(--muted)]">
            <a href={`tel:${PHONE}`} className="link-underline">
              {PHONE}
            </a>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
