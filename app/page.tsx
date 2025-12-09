'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
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
  PHONE,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
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
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
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
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About Me */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Electronic & Telecommunication Engineering undergraduate at
            University of Moratuwa with strong skills in software engineering,
            AI/ML, and embedded systems. Passionate about building innovative
            solutions that blend hardware and software expertise.
          </p>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
                {edu.institution}
              </h4>
              <p className="text-zinc-700 dark:text-zinc-300">{edu.degree}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {edu.duration}
                {edu.gpa && ` • GPA: ${edu.gpa}`}
              </p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-2">
                  {edu.achievements.map((achievement, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      • {achievement}
                    </p>
                  ))}
                </div>
              )}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Coursework:
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.coursework.join(', ')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Intern Experience (with Blogs) */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Intern Experience</h3>
        <div className="flex flex-col space-y-4">
          {INTERN_EXPERIENCE.map((intern) => (
            <a
              key={intern.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={intern.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-col">
                  <div className="flex flex-row justify-between">
                    <div>
                      <h4 className="font-medium dark:text-zinc-100">
                        {intern.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {intern.company}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {intern.duration}
                    </p>
                  </div>
                  <div className="mt-3 space-y-1">
                    {intern.responsibilities.map((resp, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        • {resp}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Blog Posts Subsection */}
        {BLOG_POSTS.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-base font-medium">Related Blog Posts</h4>
            <div className="flex flex-col space-y-0">
              <AnimatedBackground
                enableHover
                className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.2,
                }}
              >
                {BLOG_POSTS.map((post) => (
                  <Link
                    key={post.uid}
                    className="-mx-3 rounded-xl px-3 py-3"
                    href={post.link}
                    data-id={post.uid}
                  >
                    <div className="flex flex-col space-y-1">
                      <h5 className="font-normal dark:text-zinc-100">
                        {post.title}
                      </h5>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </AnimatedBackground>
            </div>
          </div>
        )}
      </motion.section>

      {/* Awards and Scholarships */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Awards and Scholarships</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="rounded-xl bg-zinc-50/40 p-3 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {award.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {award.organization}
                {award.year && ` • ${award.year}`}
              </p>
              {award.description && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Academic Projects */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Academic Projects</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ACADEMIC_PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                {project.link ? (
                  <a
                    className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                ) : (
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h4>
                )}
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-zinc-200/60 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills & Technologies */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills & Technologies</h3>
        <div className="space-y-4">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {skill.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Accomplishments & Certifications */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">
          Accomplishments & Certifications
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ACCOMPLISHMENTS.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl bg-zinc-50/40 p-3 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {cert.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {cert.organization} • {cert.year}
              </p>
              {cert.description && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Volunteering & Community Involvement */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">
          Volunteering & Community Involvement
        </h3>
        <div className="space-y-3">
          {VOLUNTEERING.map((vol) => (
            <div
              key={vol.id}
              className="rounded-xl bg-zinc-50/40 p-3 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
            >
              <div className="flex flex-row justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {vol.role}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {vol.organization}
                  </p>
                  {vol.description && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {vol.description}
                    </p>
                  )}
                </div>
                {vol.duration && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {vol.duration}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Get In Touch */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Get In Touch</h3>
        <p className="mb-3 text-zinc-600 dark:text-zinc-400">
          Feel free to reach out at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          {' or '}
          <a className="underline dark:text-zinc-300" href={`tel:${PHONE}`}>
            {PHONE}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
