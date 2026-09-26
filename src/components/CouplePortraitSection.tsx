import React from 'react';

interface CouplePortraitProps {
  groomNameBn: string;
  brideNameBn: string;
  weddingDateBn: string;
}

export const CouplePortraitSection: React.FC<CouplePortraitProps> = ({
  groomNameBn,
  brideNameBn,
  weddingDateBn,
}) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* Royal Arch Frame Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] p-3 shadow-2xl border-2 border-[#fde047]/70 overflow-hidden">
        {/* Marigold Toran / Hanging Garland (গাঁদা ফুলের তোরণ) at the top */}
        <div className="absolute top-1 inset-x-0 h-6 flex items-center justify-around z-20 pointer-events-none opacity-95">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="w-1.5 h-2 bg-[#166534]" />
              <div
                className={`w-3.5 h-3.5 rounded-full ${
                  i % 2 === 0 ? 'bg-[#f59e0b]' : 'bg-[#ea580c]'
                } border border-[#fef08a] shadow-xs flex items-center justify-center text-[8px] text-white`}
              >
                ❀
              </div>
            </div>
          ))}
        </div>

        {/* Green Banana Leaves on sides */}
        <div className="absolute top-8 -left-3 w-8 h-20 text-[#22c55e] transform -rotate-12 pointer-events-none z-10">
          🍃
        </div>
        <div className="absolute top-8 -right-3 w-8 h-20 text-[#22c55e] transform rotate-12 scale-x-[-1] pointer-events-none z-10">
          🍃
        </div>

        {/* Outer Arch Shape with Golden Pillars */}
        <div className="relative rounded-xl overflow-hidden bg-[#fffdf5] border-2 border-[#d97706]/50 shadow-inner">
          {/* Couple Portrait Image with decorative fallbacks */}
          <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-[#faf0dc]">
            <img
              src="/src/assets/images/couple_portrait_1790270750048.jpg"
              alt={`${groomNameBn} ও ${brideNameBn}`}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle soft gradient at bottom of the photo */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Gold Corner Accents */}
        <div className="absolute top-2 left-2 text-[#fde047] text-xs pointer-events-none">⚜</div>
        <div className="absolute top-2 right-2 text-[#fde047] text-xs pointer-events-none">⚜</div>
        <div className="absolute bottom-2 left-2 text-[#fde047] text-xs pointer-events-none">⚜</div>
        <div className="absolute bottom-2 right-2 text-[#fde047] text-xs pointer-events-none">⚜</div>
      </div>

      {/* Couple Name & Auspicious Wedding Heading (exact match to video at 00:13) */}
      <div className="mt-5 space-y-1.5 px-2">
        <h2 className="font-bengali-serif font-black text-2xl sm:text-3xl text-[#7f1d1d] tracking-wide drop-shadow-xs">
          {groomNameBn} ও {brideNameBn}-র
        </h2>

        {/* Traditional Swastik / Ornaments Flanking "॥ শুভ বিবাহ ॥" */}
        <div className="flex items-center justify-center gap-2 text-[#b45309]">
          <span className="font-mono text-base font-bold">ৡ</span>
          <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#991b1b] tracking-wider">
            ॥ শুভ বিবাহ ॥
          </h3>
          <span className="font-mono text-base font-bold scale-x-[-1]">ৡ</span>
        </div>

        {/* Date Capsule Pill */}
        <div className="pt-2">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fef3c7] text-[#92400e] font-bengali-sans font-bold text-xs sm:text-sm border border-[#f59e0b]/60 shadow-xs">
            {weddingDateBn}
          </span>
        </div>
      </div>
    </div>
  );
};
