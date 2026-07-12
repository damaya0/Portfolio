'use client'
import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import { Mail, Download } from 'lucide-react'

export function Header() {
  return (
    <header id="home" className="min-h-screen flex items-center justify-center pt-16 pb-20">
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="eyebrow"
          delay={0.2}
        >
          Hello there! I&apos;m
        </TextEffect>

        <h1 className="display text-6xl md:text-7xl lg:text-8xl leading-tight">
          Damsith Adikari
        </h1>

        <svg viewBox="0 0 160 24" className="mx-auto h-6 w-40 text-[var(--accent)]" aria-hidden="true">
          <motion.path
            d="M0,12 L28,12 L28,4 L64,4 L64,20 L96,20 L96,4 L132,4 L132,12 L160,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
          />
        </svg>

        <TextEffect
          as="h2"
          preset="fade"
          per="word"
          className="text-2xl md:text-3xl font-semibold text-[var(--ink)]"
          delay={0.6}
        >
          Software Engineer at WSO2
        </TextEffect>

        <TextEffect
          as="p"
          preset="fade"
          per="word"
          className="text-lg text-[var(--muted)] max-w-2xl mx-auto"
          delay={0.9}
        >
          Rethinking AI from first principles
        </TextEffect>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="#contact"
            className="btn-line is-accent"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
          <a
            href="/damsith-resume.pdf"
            download
            className="btn-line"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  )
}
