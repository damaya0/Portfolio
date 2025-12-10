'use client'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Navigation() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Initials */}
                    <Link
                        href="#home"
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        DA
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                            ) : (
                                <Moon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
