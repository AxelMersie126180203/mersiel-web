export function ProblemSection() {
  return (
    <section className="problem-section" id="problema">
      <div className="problem-inner fade-up fade-delay-2">
        <div className="problem-bg-visual" aria-hidden>
          <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Window chrome */}
            <rect x="0" y="0" width="480" height="300" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <rect x="0" y="0" width="480" height="32" rx="12" fill="rgba(255,255,255,0.05)"/>
            <rect x="0" y="20" width="480" height="12" fill="rgba(255,255,255,0.05)"/>
            <circle cx="16" cy="16" r="5" fill="rgba(255,100,100,0.5)"/>
            <circle cx="30" cy="16" r="5" fill="rgba(255,200,50,0.5)"/>
            <circle cx="44" cy="16" r="5" fill="rgba(80,200,100,0.5)"/>
            {/* Tab */}
            <rect x="60" y="6" width="80" height="20" rx="4" fill="rgba(255,255,255,0.08)"/>
            <rect x="68" y="13" width="48" height="6" rx="2" fill="rgba(255,255,255,0.25)"/>
            {/* Sidebar */}
            <rect x="0" y="32" width="52" height="268" rx="0" fill="rgba(255,255,255,0.02)"/>
            <rect x="12" y="48" width="28" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
            <rect x="12" y="62" width="22" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="12" y="76" width="26" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="12" y="90" width="20" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="12" y="114" width="28" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
            <rect x="12" y="128" width="24" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="12" y="142" width="20" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
            {/* Code area - line numbers */}
            <rect x="52" y="32" width="1" height="268" fill="rgba(255,255,255,0.06)"/>
            <rect x="60" y="48" width="10" height="5" rx="1" fill="rgba(255,255,255,0.15)"/>
            <rect x="60" y="60" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="72" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="84" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="96" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="108" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="120" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="132" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="144" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="156" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="60" y="168" width="10" height="5" rx="1" fill="rgba(255,255,255,0.1)"/>
            {/* Code lines - colored tokens */}
            <rect x="78" y="48" width="32" height="5" rx="1.5" fill="rgba(216,27,96,0.6)"/>
            <rect x="116" y="48" width="18" height="5" rx="1.5" fill="rgba(255,255,255,0.3)"/>
            <rect x="140" y="48" width="44" height="5" rx="1.5" fill="rgba(130,170,255,0.5)"/>
            <rect x="190" y="48" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.3)"/>
            <rect x="78" y="60" width="24" height="5" rx="1.5" fill="rgba(255,255,255,0.12)"/>
            <rect x="78" y="72" width="16" height="5" rx="1.5" fill="rgba(106,27,154,0.7)"/>
            <rect x="100" y="72" width="52" height="5" rx="1.5" fill="rgba(255,255,255,0.25)"/>
            <rect x="158" y="72" width="28" height="5" rx="1.5" fill="rgba(80,220,140,0.55)"/>
            <rect x="78" y="84" width="36" height="5" rx="1.5" fill="rgba(255,255,255,0.2)"/>
            <rect x="120" y="84" width="22" height="5" rx="1.5" fill="rgba(216,27,96,0.5)"/>
            <rect x="148" y="84" width="40" height="5" rx="1.5" fill="rgba(255,255,255,0.2)"/>
            <rect x="86" y="96" width="28" height="5" rx="1.5" fill="rgba(255,200,80,0.5)"/>
            <rect x="120" y="96" width="16" height="5" rx="1.5" fill="rgba(255,255,255,0.25)"/>
            <rect x="142" y="96" width="60" height="5" rx="1.5" fill="rgba(130,170,255,0.45)"/>
            <rect x="86" y="108" width="20" height="5" rx="1.5" fill="rgba(255,255,255,0.15)"/>
            <rect x="78" y="120" width="32" height="5" rx="1.5" fill="rgba(106,27,154,0.6)"/>
            <rect x="116" y="120" width="44" height="5" rx="1.5" fill="rgba(255,255,255,0.25)"/>
            <rect x="78" y="132" width="18" height="5" rx="1.5" fill="rgba(80,220,140,0.5)"/>
            <rect x="102" y="132" width="36" height="5" rx="1.5" fill="rgba(255,255,255,0.2)"/>
            <rect x="144" y="132" width="24" height="5" rx="1.5" fill="rgba(216,27,96,0.5)"/>
            <rect x="86" y="144" width="56" height="5" rx="1.5" fill="rgba(130,170,255,0.45)"/>
            <rect x="148" y="144" width="20" height="5" rx="1.5" fill="rgba(255,255,255,0.2)"/>
            <rect x="86" y="156" width="32" height="5" rx="1.5" fill="rgba(255,200,80,0.4)"/>
            <rect x="78" y="168" width="16" height="5" rx="1.5" fill="rgba(255,255,255,0.12)"/>
            {/* Active line highlight */}
            <rect x="52" y="93" width="428" height="14" fill="rgba(255,255,255,0.03)" rx="0"/>
            {/* Cursor */}
            <rect x="207" y="95" width="2" height="10" rx="1" fill="rgba(255,255,255,0.7)"/>
          </svg>
        </div>
        <p className="eyebrow">El punto de partida</p>
        <div className="problem-content">
          <p className="problem-text">
            Muchos negocios pierden tiempo en procesos manuales, usan herramientas
            que no se conectan entre sí o dependen de soluciones que no están
            hechas para lo que realmente necesitan.
          </p>
          <p className="problem-highlight">
            Ahí es donde empezamos a trabajar contigo.
          </p>
        </div>
      </div>
    </section>
  );
}
