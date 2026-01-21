import Link from "next/link";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/consulta-online", label: "Consulta Online" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-wrapper flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Estudio Bendersky
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/consulta-online"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Consulta Online
        </Link>
      </div>
    </header>
  );
}
