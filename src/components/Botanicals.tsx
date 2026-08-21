export function MonsteraSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        {/* Stem */}
        <path className="draw-path" d="M100 280 L100 160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Main leaf outline */}
        <path className="draw-path" d="M100 160 C80 140 40 120 35 80 C30 40 60 15 100 20 C140 15 170 40 165 80 C160 120 120 140 100 160Z" stroke="currentColor" strokeWidth="1.5" />
        {/* Leaf holes */}
        <ellipse className="draw-path" cx="75" cy="90" rx="12" ry="18" stroke="currentColor" strokeWidth="1" />
        <ellipse className="draw-path" cx="125" cy="90" rx="12" ry="18" stroke="currentColor" strokeWidth="1" />
        <ellipse className="draw-path" cx="90" cy="55" rx="8" ry="12" stroke="currentColor" strokeWidth="1" />
        <ellipse className="draw-path" cx="110" cy="55" rx="8" ry="12" stroke="currentColor" strokeWidth="1" />
        {/* Center vein */}
        <path className="draw-path" d="M100 160 L100 25" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        {/* Side veins */}
        <path className="draw-path" d="M100 130 L65 100" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M100 130 L135 100" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M100 95 L60 70" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M100 95 L140 70" stroke="currentColor" strokeWidth="0.75" />
      </g>
    </svg>
  );
}

export function FiddleLeafSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 280" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M80 280 L80 140" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M80 140 C60 130 30 100 25 65 C20 30 50 10 80 20 C110 10 140 30 135 65 C130 100 100 130 80 140Z" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M80 140 L80 25" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <path className="draw-path" d="M80 110 L45 85" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M80 110 L115 85" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M80 75 L50 55" stroke="currentColor" strokeWidth="0.75" />
        <path className="draw-path" d="M80 75 L110 55" stroke="currentColor" strokeWidth="0.75" />
      </g>
    </svg>
  );
}

export function SnakePlantSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 280" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M50 280 C48 220 42 160 40 120 C38 80 45 40 55 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M70 280 C72 200 75 140 78 90 C81 50 75 25 70 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M90 280 C92 230 96 170 95 120 C94 70 88 35 82 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Horizontal bands */}
        <path className="draw-path" d="M38 180 L98 180" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path className="draw-path" d="M40 140 L96 140" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path className="draw-path" d="M42 100 L94 100" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path className="draw-path" d="M48 60 L88 60" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        {/* Pot */}
        <path className="draw-path" d="M30 280 L35 250 L105 250 L110 280Z" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function BirdOfParadiseSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M100 280 L100 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M100 120 L100 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Flower spathe */}
        <path className="draw-path" d="M100 60 C90 50 60 30 50 20 C45 15 50 10 60 15 C70 20 90 40 100 60Z" stroke="currentColor" strokeWidth="1.5" />
        {/* Petals */}
        <path className="draw-path" d="M70 25 C60 10 40 5 30 15 C20 25 30 40 50 35" stroke="currentColor" strokeWidth="1" />
        <path className="draw-path" d="M65 30 C55 20 35 25 30 35 C25 45 40 50 55 40" stroke="currentColor" strokeWidth="1" />
        {/* Large leaf */}
        <path className="draw-path" d="M100 180 C80 170 40 160 20 140 C10 130 15 120 30 125 C50 132 80 155 100 180Z" stroke="currentColor" strokeWidth="1.2" />
        <path className="draw-path" d="M100 200 C120 185 150 170 170 150 C180 140 175 130 160 135 C140 142 115 170 100 200Z" stroke="currentColor" strokeWidth="1.2" />
        {/* Leaf veins */}
        <path className="draw-path" d="M100 180 L35 135" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
        <path className="draw-path" d="M100 200 L160 148" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
      </g>
    </svg>
  );
}

export function TrowelSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 200" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M40 200 L40 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path className="draw-path" d="M40 80 C40 60 25 40 20 25 C15 10 25 2 40 5 C55 2 65 10 60 25 C55 40 40 60 40 80Z" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M40 80 L40 8" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

export function WateringCanSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 160" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M40 60 L130 60 L120 130 L50 130Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path className="draw-path" d="M130 60 L155 30 L165 35 L140 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M165 35 L175 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path className="draw-path" d="M170 28 L178 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path className="draw-path" d="M172 32 L180 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path className="draw-path" d="M40 60 L20 40 L10 45 L30 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function ScissorsSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <circle className="draw-path" cx="50" cy="120" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle className="draw-path" cx="110" cy="120" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M50 100 L80 30" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M110 100 L80 30" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M75 25 L85 35" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function MowerSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M20 70 L40 70 L45 50 L75 50 L80 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle className="draw-path" cx="30" cy="75" r="10" stroke="currentColor" strokeWidth="2" />
        <circle className="draw-path" cx="70" cy="75" r="10" stroke="currentColor" strokeWidth="2" />
        <path className="draw-path" d="M42 58 L25 30 L15 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M10 85 L90 85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path className="draw-path" d="M85 85 L88 78 M78 85 L81 78 M90 85 L92 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function PrunerSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M35 70 L50 50 M65 70 L50 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path className="draw-path" d="M50 50 L40 25 C43 20, 48 20, 50 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M50 50 L60 25 C57 20, 52 20, 50 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle className="draw-path" cx="32" cy="78" r="8" stroke="currentColor" strokeWidth="2" />
        <circle className="draw-path" cx="68" cy="78" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function DesignSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <rect className="draw-path" x="15" y="15" width="70" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
        <path className="draw-path" d="M15 38 L85 38 M15 62 L85 62 M38 15 L38 85 M62 15 L62 85" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path className="draw-path" d="M25 65 C35 55, 45 60, 55 45 C65 30, 70 35, 75 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M60 70 L75 55 M75 55 L70 50 L55 65 L60 70 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle className="draw-path" cx="75" cy="55" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function SprinklerSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M50 85 L50 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect className="draw-path" x="40" y="50" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path className="draw-path" d="M50 50 C40 35, 20 30, 10 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path className="draw-path" d="M50 50 C45 30, 35 20, 25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path className="draw-path" d="M50 50 C50 25, 50 15, 50 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path className="draw-path" d="M50 50 C55 30, 65 20, 75 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path className="draw-path" d="M50 50 C60 35, 80 30, 90 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

export function FertilizerSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M50 80 C30 65, 25 45, 35 30 C45 15, 50 10, 50 10 C50 10, 55 15, 65 30 C75 45, 70 65, 50 80 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="draw-path" d="M50 80 L50 20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path className="draw-path" d="M22 40 C22 35, 26 35, 26 40 C26 45, 22 47, 22 40 Z" stroke="currentColor" strokeWidth="1" />
        <path className="draw-path" d="M78 40 C78 35, 74 35, 74 40 C74 45, 78 47, 78 40 Z" stroke="currentColor" strokeWidth="1" />
        <path className="draw-path" d="M50 90 C50 85, 48 85, 48 90 C48 95, 52 95, 50 90 Z" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function CleanSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M40 85 L65 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path className="draw-path" d="M60 30 L80 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="draw-path" d="M62 31 L58 20 M67 33 L64 22 M72 36 L70 25 M77 38 L76 27 M82 41 L82 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M25 75 C20 75, 18 70, 23 68 C28 66, 30 70, 25 75 Z" stroke="currentColor" strokeWidth="1" />
        <path className="draw-path" d="M35 85 C30 85, 28 80, 33 78 C38 76, 40 80, 35 85 Z" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function SodSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M20 70 C20 50, 40 45, 55 55 C70 65, 80 50, 80 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse className="draw-path" cx="20" cy="70" rx="8" ry="12" stroke="currentColor" strokeWidth="2" />
        <path className="draw-path" d="M35 55 L37 45 M45 52 L48 44 M55 55 L58 48 M68 54 L72 45 M78 40 L81 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M10 85 L90 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function PestSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g className="draw-group">
        <path className="draw-path" d="M25 20 L50 15 L75 20 C75 45, 65 75, 50 85 C35 75, 25 45, 25 20 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle className="draw-path" cx="50" cy="45" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path className="draw-path" d="M50 37 L50 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M47 33 L42 27 M53 33 L58 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path className="draw-path" d="M42 45 L35 45 M58 45 L65 45 M43 51 L36 54 M57 51 L64 54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}
