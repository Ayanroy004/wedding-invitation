export interface WeddingEvent {
  id: string;
  titleBn: string;
  titleEn: string;
  dateBn: string;
  dateEn: string;
  timeBn: string;
  timeEn: string;
  venueBn: string;
  venueEn: string;
  taglineBn?: string;
  taglineEn?: string;
  iconType: 'aiburobhat' | 'haldi' | 'wedding' | 'reception';
  mapQuery?: string;
}

export interface InvitationData {
  brideNameBn: string;
  brideNameEn: string;
  brideFatherBn: string;
  brideMotherBn: string;
  brideAddressBn: string;
  groomNameBn: string;
  groomNameEn: string;
  groomFatherBn: string;
  groomMotherBn: string;
  groomAddressBn: string;
  envelopeHeadingBn: string;
  envelopeTitleBn: string;
  envelopeSubtitleBn: string;
  invitationBottomQuoteBn: string;
  invitationBottomQuoteEn: string;
  mainDateBn: string;
  mainDateEn: string;
  bengaliYearDate: string;
  weddingDateIso: string;
  venueNameBn: string;
  venueNameEn: string;
  venueGateBn: string;
  venueAddressBn: string;
  venueAddressEn: string;
  mapsUrl: string;
  rsvpContact: string;
  storyHeadingBn: string;
  storyQuoteBn: string;
  storyParagraph1Bn: string;
  storyParagraph2Bn: string;
  storyParagraph3Bn: string;
  events: WeddingEvent[];
}

export const DEFAULT_INVITATION_DATA: InvitationData = {
  brideNameBn: 'দেবাংশী',
  brideNameEn: 'Debangshi',
  brideFatherBn: 'শ্রী প্রকাশ ঘোষ',
  brideMotherBn: 'শ্রীমতী শিউলি ঘোষ',
  brideAddressBn: 'দক্ষিণ দিনাজপুর',
  groomNameBn: 'শিবাংশ',
  groomNameEn: 'Shibansh',
  groomFatherBn: 'শ্রী স্বপন দত্ত',
  groomMotherBn: 'শ্রীমতী টুকু দত্ত',
  groomAddressBn: 'কলকাতা',
  envelopeHeadingBn: 'দেবাংশী ও শিবাংশ-র',
  envelopeTitleBn: 'ঘর বাঁধার',
  envelopeSubtitleBn: 'চিঠি',
  invitationBottomQuoteBn: 'আমাদের শুভক্ষণের সাক্ষী হতে\nআপনাকে জানাই সাদর আমন্ত্রণ',
  invitationBottomQuoteEn: 'We cordially invite you to witness our auspicious union and shower your blessings.',
  mainDateBn: '২৩শে নভেম্বর, ২০২৬',
  mainDateEn: 'November 23, 2026',
  bengaliYearDate: '৭ই অগ্রহায়ণ, ১৪৩৩',
  weddingDateIso: '2026-11-23T19:00:00',
  venueNameBn: 'রায় বাড়ি',
  venueNameEn: 'Roy Bari Events',
  venueGateBn: 'গেট ১, ১৯২D',
  venueAddressBn: 'গেট ১, ১৯২D, নেতাজি সুভাষ চন্দ্র বসু RD, নেতাজি নগর, কলকাতা, পশ্চিমবঙ্গ ৭০০০৪০',
  venueAddressEn: 'Gate 1, 192D, Netaji Subhash Chandra Bose Rd, Netaji Nagar, Kolkata, West Bengal 700040',
  mapsUrl: 'https://maps.google.com/?q=Roy+Bari+Events+Gate+No+1+Netaji+Nagar+Kolkata',
  rsvpContact: '+91 98301 23456 / +91 98312 67890',
  storyHeadingBn: 'আমাদের গল্প ও পরিচয় পর্ব',
  storyQuoteBn: 'দেখতে দেখতে পথচলাটা হয়ে গেল পথ, আর সেই পথের সবচেয়ে সুন্দর অধ্যায়—আমরা। ❤️',
  storyParagraph1Bn: 'পাঁচ বছর আগে, এই শহরেরই কোনো এক চেনা-অচেনা পথে শুরু হয়েছিল আমাদের গল্প। প্রথমে ছিল পরিচয়, তারপর বন্ধুত্ব—আর কখন যে সেই বন্ধুত্ব নিঃশব্দে ভালোবাসায় বদলে গেল, তা আমরা নিজেরাও বুঝতে পারিনি।',
  storyParagraph2Bn: 'এই পাঁচ বছরে এসেছে কতখানি হাসি, অভিমান, ছোট ছোট ঝগড়া, অসংখ্য স্মৃতি আর একে অপরের হাত ধরে পার করে দেওয়া দীর্ঘ পথ। সময়ের সঙ্গে সঙ্গে আমরা বুঝেছি, ভালোবাসা শুধু সুন্দর মুহূর্তে ভাগ করে নেওয়া নয়—বরং কঠিন সময়েও একে অপরের পাশে থেকে যাওয়ার নাম।',
  storyParagraph3Bn: 'আজ সেই পাঁচ বছরের পথচলা পেরিয়ে, আমরা প্রস্তুত আমাদের জীবনের সবচেয়ে সুন্দর অধ্যায়টি একসাথে শুরু করতে। ২৩ নভেম্বর, ২০২৬ — আমাদের ভালোবাসার গল্প এবার পা রাখতে চলেছে নতুন এক ঠিকানায়। সেদিন থেকে শুরু হবে শুধু \'দুজনের পথ\' নয়, আমাদের পুরো জীবনটাই হয়ে এক সাথে পথচলা। ❤️',
  events: [
    {
      id: 'aiburobhat',
      titleBn: 'আইবুড়ো ভাত পর্ব',
      titleEn: 'Aiburobhat Ceremony',
      dateBn: '২১শে নভেম্বর, ২০২৬',
      dateEn: 'November 21, 2026',
      timeBn: 'শনিবার দুপুরবেলা',
      timeEn: 'Saturday Afternoon',
      venueBn: 'নিজ বাসস্থান',
      venueEn: 'Own Residence',
      taglineBn: 'আশীর্বাদী ঐতিহ্যবাহী ভোজ ও পারিবারিক মিলন',
      taglineEn: 'Traditional feast and auspicious pre-wedding blessings',
      iconType: 'aiburobhat',
      mapQuery: 'Netaji+Nagar+Kolkata',
    },
    {
      id: 'gaye-holud',
      titleBn: 'গায়ে হলুদ',
      titleEn: 'Gaye Holud (Haldi)',
      dateBn: '২২শে নভেম্বর, ২০২৬',
      dateEn: 'November 22, 2026',
      timeBn: 'রবিবার সকালবেলা',
      timeEn: 'Sunday Morning',
      venueBn: 'নিজ বাসভবন',
      venueEn: 'Family Residence',
      taglineBn: 'হলুদ রঙের ছোঁয়ায় নব জীবনের মিষ্টি বার্তা',
      taglineEn: 'Auspicious turmeric ceremony filled with love and laughter',
      iconType: 'haldi',
      mapQuery: 'Netaji+Nagar+Kolkata',
    },
    {
      id: 'bibaho',
      titleBn: 'শুভ পরিণয়',
      titleEn: 'Wedding Ceremony',
      dateBn: '২৩শে নভেম্বর, ২০২৬',
      dateEn: 'November 23, 2026',
      timeBn: 'সন্ধ্যা ৭:০০ টা (শুভলগ্ন)',
      timeEn: '7:00 PM (Auspicious Muhurtham)',
      venueBn: 'রায় বাড়ি, নেতাজি নগর, কলকাতা',
      venueEn: 'Roy Bari, Netaji Nagar, Kolkata',
      taglineBn: 'সাতপাকে বাঁধা, শুভদৃষ্টি ও মালাবদলের মহালগ্ন',
      taglineEn: 'Sacred wedding rituals, Saat Paak and Sindoor Daan',
      iconType: 'wedding',
      mapQuery: 'Roy+Bari+Events+Gate+No+1+Netaji+Nagar+Kolkata',
    },
  ],
};
