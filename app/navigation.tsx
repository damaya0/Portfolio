'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Awards', href: '#awards' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Volunteering', href: '#volunteering' },
        { label: 'Featured', href: '#featured' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)]">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Initials */}
                    <Link
                        href="#home"
                        className="display text-xl hover:opacity-70 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    >
                        DA
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="eyebrow link-underline pb-0.5 hover:text-[var(--ink)] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen((open) => !open)}
                            className="md:hidden rounded-full p-2 hover:bg-black/5 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? (
                                <X className="h-5 w-5 text-[var(--ink)]" />
                            ) : (
                                <Menu className="h-5 w-5 text-[var(--ink)]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {menuOpen && (
                <div className="md:hidden border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md">
                    <div className="mx-auto max-w-screen-xl px-4 py-3 grid grid-cols-2 gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="eyebrow rounded-lg px-3 py-2 hover:bg-black/5 hover:text-[var(--ink)] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
