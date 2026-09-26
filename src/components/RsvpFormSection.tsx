import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Sparkles } from 'lucide-react';

export const RsvpFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState('');
  const [foodPreference, setFoodPreference] = useState<'veg' | 'non-veg'>('non-veg');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger celebratory small confetti
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#ffd700', '#ff69b4', '#38b000'],
    });

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* RSVP Card (exact match to video at 00:52 - 01:06) */}
      <div className="bg-[#fff9ed] rounded-2xl p-5 shadow-xl border-2 border-[#d97706]/50 text-left">
        {/* Title */}
        <h4 className="font-bengali-serif font-black text-xl text-[#7f1d1d] text-center tracking-wide mb-4">
          আপনাদের উপস্থিতিই এই আনন্দের আসল সৌন্দর্য
        </h4>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guest Name Input */}
          <div>
            <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
              আপনার নাম*
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="উদা: সুনেত্রা / Sunetra"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#d97706]/60 bg-white text-sm text-[#451a03] focus:outline-none focus:ring-2 focus:ring-[#991b1b]/40 font-bengali-sans placeholder:text-gray-400"
            />
          </div>

          {/* Attending Selection */}
          <div>
            <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1.5">
              আপনি কি সেদিন আমাদের বিয়েতে আসছেন?*
            </label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setAttending('yes')}
                className={`w-full py-2.5 px-3 rounded-xl border font-bengali-sans font-bold text-xs sm:text-sm text-left flex items-center justify-between transition-all ${
                  attending === 'yes'
                    ? 'bg-[#fef08a] border-[#b45309] text-[#78350f] shadow-xs'
                    : 'bg-white border-[#e5e7eb] text-[#6b7280]'
                }`}
              >
                <span>অবশ্যই আসবো ❤️</span>
                {attending === 'yes' && <Check className="w-4 h-4 text-[#b45309]" />}
              </button>

              <button
                type="button"
                onClick={() => setAttending('no')}
                className={`w-full py-2.5 px-3 rounded-xl border font-bengali-sans font-bold text-xs sm:text-sm text-left flex items-center justify-between transition-all ${
                  attending === 'no'
                    ? 'bg-[#fee2e2] border-[#dc2626] text-[#991b1b] shadow-xs'
                    : 'bg-white border-[#e5e7eb] text-[#6b7280]'
                }`}
              >
                <span>দুঃখিত, আসতে পারবো না</span>
                {attending === 'no' && <Check className="w-4 h-4 text-[#dc2626]" />}
              </button>
            </div>
          </div>

          {/* Guest Count Input */}
          {attending === 'yes' && (
            <div>
              <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1">
                আপনারা মোট কত জন আসছেন?
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="যেমন: ৭"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d97706]/60 bg-white text-sm text-[#451a03] focus:outline-none focus:ring-2 focus:ring-[#991b1b]/40 font-bengali-sans"
              />
            </div>
          )}

          {/* Food Preference */}
          {attending === 'yes' && (
            <div>
              <label className="block font-bengali-sans font-bold text-xs text-[#78350f] mb-1.5">
                খাবারের পছন্দ জানাবেন:*
              </label>
              <div className="space-y-2">
                <label
                  onClick={() => setFoodPreference('veg')}
                  className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer font-bengali-sans text-xs sm:text-sm font-semibold transition-all ${
                    foodPreference === 'veg'
                      ? 'bg-[#ecfdf5] border-[#10b981] text-[#065f46]'
                      : 'bg-white border-[#e5e7eb] text-[#6b7280]'
                  }`}
                >
                  <span>নিরামিষ 🌿</span>
                  <input
                    type="radio"
                    name="food"
                    checked={foodPreference === 'veg'}
                    onChange={() => setFoodPreference('veg')}
                    className="accent-[#10b981]"
                  />
                </label>

                <label
                  onClick={() => setFoodPreference('non-veg')}
                  className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer font-bengali-sans text-xs sm:text-sm font-semibold transition-all ${
                    foodPreference === 'non-veg'
                      ? 'bg-[#fef3c7] border-[#f59e0b] text-[#92400e]'
                      : 'bg-white border-[#e5e7eb] text-[#6b7280]'
                  }`}
                >
                  <span>আমিষ 🍗</span>
                  <input
                    type="radio"
                    name="food"
                    checked={foodPreference === 'non-veg'}
                    onChange={() => setFoodPreference('non-veg')}
                    className="accent-[#f59e0b]"
                  />
                </label>
              </div>
            </div>
          )}

          {/* Golden Submit RSVP Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#ffd54f] via-[#fbbf24] to-[#f59e0b] hover:from-[#fde047] hover:to-[#d97706] text-[#78350f] font-bengali-sans font-black text-sm shadow-md hover:shadow-lg active:scale-98 transition-all border border-[#b45309] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[#78350f]" />
              <span>RSVP</span>
            </button>
          </div>
        </form>

        {/* Animated "Response saved" toast (exact match to video at 01:05) */}
        {showToast && (
          <div className="mt-3 py-2 px-3 bg-[#f0fdf4] border border-[#22c55e] text-[#15803d] rounded-lg text-center font-bengali-sans font-bold text-xs animate-in fade-in duration-300 shadow-sm flex items-center justify-center gap-1.5">
            <Check className="w-4 h-4 text-[#16a34a]" />
            <span>Response saved</span>
          </div>
        )}
      </div>
    </div>
  );
};
