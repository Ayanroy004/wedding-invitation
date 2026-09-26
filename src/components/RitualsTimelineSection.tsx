import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WeddingEvent } from '../types/invitation';

interface RitualsTimelineProps {
  events: WeddingEvent[];
  onOpenEvent: (eventId: string) => void;
}

export const RitualsTimelineSection: React.FC<RitualsTimelineProps> = ({
  events,
  onOpenEvent,
}) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6 space-y-4">
      {/* 3 Cute Caricature Ceremony Cards (as seen in video at 00:28 - 00:30) */}
      <div className="space-y-4">
        {/* Card 1: আইবুড়ো ভাত অনুষ্ঠান (Aiburobhat) */}
        <div
          onClick={() => onOpenEvent('aiburobhat')}
          className="group relative bg-[#fff9ed] rounded-2xl p-4 shadow-lg border-2 border-[#d97706]/50 cursor-pointer hover:border-[#b45309] hover:scale-[1.02] transition-all overflow-hidden"
        >
          {/* Top Banner Tag */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-xs sm:text-sm border border-[#b45309]/40 shadow-xs mb-3">
            আইবুড়ো ভাত অনুষ্ঠান
          </div>

          {/* Caricature Couple Feast Illustration */}
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-b from-[#ffedd5] to-[#fed7aa] border border-[#ea580c]/30 flex items-center justify-center p-2">
            <svg viewBox="0 0 280 140" className="w-full h-full drop-shadow-md">
              <circle cx="100" cy="45" r="18" fill="#fed7aa" />
              <path d="M 85 40 Q 100 20 115 40 Q 100 30 85 40 Z" fill="#1e293b" />
              <rect x="80" y="65" width="40" height="50" rx="6" fill="#991b1b" stroke="#fde047" strokeWidth="1" />
              <path d="M 94 52 Q 100 58 106 52" stroke="#1e293b" strokeWidth="1.5" fill="none" />
              <circle cx="180" cy="45" r="18" fill="#fed7aa" />
              <path d="M 165 42 Q 180 22 195 42" fill="#1e293b" />
              <path d="M 174 25 L 180 14 L 186 25 Z" fill="#ffffff" stroke="#eab308" strokeWidth="1" />
              <circle cx="180" cy="42" r="2.5" fill="#dc2626" />
              <rect x="160" y="65" width="40" height="50" rx="6" fill="#b91c1c" stroke="#fde047" strokeWidth="1.5" />

              {/* Big Traditional Brass Bhojon Thali */}
              <ellipse cx="140" cy="115" rx="55" ry="18" fill="#facc15" stroke="#b45309" strokeWidth="2" />
              <ellipse cx="140" cy="112" rx="18" ry="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
              <circle cx="100" cy="112" r="6" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
              <circle cx="115" cy="122" r="5" fill="#eab308" stroke="#a16207" strokeWidth="1" />
              <circle cx="165" cy="122" r="6" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
              <circle cx="180" cy="112" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
              <circle cx="140" cy="122" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            </svg>
          </div>
          <p className="text-[11px] text-[#854d0e] mt-2 font-bengali-sans font-medium">
            ২১শে নভেম্বর, ২০২৬ • ক্লিক করে বিস্তারিত দেখুন ☛
          </p>
        </div>

        {/* Card 2: গায়ে হলুদ (Gaye Holud) */}
        <div
          onClick={() => onOpenEvent('gaye-holud')}
          className="group relative bg-[#fff9ed] rounded-2xl p-4 shadow-lg border-2 border-[#d97706]/50 cursor-pointer hover:border-[#b45309] hover:scale-[1.02] transition-all overflow-hidden"
        >
          {/* Top Banner Tag */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-xs sm:text-sm border border-[#b45309]/40 shadow-xs mb-3">
            গায়ে হলুদ
          </div>

          {/* Caricature Bride Smiling with Turmeric */}
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#eab308] border border-[#ca8a04]/40 flex items-center justify-center p-2">
            <svg viewBox="0 0 280 140" className="w-full h-full drop-shadow-md">
              <path d="M 50 140 Q 140 10 230 140" stroke="#b45309" strokeWidth="2.5" fill="none" strokeDasharray="6,4" />
              <rect x="80" y="120" width="120" height="15" rx="3" fill="#9a3412" stroke="#facc15" strokeWidth="1.5" />
              <circle cx="140" cy="50" r="22" fill="#fed7aa" />
              <circle cx="140" cy="40" r="24" fill="#1e293b" />
              <circle cx="140" cy="52" r="20" fill="#fed7aa" />
              <ellipse cx="128" cy="54" rx="5" ry="3" fill="#eab308" />
              <ellipse cx="152" cy="54" rx="5" ry="3" fill="#eab308" />
              <path d="M 134 58 Q 140 66 146 58" stroke="#991b1b" strokeWidth="2" fill="none" />
              <circle cx="140" cy="45" r="3" fill="#dc2626" />
              <path d="M 115 75 L 140 70 L 165 75 L 175 120 L 105 120 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="110" y="112" width="60" height="8" fill="#dc2626" />
              <circle cx="140" cy="74" r="5" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="118" cy="54" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="162" cy="54" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
              <ellipse cx="140" cy="116" rx="20" ry="7" fill="#facc15" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx="140" cy="115" rx="14" ry="4" fill="#eab308" />
            </svg>
          </div>
          <p className="text-[11px] text-[#854d0e] mt-2 font-bengali-sans font-medium">
            ২২শে নভেম্বর, ২০২৬ • ক্লিক করে বিস্তারিত দেখুন ☛
          </p>
        </div>

        {/* Card 3: শুভ পরিণয় (Wedding Ceremony) */}
        <div
          onClick={() => onOpenEvent('bibaho')}
          className="group relative bg-[#fff9ed] rounded-2xl p-4 shadow-lg border-2 border-[#d97706]/50 cursor-pointer hover:border-[#b45309] hover:scale-[1.02] transition-all overflow-hidden"
        >
          {/* Top Banner Tag */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-xs sm:text-sm border border-[#b45309]/40 shadow-xs mb-3">
            ॥ শুভ পরিণয় ॥
          </div>

          {/* Caricature Groom Putting Sindoor on Bride (সিন্দুরদান) */}
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-b from-[#fed7aa] via-[#fecdd3] to-[#fca5a5] border border-[#ef4444]/40 flex items-center justify-center p-2">
            <svg viewBox="0 0 280 140" className="w-full h-full drop-shadow-md">
              <path d="M 20 140 C 30 70 10 30 25 10 C 35 30 35 80 30 140 Z" fill="#22c55e" />
              <path d="M 260 140 C 250 70 270 30 255 10 C 245 30 245 80 250 140 Z" fill="#22c55e" />
              <circle cx="110" cy="55" r="18" fill="#fed7aa" />
              <path d="M 110 15 L 98 42 L 122 42 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="110" cy="13" r="2.5" fill="#dc2626" />
              <rect x="90" y="75" width="40" height="50" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
              <path d="M 125 78 Q 150 50 162 48" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" fill="none" />
              <circle cx="163" cy="47" r="3" fill="#dc2626" />
              <circle cx="175" cy="55" r="18" fill="#fed7aa" />
              <path d="M 175 25 C 168 35 158 40 155 45 L 195 45 C 192 40 182 35 175 25 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="175" cy="22" r="2" fill="#facc15" />
              <line x1="165" y1="46" x2="175" y2="46" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="155" y="75" width="40" height="50" rx="5" fill="#b91c1c" stroke="#fde047" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-[11px] text-[#854d0e] mt-2 font-bengali-sans font-medium">
            ২৩শে নভেম্বর, ২০২৬ • ক্লিক করে বিস্তারিত দেখুন ☛
          </p>
        </div>
      </div>

      {/* Ornate Callout Trigger (exact match to video at 00:31) */}
      <div className="bg-gradient-to-b from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] rounded-2xl p-5 shadow-xl border-2 border-[#fde047]/60 text-white">
        <h4 className="font-bengali-serif font-black text-xl text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-snug">
          ॥ স্মারক লিপি ॥
        </h4>
        <h4 className="font-bengali-serif font-black text-lg sm:text-xl text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-snug mb-3">
          আমাদের সমস্ত অনুষ্ঠান সূচী সম্পর্কে জানতে
        </h4>

        {/* Ornate "ক্লিক করুন" Button */}
        <button
          onClick={() => onOpenEvent('aiburobhat')}
          type="button"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fffbeb] via-[#fef08a] to-[#fffbeb] text-[#78350f] font-bengali-sans font-black text-sm shadow-lg hover:scale-105 active:scale-95 transition-all border border-[#b45309] cursor-pointer"
        >
          <span>ক্লিক করুন</span>
          <ChevronRight className="w-4 h-4 text-[#78350f] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
