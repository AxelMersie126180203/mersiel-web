"use client";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services, featuredWork, mision, vision } from "@/lib/site-content";

type MenuTab = "sobre" | "servicios" | "proyectos" | "herramientas";
type SobreHover = "mision" | "vision" | null;

const tabNavLinks: Record<Exclude<MenuTab, "sobre">, { href: string; label: string }[]> = {
  servicios: services.map((s) => ({ href: "/#servicios", label: s.title })),
  proyectos: featuredWork.map((w) => ({ href: "/#soluciones", label: w.title })),
  herramientas: [
    { href: "/#metodo", label: "Metodología" },
    { href: "/#estandares", label: "Estándares" },
    { href: "/#filosofia", label: "Filosofía" },
    { href: "/#contacto", label: "Evaluación" },
  ],
};

const tabs: { id: MenuTab; label: string }[] = [
  { id: "sobre", label: "Sobre Mersiel" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "herramientas", label: "Herramientas" },
];

const previewContent: Record<NonNullable<SobreHover>, { label: string; title: string; body: string }> = {
  mision: mision,
  vision: vision,
};

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MenuTab>("sobre");
  const [sobreHover, setSobreHover] = useState<SobreHover>(null);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 100) {
        if (currentY > lastY.current + 6) {
          setHidden(true);
        } else if (currentY < lastY.current - 6) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuOpen) return;
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // Reset hover when menu closes or tab changes
  useEffect(() => {
    if (!menuOpen || activeTab !== "sobre") setSobreHover(null);
  }, [menuOpen, activeTab]);

  const closeMenu = () => setMenuOpen(false);
  const currentLinks = activeTab !== "sobre" ? tabNavLinks[activeTab] : [];
  const activePreview = sobreHover ? previewContent[sobreHover] : null;

  return (
    <header ref={headerRef} className={`topbar fade-up fade-delay-1${hidden ? " topbar--hidden" : ""}`}>
      <Link className="brand" href="/#inicio" aria-label="Mersiel inicio">
        <Image src="/Logos/mersiel-spectacle-intro.svg" className="brand-logo" alt="Mersiel" width={760} height={450} priority />
      </Link>

      <button
        className={`topbar-menu-btn${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="site-nav-drawer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
      </button>

      {/* Full-screen overlay backdrop */}
      <div className={`topbar-menu-backdrop${menuOpen ? " is-open" : ""}`} onClick={closeMenu} aria-hidden="true" />

      {/* Full-screen menu container */}
      <nav
        id="site-nav-drawer"
        className={`topbar-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Navegacion principal"
      >
        {/* Left 60%: preview panel */}
        <div className={`menu-preview-panel${activeTab === "sobre" && activePreview ? " has-content" : ""}`}>
          {activeTab === "sobre" && activePreview && (
            <div className="menu-preview-content" key={sobreHover}>
              <p className="menu-preview-label">{activePreview.label}</p>
              <h2 className="menu-preview-title">{activePreview.title}</h2>
              <p className="menu-preview-body">{activePreview.body}</p>
            </div>
          )}
        </div>

        {/* Right 40%: the actual nav drawer */}
        <div className="menu-nav-panel">
          {/* Tab bar */}
          <div className="topbar-menu-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`menu-tab-btn${activeTab === tab.id ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "sobre" ? (
            <div className="menu-sobre-panel" key="sobre">
              {/* Nav links with hover preview */}
              <ul className="topbar-menu-list">
                <li>
                  <Link
                    href="/#inicio"
                    onClick={closeMenu}
                    onMouseEnter={() => setSobreHover("mision")}
                    onMouseLeave={() => setSobreHover(null)}
                    className={sobreHover === "mision" ? "is-previewed" : ""}
                  >
                    Misión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#filosofia"
                    onClick={closeMenu}
                    onMouseEnter={() => setSobreHover("vision")}
                    onMouseLeave={() => setSobreHover(null)}
                    className={sobreHover === "vision" ? "is-previewed" : ""}
                  >
                    Visión
                  </Link>
                </li>
                <li><Link href="/#metodo" onClick={closeMenu}>Método</Link></li>
                <li><Link href="/#contacto" onClick={closeMenu}>Contacto</Link></li>
              </ul>
              {/* Social links pinned to bottom */}
              <div className="menu-sobre-socials">
                <p className="menu-sobre-label">Síguenos o contáctanos</p>
                <SocialLinks />
              </div>
            </div>
          ) : (
            <ul className="topbar-menu-list" key={activeTab}>
              {currentLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="topbar-menu-meta">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Logo variant="white" className="menu-meta-logo" />
              <span>Mersiel</span>
            </div>
            <span>Software de autor</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
