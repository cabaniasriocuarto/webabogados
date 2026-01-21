import Link from "next/link";

const services = [
  {
    title: "Derecho Deportivo",
    description:
      "Defensa contractual, patrocinio y asesoramiento para clubes y atletas.",
  },
  {
    title: "Derecho Aeronáutico",
    description:
      "Asistencia legal en operaciones aéreas, seguros y responsabilidad.",
  },
  {
    title: "Accidentes",
    description:
      "Representación integral en reclamos por accidentes y daños.",
  },
];

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Estudio Bendersky",
    areaServed: "AR",
    url: "https://estudiobendersky.com",
    serviceType: ["Derecho Deportivo", "Derecho Aeronáutico", "Accidentes"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "consultas@estudiobendersky.com",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <section className="section bg-slate-50">
        <div className="container-wrapper grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-accent">
              Estudio jurídico especializado
            </p>
            <h1 className="text-4xl font-semibold text-primary md:text-5xl">
              Consulta online segura con abogados expertos
            </h1>
            <p className="text-lg text-slate-600">
              Brindamos asesoramiento estratégico en áreas complejas del derecho,
              con un proceso digital, claro y confiable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/consulta-online"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              >
                Consulta Online
              </Link>
              <Link
                href="/servicios"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
              >
                Ver servicios
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-primary">
              Confianza y profesionalismo
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✔ Consultas virtuales con agenda automatizada.</li>
              <li>✔ Videollamadas protegidas por código y token.</li>
              <li>✔ Seguimiento personalizado con abogados especializados.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrapper">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-accent">Servicios</p>
              <h2 className="text-3xl font-semibold text-primary">
                Áreas de práctica destacadas
              </h2>
            </div>
            <Link href="/servicios" className="text-sm font-semibold text-accent">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wrapper grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-accent">Equipo</p>
            <h2 className="text-3xl font-semibold text-primary">
              Abogados con experiencia comprobada
            </h2>
            <p className="mt-4 text-slate-600">
              Nuestro equipo combina trayectoria jurídica y enfoque digital para
              brindar respuestas rápidas y seguras.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Placeholder: aquí van fotos reales, bios y certificaciones del
            estudio.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrapper rounded-3xl bg-primary px-8 py-12 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">
              Coordiná tu consulta online en minutos
            </h2>
            <p className="mt-2 text-slate-200">
              Elegí el área legal, seleccioná horario y conectate por videollamada
              con un abogado.
            </p>
          </div>
          <Link
            href="/consulta-online"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary md:mt-0"
          >
            Reservar consulta
          </Link>
        </div>
      </section>
    </main>
  );
}
