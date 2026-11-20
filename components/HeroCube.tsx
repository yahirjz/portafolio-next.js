/**
 * Cubo 3D con aro luminoso (versión en SVG).
 * Se puede reemplazar por la imagen final sin tocar la portada.
 */
const HeroCube = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 600 560" role="presentation" aria-hidden="true" className={className}>
        <defs>
            <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4a5a7a" />
                <stop offset="1" stopColor="#1a2540" />
            </linearGradient>
            <linearGradient id="cube-left" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1c2742" />
                <stop offset="1" stopColor="#070b16" />
            </linearGradient>
            <linearGradient id="cube-right" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a3550" />
                <stop offset="1" stopColor="#0c1222" />
            </linearGradient>
            <linearGradient id="cube-core" x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0" stopColor="#ffd27a" />
                <stop offset="0.35" stopColor="#fca311" />
                <stop offset="1" stopColor="#6b3500" />
            </linearGradient>
            <linearGradient id="cube-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#9fb4e0" stopOpacity="0.35" />
                <stop offset="1" stopColor="#14213d" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="cube-halo" cx="0.5" cy="0.55" r="0.5">
                <stop offset="0" stopColor="#fca311" stopOpacity="0.35" />
                <stop offset="0.6" stopColor="#14213d" stopOpacity="0.15" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="14" />
            </filter>
            {/* Mitad delantera del aro (en coordenadas ya giradas) */}
            <clipPath id="ring-front">
                <rect x="0" y="280" width="600" height="300" />
            </clipPath>
        </defs>

        {/* Resplandor de fondo */}
        <ellipse cx="300" cy="300" rx="280" ry="250" fill="url(#cube-halo)" />

        {/* Aro: mitad de atrás */}
        <g transform="rotate(-18 300 280)" className="ring-glow">
            <ellipse cx="300" cy="280" rx="262" ry="92" fill="none" stroke="#fca311" strokeWidth="10" opacity="0.45" filter="url(#glow-soft)" />
            <ellipse cx="300" cy="280" rx="262" ry="92" fill="none" stroke="#ffc35a" strokeWidth="2.5" />
        </g>

        <g className="cube-float">
            {/* Cara de arriba */}
            <polygon points="300,105 440,185 300,265 160,185" fill="url(#cube-top)" />
            {/* Cara izquierda */}
            <polygon points="160,185 300,265 300,430 160,350" fill="url(#cube-left)" />
            {/* Cara derecha: parte oscura */}
            <polygon points="300,265 440,185 440,350 300,430" fill="url(#cube-right)" />
            {/* Núcleo dorado que asoma por la cara derecha */}
            <polygon points="300,265 440,185 300,430" fill="url(#cube-core)" />
            <polygon points="300,265 440,185 300,430" fill="#fca311" opacity="0.35" filter="url(#glow-soft)" />
            {/* Panel de vidrio desplazado */}
            <polygon points="345,205 470,135 470,300 345,370" fill="url(#cube-glass)" stroke="#9fb4e0" strokeOpacity="0.4" strokeWidth="1" />

            {/* Aristas */}
            <polyline points="160,185 300,265 440,185" fill="none" stroke="#7f93bb" strokeOpacity="0.5" strokeWidth="1.2" />
            <line x1="300" y1="265" x2="300" y2="430" stroke="#ffc35a" strokeWidth="2" filter="url(#glow)" />
            <line x1="300" y1="430" x2="440" y2="185" stroke="#ffc35a" strokeWidth="1.5" opacity="0.9" filter="url(#glow)" />
            <polygon points="300,105 440,185 440,350 300,430 160,350 160,185" fill="none" stroke="#7f93bb" strokeOpacity="0.35" strokeWidth="1" />
        </g>

        {/* Aro: mitad de adelante (pasa por encima del cubo) */}
        <g transform="rotate(-18 300 280)" className="ring-glow">
            <g clipPath="url(#ring-front)">
                <ellipse cx="300" cy="280" rx="262" ry="92" fill="none" stroke="#fca311" strokeWidth="10" opacity="0.5" filter="url(#glow-soft)" />
                <ellipse cx="300" cy="280" rx="262" ry="92" fill="none" stroke="#ffd27a" strokeWidth="3" filter="url(#glow)" />
            </g>
        </g>

        {/* Marcas técnicas en las esquinas */}
        <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.2" fill="none">
            <path d="M40 40 h22 M40 40 v22" />
            <path d="M560 40 h-22 M560 40 v22" />
            <path d="M40 520 h22 M40 520 v-22" />
            <path d="M560 520 h-22 M560 520 v-22" />
        </g>
    </svg>
);

export default HeroCube;
