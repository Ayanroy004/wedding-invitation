import React from 'react';
import { ArrowLeft, ChevronRight, MapPin, Navigation, ExternalLink, Phone, Car } from 'lucide-react';

interface VenuePageProps {
  venueNameBn: string;
  venueAddressBn: string;
  mapsUrl: string;
  onBack: () => void;
  onNextPage: () => void;
}

export const VenuePage: React.FC<VenuePageProps> = ({
  venueNameBn,
  venueAddressBn,
  mapsUrl,
  onBack,
  onNextPage,
}) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto min-h-screen bg-[#7f1d1d] text-[#451a03] flex flex-col shadow-2xl rounded-2xl overflow-hidden border-2 border-[#fde047]/60 animate-in fade-in zoom-in-95 duration-300">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#5a080c] via-[#800a0f] to-[#5a080c] text-[#fef08a] px-3.5 py-3 flex items-center justify-between border-b-2 border-[#fde047]/60 sticky top-0 z-30 shadow-md">
        <button
          onClick={onBack}
          type="button"
          className="flex items-center gap-1.5 text-xs font-bengali-sans font-bold text-[#fef08a] hover:text-white bg-black/30 hover:bg-black/50 px-2.5 py-1 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ফিরে যান</span>
        </button>

        <span className="font-bengali-serif font-black text-sm text-[#fde047] drop-shadow-xs">
          বিবাহ বাসর ও অবস্থান
        </span>

        <button
          onClick={onNextPage}
          type="button"
          className="flex items-center gap-1 text-[11px] font-bengali-sans font-bold text-[#fef08a] hover:text-white bg-black/30 hover:bg-black/50 px-2 py-1 rounded-full transition-all cursor-pointer"
        >
          <span>পরের পাতা</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Page Scroll Body */}
      <div className="flex-1 bg-[#faf3e0] p-4 space-y-5 overflow-y-auto text-center">
        {/* Title Card */}
        <div className="bg-[#fff9ed] rounded-2xl p-5 shadow-lg border-2 border-[#d97706]/50">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-bold text-xs border border-[#b45309]/30 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#b91c1c]" />
            <span>বিবাহ বাসর</span>
          </div>

          <h3 className="font-bengali-serif font-black text-3xl text-[#991b1b] my-1">
            “{venueNameBn}”
          </h3>

          <p className="font-bengali-sans font-medium text-xs sm:text-sm text-[#5c2a16] leading-relaxed px-2 mt-2">
            {venueAddressBn}
          </p>

          <div className="flex items-center justify-center gap-2 my-3 text-[#d97706]">
            <span className="w-12 h-px bg-[#d97706]" />
            <span className="text-sm">❀</span>
            <span className="w-12 h-px bg-[#d97706]" />
          </div>

          <p className="font-bengali-serif italic text-xs text-[#854d0e]">
            যেখানে আমরা আমাদের আনন্দ উদযাপন করবো....
          </p>
        </div>

        {/* Embedded Interactive Map */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#d97706]/60 shadow-lg bg-[#e2e8f0] h-56 w-full group">
          <iframe
            title="Roy Bari Venue Map"
            src="https://maps.google.com/maps?q=Netaji+Subhash+Chandra+Bose+Rd+Netaji+Nagar+Kolkata+700040&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 pointer-events-auto"
            loading="lazy"
          />

          {/* Floating Directions Badge */}
          <div className="absolute top-2 left-2 z-10">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 text-[#800a0f] text-xs font-bengali-sans font-bold shadow-md hover:bg-white transition-transform hover:scale-105"
            >
              <Navigation className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>দিকনির্দেশ (Directions)</span>
            </a>
          </div>
        </div>

        {/* Action Button: Open Google Maps */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] hover:brightness-110 active:scale-98 transition-all text-[#fef08a] font-bengali-sans font-black text-sm flex items-center justify-center gap-2 shadow-lg border border-[#fef08a]/60 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
          <span>গুগল ম্যাপে পুরো রুট দেখুন</span>
        </a>

        {/* Landmark & Travel Tips */}
        <div className="bg-[#fff9ed] rounded-xl p-3.5 border border-[#d97706]/40 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bengali-sans font-bold text-[#78350f]">
            <Car className="w-4 h-4 text-[#991b1b]" />
            <span>যাতায়াতের সুবিধার্থে:</span>
          </div>
          <p className="font-bengali-sans text-xs text-[#5c2a16] leading-relaxed">
            • নেতাজি নগর বাসস্ট্যান্ড ও নেতাজি মেট্রো স্টেশন থেকে মাত্র ৫ মিনিটের দূরত্ব।
          </p>
          <p className="font-bengali-sans text-xs text-[#5c2a16] leading-relaxed">
            • গেট নম্বর ১ দিয়ে প্রবেশ করুন। গাড়ি পার্কিংয়ের সুব্যবস্থা রয়েছে।
          </p>
        </div>
      </div>
    </div>
  );
};
