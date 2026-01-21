import Link from "next/link";

const contentBySlug: Record<string, { title: string; summary: string }> = {
  "derecho-deportivo": {
    title: "Derecho Deportivo",
    summary:
      "Acompañamos a clubes, federaciones y deportistas en cada instancia contractual.",
  },
  "derecho-aeronautico": {
    title: "Derecho Aeronáutico",
    summary:
      "Asesoramos en operaciones aéreas, cumplimiento normativo y siniestros.",
  },
  accidentes: {
    title: "Accidentes",
    summary:
      "Gestionamos reclamos por daños, accidentes laborales y de tránsito.",
  },
};

export default function ServicioDetallePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = contentBySlug[params.slug];

  if (!service) {
    return (
      <main className="section">
        <div className="container-wrapper">
          <h1 className="text-3xl font-semibold text-primary">Servicio no encontrado</h1>
          <Link href="/servicios" className="mt-4 inline-block text-accent">
            Volver a servicios
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container-wrapper">
        <p className="text-sm font-semibold text-accent">Área de práctica</p>
        <h1 className="text-4xl font-semibold text-primary">{service.title}</h1>
        <p className="mt-4 text-slate-600">{service.summary}</p>
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Placeholder: completar con casos, metodología de trabajo, FAQs y
          documentos requeridos.
        </div>
        <Link
          href="/consulta-online"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          Agendar consulta
        </Link>
      </div>
    </main>
  );
}
