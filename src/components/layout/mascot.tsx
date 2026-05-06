"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Tip = {
  id: string;
  message: string;
  cta?: { label: string; href: string };
};

const ROUTE_TIPS: Record<string, Tip[]> = {
  "/": [
    {
      id: "home-1",
      message: "¡Hola! Soy Lumi, la mascota de Mersiel. Te muestro lo importante mientras navegas. ✨",
    },
    {
      id: "home-2",
      message: "¿Tu negocio tarda demasiado en procesos manuales? Mira la sección de planes 👇",
      cta: { label: "Ver planes", href: "#planes" },
    },
    {
      id: "home-3",
      message: "Cada compromiso de abajo se firma desde el día uno. Sin letras chicas.",
    },
  ],
  "/sobre": [
    {
      id: "sobre-1",
      message: "Aquí cuento de qué va Mersiel. La misión, el método, todo a la vista 🔍",
    },
  ],
  "/servicios": [
    {
      id: "serv-1",
      message: "Cuatro modelos para colaborar. Si dudas cuál te encaja, escríbeme y te recomiendo uno.",
      cta: { label: "Contactar", href: "/#contacto" },
    },
  ],
  "/proyectos": [
    {
      id: "proy-1",
      message: "Estos son conceptos y casos. Cuando entregue mis primeros proyectos, irán aquí 🚀",
    },
  ],
  "/herramientas": [
    {
      id: "tools-1",
      message: "Pequeñas utilidades que voy publicando. Algunas gratis, otras open source.",
    },
  ],
};

const STORAGE_KEY = "mersiel_mascot_disabled";
const SEEN_KEY = "mersiel_mascot_seen";

type MascotState = "hidden" | "peeking" | "open";

export function MersielMascot() {
  const [enabled, setEnabled] = useState(true);
  const [state, setState] = useState<MascotState>("hidden");
  const [tipIndex, setTipIndex] = useState(0);
  const [pathname, setPathname] = useState("/");
  const [hasNew, setHasNew] = useState(true);
  const [mounted, setMounted] = useState(false);
  const stateRef = useRef(state);

  // Track route changes (App Router pathname via window)
  useEffect(() => {
    setMounted(true);
    const disabled = window.localStorage.getItem(STORAGE_KEY) === "true";
    if (disabled) {
      setEnabled(false);
      return;
    }
    setPathname(window.location.pathname);

    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);

    // Patch pushState/replaceState to trigger pathname update (App Router doesn't fire popstate on Link navigation)
    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;
    window.history.pushState = function (...args) {
      origPush.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
    };
    window.history.replaceState = function (...args) {
      origReplace.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
    };
    const onLoc = () => setPathname(window.location.pathname);
    window.addEventListener("locationchange", onLoc);

    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("locationchange", onLoc);
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
    };
  }, []);

  // Initial peek after delay (only first visit per session)
  useEffect(() => {
    if (!enabled || !mounted) return;
    const seen = sessionStorage.getItem(SEEN_KEY);
    const initialDelay = seen ? 2500 : 4500;
    const t = setTimeout(() => {
      if (stateRef.current === "hidden") {
        setState("peeking");
        setHasNew(true);
      }
    }, initialDelay);
    return () => clearTimeout(t);
  }, [enabled, mounted, pathname]);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const tips = ROUTE_TIPS[pathname] ?? ROUTE_TIPS["/"];
  const currentTip = tips[tipIndex % tips.length];

  function openWidget() {
    setState("open");
    setHasNew(false);
    sessionStorage.setItem(SEEN_KEY, "true");
  }
  function dismissWidget() {
    setState("peeking");
  }
  function nextTip() {
    setTipIndex((i) => i + 1);
  }
  function disable() {
    setEnabled(false);
    setState("hidden");
    window.localStorage.setItem(STORAGE_KEY, "true");
  }

  // Reactivate trigger (for footer link or settings to call)
  useEffect(() => {
    function onReenable() {
      setEnabled(true);
      window.localStorage.setItem(STORAGE_KEY, "false");
      setState("peeking");
      setHasNew(true);
    }
    window.addEventListener("mersiel:enable-mascot", onReenable);
    return () => window.removeEventListener("mersiel:enable-mascot", onReenable);
  }, []);

  if (!mounted) return null;

  // Re-enable button (when disabled)
  if (!enabled) {
    return (
      <button
        type="button"
        className="mascot-reenable"
        onClick={() => {
          setEnabled(true);
          window.localStorage.setItem(STORAGE_KEY, "false");
          setState("peeking");
          setHasNew(true);
        }}
        aria-label="Activar mascota Mersiel"
        data-testid="mascot-reenable-btn"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    );
  }

  return (
    <div className="mascot-root" data-testid="mersiel-mascot">
      <AnimatePresence>
        {state === "open" && (
          <motion.div
            key="bubble"
            className="mascot-bubble"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mascot-bubble-head">
              <span className="mascot-bubble-name">
                Lumi <span className="mascot-bubble-dot" /> Mersiel AI
              </span>
              <button
                type="button"
                className="mascot-bubble-close"
                onClick={dismissWidget}
                aria-label="Minimizar"
                data-testid="mascot-close-btn"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTip.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="mascot-bubble-body"
              >
                <p>{currentTip.message}</p>
                {currentTip.cta && (
                  <a
                    href={currentTip.cta.href}
                    className="mascot-bubble-cta"
                    onClick={dismissWidget}
                    data-testid="mascot-cta-link"
                  >
                    {currentTip.cta.label}
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
                      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mascot-bubble-foot">
              {tips.length > 1 && (
                <button
                  type="button"
                  className="mascot-bubble-secondary"
                  onClick={nextTip}
                  data-testid="mascot-next-tip"
                >
                  Otro tip
                </button>
              )}
              <button
                type="button"
                className="mascot-bubble-disable"
                onClick={disable}
                data-testid="mascot-disable-btn"
              >
                Ocultar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(state === "peeking" || state === "open") && (
          <motion.button
            key="mascot-btn"
            type="button"
            className={`mascot-btn ${state === "open" ? "is-active" : ""}`}
            onClick={state === "open" ? dismissWidget : openWidget}
            aria-label={state === "open" ? "Cerrar mensaje" : "Abrir mensaje de Lumi"}
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
              scale: 1,
            }}
            exit={{ opacity: 0, y: 30, scale: 0.6 }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            data-testid="mascot-toggle-btn"
          >
            <span className="mascot-glow" aria-hidden />
            <span className="mascot-btn-img">
              <Image
                src="/Images/mascota-mersiel.png"
                alt="Lumi - Mascota Mersiel"
                width={120}
                height={120}
                priority={false}
              />
            </span>
            {hasNew && state === "peeking" && (
              <span className="mascot-pulse" aria-hidden />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
