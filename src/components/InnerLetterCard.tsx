import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  ChevronDown,
  Sparkles,
  Share2,
  CheckCircle2,
  X,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { InvitationData } from '../types/invitation';

interface InnerLetterCardProps {
  data: InvitationData;
  onClose: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export const InnerLetterCard: React.FC<InnerLetterCardProps> = ({
  data,
  onClose,
  isMuted,
  onToggleAudio,
}) => {
  const [activeTab, setActiveTab] = useState<'invitation' | 'schedule' | 'rsvp'>('invitation');
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  // RSVP Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [wishes, setWishes] = useState('');
  const [attendingEvents, setAttendingEvents] = useState<string[]>(['bibaho', 'reception']);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleEventAttendance = (id: string) => {
    setAttendingEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpSubmitted(true);
  };

  // Calendar iCal download (.ics)
  const downloadCalendarEvent = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ghar Bandhar Chithi//Bengali Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:শুভ বিবাহ - দেবাংশী ও শিবাংশ (Wedding of Debangshi & Shibansh)',
      'DESCRIPTION:Our auspicious union wedding celebration. Royal Bengal Banquet Hall, Kolkata.',
      'LOCATION:Royal Bengal Banquet Hall, E.M. Bypass, Kolkata',
      'DTSTART:20261210T133000Z',
      'DTEND:20261210T183000Z',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'debangshi-shibansh-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ঘর বাঁধার চিঠি - দেবাংশী ও শিবাংশ',
        text: 'আমাদের শুভ পরিণয়ের সাক্ষী হতে আপনাকে জানাই সাদর আমন্ত্রণ।',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto bg-[#faf4e8] rounded-2xl shadow-2xl border-4 border-[#d4af37]/60 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-500">
      {/* Top Royal Banner with Gold Filigree */}
      <div className="bg-gradient-to-r from-[#800a0f] via-[#a81016] to-[#800a0f] text-[#fff8d6] px-4 py-3 border-b-2 border-[#d4af37] flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleAudio}
            type="button"
            className="p-1.5 rounded-full bg-[#5c0408] text-[#ffd54f] hover:bg-[#430205] transition-colors flex items-center gap-1.5 text-xs px-2.5 font-bengali-sans border border-[#ffd54f]/40"
            title={isMuted ? 'সানাই বাজান (Play Shehnai)' : 'সানাই থামান (Stop Shehnai)'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse" />}
            <span className="hidden sm:inline">{isMuted ? 'সানাই শুনুন' : 'সানাই বাজছে'}</span>
          </button>
          
          <button
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            type="button"
            className="px-2 py-1 text-xs font-semibold rounded bg-[#fff8d6]/10 hover:bg-[#fff8d6]/20 text-[#ffe082] border border-[#ffe082]/30 transition-colors"
          >
            {lang === 'bn' ? 'English' : 'বাংলা'}
          </button>
        </div>

        {/* Reseal / Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="flex items-center gap-1 text-xs font-medium bg-[#5c0408] hover:bg-[#430205] text-[#ffd54f] px-3 py-1.5 rounded-full border border-[#ffd54f]/50 transition-all hover:scale-105"
        >
          <span>{lang === 'bn' ? 'চিঠি খামে রাখুন' : 'Close Letter'}</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-[#e2cfab] bg-[#f5ecda] text-xs md:text-sm font-bengali-sans font-medium">
        <button
          onClick={() => setActiveTab('invitation')}
          className={`flex-1 py-2.5 px-2 text-center transition-all ${
            activeTab === 'invitation'
              ? 'bg-[#faf4e8] text-[#800a0f] font-bold border-b-2 border-[#800a0f] shadow-sm'
              : 'text-[#6d5138] hover:text-[#800a0f]'
          }`}
        >
          {lang === 'bn' ? '📜 নিমন্ত্রণ লিপি' : '📜 Invitation'}
        </button>
        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex-1 py-2.5 px-2 text-center transition-all ${
            activeTab === 'schedule'
              ? 'bg-[#faf4e8] text-[#800a0f] font-bold border-b-2 border-[#800a0f] shadow-sm'
              : 'text-[#6d5138] hover:text-[#800a0f]'
          }`}
        >
          {lang === 'bn' ? '🌸 অনুষ্ঠান সূচী' : '🌸 Schedule'}
        </button>
        <button
          onClick={() => setActiveTab('rsvp')}
          className={`flex-1 py-2.5 px-2 text-center transition-all ${
            activeTab === 'rsvp'
              ? 'bg-[#faf4e8] text-[#800a0f] font-bold border-b-2 border-[#800a0f] shadow-sm'
              : 'text-[#6d5138] hover:text-[#800a0f]'
          }`}
        >
          {lang === 'bn' ? '✍️ শুভকামনা ও RSVP' : '✍️ RSVP'}
        </button>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 space-y-6 text-[#42220d]">
        {activeTab === 'invitation' && (
          <div className="space-y-6 text-center">
            {/* Mangalacharan / Divine Invocation */}
            <div className="space-y-1">
              <p className="font-bengali-serif text-sm md:text-base font-bold text-[#a81016] tracking-widest">
                ॥ শ্রী শ্রী প্রজাপতয়ে নমঃ ॥
              </p>
              <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </div>

            {/* Shubho Parinay Emblem */}
            <div className="py-2">
              <span className="inline-block px-4 py-1 rounded-full bg-[#fbebc9] border border-[#d4af37]/60 text-[#800a0f] font-bengali-serif font-bold text-sm tracking-wider shadow-sm">
                {lang === 'bn' ? 'শুভ পরিণয়' : 'Wedding Ceremony'}
              </span>
            </div>

            {/* Couple Big Highlight */}
            <div className="space-y-3">
              <h2 className="font-bengali-serif font-black text-2xl md:text-3xl text-[#800a0f] tracking-wide">
                {lang === 'bn' ? data.brideNameBn : data.brideNameEn}
              </h2>
              <div className="flex items-center justify-center gap-3 text-[#d4af37]">
                <span className="w-12 h-px bg-[#d4af37]" />
                <Heart className="w-4 h-4 fill-[#a81016] text-[#a81016]" />
                <span className="w-12 h-px bg-[#d4af37]" />
              </div>
              <h2 className="font-bengali-serif font-black text-2xl md:text-3xl text-[#800a0f] tracking-wide">
                {lang === 'bn' ? data.groomNameBn : data.groomNameEn}
              </h2>
            </div>

            {/* Lineage & Blessings Description */}
            <div className="bg-[#f7efe0] p-4 rounded-xl border border-[#e5d4b5] text-xs md:text-sm leading-relaxed font-bengali-serif space-y-2 text-[#5c3a21]">
              <p>পিতা: {data.brideFatherBn} ও মাতা: {data.brideMotherBn}-র জ্যেষ্ঠা কন্যা ({data.brideAddressBn})</p>
              <p className="font-sans text-xs text-[#a81016] font-bold">— সহিত —</p>
              <p>পিতা: {data.groomFatherBn} ও মাতা: {data.groomMotherBn}-র কনিষ্ঠ পুত্র ({data.groomAddressBn})</p>
            </div>

            {/* Heartfelt Invitation Words */}
            <p className="font-bengali-serif text-sm md:text-base leading-relaxed text-[#4a2e18] px-2 italic">
              {lang === 'bn' ? (
                <>
                  পরম করুণাময়ের অশেষ কৃপায় আগামী{' '}
                  <strong className="text-[#800a0f] font-bold">{data.bengaliYearDate}</strong>{' '}
                  ({data.mainDateBn}), আমাদের শুভ পরিণয় সুসম্পন্ন হতে চলেছে।
                  উক্ত শুভলগ্নে আপনার ও আপনার পরিবারের উপস্থিতি ও আশীর্বাদ একান্ত কাম্য।
                </>
              ) : (
                data.invitationBottomQuoteEn
              )}
            </p>

            {/* Date & Muhurtham Highlight Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#fffdf8] p-3.5 rounded-xl border border-[#d4af37]/50 shadow-sm flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#fde9cf] flex items-center justify-center text-[#800a0f] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#8b6535] font-semibold">
                    {lang === 'bn' ? 'তারিখ ও দিন' : 'Date & Day'}
                  </p>
                  <p className="font-bengali-sans font-bold text-sm text-[#800a0f]">
                    {lang === 'bn' ? data.mainDateBn : data.mainDateEn}
                  </p>
                  <p className="text-[11px] text-[#6d5138]">{data.bengaliYearDate}</p>
                </div>
              </div>

              <div className="bg-[#fffdf8] p-3.5 rounded-xl border border-[#d4af37]/50 shadow-sm flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#fde9cf] flex items-center justify-center text-[#800a0f] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#8b6535] font-semibold">
                    {lang === 'bn' ? 'শুভলগ্ন ও সময়' : 'Auspicious Muhurtham'}
                  </p>
                  <p className="font-bengali-sans font-bold text-sm text-[#800a0f]">
                    সন্ধ্যা ৭:০০ টা (শুভলগ্ন)
                  </p>
                  <p className="text-[11px] text-[#6d5138]">রজনী যোগে সাতপাক</p>
                </div>
              </div>
            </div>

            {/* Venue Box with Actions */}
            <div className="bg-[#fffdf8] p-4 rounded-xl border-2 border-[#d4af37]/50 shadow-sm text-left space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#a81016] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b6535] font-semibold">
                    {lang === 'bn' ? 'বিবাহ বাসর (Venue)' : 'Wedding Venue'}
                  </p>
                  <h4 className="font-bengali-serif font-bold text-base text-[#800a0f]">
                    {lang === 'bn' ? data.venueNameBn : data.venueNameEn}
                  </h4>
                  <p className="text-xs text-[#5c3a21] leading-relaxed mt-0.5">
                    {lang === 'bn' ? data.venueAddressBn : data.venueAddressEn}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={data.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#800a0f] hover:bg-[#68080c] text-[#fff8d6] rounded-lg text-xs font-medium transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশনা' : 'View on Google Maps'}</span>
                </a>
                <button
                  onClick={downloadCalendarEvent}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f5ecda] hover:bg-[#ebdcc0] text-[#6d431c] border border-[#d4af37] rounded-lg text-xs font-medium transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'ক্যালেন্ডারে সেভ করুন' : 'Add to Calendar'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="text-center pb-2">
              <h3 className="font-bengali-serif font-bold text-lg text-[#800a0f]">
                {lang === 'bn' ? 'মাঙ্গলিক অনুষ্ঠান সূচী' : 'Wedding Rituals & Celebrations'}
              </h3>
              <p className="text-xs text-[#735338]">
                {lang === 'bn' ? 'প্রতিটি শুভ মুহূর্তে আপনাদের আন্তরিক উপস্থিতি প্রার্থনীয়' : 'Your gracious presence is requested at every celebration'}
              </p>
            </div>

            <div className="space-y-3">
              {data.events.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-[#fffdf8] p-3.5 rounded-xl border border-[#e2cfab] hover:border-[#d4af37] transition-all shadow-sm flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#fde9cf] text-[#800a0f] flex items-center justify-center font-bold text-sm shrink-0 border border-[#f5b041]">
                    {evt.iconType === 'aiburobhat' ? '🍲' : evt.iconType === 'haldi' ? '✨' : evt.iconType === 'wedding' ? '💍' : '🥂'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bengali-serif font-bold text-sm md:text-base text-[#800a0f]">
                        {lang === 'bn' ? evt.titleBn : evt.titleEn}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#8b6535] bg-[#fbedd5] px-2 py-0.5 rounded">
                        {lang === 'bn' ? evt.timeBn : evt.timeEn}
                      </span>
                    </div>
                    <p className="text-xs text-[#5c3a21] font-medium mt-0.5">
                      📅 {lang === 'bn' ? evt.dateBn : evt.dateEn}
                    </p>
                    <p className="text-xs text-[#735338] mt-0.5">
                      📍 {lang === 'bn' ? evt.venueBn : evt.venueEn}
                    </p>
                    {evt.taglineBn && (
                      <p className="text-[11px] text-[#9c7144] italic mt-1 bg-[#faf4e8] p-1.5 rounded">
                        {lang === 'bn' ? evt.taglineBn : evt.taglineEn}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RSVP Tab */}
        {activeTab === 'rsvp' && (
          <div className="space-y-4">
            <div className="text-center pb-1">
              <h3 className="font-bengali-serif font-bold text-lg text-[#800a0f]">
                {lang === 'bn' ? 'উপস্থিতি নিশ্চিতকরণ ও শুভকামনা' : 'RSVP & Warm Wishes'}
              </h3>
              <p className="text-xs text-[#735338]">
                {lang === 'bn' ? 'অনুগ্রহ করে আপনার উপস্থিতি জানিয়ে আমাদের আনন্দিত করুন' : 'Kindly confirm your attendance to help us prepare'}
              </p>
            </div>

            {rsvpSubmitted ? (
              <div className="bg-[#eef7ec] border-2 border-[#81c784] p-5 rounded-xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#2e7d32] mx-auto" />
                <h4 className="font-bengali-serif font-bold text-lg text-[#1b5e20]">
                  {lang === 'bn' ? 'ধন্যবাদ! আপনার বার্তা গৃহীত হয়েছে।' : 'Thank You! Your RSVP is confirmed.'}
                </h4>
                <p className="text-xs text-[#2e7d32] leading-relaxed">
                  {lang === 'bn'
                    ? `প্রিয় ${guestName}, আপনার উপস্থিতি আমাদের এই শুভক্ষণকে আরও আনন্দময় করে তুলবে। আপনার সাথে দেখা হওয়ার অপেক্ষায় রইলাম!`
                    : `Dear ${guestName}, your attendance makes this celebration complete. Looking forward to welcoming you!`}
                </p>
                <button
                  onClick={() => setRsvpSubmitted(false)}
                  type="button"
                  className="text-xs text-[#2e7d32] underline hover:text-[#1b5e20] pt-2"
                >
                  {lang === 'bn' ? 'অন্য কোনো এন্ট্রি করতে চান?' : 'Submit another response'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-3 bg-[#fffdf8] p-4 rounded-xl border border-[#e2cfab] shadow-sm">
                <div>
                  <label className="block text-xs font-semibold text-[#5c3a21] mb-1">
                    {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={lang === 'bn' ? 'উদা: রাহুল বন্দ্যোপাধ্যায়' : 'e.g. Rahul Banerjee'}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#d4af37]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#800a0f]/40"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5c3a21] mb-1">
                      {lang === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+91..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#d4af37]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#800a0f]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5c3a21] mb-1">
                      {lang === 'bn' ? 'সদস্য সংখ্যা' : 'Guests Count'}
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#d4af37]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#800a0f]/40"
                    >
                      <option value="1">১ জন (1 person)</option>
                      <option value="2">২ জন (2 persons)</option>
                      <option value="3">৩ জন (3 persons)</option>
                      <option value="4">৪ জন (4 persons)</option>
                      <option value="5+">৫+ জন পরিবারসহ (5+ family)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c3a21] mb-1.5">
                    {lang === 'bn' ? 'কোন কোন অনুষ্ঠানে উপস্থিত থাকছেন?' : 'Which events will you attend?'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {data.events.map((evt) => (
                      <label
                        key={evt.id}
                        className={`flex items-center gap-1.5 p-2 rounded-lg border cursor-pointer transition-all ${
                          attendingEvents.includes(evt.id)
                            ? 'bg-[#fbebc9] border-[#800a0f] text-[#800a0f] font-semibold'
                            : 'bg-white border-[#e2cfab] text-[#735338]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={attendingEvents.includes(evt.id)}
                          onChange={() => toggleEventAttendance(evt.id)}
                          className="rounded text-[#800a0f] focus:ring-[#800a0f]"
                        />
                        <span className="truncate">{lang === 'bn' ? evt.titleBn : evt.titleEn}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c3a21] mb-1">
                    {lang === 'bn' ? 'নবদম্পতির উদ্দেশ্যে আশীর্বাদ ও শুভেচ্ছা' : 'Blessings & Wishes for the Couple'}
                  </label>
                  <textarea
                    rows={2}
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    placeholder={lang === 'bn' ? 'আপনাদের ভবিষ্যৎ জীবন আনন্দময় হোক...' : 'Wishing you a lifetime of joy and togetherness...'}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#d4af37]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#800a0f]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#800a0f] hover:bg-[#68080c] text-[#fff8d6] font-bengali-sans font-bold text-xs md:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#ffd54f]" />
                  <span>{lang === 'bn' ? 'উপস্থিতি নিশ্চিত করুন (Submit RSVP)' : 'Confirm RSVP'}</span>
                </button>
              </form>
            )}

            <div className="text-center text-[11px] text-[#8b6535] pt-1">
              জরুরি যোগাযোগের জন্য: <strong className="text-[#800a0f]">{data.rsvpContact}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Action Bar */}
      <div className="bg-[#f5ecda] px-4 py-2.5 border-t border-[#e2cfab] flex items-center justify-between text-xs">
        <button
          onClick={handleShare}
          type="button"
          className="flex items-center gap-1.5 text-[#800a0f] font-semibold hover:underline"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copiedLink ? 'লিঙ্ক কপি হয়েছে!' : (lang === 'bn' ? 'শেয়ার করুন' : 'Share Card')}</span>
        </button>

        <p className="text-[11px] text-[#8b6535] font-bengali-serif">
          {lang === 'bn' ? '॥ শুভমস্তু ॥' : 'Best Wishes'}
        </p>
      </div>
    </div>
  );
};
