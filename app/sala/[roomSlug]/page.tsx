export default function SalaPage({ params }: { params: { roomSlug: string } }) {
  return (
    <main className="section">
      <div className="container-wrapper grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-accent">Sala privada</p>
          <h1 className="text-3xl font-semibold text-primary">
            Ingresá a tu consulta online
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Sala: <span className="font-semibold">{params.roomSlug}</span>
          </p>
          <div className="mt-6 grid gap-4">
            <label className="text-sm font-medium text-slate-700">
              Código de 6 dígitos
              <input
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="000000"
              />
            </label>
            <button
              type="button"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              Validar e ingresar
            </button>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            La sala solo se habilita 10 minutos antes del turno y hasta 60 minutos
            después. Si tu código es incorrecto o el turno está vencido, verás un
            aviso.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Placeholder: aquí se renderiza la videollamada Daily embebida cuando la
          validación es exitosa.
        </div>
      </div>
    </main>
  );
}
