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
        <path className="draw-path" d="M50 100 L80 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M110 100 L80 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path className="draw-path" d="M75 25 L85 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
