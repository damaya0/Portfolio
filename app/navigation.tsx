'use client'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Skills', href: '#skills' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Featured', href: '#featured' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-mono text-sm tracking-tight"
        >
          damsith<span className="accent">.</span>adikari
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-[13px] text-[var(--muted)] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="font-mono text-xs uppercase tracking-wider lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-[var(--line)] lg:hidden">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-1 px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 py-1.5 text-sm"
              >
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
