import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { InvitationData } from '../types/invitation';

interface StoryPageProps {
  data: InvitationData;
  onBack: () => void;
  onNextPage?: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ data, onBack, onNextPage }) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto min-h-screen bg-[#7f1d1d] text-[#451a03] flex flex-col shadow-2xl rounded-2xl overflow-hidden border-2 border-[#fde047]/60 animate-in fade-in zoom-in-95 duration-300">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#5a080c] via-[#800a0f] to-[#5a080c] text-[#fef08a] px-4 py-3 flex items-center justify-between border-b-2 border-[#fde047]/60 sticky top-0 z-30 shadow-md">
        <button
          onClick={onBack}
          type="button"
          className="flex items-center gap-1.5 text-xs font-bengali-sans font-bold text-[#fef08a] hover:text-white bg-black/30 hover:bg-black/50 px-2.5 py-1 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ফিরে যান</span>
        </button>
        <span className="font-bengali-serif font-black text-sm text-[#fde047] drop-shadow-xs">
          আমাদের গল্প ও পরিবার
        </span>
        {onNextPage ? (
          <button
            onClick={onNextPage}
            type="button"
            className="flex items-center gap-1 text-[11px] font-bengali-sans font-bold text-[#fef08a] hover:text-white bg-black/30 hover:bg-black/50 px-2 py-1 rounded-full transition-all cursor-pointer"
          >
            <span>পরের পাতা</span>
          </button>
        ) : (
          <div className="w-8" />
        )}
      </div>

      {/* Main Page Scroll Body */}
      <div className="flex-1 bg-[#faf3e0] p-4 space-y-6 overflow-y-auto">
        {/* Riverbank Steps Walking Couple Illustration (as seen in video at 00:19) */}
        <div className="rounded-xl overflow-hidden border border-[#d97706]/40 shadow-md relative h-44 bg-[#fde68a]">
          <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="storySkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="60%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
            </defs>
            <rect width="400" height="160" fill="url(#storySkyGrad)" />
            {/* Distant river ghat and trees */}
            <path d="M 0 130 Q 150 115 400 135 L 400 160 L 0 160 Z" fill="#bbf7d0" />
            <path d="M 0 140 L 400 140 L 400 160 L 0 160 Z" fill="#94a3b8" />
            {/* Brick steps of Kolkata Ganga Ghat */}
            <rect x="0" y="142" width="400" height="3" fill="#cbd5e1" />
            <rect x="0" y="148" width="400" height="3" fill="#cbd5e1" />
            {/* Floating pigeons */}
            <path d="M 320 120 Q 325 115 330 120 Q 335 115 340 120" stroke="#475569" strokeWidth="1" fill="none" />
          </svg>

          {/* Couple Walking Along Ghat */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 200 120" className="w-48 h-auto drop-shadow-md">
              {/* Groom in white pajama & leather sandals */}
              <path d="M 70 20 L 70 85 L 85 85 L 85 20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
              <ellipse cx="80" cy="90" rx="14" ry="5" fill="#78350f" />

              {/* Bride in red silk Benarasi saree pleats with gold zari border & silver payel/nupur anklets */}
              <path d="M 105 15 L 95 85 L 125 85 L 120 15 Z" fill="#b91c1c" stroke="#fde047" strokeWidth="1.5" />
              <rect x="95" y="80" width="30" height="5" fill="#facc15" />
              <ellipse cx="112" cy="89" rx="10" ry="4" fill="#fed7aa" stroke="#dc2626" strokeWidth="1.5" />
              <line x1="102" y1="87" x2="122" y2="87" stroke="#cbd5e1" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Romantic Story Narrative (exact transcript from video at 00:20) */}
        <div className="bg-[#fffdf7] p-4 rounded-xl border border-[#d97706]/40 shadow-sm space-y-3 text-center">
          <h5 className="font-bengali-serif font-black text-base sm:text-lg text-[#991b1b] leading-snug">
            {data.storyQuoteBn}
          </h5>

          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#b45309] to-transparent" />

          <p className="font-bengali-serif text-xs sm:text-sm text-[#451a03] leading-relaxed text-justify">
            {data.storyParagraph1Bn}
          </p>

          <p className="font-bengali-serif text-xs sm:text-sm text-[#451a03] leading-relaxed text-justify">
            {data.storyParagraph2Bn}
          </p>

          <p className="font-bengali-serif text-xs sm:text-sm text-[#78350f] leading-relaxed text-justify font-medium bg-[#fef3c7] p-3 rounded-lg border border-[#f59e0b]/40">
            {data.storyParagraph3Bn}
          </p>
        </div>

        {/* 1. মুকুটের পরিবার (Bride's family) - exact match to video at 00:22 */}
        <div className="bg-[#fff9ed] rounded-xl p-4 border-2 border-[#d97706]/50 shadow-md text-center space-y-3">
          <div className="inline-block px-4 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-sm border border-[#b45309]/50 shadow-xs">
            মুকুটের পরিবার
          </div>

          {/* Shola Mukut on Lotus Throne Illustration */}
          <div className="w-32 h-28 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-md">
              <ellipse cx="60" cy="85" rx="45" ry="12" fill="#ca8a04" />
              <ellipse cx="60" cy="80" rx="40" ry="10" fill="#eab308" />
              <path
                d="M 60 15 C 50 35, 30 50, 25 70 L 95 70 C 90 50, 70 35, 60 15 Z"
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
              <circle cx="60" cy="35" r="3" fill="#dc2626" />
              <circle cx="48" cy="50" r="2.5" fill="#dc2626" />
              <circle cx="72" cy="50" r="2.5" fill="#dc2626" />
              <circle cx="60" cy="55" r="4" fill="#facc15" stroke="#b45309" strokeWidth="0.8" />
              <path d="M 35 68 Q 60 60 85 68" stroke="#ca8a04" strokeWidth="2" fill="none" />
              <circle cx="60" cy="12" r="3" fill="#fde047" stroke="#ca8a04" strokeWidth="0.8" />
            </svg>
          </div>

          <div className="space-y-1 font-bengali-serif">
            <h6 className="font-black text-base sm:text-lg text-[#991b1b]">
              কল্যাণীয়া {data.brideNameBn} ঘোষ
            </h6>
            <p className="text-xs text-[#78350f] font-bold">(একমাত্র কন্যা)</p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              বাবা : <strong className="text-[#991b1b]">{data.brideFatherBn}</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              মা : <strong className="text-[#991b1b]">{data.brideMotherBn}</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              নিবাস : <strong className="text-[#991b1b]">{data.brideAddressBn}</strong>
            </p>
          </div>
        </div>

        {/* 2. টোপরের পরিবার (Groom's family) - exact match to video at 00:24 */}
        <div className="bg-[#fff9ed] rounded-xl p-4 border-2 border-[#d97706]/50 shadow-md text-center space-y-3">
          <div className="inline-block px-4 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-sm border border-[#b45309]/50 shadow-xs">
            টোপরের পরিবার
          </div>

          {/* Shola Topor on Lotus Throne Illustration */}
          <div className="w-32 h-28 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-md">
              <ellipse cx="60" cy="85" rx="45" ry="12" fill="#ca8a04" />
              <ellipse cx="60" cy="80" rx="40" ry="10" fill="#eab308" />
              <path
                d="M 60 8 L 38 72 L 82 72 Z"
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
              <circle cx="60" cy="6" r="3.5" fill="#dc2626" />
              <line x1="43" y1="55" x2="77" y2="55" stroke="#ca8a04" strokeWidth="1.5" />
              <line x1="48" y1="40" x2="72" y2="40" stroke="#dc2626" strokeWidth="1.5" />
              <line x1="53" y1="25" x2="67" y2="25" stroke="#ca8a04" strokeWidth="1.5" />
              <circle cx="60" cy="62" r="3" fill="#dc2626" />
              <rect x="36" y="70" width="48" height="5" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            </svg>
          </div>

          <div className="space-y-1 font-bengali-serif">
            <h6 className="font-black text-base sm:text-lg text-[#991b1b]">
              কল্যাণীয় {data.groomNameBn} দত্ত
            </h6>
            <p className="text-xs text-[#78350f] font-bold">(একমাত্র পুত্র)</p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              বাবা : <strong className="text-[#991b1b]">{data.groomFatherBn}</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              মা : <strong className="text-[#991b1b]">{data.groomMotherBn}</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#451a03]">
              নিবাস : <strong className="text-[#991b1b]">{data.groomAddressBn}</strong>
            </p>
          </div>
        </div>

        {/* Back Button (exact match to video at 00:26) */}
        <div className="py-4 flex justify-center">
          <button
            onClick={onBack}
            type="button"
            className="w-12 h-12 rounded-full bg-[#b45309] hover:bg-[#92400e] text-[#fef08a] flex items-center justify-center shadow-xl border-2 border-[#fde047] active:scale-95 transition-all cursor-pointer"
            title="মূল পাতায় ফিরে যান (Back)"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
