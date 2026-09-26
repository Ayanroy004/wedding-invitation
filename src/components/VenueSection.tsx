import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

interface VenueSectionProps {
  venueNameBn: string;
  venueAddressBn: string;
  mapsUrl: string;
}

export const VenueSection: React.FC<VenueSectionProps> = ({
  venueNameBn,
  venueAddressBn,
  mapsUrl,
}) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* Container (exact match to video at 00:47) */}
      <div className="bg-[#fff9ed] rounded-2xl p-5 shadow-xl border-2 border-[#d97706]/50">
        {/* Title */}
        <h4 className="font-bengali-serif font-black text-xl text-[#7f1d1d] tracking-wide">
          বিবাহ বাসর
        </h4>

        {/* Venue Name in Bengali Quotes */}
        <h3 className="font-bengali-serif font-black text-2xl sm:text-3xl text-[#991b1b] my-2">
          “{venueNameBn}”
        </h3>

        {/* Address */}
        <p className="font-bengali-sans font-medium text-xs sm:text-sm text-[#5c2a16] leading-relaxed px-3">
          {venueAddressBn}
        </p>

        {/* Auspicious Divider */}
        <div className="flex items-center justify-center gap-2 my-3 text-[#d97706]">
          <span className="w-10 h-px bg-[#d97706]" />
          <span className="text-xs">❀</span>
          <span className="w-10 h-px bg-[#d97706]" />
        </div>

        {/* Caption */}
        <p className="font-bengali-serif italic text-xs text-[#854d0e] mb-3">
          যেখানে আমরা আমাদের আনন্দ উদযাপন করবো....
        </p>

        {/* Interactive Map Frame with "Open in Maps" pill (as seen in video at 00:49) */}
        <div className="relative rounded-xl overflow-hidden border-2 border-[#d97706]/40 shadow-inner bg-[#e2e8f0] h-48 w-full group">
          <iframe
            title="Roy Bari Venue Map"
            src="https://maps.google.com/maps?q=Netaji+Subhash+Chandra+Bose+Rd+Netaji+Nagar+Kolkata+700040&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 pointer-events-auto"
            loading="lazy"
          />

          {/* Floating "Open in Maps" Button on Map (exact match to video at 00:49) */}
          <div className="absolute top-2 left-2 z-10">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#7f1d1d] font-bengali-sans font-bold text-xs shadow-md border border-[#d97706]/60 transition-transform active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5 text-[#dc2626]" />
              <span>Open in Maps</span>
              <ExternalLink className="w-3 h-3 text-[#78350f]" />
            </a>
          </div>

          {/* Pin Location Badge */}
          <div className="absolute bottom-2 inset-x-2 z-10 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg border border-[#f59e0b]/50 text-left flex items-center justify-between">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
              <span className="text-[11px] font-bold text-[#7f1d1d] truncate">
                Roy Bari Events (Gate No 1)
              </span>
            </div>
            <span className="text-[10px] text-[#166534] bg-[#dcfce7] px-1.5 py-0.5 rounded font-bold shrink-0">
              10 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
