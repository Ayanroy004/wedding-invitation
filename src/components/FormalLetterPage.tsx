import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { InvitationData } from '../types/invitation';

interface FormalLetterPageProps {
  data: InvitationData;
  onBack: () => void;
  onNextPage?: () => void;
}

export const FormalLetterPage: React.FC<FormalLetterPageProps> = ({ data, onBack, onNextPage }) => {
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
          ঐতিহ্যবাহী নিমন্ত্রণ লিপি
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

      {/* Main Page Scroll Body (exact match to video at 01:09 - 01:11) */}
      <div className="flex-1 bg-[#faf3e0] p-5 space-y-4 overflow-y-auto font-bengali-serif text-center">
        {/* Top Ganesha & Wedding Illustration */}
        <div className="w-full h-36 rounded-xl overflow-hidden bg-gradient-to-b from-[#fef3c7] to-[#fed7aa] border border-[#f59e0b]/40 flex items-center justify-center p-2 shadow-xs">
          <svg viewBox="0 0 240 100" className="w-full h-full drop-shadow-md">
            <path d="M 30 90 L 30 40 Q 120 10 210 40 L 210 90" stroke="#b45309" strokeWidth="2" fill="none" />
            <circle cx="120" cy="18" r="4" fill="#dc2626" />
            <ellipse cx="120" cy="70" rx="14" ry="12" fill="#eab308" stroke="#78350f" strokeWidth="1" />
            <path d="M 120 58 C 110 50 115 40 120 35 C 125 40 130 50 120 58 Z" fill="#15803d" />
            {/* Bride */}
            <circle cx="160" cy="55" r="10" fill="#fed7aa" />
            <path d="M 152 48 Q 160 38 168 48" fill="#1e293b" />
            <circle cx="160" cy="53" r="1.5" fill="#dc2626" />
            <path d="M 150 65 L 170 65 L 175 88 L 145 88 Z" fill="#b91c1c" />
            {/* Groom */}
            <circle cx="80" cy="55" r="10" fill="#fed7aa" />
            <path d="M 80 40 L 73 50 L 87 50 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
            <path d="M 70 65 L 90 65 L 95 88 L 65 88 Z" fill="#991b1b" />
            {/* Marigold Garland */}
            <path d="M 85 70 Q 120 90 155 70" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="3,2" />
          </svg>
        </div>

        {/* Mangalacharan / Invocation */}
        <div className="space-y-1">
          <p className="font-black text-xl text-[#991b1b] tracking-widest drop-shadow-xs">
            ॥ শ্রী শ্রী প্রজাপতয়ে নমঃ ॥
          </p>
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#b45309] to-transparent" />
        </div>

        {/* Salutation */}
        <p className="font-black text-lg text-[#7f1d1d] underline decoration-[#d97706] underline-offset-4">
          সবিনয় নিবেদন,
        </p>

        {/* Traditional Formal Invitation Letter Text */}
        <div className="bg-[#fffdf7] p-4 rounded-xl border border-[#d97706]/40 shadow-xs text-xs sm:text-sm leading-relaxed text-justify space-y-3">
          <p>
            মহাশয়/মহাশয়া, পরম করুণাময় ঈশ্বরের কৃপায় ও প্রজাপতি ঋষির আশীর্বাদে আগামী{' '}
            <strong className="text-[#991b1b] font-bold">{data.bengaliYearDate}</strong>{' '}
            ({data.mainDateBn}) রোজ সোমবার আমাদের কন্যা কল্যাণীয়া{' '}
            <strong className="text-[#991b1b] font-bold">{data.brideNameBn}</strong>-র সহিত
            নিবাসী শ্রী <strong className="text-[#991b1b] font-bold">{data.groomFatherBn}</strong> মহাশয় ও
            শ্রীমতী <strong className="text-[#991b1b] font-bold">{data.groomMotherBn}</strong> মহাশয়ের একমাত্র পুত্র কল্যাণীয়{' '}
            <strong className="text-[#991b1b] font-bold">{data.groomNameBn}</strong>-র শুভ পরিণয় সুসম্পন্ন হইবে।
          </p>

          <p>
            এই আনন্দ উপলক্ষে আপনি/আপনারা সপরিবারে উক্ত বিবাহবাসরে উপস্থিত থাকিয়া নবদম্পতিকে এক সুখী ভবিষ্যৎ
            জীবনের জন্য আশীর্বাদ ও প্রীতিভোজে যোগদান করিয়া বাধিত করিবেন।
          </p>

          <p className="text-center italic text-[#78350f] font-semibold pt-1">
            পত্রদ্বারা নিমন্ত্রণের ত্রুটি মার্জনা করিবেন।
          </p>
        </div>

        {/* Signoff */}
        <div className="pt-2 text-center">
          <p className="text-xs text-[#78350f] font-bold">বিনীত</p>
          <h6 className="font-black text-xl text-[#7f1d1d]">
            জয়দেব তালুকদার ও পরিবার
          </h6>
        </div>

        {/* Bottom Back Button (exact match to video at 01:11) */}
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
