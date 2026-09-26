import React from 'react';
import { ArrowLeft, Sparkles, ChevronRight, Heart } from 'lucide-react';
import { KolkataCityBanner } from './KolkataCityBanner';

interface DateWelcomePageProps {
  onEnterWedding: () => void;
  onBackToEnvelope: () => void;
  groomNameBn: string;
  brideNameBn: string;
  weddingDateBn: string;
}

export const DateWelcomePage: React.FC<DateWelcomePageProps> = ({
  onEnterWedding,
  onBackToEnvelope,
  groomNameBn,
  brideNameBn,
  weddingDateBn,
}) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto min-h-[92vh] flex flex-col justify-between items-center text-center animate-in fade-in zoom-in-95 duration-400">
      {/* Top Bar with Back to Envelope */}
      <div className="w-full flex items-center justify-between px-2 pt-1 pb-3">
        <button
          onClick={onBackToEnvelope}
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4e7cf]/95 hover:bg-[#fff9ed] text-[#6d431c] border border-[#d4af37] shadow-sm text-xs font-bengali-sans font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#800a0f]" />
          <span>খামে ফিরুন</span>
        </button>

        <button
          onClick={onEnterWedding}
          type="button"
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#800a0f] hover:bg-[#68080c] text-[#fef08a] border border-[#fef08a]/60 shadow-sm text-xs font-bengali-sans font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>শুভ পরিণয়</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Feature: The Kolkata City & Auspicious Date Banner (as seen in video at 00:09 - 00:11) */}
      <div className="w-full space-y-4 my-auto">
        <KolkataCityBanner onShubhoPorinoyClick={onEnterWedding} />

        {/* Big Interactive "শুভ পরিণয়" Trigger Button (Exact match to prompt and video) */}
        <div className="bg-[#fff9ed] rounded-2xl p-4 shadow-xl border-2 border-[#d97706]/60 text-center space-y-3">
          <p className="font-bengali-serif text-xs sm:text-sm text-[#78350f] font-semibold">
            আনন্দময় এই শুভলগ্নে আপনাদের সাদর আহ্বান
          </p>

          <button
            onClick={onEnterWedding}
            type="button"
            className="group relative w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] hover:brightness-110 active:scale-98 transition-all border-2 border-[#fef08a] shadow-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden animate-pulse hover:animate-none"
          >
            {/* Shimmer light pass */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#fef08a] group-hover:rotate-12 transition-transform" />
              <span className="font-bengali-serif font-black text-2xl sm:text-3xl text-[#fef08a] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
                ॥ শুভ পরিণয় ॥
              </span>
              <Sparkles className="w-5 h-5 text-[#fef08a] group-hover:-rotate-12 transition-transform" />
            </div>

            <span className="font-bengali-sans font-bold text-xs sm:text-sm text-amber-200 mt-1 flex items-center gap-1">
              <span>আমন্ত্রণে প্রবেশ করতে এখানে ট্যাপ করুন</span>
              <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <p className="text-[11px] text-[#854d0e] font-bengali-sans font-medium">
            তারিখ: {weddingDateBn} • স্থান: কলকাতা
          </p>
        </div>
      </div>

      {/* Auspicious Blessing Quote */}
      <div className="py-2">
        <p className="font-bengali-serif text-xs text-[#800a0f] font-bold tracking-widest">
          ॥ শ্রী শ্রী প্রজাপতয়ে নমঃ ॥
        </p>
      </div>
    </div>
  );
};
