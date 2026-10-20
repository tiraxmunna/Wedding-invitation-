import React from "react";
import { weddingConfig } from "@/config/wedding";

interface WeddingLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  initialOne?: string;
  initialTwo?: string;
  year?: string | number;
}

export default function WeddingLogo({
  className = "",
  size = "md",
  initialOne,
  initialTwo,
  year,
}: WeddingLogoProps) {
  const dimensions = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  }[size];

  // Derive initials from props or from weddingConfig
  const charOne =
    initialOne ||
    weddingConfig.couple.partnerOne?.charAt(0).toUpperCase() ||
    "M";
  const charTwo =
    initialTwo ||
    weddingConfig.couple.partnerTwo?.charAt(0).toUpperCase() ||
    "A";

  // Derive year from props or from event mainDateIso
  const displayYear =
    year ||
    (() => {
      try {
        const d = new Date(weddingConfig.event.mainDateIso);
        return !isNaN(d.getFullYear()) ? d.getFullYear() : "2027";
      } catch {
        return "2027";
      }
    })();

  // Generate unique SVG gradient ID to prevent clash if multiple logos are rendered
  const gradientId = `logo-grad-${size}`;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${dimensions} ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#D4AA6A" />
            <stop offset="50%" stopColor="#A88753" />
            <stop offset="100%" stopColor="#7A6035" />
          </linearGradient>
        </defs>

        {/* Outer thin decorative dashed ring */}
        <circle
          cx="60"
          cy="60"
          r="55"
          stroke={`url(#${gradientId})`}
          strokeWidth="0.8"
          strokeDasharray="2.5 2.5"
          fill="none"
        />

        {/* Solid inner ring */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          fill="none"
        />

        {/* Top botanical flourish crest */}
        <path
          d="M60 10 C57 15 52 18 47 19 C53 18 57 16 60 22 C63 16 67 18 73 19 C68 18 63 15 60 10Z"
          fill={`url(#${gradientId})`}
        />

        {/* Bottom botanical flourish crest */}
        <path
          d="M60 110 C57 105 52 102 47 101 C53 102 57 104 60 98 C63 104 67 102 73 101 C68 102 63 105 60 110Z"
          fill={`url(#${gradientId})`}
        />

        {/* Left leaf accents */}
        <ellipse cx="14" cy="60" rx="3.5" ry="2" fill={`url(#${gradientId})`} transform="rotate(-15 14 60)" />
        <ellipse cx="20" cy="45" rx="3" ry="1.8" fill={`url(#${gradientId})`} transform="rotate(-35 20 45)" />
        <ellipse cx="20" cy="75" rx="3" ry="1.8" fill={`url(#${gradientId})`} transform="rotate(35 20 75)" />

        {/* Right leaf accents */}
        <ellipse cx="106" cy="60" rx="3.5" ry="2" fill={`url(#${gradientId})`} transform="rotate(15 106 60)" />
        <ellipse cx="100" cy="45" rx="3" ry="1.8" fill={`url(#${gradientId})`} transform="rotate(35 100 45)" />
        <ellipse cx="100" cy="75" rx="3" ry="1.8" fill={`url(#${gradientId})`} transform="rotate(-35 100 75)" />

        {/* Dynamic Partner One Initial */}
        <text
          x="38"
          y="66"
          textAnchor="middle"
          fontFamily="var(--font-playfair), var(--font-cormorant), 'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="500"
          fill={`url(#${gradientId})`}
        >
          {charOne}
        </text>

        {/* Ampersand centered */}
        <text
          x="60"
          y="63"
          textAnchor="middle"
          fontFamily="var(--font-playfair), var(--font-cormorant), 'Playfair Display', Georgia, serif"
          fontSize="14"
          fontStyle="italic"
          fontWeight="400"
          fill="#A88753"
        >
          &amp;
        </text>

        {/* Dynamic Partner Two Initial */}
        <text
          x="82"
          y="66"
          textAnchor="middle"
          fontFamily="var(--font-playfair), var(--font-cormorant), 'Playfair Display', Georgia, serif"
          fontSize="24"
          fontWeight="500"
          fill={`url(#${gradientId})`}
        >
          {charTwo}
        </text>

        {/* Dynamic year label */}
        <text
          x="60"
          y="80"
          textAnchor="middle"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="2.5"
          fill="#8C7A5A"
        >
          {displayYear}
        </text>
      </svg>
    </div>
  );
}
