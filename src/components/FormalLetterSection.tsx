import React from 'react';
import { InvitationData } from '../types/invitation';
import coupleImg from "../assets/images/couple_portrait_1790270750048.jpg"
interface FormalLetterSectionProps {
  data: InvitationData;
  onOpenLetter: () => void;
}

export const FormalLetterSection: React.FC<FormalLetterSectionProps> = ({ data, onOpenLetter }) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* "নিমন্ত্রণ পত্র" Trigger Banner (exact match to video at 01:07) */}
      <div className="bg-[#7f1d1d] rounded-2xl p-4 shadow-xl border-2 border-[#fde047]/60 text-white">
        {/* Ornate Button with Floral filigree */}
        <button
          onClick={onOpenLetter}
          type="button"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b45309] via-[#f59e0b] to-[#b45309] hover:brightness-110 active:scale-98 transition-all border-2 border-[#fef08a] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="text-xl">📜</span>
          <span className="font-bengali-serif font-black text-xl sm:text-2xl text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] tracking-wider">
            নিমন্ত্রণ পত্র
          </span>
          <span className="text-xl">📜</span>
        </button>

        {/* Couple Footer Mini-Banner (exact match to video at 01:08 & 01:12) */}
        <div className="mt-4 bg-[#fff9ed] rounded-xl p-3 border border-[#f59e0b]/50 shadow-inner flex items-center gap-3 text-left">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#b91c1c] shrink-0 bg-[#fde68a]">
            <img
              src={coupleImg}
              alt="Couple"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h5 className="font-bengali-serif font-black text-xs sm:text-sm text-[#7f1d1d] leading-tight">
              {data.groomNameBn} ও {data.brideNameBn}-র
            </h5>
            <p className="font-bengali-sans text-[11px] text-[#78350f] mt-0.5 leading-snug">
              শুভ পরিণয়ে আপনাদের সকলের আশীর্বাদ একান্ত কাম্য।
            </p>
          </div>
        </div>

        {/* Branding Credit Badge (exact match to video overlay) */}
        <div className="mt-3 text-center">
          <span className="text-[11px] font-sans font-medium text-amber-200/90 tracking-wide">
            Designed by <strong className="font-bold text-white">InviteOn</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
