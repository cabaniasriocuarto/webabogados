export default function NosotrosPage() {
  return (
    <main className="section">
      <div className="container-wrapper">
        <p className="text-sm font-semibold text-accent">Nosotros</p>
        <h1 className="text-4xl font-semibold text-primary">
          Un equipo legal con visión digital
        </h1>
        <p className="mt-4 text-slate-600">
          Combinamos cercanía, rigor jurídico y procesos digitales para brindar
          una experiencia clara y confiable.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="h-32 rounded-xl bg-slate-100" />
              <h2 className="mt-4 text-lg font-semibold text-primary">
                Abogado/a Placeholder
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Bio breve a validar por el estudio. Incluir especialidad,
                experiencia y matrícula.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
