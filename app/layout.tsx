import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Estudio Bendersky | Consulta Online",
  description: "Estudio jurídico especializado con consulta online segura.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <Script id="ga4-placeholder" strategy="afterInteractive">
          {`// GA4 placeholder: agregar ID real cuando esté disponible.`}
        </Script>
        <Script id="gtm-placeholder" strategy="afterInteractive">
          {`// GTM placeholder: agregar contenedor real cuando esté disponible.`}
        </Script>
        <Script id="meta-pixel-placeholder" strategy="afterInteractive">
          {`// Meta Pixel placeholder: agregar ID real cuando esté disponible.`}
        </Script>
      </body>
    </html>
  );
}
