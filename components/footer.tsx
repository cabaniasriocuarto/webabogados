export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-wrapper grid gap-6 py-10 text-sm text-slate-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-primary">Estudio Bendersky</p>
          <p>Consulta online segura y asesoramiento legal especializado.</p>
        </div>
        <div>
          <p className="font-semibold text-primary">Contacto</p>
          <p>consultas@estudiobendersky.com</p>
          <p>+54 9 11 5555-5555</p>
        </div>
        <div>
          <p className="font-semibold text-primary">Desarrollado por</p>
          <p>Ranquel Tech Lab — ranqueltechlab@gmail.com</p>
          <p>+54 9 358 411-8722</p>
        </div>
      </div>
    </footer>
  );
}
