'use client'
import { motion } from 'motion/react'
import {
  Briefcase,
  Calendar,
  ChevronRight,
  Code,
  Github,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Wrench,
  Award,
} from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  EDUCATION,
  INTERN_EXPERIENCE,
  AWARDS,
  ACADEMIC_PROJECTS,
  SKILLS,
  ACCOMPLISHMENTS,
  VOLUNTEERING,
  BLOG_POSTS,
  EMAIL,
  PHONE as PHONE_NUMBER,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.5,
  ease: 'easeOut',
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[var(--ink)] hover:text-[var(--bg)]"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-32 pb-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About Me */}
      <motion.section
        id="about"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-lg text-[var(--ink)]/80 leading-relaxed">
              Software Engineer at WSO2, working on the AI team within the
              Integration Business Unit. Electronic & Telecommunication
              Engineering graduate of University of Moratuwa with strong
              skills in software engineering, AI/ML, and algorithms.
            </p>
            <p className="text-lg text-[var(--ink)]/80 leading-relaxed">
              Passionate about building AI centered enterprise solutions that uses proper Integration practices.
            </p>
            <p className="text-lg text-[var(--ink)]/80 leading-relaxed">
              Love hiking, public speaking, history and coffee.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <MapPin className="h-5 w-5" />
                <span>Western Province, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <Mail className="h-5 w-5" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)] transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <Phone className="h-5 w-5" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-[var(--accent)] transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 overflow-hidden border border-[var(--line)]">
              <img
                src="/profile/profile.jpg"
                alt="Damsith Adikari"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to DA placeholder if image not found
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden absolute inset-0 bg-[var(--line)] items-center justify-center">
                <div className="display text-8xl text-[var(--muted)]">DA</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Intern Experience */}
      <motion.section
        id="experience"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {/* Full-time Role */}
          <div className="panel p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  Software Engineer at WSO2
                </h3>
                <p className="eyebrow mt-1">
                  AI Team · Integration BU · Full-time
                </p>
                <span className="flex items-center gap-1 text-sm text-[var(--muted)] mt-1">
                  <Calendar className="h-4 w-4" />
                  Since July 2026
                </span>
              </div>
              <div className="flex-shrink-0 w-24 h-24 border border-[var(--line)] p-3 flex items-center justify-center">
                <img
                  src="/internship/wso2-logo.png"
                  alt="WSO2 Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden text-center">
                  <Briefcase className="h-8 w-8 text-[var(--muted)] mx-auto" />
                  <span className="text-xs text-[var(--muted)] mt-1 block">WSO2</span>
                </div>
              </div>
            </div>
            <p className="text-[var(--ink)]/70 leading-relaxed">
              Joined WSO2 full-time as a Software Engineer on the AI team within the Integration Business Unit, Building AI-driven enterprise software solutions.
            </p>
          </div>

          {/* Visiting Instructor Role */}
          <div className="panel p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  Visiting Instructor
                </h3>
                <p className="eyebrow mt-1">
                  Dept. of Electronic & Telecommunication Engineering, University of Moratuwa
                </p>
                <span className="flex items-center gap-1 text-sm text-[var(--muted)] mt-1">
                  <Calendar className="h-4 w-4" />
                  February 2026 – June 2026
                </span>
              </div>
              <div className="flex-shrink-0 w-24 h-24 border border-[var(--line)] p-3 flex items-center justify-center">
                <img
                  src="/education/uom-entc.png"
                  alt="University of Moratuwa ENTC Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden text-center">
                  <GraduationCap className="h-8 w-8 text-[var(--muted)] mx-auto" />
                </div>
              </div>
            </div>
            <p className="text-[var(--ink)]/70 leading-relaxed">
              Taught and mentored first-year undergraduates through course modules and laboratory work in the Department of Electronic & Telecommunication Engineering.
            </p>
          </div>

          {/* Internship Projects Section */}
          <div className="mt-12 space-y-6">
            <div className="panel p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  Software Engineering Internship at WSO2
                </h3>
                <div className="flex-shrink-0 w-24 h-24 border border-[var(--line)] p-3 flex items-center justify-center">
                  <img
                    src="/internship/wso2-logo.png"
                    alt="WSO2 Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden text-center">
                    <Briefcase className="h-8 w-8 text-[var(--muted)] mx-auto" />
                    <span className="text-xs text-[var(--muted)] mt-1 block">WSO2</span>
                  </div>
                </div>
              </div>
              <p className="text-[var(--ink)]/70 leading-relaxed mb-6">
                I completed a 6 month hands-on Software Engineering Internship at WSO2. I finished two projects under this internship:
              </p>

              {/* Project 1 - Main Project */}
              <div className="mb-6 border border-[var(--line)] p-5">
                <h4 className="text-lg font-bold text-[var(--ink)] mb-3">
                  Main Project: <span className="accent">Agentic AI Diagnostic Analyzer</span> (WSO2 Internship)
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Core System: </span>
                    <span className="text-[var(--muted)]">
                      Engineered a Tool-Augmented Agentic RAG framework to automate root cause analysis for WSO2 Micro Integrator.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Key Features: </span>
                    <span className="text-[var(--muted)]">
                      Built custom Python pipelines to parse JVM thread dumps/logs and integrated Pinecone and GitHub APIs for semantic code analysis.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Outcome: </span>
                    <span className="text-[var(--muted)]">
                      Delivered a full-stack application (React/Flask) that significantly reduces manual debugging time by generating actionable resolution reports.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Tech Stack: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'OpenAI API', 'LangChain/RAG', 'Pinecone', 'Flask', 'React'].map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Article 1 under Main Project */}
                {BLOG_POSTS[0] && (
                  <div className="mt-4 pt-4 border-t border-[var(--line)]">
                    <div className="flex items-start gap-3">
                      <Code className="h-5 w-5 text-[var(--muted)] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <a
                          href={BLOG_POSTS[0].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                        >
                          {BLOG_POSTS[0].title}
                        </a>
                        <p className="text-xs text-[var(--muted)] mt-1">
                          {BLOG_POSTS[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project 2 - Onboarding Project */}
              <div className="border border-[var(--line)] p-5">
                <h4 className="text-lg font-bold text-[var(--ink)] mb-3">
                  Onboarding Project: <span className="accent">HubSpot CRM Connector for Ballerina</span>
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Core System: </span>
                    <span className="text-[var(--muted)]">
                      Developed a reusable Ballerina connector to interface directly with the HubSpot Companies REST API.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Key Features: </span>
                    <span className="text-[var(--muted)]">
                      Implemented secure OAuth 2.0 authentication and comprehensive support for CRUD and batch operations on CRM company records.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Outcome: </span>
                    <span className="text-[var(--muted)]">
                      Streamlined CRM integration for developers, enabling efficient automation of customer data management and business intelligence workflows.
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">Tech Stack: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Ballerina', 'HubSpot REST API', 'OAuth 2.0'].map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Article 2 under Onboarding Project */}
                {BLOG_POSTS[1] && (
                  <div className="mt-4 pt-4 border-t border-[var(--line)]">
                    <div className="flex items-start gap-3">
                      <Code className="h-5 w-5 text-[var(--muted)] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <a
                          href={BLOG_POSTS[1].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                        >
                          {BLOG_POSTS[1].title}
                        </a>
                        <p className="text-xs text-[var(--muted)] mt-1">
                          {BLOG_POSTS[1].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Internship Photo Gallery */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[var(--ink)] mb-4 text-center">
              Internship Snaps
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="group relative aspect-[4/3] overflow-hidden bg-[var(--line)] border border-[var(--line)]"
                >
                  <img
                    src={`/internship/experience-${num}.jpg`}
                    alt={`WSO2 Internship Experience ${num}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-[var(--line)] items-center justify-center">
                    <Briefcase className="h-12 w-12 text-[var(--muted)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Education</h2>
        </div>
        <div className="relative space-y-8 pl-8">
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-px bg-[var(--line)]" />
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative">
              <div className="absolute -left-8 top-2 h-2 w-2 rounded-full bg-[var(--ink)]" />
              <div className="panel p-6 hover:border-[var(--ink)] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-[var(--line)] p-2 flex items-center justify-center">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <GraduationCap className={`h-6 w-6 text-[var(--muted)] ${edu.logo ? 'hidden' : ''}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-[var(--ink)]">
                        {edu.degree}
                      </h3>
                      <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </span>
                    </div>
                    <p className="accent font-medium mt-1">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-[var(--muted)] mt-2">
                        GPA: <span className="font-semibold text-[var(--ink)]">{edu.gpa}</span>
                      </p>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <p
                            key={idx}
                            className={`text-sm flex items-start gap-2 ${achievement.includes('🏆')
                              ? 'text-[var(--ink)] font-semibold border-l-2 border-[var(--accent)] pl-3 py-1'
                              : 'text-[var(--muted)]'
                              }`}
                          >
                            <span className={achievement.includes('🏆') ? '' : 'text-[var(--muted)] mt-0'}>
                              {achievement.includes('🏆') ? '' : '•'}
                            </span>
                            {achievement}
                          </p>
                        ))}
                      </div>
                    )}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-[var(--ink)] mb-2">
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="tag"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        id="certifications"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACCOMPLISHMENTS.map((cert) => (
            <div
              key={cert.id}
              className="group panel p-4 hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-[var(--muted)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[var(--ink)]">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    {cert.organization} • {cert.year}
                  </p>
                  {cert.description && (
                    <p className="text-xs text-[var(--muted)] mt-1">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Awards and Scholarships */}
      <motion.section
        id="awards"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Awards & Scholarships</h2>
        </div>

        {/* Awards with Images - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS.filter(award => award.image && award.id !== 'award_school').map((award) => (
            <div
              key={award.id}
              className="group panel hover:border-[var(--ink)] transition-colors overflow-hidden"
            >
              {/* Award Image */}
              <div className="relative h-72 bg-[var(--line)] overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 bg-[var(--line)] items-center justify-center">
                  <Trophy className="h-12 w-12 text-[var(--muted)]" />
                </div>
              </div>

              {/* Award Content */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-[var(--muted)] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[var(--ink)]">
                      {award.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      {award.organization}
                      {award.year && ` • ${award.year}`}
                    </p>
                    {award.description && (
                      <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                        {award.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* School Awards - Separate Full-Width Row */}
        {AWARDS.filter(award => award.id === 'award_school').map((award) => (
          <div
            key={award.id}
            className="mt-6 group panel hover:border-[var(--ink)] transition-colors overflow-hidden"
          >
            {/* Award Image */}
            {award.image && (
              <div className="relative h-[28rem] bg-[var(--line)] overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 bg-[var(--line)] items-center justify-center">
                  <Trophy className="h-16 w-16 text-[var(--muted)]" />
                </div>
              </div>
            )}

            {/* Award Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Trophy className="h-6 w-6 text-[var(--muted)] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--ink)]">
                    {award.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {award.organization}
                    {award.year && ` • ${award.year}`}
                  </p>
                  {award.description && (
                    <p className="text-sm text-[var(--ink)]/70 mt-3 leading-relaxed">
                      {award.description}
                    </p>
                  )}
                  {/* Grouped Awards List */}
                  {award.awards && award.awards.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {award.awards.map((subAward, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-[var(--ink)]/80 flex items-start gap-2"
                        >
                          <span className="text-[var(--muted)] mt-1">•</span>
                          <span className="font-medium">{subAward}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Awards without Images - 2 per row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS.filter(award => !award.image && award.id !== 'award_school').map((award) => (
            <div
              key={award.id}
              className="group panel p-4 hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-[var(--muted)] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[var(--ink)]">
                    {award.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    {award.organization}
                    {award.year && ` • ${award.year}`}
                  </p>
                  {award.description && (
                    <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Academic Projects */}
      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Academic Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group panel hover:border-[var(--ink)] transition-colors overflow-hidden"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-72 bg-[var(--line)] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-[var(--line)] items-center justify-center">
                    <Code className="h-12 w-12 text-[var(--muted)]" />
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  {!project.image && <Code className="h-6 w-6 text-[var(--muted)] mt-1 flex-shrink-0" />}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                          >
                            {project.name}
                          </a>
                        ) : (
                          <h3 className="text-lg font-bold text-[var(--ink)]">
                            {project.name}
                          </h3>
                        )}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 border border-[var(--line)] hover:border-[var(--ink)] transition-colors group/github"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5 text-[var(--muted)] group-hover/github:text-[var(--ink)]" />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills & Technologies */}
      <motion.section
        id="skills"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Skills & Technologies</h2>
        </div>
        <div className="space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="h-5 w-5 text-[var(--muted)]" />
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section >

      {/* Volunteering & Community Involvement */}
      < motion.section
        id="volunteering"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Volunteering & Community</h2>
        </div>

        {/* Horizontal Scrolling Container for Organizations */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {VOLUNTEERING.map((org) => (
              <div
                key={org.id}
                className="group w-[280px] md:w-auto md:min-w-0 snap-start flex-shrink-0 panel hover:border-[var(--ink)] transition-colors overflow-hidden flex flex-col"
              >
                {/* Organization Image */}
                <div className="relative h-48 bg-[var(--line)] overflow-hidden">
                  {org.image ? (
                    <img
                      src={org.image}
                      alt={org.organization}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Heart className="h-16 w-16 text-[var(--muted)]" />
                    </div>
                  )}
                  {/* Organization Badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-[var(--bg)]/95 backdrop-blur-sm border border-[var(--line)] px-3 py-2">
                      <h3 className="text-sm font-bold text-[var(--ink)] leading-tight">
                        {org.organization}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Roles List - Scrollable */}
                <div className="flex-1 p-5 space-y-4 max-h-[400px] overflow-y-auto scrollbar-hide">
                  {org.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className="pb-4 border-b border-[var(--line)] last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <Heart className="h-4 w-4 text-[var(--muted)] mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-[var(--ink)]">
                            {role.role}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {role.startDate} - {role.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      {role.description && (
                        <p className="text-xs text-[var(--muted)] leading-relaxed ml-6">
                          {role.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <p className="eyebrow text-center mt-4 md:hidden">
          Swipe to see more →
        </p>
      </motion.section>

      {/* Featured Media */}
      <motion.section
        id="featured"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Featured Media</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video 1 - EXMO 2024 */}
          <div className="panel overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UzZ8kH0aw7I"
                title="EXMO 2024 Live Streaming"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--ink)] mb-1">
                EXMO 2024 - Live Streaming Host
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Hosted the live streaming for EXMO 2024, University of Moratuwa&apos;s annual exhibition
              </p>
            </div>
          </div>

          {/* Video 2 - Speech Olympiad */}
          <div className="panel overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BdzZoRsX7ME"
                title="Speech Olympiad XVI Finalist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--ink)] mb-1">
                Speech Olympiad XVI - Finalist
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Delivered my finalist speech at the 16th Speech Olympiad competition
              </p>
            </div>
          </div>

          {/* Video 3 - Drama Performance */}
          <div className="panel overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XsH5kpwsd_U"
                title="Abhina Drama - Maradodalawa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--ink)] mb-1">
                Abhina Drama - &quot;Maradodalawa&quot;
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Performance in the Abhina drama production &quot;Maradodalawa&quot;
              </p>
            </div>
          </div>

          {/* Video 4 - Real Analysis Lecture */}
          <div className="panel overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PMilG23Z-yc"
                title="Real Analysis Kuppi Session"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--ink)] mb-1">
                Real Analysis - Kuppi Session
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Conducted few study sessions (kuppi) on Real Analysis for junior batch students
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Get In Touch */}
      < motion.section
        id="contact"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="scroll-mt-20"
      >
        <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--line)] pb-4">
          <h2 className="display text-3xl md:text-4xl">Get In Touch</h2>
        </div>
        <div className="panel p-8">
          <p className="text-lg text-[var(--ink)]/80 mb-6">
            I&apos;m always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <div className="space-y-4 mb-6">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-[var(--ink)]/80 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="h-5 w-5 text-[var(--muted)]" />
              <span className="font-medium">{EMAIL}</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 text-[var(--ink)]/80 hover:text-[var(--accent)] transition-colors"
            >
              <Phone className="h-5 w-5 text-[var(--muted)]" />
              <span className="font-medium">{PHONE_NUMBER}</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>
      </motion.section >
    </motion.main >
  )
}
