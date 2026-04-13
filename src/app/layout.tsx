import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteLoader } from "@/components/layout/site-loader";
import { Manrope, Montserrat, Teko } from "next/font/google";
import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const accentFont = Teko({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mersiel | Software de Autor",
  description:
    "Mersiel crea software de autor con estandares de excelencia global, claridad y respeto al talento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if(sessionStorage.getItem("mersiel_intro_seen")==="true") document.documentElement.classList.add("skip-intro");` }} />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased`}>
        <SiteLoader />
        <div className="site-shell">
          <main className="site">
            <SiteHeader />
            {children}
            <SiteFooter />
          </main>
        </div>
      </body>
    </html>
  );
}
