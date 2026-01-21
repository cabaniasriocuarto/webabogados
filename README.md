# Estudio Bendersky — Web + Consulta Online (MVP)

## Entregable 1: Árbol del proyecto

```
.
├── app
│   ├── admin
│   │   ├── abogados
│   │   │   └── page.tsx
│   │   ├── especialidades
│   │   │   └── page.tsx
│   │   ├── turnos
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── daily
│   │   │   ├── rooms
│   │   │   │   └── route.ts
│   │   │   └── tokens
│   │   │       └── route.ts
│   │   ├── sala
│   │   │   └── validate
│   │   │       └── route.ts
│   │   └── turnos
│   │       └── route.ts
│   ├── consulta-online
│   │   └── page.tsx
│   ├── contacto
│   │   └── page.tsx
│   ├── nosotros
│   │   └── page.tsx
│   ├── sala
│   │   └── [roomSlug]
│   │       └── page.tsx
│   ├── servicios
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components
│   ├── footer.tsx
│   └── header.tsx
├── lib
│   ├── auth.ts
│   ├── daily.ts
│   ├── email.ts
│   ├── prisma.ts
│   └── security.ts
├── prisma
│   └── schema.prisma
├── types
│   └── next-auth.d.ts
├── .env.example
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Entregable 2: Código principal (resumen)

- **Páginas públicas**: `/`, `/servicios`, `/consulta-online`, `/nosotros`, `/contacto`, `/sala/[roomSlug]`.
- **Admin**: `/admin`, `/admin/abogados`, `/admin/especialidades`, `/admin/turnos`.
- **API**:
  - `POST /api/daily/rooms` crea salas Daily.
  - `POST /api/daily/tokens` crea meeting tokens Daily.
  - `POST /api/sala/validate` valida código y habilita token.
  - `POST /api/turnos` crea turno, sala, código y envía email.
- **Prisma**: modelos para usuarios, abogados, especialidades, turnos y relaciones.

## Entregable 3: Instrucciones “como a un nene de 5 años”

### 1) Crear el proyecto
1. Abrí una terminal.
2. Escribí: `git clone <repo>`.
3. Entrá a la carpeta: `cd webabogados`.
4. Instalá dependencias: `npm install`.

### 2) Configurar `.env`
1. Copiá el ejemplo: `cp .env.example .env`.
2. Abrí `.env` y completá:
   - `APP_URL=http://localhost:3000`
   - `DATABASE_URL` (para local, usar SQLite, por ejemplo: `file:./dev.db`)
   - `NEXTAUTH_SECRET` (una cadena larga)
   - `DAILY_API_KEY` (tu API key de Daily)
   - `RESEND_API_KEY` (tu API key de Resend)

### 3) Correr local
1. Ejecutá: `npm run dev`.
2. Abrí: `http://localhost:3000`.

### 3.1) UI con shadcn/ui (opcional recomendado)
1. Ejecutá: `npx shadcn-ui@latest init`.
2. Agregá componentes según necesidad.

### 4) Migrar Prisma
1. Generar cliente: `npm run prisma:generate`.
2. Crear tablas local: `npm run prisma:migrate`.

### 5) Configurar Daily + Resend
- **Daily**: crear API key desde el dashboard.
- **Resend**: crear API key y dominio verificado.
- Nota: el acceso a meeting tokens puede variar según el plan de Daily (esto puede cambiar según tu plan).

### 6) Deploy en Vercel
1. Subí el repo a GitHub.
2. Conectalo en Vercel.
3. Agregá las variables `.env` en Vercel.
4. Deploy automático.

## Entregable 4: Checklist de pruebas manuales end-to-end

- [ ] Abrir `/consulta-online` y completar formulario.
- [ ] Seleccionar especialidad y horario.
- [ ] Verificar que se crea el turno y sala Daily.
- [ ] Confirmar que llega email con link y código.
- [ ] Abrir `/sala/[roomSlug]`.
- [ ] Ingresar código correcto dentro de la ventana permitida.
- [ ] Verificar que se carga videollamada embebida.
- [ ] Probar código incorrecto y ver mensaje de error.
- [ ] Probar ingreso fuera de horario y ver bloqueo.
- [ ] Entrar al panel `/admin/turnos` y ver turno creado.

## Checklist de contenido a completar por el cliente

- [ ] Textos finales de cada área legal.
- [ ] Bios reales de abogados + fotos profesionales.
- [ ] Dirección real del estudio + mapa.
- [ ] Emails oficiales y teléfonos.
- [ ] Políticas legales (términos de servicio, privacidad).
- [ ] Validación legal de todos los textos y descripciones.

> Importante: el Estudio provee y valida los textos legales; nosotros maquetamos y publicamos.
