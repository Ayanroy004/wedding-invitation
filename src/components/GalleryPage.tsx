import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, X, Heart, Sparkles, ZoomIn } from 'lucide-react';

interface GalleryPageProps {
  onBack: () => void;
  onNextPage: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBack, onNextPage }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photos = [
    {
      id: 'photo1',
      src: '/src/assets/images/couple_portrait_1790270750048.jpg',
      title: 'আমাদের প্রথম শুভদৃষ্টি',
      caption: 'যেখানে দুটি মন এক হয়েছিল...',
    },
    {
      id: 'photo2',
      src: '/src/assets/images/bengali_rituals_1790270771686.jpg',
      title: 'উৎসবের রঙিন আলোয়',
      caption: 'প্রতিটি উৎসবে তুমি ছিলে পাশে',
    },
    {
      id: 'photo3',
      src: '/src/assets/images/frangipani_bouquet_1790262826449.jpg',
      title: 'ফুলের সাজে প্রেম',
      caption: 'শুভক্ষণের মিষ্টি গন্ধ',
    },
    {
      id: 'photo4',
      src: '/src/assets/images/mukut_topor_1790270785898.jpg',
      title: 'মুকুট ও টোপরের সাজ',
      caption: 'বাঙালি ঐতিহ্যের পবিত্র মেলবন্ধন',
    },
  ];

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
          ॥ আমাদের কিছু মুহূর্ত ॥
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
          <div className="flex items-center justify-center gap-1 text-[#d97706] mb-1">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            <span className="font-bengali-serif font-bold text-xs uppercase tracking-wider text-[#991b1b]">
              ফটো অ্যালবাম
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <h3 className="font-bengali-serif font-black text-xl text-[#7f1d1d]">
            একে অপরের সাথে কাটানো মুহূর্ত
          </h3>
          <p className="font-bengali-sans text-xs text-[#854d0e] mt-1">
            ছবিতে ট্যাপ করে বড় করে দেখুন
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 gap-3 bg-[#fff9ed] p-3.5 rounded-2xl border-2 border-[#d97706]/40 shadow-md">
          {photos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item.src)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-[#f59e0b]/50 shadow-xs hover:scale-105 transition-all ${
                idx === 0 ? 'col-span-2 h-48' : 'h-36'
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:brightness-105 transition-all"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
                <p className="font-bengali-serif font-bold text-xs sm:text-sm text-white drop-shadow-md">
                  {item.title}
                </p>
                <p className="font-bengali-sans text-[10px] text-amber-200 line-clamp-1">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-2 right-2 p-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Romantic Quote */}
        <div className="bg-[#fef3c7] p-3.5 rounded-xl border border-amber-300 text-center space-y-1">
          <Heart className="w-5 h-5 text-red-600 fill-red-600 mx-auto animate-pulse" />
          <p className="font-bengali-serif text-xs text-[#78350f] font-semibold italic">
            “কিছু গল্প ভাষায় প্রকাশ করা যায় না, শুধু অনুভবে আর চোখে চোখে ধরা থাকে...”
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm w-full bg-[#faf3e0] rounded-2xl overflow-hidden border-2 border-[#d97706] shadow-2xl p-2"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              type="button"
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedPhoto}
              alt="Enlarged Couple Memory"
              className="w-full h-auto rounded-xl object-contain max-h-[70vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
