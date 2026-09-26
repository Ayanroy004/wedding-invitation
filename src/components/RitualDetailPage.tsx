import React, { useEffect, useRef } from 'react';
import { ArrowLeft, MapPin, ExternalLink, Calendar, Clock } from 'lucide-react';
import { WeddingEvent } from '../types/invitation';

interface RitualDetailPageProps {
  initialEventId: string;
  events: WeddingEvent[];
  groomNameBn: string;
  brideNameBn: string;
  onBack: () => void;
  onNextPage?: () => void;
}

export const RitualDetailPage: React.FC<RitualDetailPageProps> = ({
  initialEventId,
  events,
  groomNameBn,
  brideNameBn,
  onBack,
  onNextPage,
}) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (initialEventId && sectionRefs.current[initialEventId]) {
      setTimeout(() => {
        sectionRefs.current[initialEventId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [initialEventId]);

  const scrollToEvent = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          অনুষ্ঠান সূচী ও প্রাঙ্গণ
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

      {/* Sticky Fast-Navigation Ceremony Tabs */}
      <div className="flex bg-[#f5e6cb] border-b border-[#d97706]/40 sticky top-12 z-20 shadow-xs">
        {events.map((evt) => (
          <button
            key={evt.id}
            onClick={() => scrollToEvent(evt.id)}
            className="flex-1 py-2.5 px-1 text-center text-[11px] sm:text-xs font-bengali-sans font-black text-[#78350f] hover:text-[#991b1b] hover:bg-[#fde68a] transition-all cursor-pointer border-r last:border-r-0 border-[#d97706]/30"
          >
            {evt.titleBn}
          </button>
        ))}
      </div>

      {/* Main Page Scroll Body: All 3 ceremonies listed sequentially as in video (00:33 - 00:42) */}
      <div className="flex-1 bg-[#faf3e0] p-4 space-y-8 overflow-y-auto">
        {events.map((event, index) => (
          <div
            key={event.id}
            ref={(el) => { sectionRefs.current[event.id] = el; }}
            className="space-y-4 pt-2 border-b-2 border-[#d97706]/30 pb-6 last:border-b-0"
          >
            {/* Golden Butterfly Emblem & Couple Title */}
            <div className="text-center">
              <span className="text-3xl text-[#d97706] inline-block animate-pulse">
                🦋
              </span>
              <h4 className="font-bengali-serif font-black text-base sm:text-lg text-[#991b1b] mt-0.5">
                {groomNameBn} ও {brideNameBn}-র
              </h4>
              <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#7f1d1d]">
                ॥ {event.titleBn} ॥
              </h3>
            </div>

            {/* Ceremony Time & Date Card */}
            <div className="bg-[#fff9ed] rounded-xl p-4 border-2 border-[#d97706]/50 shadow-md space-y-3 text-center">
              <div>
                <p className="font-bengali-serif font-black text-base text-[#991b1b] flex items-center justify-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#d97706]" />
                  <span>অনুষ্ঠান সূচী</span>
                </p>
                <p className="font-bengali-sans font-bold text-base sm:text-lg text-[#78350f] mt-1">
                  {event.dateBn}
                </p>
                <p className="font-bengali-sans font-semibold text-sm text-[#854d0e]">
                  {event.timeBn}
                </p>
              </div>

              <div className="border-t border-[#fde68a] pt-3">
                <p className="font-bengali-serif font-black text-base text-[#991b1b] flex items-center justify-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#d97706]" />
                  <span>অনুষ্ঠান প্রাঙ্গণ</span>
                </p>
                <p className="font-bengali-sans font-black text-xl text-[#7f1d1d] mt-1">
                  "{event.venueBn}"
                </p>
                {event.taglineBn && (
                  <p className="text-xs text-[#854d0e] italic mt-1 font-bengali-serif">
                    {event.taglineBn}
                  </p>
                )}
              </div>
            </div>

            {/* Interactive Map Preview for this ritual */}
            <div className="bg-[#fffdf7] rounded-xl overflow-hidden border-2 border-[#d97706]/50 shadow-md">
              <div className="p-2.5 bg-[#fef3c7] flex items-center justify-between border-b border-[#fde68a]">
                <span className="font-bengali-sans font-bold text-xs text-[#78350f] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
                  ম্যাপে অবস্থান: {event.venueBn}
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    event.venueBn + ' Kolkata'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-[#b45309] hover:underline flex items-center gap-1"
                >
                  <span>Maps এ খুলুন</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative h-44 w-full bg-[#e2e8f0]">
                <iframe
                  title={`Map ${event.titleBn}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    event.venueBn + ' Kolkata'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Round Back Button (exact match to video at 00:42) */}
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
