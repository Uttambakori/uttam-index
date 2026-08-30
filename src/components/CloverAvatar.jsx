import React from "react";

export default function CloverAvatar({ src, alt = "Avatar", size = 180 }) {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* SVG Clover Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="cloverClip" clipPathUnits="objectBoundingBox">
            {/* Smooth 4-petal clover shape composed of 4 overlapping circles and central fill */}
            <path
              d="M 0.5 0.15
                 C 0.62 0.02, 0.85 0.02, 0.92 0.22
                 C 0.98 0.38, 0.88 0.55, 0.85 0.5
                 C 0.88 0.45, 0.98 0.62, 0.92 0.78
                 C 0.85 0.98, 0.62 0.98, 0.5 0.85
                 C 0.38 0.98, 0.15 0.98, 0.08 0.78
                 C 0.02 0.62, 0.12 0.45, 0.15 0.5
                 C 0.12 0.55, 0.02 0.38, 0.08 0.22
                 C 0.15 0.02, 0.38 0.02, 0.5 0.15 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Outer subtle shadow wrapper */}
      <div
        className="w-full h-full p-1.5 transition-transform duration-300 hover:scale-105"
        style={{
          filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.08))",
        }}
      >
        {/* Flower / Clover Shape Image Container */}
        <div
          className="w-full h-full bg-[#E5E2D9] overflow-hidden flex items-center justify-center"
          style={{
            clipPath: "url(#cloverClip)",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>
      </div>
    </div>
  );
}
