"use client";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredWork, mision, services, vision } from "@/lib/site-content";

type MenuTab = "sobre" | "servicios" | "proyectos" | "herramientas";
type MenuPreview = {
  label: string;
  title: string;
  body: string;
  points?: string[];
};

type MenuLink = {
  href: string;
  label: string;
  previewKey: string;
  preview: MenuPreview;
};

const sobreLinks: MenuLink[] = [
  {
    href: "/sobre#mision",
    label: "Misión",
    previewKey: "mision",
    preview: mision,
  },
  {
    href: "/sobre#vision",
    label: "Visión",
    previewKey: "vision",
    preview: vision,
  },
  {
    href: "/sobre#metodo",
    label: "Método",
    previewKey: "metodo",
    preview: {
      label: "Método",
      title: "De idea a sistema confiable.",
      body: "Traducimos objetivos de negocio en arquitectura clara, entregas iterativas y despliegues preparados para crecer sin fricción.",
    },
  },
  {
    href: "/sobre#por-que",
    label: "¿Por qué Mersiel?",
    previewKey: "diferenciador",
    preview: {
      label: "Diferenciador",
      title: "¿Por qué nosotros y no otro dev?",
      body: "",
      points: [
        "No usamos plantillas, todo es a medida",
        "Pensamos en negocio, no solo en código",
        "Entregamos soluciones listas para escalar",
      ],
    },
  },
  {
    href: "/#contacto",
    label: "Contacto",
    previewKey: "contacto",
    preview: {
      label: "Contacto",
      title: "Hablemos de tu proyecto.",
      body: "Abrimos la conversación con criterio técnico, entendiendo la operación primero para proponer una solución realista y precisa.",
    },
  },
];

const tabNavLinks: Record<Exclude<MenuTab, "sobre">, MenuLink[]> = {
  servicios: services.map((service, index) => ({
    href: `/servicios#desarrollo`,
    label: service.title,
    previewKey: `servicio-${index + 1}`,
    preview: {
      label: `Servicio ${service.index}`,
      title: service.title,
      body: service.description,
    },
  })),
  proyectos: featuredWork.map((work, index) => ({
    href: "/proyectos#casos",
    label: work.title,
    previewKey: `proyecto-${index + 1}`,
    preview: {
      label: `Caso 0${index + 1}`,
      title: work.title,
      body: `${work.description} ${work.impact}.`,
    },
  })),
  herramientas: [
    {
      href: "/herramientas#lista",
      label: "Web",
      previewKey: "herramienta-web",
      preview: {
        label: "Para web",
        title: "Herramientas creadas para navegador.",
        body: "Desarrollos web útiles para tus clientes, optimizados para velocidad, claridad y uso diario.",
      },
    },
    {
      href: "/herramientas#lista",
      label: "Apps móviles",
      previewKey: "herramienta-apks",
      preview: {
        label: "Apps móviles",
        title: "Aplicaciones móviles propias de Mersiel.",
        body: "Las apps las desarrollas y publicas tú con Mersiel, sin cargas de terceros, para cuidar seguridad y evitar riesgos para tus clientes.",
      },
    },
    {
      href: "/herramientas#lista",
      label: "Automatizaciones",
      previewKey: "herramienta-automations",
      preview: {
        label: "Automatizaciones",
        title: "Flujos que trabajan por ti.",
        body: "Desde convertidores hasta asistentes de tareas: herramientas creadas para resolver puntos específicos de operación.",
      },
    },
    {
      href: "/herramientas#lista",
      label: "Lanzamientos",
      previewKey: "herramienta-launches",
      preview: {
        label: "Roadmap",
        title: "Nuevas herramientas en crecimiento constante.",
        body: "El tab de herramientas irá sumando nuevas apps y mejoras continuas para ampliar tu ecosistema digital.",
      },
    },
  ],
};

const tabs: { id: MenuTab; label: string }[] = [
  { id: "sobre", label: "Sobre Mersiel" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "herramientas", label: "Herramientas" },
];

const menuLinksByTab: Record<MenuTab, MenuLink[]> = {
  sobre: sobreLinks,
  servicios: tabNavLinks.servicios,
  proyectos: tabNavLinks.proyectos,
  herramientas: tabNavLinks.herramientas,
};

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MenuTab>("sobre");
  const [activePreviewKey, setActivePreviewKey] = useState<string | null>(null);
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
    if (!menuOpen) {
      setActivePreviewKey(null);
      return;
    }

    setActivePreviewKey(null);
  }, [menuOpen, activeTab]);

  const closeMenu = () => setMenuOpen(false);
  const currentLinks = menuLinksByTab[activeTab];
  const activePreview = currentLinks.find((link) => link.previewKey === activePreviewKey)?.preview ?? null;
  const setPreview = (previewKey: string | null) => setActivePreviewKey(previewKey);

  const renderMenuLinks = (links: MenuLink[], tab: MenuTab) => (
    <ul className={`topbar-menu-list topbar-menu-list--${tab}`} key={tab}>
      {links.map((link) => (
        <li key={link.previewKey}>
          <Link
            href={link.href}
            onClick={closeMenu}
            onMouseEnter={() => setPreview(link.previewKey)}
            onMouseLeave={() => setPreview(null)}
            onFocus={() => setPreview(link.previewKey)}
            onBlur={() => setPreview(null)}
            className={activePreviewKey === link.previewKey ? "is-previewed" : ""}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

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
        data-active-tab={activeTab}
        aria-label="Navegacion principal"
      >
        {/* Left 60%: preview panel */}
        <div className={`menu-preview-panel${activePreview ? " has-content" : " is-idle"}`}>
          {activePreview ? (
            <div className={`menu-preview-content menu-preview-content--${activeTab}`} key={`${activeTab}-${activePreviewKey}`}>
              <p className="menu-preview-label">{activePreview.label}</p>
              <h2 className="menu-preview-title">{activePreview.title}</h2>
              {activePreview.body && <p className="menu-preview-body">{activePreview.body}</p>}
              {activePreview.points && (
                <ul className="menu-preview-points">
                  {activePreview.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="menu-preview-idle" aria-hidden="true">
              <div className="menu-preview-idle-mark">
                <Image
                  src="/Logos/mersiel-spectacle-intro.svg"
                  className="menu-preview-idle-logo"
                  alt="Mersiel"
                  width={760}
                  height={450}
                  priority
                />
                <p className="menu-preview-idle-name">Mersiel</p>
              </div>
              <p className="menu-preview-idle-kicker">Software pensado para crecer</p>
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
                className={`menu-tab-btn menu-tab-btn--${tab.id}${activeTab === tab.id ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "sobre" ? (
            <div className="menu-sobre-panel" key="sobre">
              {renderMenuLinks(currentLinks, activeTab)}
              <div className="menu-sobre-socials">
                <p className="menu-sobre-label">Síguenos o contáctanos</p>
                <SocialLinks />
              </div>
            </div>
          ) : (
            renderMenuLinks(currentLinks, activeTab)
          )}

          <div className="topbar-menu-meta">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Logo variant="white" className="menu-meta-logo" />
              <span>Mersiel</span>
            </div>
            <span>Tecnología hecha a la medida</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
