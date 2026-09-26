import React from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BookOpen,
  Camera,
  MailCheck,
  Scroll,
  Heart,
  CalendarPlus,
} from 'lucide-react';
import { CouplePortraitSection } from './CouplePortraitSection';
import { WeddingCountdown } from './WeddingCountdown';
import { InvitationData } from '../types/invitation';

interface ShubhoParinayPageProps {
  data: InvitationData;
  onBack: () => void;
  onOpenStory: () => void;
  onOpenRituals: (eventId?: string) => void;
  onOpenGallery: () => void;
  onOpenVenue: () => void;
  onOpenRsvp: () => void;
  onOpenLetter: () => void;
  onNextPage: () => void;
}

export const ShubhoParinayPage: React.FC<ShubhoParinayPageProps> = ({
  data,
  onBack,
  onOpenStory,
  onOpenRituals,
  onOpenGallery,
  onOpenVenue,
  onOpenRsvp,
  onOpenLetter,
  onNextPage,
}) => {
  // Download .ics calendar file
  const handleAddToCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Bengali Wedding Invitation//EN',
      'BEGIN:VEVENT',
      'UID:bengali-wedding-20261123@invitation',
      'DTSTAMP:20260925T000000Z',
      'DTSTART:20261123T140000Z',
      'DTEND:20261123T180000Z',
      `SUMMARY:${data.groomNameBn} ও ${data.brideNameBn}-র শুভ পরিণয়`,
      `DESCRIPTION:${data.groomNameBn} ও ${data.brideNameBn} শুভ বিবাহ বাসর`,
      `LOCATION:${data.venueNameBn}, ${data.venueAddressBn}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'subho-parinay-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <span>পূর্বের পাতা (তারিখ)</span>
        </button>

        <span className="font-bengali-serif font-black text-sm text-[#fde047] drop-shadow-xs">
          ॥ শুভ পরিণয় ॥
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
      <div className="flex-1 bg-[#faf3e0] p-4 space-y-6 overflow-y-auto">
        {/* Divine Invocation Banner */}
        <div className="text-center pt-1">
          <p className="font-bengali-serif font-black text-xs text-[#800a0f] tracking-widest drop-shadow-xs">
            ॥ শ্রী শ্রী প্রজাপতয়ে নমঃ ॥
          </p>
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#b45309] to-transparent mt-1" />
        </div>

        {/* Section 1: Royal Arched Couple Portrait (exact match to video at 00:12) */}
        <CouplePortraitSection
          groomNameBn={data.groomNameBn}
          brideNameBn={data.brideNameBn}
          weddingDateBn={data.mainDateBn}
        />

        {/* Section 2: Live Countdown Timer (exact match to video at 00:14) */}
        <WeddingCountdown
          targetDateIso={data.weddingDateIso}
          targetDateLabelBn={data.mainDateBn}
        />

        {/* Section 3: Shubho Parinay Spotlight Card */}
        <div className="bg-[#fff9ed] rounded-2xl p-4 shadow-lg border-2 border-[#d97706]/50 text-center space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#fde68a] text-[#78350f] font-bengali-serif font-black text-xs border border-[#b45309]/40 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#b91c1c] fill-[#b91c1c]" />
            <span>বিবাহ লগ্ন ও শুভক্ষণ</span>
          </div>

          <h3 className="font-bengali-serif font-black text-2xl text-[#991b1b] leading-tight">
            {data.mainDateBn}
          </h3>

          <div className="flex items-center justify-center gap-4 text-xs font-bengali-sans font-bold text-[#78350f]">
            <div className="flex items-center gap-1 bg-amber-100/70 px-2.5 py-1 rounded-lg border border-amber-300">
              <Clock className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>সন্ধ্যা ৭:৩০ মিঃ</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-100/70 px-2.5 py-1 rounded-lg border border-amber-300">
              <MapPin className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>{data.venueNameBn}</span>
            </div>
          </div>

          <p className="font-bengali-sans text-xs text-[#5c2a16]">
            {data.venueAddressBn}
          </p>

          <div className="flex items-center justify-center gap-2 pt-1">
            <a
              href={data.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#800a0f] hover:bg-[#68080c] text-[#fef08a] font-bengali-sans font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>গুগল ম্যাপে দেখুন</span>
            </a>
            <button
              onClick={handleAddToCalendar}
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#f5e6cb] hover:bg-[#fde68a] text-[#78350f] font-bengali-sans font-bold text-xs border border-[#b45309]/40 shadow-md transition-all cursor-pointer"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#b45309]" />
              <span>ক্যালেন্ডারে রাখুন</span>
            </button>
          </div>
        </div>

        {/* Section 4: Separate Dedicated Pages Navigation Hub */}
        <div className="space-y-3 pt-2">
          <div className="text-center">
            <h4 className="font-bengali-serif font-black text-base text-[#7f1d1d]">
              ॥ আমন্ত্রণের অন্যান্য অধ্যায় ॥
            </h4>
            <p className="font-bengali-sans text-xs text-[#854d0e]">
              প্রতিটি পাতা আলাদাভাবে দেখতে নিচের কার্ডে ট্যাপ করুন
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {/* 1. Our Story & Family Card */}
            <button
              onClick={onOpenStory}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#b45309] to-[#78350f] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    আমাদের গল্প ও পরিবার পর্ব
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-amber-200">
                    আমাদের ৫ বছরের পথচলা ও দুই পরিবারের পরিচয়
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 2. Rituals / Ceremonies Card */}
            <button
              onClick={() => onOpenRituals('aiburobhat')}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    স্মারক লিপি (অনুষ্ঠান সূচী)
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-amber-200">
                    আইবুড়ো ভাত, গায়ে হলুদ ও শুভ পরিণয়
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 3. Memories Photo Gallery Card */}
            <button
              onClick={onOpenGallery}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#9a3412] to-[#7c2d12] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    আমাদের কিছু মুহূর্ত (ফটো গ্যালারি)
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-amber-200">
                    একে অপরের সাথে কাটানো স্মৃতির অ্যালবাম
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 4. Wedding Venue Card */}
            <button
              onClick={onOpenVenue}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#3f6212] to-[#365314] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    বিবাহ বাসর ও অবস্থান
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-lime-200">
                    “{data.venueNameBn}” ও সরাসরি লাইভ রুট ম্যাপ
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 5. RSVP Card */}
            <button
              onClick={onOpenRsvp}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#1e293b] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <MailCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    উপস্থিতি নিশ্চিত করুন (RSVP)
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-blue-200">
                    আপনার উপস্থিতি ও আশীর্বাদ আমাদের কাম্য
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 6. Traditional Formal Letter Card */}
            <button
              onClick={onOpenLetter}
              type="button"
              className="group w-full p-3.5 rounded-xl bg-gradient-to-r from-[#831843] to-[#701a75] text-white flex items-center justify-between shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#fde047]/60 cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#fef08a]">
                  <Scroll className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bengali-serif font-bold text-sm text-[#fef08a]">
                    ঐতিহ্যবাহী নিমন্ত্রণ লিপি
                  </h5>
                  <p className="font-bengali-sans text-[11px] text-pink-200">
                    সবিনয় নিবেদন ও আশীর্বাদের সনাতনী চিঠি
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer quote */}
        <div className="pt-2 pb-4 text-center">
          <p className="font-bengali-serif text-xs text-[#854d0e] font-semibold italic">
            “তোমাদের উপস্থিতিই আমাদের এই আনন্দের আসল সৌন্দর্য...”
          </p>
        </div>
      </div>
    </div>
  );
};
