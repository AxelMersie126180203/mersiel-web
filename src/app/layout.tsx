import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MersielMascot } from "@/components/layout/mascot";
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
  title: "Mersiel | Desarrollo de Software",
  description:
    "Mersiel crea software a medida para negocios que buscan crecer con soluciones claras, funcionales y bien ejecutadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased`}>
        <div className="site-shell">
          <main className="site">
            <SiteHeader />
            {children}
            <SiteFooter />
          </main>
          <MersielMascot />
        </div>
      </body>
    </html>
  );
}
