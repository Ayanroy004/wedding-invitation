import React from 'react';

// Left/Right Vertical Traditional Bengali Wedding Gold Foil Border
export const VerticalFoilBorder: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  return (
    <div
      className={`absolute top-0 bottom-0 ${
        side === 'left' ? 'left-2 md:left-3' : 'right-2 md:right-3'
      } w-5 md:w-6 flex flex-col items-center justify-between py-6 pointer-events-none select-none overflow-hidden z-10 opacity-90`}
    >
      {/* Repeating traditional gold foil glyph pattern */}
      <div className="w-full h-full flex flex-col items-center justify-around text-[#ffd966] text-[10px] md:text-[11px] font-mono leading-none tracking-widest">
        {Array.from({ length: 18 }).map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-[#ffe082] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] scale-90">||</span>
            <span className="text-[#ffd54f] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] scale-110">
              {i % 3 === 0 ? '△' : i % 3 === 1 ? 'ৡ' : '◎'}
            </span>
            <span className="text-[#ffca28] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] scale-75">◁▷</span>
            <span className="text-[#ffe082] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] scale-90">||</span>
          </React.Fragment>
        ))}
      </div>
      {/* Outer framing gold hairpins */}
      <div
        className={`absolute inset-y-2 ${
          side === 'left' ? 'right-0 border-r' : 'left-0 border-l'
        } border-[#f5b041]/60`}
      />
      <div
        className={`absolute inset-y-2 ${
          side === 'left' ? 'left-0 border-l' : 'right-0 border-r'
        } border-[#f5b041]/60`}
      />
    </div>
  );
};

// Bottom Traditional Bengali Wedding Gold Foil Border
export const BottomFoilBorder: React.FC = () => {
  return (
    <div className="absolute bottom-2 md:bottom-3 inset-x-2 md:inset-x-3 h-6 md:h-7 flex items-center justify-center pointer-events-none select-none overflow-hidden z-10 opacity-90 border-t border-b border-[#f5b041]/70">
      <div className="w-full flex items-center justify-between px-2 text-[#ffd54f] text-[10px] md:text-[12px] font-mono tracking-widest whitespace-nowrap">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex items-center gap-1.5 md:gap-2">
            <span className="text-[#ffe082] scale-90">||</span>
            <span className="text-[#ffca28] font-bold">ৡ</span>
            <span className="text-[#ffd54f] scale-75">|△|</span>
            <span className="text-[#ffca28] font-bold">ৡ</span>
            <span className="text-[#ffe082] scale-90">||</span>
            {i % 2 === 0 && <span className="text-[#fff3e0] scale-90">◎</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Envelope Flap Scalloped Gold Trim Border
export const FlapGoldTrim: React.FC = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-6 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="w-full h-full text-[#ffd54f] drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
      >
        <path
          d="M0,0 Q200,28 400,0 L400,6 Q200,34 0,6 Z"
          fill="url(#goldGradient)"
        />
        {/* Scalloped teeth pattern along curve */}
        <path
          d="M 10 3 Q 200 30 390 3"
          fill="none"
          stroke="#ffe680"
          strokeWidth="1.5"
          strokeDasharray="4, 4"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d48b00" />
            <stop offset="25%" stopColor="#ffd54f" />
            <stop offset="50%" stopColor="#fff8b3" />
            <stop offset="75%" stopColor="#ffd54f" />
            <stop offset="100%" stopColor="#d48b00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Auspicious Green Banana / Mango Leaves embellishing the sides
export const AuspiciousLeaves: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const isLeft = side === 'left';
  return (
    <div
      className={`absolute top-10 md:top-14 ${
        isLeft ? '-left-6 md:-left-8' : '-right-6 md:-right-8'
      } w-14 md:w-16 h-28 md:h-32 pointer-events-none select-none z-0 ${
        isLeft ? 'rotate-[-12deg]' : 'rotate-[12deg] scale-x-[-1]'
      }`}
    >
      <svg viewBox="0 0 60 120" className="w-full h-full drop-shadow-[2px_4px_8px_rgba(0,0,0,0.35)]">
        {/* Fresh tropical banana/mango leaves */}
        <path
          d="M 50 115 C 30 90, 5 60, 8 20 C 15 10, 35 15, 45 45 C 52 65, 52 95, 50 115 Z"
          fill="#3ba836"
        />
        <path
          d="M 50 115 C 35 95, 18 70, 20 30 C 26 18, 42 22, 48 55 C 51 75, 51 100, 50 115 Z"
          fill="#4caf50"
        />
        {/* Leaf ribs and segments */}
        <path
          d="M 49 114 Q 28 65 14 22"
          stroke="#81c784"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 38 90 L 15 82 M 32 70 L 10 65 M 26 50 L 8 46 M 20 35 L 6 32"
          stroke="#a5d6a7"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Secondary small leaf */}
        <path
          d="M 52 110 C 40 85, 25 55, 30 25 C 38 18, 52 30, 55 60 Z"
          fill="#2e7d32"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
