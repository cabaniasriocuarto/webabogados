import Link from "next/link";

const services = [
  {
    slug: "derecho-deportivo",
    title: "Derecho Deportivo",
    description:
      "Contratos de representación, transferencias, disciplinario y compliance.",
  },
  {
    slug: "derecho-aeronautico",
    title: "Derecho Aeronáutico",
    description:
      "Regulación aeronáutica, leasing y reclamos por incidentes.",
  },
  {
    slug: "accidentes",
    title: "Accidentes",
    description:
      "Daños personales, responsabilidad civil y negociación con aseguradoras.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="section">
      <div className="container-wrapper">
        <p className="text-sm font-semibold text-accent">Servicios</p>
        <h1 className="text-4xl font-semibold text-primary">
          Asesoramiento integral por especialidad
        </h1>
        <p className="mt-4 text-slate-600">
          Contenido a validar por el estudio. Estas descripciones son placeholders
          iniciales.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-accent"
            >
              <h2 className="text-lg font-semibold text-primary">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                Ver detalle
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
