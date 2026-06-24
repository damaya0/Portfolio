'use client'
import { motion } from 'motion/react'
import { EMAIL } from './data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Header() {
  return (
    <header
      id="home"
      className="flex min-h-[88vh] flex-col justify-center py-20"
    >
      <motion.p
        className="eyebrow mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        Portfolio — Sri Lanka · {new Date().getFullYear()}
      </motion.p>

      <h1 className="display text-[clamp(3.2rem,13vw,11rem)]">
        {['Damsith', 'Adikari'].map((word, i) => (
          <span key={word} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.12 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        className="mt-10 flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
      >
        <p className="max-w-md text-lg leading-relaxed text-[var(--muted)]">
          Electronic &amp; Telecommunication Engineering undergraduate at the
          University of Moratuwa, working across software, AI/ML, and embedded
          systems.
        </p>
        <div className="flex gap-3">
          <a href="#contact" className="btn-line is-accent">
            Get in touch
          </a>
          <a href="/damsith-resume.pdf" download className="btn-line">
            Résumé
          </a>
        </div>
      </motion.div>
    </header>
  )
}
