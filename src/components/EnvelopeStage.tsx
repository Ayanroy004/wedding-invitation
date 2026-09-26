import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  VerticalFoilBorder,
  BottomFoilBorder,
  FlapGoldTrim,
  AuspiciousLeaves,
} from './BengaliFoilBorders';
import { PlumeriaFloral } from './PlumeriaFloral';
import { WaxSeal } from './WaxSeal';
import { DateWelcomePage } from './DateWelcomePage';
import { ShubhoParinayPage } from './ShubhoParinayPage';
import { StoryPage } from './StoryPage';
import { RitualDetailPage } from './RitualDetailPage';
import { GalleryPage } from './GalleryPage';
import { VenuePage } from './VenuePage';
import { RsvpPage } from './RsvpPage';
import { FormalLetterPage } from './FormalLetterPage';
import { InvitationData } from '../types/invitation';
import { bengaliWeddingAudio } from '../utils/audio';
import {
  Music,
  Music2,
  Edit3,
  Mail,
  ChevronLeft,
  ChevronRight,
  List,
  X,
  Heart,
} from 'lucide-react';

interface EnvelopeStageProps {
  data: InvitationData;
  onOpenCustomizer: () => void;
}

export type ActiveView =
  | 'envelope'
  | 'date'
  | 'shubho-parinay'
  | 'story'
  | 'rituals'
  | 'gallery'
  | 'venue'
  | 'rsvp'
  | 'letter';

const VIEW_ORDER: { id: ActiveView; titleBn: string; num: number }[] = [
  { id: 'envelope', titleBn: '১. খাম (কভার)', num: 1 },
  { id: 'date', titleBn: '২. শুভ সূচনা ও তারিখ', num: 2 },
  { id: 'shubho-parinay', titleBn: '৩. শুভ পরিণয় (প্রধান লগ্ন)', num: 3 },
  { id: 'story', titleBn: '৪. আমাদের গল্প ও পরিবার', num: 4 },
  { id: 'rituals', titleBn: '৫. স্মারক লিপি (অনুষ্ঠান সূচী)', num: 5 },
  { id: 'gallery', titleBn: '৬. আমাদের কিছু মুহূর্ত', num: 6 },
  { id: 'venue', titleBn: '৭. বিবাহ বাসর ও অবস্থান', num: 7 },
  { id: 'rsvp', titleBn: '৮. উপস্থিতি ও আশীর্বাদ (RSVP)', num: 8 },
  { id: 'letter', titleBn: '৯. সনাতনী নিমন্ত্রণ লিপি', num: 9 },
];

export const EnvelopeStage: React.FC<EnvelopeStageProps> = ({ data, onOpenCustomizer }) => {
  const [currentView, setCurrentView] = useState<ActiveView>('envelope');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string>('aiburobhat');
  const [isSealOpening, setIsSealOpening] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Auspicious flower petal & golden confetti shower (পাপড়ি বৃষ্টি)
  const triggerPetalShower = () => {
    const colors = ['#e6194b', '#ff69b4', '#ffd700', '#ffa500', '#fff8dc'];

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.45 },
      colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
      shapes: ['circle'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors,
      });
    }, 200);
  };

  const navigateTo = (view: ActiveView) => {
    setCurrentView(view);
    setIsTocOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // 1. Tap Wax Seal -> Opens the DATE PAGE ("আমাদের নতুন পথ চলা শুরু হতে চলেছে" + 23 Nov)
  const handleOpenEnvelope = () => {
    setIsSealOpening(true);
    triggerPetalShower();

    if (!bengaliWeddingAudio.getIsPlaying()) {
      bengaliWeddingAudio.play();
      setIsAudioPlaying(true);
    }

    setTimeout(() => {
      setIsSealOpening(false);
      navigateTo('date');
    }, 450);
  };

  // 2. Click "॥ শুভ পরিণয় ॥" on Date Page -> Opens the dedicated SHUBHO PARINAY PAGE
  const handleEnterShubhoParinay = () => {
    navigateTo('shubho-parinay');
  };

  // Next and Previous Page Navigation
  const currentIndex = VIEW_ORDER.findIndex((v) => v.id === currentView);
  const currentItem = VIEW_ORDER[currentIndex] || VIEW_ORDER[0];

  const handlePrevPage = () => {
    if (currentIndex > 0) {
      navigateTo(VIEW_ORDER[currentIndex - 1].id);
    }
  };

  const handleNextPage = () => {
    if (currentIndex < VIEW_ORDER.length - 1) {
      navigateTo(VIEW_ORDER[currentIndex + 1].id);
    }
  };

  const handleToggleAudio = () => {
    const playing = bengaliWeddingAudio.toggle();
    setIsAudioPlaying(playing);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-3 sm:p-6 overflow-x-hidden selection:bg-amber-300/30">
      {/* Background: Authentic High-Resolution Parchment Texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src="/src/assets/images/wedding_parchment_bg_1790262810658.jpg"
          alt="Vintage Parchment Texture"
          className="w-full h-full object-cover object-center opacity-90 brightness-95"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-amber-900/10 to-[#5a3818]/30 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Floating Top Control Bar */}
      <header className="fixed top-2 z-50 w-full max-w-md flex items-center justify-between px-3 select-none pointer-events-auto">
        <button
          onClick={handleToggleAudio}
          type="button"
          aria-label="Toggle Wedding Song"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4e7cf]/95 hover:bg-[#fff9ed] text-[#6d431c] border border-[#d4af37] shadow-md text-xs font-bengali-sans font-bold transition-all backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
          title="গান শুনুন: শুধু তোমারই জন্য..."
        >
          {isAudioPlaying ? (
            <>
              <Music2 className="w-3.5 h-3.5 text-[#a81016] animate-bounce" />
              <span>গান বাজছে 🎶</span>
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-[#8b6535]" />
              <span>গান শুনুন 🎵</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2">
          {currentView !== 'envelope' && (
            <button
              onClick={() => navigateTo('envelope')}
              type="button"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#800a0f] hover:bg-[#68080c] text-[#ffd54f] text-xs font-bengali-sans font-bold shadow-md transition-all hover:scale-105 active:scale-95 border border-[#ffd54f]/50 cursor-pointer"
              title="খাম দেখুন (Envelope)"
            >
              <Mail className="w-3 h-3" />
              <span>খাম</span>
            </button>
          )}

          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#f4e7cf]/95 hover:bg-[#fff9ed] text-[#6d431c] border border-[#d4af37] shadow-md text-xs font-bengali-sans font-bold transition-all backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
            title="সমস্ত পাতা নির্বাচন"
          >
            <List className="w-3.5 h-3.5 text-[#800a0f]" />
            <span>পাতা</span>
          </button>

          <button
            onClick={onOpenCustomizer}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#f4e7cf]/95 hover:bg-[#fff9ed] text-[#6d431c] border border-[#d4af37] shadow-md text-xs font-bengali-sans font-bold transition-all backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#800a0f]" />
            <span>সম্পাদনা</span>
          </button>
        </div>
      </header>

      {/* Table of Contents Drawer / Modal */}
      {isTocOpen && (
        <div
          onClick={() => setIsTocOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[340px] bg-[#faf3e0] rounded-2xl border-2 border-[#d97706] shadow-2xl p-5 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-[#d97706]/40 pb-2">
              <h4 className="font-bengali-serif font-black text-base text-[#7f1d1d] flex items-center gap-2">
                <span>📑 আমন্ত্রণের সূচিপত্র</span>
              </h4>
              <button
                onClick={() => setIsTocOpen(false)}
                type="button"
                className="p-1 rounded-full text-[#78350f] hover:bg-amber-200/50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto">
              {VIEW_ORDER.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  type="button"
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bengali-sans font-bold transition-all flex items-center justify-between cursor-pointer ${
                    currentView === item.id
                      ? 'bg-[#991b1b] text-[#fef08a] shadow-xs'
                      : 'hover:bg-amber-200/60 text-[#5c2a16]'
                  }`}
                >
                  <span>{item.titleBn}</span>
                  {currentView === item.id && (
                    <span className="text-[10px] bg-amber-400 text-[#7f1d1d] px-1.5 py-0.5 rounded-full">
                      বর্তমান
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 1. SEPARATE ENVELOPE SCREEN (Initial cover page)               */}
      {/* ============================================================== */}
      {currentView === 'envelope' && (
        <div className="relative z-20 w-full max-w-md flex flex-col items-center justify-center min-h-[92vh] pt-12 pb-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] flex flex-col items-center">
            {/* Side Auspicious Banana / Mango Leaves */}
            <AuspiciousLeaves side="left" />
            <AuspiciousLeaves side="right" />

            {/* The Envelope Box Container */}
            <div
              onClick={handleOpenEnvelope}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenEnvelope();
              }}
              className="group relative w-full h-[450px] sm:h-[480px] rounded-2xl envelope-ribs border-2 border-[#ffecb3]/40 shadow-[0_24px_50px_-10px_rgba(80,5,10,0.65),0_10px_20px_rgba(0,0,0,0.35)] overflow-hidden cursor-pointer select-none transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
            >
              {/* Traditional Gold Foil Borders */}
              <VerticalFoilBorder side="left" />
              <VerticalFoilBorder side="right" />
              <BottomFoilBorder />

              {/* Envelope Flap Top Area */}
              <div
                className={`relative w-full h-36 sm:h-40 envelope-flap-bg shadow-[0_6px_16px_rgba(0,0,0,0.45)] border-b border-[#ffd54f]/50 overflow-visible z-10 transition-transform duration-500 origin-top ${
                  isSealOpening ? 'rotate-x-180 -translate-y-2' : ''
                }`}
              >
                <FlapGoldTrim />

                {/* Plumeria Flowers Bouquet */}
                <div className="absolute -top-3 right-0 sm:right-2 z-20">
                  <PlumeriaFloral />
                </div>
              </div>

              {/* Cursive "Invite" Text */}
              <div className="absolute top-44 right-1 sm:right-2 z-20 pointer-events-none transform -rotate-12">
                <span className="font-cursive text-2xl sm:text-3xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] tracking-wide">
                  Invite
                </span>
              </div>

              {/* Envelope Face Central Typography */}
              <div className="absolute inset-x-6 top-48 sm:top-52 bottom-10 flex flex-col items-center justify-center text-center space-y-3 z-10 pointer-events-none">
                <div className="px-3 py-0.5 rounded-full">
                  <p className="font-bengali-serif text-base sm:text-lg font-semibold text-[#fff8e1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
                    {data.envelopeHeadingBn}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h1 className="font-bengali-serif font-black text-3xl sm:text-4xl gold-emboss-text tracking-normal leading-tight">
                    {data.envelopeTitleBn}
                  </h1>
                  <h1 className="font-bengali-serif font-black text-3xl sm:text-4xl gold-emboss-text tracking-wide leading-tight">
                    {data.envelopeSubtitleBn}
                  </h1>
                </div>
              </div>

              {/* Golden Wax Seal - Tap to Open */}
              <div className="absolute top-24 sm:top-28 inset-x-0 flex justify-center z-30">
                <WaxSeal onOpen={handleOpenEnvelope} isOpen={isSealOpening} />
              </div>
            </div>
          </div>

          {/* Bottom Text on the Parchment Paper */}
          <div className="text-center mt-6 px-3 select-none">
            <p className="font-bengali-serif font-bold text-base sm:text-lg text-[#523319] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] tracking-wide leading-snug">
              আমাদের শুভক্ষণের সাক্ষী হতে
            </p>
            <p className="font-bengali-serif font-bold text-base sm:text-lg text-[#523319] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] tracking-wide leading-snug">
              আপনাকে জানাই সাদর আমন্ত্রণ
            </p>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. SEPARATE DATE & KOLKATA BANNER PAGE (Opens from Envelope)   */}
      {/* ============================================================== */}
      {currentView === 'date' && (
        <div className="relative z-20 w-full max-w-md pt-12 pb-16 flex justify-center">
          <DateWelcomePage
            onEnterWedding={handleEnterShubhoParinay}
            onBackToEnvelope={() => navigateTo('envelope')}
            groomNameBn={data.groomNameBn}
            brideNameBn={data.brideNameBn}
            weddingDateBn={data.mainDateBn}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. SEPARATE SHUBHO PARINAY MAIN WEDDING PAGE                  */}
      {/* ============================================================== */}
      {currentView === 'shubho-parinay' && (
        <div className="relative z-20 w-full max-w-md pt-12 pb-16 flex justify-center">
          <ShubhoParinayPage
            data={data}
            onBack={() => navigateTo('date')}
            onOpenStory={() => navigateTo('story')}
            onOpenRituals={(eventId?: string) => {
              if (eventId) setSelectedEventId(eventId);
              navigateTo('rituals');
            }}
            onOpenGallery={() => navigateTo('gallery')}
            onOpenVenue={() => navigateTo('venue')}
            onOpenRsvp={() => navigateTo('rsvp')}
            onOpenLetter={() => navigateTo('letter')}
            onNextPage={() => navigateTo('story')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. SEPARATE STORY & FAMILY PAGE                                */}
      {/* ============================================================== */}
      {currentView === 'story' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <StoryPage
            data={data}
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('rituals')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 5. SEPARATE RITUALS & CEREMONY DETAILS PAGE (স্মারকলিপি)      */}
      {/* ============================================================== */}
      {currentView === 'rituals' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <RitualDetailPage
            initialEventId={selectedEventId}
            events={data.events}
            groomNameBn={data.groomNameBn}
            brideNameBn={data.brideNameBn}
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('gallery')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 6. SEPARATE PHOTO MEMORIES GALLERY PAGE                        */}
      {/* ============================================================== */}
      {currentView === 'gallery' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <GalleryPage
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('venue')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 7. SEPARATE WEDDING VENUE & MAP PAGE                          */}
      {/* ============================================================== */}
      {currentView === 'venue' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <VenuePage
            venueNameBn={data.venueNameBn}
            venueAddressBn={data.venueAddressBn}
            mapsUrl={data.mapsUrl}
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('rsvp')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 8. SEPARATE RSVP FORM PAGE                                     */}
      {/* ============================================================== */}
      {currentView === 'rsvp' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <RsvpPage
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('letter')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* 9. SEPARATE FORMAL INVITATION LETTER PAGE                      */}
      {/* ============================================================== */}
      {currentView === 'letter' && (
        <div className="relative z-30 w-full pt-12 pb-16 flex justify-center">
          <FormalLetterPage
            data={data}
            onBack={() => navigateTo('shubho-parinay')}
            onNextPage={() => navigateTo('envelope')}
          />
        </div>
      )}

      {/* ============================================================== */}
      {/* FLOATING BOTTOM PAGE-NAVIGATION BAR (Visible on views 2 - 9)   */}
      {/* ============================================================== */}
      {currentView !== 'envelope' && (
        <nav
          aria-label="Page Navigation"
          className="fixed bottom-2 z-40 w-full max-w-sm flex items-center justify-between px-3 py-1.5 rounded-full bg-[#3e0b0e]/95 text-[#fef08a] border border-[#fef08a]/60 shadow-[0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          {/* Previous Page Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentIndex <= 0}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bengali-sans font-bold hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>পূর্ববর্তী</span>
          </button>

          {/* Current Page Pill with Clickable TOC */}
          <button
            onClick={() => setIsTocOpen(true)}
            type="button"
            className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-xs font-bengali-sans font-bold text-[#fde047] cursor-pointer"
            title="সব পাতা দেখুন"
          >
            <span>পাতা {currentItem.num} / {VIEW_ORDER.length}</span>
            <span className="text-[10px] text-amber-200">▾</span>
          </button>

          {/* Next Page Button */}
          <button
            onClick={handleNextPage}
            disabled={currentIndex >= VIEW_ORDER.length - 1}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bengali-sans font-bold hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <span>পরবর্তী</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </nav>
      )}
    </div>
  );
};
