import React, { useState } from 'react';
import { X, Check, RotateCcw } from 'lucide-react';
import { InvitationData, DEFAULT_INVITATION_DATA } from '../types/invitation';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: InvitationData;
  onSave: (newData: InvitationData) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
}) => {
  const [formData, setFormData] = useState<InvitationData>(data);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_INVITATION_DATA);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#fcf8f0] rounded-2xl w-full max-w-lg shadow-2xl border-2 border-[#d4af37] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#800a0f] text-[#fff8d6] px-5 py-3.5 flex items-center justify-between border-b border-[#d4af37]">
          <div>
            <h3 className="font-bengali-serif font-bold text-base text-[#ffd54f]">
              আমন্ত্রণপত্র সম্পাদনা (Customize Details)
            </h3>
            <p className="text-[11px] text-[#ffecb3]">
              নাম, তারিখ ও অনুষ্ঠান পরিবর্তন করুন
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="text-[#ffecb3] hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#5c3a21] mb-1">
                কন্যার নাম (বাংলায়)
              </label>
              <input
                type="text"
                value={formData.brideNameBn}
                onChange={(e) => setFormData({ ...formData, brideNameBn: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#5c3a21] mb-1">
                বরের নাম (বাংলায়)
              </label>
              <input
                type="text"
                value={formData.groomNameBn}
                onChange={(e) => setFormData({ ...formData, groomNameBn: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              খামের উপরের নাম (Envelope Title)
            </label>
            <input
              type="text"
              value={formData.envelopeHeadingBn}
              onChange={(e) => setFormData({ ...formData, envelopeHeadingBn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#5c3a21] mb-1">
                ইংরেজি তারিখ
              </label>
              <input
                type="text"
                value={formData.mainDateBn}
                onChange={(e) => setFormData({ ...formData, mainDateBn: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#5c3a21] mb-1">
                বাংলা সাল ও তারিখ
              </label>
              <input
                type="text"
                value={formData.bengaliYearDate}
                onChange={(e) => setFormData({ ...formData, bengaliYearDate: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              কন্যার পিতা-মাতার নাম ও নিবাস
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={formData.brideFatherBn}
                onChange={(e) => setFormData({ ...formData, brideFatherBn: e.target.value })}
                placeholder="পিতার নাম"
                className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white"
              />
              <input
                type="text"
                value={formData.brideMotherBn}
                onChange={(e) => setFormData({ ...formData, brideMotherBn: e.target.value })}
                placeholder="মাতার নাম"
                className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
            <input
              type="text"
              value={formData.brideAddressBn}
              onChange={(e) => setFormData({ ...formData, brideAddressBn: e.target.value })}
              placeholder="নিবাস (উদা: দক্ষিণ দিনাজপুর)"
              className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              বরের পিতা-মাতার নাম ও নিবাস
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={formData.groomFatherBn}
                onChange={(e) => setFormData({ ...formData, groomFatherBn: e.target.value })}
                placeholder="পিতার নাম"
                className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white"
              />
              <input
                type="text"
                value={formData.groomMotherBn}
                onChange={(e) => setFormData({ ...formData, groomMotherBn: e.target.value })}
                placeholder="মাতার নাম"
                className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white"
              />
            </div>
            <input
              type="text"
              value={formData.groomAddressBn}
              onChange={(e) => setFormData({ ...formData, groomAddressBn: e.target.value })}
              placeholder="নিবাস (উদা: কলকাতা)"
              className="w-full px-3 py-1.5 rounded-lg border border-[#d4af37]/60 bg-white mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              বিবাহের স্থান (Venue Name)
            </label>
            <input
              type="text"
              value={formData.venueNameBn}
              onChange={(e) => setFormData({ ...formData, venueNameBn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              ঠিকানা (Venue Address)
            </label>
            <input
              type="text"
              value={formData.venueAddressBn}
              onChange={(e) => setFormData({ ...formData, venueAddressBn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#5c3a21] mb-1">
              যোগাযোগ / RSVP ফোন
            </label>
            <input
              type="text"
              value={formData.rsvpContact}
              onChange={(e) => setFormData({ ...formData, rsvpContact: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#d4af37]/60 bg-white"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-[#800a0f] hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>পূর্বাবস্থায় ফেরান (Reset)</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg border border-[#c4a97d] text-[#6d5138] hover:bg-[#eee1cb]"
              >
                বাতিল
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#800a0f] hover:bg-[#68080c] text-[#ffd54f] font-semibold rounded-lg shadow-sm flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>সংরক্ষণ করুন</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
