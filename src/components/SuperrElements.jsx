import React from "react";

/**
 * Hand-drawn curved arrow in Charcoal
 */
export function HandDrawnArrow({ className = "w-12 h-12", direction = "down-right" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      stroke="#171717"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "down-right" ? (
        <>
          <path d="M10 15 C 35 10, 65 20, 85 45" />
          <path d="M72 45 L 85 46 L 86 33" />
        </>
      ) : (
        <>
          <path d="M85 15 C 60 10, 30 20, 15 45" />
          <path d="M28 45 L 15 46 L 14 33" />
        </>
      )}
    </svg>
  );
}

/**
 * Sky Sticker Lightning Bolt (#3b82f6 with 2px dark outline)
 */
export function LightningSticker({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <path
        d="M20 3L7 19H17L15 33L29 16H18L20 3Z"
        fill="#3b82f6"
        stroke="#171717"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Bubblegum Pink Heart Sticker (#ff66cf with 2px dark outline)
 */
export function HeartSticker({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <path
        d="M18 30C18 30 5 21 5 12C5 7.5 8.5 4 13 4C15.5 4 17.5 5.5 18 6.5C18.5 5.5 20.5 4 23 4C27.5 4 31 7.5 31 12C31 21 18 30 18 30Z"
        fill="#ff66cf"
        stroke="#171717"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Little eyes */}
      <circle cx="14" cy="13" r="1.5" fill="#171717" />
      <circle cx="22" cy="13" r="1.5" fill="#171717" />
    </svg>
  );
}

/**
 * Sprout Green Star / Sparkle Sticker (#22c55e)
 */
export function SparkleSticker({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2L19 12L29 16L19 20L16 30L13 20L3 16L13 12L16 2Z"
        fill="#22c55e"
        stroke="#171717"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Orange Bear / Mascot Badge (#ff6f1e)
 */
export function BearSticker({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      {/* Ears */}
      <circle cx="11" cy="12" r="5" fill="#ff6f1e" stroke="#171717" strokeWidth="2" />
      <circle cx="29" cy="12" r="5" fill="#ff6f1e" stroke="#171717" strokeWidth="2" />
      {/* Head */}
      <circle cx="20" cy="22" r="14" fill="#ff6f1e" stroke="#171717" strokeWidth="2" />
      {/* Eyes & Nose */}
      <circle cx="16" cy="20" r="1.5" fill="#171717" />
      <circle cx="24" cy="20" r="1.5" fill="#171717" />
      <ellipse cx="20" cy="24" rx="2" ry="1.5" fill="#171717" />
    </svg>
  );
}

/**
 * Pointing Hand Logo Mark in Charcoal (~32px)
 */
export function PointingHandMark({ className = "w-7 h-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#171717"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}
