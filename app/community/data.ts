export type Answer = {
  user: string;
  text: string;
  time: string;
};

export type Thread = {
  slug: string;
  title: string;
  author: string;
  category: string;
  details: string;
  excerpt: string;
  updated: string;
  tags: string[];
  replies: Answer[];
  views: number;
};

export const threads: Thread[] = [
  {
    slug: "m12-civata-torku",
    title: "M12 10.9 civata torku ve yağlama",
    author: "Ayşe Yılmaz",
    category: "Tork / Bağlantı",
    details:
      "Tablo değerleriyle gerçek sıkma arasında fark var. Moment anahtarı kalibrasyonu ve yağlama seçimi torku nasıl etkiler? Kuru/yağlı değerleri nasıl ayırıyorsunuz?",
    excerpt: "Tablo ve gerçek tork farkı; moment anahtarı kalibrasyonu ve yağlama seçimi torku nasıl değiştiriyor?",
    updated: "2 saat önce",
    tags: ["tork", "civata", "yağlama"],
    views: 240,
    replies: [
      {
        user: "Kadir",
        text: "DIN tablosu yağsız değer verir, yağlı kullanıyorsan %20-25 düş. Moment anahtarını yılda bir kalibre ettir.",
        time: "1s önce",
      },
      {
        user: "Elif",
        text: "M12 10.9 için tipik ~90 Nm (kuru). Yağlıysa 65-70 Nm aralığı yeterli. Yüzeyleri temiz tut; oturma yüzeyi yağlıysa sonuç sapar.",
        time: "12s önce",
      },
      {
        user: "Selim",
        text: "Kaymalı rondela kullanıyorsan sürtünme düşer; torku biraz azalt. Turn-of-nut yöntemiyle ön yükü doğrulamak işe yarıyor.",
        time: "25s önce",
      },
    ],
  },
  {
    slug: "kaynak-sonrasi-sehim",
    title: "S235 plakada kaynak sonrası sehim",
    author: "Mehmet A.",
    category: "Kaynak / Yapı",
    details:
      "300x500x10 mm plakayı köşe kaynağı ile birleştirdikten sonra sehim oluştu; fikstürleme ve ön ısıtma önerisi olan var mı? Faro kol veya 3D tarama ile ölçüm planı nasıl hazırlanmalı?",
    excerpt: "Köşe kaynağı sonrası S235 plakada sehim: fikstürleme, ön ısıtma ve ölçüm planı önerileri arıyorum.",
    updated: "5 saat önce",
    tags: ["kaynak", "sehim", "fikstür"],
    views: 180,
    replies: [
      {
        user: "Hakan",
        text: "Simetrik puntolar + karşılıklı kaynat, sonra doldur. Ön ısı 120-150°C çelikte işe yarıyor, özellikle kalın plakada.",
        time: "10dk önce",
      },
      {
        user: "Derya",
        text: "Ters kamber verip kaynatmayı dene. Sıkı fikstür ile baskı uygula, sonra ölçümde sapmaları kaydet.",
        time: "35dk önce",
      },
    ],
  },
  {
    slug: "h8d9-yuzey-puruzluluk",
    title: "H8/d9 geçme için yüzey pürüzlülüğü",
    author: "Selin K.",
    category: "Tolerans / GD&T",
    details:
      "Ø25 delik ve mil için H8/d9 seçtim. Preslemede gevşeme olmaması için yüzey pürüzlülüğü ne olmalı? Ra aralığı öneriniz?",
    excerpt: "H8/d9 geçme için pres sıkılığını koruyacak yüzey pürüzlülüğü (Ra) aralığı nedir?",
    updated: "1 gün önce",
    tags: ["tolerans", "geçme", "yüzey"],
    views: 120,
    replies: [
      {
        user: "Elif",
        text: "Ra 1.6-3.2 µm aralığı genelde yeterli. Temiz yüzey ve çapaksızlık kritik.",
        time: "2s önce",
      },
    ],
  },
];