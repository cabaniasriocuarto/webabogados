import Link from "next/link";

const cards = [
  {
    title: "Abogados",
    href: "/admin/abogados",
    description: "Gestioná perfiles, especialidades y roles.",
  },
  {
    title: "Especialidades",
    href: "/admin/especialidades",
    description: "CRUD de áreas legales disponibles para consultas.",
  },
  {
    title: "Turnos",
    href: "/admin/turnos",
    description: "Ver agenda, estados y links de salas Daily.",
  },
];

export default function AdminPage() {
  return (
    <main className="section">
      <div className="container-wrapper">
        <p className="text-sm font-semibold text-accent">Admin</p>
        <h1 className="text-4xl font-semibold text-primary">Panel general</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-primary">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
