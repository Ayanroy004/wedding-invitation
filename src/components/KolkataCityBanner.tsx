import React from 'react';

interface KolkataCityBannerProps {
  onShubhoPorinoyClick?: () => void;
}

export const KolkataCityBanner: React.FC<KolkataCityBannerProps> = ({ onShubhoPorinoyClick }) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto bg-gradient-to-b from-[#bfe8f9] via-[#d6effa] to-[#79ba63] rounded-2xl shadow-xl overflow-hidden border-2 border-[#ffecb3]/60 mb-4">
      {/* Top Banner Bengali Text */}
      <div className="pt-4 pb-2 px-3 text-center z-20 relative">
        <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#800a0f] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] tracking-wide leading-tight">
          আমাদের নতুন
        </h3>
        <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#800a0f] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] tracking-wide leading-tight">
          পথ চলা শুরু হতে চলেছে
        </h3>
      </div>

      {/* Auspicious Mangal Ghat, Hanging Date Tag, and Kula */}
      <div className="relative w-full h-44 sm:h-48 z-20 flex items-center justify-between px-3">
        {/* Left: Decorated Mangal Ghat (মঙ্গল ঘট) */}
        <div className="flex flex-col items-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] transform -rotate-3 hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 130" className="w-24 sm:w-28 h-auto">
            <path d="M 15 70 Q 50 110 85 70" stroke="#c62828" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 20 72 Q 50 106 80 72" stroke="#fff9c4" strokeWidth="2" fill="none" strokeDasharray="3,3" />

            <defs>
              <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="40%" stopColor="#f5b041" />
                <stop offset="85%" stopColor="#b7791f" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="coconutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8d5b4c" />
                <stop offset="100%" stopColor="#5c3826" />
              </linearGradient>
            </defs>

            <ellipse cx="50" cy="118" rx="28" ry="8" fill="#8d5402" />
            <path
              d="M 28 65 C 10 75 12 110 32 116 L 68 116 C 88 110 90 75 72 65 Z"
              fill="url(#brassGrad)"
              stroke="#5c3826"
              strokeWidth="1.5"
            />
            <path d="M 32 66 L 36 50 L 64 50 L 68 66 Z" fill="url(#brassGrad)" stroke="#5c3826" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="16" ry="4" fill="#ffd54f" stroke="#8d5402" />

            <path
              d="M 50 80 L 50 98 M 41 89 L 59 89 M 41 80 L 41 89 M 59 89 L 59 98 M 50 80 L 59 80 M 41 98 L 50 98"
              stroke="#c62828"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path d="M 50 48 C 30 35 25 15 32 5 C 38 18 45 35 50 48 Z" fill="#2e7d32" stroke="#1b5e20" />
            <path d="M 50 48 C 70 35 75 15 68 5 C 62 18 55 35 50 48 Z" fill="#388e3c" stroke="#1b5e20" />
            <path d="M 50 48 C 45 25 46 10 50 2 C 54 10 55 25 50 48 Z" fill="#4caf50" stroke="#1b5e20" />
            <path d="M 50 48 C 20 45 10 30 18 20 C 26 30 38 42 50 48 Z" fill="#43a047" stroke="#1b5e20" />
            <path d="M 50 48 C 80 45 90 30 82 20 C 74 30 62 42 50 48 Z" fill="#2e7d32" stroke="#1b5e20" />

            <ellipse cx="50" cy="28" rx="14" ry="18" fill="url(#coconutGrad)" stroke="#3e2723" strokeWidth="1" />
            <path d="M 44 14 Q 50 2 56 14" stroke="#ffcc80" strokeWidth="2" fill="none" />
            <ellipse cx="50" cy="22" rx="4" ry="3" fill="#ffb74d" opacity="0.6" />
          </svg>
        </div>

        {/* Center: Hanging Rustic Luggage Tag Date & Clickable Shubho Parinay Badge */}
        <div className="flex flex-col items-center z-30 drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]">
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#ffd54f] to-[#b7791f] shadow-sm" />

          {/* Hanging Luggage Tag */}
          <div className="relative bg-[#a64b2a] text-[#fff8e7] px-3.5 py-3 rounded-xl border border-[#ffd54f]/80 shadow-md text-center transform rotate-1">
            <div className="w-3 h-3 rounded-full bg-[#fde047] border-2 border-[#5c2a16] mx-auto -mt-1.5 mb-1 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e160a]" />
            </div>

            <p className="font-bengali-serif font-black text-sm sm:text-base text-[#ffeb3b] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight whitespace-nowrap">
              ২৩শে
            </p>
            <p className="font-bengali-serif font-bold text-xs sm:text-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] leading-tight whitespace-nowrap">
              নভেম্বর
            </p>
            <p className="font-bengali-serif font-black text-xs sm:text-sm text-[#ffeb3b] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight">
              ২০২৬
            </p>
          </div>

          {/* Scalloped Red Shubho Parinay Seal Badge (Clickable) */}
          <button
            onClick={onShubhoPorinoyClick}
            type="button"
            className="mt-2 bg-[#b71c1c] hover:bg-[#881313] text-[#ffe082] hover:text-white px-3.5 py-1 rounded-full border-2 border-[#ffd54f] shadow-lg flex items-center gap-1 transition-all hover:scale-105 active:scale-95 cursor-pointer animate-pulse hover:animate-none"
            title="শুভ পরিণয় প্রবেশ করুন"
          >
            <span className="font-bengali-serif font-black text-xs whitespace-nowrap">
              ॥ শুভ পরিণয় ॥
            </span>
          </button>
        </div>

        {/* Right: Decorated Bengali Wedding Kula (কুলো) */}
        <div className="flex flex-col items-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] transform rotate-3 hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 120" className="w-24 sm:w-28 h-auto">
            <defs>
              <linearGradient id="kulaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe082" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <path
              d="M 15 110 C 10 60 18 20 50 15 C 82 20 90 60 85 110 C 65 115 35 115 15 110 Z"
              fill="url(#kulaGrad)"
              stroke="#78350f"
              strokeWidth="2.5"
            />
            <path
              d="M 16 108 C 12 62 20 23 50 18 C 80 23 88 62 84 108"
              fill="none"
              stroke="#991b1b"
              strokeWidth="3.5"
            />
            <path
              d="M 16 108 C 12 62 20 23 50 18 C 80 23 88 62 84 108"
              fill="none"
              stroke="#fff9c4"
              strokeWidth="1.5"
              strokeDasharray="4,3"
            />

            <ellipse cx="50" cy="55" rx="22" ry="26" fill="#fffdfa" stroke="#d97706" strokeWidth="1.5" />
            <path d="M 36 50 Q 42 43 48 50 Q 42 55 36 50 Z" fill="#991b1b" />
            <circle cx="42" cy="49" r="2.5" fill="#fff" />
            <path d="M 52 50 Q 58 43 64 50 Q 58 55 52 50 Z" fill="#991b1b" />
            <circle cx="58" cy="49" r="2.5" fill="#fff" />
            <circle cx="50" cy="40" r="3.5" fill="#b91c1c" />
            <path d="M 38 72 Q 50 62 62 72 Q 50 82 38 72 Z" fill="#dc2626" />
            <circle cx="50" cy="72" r="3" fill="#fde047" />

            <path d="M 50 15 L 50 2 M 46 12 L 40 4 M 54 12 L 60 4" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Kolkata Cityscape Silhouette & Yellow Taxi Driving along River */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden z-10 -mt-2">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#bde4f4]/60 to-[#5da33b]" />

        <div className="absolute bottom-11 inset-x-0 h-24 flex items-end justify-center pointer-events-none opacity-85">
          <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
            <g fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8">
              <path d="M 180 85 L 180 60 Q 200 40 220 60 L 220 85 Z" fill="#ffffff" />
              <ellipse cx="200" cy="45" rx="14" ry="16" fill="#f1f5f9" />
              <line x1="200" y1="28" x2="200" y2="18" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="200" cy="16" r="3" fill="#cbd5e1" />
              <path d="M 194 17 L 206 17" stroke="#94a3b8" strokeWidth="1" />

              <rect x="140" y="70" width="120" height="25" fill="#f8fafc" />
              <path d="M 145 70 Q 155 52 165 70 Z" fill="#ffffff" />
              <path d="M 235 70 Q 245 52 255 70 Z" fill="#ffffff" />
              <rect x="125" y="65" width="18" height="30" fill="#f1f5f9" />
              <rect x="257" y="65" width="18" height="30" fill="#f1f5f9" />
            </g>

            <g stroke="#64748b" strokeWidth="1.2" opacity="0.65" fill="none">
              <path d="M 20 95 L 45 40 L 70 95" />
              <path d="M 45 40 L 45 95" />
              <path d="M 25 75 L 65 75" />
              <path d="M 10 95 L 110 95" strokeWidth="2.5" />
              <line x1="45" y1="40" x2="110" y2="95" />
            </g>

            <g stroke="#334155" strokeWidth="1.5" fill="#fef08a">
              <line x1="105" y1="95" x2="105" y2="65" />
              <circle cx="105" cy="64" r="3.5" />
              <line x1="295" y1="95" x2="295" y2="65" />
              <circle cx="295" cy="64" r="3.5" />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-8 inset-x-0 h-4 bg-[#4b5563] border-t-2 border-[#166534] shadow-sm flex items-center justify-around">
          <div className="w-8 h-0.5 bg-yellow-300 opacity-75" />
          <div className="w-8 h-0.5 bg-yellow-300 opacity-75" />
          <div className="w-8 h-0.5 bg-yellow-300 opacity-75" />
          <div className="w-8 h-0.5 bg-yellow-300 opacity-75" />
        </div>

        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 z-20 hover:translate-x-2 transition-transform">
          <svg viewBox="0 0 120 50" className="w-24 sm:w-28 h-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
            <path
              d="M 15 32 C 18 20 26 16 38 16 L 78 16 C 88 16 98 22 108 30 L 112 36 C 112 40 108 42 104 42 L 15 42 C 12 42 10 38 15 32 Z"
              fill="#fbbf24"
              stroke="#b45309"
              strokeWidth="1.5"
            />
            <path d="M 38 18 L 48 28 L 30 28 Z" fill="#bae6fd" opacity="0.9" />
            <rect x="52" y="19" width="16" height="9" rx="1" fill="#bae6fd" opacity="0.9" />
            <path d="M 72 19 L 85 19 L 88 28 L 72 28 Z" fill="#bae6fd" opacity="0.9" />

            <rect x="18" y="32" width="90" height="4" fill="#0284c7" />
            <text x="56" y="35" fontSize="3.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">
              WB TAXI
            </text>

            <rect x="50" y="13" width="16" height="3" rx="1" fill="#dc2626" stroke="#991b1b" strokeWidth="0.5" />
            <circle cx="58" cy="14.5" r="1" fill="#4ade80" />

            <circle cx="16" cy="34" r="2.5" fill="#e2e8f0" stroke="#64748b" />
            <circle cx="109" cy="34" r="2.5" fill="#ef4444" stroke="#991b1b" />

            <circle cx="32" cy="42" r="7" fill="#1e293b" />
            <circle cx="32" cy="42" r="3.5" fill="#94a3b8" />
            <circle cx="90" cy="42" r="7" fill="#1e293b" />
            <circle cx="90" cy="42" r="3.5" fill="#94a3b8" />
          </svg>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] flex items-center justify-around px-2">
          <div className="w-12 h-0.5 bg-white/40 rounded-full" />
          <div className="flex items-center gap-1 drop-shadow-sm">
            <span className="text-sm">🪷</span>
            <span className="text-xs text-cyan-100 font-mono opacity-80">~ ~</span>
          </div>
          <div className="w-16 h-0.5 bg-white/30 rounded-full" />
          <span className="text-xs">🪷</span>
          <div className="w-10 h-0.5 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
