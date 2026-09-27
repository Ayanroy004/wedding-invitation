import React, { useState } from "react";
import { Heart, X } from "lucide-react";

import couplePortrait from "../assets/images/couple_portrait_1790270750048.jpg";
import bengaliRituals from "../assets/images/bengali_rituals_1790270771686.jpg";
import frangipaniBouquet from "../assets/images/frangipani_bouquet_1790262826449.jpg";
import mukutTopor from "../assets/images/mukut_topor_1790270785898.jpg";

export const CoupleMemoriesGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photos = [
    {
      id: "photo1",
      src: couplePortrait,
      title: "আমাদের প্রথম শুভদৃষ্টি",
      caption: "যেখানে দুটি মন এক হয়েছিল...",
    },
    {
      id: "photo2",
      src: bengaliRituals,
      title: "উৎসবের রঙিন আলোয়",
      caption: "প্রতিটি উৎসবে তুমি ছিলে পাশে",
    },
    {
      id: "photo3",
      src: frangipaniBouquet,
      title: "ফুলের সাজে প্রেম",
      caption: "শুভক্ষণের মিষ্টি গন্ধ",
    },
    {
      id: "photo4",
      src: mukutTopor,
      title: "মুকুট ও টোপরের সাজ",
      caption: "বাঙালি ঐতিহ্যের পবিত্র মেলবন্ধন",
    },
  ];

  return (
    <div className="relative w-full max-w-[360px] mx-auto text-center my-6">
      {/* Title */}
      <div className="mb-4">
        <h4 className="font-bengali-serif font-black text-xl text-[#7f1d1d] tracking-wide">
          ॥ আমাদের কিছু মুহূর্ত ॥
        </h4>

        <p className="font-bengali-sans font-medium text-xs sm:text-sm text-[#854d0e] mt-1">
          একে অপরের সাথে কাটানো কিছু সেরা মুহূর্ত
        </p>
      </div>

      {/* Grid of Couple Photos */}
      <div className="grid grid-cols-2 gap-2.5 bg-[#fff9ed] p-3 rounded-2xl border-2 border-[#d97706]/40 shadow-md">
        {photos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item.src)}
            className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#f59e0b]/50 shadow-xs hover:scale-105 transition-all ${
              idx === 0 ? "col-span-2 h-44" : "h-32"
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:brightness-105 transition-all"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-left">
              <div>
                <p className="text-white text-xs font-bold font-bengali-serif leading-tight">
                  {item.title}
                </p>

                <p className="text-amber-200 text-[10px] font-bengali-sans">
                  {item.caption}
                </p>
              </div>
            </div>

            {/* Heart badge */}
            <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white">
              <Heart className="w-3 h-3 text-[#f87171] fill-[#f87171]" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div
            className="relative max-w-lg w-full max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[#fde047]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="স্মৃতি"
              className="w-full h-full object-contain bg-black"
            />

            <button
              onClick={() => setSelectedPhoto(null)}
              type="button"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
