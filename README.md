# ⚡ FAMILY ARENA — Professional 3D Oila va Kattalar Uchun Intellektual O‘yin

**FAMILY ARENA** — Blooket va Kahoot kabi mashhur o‘yinlarning eng yaxshi jihatlarini o‘zida mujassam etgan, lekin ota-onalar, kattalar va oilaviy davralar uchun maxsus ishlab chiqilgan, yuqori sifatli 3D grafikali, real Web Audio API tovush effektlariga ega to‘liq brauzer o‘yini.

---

## 📁 Loyiha Fayl Tuzilmasi

```text
FAMILY-ARENA/
│
├── index.html        # Barcha o‘yin ekranlari, HUD, 3D WebGL konteyneri, modallar va menyu
├── index.css         # Chuqur binafsha-qora dizayn tizimi, tilla rang urg‘ulari, glassmorphism va animatsiyalar
├── index.js          # 150+ saralangan savollar bazasi, Three.js 3D sahnasi, Web Audio API, 5 ta o‘yin rejimi
│
├── server.js         # Haqiqiy Node.js & Socket.IO realtime multiplayer serveri (PIN-kod, xonalar)
├── package.json      # Server bog‘liqliklari (Express, Socket.io, Cors)
└── README.md         # Loyiha qo‘llanmasi va arxitekturasi
```

---

## 🌟 Asosiy Imkoniyatlar va Texnologiyalar

1. **Haqiqiy 3D Cyber Arena (Three.js)**:
   - Sahnada markaziy oltiburchakli kiber platforma, aylanuvchi tilla ramkali 3D kristall / icosahedron.
   - 4 ta suzuvchi javob poydevorlari va dinamik yorug‘lik manbalari.
   - Koinot yulduzlari va energiya zarrachalari (particle field).
   - Foydalanuvchi sichqoncha yoki barmoq harakatiga qarab mayin 3D parallaks effekti.
   - To‘g‘ri javob berilganda platforma yashil nur taratadi, xatoda esa qizil to‘lqin paydo bo‘ladi.
   - G‘oliblik holatida 3D orbital kamera aylanishi va bayramona konfetti portlashi!

2. **Web Audio API Procedural Synthesizer**:
   - Hech qanday tashqi MP3 yoki tashqi fayllarga bog‘liq emas (internet uzilsa ham ovozlar 100% ishlaydi).
   - Tugma bosish (click), tugma ustiga kelish (hover blip).
   - To‘g‘ri javob uchun major akkordli arpedjio (C5-E5-G5-C6).
   - Xato javob uchun muloyim tebranish signali.
   - Vaqt tugab borayotganda tezlashuvchi soat ovozi (tick).
   - G‘alaba fanfari (triumphal brass fanfare).
   - Yoqimli orqa fon musiqasi (soft ambient synth pad) — sozlamalarda o‘chirish/yoqish mumkin.

3. **150+ Sifatli va Keng Qamrovli Savollar Bazasi (10 ta Kategoriya)**:
   - O‘zbekiston tarixi va madaniyati
   - Dunyo geografiyasi
   - Mantiqiy savollar
   - Fan va texnologiya
   - Tabiat va hayvonot olami
   - Kundalik hayot va amaliy bilimlar
   - Oila va tarbiya
   - Kino, adabiyot va san'at
   - Matematika va qiziqarli hisob
   - Umumiy bilimlar va qiziqarli faktlar
   - Har bir savolda to‘liq 4 ta variant, qiyinchilik darajasi va **nima uchun aynan shu javob to‘g‘riligi haqida qisqa ilmiy-tarixiy izoh**!

4. **5 Xil O‘yin Rejimi**:
   - 🎯 **Classic Quiz**: 10 ta savol, 20 soniya vaqt, tezlik bonusi.
   - 🛡️ **Survival (Omon Qolish)**: 3 ta jon (❤️❤️❤️). Xato qilsangiz jon ketadi. Cheksiz to‘lqinda rekord o‘rnating.
   - ⏳ **Time Attack (Vaqt Poygasi)**: 60 soniya umumiy vaqt. To‘g‘ri javob +3 sek qo‘shadi, xato -2 sek olib qo‘yadi!
   - 👨‍👩‍👧‍👦 **Family Battle (Oila Chempionati)**: Bitta telefon yoki kompyuterda 2 dan 6 gacha oila a'zosi navbat bilan o‘ynaydi (Ota, Ona, Farzandlar). Ismlar va avatarlar belgilanadi, har bir o‘yinchi o‘z navbatida javob beradi va yakunda 1-, 2-, 3-o‘rinlar tilla, kumush, bronza shohsupasiga (podium) chiqadi!
   - 📅 **Daily Challenge (Kunlik Sinov)**: Bugungi sana (`YYYY-MM-DD`) bo‘yicha avtomatik tuziluvchi 10 ta savol. Butun oila va do‘stlar bir kunda bir xil savollar to‘plamini yechib solishtirishadi.

5. **Internet Realtime Multiplayer (Node.js & Socket.IO)**:
   - Xona ochuvchi (Host) 4 xonali kod (masalan `F7B2`) yaratadi.
   - Boshqa oila a'zolari yoki do‘stlar kod orqali ulanishadi.
   - Server savollarni barcha o‘yinchilarga bir vaqtda sinxron jo‘natadi, javoblar serverda tekshiriladi va jonli reyting ko‘rsatiladi.

---

## 🚀 O‘yinni Ishga Tushirish

### 1-usul: Oddiy Brauzerda Ochish (Server talab qilinmaydi)
`index.html` faylini istalgan brauzerda (Chrome, Edge, Firefox, Safari) ikki marta bosib oching. Barcha 3D grafikalar, Web Audio ovozlari, savollar bazasi, Family Battle va barcha mahalliy rejimlar to‘liq ishlaydi!

### 2-usul: Internet Multiplayer Serveri Bilan Ishga Tushirish
Agar real tarmoq orqali bir nechta kompyuter yoki telefonlardan birgalikda o‘ynamoqchi bo‘lsangiz:
```bash
# 1. Kerakli modullarni o‘rnatish
npm install

# 2. Serverni ishga tushirish
npm start
```
Keyin brauzeringizda `http://localhost:3000` manzilini oching.
O‘yin ichidagi **Online Multiplayer** bo‘limiga kirib xona yaratishingiz va boshqa qurilmalardan unga ulanishingiz mumkin!
