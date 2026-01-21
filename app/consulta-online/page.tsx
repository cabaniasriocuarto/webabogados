const areas = [
  "Derecho Deportivo",
  "Derecho Aeronáutico",
  "Accidentes",
];

export default function ConsultaOnlinePage() {
  return (
    <main className="section">
      <div className="container-wrapper">
        <p className="text-sm font-semibold text-accent">Consulta Online</p>
        <h1 className="text-4xl font-semibold text-primary">
          Agendá tu consulta en pocos pasos
        </h1>
        <p className="mt-4 text-slate-600">
          Seleccioná el área, completá el formulario y elegí un turno disponible.
          Recibirás un correo con el link y el código de acceso.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-slate-700">
                Área
                <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                  {areas.map((area) => (
                    <option key={area}>{area}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium text-slate-700">
                Nombre y apellido
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="Juan Pérez"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="juan@email.com"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Teléfono
                <input
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  placeholder="+54 9 11 5555-5555"
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Mensaje
                <textarea
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  rows={4}
                  placeholder="Contanos brevemente tu consulta"
                />
              </label>
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-1" />
                Acepto los términos y condiciones del servicio de consulta online.
              </label>
              <button
                type="button"
                className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              >
                Continuar con el turno
              </button>
            </div>
          </form>

          <aside className="rounded-2xl bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-primary">Turnero</h2>
            <p className="mt-2 text-sm text-slate-600">
              Placeholder: aquí se mostrará el calendario con disponibilidad
              automática según la especialidad.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
              Integrar lógica real del turnero + asignación de abogados.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
