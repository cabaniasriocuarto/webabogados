export default function ContactoPage() {
  return (
    <main className="section">
      <div className="container-wrapper grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-accent">Contacto</p>
          <h1 className="text-4xl font-semibold text-primary">
            Estamos listos para ayudarte
          </h1>
          <p className="mt-4 text-slate-600">
            Sumá tu consulta o coordiná una reunión presencial. Validar dirección
            real del estudio antes de publicar.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>Dirección: Placeholder a confirmar</p>
            <p>Email: consultas@estudiobendersky.com</p>
            <p>WhatsApp: +54 9 11 5555-5555</p>
          </div>
        </div>
        <form className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-slate-700">
              Nombre
              <input
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="Nombre y apellido"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="nombre@email.com"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Mensaje
              <textarea
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
              />
            </label>
            <button
              type="button"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              Enviar consulta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
