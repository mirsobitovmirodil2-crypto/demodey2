/**
 * FAMILY ARENA — Professional 3D Intellectual Web Game
 * Architecture:
 * 1. QuestionDatabase (150+ Curated Uzbek Questions across 10 categories)
 * 2. SoundEngine (Web Audio API Synthesizer - Zero External Audio Dependency)
 * 3. ThreeArena (Three.js 3D WebGL Interactive Cyber Stage & Particles)
 * 4. StorageManager (Player Profile & Local Leaderboard)
 * 5. MultiplayerClient (Socket.io Realtime Client Integration)
 * 6. GameManager (Classic, Survival, TimeAttack, FamilyBattle, DailyChallenge)
 * 7. UIManager (Screens, Inputs, Modals & Animations)
 */

// ============================================================================
// 1. QUESTION DATABASE (150+ SAVOL, 10 TA KATEGORIYA)
// ============================================================================
const QUESTION_DATABASE = [
  // --- 1. O‘ZBEKISTON TARIXI VA MADANIYATI (15 ta) ---
  {
    id: 1,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Oson",
    question: "Amir Temur davlatining poytaxti qaysi qadimiy va go‘zal shahar bo‘lgan?",
    options: ["Buxoro", "Samarqand", "Xiva", "Qarshi"],
    correct: 1,
    explanation: "Samarqand Amir Temur saltanatining poytaxti bo‘lib, u dunyoning eng mashhur me'moriy durdonalaridan biri darajasiga ko‘tarilgan."
  },
  {
    id: 2,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Mirzo Ulug‘bek Samarqandda qaysi fanga bag‘ishlangan mashhur rasadxona (observatoriya) barpo etgan?",
    options: ["Tibbiyot", "Geologiya", "Astronomiya", "Falsafa"],
    correct: 2,
    explanation: "Mirzo Ulug‘bek 1424-1428 yillarda ulkan rasadxona qurdirib, 1018 ta yulduzning aniq koordinatalarini o‘z ichiga olgan 'Ziji Jadidi Ko‘ragoniy' asarini yaratgan."
  },
  {
    id: 3,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Oson",
    question: "O‘zbekiston Respublikasi Davlat mustaqilligi qaysi yili e'lon qilingan?",
    options: ["1989-yil", "1991-yil", "1992-yil", "1993-yil"],
    correct: 1,
    explanation: "1991-yil 31-avgustda O‘zbekiston mustaqilligi e'lon qilinib, 1-sentabr Mustaqillik kuni sifatida nishonlanadi."
  },
  {
    id: 4,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Jahon tibbiyot fani otasi deb e'tirof etilgan 'Tib qonunlari' muallifi kim?",
    options: ["Abu Ali ibn Sino", "Al-Xorazmiy", "Abu Rayhon Beruniy", "Al-Farg‘oniy"],
    correct: 0,
    explanation: "Abu Ali ibn Sino (Avitsenna) 1000 yildan ortiq vaqt davomida butun dunyo universitetlarida o‘qitilgan 'Tib qonunlari' kitobini yozgan."
  },
  {
    id: 5,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Qiyin",
    question: "Xorazm Ma'mun akademiyasiga qaysi hukmdor homiylik qilgan va asos solgan?",
    options: ["Ali ibn Ma'mun", "Sulton Mahmud G‘aznaviy", "Jaloliddin Manguberdi", "Abul Abbos Ma'mun"],
    correct: 0,
    explanation: "Xorazm Ma'mun akademiyasi XI asr boshlarida Abu Ali ibn Ma'mun va uning ukasi Abul Abbos Ma'mun davrida gullab-yashnagan."
  },
  {
    id: 6,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Oson",
    question: "O‘zbek adabiy tilining asoschisi va 'Xamsa' dostonlar majmuasi muallifi kim?",
    options: ["Zahiriddin Muhammad Bobur", "Alisher Navoiy", "Lutfiy", "Mashrab"],
    correct: 1,
    explanation: "Nizomiddin Mir Alisher Navoiy turkiy tilda birinchi bo‘lib buyuk 'Xamsa'ni yaratgan va adabiy tilimiz poydevorini qo‘ygan."
  },
  {
    id: 7,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Buxorodagi mashhur Minorai Kalon qaysi sulola davrida (1127-yilda) bunyod etilgan?",
    options: ["Somoniylar", "Qoraxoniylar", "Temuriylar", "Shayboniylar"],
    correct: 1,
    explanation: "Minorai Kalon 1127-yilda Qoraxoniylar hukmdori Arslonxon Muhammad buyrug‘i bilan me'mor Usto Baqo tomonidan qad rostlagan."
  },
  {
    id: 8,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Hindistonda 300 yildan ziyod hukmronlik qilgan Boburiylar sulolasiga kim asos solgan?",
    options: ["Akbarshoh", "Zahiriddin Muhammad Bobur", "Humoyun Mirzo", "Shoh Jahon"],
    correct: 1,
    explanation: "Andijon farzandi Zahiriddin Muhammad Bobur 1526-yilda Panipat jangidagi g‘alabadan so‘ng Boburiylar (Buyuk Mo‘g‘ullar) saltanatiga asos solgan."
  },
  {
    id: 9,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Qiyin",
    question: "Mo‘g‘ullarga qarshi 11 yil davomida mardonavor kurashgan jasur sarkarda kim?",
    options: ["Temur Malik", "Jaloliddin Manguberdi", "Najmiddin Kubro", "Mahmud Torobiy"],
    correct: 1,
    explanation: "Jaloliddin Manguberdi Chingizxon boshliq qo‘shinlarga bir necha bor jiddiy zarba bergan milliy qahramondir."
  },
  {
    id: 10,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Oson",
    question: "O‘zbek milliy musiqa san'atining eng yuksak durdonasi hisoblangan klassik turkum nima deb ataladi?",
    options: ["Yalla", "Shashmaqom", "Lapay", "Baxshichilik"],
    correct: 1,
    explanation: "Shashmaqom – olti maqomdan iborat ulkan klassik musiqa merosimiz bo‘lib, YUNESKO nomoddiy madaniy merosi ro‘yxatiga kiritilgan."
  },
  {
    id: 11,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Qadimiy Ipak yo‘lida ipak ishlab chiqarish bo‘yicha O‘zbekistonning qaysi shahri asrlar davomida shuhrat qozongan?",
    options: ["Marg‘ilon", "Termiz", "Nukus", "Qo‘qon"],
    correct: 0,
    explanation: "Marg‘ilon shahri o‘zining atlas, adras va xonatlas kabi tabiiy ipak matolari bilan butun dunyoga tanilgan."
  },
  {
    id: 12,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Registon maydonidagi eng qadimiy madrasa qaysi?",
    options: ["Sherdor madrasasi", "Tillakori madrasasi", "Ulug‘bek madrasasi", "Ko‘kaldosh madrasasi"],
    correct: 2,
    explanation: "Ulug‘bek madrasasi 1417-1420 yillarda Registon maydonida birinchi bo‘lib qurilgan va ilm-fan markazi vazifasini o‘tagan."
  },
  {
    id: 13,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Qiyin",
    question: "O‘zbekiston hududidagi qaysi yodgorlikdan qadimgi Kushon davriga oid budda ibodatxonasi topilgan?",
    options: ["Afrosiyob", "Fayoztepa", "Varaxsha", "Toproqqal'a"],
    correct: 1,
    explanation: "Termiz yaqinidagi Fayoztepa va Qoratepa majmualari I-III asrlarga oid qadimgi buddiylik madaniyati qoldiqlaridir."
  },
  {
    id: 14,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "Oson",
    question: "O‘zbekiston bayrog‘idagi 12 ta yulduz nimani anglatadi?",
    options: ["12 ta viloyatni", "12 oyni va qadimiy 12 muchalni", "12 ta qahramonni", "12 ta daryoni"],
    correct: 1,
    explanation: "12 ta yulduz yilning 12 oyini hamda o‘zbek xalqining qadimiy quyosh taqvimi va barkamol inson sifatlarini anglatadi."
  },
  {
    id: 15,
    category: "O‘zbekiston Tarixi va Madaniyati",
    difficulty: "O‘rta",
    question: "Xiva shahrining ochiq osmon ostidagi muzey deb ataluvchi tarixiy ichki shahri nima deb nomlanadi?",
    options: ["Ichan qal'a", "Dishan qal'a", "Ark", "Chor Bakr"],
    correct: 0,
    explanation: "Ichan qal'a O‘rta Osiyodagi birinchi bo‘lib butunlay YUNESKO himoyasiga olingan noyob shahar-qo‘rg‘ondir."
  },

  // --- 2. DUNYO GEOGRAFIYASI (15 ta) ---
  {
    id: 16,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Yer yuzidagi eng katta va eng chuqur okean qaysi?",
    options: ["Atlantika okeani", "Tinch okeani", "Hind okeani", "Shimoliy muz okeani"],
    correct: 1,
    explanation: "Tinch okeani yer yuzasining uchdan bir qismini egallaydi va Mariana botig‘i (chuqurligi qariyb 11 000 m) ham aynan shu yerda joylashgan."
  },
  {
    id: 17,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Dunyodagi eng uzun tog‘ tizmasi qaysi qit'ada joylashgan?",
    options: ["Osiyo (Himolay)", "Janubiy Amerika (And)", "Shimoliy Amerika (Kordilyera)", "Yevropa (Alp)"],
    correct: 1,
    explanation: "And tog‘lari Janubiy Amerikaning g‘arbiy qirg‘og‘i bo‘ylab 7000 km dan ortiq masofaga cho‘zilgan bo‘lib, eng uzun quruqlik tog‘ tizmasidir."
  },
  {
    id: 18,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Yer sharining eng baland cho‘qqisi Everest (Jomolungma) qaysi ikki davlat chegarasida joylashgan?",
    options: ["Hindiston va Xitoy", "Nepal va Xitoy", "Pokiston va Hindiston", "Butan va Nepal"],
    correct: 1,
    explanation: "Everest cho‘qqisi (8848 metr) Nepal hamda Xitoy (Tibet avtonom rayoni) chegarasida qad rostlagan."
  },
  {
    id: 19,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Suv sig‘imi va oqim hajmi bo‘yicha dunyoning eng yirik daryosi qaysi?",
    options: ["Nil", "Amazonka", "Yanszi", "Missisipi"],
    correct: 1,
    explanation: "Amazonka dunyodagi eng sersuv daryo bo‘lib, dunyo daryolari orqali okeanga quyiladigan barcha chuchuk suvning qariyb 20% ini beradi."
  },
  {
    id: 20,
    category: "Dunyo Geografiyasi",
    difficulty: "Qiyin",
    question: "Dunyo xaritasida ikkita davlat (qo‘shni davlatlari ham dengizga chiqmaydigan) dengizga qo‘shaloq chiqa olmaydi. Ulardan biri O‘zbekiston bo‘lsa, ikkinchisi qaysi?",
    options: ["Mo‘g‘uliston", "Lixtenshteyn", "Shveysariya", "Boliviya"],
    correct: 1,
    explanation: "Dunyoda atigi 2 ta davlat — O‘zbekiston va Yevropadagi Lixtenshteyn o‘zi ham, uning barcha qo‘shnilari ham dengizga chiqish imkoniyatiga ega emas."
  },
  {
    id: 21,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Afrikadagi eng katta issiq cho‘l qaysi?",
    options: ["Kalaxari", "Saxroi Kabir (Sahara)", "Gobi", "Atakama"],
    correct: 1,
    explanation: "Sahara cho‘li 9 million kvadrat kilometrdan ziyod maydonni egallagan bo‘lib, deyarli butun AQSh yoki Yevropa qit'asiga teng maydonga ega."
  },
  {
    id: 22,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Ikkita qit'ada (Yevropa va Osiyo) bir vaqtda joylashgan dunyodagi mashhur shahar qaysi?",
    options: ["Qohira", "Istanbul", "Afina", "Boku"],
    correct: 1,
    explanation: "Istanbul Bosfor bo‘g‘ozi orqali Yevropa va Osiyo qit'alarini bog‘lab turuvchi yagona transkontinental megapolisdir."
  },
  {
    id: 23,
    category: "Dunyo Geografiyasi",
    difficulty: "Qiyin",
    question: "Yer yuzidagi eng quruq cho‘l bo‘lib, ba'zi joylariga yuzlab yillar davomida bir tomchi ham yomg‘ir yog‘magan cho‘l qaysi?",
    options: ["Atakama (Chili)", "Karakum (Turkmaniston)", "Viktoriya (Avstraliya)", "Namib (Namibiya)"],
    correct: 0,
    explanation: "Chilidagi Atakama cho‘li shunchalik quruqki, olimlar u yerni Mars sayyorasining yuzasiga qiyoslashadi va kosmik apparatlarni shu yerda sinashadi."
  },
  {
    id: 24,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Dunyodagi eng katta orol qaysi?",
    options: ["Madagaskar", "Grenlandiya", "Kalimantan", "Yangi Gvineya"],
    correct: 1,
    explanation: "Grenlandiya 2.1 million kvadrat kilometr maydon bilan dunyoning eng katta oroli hisoblanadi (Avstraliya esa qit'a hisoblanadi)."
  },
  {
    id: 25,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Dunyoning eng chuqur chuchuk suvli ko‘li Baykal qaysi mamlakatda joylashgan?",
    options: ["Kanada", "Rossiya", "Qozog‘iston", "Finlandiya"],
    correct: 1,
    explanation: "Baykal ko‘lining chuqurligi 1642 metr bo‘lib, unda yer yuzidagi erimagan chuchuk suv zaxirasining 20 foizi to‘plangan."
  },
  {
    id: 26,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Avstraliya qit'asining poytaxti qaysi shahar?",
    options: ["Sidney", "Melburn", "Kanberra", "Brisben"],
    correct: 2,
    explanation: "Ko‘pchilik Sidney yoki Melburn deb o‘ylaydi, ammo Avstraliyaning rasmiy poytaxti 1913-yilda maxsus rejalashtirilgan Kanberra shahridir."
  },
  {
    id: 27,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Gibraltar bo‘g‘ozi qaysi ikki dengiz/okeanni bir-biri bilan bog‘laydi?",
    options: ["O‘rta Yer dengizi va Atlantika okeani", "Qizil dengiz va Hind okeani", "Qora dengiz va Boltiq dengizi", "Tinch va Shimoliy okean"],
    correct: 0,
    explanation: "Gibraltar bo‘g‘ozi Atlantika okeani suvlari bilan O‘rta Yer dengizini tutashtiruvchi strategik suv yo‘lidir."
  },
  {
    id: 28,
    category: "Dunyo Geografiyasi",
    difficulty: "Qiyin",
    question: "Dunyodagi eng baland sharshara Anxel (Angel) qaysi mamlakatda joylashgan?",
    options: ["Braziliya", "Venesuela", "Zambiya", "AQSh"],
    correct: 1,
    explanation: "Venesueladagi Anxel sharsharasi 979 metr balandlikdan pastga tushadi, suv pastga yetguncha tumanga aylanib ketadi."
  },
  {
    id: 29,
    category: "Dunyo Geografiyasi",
    difficulty: "Oson",
    question: "Aholisi eng ko‘p bo‘lgan qit'a qaysi?",
    options: ["Afrika", "Osiyo", "Yevropa", "Shimoliy Amerika"],
    correct: 1,
    explanation: "Osiyo qit'asida 4.7 milliarddan ortiq inson istiqomat qiladi, bu jahon aholisining qariyb 60 foizini tashkil qiladi."
  },
  {
    id: 30,
    category: "Dunyo Geografiyasi",
    difficulty: "O‘rta",
    question: "Yaponiyaning eng baland va muqaddas tog‘i nima deb ataladi?",
    options: ["Fudziyama (Fudzi)", "Kilimanjaro", "Monblan", "Elbrus"],
    correct: 0,
    explanation: "Fudzi tog‘i (3776 m) Yaponiyaning ramzi hisoblangan so‘ngan stratovulkandir."
  },

  // --- 3. MANTIQIY SAVOLLAR (15 ta) ---
  {
    id: 31,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Uni qancha ko‘p olsangiz, u shuncha kattalashadi. Bu nima?",
    options: ["Qarz", "O‘ra (chuqur)", "Yosh", "Bilim"],
    correct: 1,
    explanation: "Chuqurdan qancha ko‘p tuproq qazib olsangiz, o‘raning hajmi shuncha kattalashib boraveradi!"
  },
  {
    id: 32,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "Uning bo‘yni bor, lekin boshi yo‘q. Ikki qo‘li bor, lekin barmog‘i yo‘q. U nima?",
    options: ["Ko‘ylak", "Qo‘g‘irchoq", "Soat", "Kreslo"],
    correct: 0,
    explanation: "Ko‘ylakning yoqasi (bo‘yni) va yenglari (qo‘llari) bo‘ladi, lekin boshi va barmoqlari bo‘lmaydi."
  },
  {
    id: 33,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Bir poyezd shimoldan janubga soatiga 100 km tezlikda harakatlanmoqda. Shamol sharqdan esmoqda. Elektr poyezdining tutuni qaysi tomonga ketadi?",
    options: ["Janubga", "G‘arbga", "Elektr poyezdining tutuni bo‘lmaydi", "Sharqqa"],
    correct: 2,
    explanation: "Elektr poyezdlari elektr energiyasi bilan harakatlanadi, shuning uchun ulardan tutun chiqmaydi!"
  },
  {
    id: 34,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "Otaning 4 ta o‘g‘li bor. Har bir o‘g‘ilning bittadan singlisi bor. Otaning jami nechta farzandi bor?",
    options: ["8 ta", "5 ta", "6 ta", "4 ta"],
    correct: 1,
    explanation: "Otaning 4 ta o‘g‘li va 1 ta qizi bor. Bitta qiz barcha 4 ta aka-ukaning ham yagona singlisi bo‘ladi. Jami 5 farzand!"
  },
  {
    id: 35,
    category: "Mantiqiy Savollar",
    difficulty: "Qiyin",
    question: "Agar bir stakan suvga shakar solsangiz, suv sathi qanday o‘zgaradi?",
    options: ["Biroz ko‘tariladi", "Kamayadi", "O‘zgarmaydi", "Bug‘lanadi"],
    correct: 0,
    explanation: "Shakar eriyotganda molekulalar suv molekulalari orasidagi bo‘shliqqa joylashsa-da, Arximed qonuni bo‘yicha umumiy hajm ozgina bo‘lsa ham ko‘tariladi."
  },
  {
    id: 36,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Uni hamma ko‘radi, lekin hech kim ushlay olmaydi. Qorong‘ida g‘oyib bo‘ladi. Bu nima?",
    options: ["Shamol", "Soya", "Oyna", "Tush"],
    correct: 1,
    explanation: "Soya yorug‘likda paydo bo‘ladi, uni qo‘l bilan ushlab bo‘lmaydi va mutlaq qorong‘ida ko‘rinmay qoladi."
  },
  {
    id: 37,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "Odamlar uni sotib olayotganda qora, ishlatayotganda qizil, tashlab yuborayotganda kulrang bo‘ladi. Bu nima?",
    options: ["Temir", "Ko‘mir", "Kofe", "Gugurt"],
    correct: 1,
    explanation: "Ko‘mir qopda qora bo‘ladi, olovda yonganda qizil cho‘g‘ga aylanadi, kul bo‘lgach esa kulrang bo‘lib qoladi."
  },
  {
    id: 38,
    category: "Mantiqiy Savollar",
    difficulty: "Qiyin",
    question: "Qaysi so‘z barcha o‘zbekcha lug‘atlarda va qoidalarda doimo 'noto‘g‘ri' deb yoziladi?",
    options: ["Xato", "Adashish", "Noto‘g‘ri", "Chalg‘ish"],
    correct: 2,
    explanation: "'Noto‘g‘ri' so‘zining o‘zi har doim aynan 'noto‘g‘ri' shaklida yoziladi!"
  },
  {
    id: 39,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Uning tili bor, lekin gapirolmaydi. Yurishni biladi, lekin oyog‘i yo‘q. Bu nima?",
    options: ["Poyabzal (etik/botinka)", "Soat", "Kitob", "Daryo"],
    correct: 0,
    explanation: "Poyabzalning tilchasi bor, inson bilan birga 'yuradi', ammo gapirolmaydi va o‘z oyog‘i yo‘q."
  },
  {
    id: 40,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "Savatchada 5 ta olma bor. 5 nafar bolaga bittadan olma berildi, ammo savatda bitta olma qoldi. Bu qanday sodir bo‘ldi?",
    options: ["Bitta olma yashirildi", "Oxirgi bolaga olma savat bilan birga berildi", "Xato sanalgan", "Bitta bola olmadi"],
    correct: 1,
    explanation: "To‘rtta bolaga alohida olmalar berildi, beshinchi bolaga esa olma savatning ichida berildi!"
  },
  {
    id: 41,
    category: "Mantiqiy Savollar",
    difficulty: "Qiyin",
    question: "Siz poygada yuguryapsiz va ikkinchi o‘rindagi yuguruvchini quvib o‘tdingiz. Hozir siz nechanchi o‘rindasiz?",
    options: ["Birinchi", "Ikkinchi", "Uchinchi", "G‘olib"],
    correct: 1,
    explanation: "Ikkinchi o‘rindagi odamni quvib o‘tsangiz, siz uning o‘rnini, ya'ni ikkinchi o‘rinni egallaysiz (birinchi bo‘lish uchun birinchini quvib o‘tish kerak)!"
  },
  {
    id: 42,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Uni sindirmasdan oldin undan foydalanib bo‘lmaydi. Bu nima?",
    options: ["Yong‘oq yoki Tuxum", "Oyna", "Qulf", "Qalam"],
    correct: 0,
    explanation: "Tuxumni (yoki po‘choqli yong‘oqni) sindirmasdan pishirib yoki ichidagi mag‘zini yeb bo‘lmaydi."
  },
  {
    id: 43,
    category: "Mantiqiy Savollar",
    difficulty: "O‘rta",
    question: "U sizga tegishli, lekin uni sizdan ko‘ra boshqalar ko‘proq ishlatadi. Bu nima?",
    options: ["Telefoningiz", "Ismingiz", "Mashinangiz", "Pulingiz"],
    correct: 1,
    explanation: "Sizning ismingiz o‘zingizniki bo‘lsa-da, sizga murojaat qilish uchun boshqalar uni sizdan ko‘ra ko‘proq aytishadi."
  },
  {
    id: 44,
    category: "Mantiqiy Savollar",
    difficulty: "Qiyin",
    question: "Qaysi idishga hech qachon suv quyib to‘ldirib bo‘lmaydi?",
    options: ["Choynak", "G‘alvir (elak)", "Katta qozon", "Buzilgan chelak"],
    correct: 1,
    explanation: "G‘alvir (yoki elak) teshik-teshik bo‘lgani sababli, unga qancha suv quysangiz ham oqib ketadi."
  },
  {
    id: 45,
    category: "Mantiqiy Savollar",
    difficulty: "Oson",
    question: "Daryolar bor – suvi yo‘q, shaharlar bor – odami yo‘q, o‘rmonlar bor – daraxti yo‘q. Bu nima?",
    options: ["Sahro", "Geografik Xarita", "Rasm", "Tush"],
    correct: 1,
    explanation: "Xaritada barcha daryo, shahar va o‘rmonlar chizilgan, biroq ularda haqiqiy suv yoki odamlar bo‘lmaydi."
  },

  // --- 4. FAN VA TEXNOLOGIYA (15 ta) ---
  {
    id: 46,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "Quyosh sistemasidagi eng katta sayyora qaysi?",
    options: ["Saturn", "Yupiter", "Uran", "Mars"],
    correct: 1,
    explanation: "Yupiter shunchalik kattaki, uning ichiga Quyosh sistemasidagi barcha boshqa sayyoralar birgalikda sig‘ib ketishi mumkin."
  },
  {
    id: 47,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Kompyuter olamida 'Algoritm' atamasi qaysi buyuk allomaning nomi bilan bog‘liq?",
    options: ["Al-Xorazmiy", "Abu Rayhon Beruniy", "Al-Farg‘oniy", "Ibn Sino"],
    correct: 0,
    explanation: "Muhammad ibn Muso al-Xorazmiyning 'Al-Kitob al-muxtasar fi hisob al-jabr va al-muqobala' asari va uning lotinchalashtirilgan ismi (Algorithmi) zamonaviy 'algoritm' so‘ziga asos bo‘lgan."
  },
  {
    id: 48,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "Yorug‘lik tezligi vakuumda taxminan sekundiga necha kilometrni tashkil qiladi?",
    options: ["100 000 km/s", "300 000 km/s", "500 000 km/s", "1 000 000 km/s"],
    correct: 1,
    explanation: "Yorug‘lik tezligi taxminan 299 792 km/s (yaxlitlanganda 300 000 km/s) bo‘lib, koinotdagi eng yuqori tezlik hisoblanadi."
  },
  {
    id: 49,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Zamonaviy smartfonlar displeyida ishlatiluvchi OLED texnologiyasidagi 'O' harfi nimani anglatadi?",
    options: ["Optical (Optik)", "Organic (Organik)", "Optimal (Optimal)", "Open (Ochiq)"],
    correct: 1,
    explanation: "OLED – Organic Light-Emitting Diode (Organik yorug‘lik taratuvchi diod) bo‘lib, har bir piksel o‘zidan mustaqil yorug‘lik chiqaradi."
  },
  {
    id: 50,
    category: "Fan va Texnologiya",
    difficulty: "Qiyin",
    question: "Kvant kompyuterlarida an'anaviy 'bit' o‘rniga axborotning qanday birligi ishlatiladi?",
    options: ["Bayt", "Qubit (kyubit)", "Piksel", "Teraflop"],
    correct: 1,
    explanation: "Qubit (Quantum Bit) bir vaqtning o‘zida ham 0, ham 1 holatida (superpozitsiya) bo‘la oladi, bu esa ulkan hisoblash quvvatini beradi."
  },
  {
    id: 51,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "Suvning kimyoviy formulasi qaysi?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    correct: 1,
    explanation: "H2O – ikki atom vodorod va bir atom kisloroddan tashkil topgan hayot manbaidir."
  },
  {
    id: 52,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Odam tanasidagi qaysi a'zo eng ko‘p energiya (glyukoza va kislorod) iste'mol qiladi?",
    options: ["Yurak", "Miya", "Jigar", "O‘pka"],
    correct: 1,
    explanation: "Bosh miya tana vaznining atigi 2 foizini tashkil qilsa-da, organizmdagi umumiy kislorod va energiyaning qariyb 20 foizini sarflaydi."
  },
  {
    id: 53,
    category: "Fan va Texnologiya",
    difficulty: "Qiyin",
    question: "Nobel mukofotini ikki xil ilmiy yo‘nalishda (Fizika va Kimyo) olgan yagona ayol olima kim?",
    options: ["Mariya Kyuri", "Rozalind Franklin", "Ada Lavleys", "Doroti Xodjkin"],
    correct: 0,
    explanation: "Mariya Skladovskaya-Kyuri radioaktivlikni kashf etgani uchun fizikadan, radiy va poloniyni ajratib olgani uchun esa kimyodan Nobel olgan."
  },
  {
    id: 54,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "O‘simliklarning quyosh nuri ta'sirida ozuqa va kislorod ishlab chiqarish jarayoni nima deb ataladi?",
    options: ["Fermentatsiya", "Fotosintez", "Diffuziya", "Evolyutsiya"],
    correct: 1,
    explanation: "Fotosintez xlorofill donachalari yordamida karbonat angidrid va suvdan organik moddalar hamda kislorod hosil qilishdir."
  },
  {
    id: 55,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Quyosh nuri Yerdan Quyoshgacha bo‘lgan 150 million kilometr masofani necha daqiqada bosib o‘tadi?",
    options: ["8 soniyada", "taxminan 8 daqiqa 20 soniyada", "1 soatda", "Bir kecha-kunduzda"],
    correct: 1,
    explanation: "Yorug‘lik 300 000 km/s tezlikda harakatlangani sababli Quyoshdan chiqib Yerga yetib kelishi uchun 500 soniya (8 daqiqa 20 soniya) kerak bo‘ladi."
  },
  {
    id: 56,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "Dunyodagi birinchi dasturchi sifatida tan olingan ingliz olimasi kim?",
    options: ["Ada Lavleys", "Greys Xopper", "Margarita Xemilton", "Joan Klark"],
    correct: 0,
    explanation: "Ada Lavleys 1843-yilda Charlz Bebbidjning hisoblash mashinasi uchun dunyodagi ilk dasturni (algoritmni) yozgan."
  },
  {
    id: 57,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Koinotdagi eng zich va tortishish kuchi shunchalik kuchliki, hatto yorug‘lik ham undan qochib qutula olmaydigan obyekt nima?",
    options: ["Qora tuynuk (Black Hole)", "Oq mitti yulduz", "Supernova", "Asteroid"],
    correct: 0,
    explanation: "Qora tuynuklarning gravitatsiyasi ulkan bo‘lib, ularning voqealar gorizontidan hech qanday zarracha yoki nurlanish chiqolmaydi."
  },
  {
    id: 58,
    category: "Fan va Texnologiya",
    difficulty: "Qiyin",
    question: "Bluetooth simsiz aloqa texnologiyasi o‘z nomini qaysi tarixiy shaxsdan olgan?",
    options: ["Daniyaning qadimgi qiroli Harald Ko‘ktish (Bluetooth)", "Nemis olimi Genrix Gers", "Ingliz muhandisi Jon Bluetooth", "Shved qiroli Karl"],
    correct: 0,
    explanation: "X asrda Skandinaviya qabilalarini birlashtirgan Daniya qiroli Harald 'Bluetooth' Gormsson nomidan olingan bo‘lib, texnologiya qurilmalarni birlashtiradi."
  },
  {
    id: 59,
    category: "Fan va Texnologiya",
    difficulty: "Oson",
    question: "Havoning asosiy qismini (taxminan 78 foizini) qaysi gaz tashkil qiladi?",
    options: ["Kislorod", "Azot", "Argon", "Karbonat angidrid"],
    correct: 1,
    explanation: "Atmosfera havosining 78 foizi azotdan, 21 foizi kisloroddan va 1 foizi boshqa gazlardan iborat."
  },
  {
    id: 60,
    category: "Fan va Texnologiya",
    difficulty: "O‘rta",
    question: "Wi-Fi so‘zining to‘g‘ri texnik standarti nima deb nomlanadi?",
    options: ["IEEE 802.11", "Bluetooth 5.0", "ISO 9001", "HTML5"],
    correct: 0,
    explanation: "Wi-Fi simsiz tarmoq protokoli xalqaro elektrotexnika instituti tomonidan IEEE 802.11 standarti bilan belgilanadi."
  },

  // --- 5. TABIAT VA HAYVONOT OLAMI (15 ta) ---
  {
    id: 61,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Yer yuzida yashagan va hozir yashayotgan eng ulkan jonivor qaysi?",
    options: ["Afrika fili", "Ko‘k kit (Moviy kit)", "Tirannozavr dinozavr", "Kashalot"],
    correct: 1,
    explanation: "Ko‘k kitning og‘irligi 150-180 tonnagacha, uzunligi 30 metrgacha yetadi, bu tarixdagi har qanday dinozavrdan ham og‘irroqdir!"
  },
  {
    id: 62,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Qaysi qush orqaga qarab ucha oladigan yagona qush hisoblanadi?",
    options: ["Qaldirg‘och", "Kolibri", "Chittak", "Burgut"],
    correct: 1,
    explanation: "Kolibri qushlari qanotlarini sekundiga 80 martagacha qoqib, havoda muallaq turishi, orqaga va yonboshga ucha oladi."
  },
  {
    id: 63,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Quruqlikdagi eng tez yuguruvchi hayvon qaysi?",
    options: ["Gepard", "Sher", "Kiyik", "Ot"],
    correct: 0,
    explanation: "Gepard qisqa masofada soatiga 110-120 km tezlikka erisha oladi va 3 soniyada 100 km/soat tezlik oladi."
  },
  {
    id: 64,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Sakkizoyoqning (osminog) nechta yuragi bor?",
    options: ["1 ta", "2 ta", "3 ta", "4 ta"],
    correct: 2,
    explanation: "Sakkizoyoqning 3 ta yuragi va ko‘k rangli qoni bor: bittasi tanaga qon haydasa, ikkitasi jabralarga haydaydi."
  },
  {
    id: 65,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Qiyin",
    question: "O‘zbekiston Qizil kitobiga kiritilgan 'Qor qoploni' (Ilvirs) asosan qaysi hududlarda yashaydi?",
    options: ["Qizilqum cho‘llarida", "Baland Tyanshan va Pomir-Oloy tog‘larida", "Orolbo‘yi to‘qaylarida", "Mirzacho‘l dashtlarida"],
    correct: 1,
    explanation: "Ilvirs dengiz sathidan 2500-4500 metr balandlikdagi qoyali va qorli baland tog‘ tizmalarida yashaydi."
  },
  {
    id: 66,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Odamlar kabi har birining tana chiziqlari (yo‘llari) mutlaqo betakror va yagona bo‘lgan hayvon qaysi?",
    options: ["Zebra", "Ayiq", "Kenguru", "Tuya"],
    correct: 0,
    explanation: "Har bir zebraning qora-oq chiziqlari odamning barmoq izi kabi noyob bo‘lib, tabiatda ikki xil chiziqli zebra uchramaydi."
  },
  {
    id: 67,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Qaysi qush ucha olmaydi, lekin soatiga 70 km tezlikda yugura oladi?",
    options: ["Pingvin", "Tuyaqush (Straus)", "Kivi", "Pelikan"],
    correct: 1,
    explanation: "Afrika tuyaqushi dunyodagi eng katta qush bo‘lib, kuchli oyoqlari tufayli yirtqichlardan tez yugurib qochadi."
  },
  {
    id: 68,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Qiyin",
    question: "Dunyodagi eng uzoq yashovchi daraxt turi qaysi bo‘lib, uning yoshi 4000-5000 yildan oshadi?",
    options: ["Eman (Dub)", "Sekvoyadendron va Qiltiqli qarag‘ay (Bristlecone pine)", "Chinor", "Baobab"],
    correct: 1,
    explanation: "AQShdagi 'Metuselah' nomli qiltiqli qarag‘ayning yoshi 4850 yildan ortiq bo‘lib, Misr ehromlaridan ham qadimiyroqdir."
  },
  {
    id: 69,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Pingvinlar qaysi qutbda yashaydi?",
    options: ["Faqat Janubiy qutbda (Antarktida)", "Faqat Shimoliy qutbda (Arktika)", "Ikkala qutbda ham", "Faqat tropiklarda"],
    correct: 0,
    explanation: "Pingvinlar faqat Janubiy yarimsharda yashaydi. Shimoliy qutbda esa oq ayiqlar yashaydi (ular tabiatda hech qachon uchrashmaydi)."
  },
  {
    id: 70,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Bambuk novdalari bilan oziqlanuvchi yoqimli Katta Panda qaysi davlatning milliy boyligi hisoblanadi?",
    options: ["Yaponiya", "Xitoy", "Janubiy Koreya", "Tailand"],
    correct: 1,
    explanation: "Pandalar Xitoyning tog‘li o‘rmonlarida yashaydi va davlat qonunlari bilan eng qattiq himoya qilinadi."
  },
  {
    id: 71,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Tuya o‘rkachida nima to‘playdi?",
    options: ["Suv", "Yog‘ zaxirasi", "Havo", "Tuz"],
    correct: 1,
    explanation: "Tuya o‘rkachida suv emas, 35 kg gacha yog‘ zaxirasi saqlanadi. Ochlik va suvsizlikda organizm bu yog‘ni energiya va suvga aylantiradi."
  },
  {
    id: 72,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Yuragi daqiqasiga atigi 4-8 marta uradigan, qishki uyquga ketadigan yirtqich hayvon qaysi?",
    options: ["Qo‘ng‘ir ayiq", "Bo‘ri", "Toshbaqa", "Bo‘rsiq"],
    correct: 0,
    explanation: "Qo‘ng‘ir ayiqlar qishki uyqu paytida tana haroratini tushiradi va yurak urish tezligini daqiqasiga 8 martagacha pasaytiradi."
  },
  {
    id: 73,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Qiyin",
    question: "Avstraliyada yashovchi, tuxum qo‘yib ko‘payadigan, ammo bolasini sut bilan boquvchi noyob sutemizuvchi qaysi?",
    options: ["Kenguru", "O‘rdakburun (Utkonos)", "Koala", "Dingo iti"],
    correct: 1,
    explanation: "O‘rdakburun va yexidna qadimgi tuxum qo‘yuvchi sutemizuvchilar bo‘lib, fanning eng qiziqarli evolyutsion topilmalaridandir."
  },
  {
    id: 74,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "Oson",
    question: "Dunyodagi eng baland bo‘yli quruqlik hayvoni qaysi?",
    options: ["Fil", "Jirafa", "Karkidon", "Tuya"],
    correct: 1,
    explanation: "Jirafaning bo‘yi 5.5 - 6 metrgacha yetadi, uning bo‘ynida odam kabi atigi 7 ta umurtqa suyagi bor, lekin ular juda uzun."
  },
  {
    id: 75,
    category: "Tabiat va Hayvonot Olami",
    difficulty: "O‘rta",
    question: "Dengizlardagi eng aqlli sutemizuvchi, o‘zaro hushtak orqali gaplashuvchi va bir-biriga ism qo‘yuvchi jonivor qaysi?",
    options: ["Akula", "Delfin", "Tyulen", "Medo‘za"],
    correct: 1,
    explanation: "Delfinlar yuqori intellektga ega bo‘lib, har bir delfinning o‘ziga xos tovushli 'ismi' bor va boshqalar uni shu tovush bilan chaqiradi."
  },

  // --- 6. KUNDALIK HAYOT VA AMALIY BILIMLAR (15 ta) ---
  {
    id: 76,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "Kuyish holatlarida (masalan, issiq suv yoki choy to‘kilganda) birinchi tibbiy yordam sifatida nima qilish kerak?",
    options: ["Yog‘ yoki tish pastasi surtish", "Kamida 10-15 daqiqa toza sovuq suv oqimida tutish", "Yod surtish", "Muz bo‘lagini to‘g‘ridan-to‘g‘ri bosish"],
    correct: 1,
    explanation: "Kuygan joyni darhol 10-15 daqiqa sovuq suvda tutish to‘qimalarning chuqur qizib zararlanishini to‘xtatadi. Yog‘ surtish esa issiqlikni qamab, ahvolni yomonlashtiradi!"
  },
  {
    id: 77,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "Avtomobil haydashda xavfsizlik kamarini taqish yo‘lovchining halokatdagi omon qolish ehtimolini qanchaga oshiradi?",
    options: ["10 foizga", "Taxminan 50 foizga", "99 foizga", "Ta'sir qilmaydi"],
    correct: 1,
    explanation: "Jahon sog‘liqni saqlash tashkiloti ma'lumotlariga ko‘ra, oldingi o‘rindiqdagi kamar og‘ir jarohat va o‘lim xavfini 45-50% ga kamaytiradi."
  },
  {
    id: 78,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "Odam organizmi uchun kunlik tavsiya etiladigan o‘rtacha toza ichimlik suvi miqdori qancha?",
    options: ["0.5 litr", "1.5 – 2 litr", "5 litr", "10 litr"],
    correct: 1,
    explanation: "O‘rtacha kattalar uchun tana vazniga qarab kuniga 1.5 - 2.5 litr atrofida toza suv ichish sog‘liq uchun eng maqbul hisoblanadi."
  },
  {
    id: 79,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "Plastik idishlarni mikrotolqinli pechda qizdirishda qaysi belgi bo‘lishi shart?",
    options: ["BPA Free yoki Mikroto‘lqinga mos piktogramma", "Uchburchak ichida 1 raqami", "Faqat qor parchasi belgisi", "Hech qanday belgi shart emas"],
    correct: 0,
    explanation: "Noto‘g‘ri plastik qizdirilganda zaharli dioksin va bisfenol moddalarini ovqatga chiqaradi. Faqat 'Microwave Safe' idishlar xavfsizdir."
  },
  {
    id: 80,
    category: "Kundalik Hayot",
    difficulty: "Qiyin",
    question: "Oshxonada qozondagi o‘simlik moyi yonib ketsa, qanday to‘g‘ri yo‘l tutiladi?",
    options: ["Darhol ustiga sovuq suv quyish", "Gazni o‘chirib, qozon qopqog‘ini yopish", "Qozonni ko‘tarib balkonga yugurish", "Ustiga un sepish"],
    correct: 1,
    explanation: "Yonayotgan moyga suv quyilsa, ulkan olov portlashi yuz beradi! Qopqoq yopilsa, kislorod yetishmay olov bir zumda o‘chadi."
  },
  {
    id: 81,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "O‘zbekistonda yagona favqulodda qutqaruv xizmatlariga ulanish uchun qaysi yangi qisqa raqam ishga tushirilgan?",
    options: ["112", "911", "001", "777"],
    correct: 0,
    explanation: "O‘zbekistonda yagona '112' dispetcherlik xizmati orqali o‘t o‘chirish, tez yordam va ichki ishlar xizmatlari birlashtirilmoqda."
  },
  {
    id: 82,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "Kiyimlardagi yorliqlarda '30°C' va ostida bitta chiziq belgisi nimani bildiradi?",
    options: ["Qaynatish kerak", "30 darajada nozik (ehtiyotkorlik bilan) yuvish", "Faqat kimyoviy tozalash", "Dazmollash mumkin emas"],
    correct: 1,
    explanation: "Ostidagi chiziqcha mato nozik ekanligini va kir yuvish mashinasida past aylanish tezligida yuvish lozimligini bildiradi."
  },
  {
    id: 83,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "Quyoshdan himoyalovchi kremlardagi 'SPF' qisqartmasi nimani anglatadi?",
    options: ["Sun Protection Factor", "Solar Power Force", "Skin Pure Formula", "Safe Protection Free"],
    correct: 0,
    explanation: "SPF – Sun Protection Factor (Quyoshdan himoya omili) bo‘lib, terini zararli ultrabinafsha nurlaridan himoya qilish darajasini bildiradi."
  },
  {
    id: 84,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "Muzlatgichda xom go‘sht va pishgan ovqatlarni saqlashning eng asosiy gigiyenik qoidasi nima?",
    options: ["Bir idishga aralashtirish", "Xom go‘shtni alohida yopiq idishda, pastki javonda saqlash", "Pishgan ovqatni sovutmasdan qaynoq qo‘yish", "Eshik javoniga qo‘yish"],
    correct: 1,
    explanation: "Xom go‘shtdagi bakteriyalar boshqa tayyor oziq-ovqatlarga tushmasligi (kross-kontaminatsiya) uchun u doimo pastda va zich idishda saqlanadi."
  },
  {
    id: 85,
    category: "Kundalik Hayot",
    difficulty: "Qiyin",
    question: "Is gazidan (CO) zaharlanish xavfini oldini olish uchun uyda qanday qurilma o‘rnatilishi tavsiya etiladi?",
    options: ["Faqat konditsioner", "Is gazi (uglerod oksidi) datchigi / detektori", "Namlagich", "Harorat o‘lchagich"],
    correct: 1,
    explanation: "Is gazi hidsiz va ko‘rinmas bo‘lib, inson uni sezmay qoladi. Faqat maxsus datchiklar uning havoda paydo bo‘lganini darhol ovozli signal bilan ogohlantiradi."
  },
  {
    id: 86,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "Qo‘llarni sovun bilan kamida necha soniya davomida yaxshilab yuvish mikrob va viruslarni to‘liq yo‘qotadi?",
    options: ["3 soniya", "20 soniya", "2 daqiqa", "10 daqiqa"],
    correct: 1,
    explanation: "JSST tavsiyasiga ko‘ra, qo‘llarni kamida 20 soniya davomida barmoqlar oralig‘i bilan sovunlab yuvish barcha virus qobig‘ini parchalaydi."
  },
  {
    id: 87,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "Uy sharoitida elektr rozetkasiga suv tushganda yoki tutun chiqqanda birinchi navbatda nima qilish zarur?",
    options: ["Suv sepish", "Umumiy avtomatni (schyotchikni) o‘chirish", "Simni qo‘l bilan sug‘urish", "Ventilyator qo‘yish"],
    correct: 1,
    explanation: "Har doim elektr tokini asosiy taqsimlash qutisidagi (avtomat) kalitdan uzish kerak, tok ostidagi jihozga teginish hayot uchun xavfli."
  },
  {
    id: 88,
    category: "Kundalik Hayot",
    difficulty: "Oson",
    question: "Inson tanasida suyaklar mustahkam bo‘lishi uchun kalsiy bilan birga qaysi vitamin juda muhim?",
    options: ["D vitamini", "C vitamini", "B12 vitamini", "A vitamini"],
    correct: 0,
    explanation: "D vitamini kalsiyning ichaklardan qonga va suyaklarga so‘rilishini ta'minlaydi. U quyosh nuri ta'sirida terida sintezlanadi."
  },
  {
    id: 89,
    category: "Kundalik Hayot",
    difficulty: "O‘rta",
    question: "LED yoritgichlar an'anaviy cho‘g‘lanma lampalarga qaraganda elektr energiyasini taxminan necha foizga tejaydi?",
    options: ["10-20%", "40-50%", "80-90%", "Tejamaydi"],
    correct: 2,
    explanation: "LED lampalar energiyaning 85-90 foizini yorug‘likka aylantiradi, oddiy lampalar esa 95 foiz energiyani behuda issiqlik sifatida yo‘qotadi."
  },
  {
    id: 90,
    category: "Kundalik Hayot",
    difficulty: "Qiyin",
    question: "Paroxod va samolyotlarda harakatlanayotganda ko‘ngil aynishi (dengiz kasalligi) nima sababdan yuzaga keladi?",
    options: ["Oshqozon buzilishi", "Ko‘z ko‘rayotgan tasvir bilan quloqdagi vestibulyar apparat his qilayotgan harakat nomutanosibligi", "Kislorod ko‘pligi", "Havo bosimining pasayishi"],
    correct: 1,
    explanation: "Miya ichki quloqdan kelayotgan harakat signali bilan ko‘z ko‘rayotgan turg‘un kabina tasviri o‘rtasidagi nomutanosiblikdan adashadi."
  },

  // --- 7. OILA VA TARBIYA (15 ta) ---
  {
    id: 91,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "Oilada farzand tarbiyasida eng samarali va kuchli vosita nima hisoblanadi?",
    options: ["Qattiqqo‘llik va jazo", "Ota-onaning shaxsiy ibrati va mehr-muhabbati", "Faqat qimmat sovg‘alar berish", "Ko‘p tanqid qilish"],
    correct: 1,
    explanation: "Bolalar so‘zlardan ko‘ra ota-onaning xatti-harakati, odoblari va o‘zaro hurmatini ko‘rib ibrat oladilar."
  },
  {
    id: 92,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Qarindoshlik munosabatlarida tog‘aning farzandi sizga kim bo‘ladi?",
    options: ["Jiyan", "Buvadacha", "Tog‘avachcha", "Amakivachcha"],
    correct: 2,
    explanation: "O‘zbek milliy qadriyatlarida tog‘aning o‘g‘li yoki qizi tog‘avachcha deb ataladi."
  },
  {
    id: 93,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "O‘zbek xalq maqoliga ko‘ra: 'Oila – ... qo‘rg‘oni'. Bo‘sh joyni to‘ldiring.",
    options: ["Boylik", "Baxt va jamiyat", "Kuch", "Shon-shuhrat"],
    correct: 1,
    explanation: "Oila – muqaddas maskan, baxt qo‘rg‘oni va jamiyatning mustahkam tayanchi hisoblanadi."
  },
  {
    id: 94,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Farzandning ruhiy rivojlanishida otaning o‘rni psixologiyada nima bilan chambarchas bog‘liq?",
    options: ["Faqat moddiy ta'minot", "O‘ziga ishonch, iroda va dunyo bilan muloqot qilish chegaralari", "Hech qanday ta'siri yo‘q", "Faqat jazo berish"],
    correct: 1,
    explanation: "Otaning mehrli va adolatli ishtiroki bolada ichki xavfsizlik tuyg‘usi, o‘z kuchiga ishonch va qat'iyatni shakllantiradi."
  },
  {
    id: 95,
    category: "Oila va Tarbiya",
    difficulty: "Qiyin",
    question: "Pedagogikada bolaning yoshiga qarab mustaqil bo‘lishga intiladigan birinchi mashhur inqirozi ('Men o‘zim!') necha yoshda kuzatiladi?",
    options: ["1 yoshda", "3 yoshda", "7 yoshda", "12 yoshda"],
    correct: 1,
    explanation: "3 yosh inqirozi davrida bola o‘zini ota-onasidan alohida shaxs sifatida his qilib, hamma narsani 'Men o‘zim qilaman!' deb talab qiladi."
  },
  {
    id: 96,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "O‘zbek oilasida dasturxonga birinchi bo‘lib kim qo‘l uzatishi milliy odob hisoblanadi?",
    options: ["Kichik bolalar", "Kattalar va oqsoqollar", "Mehmon bo‘lmasa farqi yo‘q", "Eng tez yeydigan odam"],
    correct: 1,
    explanation: "O‘zbek an'analarida dasturxonga birinchi bo‘lib oila kattasi yoki mehmon duo qilib qo‘l uzatishi kattalarga hurmat ramzidir."
  },
  {
    id: 97,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Oila byudjetini to‘g‘ri rejalashtirishda '50/30/20' qoidasidagi 20% mablag‘ nimaga ajratilishi maqsadga muvofiq?",
    options: ["Ko‘ngilochar tadbirlarga", "Jamg‘arma va kelajak zaxirasiga", "Kiyim-kechakka", "Kredit to‘lashga"],
    correct: 1,
    explanation: "Mashhur moliyaviy qoidaga ko‘ra: 50% asosiy ehtiyojlarga (oziq-ovqat, kommunal), 30% xohishlarga, 20% esa xavfsizlik yostig‘i va jamg‘armaga yo‘naltiriladi."
  },
  {
    id: 98,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "Xalqaro Oila kuni (International Day of Families) har yili qaysi sanada nishonlanadi?",
    options: ["8-mart", "15-may", "1-iyun", "1-sentabr"],
    correct: 1,
    explanation: "Birlashgan Millatlar Tashkiloti tomonidan 15-may rasman Xalqaro Oila kuni deb e'lon qilingan."
  },
  {
    id: 99,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Bolaga kitob o‘qish odatini singdirishning eng samarali usuli qaysi?",
    options: ["Kitob o‘qishga majburlash", "Har oqshom birgalikda mehr bilan ertak va kitob o‘qish, uyda ota-onaning o‘zi kitob o‘qishi", "Faqat telefon berish", "Faqat maktabga topshirish"],
    correct: 1,
    explanation: "Ota-onaning birgalikda o‘qishi kitob mutolaasini yoqimli xotira va iliq muloqotga aylantiradi."
  },
  {
    id: 100,
    category: "Oila va Tarbiya",
    difficulty: "Qiyin",
    question: "Sharq donishmandlaridan Abdulloh Avloniy tarbiya haqida qanday mashhur purma'no so‘zni aytgan?",
    options: ["Tarbiya faqat maktab ishidir", "Tarbiya biz uchun yo hayot – yo mamot, yo najot – yo halokat, yo saodat – yo falokat masalasidir", "Tarbiyasiz ham yashash mumkin", "Tarbiya yoshlikda kerak emas"],
    correct: 1,
    explanation: "Munavvar ma'rifatparvar Abdulloh Avloniyning bu o‘giti millat kelajagi yoshlar tarbiyasiga bog‘liqligini chuqur ifodalaydi."
  },
  {
    id: 101,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "Qaynona bilan kelin o‘rtasidagi totuvlik va ahillikning kaliti nima?",
    options: ["O‘zaro hurmat, kechirimlilik va ochiq muloqot", "Befarqlik", "Doimiy bahslashish", "Aloqani uzish"],
    correct: 0,
    explanation: "Samimiy hurmat va kechirimlilik oilaning uzoq yillik barqarorligi va baxtining poydevoridir."
  },
  {
    id: 102,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Farzand noto‘g‘ri ish qilganda, psixologlar nimanikini tanqid qilishni tavsiya etadilar?",
    options: ["Bolaning butun shaxsiyatini ('Sen doim yomonsan')", "Aynan sodir etilgan nojo‘ya xatti-harakatni ('Bu qilgan ishing xato bo‘ldi')", "Uni boshqa bolalar bilan solishtirishni", "Indamay jazolashni"],
    correct: 1,
    explanation: "Bolaning shaxsiyatini emas, aynan xatti-harakatini tushuntirish uning o‘z qadr-qimmatini saqlab xatosini to‘g‘rilashiga yordam beradi."
  },
  {
    id: 103,
    category: "Oila va Tarbiya",
    difficulty: "Oson",
    question: "O‘zbek urf-odatlarida yangi tug‘ilgan chaqaloqqa qilinadigan an'anaviy marosim qaysi?",
    options: ["Beshik to‘yi", "Navro‘z", "Hosil bayrami", "Gashir"],
    correct: 0,
    explanation: "Beshik to‘yi chaqaloqning dunyoga kelishi munosabati bilan qarindosh-urug‘lar yig‘iladigan qadimiy quvonchli marosimdir."
  },
  {
    id: 104,
    category: "Oila va Tarbiya",
    difficulty: "O‘rta",
    question: "Oila a'zolari o‘rtasidagi hissiy aloqani mustahkamlaydigan kundalik eng yaxshi odat nima?",
    options: ["Har kim o‘z xonasida telefonga qarashi", "Kamida kuniga bir marta kechki ovqatda televizor va telefonsiz suhbatlashish", "Bir-biriga gapirmaslik", "Tez-tez janjallashish"],
    correct: 1,
    explanation: "Birgalikdagi kechki ovqat paytida kun taassurotlarini samimiy bo‘lishish oilaviy birdamlikni mustahkamlaydi."
  },
  {
    id: 105,
    category: "Oila va Tarbiya",
    difficulty: "Qiyin",
    question: "Zamonaviy psixolog Gari Chepmen nazariyasiga ko‘ra, 'Muhabbatning 5 xil tili' qaysilar?",
    options: ["Pul, Mansab, Mashina, Uy, Sovg‘a", "Maqov so‘zlar, Sifatli vaqt, Sovg‘alar, Yordam berish, Jismoniy quchoqlash", "Ovqat, Uyqu, Dam olish, Sayr, Sport", "Faqat sovg‘a berish va maqtash"],
    correct: 1,
    explanation: "Har bir oila a'zosi mehrni har xil tushunadi: kimdir maqtovdan, kimdir birga o‘tkazilgan vaqtdan yoki g‘amxo‘rlikdan quvonadi."
  },

  // --- 8. KINO, ADABIYOT VA SAN'AT (15 ta) ---
  {
    id: 106,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "O‘zbek kinosining eng sevimli komediyalaridan biri bo‘lgan 'Suyunchi' filmidagi qaysi obraz xalq qahramoniga aylangan?",
    options: ["Anzirat buvi", "Maysara", "Zulayho", "Kumushbibi"],
    correct: 0,
    explanation: "Zaynab Sadriyeva ijrosidagi mehribon va qat'iyatli Anzirat buvi qahramoni o‘zbek kinosining o‘lmas durdonasidir."
  },
  {
    id: 107,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "Abdulla Qodiriy qalamiga mansub birinchi o‘zbek romani qaysi?",
    options: ["Mehrobdan chayon", "O‘tkan kunlar", "Kecha va kunduz", "Sarob"],
    correct: 1,
    explanation: "1922-1925 yillarda yozilgan 'O‘tkan kunlar' romani o‘zbek adabiyotidagi ilk roman hisoblanadi."
  },
  {
    id: 108,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "Dunyodagi eng mashhur sirli tabassumli 'Mona Liza' (Jokonda) asarini qaysi uyg‘onish davri dahosi chizgan?",
    options: ["Mikelandjelo", "Leonardo da Vinchi", "Rafael Santi", "Rembrandt"],
    correct: 1,
    explanation: "Leonardo da Vinchi tomonidan chizilgan 'Mona Liza' hozirda Parijdagi Luvr muzeyida saqlanadi."
  },
  {
    id: 109,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "'Shum bola' qissasining muallifi bo‘lgan atoqli o‘zbek adibi kim?",
    options: ["G‘afur G‘ulom", "Oybek", "Said Ahmad", "Erkin Vohidov"],
    correct: 0,
    explanation: "G‘afur G‘ulomning o‘z bolalik xotiralari asosida yozilgan 'Shum bola' asari xalqimizning eng sevimli kitoblaridandir."
  },
  {
    id: 110,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Qiyin",
    question: "Dunyo adabiyotining eng ulkan hajmli xalq dostoni hisoblangan qirg‘iz xalq eposi qaysi?",
    options: ["Alpomish", "Manas", "Go‘ro‘g‘li", "Gilgamesh"],
    correct: 1,
    explanation: "'Manas' dostoni yarim milliondan ortiq she'riy satrni o‘z ichiga olib, 'Iliada' va 'Odisseya'dan 20 baravar kattadir."
  },
  {
    id: 111,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "O‘zbekiston Qahramoni, shoir Erkin Vohidov qaysi mashhur falsafiy she'riy asar muallifi?",
    options: ["O‘zbegim", "Ruhlar isyoni", "Yulduzli tunlar", "Ufq"],
    correct: 0,
    explanation: "Erkin Vohidovning 'O‘zbegim' qasidasi xalqimiz tarixi, g‘ururi va o‘zligini tarannum etgan shoh asardir."
  },
  {
    id: 112,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "Cho‘lponning 'Go‘zal' she'riga yozilgan qo‘shiq va 'Kecha va kunduz' romani qaysi adabiy harakat vakiliga tegishli?",
    options: ["Jadid adabiyoti", "Klassik adabiyot", "Futurizm", "Sentimentalizm"],
    correct: 0,
    explanation: "Abdulhamid Sulaymon o‘g‘li Cho‘lpon XX asr boshidagi ma'rifatparvar jadid adabiyotining eng yorqin lirik shoiridir."
  },
  {
    id: 113,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "Kino olamidagi eng nufuzli Amerika kinoakademiyasi mukofoti qanday ataladi?",
    options: ["Oskar (Oscar)", "Oltin globus", "Kann palmasi", "Grammy"],
    correct: 0,
    explanation: "Oskar haykalchasi har yili eng yaxshi rejissyor, aktyor va filmlarga topshiriladigan jahon kinosining eng oliy sovrinidir."
  },
  {
    id: 114,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "'Maftuningman' filmidagi qaysi qo‘shiq O‘zbekiston bo‘ylab sayohat ramziga aylangan?",
    options: ["Do‘ppi tikdim", "Kattaqo‘rg‘on", "Maftun bo‘ldim", "Barcha qo‘shiqlar mashhur"],
    correct: 3,
    explanation: "1958-yilda suratga olingan 'Maftuningman' filmidagi har bir qo‘shiq (Mutal Burhonov musiqasi) xalqimizning oltin merosidir."
  },
  {
    id: 115,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Qiyin",
    question: "G‘arb adabiyotida 'Romeo va Juletta' hamda 'Gamlet' tragediyalarini kim yozgan?",
    options: ["Uilyam Shekspir", "Iogann Gyote", "Viktor Gyugo", "Chorlz Dikkens"],
    correct: 0,
    explanation: "Ingliz dramaturgi Uilyam Shekspir Uyg‘onish davrining eng buyuk yozuvchisi hisoblanadi."
  },
  {
    id: 116,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "'Sehrli qalpoqcha' (Hoshimjon) ertak-qissasining muallifi bo‘lgan sevimli bolalar yozuvchisi kim?",
    options: ["Xudoyberdi To‘xtaboyev", "Anvar Obidjon", "Po‘lat Mo‘min", "Zafar Diyor"],
    correct: 0,
    explanation: "Xudoyberdi To‘xtaboyevning 'Sariq devni minib' asari ko‘plab xorijiy tillarga tarjima qilingan."
  },
  {
    id: 117,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "Fransuz yozuvchisi Antuan de Sent-Ekzyuperining qaysi falsafiy ertak kitobi butun dunyo kattalari va bolalari tomonidan seviladi?",
    options: ["Kichkina Shahzoda (Le Petit Prince)", "Robinzon Kruzo", "Gulliver", "Alisa mo‘jizalar mamlakatida"],
    correct: 0,
    explanation: "'Kichkina Shahzoda'dagi 'Biz qo‘lga o‘rgatganlarimiz uchun doimo mas'ulmiz' g‘oyasi mehr va do‘stlik ramzidir."
  },
  {
    id: 118,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Qiyin",
    question: "Mashhur 'Yulduzli tunlar' tarixiy romanida qaysi tarixiy shaxsning murakkab hayot yo‘li tasvirlangan?",
    options: ["Zahiriddin Muhammad Bobur", "Amir Temur", "Ulug‘bek", "Alisher Navoiy"],
    correct: 0,
    explanation: "Pirimqul Qodirovning 'Yulduzli tunlar' asarida Bobur Mirzoning shoh va shoir sifatidagi hayoti qalamga olingan."
  },
  {
    id: 119,
    category: "Kino, Adabiyot va San'at",
    difficulty: "Oson",
    question: "Musiqada nechta asosiy nota mavjud?",
    options: ["5 ta", "7 ta", "8 ta", "12 ta"],
    correct: 1,
    explanation: "Musiqada 7 ta asosiy nota bor: Do, Re, Mi, Fa, Sol, Lya, Si."
  },
  {
    id: 120,
    category: "Kino, Adabiyot va San'at",
    difficulty: "O‘rta",
    question: "Eshiklar ortidagi qadimiy ertaklar to‘plami bo‘lgan 'Ming bir kecha'da qaysi afsonaviy xalifa davri ko‘p tilga olinadi?",
    options: ["Xorun ar-Rashid", "Mansur", "Ma'mun", "Salohiddin Ayyubiy"],
    correct: 0,
    explanation: "Bag‘dod xalifasi Xorun ar-Rashid davri 'Ming bir kecha' ertaklarining markaziy qahramonlaridan biridir."
  },

  // --- 9. MATEMATIKA VA QIZIQARLI HISOB (15 ta) ---
  {
    id: 121,
    category: "Matematika",
    difficulty: "Oson",
    question: "Uchburchakning ichki burchaklari yig‘indisi necha gradusga teng?",
    options: ["90°", "180°", "270°", "360°"],
    correct: 1,
    explanation: "Har qanday tekislikdagi uchburchakning uchala burchagi yig‘indisi har doim roppa-rosa 180 gradusni tashkil qiladi."
  },
  {
    id: 122,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "Dunyodagi yagona juft tub son (faqat 1 ga va o‘ziga bo‘linadigan) qaysi?",
    options: ["0", "2", "4", "6"],
    correct: 1,
    explanation: "2 soni eng kichik tub son va yagona juft tub sondir. Qolgan barcha juft sonlar 2 ga ham bo‘lingani uchun tub bo‘lolmaydi."
  },
  {
    id: 123,
    category: "Matematika",
    difficulty: "Oson",
    question: "Kvadratning tomoni 6 sm bo‘lsa, uning yuzi (maydoni) qanchaga teng?",
    options: ["24 sm²", "36 sm²", "12 sm²", "30 sm²"],
    correct: 1,
    explanation: "Kvadrat yuzi tomonining kvadratiga teng: S = a² = 6 * 6 = 36 sm²."
  },
  {
    id: 124,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "Pifagor teoremasi to‘g‘ri burchakli uchburchak uchun qanday yoziladi (c - gipotenuza)?",
    options: ["a + b = c", "a² + b² = c²", "a * b = c²", "a² - b² = c²"],
    correct: 1,
    explanation: "Katetlarning kvadratlari yig‘indisi gipotenuzaning kvadratiga teng: a² + b² = c²."
  },
  {
    id: 125,
    category: "Matematika",
    difficulty: "Qiyin",
    question: "Fibonachchi ketma-ketligida har bir son o‘zidan oldingi ikki son yig‘indisiga teng: 1, 1, 2, 3, 5, 8, ... Keyingi son qaysi?",
    options: ["11", "13", "15", "16"],
    correct: 1,
    explanation: "5 + 8 = 13 bo‘ladi. Tabiatdagi pista donalari, gullar bargi va qovoq chiziqlari aynan shu qonuniyatga bo‘ysunadi."
  },
  {
    id: 126,
    category: "Matematika",
    difficulty: "Oson",
    question: "Har qanday sonni 0 ga ko‘paytirganda natija nima bo‘ladi?",
    options: ["O‘sha sonning o‘zi", "0", "1", "Cheksizlik"],
    correct: 1,
    explanation: "Nol har qanday sonni o‘ziga yutadi, ya'ni x * 0 = 0 bo‘ladi."
  },
  {
    id: 127,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "Doiraning uzunligini uning diametriga nisbati bo‘lgan mashhur Pi (π) sonining taqribiy qiymati qancha?",
    options: ["2.71", "3.14", "1.61", "4.20"],
    correct: 1,
    explanation: "Pi soni cheksiz davriy bo‘lmagan son bo‘lib, kundalik hisob-kitoblar uchun 3.14 deb olinadi."
  },
  {
    id: 128,
    category: "Matematika",
    difficulty: "Qiyin",
    question: "5 kishi uchrashib, bir-biri bilan qo‘l berib ko‘rishdi. Jami nechta qo‘l siqishish sodir bo‘ldi?",
    options: ["20 ta", "10 ta", "15 ta", "25 ta"],
    correct: 1,
    explanation: "Formula: n*(n-1)/2. Demak: 5 * 4 / 2 = 10 ta qo‘l siqishish amalga oshadi."
  },
  {
    id: 129,
    category: "Matematika",
    difficulty: "Oson",
    question: "Bir soatda necha soniya bor?",
    options: ["60 soniya", "600 soniya", "3600 soniya", "86400 soniya"],
    correct: 2,
    explanation: "1 soat = 60 daqiqa, 1 daqiqa = 60 soniya. Demak, 60 * 60 = 3600 soniya."
  },
  {
    id: 130,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "2 ning 5-darajasi (2⁵) nechaga teng?",
    options: ["10", "25", "32", "64"],
    correct: 2,
    explanation: "2 * 2 * 2 * 2 * 2 = 32 ga teng bo‘ladi."
  },
  {
    id: 131,
    category: "Matematika",
    difficulty: "Oson",
    question: "Rim raqamlarida 'L' qaysi sonni bildiradi?",
    options: ["50", "100", "500", "1000"],
    correct: 0,
    explanation: "Rim raqamlari: X = 10, L = 50, C = 100, D = 500, M = 1000."
  },
  {
    id: 132,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "Agar mahsulot narxi dastlab 100 000 so‘m bo‘lib, 20 foizga arzonlashgan bo‘lsa, yangi narx qancha?",
    options: ["70 000 so‘m", "80 000 so‘m", "85 000 so‘m", "90 000 so‘m"],
    correct: 1,
    explanation: "100 000 ning 20 foizi 20 000 so‘m. 100 000 - 20 000 = 80 000 so‘m bo‘ladi."
  },
  {
    id: 133,
    category: "Matematika",
    difficulty: "Qiyin",
    question: "Kvadrat tenglamaning diskriminanti nolga teng bo‘lsa (D = 0), tenglama nechta haqiqiy ildizga ega bo‘ladi?",
    options: ["Ildizi yo‘q", "Bitta (ikkita teng ildiz)", "Ikkita turli ildiz", "Cheksiz ko‘p"],
    correct: 1,
    explanation: "Diskriminant 0 bo‘lsa, tenglama yagona takrorlanuvchi haqiqiy ildizga (x = -b / 2a) ega bo‘ladi."
  },
  {
    id: 134,
    category: "Matematika",
    difficulty: "Oson",
    question: "Teng tomonli uchburchakning har bir burchagi necha gradusdan iborat?",
    options: ["45°", "60°", "90°", "120°"],
    correct: 1,
    explanation: "Barcha tomonlari teng bo‘lgan uchburchakning burchaklari ham teng: 180° / 3 = 60°."
  },
  {
    id: 135,
    category: "Matematika",
    difficulty: "O‘rta",
    question: "Nolning faktoriali (0!) nechaga teng deb qabul qilingan?",
    options: ["0", "1", "Aniqlanmagan", "-1"],
    correct: 1,
    explanation: "Matematik qoidalar va kombinatorikaga ko‘ra, 0! = 1 deb belgilanadi."
  },

  // --- 10. UMUMIY BILIMLAR VA QIZIQARLI FAKTLAR (15 ta) ---
  {
    id: 136,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Dunyodagi eng qimmatbaho qora qimmatbaho toshlardan biri bo‘lgan olmos qaysi sof kimyoviy elementdan iborat?",
    options: ["Kremniy", "Uglerod (Karbon)", "Temir", "Oltin"],
    correct: 1,
    explanation: "Olmos va oddiy qalam grafitining ikkalasi ham sof uglerod atomlaridan tashkil topgan, faqat ularning kristall panjarasi turlicha."
  },
  {
    id: 137,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Qadimgi Dunyoning yetti mo‘jizasidan hozirgi kungacha saqlanib qolgan yagona mo‘jiza qaysi?",
    options: ["Semiramida osma bog‘lari", "Giza ehromlari (Misr piramidalari)", "Rodos haykali", "Aleksandriya mayog‘i"],
    correct: 1,
    explanation: "Misrdagi Xeops piramidasi (Giza) 4500 yildan ortiq vaqtdan beri saqlanib qolgan yagona qadimiy mo‘jizadir."
  },
  {
    id: 138,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Futbol bo‘yicha jahon chempionatlarida eng ko‘p (5 marta) chempion bo‘lgan terma jamoa qaysi?",
    options: ["Germaniya", "Argentina", "Braziliya", "Italiya"],
    correct: 2,
    explanation: "Braziliya terma jamoasi 1958, 1962, 1970, 1994 va 2002 yillarda g‘olib bo‘lib, 'Pentakampeon' unvoniga ega."
  },
  {
    id: 139,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Inson tanasidagi eng uzun va eng mustahkam suyak qaysi?",
    options: ["Boldir suyagi", "Son suyagi (femur)", "Umurtqa", "Qovurg‘a"],
    correct: 1,
    explanation: "Son suyagi tana vaznining asosiy og‘irligini ko‘taradi va beton kabi ulkan bosimga bardosh bera oladi."
  },
  {
    id: 140,
    category: "Umumiy Bilimlar",
    difficulty: "Qiyin",
    question: "Qahva (kofe) donalari dastlab qaysi qadimgi mamlakat hududidagi cho‘ponlar tomonidan kashf etilgan?",
    options: ["Braziliya", "Efiopiya (Habashiston)", "Kolumbiya", "Yaman"],
    correct: 1,
    explanation: "Afsonaga ko‘ra, Efiopiyalik Kaldi ismli cho‘pon echkilarining qizil kofe mevalarini yeb g‘ayratli bo‘lib qolganini payqagan."
  },
  {
    id: 141,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Shaxmat taxtasida jami nechta katak bor?",
    options: ["36 ta", "64 ta", "100 ta", "48 ta"],
    correct: 1,
    explanation: "Shaxmat taxtasi 8x8 o‘lchamda bo‘lib, jami 64 ta oq va qora katakchalardan iborat."
  },
  {
    id: 142,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Yer yuzidagi eng chuqur dengiz botig‘i – Mariana botig‘ining chuqurligi qancha?",
    options: ["5 000 metr", "taxminan 11 000 metr", "20 000 metr", "3 000 metr"],
    correct: 1,
    explanation: "Mariana botig‘idagi 'Bezna Chellendjera' nuqtasi 10 994 metr chuqurlikka ega."
  },
  {
    id: 143,
    category: "Umumiy Bilimlar",
    difficulty: "Qiyin",
    question: "Harflari soni bo‘yicha dunyodagi eng uzun alifbo qaysi tilga tegishli (74 ta harf)?",
    options: ["Rus tili", "Kxmer tili (Kambodja)", "Arab tili", "Xitoy tili"],
    correct: 1,
    explanation: "Kambodjada ishlatiladigan Kxmer alifbosi 74 ta harfdan iborat bo‘lib, Ginnesning rekordlar kitobiga kiritilgan."
  },
  {
    id: 144,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Olimpiada o‘yinlarining beshta halqasi nimani ramzi hisoblanadi?",
    options: ["5 ta sport turini", "Dunyoning 5 ta qit'asini", "5 ta buyuk davlatni", "5 ta faslni"],
    correct: 1,
    explanation: "Moviy, sariq, qora, yashil va qizil rangli 5 ta chirmashgan halqa Yevropa, Osiyo, Afrika, Avstraliya va Amerikaning birdamligini ifodalaydi."
  },
  {
    id: 145,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Asalning ming yillar davomida aynimay, buzilmay saqlanib qolishining asosiy sababi nima?",
    options: ["Konservantlar borligi", "Namlikning juda pastligi va tabiiy kislotalilik (bakteriyalar yashay olmaydi)", "Qorong‘ida turishi", "Asalarilar uni muzlatishi"],
    correct: 1,
    explanation: "Asal tarkibida suv juda kam va vodorod peroksid hosil qiluvchi fermentlar bor, shu sababli Misr maqbaralaridagi 3000 yillik asal ham yeyishga yaroqli chiqqan."
  },
  {
    id: 146,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Inson ko‘zining rangli pardasi nima deb ataladi?",
    options: ["Qorachiq", "Kamalak parda (Iris)", "Gavhar", "To‘r parda"],
    correct: 1,
    explanation: "Iris (kamalak parda) tarkibidagi melanin pigmenti miqdoriga qarab ko‘zlar jigarrang, ko‘k, yashil yoki qora bo‘ladi."
  },
  {
    id: 147,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Dunyodagi eng qimmat ziravor bo‘lib, uni yig‘ish uchun faqat binafsharang gulning nozik urug‘chi iplari qo‘lda teriladigan ziravor qaysi?",
    options: ["Dolchin (Koritsa)", "Za'faron (Shafran)", "Murch", "Zanjabil"],
    correct: 1,
    explanation: "1 kilogramm za'faron olish uchun 150 000 dan ortiq gulni qo‘lda terish kerak, shu sababli uning bahosi tilla bilan tenglashadi."
  },
  {
    id: 148,
    category: "Umumiy Bilimlar",
    difficulty: "Qiyin",
    question: "Yer yuzidagi barcha odamlarning umumiy DNKsi bir-biri bilan qanchalik o‘xshash?",
    options: ["50 foiz", "80 foiz", "99.9 foiz", "70 foiz"],
    correct: 2,
    explanation: "Sayyoramizdagi har qanday ikki insonning genetik kodi 99.9 foiz mutlaqo bir xil. Bizning barcha tashqi farqlarimiz atigi 0.1 foiz ichida yotadi!"
  },
  {
    id: 149,
    category: "Umumiy Bilimlar",
    difficulty: "Oson",
    question: "Dunyodagi eng katta baliq qaysi?",
    options: ["Kit akulasi (Whale shark)", "Oq akula", "Laqqa baliq", "Tikanli skat"],
    correct: 0,
    explanation: "Kit akulasi uzunligi 12-18 metrgacha yetadigan haqiqiy baliqdir (moviy kit esa sutemizuvchi jonivor)."
  },
  {
    id: 150,
    category: "Umumiy Bilimlar",
    difficulty: "O‘rta",
    question: "Inson tanasida eng tez harakatlanuvchi va eng charchamaydigan mushaklar qaysi?",
    options: ["Oyoq mushaklari", "Ko‘zni harakatlantiruvchi mushaklar", "Qo‘l mushaklari", "Jag‘ mushaklari"],
    correct: 1,
    explanation: "Ko‘z mushaklari kuniga 100 000 martadan ortiq harakatlanadi va odam uxlab yotganda ham (tush ko‘rganda) faol ishlashda davom etadi."
  }
];

// ============================================================================
// 2. PROCEDURAL SOUND ENGINE (Web Audio API Synthesizer)
// ============================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.musicEnabled = true;
    this.ambientOscillators = [];
    this.ambientGain = null;
    this.isMusicPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, gainVal = 0.2, attack = 0.01) {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainVal, this.ctx.currentTime + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playTone error", e);
    }
  }

  playClick() {
    this.playTone(880, "sine", 0.08, 0.15);
  }

  playHover() {
    this.playTone(520, "triangle", 0.04, 0.05);
  }

  playCorrect() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Harmonious major arpeggio: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, "sine", 0.35, 0.22, 0.02);
      }, index * 60);
    });
  }

  playWrong() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Polite soft dissonance
    this.playTone(220, "sawtooth", 0.35, 0.15, 0.02);
    setTimeout(() => {
      this.playTone(185, "sawtooth", 0.4, 0.15, 0.02);
    }, 120);
  }

  playTick(isUrgent = false) {
    if (!this.sfxEnabled) return;
    const freq = isUrgent ? 1100 : 700;
    this.playTone(freq, "square", 0.04, isUrgent ? 0.12 : 0.06);
  }

  playCombo(level) {
    if (!this.sfxEnabled) return;
    this.init();
    const baseFreq = 440 + level * 80;
    this.playTone(baseFreq, "triangle", 0.4, 0.25);
    setTimeout(() => {
      this.playTone(baseFreq * 1.5, "sine", 0.4, 0.2);
    }, 80);
  }

  playFanfare() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Triumphant progression: C5 - F5 - G5 - C6
    const notes = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.2 },
      { f: 1046.50, d: 0.6 }
    ];
    let time = 0;
    notes.forEach((n) => {
      setTimeout(() => {
        this.playTone(n.f, "sine", n.d, 0.3, 0.02);
      }, time * 1000);
      time += 0.14;
    });
  }

  // Synthesizes pleasant ambient space chord progression
  startAmbientMusic() {
    if (!this.musicEnabled || this.isMusicPlaying) return;
    this.init();
    if (!this.ctx) return;

    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.linearRampToValueAtTime(0.045, this.ctx.currentTime + 3);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.ambientGain.connect(filter);
      filter.connect(this.ctx.destination);

      // Soft detuned chord pad (Am9: A2, C3, E3, G3, B3)
      const freqs = [110.0, 130.81, 164.81, 196.0, 246.94];
      this.ambientOscillators = freqs.map((f, i) => {
        const osc = this.ctx.createOscillator();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f + (Math.random() - 0.5) * 1.2, this.ctx.currentTime);
        osc.connect(this.ambientGain);
        osc.start();
        return osc;
      });

      this.isMusicPlaying = true;
    } catch (e) {
      console.warn("Ambient music init error", e);
    }
  }

  stopAmbientMusic() {
    if (!this.isMusicPlaying) return;
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
    }
    setTimeout(() => {
      this.ambientOscillators.forEach((osc) => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.ambientOscillators = [];
      this.isMusicPlaying = false;
    }, 1100);
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.startAmbientMusic();
    } else {
      this.stopAmbientMusic();
    }
    return this.musicEnabled;
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    return this.sfxEnabled;
  }
}

// ============================================================================
// 3. THREE.JS 3D ARENA ENGINE
// ============================================================================
class ThreeArena {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // 3D Objects
    this.stageMesh = null;
    this.gridHelper = null;
    this.floatingCrystal = null;
    this.crystalWire = null;
    this.pedestals = [];
    this.particleField = null;
    this.particleGeometry = null;

    // Lights
    this.ambientLight = null;
    this.dirLight = null;
    this.pointLightViolet = null;
    this.pointLightGold = null;
    this.reactionLight = null;

    // State & Animation
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.clock = new THREE.Clock();
    this.quality = "high"; // high, medium, low
    this.isVictoryOrbit = false;
    this.orbitAngle = 0;
    this.confettiParticles = [];

    this.init();
  }

  init() {
    if (!window.THREE) {
      console.error("Three.js kutubxonasi topilmadi.");
      return;
    }

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x090715, 0.025);

    // 2. Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    this.camera.position.set(0, 7, 20);
    this.camera.lookAt(0, 1.5, 0);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality === "high",
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = this.quality === "high";
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting Setup
    this.setupLights();

    // 5. World Geometries (Cyber Arena Stage)
    this.buildStage();
    this.buildFloatingTrophy();
    this.buildPedestals();
    this.buildParticles();

    // 6. Listeners
    window.addEventListener("resize", () => this.onWindowResize());
    window.addEventListener("mousemove", (e) => this.onMouseMove(e));

    // 7. Start render loop
    this.animate();
  }

  setupLights() {
    this.ambientLight = new THREE.AmbientLight(0x2d1b69, 0.7);
    this.scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.dirLight.position.set(10, 20, 15);
    this.dirLight.castShadow = this.quality === "high";
    this.scene.add(this.dirLight);

    // Violet Accent Point Light
    this.pointLightViolet = new THREE.PointLight(0x8b5cf6, 2, 40);
    this.pointLightViolet.position.set(-8, 5, 4);
    this.scene.add(this.pointLightViolet);

    // Gold Accent Point Light
    this.pointLightGold = new THREE.PointLight(0xf59e0b, 2.2, 40);
    this.pointLightGold.position.set(8, 6, 4);
    this.scene.add(this.pointLightGold);

    // Dynamic Reactive Center Light (flashes green/red)
    this.reactionLight = new THREE.PointLight(0x8b5cf6, 0.5, 25);
    this.reactionLight.position.set(0, 3, 0);
    this.scene.add(this.reactionLight);
  }

  buildStage() {
    // Hexagonal cyber main stage
    const hexRadius = 8;
    const stageGeo = new THREE.CylinderGeometry(hexRadius, hexRadius + 0.5, 0.6, 6);
    const stageMat = new THREE.MeshStandardMaterial({
      color: 0x140e2d,
      roughness: 0.35,
      metalness: 0.8,
      flatShading: true
    });
    this.stageMesh = new THREE.Mesh(stageGeo, stageMat);
    this.stageMesh.position.y = -0.3;
    this.stageMesh.receiveShadow = true;
    this.scene.add(this.stageMesh);

    // Glowing stage neon rim
    const ringGeo = new THREE.TorusGeometry(hexRadius - 0.2, 0.08, 16, 6);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
    const rim = new THREE.Mesh(ringGeo, ringMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.01;
    this.stageMesh.add(rim);

    // Cyber ground grid
    const grid = new THREE.GridHelper(40, 40, 0x8b5cf6, 0x22134e);
    grid.position.y = -0.35;
    this.scene.add(grid);
  }

  buildFloatingTrophy() {
    // Center Floating Holographic Gem / Icosahedron
    const gemGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0x92400e,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false
    });
    this.floatingCrystal = new THREE.Mesh(gemGeo, gemMat);
    this.floatingCrystal.position.set(0, 2.5, 0);
    this.floatingCrystal.castShadow = true;
    this.scene.add(this.floatingCrystal);

    // Outer wireframe shell
    const wireGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.crystalWire = new THREE.Mesh(wireGeo, wireMat);
    this.floatingCrystal.add(this.crystalWire);
  }

  buildPedestals() {
    // 4 Floating Question Pillars around the arena
    const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
    const dist = 6.2;

    angles.forEach((angle, idx) => {
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      const group = new THREE.Group();
      group.position.set(x, 0, z);

      // Pillar base
      const baseGeo = new THREE.CylinderGeometry(0.6, 0.8, 1.2, 8);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x1a1238,
        metalness: 0.7,
        roughness: 0.4
      });
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.y = 0.6;
      group.add(base);

      // Floating crystal icon
      const miniGeo = new THREE.OctahedronGeometry(0.4, 0);
      const miniMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0x06b6d4 : 0xf59e0b,
        emissive: 0x1e1b4b,
        roughness: 0.2
      });
      const mini = new THREE.Mesh(miniGeo, miniMat);
      mini.position.y = 1.8;
      group.add(mini);

      this.scene.add(group);
      this.pedestals.push({ group, mini, baseY: 1.8, offset: idx });
    });
  }

  buildParticles() {
    const particleCount = this.quality === "high" ? 700 : 350;
    this.particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x8b5cf6);
    const c2 = new THREE.Color(0xf59e0b);
    const c3 = new THREE.Color(0x06b6d4);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 25 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const chosenColor = Math.random() > 0.6 ? c2 : Math.random() > 0.3 ? c1 : c3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    this.particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.particleField = new THREE.Points(this.particleGeometry, particleMat);
    this.scene.add(this.particleField);
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(e) {
    this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  setQuality(level) {
    this.quality = level;
    if (this.renderer) {
      this.renderer.setPixelRatio(level === "high" ? Math.min(window.devicePixelRatio, 2) : 1);
      this.renderer.shadowMap.enabled = level === "high";
    }
    // Recreate particles with appropriate density
    if (this.particleField) {
      this.scene.remove(this.particleField);
      this.buildParticles();
    }
  }

  // Visual Reactions to Game Events
  flashCorrect() {
    if (!this.reactionLight) return;
    this.reactionLight.color.setHex(0x10b981);
    this.reactionLight.intensity = 6.0;

    if (this.floatingCrystal) {
      this.floatingCrystal.scale.set(1.4, 1.4, 1.4);
    }
  }

  flashWrong() {
    if (!this.reactionLight) return;
    this.reactionLight.color.setHex(0xef4444);
    this.reactionLight.intensity = 5.0;

    // Small camera shake
    this.camera.position.x += 0.3;
  }

  resetReactionLight() {
    if (!this.reactionLight) return;
    this.reactionLight.color.setHex(0x8b5cf6);
    this.reactionLight.intensity = 0.5;
  }

  startVictoryOrbit() {
    this.isVictoryOrbit = true;
    this.orbitAngle = 0;
  }

  stopVictoryOrbit() {
    this.isVictoryOrbit = false;
    this.camera.position.set(0, 7, 20);
    this.camera.lookAt(0, 1.5, 0);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smooth mouse parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 2. Camera handling
    if (this.isVictoryOrbit) {
      this.orbitAngle += delta * 0.8;
      const radius = 18;
      this.camera.position.x = Math.sin(this.orbitAngle) * radius;
      this.camera.position.z = Math.cos(this.orbitAngle) * radius;
      this.camera.position.y = 8 + Math.sin(this.orbitAngle * 2) * 2;
      this.camera.lookAt(0, 2, 0);
    } else {
      this.camera.position.x += (this.mouse.x * 2.5 - this.camera.position.x) * 0.05;
      this.camera.position.y += (7 - this.mouse.y * 1.5 - this.camera.position.y) * 0.05;
      this.camera.lookAt(0, 1.5, 0);
    }

    // 3. Floating Trophy Animation
    if (this.floatingCrystal) {
      this.floatingCrystal.rotation.y += delta * 0.7;
      this.floatingCrystal.rotation.x = Math.sin(elapsedTime * 1.2) * 0.2;
      this.floatingCrystal.position.y = 2.5 + Math.sin(elapsedTime * 2.0) * 0.3;

      // Smooth scale restore
      this.floatingCrystal.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);

      if (this.crystalWire) {
        this.crystalWire.rotation.y -= delta * 1.2;
        this.crystalWire.rotation.z += delta * 0.5;
      }
    }

    // 4. Pedestal animations
    this.pedestals.forEach((p) => {
      p.mini.rotation.y += delta * 1.5;
      p.mini.position.y = p.baseY + Math.sin(elapsedTime * 2.5 + p.offset) * 0.15;
    });

    // 5. Particle field slow drift
    if (this.particleField && this.particleGeometry) {
      this.particleField.rotation.y += delta * 0.04;
      const pos = this.particleGeometry.attributes.position.array;
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] += delta * 0.6;
        if (pos[i] > 25) pos[i] = -2;
      }
      this.particleGeometry.attributes.position.needsUpdate = true;
    }

    // 6. Slowly restore reaction light
    if (this.reactionLight && this.reactionLight.intensity > 0.6) {
      this.reactionLight.intensity = THREE.MathUtils.lerp(this.reactionLight.intensity, 0.5, 0.05);
    }

    // Render frame
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

// ============================================================================
// 4. STORAGE & STATS MANAGER
// ============================================================================
class StorageManager {
  constructor() {
    this.prefix = "family_arena_";
    this.initProfile();
  }

  initProfile() {
    if (!this.getProfile()) {
      this.saveProfile({
        name: "Bilimdon",
        avatar: "👑",
        totalScore: 0,
        gamesPlayed: 0,
        bestScore: 0
      });
    }
  }

  getProfile() {
    const raw = localStorage.getItem(this.prefix + "profile");
    return raw ? JSON.parse(raw) : null;
  }

  saveProfile(profile) {
    localStorage.setItem(this.prefix + "profile", JSON.stringify(profile));
  }

  getLeaderboard() {
    const raw = localStorage.getItem(this.prefix + "leaderboard");
    return raw ? JSON.parse(raw) : [];
  }

  addLeaderboardEntry(entry) {
    const list = this.getLeaderboard();
    list.push({
      id: Date.now(),
      name: entry.name,
      mode: entry.mode,
      score: entry.score,
      accuracy: entry.accuracy,
      date: new Date().toLocaleDateString("uz-UZ")
    });

    // Sort by highest score first, keep top 20
    list.sort((a, b) => b.score - a.score);
    const trimmed = list.slice(0, 20);
    localStorage.setItem(this.prefix + "leaderboard", JSON.stringify(trimmed));

    // Update profile best score
    const profile = this.getProfile();
    if (profile) {
      profile.gamesPlayed += 1;
      profile.totalScore += entry.score;
      if (entry.score > profile.bestScore) {
        profile.bestScore = entry.score;
      }
      this.saveProfile(profile);
    }
  }

  clearLeaderboard() {
    localStorage.removeItem(this.prefix + "leaderboard");
  }
}

// ============================================================================
// 5. REALTIME MULTIPLAYER CLIENT (Socket.IO Architecture)
// ============================================================================
class MultiplayerClient {
  constructor(serverUrl = "http://localhost:3000") {
    this.serverUrl = serverUrl;
    this.socket = null;
    this.isConnected = false;
    this.roomCode = null;
    this.isHost = false;
    this.players = [];
  }

  connect(onStatusChange) {
    if (typeof io === "undefined") {
      if (onStatusChange) onStatusChange(false, "Socket.io kutubxonasi yuklanmagan");
      return;
    }

    try {
      this.socket = io(this.serverUrl, {
        reconnectionAttempts: 2,
        timeout: 4000
      });

      this.socket.on("connect", () => {
        this.isConnected = true;
        if (onStatusChange) onStatusChange(true, "Serverga muvaffaqiyatli ulandi (Online)");
      });

      this.socket.on("disconnect", () => {
        this.isConnected = false;
        if (onStatusChange) onStatusChange(false, "Serverdan uzildi (Offline)");
      });

      this.socket.on("connect_error", () => {
        this.isConnected = false;
        if (onStatusChange) onStatusChange(false, "Server bilan aloqa yo‘q (Lokal rejim tavsiya etiladi)");
      });

      this.socket.on("room-updated", (data) => {
        this.players = data.players || [];
        window.ui.updateLobbyPlayers(this.players);
      });

      this.socket.on("game-started", (data) => {
        window.ui.showToast("Multiplayer jangi boshlandi!", "success");
        // Start multiplayer game session
        window.game.startMultiplayerSession(data.questions);
      });
    } catch (e) {
      console.warn("Socket connect error", e);
      if (onStatusChange) onStatusChange(false, "Serverga ulanishda xatolik");
    }
  }

  createRoom(playerName, avatar) {
    if (!this.isConnected || !this.socket) {
      window.ui.showToast("Serverga ulanmagan! Avval server.js ni ishga tushiring.", "error");
      return;
    }
    this.isHost = true;
    this.socket.emit("create-room", { playerName, avatar }, (res) => {
      if (res && res.success) {
        this.roomCode = res.roomCode;
        window.ui.showLobby(this.roomCode, true);
      }
    });
  }

  joinRoom(roomCode, playerName, avatar) {
    if (!this.isConnected || !this.socket) {
      window.ui.showToast("Serverga ulanmagan! Avval server.js ni ishga tushiring.", "error");
      return;
    }
    this.isHost = false;
    this.socket.emit("join-room", { roomCode: roomCode.toUpperCase(), playerName, avatar }, (res) => {
      if (res && res.success) {
        this.roomCode = res.roomCode;
        window.ui.showLobby(this.roomCode, false);
      } else {
        window.ui.showToast(res ? res.message : "Xonaga ulanib bo‘lmadi", "error");
      }
    });
  }

  startGame() {
    if (this.socket && this.isHost && this.roomCode) {
      this.socket.emit("start-game", { roomCode: this.roomCode });
    }
  }

  leaveRoom() {
    if (this.socket && this.roomCode) {
      this.socket.emit("leave-room", { roomCode: this.roomCode });
    }
    this.roomCode = null;
    this.isHost = false;
    this.players = [];
  }
}

// ============================================================================
// 6. GAME MANAGER (O‘YIN ASOSIY LOGIKASI VA 5 TA REJIM)
// ============================================================================
class GameManager {
  constructor() {
    this.mode = "classic"; // 'classic' | 'survival' | 'timeattack' | 'family' | 'daily'
    this.questions = [];
    this.currentIndex = 0;
    this.currentQuestion = null;

    // Single Player Stats
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.lives = 3;
    this.totalTimeTaken = 0;

    // Timer
    this.timer = null;
    this.timeLeft = 20;
    this.maxTime = 20;
    this.isAnswerLocked = false;
    this.questionStartTime = 0;

    // Family Mode State
    this.familyPlayers = [];
    this.familyActiveIndex = 0;
    this.familyRoundsPerPlayer = 5;
    this.familyTurnCount = 0;

    // Auto Advance Setting
    this.autoAdvance = false;
    this.autoAdvanceTimeout = null;
  }

  // Shuffle Utility
  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Deterministic daily seed generator (YYYYMMDD)
  getDailySeed() {
    const today = new Date();
    const str = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
    let seed = 0;
    for (let i = 0; i < str.length; i++) {
      seed = (seed * 31 + str.charCodeAt(i)) % 100000;
    }
    return seed;
  }

  setupDailyQuestions() {
    const seed = this.getDailySeed();
    const all = [...QUESTION_DATABASE];
    // Deterministic pseudo-random shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const pseudoRand = (seed * (i + 1) * 9301 + 49297) % 233280;
      const j = Math.floor((pseudoRand / 233280) * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, 10);
  }

  start(mode = "classic", options = {}) {
    this.mode = mode;
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.lives = 3;
    this.totalTimeTaken = 0;
    this.isAnswerLocked = false;

    // Setup Questions based on mode & filter
    if (mode === "daily") {
      this.questions = this.setupDailyQuestions();
    } else if (options.category) {
      const filtered = QUESTION_DATABASE.filter((q) => q.category === options.category);
      this.questions = this.shuffleArray(filtered).slice(0, 10);
    } else if (mode === "survival") {
      this.questions = this.shuffleArray(QUESTION_DATABASE); // unlimited deck
    } else if (mode === "timeattack") {
      this.questions = this.shuffleArray(QUESTION_DATABASE);
    } else if (mode === "family") {
      this.familyPlayers = options.familyPlayers || [
        { name: "O‘yinchi 1", avatar: "👑", score: 0, correct: 0 },
        { name: "O‘yinchi 2", avatar: "🦁", score: 0, correct: 0 }
      ];
      this.familyRoundsPerPlayer = options.rounds || 5;
      this.familyActiveIndex = 0;
      this.familyTurnCount = 0;
      const totalRequired = this.familyPlayers.length * this.familyRoundsPerPlayer;
      this.questions = this.shuffleArray(QUESTION_DATABASE).slice(0, totalRequired);
    } else {
      // Classic
      this.questions = this.shuffleArray(QUESTION_DATABASE).slice(0, 10);
    }

    // Timer configs per mode
    if (mode === "timeattack") {
      this.timeLeft = 60;
      this.maxTime = 60;
    } else {
      this.maxTime = 20;
      this.timeLeft = 20;
    }

    window.ui.switchScreen("screen-gameplay");
    window.ui.initGameplayUI(this);

    if (mode === "timeattack") {
      this.startTimeAttackMasterClock();
    }

    this.loadQuestion();
  }

  loadQuestion() {
    if (this.autoAdvanceTimeout) {
      clearTimeout(this.autoAdvanceTimeout);
      this.autoAdvanceTimeout = null;
    }

    // End conditions check
    if (this.currentIndex >= this.questions.length) {
      this.endGame();
      return;
    }

    this.currentQuestion = this.questions[this.currentIndex];
    this.isAnswerLocked = false;
    this.questionStartTime = performance.now();

    if (this.mode !== "timeattack") {
      this.timeLeft = 20;
      this.maxTime = 20;
      this.startQuestionTimer();
    }

    window.arena.resetReactionLight();
    window.ui.renderQuestion(this.currentQuestion, this);
  }

  startQuestionTimer() {
    clearInterval(this.timer);
    window.ui.updateTimer(this.timeLeft, this.maxTime);

    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      window.ui.updateTimer(this.timeLeft, this.maxTime);

      if (this.timeLeft <= 5 && this.timeLeft > 0) {
        window.audio.playTick(true);
      } else if (this.timeLeft > 0) {
        window.audio.playTick(false);
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeout();
      }
    }, 1000);
  }

  startTimeAttackMasterClock() {
    clearInterval(this.timer);
    window.ui.updateTimer(this.timeLeft, this.maxTime);

    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      window.ui.updateTimer(this.timeLeft, this.maxTime);

      if (this.timeLeft <= 10 && this.timeLeft > 0) {
        window.audio.playTick(true);
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.endGame();
      }
    }, 1000);
  }

  submitAnswer(selectedIndex) {
    if (this.isAnswerLocked) return;
    this.isAnswerLocked = true;

    if (this.mode !== "timeattack") {
      clearInterval(this.timer);
    }

    const elapsedSeconds = (performance.now() - this.questionStartTime) / 1000;
    this.totalTimeTaken += elapsedSeconds;

    const isCorrect = selectedIndex === this.currentQuestion.correct;

    if (isCorrect) {
      this.handleCorrectAnswer(elapsedSeconds);
    } else {
      this.handleWrongAnswer();
    }

    window.ui.showAnswerResults(selectedIndex, this.currentQuestion.correct, this.currentQuestion.explanation);

    if (this.autoAdvance) {
      this.autoAdvanceTimeout = setTimeout(() => {
        this.nextQuestion();
      }, 3800);
    }
  }

  handleTimeout() {
    if (this.isAnswerLocked) return;
    this.isAnswerLocked = true;
    this.totalTimeTaken += this.maxTime;

    this.handleWrongAnswer();
    window.ui.showAnswerResults(-1, this.currentQuestion.correct, this.currentQuestion.explanation);
  }

  handleCorrectAnswer(elapsedSeconds) {
    this.correctCount++;
    this.streak++;
    if (this.streak > this.maxStreak) this.maxStreak = this.streak;

    // Calculate Combo Multiplier: 1x, 1.2x, 1.5x, 2.0x, 2.5x
    let comboMultiplier = 1.0;
    if (this.streak === 2) comboMultiplier = 1.2;
    else if (this.streak === 3) comboMultiplier = 1.5;
    else if (this.streak === 4) comboMultiplier = 2.0;
    else if (this.streak >= 5) comboMultiplier = 2.5;

    // Speed bonus calculation (up to 500 bonus points if fast)
    let speedBonus = 0;
    if (this.mode !== "timeattack") {
      const speedRatio = Math.max(0, this.timeLeft / this.maxTime);
      speedBonus = Math.round(speedRatio * 500);
    }

    const earnedPoints = Math.round((1000 + speedBonus) * comboMultiplier);
    this.score += earnedPoints;

    // Mode-specific perks
    if (this.mode === "timeattack") {
      this.timeLeft = Math.min(60, this.timeLeft + 3);
      window.ui.showFloatingBonus("+3s");
    }

    if (this.mode === "family") {
      const activePlayer = this.familyPlayers[this.familyActiveIndex];
      activePlayer.score += earnedPoints;
      activePlayer.correct += 1;
    }

    // Audio & 3D Reaction
    window.audio.playCorrect();
    if (this.streak >= 2) window.audio.playCombo(this.streak);
    window.arena.flashCorrect();
    window.ui.animateScoreAdded(earnedPoints, this.score, comboMultiplier);
  }

  handleWrongAnswer() {
    this.wrongCount++;
    this.streak = 0; // reset combo

    if (this.mode === "survival") {
      this.lives--;
      window.ui.updateLives(this.lives);
      if (this.lives <= 0) {
        window.audio.playWrong();
        window.arena.flashWrong();
        setTimeout(() => this.endGame(), 2000);
        return;
      }
    } else if (this.mode === "timeattack") {
      this.timeLeft = Math.max(0, this.timeLeft - 2);
      window.ui.showFloatingBonus("-2s");
    }

    window.audio.playWrong();
    window.arena.flashWrong();
    window.ui.resetCombo();
  }

  nextQuestion() {
    if (this.autoAdvanceTimeout) {
      clearTimeout(this.autoAdvanceTimeout);
      this.autoAdvanceTimeout = null;
    }

    if (this.mode === "family") {
      this.familyTurnCount++;
      // Rotate active player
      this.familyActiveIndex = (this.familyActiveIndex + 1) % this.familyPlayers.length;
    }

    this.currentIndex++;
    this.loadQuestion();
  }

  endGame() {
    clearInterval(this.timer);
    if (this.autoAdvanceTimeout) clearTimeout(this.autoAdvanceTimeout);

    // Audio fanfare & 3D victory orbit
    window.audio.playFanfare();
    window.arena.startVictoryOrbit();

    // Trigger confetti explosion
    if (window.confetti) {
      window.confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        window.confetti({
          particleCount: 80,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
        window.confetti({
          particleCount: 80,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
      }, 400);
    }

    // Accuracy and Stats
    const totalAns = this.correctCount + this.wrongCount;
    const accuracy = totalAns > 0 ? Math.round((this.correctCount / totalAns) * 100) : 0;
    const avgSpeed = totalAns > 0 ? (this.totalTimeTaken / totalAns).toFixed(1) : 0;

    // Save to leaderboard
    const profile = window.storage.getProfile();
    const playerName = profile ? profile.name : "Bilimdon";

    if (this.mode !== "family") {
      window.storage.addLeaderboardEntry({
        name: playerName,
        mode: this.mode.toUpperCase(),
        score: this.score,
        accuracy: accuracy + "%"
      });
    }

    window.ui.renderGameOver({
      mode: this.mode,
      score: this.score,
      accuracy,
      maxStreak: this.maxStreak,
      avgSpeed,
      familyPlayers: this.familyPlayers
    });
  }

  startMultiplayerSession(serverQuestions) {
    this.questions = serverQuestions;
    this.start("classic");
  }
}

// ============================================================================
// 7. USER INTERFACE MANAGER (UI, ANIMATSIYALAR VA BOSHQARUV)
// ============================================================================
class UIManager {
  constructor() {
    this.activeScreenId = "screen-main-menu";
    this.selectedCategory = null;
    this.initEventListeners();
    this.renderCategoriesGrid();
    this.updateHeaderProfile();
    this.updateStatsPreview();
  }

  switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
      this.activeScreenId = screenId;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === "success" ? "✅" : type === "error" ? "⚠️" : "ℹ️"}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  updateHeaderProfile() {
    const profile = window.storage.getProfile();
    if (profile) {
      document.getElementById("header-avatar").textContent = profile.avatar;
      document.getElementById("header-player-name").textContent = profile.name;
    }
  }

  updateStatsPreview() {
    const profile = window.storage.getProfile();
    if (profile) {
      document.getElementById("stat-user-best").textContent = profile.bestScore.toLocaleString();
    }
  }

  renderCategoriesGrid() {
    const grid = document.getElementById("categories-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const categories = [
      { name: "O‘zbekiston Tarixi va Madaniyati", icon: "🏛️" },
      { name: "Dunyo Geografiyasi", icon: "🌍" },
      { name: "Mantiqiy Savollar", icon: "🧠" },
      { name: "Fan va Texnologiya", icon: "🔬" },
      { name: "Tabiat va Hayvonot Olami", icon: "🐾" },
      { name: "Kundalik Hayot", icon: "💡" },
      { name: "Oila va Tarbiya", icon: "👨‍👩‍👧‍👦" },
      { name: "Kino, Adabiyot va San'at", icon: "🎨" },
      { name: "Matematika", icon: "📐" },
      { name: "Umumiy Bilimlar", icon: "🌟" }
    ];

    categories.forEach((cat) => {
      const count = QUESTION_DATABASE.filter((q) => q.category.startsWith(cat.name.split(" ")[0])).length || 15;
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
        <div class="cat-icon">${cat.icon}</div>
        <div class="cat-title">${cat.name}</div>
        <div class="cat-count">${count} ta savol</div>
      `;
      card.addEventListener("click", () => {
        window.audio.playClick();
        window.game.start("classic", { category: cat.name });
      });
      grid.appendChild(card);
    });
  }

  initGameplayUI(game) {
    document.getElementById("hud-question-total").textContent =
      game.mode === "survival" || game.mode === "timeattack" ? "∞" : game.questions.length;

    // Mode-specific HUD indicators
    const livesContainer = document.getElementById("hud-lives-container");
    const turnBanner = document.getElementById("family-turn-banner");

    if (game.mode === "survival") {
      livesContainer.classList.remove("hidden");
      this.updateLives(3);
    } else {
      livesContainer.classList.add("hidden");
    }

    if (game.mode === "family") {
      turnBanner.classList.remove("hidden");
      this.updateFamilyTurnBanner(game);
    } else {
      turnBanner.classList.add("hidden");
    }

    this.resetCombo();
    document.getElementById("hud-score-val").textContent = "0";
    document.getElementById("explanation-card").classList.add("hidden");
  }

  renderQuestion(question, game) {
    document.getElementById("hud-question-num").textContent = game.currentIndex + 1;
    document.getElementById("hud-category-badge").textContent = question.category;
    document.getElementById("hud-difficulty-badge").textContent = question.difficulty;

    if (game.mode === "family") {
      this.updateFamilyTurnBanner(game);
    }

    document.getElementById("question-text").textContent = question.question;

    // Reset Answer buttons
    const ansGrid = document.getElementById("answers-grid");
    ansGrid.querySelectorAll(".answer-btn").forEach((btn, idx) => {
      btn.className = "answer-btn";
      btn.disabled = false;
      const optText = btn.querySelector(".opt-text");
      if (optText) optText.textContent = question.options[idx];
      const optStatus = btn.querySelector(".opt-status-icon");
      if (optStatus) optStatus.textContent = "";
    });

    document.getElementById("explanation-card").classList.add("hidden");
  }

  updateTimer(timeLeft, maxTime) {
    const timerNum = document.getElementById("hud-timer-num");
    const progressCircle = document.getElementById("timer-progress-circle");

    timerNum.textContent = Math.max(0, timeLeft);

    // SVG dashoffset calculation: 264 is perimeter (2 * PI * 42)
    const perimeter = 264;
    const progress = Math.max(0, timeLeft / maxTime);
    const offset = perimeter * (1 - progress);
    progressCircle.style.strokeDashoffset = offset;

    // Shift colors from cyan -> gold -> red
    if (timeLeft <= 5) {
      progressCircle.style.stroke = "#ef4444";
      timerNum.style.color = "#ef4444";
    } else if (timeLeft <= 10) {
      progressCircle.style.stroke = "#f59e0b";
      timerNum.style.color = "#fbbf24";
    } else {
      progressCircle.style.stroke = "#06b6d4";
      timerNum.style.color = "#ffffff";
    }
  }

  updateLives(lives) {
    const container = document.getElementById("hud-lives-container");
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const heart = document.createElement("span");
      heart.className = i < lives ? "heart active" : "heart lost";
      heart.textContent = i < lives ? "❤️" : "🖤";
      container.appendChild(heart);
    }
  }

  updateFamilyTurnBanner(game) {
    const player = game.familyPlayers[game.familyActiveIndex];
    document.getElementById("family-turn-avatar").textContent = player.avatar;
    document.getElementById("family-turn-name").textContent = player.name;
  }

  showAnswerResults(selectedIndex, correctIndex, explanation) {
    const ansGrid = document.getElementById("answers-grid");
    const buttons = ansGrid.querySelectorAll(".answer-btn");

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      const statusIcon = btn.querySelector(".opt-status-icon");

      if (idx === correctIndex) {
        btn.classList.add("correct");
        if (statusIcon) statusIcon.textContent = "✔";
      } else if (idx === selectedIndex) {
        btn.classList.add("wrong");
        if (statusIcon) statusIcon.textContent = "✖";
      } else {
        btn.classList.add("dimmed");
      }
    });

    // Show Explanation
    const expCard = document.getElementById("explanation-card");
    const isUserCorrect = selectedIndex === correctIndex;

    document.getElementById("exp-status-icon").textContent = isUserCorrect ? "🎉" : "💡";
    document.getElementById("exp-title").textContent = isUserCorrect
      ? "Barakalla, to‘g‘ri javob!"
      : "To‘g‘ri javob va izoh:";
    document.getElementById("exp-text").textContent = explanation;

    expCard.classList.remove("hidden");
  }

  animateScoreAdded(points, totalScore, multiplier) {
    const scoreVal = document.getElementById("hud-score-val");
    scoreVal.textContent = totalScore.toLocaleString();

    const floating = document.getElementById("hud-floating-score");
    floating.textContent = `+${points}`;
    floating.classList.remove("animate");
    void floating.offsetWidth; // trigger reflow
    floating.classList.add("animate");

    // Combo Flame Badge
    const comboBadge = document.getElementById("hud-combo-badge");
    const comboVal = document.getElementById("hud-combo-val");
    if (multiplier > 1.0) {
      comboVal.textContent = `x${multiplier.toFixed(1)}`;
      comboBadge.classList.remove("hidden");
    } else {
      comboBadge.classList.add("hidden");
    }
  }

  resetCombo() {
    document.getElementById("hud-combo-badge").classList.add("hidden");
  }

  showFloatingBonus(text) {
    const floating = document.getElementById("hud-floating-score");
    floating.textContent = text;
    floating.style.color = text.startsWith("+") ? "#10b981" : "#ef4444";
    floating.classList.remove("animate");
    void floating.offsetWidth;
    floating.classList.add("animate");
  }

  renderGameOver(stats) {
    this.switchScreen("screen-game-over");

    const singleStatsGrid = document.getElementById("single-player-stats-grid");
    const familyPodium = document.getElementById("family-podium-wrapper");

    if (stats.mode === "family") {
      singleStatsGrid.classList.add("hidden");
      familyPodium.classList.remove("hidden");
      this.renderFamilyPodium(stats.familyPlayers);
    } else {
      singleStatsGrid.classList.remove("hidden");
      familyPodium.classList.add("hidden");

      document.getElementById("sum-score-val").textContent = stats.score.toLocaleString();
      document.getElementById("sum-accuracy-val").textContent = stats.accuracy + "%";
      document.getElementById("sum-streak-val").textContent = "x" + (stats.maxStreak >= 5 ? "2.5" : stats.maxStreak >= 2 ? "1.5" : "1.0");
      document.getElementById("sum-speed-val").textContent = stats.avgSpeed + "s";
    }

    // Rank evaluation badge
    const evalRank = document.getElementById("eval-rank");
    const evalText = document.getElementById("eval-text");

    if (stats.accuracy >= 90) {
      evalRank.textContent = "GRANDMASTER AKADEMIK 🏆";
      evalText.textContent = "Siz daho darajasida intellektual salohiyatga egasiz! Barcha savollarga a'lo javob berildi.";
    } else if (stats.accuracy >= 70) {
      evalRank.textContent = "PROFESSOR 🎓";
      evalText.textContent = "Ajoyib natija! Siz butun oilangizning faxrli bilimdonisiz.";
    } else if (stats.accuracy >= 50) {
      evalRank.textContent = "TADQIQOTCHI 🔍";
      evalText.textContent = "Yaxshi bilimlar bazasi! Yana ozgina mashq qilib yangi rekord o‘rnata olasiz.";
    } else {
      evalRank.textContent = "ISHTIYOQ MAND O‘RGANUVCHI 🌱";
      evalText.textContent = "Har bir xato – yangi bilim olish imkoniyati. Qaytadan sinab ko‘ring!";
    }
  }

  renderFamilyPodium(players) {
    const display = document.getElementById("podium-display");
    display.innerHTML = "";

    // Sort players by score
    const sorted = [...players].sort((a, b) => b.score - a.score);

    // Arrange as: [2nd Place, 1st Place, 3rd Place]
    const podiumSlots = [];
    if (sorted[1]) podiumSlots.push({ rank: 2, class: "second", data: sorted[1] });
    if (sorted[0]) podiumSlots.push({ rank: 1, class: "first", data: sorted[0] });
    if (sorted[2]) podiumSlots.push({ rank: 3, class: "third", data: sorted[2] });

    podiumSlots.forEach((slot) => {
      const col = document.createElement("div");
      col.className = `podium-column ${slot.class}`;
      col.innerHTML = `
        <div class="podium-avatar">${slot.data.avatar}</div>
        <div class="podium-name">${slot.data.name}</div>
        <div class="podium-score">${slot.data.score.toLocaleString()} ball</div>
        <div class="podium-pillar">${slot.rank}</div>
      `;
      display.appendChild(col);
    });
  }

  renderLeaderboard() {
    const tbody = document.getElementById("leaderboard-tbody");
    tbody.innerHTML = "";
    const list = window.storage.getLeaderboard();

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color: var(--text-muted);">Hozircha natijalar mavjud emas. Birinchi bo‘lib o‘yinni yakunlang!</td></tr>`;
      return;
    }

    list.forEach((item, index) => {
      const tr = document.createElement("tr");
      const rankClass = index === 0 ? "top-1" : index === 1 ? "top-2" : index === 2 ? "top-3" : "";
      tr.innerHTML = `
        <td><span class="rank-badge ${rankClass}">${index + 1}</span></td>
        <td><strong>${item.name}</strong></td>
        <td><span class="category-pill">${item.mode}</span></td>
        <td>${item.accuracy}</td>
        <td><strong style="color:var(--accent-gold-light);">${item.score.toLocaleString()}</strong></td>
        <td>${item.date}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  showLobby(roomCode, isHost) {
    document.getElementById("lobby-view-card").classList.remove("hidden");
    document.getElementById("lobby-room-code").textContent = roomCode;
    const startBtn = document.getElementById("btn-lobby-start-game");
    startBtn.disabled = !isHost;
    startBtn.style.opacity = isHost ? "1" : "0.5";
  }

  updateLobbyPlayers(players) {
    const ul = document.getElementById("lobby-players-ul");
    ul.innerHTML = "";
    document.getElementById("lobby-player-count").textContent = players.length;

    players.forEach((p) => {
      const li = document.createElement("li");
      li.className = "lobby-player-item";
      li.innerHTML = `<span>${p.avatar || "👤"}</span> <span>${p.name}</span> ${p.isHost ? "👑 (Host)" : ""}`;
      ul.appendChild(li);
    });
  }

  // Bind All Event Listeners
  initEventListeners() {
    // Brand header returns home
    document.getElementById("header-brand").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    // Sound Toggles
    const btnSound = document.getElementById("btn-sound-toggle");
    btnSound.addEventListener("click", () => {
      const isSound = window.audio.toggleSfx();
      document.getElementById("sound-icon").textContent = isSound ? "🔊" : "🔇";
      this.showToast(isSound ? "Ovoz effektlari yoqildi" : "Ovoz effektlari o‘chirildi");
    });

    const btnMusic = document.getElementById("btn-music-toggle");
    btnMusic.addEventListener("click", () => {
      const isMusic = window.audio.toggleMusic();
      document.getElementById("music-icon").textContent = isMusic ? "🎵" : "🔈";
      this.showToast(isMusic ? "Orqa fon musiqasi yoqildi" : "Musiqa o‘chirildi");
    });

    // Main Menu Action Buttons
    document.getElementById("btn-quick-play").addEventListener("click", () => {
      window.audio.playClick();
      window.game.start("classic");
    });

    document.getElementById("btn-modes-menu").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-game-modes");
    });

    document.getElementById("btn-family-battle").addEventListener("click", () => {
      window.audio.playClick();
      this.setupFamilyBattleInputs(3);
      this.switchScreen("screen-family-setup");
    });

    document.getElementById("btn-online-multiplayer").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-multiplayer");
      window.multiplayer.connect((isOnline, message) => {
        const dot = document.getElementById("net-status-dot");
        const txt = document.getElementById("net-status-text");
        dot.className = `status-dot ${isOnline ? "online" : "offline"}`;
        txt.textContent = message;
      });
    });

    // Sub Navigation buttons
    document.getElementById("btn-categories-view").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-categories");
    });

    document.getElementById("btn-leaderboard-view").addEventListener("click", () => {
      window.audio.playClick();
      this.renderLeaderboard();
      this.switchScreen("screen-leaderboard");
    });

    document.getElementById("btn-rules-view").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-rules");
    });

    document.getElementById("btn-stats-view").addEventListener("click", () => {
      window.audio.playClick();
      this.renderLeaderboard();
      this.switchScreen("screen-leaderboard");
    });

    // Back buttons
    document.getElementById("btn-back-from-modes").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    document.getElementById("btn-back-from-family").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-game-modes");
    });

    document.getElementById("btn-back-from-cats").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    document.getElementById("btn-back-from-multiplayer").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    document.getElementById("btn-back-from-leaderboard").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    document.getElementById("btn-back-from-rules").addEventListener("click", () => {
      window.audio.playClick();
      this.switchScreen("screen-main-menu");
    });

    // Mode Selection Cards
    document.querySelectorAll(".mode-card").forEach((card) => {
      card.addEventListener("click", () => {
        const mode = card.getAttribute("data-mode");
        window.audio.playClick();
        if (mode === "family") {
          this.setupFamilyBattleInputs(3);
          this.switchScreen("screen-family-setup");
        } else {
          window.game.start(mode);
        }
      });
    });

    // Category Screen 'Play All'
    document.getElementById("btn-play-all-categories").addEventListener("click", () => {
      window.audio.playClick();
      window.game.start("classic");
    });

    // Family Setup Player Count Selectors
    document.querySelectorAll(".count-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const count = parseInt(btn.getAttribute("data-count"), 10);
        this.setupFamilyBattleInputs(count);
      });
    });

    // Start Family Battle Button
    document.getElementById("btn-start-family-battle").addEventListener("click", () => {
      window.audio.playClick();
      const players = [];
      const rows = document.querySelectorAll(".family-member-row");
      rows.forEach((row) => {
        const nameInput = row.querySelector(".member-name-input");
        const avatarSelect = row.querySelector(".member-avatar-select");
        players.push({
          name: nameInput.value.trim() || "Oila A'zosi",
          avatar: avatarSelect.value,
          score: 0,
          correct: 0
        });
      });

      const rounds = parseInt(document.getElementById("select-family-rounds").value, 10);
      window.game.start("family", { familyPlayers: players, rounds });
    });

    // Answer Buttons
    document.querySelectorAll(".answer-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-index"), 10);
        window.game.submitAnswer(index);
      });
      btn.addEventListener("mouseenter", () => window.audio.playHover());
    });

    // Next Question Button
    document.getElementById("btn-next-question").addEventListener("click", () => {
      window.audio.playClick();
      window.game.nextQuestion();
    });

    // Quit Game Confirm Modal
    document.getElementById("btn-quit-game").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-quit-confirm").classList.remove("hidden");
    });

    document.getElementById("btn-quit-cancel").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-quit-confirm").classList.add("hidden");
    });

    document.getElementById("btn-quit-confirm").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-quit-confirm").classList.add("hidden");
      clearInterval(window.game.timer);
      this.switchScreen("screen-main-menu");
    });

    // Game Over Buttons
    document.getElementById("btn-replay-game").addEventListener("click", () => {
      window.audio.playClick();
      window.arena.stopVictoryOrbit();
      window.game.start(window.game.mode);
    });

    document.getElementById("btn-return-home").addEventListener("click", () => {
      window.audio.playClick();
      window.arena.stopVictoryOrbit();
      this.switchScreen("screen-main-menu");
    });

    document.getElementById("btn-share-result").addEventListener("click", () => {
      window.audio.playClick();
      const text = `🏆 Men FAMILY ARENA o‘yinida ${window.game.score} ball to‘pladim! Siz ham oilangiz bilan bilimlaringizni sinab ko‘ring!`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        this.showToast("Natija nusxalandi!", "success");
      } else {
        this.showToast(text, "info");
      }
    });

    // Leaderboard Clear
    document.getElementById("btn-clear-leaderboard").addEventListener("click", () => {
      window.audio.playClick();
      window.storage.clearLeaderboard();
      this.renderLeaderboard();
      this.showToast("Tarix tozalandi", "info");
    });

    // Modals: Settings
    document.getElementById("btn-settings-open").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-settings").classList.remove("hidden");
    });

    document.getElementById("btn-close-settings").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-settings").classList.add("hidden");
    });

    document.getElementById("btn-save-settings").addEventListener("click", () => {
      window.audio.playClick();
      const sfx = document.getElementById("toggle-sfx").checked;
      const music = document.getElementById("toggle-music").checked;
      const quality = document.getElementById("select-graphics").value;
      const autoadvance = document.getElementById("toggle-autoadvance").checked;
      const serverUrl = document.getElementById("input-server-url").value.trim();

      window.audio.sfxEnabled = sfx;
      window.audio.musicEnabled = music;
      if (!music) window.audio.stopAmbientMusic();
      else window.audio.startAmbientMusic();

      window.arena.setQuality(quality);
      window.game.autoAdvance = autoadvance;
      window.multiplayer.serverUrl = serverUrl;

      document.getElementById("modal-settings").classList.add("hidden");
      this.showToast("Sozlamalar saqlandi", "success");
    });

    // Modals: Profile
    document.getElementById("btn-profile-pill").addEventListener("click", () => {
      window.audio.playClick();
      const profile = window.storage.getProfile();
      if (profile) {
        document.getElementById("input-player-name").value = profile.name;
      }
      document.getElementById("modal-profile").classList.remove("hidden");
    });

    document.getElementById("btn-close-profile").addEventListener("click", () => {
      window.audio.playClick();
      document.getElementById("modal-profile").classList.add("hidden");
    });

    document.querySelectorAll(".avatar-choice").forEach((avatar) => {
      avatar.addEventListener("click", () => {
        document.querySelectorAll(".avatar-choice").forEach((a) => a.classList.remove("active"));
        avatar.classList.add("active");
      });
    });

    document.getElementById("btn-save-profile").addEventListener("click", () => {
      window.audio.playClick();
      const name = document.getElementById("input-player-name").value.trim() || "Bilimdon";
      const activeAvatar = document.querySelector(".avatar-choice.active");
      const avatar = activeAvatar ? activeAvatar.getAttribute("data-avatar") : "👑";

      const current = window.storage.getProfile() || {};
      window.storage.saveProfile({
        ...current,
        name,
        avatar
      });

      this.updateHeaderProfile();
      document.getElementById("modal-profile").classList.add("hidden");
      this.showToast("Profil muvaffaqiyatli yangilandi", "success");
    });

    // Multiplayer Buttons
    document.getElementById("btn-mp-create-room").addEventListener("click", () => {
      window.audio.playClick();
      const profile = window.storage.getProfile();
      window.multiplayer.createRoom(profile.name, profile.avatar);
    });

    document.getElementById("btn-mp-join-room").addEventListener("click", () => {
      window.audio.playClick();
      const code = document.getElementById("input-room-code").value.trim();
      if (!code) {
        this.showToast("Iltimos, 4 xonali kodni kiriting", "error");
        return;
      }
      const profile = window.storage.getProfile();
      window.multiplayer.joinRoom(code, profile.name, profile.avatar);
    });

    document.getElementById("btn-lobby-start-game").addEventListener("click", () => {
      window.audio.playClick();
      window.multiplayer.startGame();
    });

    document.getElementById("btn-lobby-leave").addEventListener("click", () => {
      window.audio.playClick();
      window.multiplayer.leaveRoom();
      document.getElementById("lobby-view-card").classList.add("hidden");
      this.showToast("Xona tark etildi");
    });

    // Keyboard Shortcuts (1, 2, 3, 4, A, B, C, D, Space)
    window.addEventListener("keydown", (e) => {
      if (this.activeScreenId !== "screen-gameplay") return;

      const key = e.key.toUpperCase();
      if (key === "1" || key === "A") window.game.submitAnswer(0);
      else if (key === "2" || key === "B") window.game.submitAnswer(1);
      else if (key === "3" || key === "C") window.game.submitAnswer(2);
      else if (key === "4" || key === "D") window.game.submitAnswer(3);
      else if (key === " " || key === "ENTER") {
        const expCard = document.getElementById("explanation-card");
        if (!expCard.classList.contains("hidden")) {
          window.game.nextQuestion();
        }
      }
    });
  }

  setupFamilyBattleInputs(count) {
    const container = document.getElementById("family-members-container");
    container.innerHTML = "";

    const defaultNames = ["Dadam (Boshliq)", "Oyim (Dono)", "Men (Chempion)", "Ukam (Tezkor)", "Singlim (Zukko)"];
    const defaultAvatars = ["👨‍💼", "👩‍💼", "👑", "🚀", "🌟"];

    for (let i = 0; i < count; i++) {
      const row = document.createElement("div");
      row.className = "family-member-row";
      row.innerHTML = `
        <span class="member-order">${i + 1}</span>
        <select class="member-avatar-select">
          <option value="👨‍💼" ${i === 0 ? "selected" : ""}>👨‍💼 Ota</option>
          <option value="👩‍💼" ${i === 1 ? "selected" : ""}>👩‍💼 Ona</option>
          <option value="👑" ${i === 2 ? "selected" : ""}>👑 Toj</option>
          <option value="🦁" ${i === 3 ? "selected" : ""}>🦁 Arslon</option>
          <option value="🦉">🦉 Donishmand</option>
          <option value="🚀">🚀 Raketa</option>
          <option value="⚡">⚡ Chaqmoq</option>
          <option value="💎">💎 Olmos</option>
        </select>
        <input type="text" class="member-name-input" value="${defaultNames[i] || `O‘yinchi ${i + 1}`}" maxlength="15">
      `;
      container.appendChild(row);
    }
  }
}

// ============================================================================
// APP BOOTSTRAPPER
// ============================================================================
window.addEventListener("DOMContentLoaded", () => {
  // Initialize Global Instances
  window.audio = new SoundEngine();
  window.storage = new StorageManager();
  window.arena = new ThreeArena("canvas-container");
  window.multiplayer = new MultiplayerClient();
  window.game = new GameManager();
  window.ui = new UIManager();

  // First click to unlock Web Audio API Context
  const unlockAudio = () => {
    window.audio.init();
    window.audio.startAmbientMusic();
    document.removeEventListener("pointerdown", unlockAudio);
  };
  document.addEventListener("pointerdown", unlockAudio, { once: true });

  console.log("⚡ FAMILY ARENA — Professional 3D Game loaded successfully!");
});
