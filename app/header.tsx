'use client'
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
          className="text-lg text-zinc-600 dark:text-zinc-400"
          delay={0.2}
        >
          Hello there!, I&apos;m
        </TextEffect>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
          Damsith Adikari
        </h1>

        <TextEffect
          as="h2"
          preset="fade"
          per="word"
          className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100"
          delay={0.5}
        >
          Electronic & Telecommunication Engineering Undergraduate
        </TextEffect>

        <TextEffect
          as="p"
          preset="fade"
          per="word"
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          delay={0.8}
        >
          Passionate about innovation and solving real-world problems with
          creativity and impact
        </TextEffect>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Get In Touch
          </a>
          <a
            href="/damsith-resume.pdf"
            download
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  )
}
