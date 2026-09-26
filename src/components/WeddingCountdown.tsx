import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDateIso: string;
  targetDateLabelBn: string;
}

export const WeddingCountdown: React.FC<CountdownProps> = ({
  targetDateIso,
  targetDateLabelBn,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If passed or day of wedding
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDateIso]);

  // Convert numbers to 2-digit format
  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* Title (matches video at 00:14) */}
      <h3 className="font-bengali-serif font-black text-2xl sm:text-3xl text-[#7f1d1d] tracking-wide drop-shadow-xs">
        ‘আর মাত্র সময় বাকি!’
      </h3>

      {/* Subtitle */}
      <p className="font-bengali-sans font-medium text-xs sm:text-sm text-[#854d0e] mt-1 mb-4">
        {targetDateLabelBn} পর্যন্ত গণনা
      </p>

      {/* 4-Box Digital Countdown */}
      <div className="bg-[#fff9ed] rounded-2xl p-4 shadow-lg border-2 border-[#d97706]/50">
        <div className="grid grid-cols-4 gap-2">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#fef2f2] rounded-xl py-2 px-1 border border-[#f87171]/40 shadow-inner">
              <span className="font-mono font-black text-xl sm:text-2xl text-[#991b1b]">
                {formatNum(timeLeft.days)}
              </span>
            </div>
            <span className="text-[11px] font-bengali-sans font-bold text-[#78350f] mt-1">
              দিন
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#fef2f2] rounded-xl py-2 px-1 border border-[#f87171]/40 shadow-inner">
              <span className="font-mono font-black text-xl sm:text-2xl text-[#991b1b]">
                {formatNum(timeLeft.hours)}
              </span>
            </div>
            <span className="text-[11px] font-bengali-sans font-bold text-[#78350f] mt-1">
              ঘণ্টা
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#fef2f2] rounded-xl py-2 px-1 border border-[#f87171]/40 shadow-inner">
              <span className="font-mono font-black text-xl sm:text-2xl text-[#991b1b]">
                {formatNum(timeLeft.minutes)}
              </span>
            </div>
            <span className="text-[11px] font-bengali-sans font-bold text-[#78350f] mt-1">
              মিনিট
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#fee2e2] rounded-xl py-2 px-1 border border-[#ef4444] shadow-inner animate-pulse">
              <span className="font-mono font-black text-xl sm:text-2xl text-[#b91c1c]">
                {formatNum(timeLeft.seconds)}
              </span>
            </div>
            <span className="text-[11px] font-bengali-sans font-bold text-[#78350f] mt-1">
              সেকেন্ড
            </span>
          </div>
        </div>

        {/* Auspicious Couple Hands Garland Image (exact match to video at 00:15) */}
        <div className="mt-4 rounded-xl overflow-hidden border border-[#f59e0b]/40 relative h-36 bg-[#fde68a]">
          <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="warmBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="50%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
            </defs>
            <rect width="400" height="160" fill="url(#warmBg)" />
            {/* Soft decorative glow */}
            <circle cx="200" cy="80" r="70" fill="#fef08a" opacity="0.15" />
          </svg>

          {/* Detailed SVG Illustration of Auspicious Hands Holding & Red Garland */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 240 120" className="w-48 h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              {/* Groom Hand with gold wedding ring */}
              <path d="M 40 70 Q 90 60 120 70 L 130 85 L 60 90 Z" fill="#fbcfe8" opacity="0.3" />
              <path
                d="M 30 75 C 60 65, 90 60, 115 65 C 130 68, 140 78, 125 90 C 105 100, 60 95, 30 90 Z"
                fill="#fcd34d"
                stroke="#b45309"
                strokeWidth="1.5"
              />
              {/* Groom's Red Kurta Sleeve with gold embroidery */}
              <rect x="10" y="60" width="30" height="40" rx="3" fill="#991b1b" stroke="#fef08a" strokeWidth="1" />

              {/* Bride Hand with Traditional Shakha (White conch) & Pola (Red coral) bangles & Alta */}
              <path
                d="M 210 75 C 180 65, 150 60, 125 65 C 110 68, 100 78, 115 90 C 135 100, 180 95, 210 90 Z"
                fill="#fed7aa"
                stroke="#b45309"
                strokeWidth="1.5"
              />
              {/* Bride Red Alta on Palms & Fingers */}
              <circle cx="120" cy="78" r="8" fill="#dc2626" opacity="0.85" />
              <circle cx="128" cy="74" r="3" fill="#dc2626" />
              <circle cx="112" cy="74" r="3" fill="#dc2626" />

              {/* White Shankha & Red Pola Bangles on Bride's wrist */}
              <rect x="180" y="66" width="6" height="28" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="187" y="66" width="6" height="28" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
              <rect x="194" y="66" width="6" height="28" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />

              {/* Red Rose & Jasmine Wedding Garland (জয়মালা) draped across hands */}
              <g stroke="#ffffff" strokeWidth="1" fill="#ef4444">
                <circle cx="105" cy="75" r="7" fill="#b91c1c" />
                <circle cx="120" cy="70" r="8" fill="#dc2626" />
                <circle cx="135" cy="75" r="7" fill="#b91c1c" />
                <circle cx="112" cy="85" r="6" fill="#e11d48" />
                <circle cx="128" cy="85" r="6" fill="#e11d48" />
                {/* Jasmine buds in garland */}
                <circle cx="98" cy="72" r="3" fill="#ffffff" />
                <circle cx="142" cy="72" r="3" fill="#ffffff" />
                <circle cx="120" cy="62" r="3" fill="#ffffff" />
                <circle cx="120" cy="94" r="3" fill="#ffffff" />
              </g>

              {/* Gold Ring glint */}
              <circle cx="108" cy="68" r="2.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            </svg>
          </div>

          {/* Romantic text overlay */}
          <div className="absolute inset-x-0 bottom-1 text-center bg-black/40 py-0.5">
            <span className="text-[10px] text-amber-200 font-bengali-sans font-medium tracking-wider">
              চিরন্তন বন্ধন ও অঙ্গীকার
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
