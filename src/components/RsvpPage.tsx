import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Check, Sparkles, Send, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RsvpPageProps {
  onBack: () => void;
  onNextPage: () => void;
}

export const RsvpPage: React.FC<RsvpPageProps> = ({ onBack, onNextPage }) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState('1');
  const [foodPreference, setFoodPreference] = useState<'veg' | 'non-veg'>('non-veg');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ffd700', '#ff69b4', '#38b000', '#dc2626'],
    });

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
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
          <span>ফিরে যান</span>
        </button>

        <span className="font-bengali-serif font-black text-sm text-[#fde047] drop-shadow-xs">
          উপস্থিতি ও আশীর্বাদ (RSVP)
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
      <div className="flex-1 bg-[#faf3e0] p-4 space-y-5 overflow-y-auto">
        <div className="text-center">
          <h4 className="font-bengali-serif font-black text-xl text-[#7f1d1d] leading-snug">
            আপনাদের উপস্থিতিই এই আনন্দের আসল সৌন্দর্য
          </h4>
          <p className="font-bengali-sans text-xs text-[#854d0e] mt-1">
            অনুগ্রহ করে আপনার উপস্থিতি নিশ্চিত করুন
          </p>
        </div>

        {/* RSVP Card & Form */}
        <div className="bg-[#fff9ed] rounded-2xl p-4.5 shadow-lg border-2 border-[#d97706]/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Guest Name Input */}
            <div>
              <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
                আপনার শুভ নাম*
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="উদা: সুনেত্রা ব্যানার্জী"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d97706]/60 bg-white text-sm text-[#451a03] focus:outline-none focus:ring-2 focus:ring-[#991b1b]/40 font-bengali-sans placeholder:text-gray-400"
              />
            </div>

            {/* Attending Selection */}
            <div>
              <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1.5">
                আপনি কি সেদিন আমাদের বিয়েতে উপস্থিত থাকছেন?*
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#d97706]/40 cursor-pointer hover:bg-amber-50">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={attending === 'yes'}
                    onChange={() => setAttending('yes')}
                    className="accent-[#991b1b] w-4 h-4"
                  />
                  <span className="font-bengali-sans font-semibold text-xs sm:text-sm text-[#5c2a16]">
                    হ্যাঁ, আনন্দের সাথে অংশ নেব
                  </span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#d97706]/40 cursor-pointer hover:bg-amber-50">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === 'no'}
                    onChange={() => setAttending('no')}
                    className="accent-[#991b1b] w-4 h-4"
                  />
                  <span className="font-bengali-sans font-semibold text-xs sm:text-sm text-[#5c2a16]">
                    দুঃখিত, উপস্থিত থাকতে পারব না
                  </span>
                </label>
              </div>
            </div>

            {attending === 'yes' && (
              <>
                {/* Guest Count */}
                <div>
                  <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
                    মোট কতজন আসছেন?
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d97706]/60 bg-white text-sm text-[#451a03] focus:outline-none focus:ring-2 focus:ring-[#991b1b]/40 font-bengali-sans"
                  >
                    <option value="1">১ জন</option>
                    <option value="2">২ জন</option>
                    <option value="3">৩ জন</option>
                    <option value="4+">৪+ জন (সপরিবারে)</option>
                  </select>
                </div>

                {/* Food Preference */}
                <div>
                  <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
                    ভোজের পছন্দ:
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setFoodPreference('non-veg')}
                      className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bengali-sans font-bold cursor-pointer transition-all ${
                        foodPreference === 'non-veg'
                          ? 'bg-[#991b1b] text-[#fef08a] border-[#7f1d1d] shadow-sm'
                          : 'bg-white text-[#78350f] border-[#d97706]/40'
                      }`}
                    >
                      আমিষ (Non-Veg) 🐟
                    </button>
                    <button
                      type="button"
                      onClick={() => setFoodPreference('veg')}
                      className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bengali-sans font-bold cursor-pointer transition-all ${
                        foodPreference === 'veg'
                          ? 'bg-[#15803d] text-[#fef08a] border-[#166534] shadow-sm'
                          : 'bg-white text-[#78350f] border-[#d97706]/40'
                      }`}
                    >
                      নিরামিষ (Pure Veg) 🥦
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Blessing Message */}
            <div>
              <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
                নবদম্পতির উদ্দেশ্যে শুভকামনা (ঐচ্ছিক):
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="অনেক অনেক শুভেচ্ছা ও ভালোবাসা..."
                rows={2}
                className="w-full px-3.5 py-2 rounded-xl border border-[#d97706]/60 bg-white text-xs text-[#451a03] focus:outline-none focus:ring-2 focus:ring-[#991b1b]/40 font-bengali-sans placeholder:text-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] hover:brightness-110 active:scale-98 transition-all text-[#fef08a] font-bengali-sans font-black text-sm flex items-center justify-center gap-2 shadow-lg border border-[#fef08a]/60 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>RSVP নিশ্চিত করুন</span>
            </button>
          </form>

          {/* Toast Notification */}
          {showToast && (
            <div className="mt-3 p-3 rounded-xl bg-[#ecfdf5] border border-[#10b981] flex items-center gap-2.5 animate-in fade-in duration-300">
              <div className="w-7 h-7 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bengali-sans font-bold text-xs text-[#065f46]">
                  ধন্যবাদ, আপনার উপস্থিতি নিশ্চিত করা হয়েছে!
                </p>
                <p className="font-bengali-sans text-[11px] text-[#047857]">
                  বিয়ের অনুষ্ঠানে আপনার আগমন প্রতীক্ষায় রইলাম।
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Auspicious Blessing Quote */}
        <div className="py-2 text-center">
          <Heart className="w-4 h-4 text-red-600 fill-red-600 mx-auto mb-1 animate-pulse" />
          <p className="font-bengali-serif text-xs text-[#800a0f] font-bold tracking-widest">
            ॥ শ্রী শ্রী প্রজাপতয়ে নমঃ ॥
          </p>
        </div>
      </div>
    </div>
  );
};
