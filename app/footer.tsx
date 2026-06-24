export function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-[var(--line)] py-8 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Damsith Adikari</span>
      <span>Colombo, Sri Lanka</span>
    </footer>
  )
}
