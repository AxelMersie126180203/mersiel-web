"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const LOADER_DURATION_MS = 8400;
const LOADER_EXIT_MS = 800;

type SiteLoaderProps = {
  persistent?: boolean;
  className?: string;
};

export function SiteLoader({ persistent = false, className }: SiteLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timers = useRef<{ exit?: number; hide?: number }>({});

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("mersiel_intro_seen");
    if (persistent || hasSeenIntro === "true") {
      setIsVisible(false);
      return;
    }

    sessionStorage.setItem("mersiel_intro_seen", "true");

    document.body.classList.add("is-loading", "is-intro");

    timers.current.exit = window.setTimeout(() => {
      setIsExiting(true);
      document.body.classList.add("is-intro-exiting");
    }, LOADER_DURATION_MS);

    timers.current.hide = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("is-loading", "is-intro", "is-intro-exiting");
    }, LOADER_DURATION_MS + LOADER_EXIT_MS);

    return () => {
      window.clearTimeout(timers.current.exit);
      window.clearTimeout(timers.current.hide);
      document.body.classList.remove("is-loading", "is-intro", "is-intro-exiting");
    };
  }, [persistent]);

  const handleSkip = () => {
    if (isExiting) return;
    setIsExiting(true);
    document.body.classList.add("is-intro-exiting");
    
    window.clearTimeout(timers.current.exit);
    window.clearTimeout(timers.current.hide);
    
    timers.current.hide = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("is-loading", "is-intro", "is-intro-exiting");
    }, LOADER_EXIT_MS);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`mersiel-loader${persistent ? " mersiel-loader--preview" : ""}${isExiting ? " is-exiting" : ""}${
          className ? ` ${className}` : ""
        }`}
        aria-label="Sitio cargando. Haz clic para omitir."
        onClick={handleSkip}
      >
        <div className="intro-splash-wrapper">
          <Image
            className="intro-splash-logo"
            src="/Logos/mersiel-spectacle-intro.svg"
            alt="Mersiel animation"
            width={760}
            height={450}
            priority
          />
          <h1 className="intro-splash-text">Mersiel</h1>
        </div>
      </div>

      <style jsx>{`
        .mersiel-loader {
          position: fixed;
          inset: 0;
          display: grid;
          place-items: center;
          background: transparent;
          pointer-events: auto;
          cursor: pointer;
          z-index: 9999;
          opacity: 1;
        }

        .mersiel-loader--preview {
          position: absolute;
          background: transparent;
          z-index: 1;
        }
      `}</style>
    </>
  );
}