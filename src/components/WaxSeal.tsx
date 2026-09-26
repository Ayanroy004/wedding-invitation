import React from 'react';
import { Play } from 'lucide-react';

interface WaxSealProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ onOpen, isOpen }) => {
  return (
    <button
      onClick={onOpen}
      type="button"
      aria-label="খামটি খুলুন (Tap to open envelope)"
      className={`group relative w-24 h-24 md:w-28 md:h-28 rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 transition-all duration-500 transform ${
        isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'hover:scale-105 active:scale-95 animate-seal'
      }`}
    >
      {/* Outer molten wax scalloped ripples */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ffd54f] via-[#c68a18] to-[#804e03] opacity-90 blur-[1px] shadow-lg" />

      {/* Main Metallic Gold Wax Medal */}
      <div className="relative w-full h-full rounded-full wax-seal-gradient flex flex-col items-center justify-center p-2 border-2 border-[#fff3b0]/80">
        {/* Outer braided rope ring */}
        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#8d5402]/60 pointer-events-none" />
        
        {/* Inner engraved ring */}
        <div className="absolute inset-3 rounded-full border border-[#ffe082]/70 shadow-inner pointer-events-none" />

        {/* Embossed Text in Bengali */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center select-none pt-0.5">
          <span className="font-bengali-sans font-bold text-[13px] md:text-[14px] leading-tight text-[#4a2800] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] tracking-wide">
            ট্যাপ করে
          </span>
          <span className="font-bengali-serif font-black text-[16px] md:text-[18px] leading-tight text-[#3b1e00] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] tracking-wider">
            খুলুন
          </span>

          {/* Central Play Indicator Icon (matches the video preview affordance in the screenshot) */}
          <div className="mt-0.5 w-6 h-6 rounded-full bg-[#3b1e00]/75 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-[#3b1e00]/90 transition-transform">
            <Play className="w-3 h-3 text-[#ffecb3] fill-[#ffecb3] ml-0.5" />
          </div>
        </div>

        {/* Radial metallic glint reflection */}
        <div className="absolute top-1 left-2 w-7 h-5 bg-white/40 rounded-full blur-[2px] transform -rotate-30 pointer-events-none" />
      </div>
    </button>
  );
};
