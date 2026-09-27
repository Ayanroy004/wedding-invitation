import React, { useState } from "react";
import flower from "../assets/images/frangipani_bouquet_1790262826449.jpg";
// Plumeria (কাঠগোলাপ) Floral Bouquet with Tied Twine Bow
export const PlumeriaFloral: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {/* High-fidelity Floral Asset with graceful blending */}
      {!imageError ? (
        <div className="relative w-40 md:w-48 h-40 md:h-48 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
          <img
            src={flower}
            alt="কাঠগোলাপ ও জুঁই ফুলের তোড়া (Plumeria Wedding Bouquet)"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] mix-blend-multiply"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 50%, black 70%, transparent 98%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, black 70%, transparent 98%)",
            }}
          />
        </div>
      ) : (
        /* High-fidelity vector SVG fallback */
        <svg
          viewBox="0 0 160 160"
          className="w-36 h-36 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        >
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#fffde7" />
              <stop offset="100%" stopColor="#fdd835" />
            </linearGradient>
            <radialGradient id="centerYellow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffb300" />
              <stop offset="60%" stopColor="#fdd835" />
              <stop offset="100%" stopColor="#ffffff" />
            </radialGradient>
          </defs>

          {/* Green leaves behind */}
          <path d="M 80 80 Q 120 40 140 70 Q 110 90 80 80 Z" fill="#2e7d32" />
          <path d="M 80 80 Q 130 90 135 120 Q 95 125 80 80 Z" fill="#388e3c" />
          <path d="M 80 80 Q 60 30 90 20 Q 100 50 80 80 Z" fill="#4caf50" />
          <path d="M 80 80 Q 30 60 25 90 Q 60 95 80 80 Z" fill="#2e7d32" />

          {/* Plumeria Flower 1 (Center) */}
          <g transform="translate(80, 75)">
            {[0, 72, 144, 216, 288].map((rot, idx) => (
              <path
                key={idx}
                d="M 0 0 C 14 -10, 26 -32, 12 -42 C -2 -50, -18 -32, 0 0 Z"
                fill="url(#petalGrad)"
                stroke="#fff9c4"
                strokeWidth="0.8"
                transform={`rotate(${rot})`}
              />
            ))}
            <circle cx="0" cy="0" r="10" fill="url(#centerYellow)" />
          </g>

          {/* Plumeria Flower 2 (Top Left) */}
          <g transform="translate(50, 48) scale(0.75) rotate(25)">
            {[0, 72, 144, 216, 288].map((rot, idx) => (
              <path
                key={idx}
                d="M 0 0 C 14 -10, 26 -32, 12 -42 C -2 -50, -18 -32, 0 0 Z"
                fill="url(#petalGrad)"
                stroke="#fff9c4"
                strokeWidth="0.8"
                transform={`rotate(${rot})`}
              />
            ))}
            <circle cx="0" cy="0" r="10" fill="url(#centerYellow)" />
          </g>

          {/* Plumeria Flower 3 (Bottom Right) */}
          <g transform="translate(110, 95) scale(0.68) rotate(-15)">
            {[0, 72, 144, 216, 288].map((rot, idx) => (
              <path
                key={idx}
                d="M 0 0 C 14 -10, 26 -32, 12 -42 C -2 -50, -18 -32, 0 0 Z"
                fill="url(#petalGrad)"
                stroke="#fff9c4"
                strokeWidth="0.8"
                transform={`rotate(${rot})`}
              />
            ))}
            <circle cx="0" cy="0" r="10" fill="url(#centerYellow)" />
          </g>
        </svg>
      )}

      {/* Rustic golden tied twine loop extending toward the wax seal */}
      <div className="absolute -bottom-4 -left-6 w-20 h-16 pointer-events-none">
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        >
          {/* Twin cord loops */}
          <path
            d="M 60 10 C 85 20, 90 50, 65 60 C 40 70, 20 45, 45 25 C 65 10, 80 40, 85 65"
            fill="none"
            stroke="#e0af42"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 50 15 C 30 25, 10 50, 25 70 C 40 85, 70 70, 75 40"
            fill="none"
            stroke="#fff2b2"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Tied knot */}
          <ellipse
            cx="55"
            cy="28"
            rx="8"
            ry="6"
            fill="#c68a18"
            stroke="#ffe082"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
