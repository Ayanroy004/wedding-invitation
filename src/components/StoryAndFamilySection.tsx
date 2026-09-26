import React from 'react';
import { Sparkles } from 'lucide-react';

interface StoryAndFamilyProps {
  onOpenStory: () => void;
}

export const StoryAndFamilySection: React.FC<StoryAndFamilyProps> = ({ onOpenStory }) => {
  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* Trigger Banner (exact match to video at 00:17) */}
      <div className="bg-gradient-to-b from-[#b45309] to-[#78350f] rounded-2xl p-5 shadow-xl border-2 border-[#fde047]/60 text-white">
        <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-snug">
          আমাদের গল্প ও
        </h3>
        <h3 className="font-bengali-serif font-black text-xl sm:text-2xl text-[#fef08a] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-snug mb-3">
          পরিচয় পর্ব জানতে এখানে
        </h3>

        {/* Ornate "ক্লিক করুন" Button */}
        <button
          onClick={onOpenStory}
          type="button"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fffbeb] via-[#fef08a] to-[#fffbeb] text-[#78350f] font-bengali-sans font-black text-sm shadow-lg hover:scale-105 active:scale-95 transition-all border border-[#b45309] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#b45309] group-hover:rotate-12 transition-transform" />
          <span>ক্লিক করুন</span>
          <span className="font-mono text-xs">☛</span>
        </button>
      </div>
    </div>
  );
};
