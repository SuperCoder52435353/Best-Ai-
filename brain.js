// brain.js - Expert AI miyasi (by Abduraxmon)

function getAIResponse(input) {
  const q = input.toLowerCase();

  // SALOMLASHUV
  if (q.includes("salom") || q.includes("assalomu alaykum")) {
    return "Salom! Men Expert AI. Sizga qanday yordam bera olaman?";
  }

  // HTML
  if (q.includes("html") && q.includes("nima")) {
    return "HTML (HyperText Markup Language) - veb sahifalarni tuzish uchun ishlatiladigan belgilash tili.";
  }

  // CSS
  if (q.includes("css") && q.includes("nima")) {
    return "CSS - Cascading Style Sheets, veb sahifalarga dizayn va ko‘rinish beradi.";
  }

  // JAVASCRIPT
  if (q.includes("javascript") && q.includes("nima")) {
    return "JavaScript - veb sahifalarga interaktivlik qo‘shish uchun dasturlash tili.";

  // MATEMATIKA - MISOLLAR
  } else if (q.includes("2x+4=10")) {
    return "Bu tenglamani yechamiz: 2x+4=10 → 2x=6 → x=3.";
  } else if (q.includes("x^2 - 4x + 4 = 0")) {
    return "Bu kvadrat tenglama: x² - 4x + 4 = 0 → (x - 2)² = 0 → x = 2.";

  // INGLIZ TILI TARJIMA
  } else if (q.includes("hello") || q.includes("salom inglizcha")) {
    return "Hello - bu 'Salom' degani ingliz tilida.";
  } else if (q.includes("thank you")) {
    return "Thank you - bu 'Rahmat' degani.";
  }

  // MOTIVATSIYA
  if (q.includes("motivatsiya") || q.includes("ruhiyat")) {
    return "Kichik qadamlar katta yutuqlarning boshlanishidir. Harakatdan to‘xtamang!";
  }

  // HAZIL
  if (q.includes("hazil") || q.includes("kulgi")) {
    return "Nega kompyuter choy ichmaydi? Chunki u faqat kod ichadi! 😄";
  }

  // TARIX
  if (q.includes("amir temur")) {
    return "Amir Temur — buyuk sarkarda va davlat arbobi, Temuriylar sulolasining asoschisi.";
  }

  // TEXNOLOGIYA
  if (q.includes("ai") || q.includes("sun'iy intellekt")) {
    return "AI (sun'iy intellekt) — kompyuterlar tomonidan aqlli harakat va qarorlar qabul qilish texnologiyasi.";

  // BUXGALTERIYA
  } else if (q.includes("aktiv") && q.includes("pasiv")) {
    return "Buxgalteriyada: Aktiv — mulk, Pasiv — majburiyat va kapital. Balans tenglama: Aktiv = Pasiv.";
  }

  // KO'P MAZMUNLI JAVOBLAR
  if (q.includes("sen kimsan")) {
    return "Men Expert AI — Abduraxmon tomonidan yaratilgan kuchli sun’iy intellekt. Har qanday savolga javob beraman!";
  }

  if (q.includes("abduraxmon")) {
    return "Abduraxmon — ushbu AI platformasining asoschisi, dasturchi va loyiha muallifi!";
  }

  // STANDART JAVOB
  return "Kechirasiz, bu savolga hali to‘liq javob berishga o‘rganmadim. Iltimos, boshqa tarzda so‘rab ko‘ring yoki yangi savol bering.";
}
function getAIResponse(input) {
  const q = input.toLowerCase().trim();

  // Qisqa kalkulyator funksiyasi (masalan: 2+2 yoki sqrt(16))
  try {
    if (q.match(/^[-+*/()\d\s.sqrt]+$/)) {
      return "Natija: " + eval(q.replace("sqrt", "Math.sqrt"));
    }
  } catch (err) {
    return "Hisoblashda xatolik: noto‘g‘ri formulani kiritdingiz.";
  }

  // Tarjimon: translate: hello
  if (q.startsWith("translate:")) {
    const word = q.replace("translate:", "").trim();
    const dict = {
      hello: "salom",
      goodbye: "xayr",
      love: "sevgi",
      peace: "tinchlik",
      cat: "mushuk",
      dog: "it"
    };
    return `Tarjima: ${dict[word] || "Bu so‘z bazada mavjud emas."}`;
  }

  // Tasodifiy motivatsiya
  if (q.includes("motivatsiya") || q.includes("ruhiy")) {
    const quotes = [
      "Imkonsizlik — bu faqat vaqtincha holat.",
      "Sen bugun boshlamasang, ertaga kech bo‘ladi.",
      "Dunyo o‘zgarishini xohlasang — o‘zingdan boshlang.",
      "Bir qadam — 0 qadamdan yaxshiroq.",
      "Buyuklik — tinimsiz urinishda."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Chuqur fikrli AI
  if (q.includes("hayot nima") || q.includes("maqsadim nima")) {
    return "Hayot — bu o‘rganish, o‘zgarish va boshqalarga foyda keltirish yo‘lidir. Maqsadingiz esa sizni ertalab uyg‘otadigan narsa.";
  }

  // Hazil va hissiyotli AI
  if (q.includes("hazil") || q.includes("kulgi")) {
    const jokes = [
      "Qanday qilib kompyuter uxlaydi? – RAM ostiga yotib oladi! 😄",
      "Nega dasturchi quyoshda yurmaydi? – Chunki u 'dark mode'ni yoqtiradi! 😎"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Agar so‘rov noaniq bo‘lsa
  return "Bu haqda hali ko‘p o‘ylab ko‘rmagandim. Iltimos, savolni boshqacha ifoda qiling yoki 'translate:', 'sqrt()', 'motivatsiya' kabi so‘zlardan foydalaning.";
}
