'use strict';

/**
 * Ai8V Video Library Engine
 * This single script controls the entire video library functionality.
 * Instructions: Customize the 'allVideos' array with your video data.
 */
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // CONFIGURATION: Customize this section with your video data
    // ===================================================================
    const allVideos = [

         { id: "68wrqyjTkvI",
 title: "سر هوس العالم بلعبة لابوبو: من فكرة إلى مليارات الدولارات",
 categories: [
    "الاقتصاد السلوكي",
    "اقتصاد الصين والولايات المتحدة",
    "قصص نجاح"
  ],
 description: "ما سر هوس العالم بلعبة لابوبو؟ كيف هزت الصين عرش عمالقة الألعاب في أمريكا وأوروبا؟",
 articleUrl: "/corporate-titans/labubu-pop-mart-blind-box-phenomenon/" },


         { id: "xjRI3BW2iBU",
 title: "شركات تشغيل العقارات: دليلك للاستثمار العقاري الذكي في مصر",
 categories: [
    "الاستثمار وتكوين الثروات",
    "اقتصاديات الدول العربية",
    "قصص نجاح"
  ],
 description: "كيف تستثمر بطريقة جديدة في العقارات؟",
 articleUrl: "/investing-and-wealth/reoc-egypt-real-estate-investment-bonyan/" },


         { id: "g2qLzSuf6_8",
 title: "أزمة تسلا: صراع ترامب وماسك يهدد مستقبل الشركة",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "هل يدمر ترامب أهم شركة لأغنى رجل في العالم؟ كيف تستفيد الصين؟",
 articleUrl: "/superpower-economy/tesla-trump-musk-crisis-china/" },


         { id: "wdSE6KAYbgk",
 title: "تكلفة حرب إسرائيل على إيران: خسائر استراتيجية فادحة؟",
 categories: [
    "اقتصاد الكيان المحتل",
    "الاقتصاد السلوكي"
  ],
 description: "من انتصر في حرب إسرائيل وإيران؟ هل تندلع الحرب مرة أخرى؟",
 articleUrl: "/geopolitics-and-conflicts/israel-iran-war-costs-strategy/" },


         { id: "Kf6CDwxWhuo",
 title: "الضربة الأمريكية على إيران: تكاليف وأسرار العملية النووية",
 categories: [
    "اقتصاد الكيان المحتل",
    "اقتصاد الصين والولايات المتحدة"
  ],
 description: "هل دمر ترامب مشروع إيران النووي بالفعل؟",
 articleUrl: "/geopolitics-and-conflicts/us-strike-iran-nuclear-facilities/" },


         { id: "UmrA7TpBkgk",
 title: "الدفاع الجوي الإسرائيلي: طبقاته الثماني وثغراته",
 categories: [
    "اقتصاد الكيان المحتل",
    "الشركات العالمية"
  ],
 description: "كيف تخترق صواريخ إيران أقوى دفاع جوي؟ ما سر ثغرة إسرائيل؟",
 articleUrl: "/geopolitics-and-conflicts/israeli-air-defense-layers-vulnerabilities/" },


         { id: "ijLWTSOND1k",
 title: "طموح السعودية في الذكاء الاصطناعي: شركة هيومين وصفقاتها",
 categories: [
    "اقتصاديات الدول العربية",
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "لماذا تدفع السعودية مليارات الدولارات لشراء أهم تكنولوجيا في العالم؟",
 articleUrl: "/regional-and-historical/saudi-arabia-ai-humain-nvidia/" },


         { id: "rjIZFOkdI6M",
 title: "الروبوتات في الصين: سلاح بكين السري في الحرب التجارية",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "لماذا تبني الصين جيشًا مذهلًا من الآلات؟ هل تسيطر به على صناعة العالم؟",
 articleUrl: "/superpower-economy/china-robotics-automation-trade-war/" },


         { id: "S29N93TvSA4",
 title: "معاهدة نهر السند: سلاح الهند المائي ضد باكستان",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "اقتصاد الصين والولايات المتحدة"
  ],
 description: "لماذا تريد الهند قطع المياه عن باكستان؟ هل تدمر حياة الباكستانيين؟",
 articleUrl: "/regional-and-historical/india-pakistan-indus-water-war/" },


         { id: "g0KojW_oVyg",
 title: "سر صناعة الآيفون: لماذا تسيطر الصين على 90% من التصنيع؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "ما هو الأيفون المستحيل الذي يريد ترامب صناعته؟ هل يدمر أبل؟",
 articleUrl: "/superpower-economy/iphone-manufacturing-china-supply-chain/" },


         { id: "bXMIOZ0qwmw",
 title: "حرب ترامب التجارية مع الصين: الأسباب والتأثيرات",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية",
    "الاقتصاد السلوكي"
  ],
 description: "لماذا تحدّت الصين ترامب وأجبرته على التراجع؟ من يربح الحرب التجارية؟",
 articleUrl: "/superpower-economy/trump-china-trade-war-tariffs/" },


         { id: "KQ_iPp_4Xu0",
 title: "الزكاة: أقدم نظام للعدالة الاقتصادية في الإسلام",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "ما الأهمية الاقتصادية للزكاة؟ كيف تحمي الفقراء وتنقذ المجتمع؟",
 articleUrl: "/regional-and-historical/zakat-islamic-economics-wealth-distribution/" },


         { id: "FO8q9HAauy4",
 title: "عبد الرحمن بن عوف: دروس في التجارة من أغنى الصحابة",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف أصبح عبدالرحمن بن عوف أحد أغنى أغنياء المسلمين؟ لماذا نجح وما ثروته؟",
 articleUrl: "/regional-and-historical/abd-al-rahman-ibn-awf-islamic-economics/" },


         { id: "QZIHugj3SQA",
 title: "الوقف في الإسلام: تاريخه، أثره الاقتصادي، وأشهر أمثلته",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف أبهر المسلمون العالم بنظام الوقف العبقري؟",
articleUrl: "/regional-and-historical/islamic-waqf-economic-history/" },


         { id: "GRUqMLnGXu4",
 title: "الزراعة في الإسلام: أسرار الثورة الزراعية الإسلامية",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "ما هي التقنيات الزراعية المذهلة التي استخدمها المسلمون؟ كيف أفادوا أوروبا؟",
 articleUrl: "/regional-and-historical/islamic-civilization-agriculture-history/" },


         { id: "3nJuO9C-RJQ",
 title: "سوق المدينة: تأسيس الاقتصاد الإسلامي وقواعد التجارة",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاقتصاد السلوكي"
  ],
 description: "كيف تخلص النبي ﷺ من سيطرة اليهود على الاقتصاد؟",
articleUrl: "/regional-and-historical/islamic-civilization-souq-medina-market/" },


         { id: "aQv0Ef2SzOE",
 title: "بيت المال: النظام الاقتصادي للحضارة الإسلامية",
 categories: [
    "اقتصاد الحضارة الإسلامية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف بنى المسلمون أهم مؤسسة مالية في العالم؟ لماذا استعانوا بالمسيحيين واليهود لإدارتها؟",
 articleUrl: "/regional-and-historical/bayt-al-mal-islamic-treasury-economy/" },


         { id: "3exk8GLW15Y",
 title: "ماسايوشي سون: هل تهزم ARM إمبراطورية Nvidia؟",
 categories: [
    "الشركات العالمية",
    "الاستثمار وتكوين الثروات",
    "قصص نجاح"
  ],
 description: "كيف يهدد أخطر مستثمر في العالم شركة إنفيديا؟",
articleUrl: "/corporate-titans/masayoshi-son-arm-nvidia-softbank/" },


         { id: "phLpHCpxuOc",
 title: "ترامب يهدد أوروبا: حرب تجارية جديدة وتفكيك التحالف التاريخي",
 categories: [
    "اقتصاديات الحرب الروسية الأوكرانية",
    "اقتصاد الصين والولايات المتحدة"
  ],
 description: "كيف تهدد أمريكا أوروبا عسكريًا واقتصاديًا؟ ما هي الخطة السرية التي أعدوها لمواجهتها؟",
 articleUrl: "/geopolitics-and-conflicts/trump-europe-trade-war-nato/" },


         { id: "cKvxjRsLLUo",
 title: "صفقات الأسلحة الأمريكية لإسرائيل: 9 مليار دولار من ترامب",
 categories: [
    "اقتصاد الكيان المحتل",
    "اقتصاد الصين والولايات المتحدة"
  ],
 description: "هل يبيع ترامب أقوى قنبلة أمريكية لـ إسرائيل؟",
 articleUrl: "/geopolitics-and-conflicts/israeli-military-independence-trump-arms-deals/" },


         { id: "ZWrb1u9aOxs",
 title: "نفوذ إيلون ماسك: هل يسيطر على الحكومة الأمريكية؟",
 categories: [
    "الشركات العالمية",
    "اقتصاد الصين والولايات المتحدة"
  ],
 description: "هل يمزق إيلون ماسك الحكومة الأمريكية بمساعدة ترامب؟ هل تنهار أقوى حكومة في العالم؟",
 articleUrl: "/corporate-titans/elon-musk-us-government-influence-trump/" },


         { id: "7XMUEZJpCzc",
 title: "DeepSeek: ثورة صينية في الذكاء الاصطناعي تهز أمريكا",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية",
    "قصص نجاح"
  ],
 description: "كيف هزت DeepSeek العالم؟ هل يتفوق الذكاء الصيني على عمالقة أمريكا؟",
 articleUrl: "/superpower-economy/deepseek-china-ai-revolution-openai/" },


         { id: "PLXfG3LxYpU",
 title: "ما هي الضريبة الوردية وكيف تتجنبها النساء؟",
 categories: [
    "الاقتصاد السلوكي",
    "الشركات العالمية"
  ],
 description: "لماذا تدفع النساء أموال أكثر من الرجال مقابل نفس السلع؟ ما السر؟",
 articleUrl: "/investing-and-wealth/what-is-pink-tax-gender-price-discrimination/" },


         { id: "A6-X9mKbXpk",
 title: "رابيدوس اليابانية: عودة اليابان لصناعة أشباه الموصلات",
 categories: [
    "الشركات العالمية",
    "اقتصاد الصين والولايات المتحدة",
    "قصص نجاح"
  ],
 description: "كيف فاجأت اليابان العالم؟ هل تسيطر على أهم صناعة عالمية؟",
 articleUrl: "/corporate-titans/japan-rapidus-semiconductor-remontada/" },


         { id: "nPhftkyGQag",
 title: "ترامب وإيلون ماسك: مستقبل تيك توك في أمريكا",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "هل ينقذ ترامب تطبيق تيك توك؟ هل تبيعه الصين لإيلون ماسك؟",
 articleUrl: "/superpower-economy/tiktok-ban-usa-trump-elon-musk/" },


         { id: "g_5O00l3EhY",
 title: "حرائق لوس أنجلوس 2025: خسائر تتجاوز 150 مليار دولار",
 categories: [
    "الاقتصاد السلوكي",
    "الشركات العالمية"
  ],
description: "كيف اشتعلت كاليفورنيا؟ ما الذي ستخسره أهم ولاية أمريكية؟",
 articleUrl: "/regional-and-historical/los-angeles-fires-2025-economic-disaster-california/" },


         { id: "pH4zeR-WxSI",
 title: "صفقة الأسلحة الإسرائيلية الصربية: سباق تسلح في البلقان",
 categories: [
    "اقتصاد الكيان المحتل",
    "اقتصاديات الحرب الروسية الأوكرانية"
  ],
 description: "لماذا تبيع إسرائيل أسلحة خطيرة لدولة أوروبية؟ هل تتحدى الناتو؟",
 articleUrl: "/geopolitics-and-conflicts/serbia-israel-arms-deal-balkans-himars-pulse/" },


         { id: "l-89Rsu4dOo",
 title: "ترامب وقناة بنما: هل تستولي أمريكا على الممر المائي؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "لماذا يريد ترامب غزو قناة بنما؟ ما علاقة الصين وقناة السويس؟",
 articleUrl: "/superpower-economy/trump-panama-canal-china-threat/" },


         { id: "NbyPfh766AY",
 title: "ثروة عائلة الأسد: أين المليارات المنهوبة من سوريا؟",
 categories: [
    "اقتصاديات الدول العربية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف سرقت عائلة الأسد مليارات من ثروات سوريا؟ أين هربوا بها؟",
 articleUrl: "/geopolitics-and-conflicts/assad-family-looted-wealth-syria/" },


         { id: "pOB41AZOGaY",
 title: "اقتصاديات الملاكمة: لماذا يجني الملاكمون الملايين؟",
 categories: [
    "الاستثمار وتكوين الثروات",
    "قصص نجاح"
  ],
 description: "لماذا يربح بعض لاعبو الملاكمة مئات الملايين من الدولارات؟",
 articleUrl: "/investing-and-wealth/boxing-economics-mayweather-ufc/" },


         { id: "gQz1lNRyjus",
 title: "إعلان جاجوار الصادم: هل تنجح الخطة أم تنهار العلامة؟",
 categories: [
    "الشركات العالمية",
    "الاقتصاد السلوكي",
    "قصص نجاح"
  ],
 description: "هل تموت شركة سيارات ملوك بريطانيا؟!",
 articleUrl: "/corporate-titans/jaguar-controversial-ad-reimagine-strategy/" },


         { id: "yDWOnJguI7E",
 title: "الصين وإيران: كيف تتحدى بكين عقوبات ترامب النفطية؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "هل تنجو إيران من أنياب ترامب؟ هل تنقذها الصين؟",
 articleUrl: "/superpower-economy/china-iran-oil-trump-sanctions/" },


         { id: "RJnHX84LZ_s",
 title: "لوبي العملات المشفرة: كيف غيرت الأموال رأي ترامب؟",
 categories: [
    "العملات الرقمية",
    "الاستثمار وتكوين الثروات",
    "قصص نجاح"
  ],
 description: "مع صعوده المستمر.. هل يصل البيتكوين الواحد لمليون دولار؟",
 articleUrl: "/investing-and-wealth/crypto-lobby-trump-coinbase-armstrong/" },


         { id: "bvJnGudpN9w",
 title: "خطة ترامب الاقتصادية: تخفيضات ضريبية وحرب تجارية",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الاقتصاد السلوكي"
  ],
 description: "هل يقلب ترامب الاقتصاد العالمي؟",
 articleUrl: "/superpower-economy/trump-economic-plan-taxes-tariffs/" },


         { id: "K5hKPWofank",
 title: "هجرة المليونيرات: لماذا يهرب أثرياء بريطانيا إلى دبي؟",
 categories: [
    "الاستثمار وتكوين الثروات",
    "اقتصاديات الدول العربية",
    "قصص نجاح"
  ],
 description: "لماذا يهرب آلاف الأثرياء من بريطانيا؟ هل يدمرون الاقتصاد البريطاني؟",
 articleUrl: "/investing-and-wealth/uk-millionaire-migration-dubai/" },


         { id: "irVzhJESV84",
 title: "أهمية مضيق هرمز: خطة إيران البديلة وتأثيرها العالمي",
 categories: [
    "اقتصاد الكيان المحتل",
    "اقتصاديات الدول العربية"
  ],
 description: "هل تغلق إيران مضيق هُرمز في حربها مع إسرائيل؟ هل تشل الاقتصاد العربي والعالمي؟",
 articleUrl: "/geopolitics-and-conflicts/iran-strait-of-hormuz-jask-terminal/" },


         { id: "jhC_GjmP004",
 title: "البرنامج الصاروخي الإيراني: تاريخه وقدراته وتحدياته",
 categories: [
    "اقتصاد الكيان المحتل",
    "قصص نجاح"
  ],
 description: "كيف بنت إيران أكبر ترسانة صواريخ في المنطقة؟ هل تستطيع إيذاء إسرائيل؟",
 articleUrl: "/geopolitics-and-conflicts/iran-missile-program-deterrence/" },


         { id: "p3u7-DPojco",
 title: "اغتيال نصر الله: كيف اخترق الموساد حزب الله؟",
 categories: [
    "اقتصاد الكيان المحتل",
    "الشركات العالمية"
  ],
 description: "كيف وصلت إسرائيل لـ حسن نصر الله؟ ما السلاح المرعب الذي استخدمته؟",
 articleUrl: "/geopolitics-and-conflicts/nasrallah-assassination-mossad-blu-109/" },


         { id: "5q5qPrd1ZWA",
 title: "سقوط إنتل: هل تفكك أمريكا عملاق الرقائق لمواجهة الصين؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية",
    "الاقتصاد السلوكي"
  ],
 description: "لماذا قد تتفكك إنتل قريبًا؟ كيف ارتكب عملاق التكنولوجيا الأمريكي أخطاءً كارثية؟",
 articleUrl: "/corporate-titans/intel-crisis-us-china-chips-act/" },


         { id: "Nz2ijVcG4Dg",
 title: "النفور من الخسارة: كيف يؤثر على قراراتك المالية؟",
 categories: [
    "الاقتصاد السلوكي",
    "الاستثمار وتكوين الثروات"
  ],
 description: "عادة كارثية تحرق أموالنا.. ما هي؟ وكيف نتجنبها؟",
 articleUrl: "/investing-and-wealth/loss-aversion-behavioral-economics-investing/" },


         { id: "JF5bRHvwa6w",
 title: "الردع النووي الأمريكي: هل تستعد أمريكا لحرب باردة جديدة؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية"
  ],
 description: "لماذا تطور أمريكا أخطر سلاح في العالم؟ لماذا تخشى الصين؟",
 articleUrl: "/superpower-economy/us-nuclear-deterrence-sentinel-china/" },


         { id: "aD5zaIneHwU",
 title: "اكتشاف نفط غيانا: كيف ربحت إكسون موبيل تريليون دولار؟",
 categories: [
    "قصص نجاح",
    "الشركات العالمية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف عثرت إكسون على كنز ب تريليون دولار في غيانا؟! لماذا تهتم بها السعودية؟",
 articleUrl: "/corporate-titans/guyana-oil-discovery-exxonmobil-stabroek/" },


         { id: "sgdVsMp_ShM",
 title: "هواوي ضد إنفيديا: كيف تتحدى الصين العقوبات الأمريكية؟",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "الشركات العالمية",
    "قصص نجاح"
  ],
 description: "كيف صدمت هواوي أمريكا وفاجأت العالم؟ هل تهزم إنفيديا؟",
 articleUrl: "/superpower-economy/huawei-ascend-910c-nvidia-us-sanctions/" },


         { id: "coUK4Lo4W2k",
 title: "جيرسي مايكس: قصة نجاح المراهق الذي بنى إمبراطورية",
 categories: [
    "قصص نجاح",
    "الشركات العالمية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف حول شاب مطعمه البسيط لإمبراطورية بمليارات الدولارات؟ كيف نتعلم منه؟",
 articleUrl: "/corporate-titans/jersey-mikes-peter-cancro-success-story/" },


         { id: "FauQaXk8eM8",
 title: "كيف بنى الموساد أخطر شبكة تجسس واغتيالات في العالم؟",
 categories: [
    "اقتصاد الكيان المحتل"
  ],
 description: "كيف بنت الاستخبارات الإسرائيلية أخطر وأغنى شبكة تجسس في العالم؟ هل نستطيع هزيمتها؟",
 articleUrl: "/geopolitics-and-conflicts/how-mossad-built-espionage-network/" },


         { id: "mnuxP4esrWs",
 title: "شركة ويز الإسرائيلية: قصة رفض 23 مليار دولار من جوجل",
 categories: [
    "اقتصاد الكيان المحتل",
    "الشركات العالمية"
  ],
 description: "لماذا حاولت جوجل شراء أخطر شركة إسرائيلية؟ وما علاقتها بجيش الاحتلال؟ !",
 articleUrl: "/corporate-titans/wiz-rejects-google-offer-israeli-cybersecurity-unit-8200/" },


         { id: "VTmmZ_uACQk",
 title: "اتفاقية البترودولار: حقيقة انتهاء العلاقة بين السعودية وأمريكا",
 categories: [
    "اقتصاديات الدول العربية",
    "اقتصاد الصين والولايات المتحدة",
    "الاستثمار وتكوين الثروات"
  ],
 description: "هل توجد اتفاقية سرية بين السعودية وأمريكا؟ هل يقضي النفط السعودي على الدولار؟ !",
 articleUrl: "/regional-and-historical/petrodollar-agreement-saudi-arabia-us-dollar-myth/" },


         { id: "nKRFwyNsxYo",
 title: "أسباب انهيار سعر الذهب: دور الصين والفيدرالي الأمريكي",
 categories: [
    "اقتصاد الصين والولايات المتحدة",
    "اقتصاديات الحرب الروسية الأوكرانية",
    "الاستثمار وتكوين الثروات"
  ],
 description: "كيف تحرك الصين وأمريكا أسعار الذهب؟ وما علاقة الذهب بغزو تايوان؟",
 articleUrl: "/investing-and-wealth/gold-price-collapse-china-us-fed-analysis/" },

    ];


    const VIDEOS_PER_PAGE = 9; // Number of videos to show per page

    // ===================================================================
    // ENGINE INITIALIZATION (Do not edit below this line)
    // ===================================================================
    const videosContainer = document.getElementById('videosContainer');
    const paginationContainer = document.querySelector('.pagination');
    const categoriesContainer = document.getElementById('categoriesContainer');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const paginationNav = document.getElementById('paginationNav');
   
    const videoModalEl = document.getElementById('videoModal');
    const videoModal = new bootstrap.Modal(videoModalEl);
    const modalIframe = videoModalEl.querySelector('iframe');
    const modalTitle = videoModalEl.querySelector('.modal-title');

    let currentPage = 1;
    let filteredVideos = [...allVideos];

    function render() {
        renderCategories();
        renderVideos();
        renderPagination();
    }

    function renderCategories() {
const categories = ['الكل', ...new Set(allVideos.flatMap(video => video.categories))];
        categoriesContainer.innerHTML = categories.map(category => `
            <button class="btn  btn-outline-secondary category-btn" data-category="${category}">
                ${category}
            </button>
        `).join('');
       
        // Add event listeners to new buttons
        categoriesContainer.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', () => {
                applyFilters({ category: button.dataset.category });
            });
        });
        updateActiveCategoryButton();
    }

    function renderVideos() {
        const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
        const endIndex = startIndex + VIDEOS_PER_PAGE;
        const pageVideos = filteredVideos.slice(startIndex, endIndex);

        noResultsMessage.classList.toggle('d-none', filteredVideos.length > 0);
        videosContainer.innerHTML = pageVideos.map(video => createVideoCard(video)).join('');
    }

    function createVideoCard(video) {
    const searchQuery = searchInput.value.trim();
    let highlightedTitle = video.title;
    if (searchQuery) {
        const regex = new RegExp(`(${searchQuery})`, 'gi');
        highlightedTitle = video.title.replace(regex, `<mark class="p-0">$1</mark>`);
    }

    // --- START: التحسينات الجديدة ---

    // 1. تحديد أبعاد الصورة المصغرة (نسبة 4:3 شائعة لصور hqdefault)
    const imageWidth = 480;
    const imageHeight = 360;

    // 2. استخدام الصورة المصغرة المتوسطة (mqdefault) كخيار أفضل للأداء
    //    فهي تأتي بحجم 320x180 (نسبة 16:9) وهو أقرب لتصميم الفيديو
    const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
    const imageWidthMq = 320;
    const imageHeightMq = 180;

    // --- END: التحسينات الجديدة ---

    return `
        <div class="col">
            <div class="card h-100 shadow-sm video-card" data-video-id="${video.id}" role="button" tabindex="0" aria-label="تشغيل فيديو: ${video.title}">
                <div class="position-relative">
                   

<img src="${thumbnailUrl}"
     class="card-img-top"
     alt="صورة مصغرة لفيديو: ${video.title}"
     loading="lazy"
     decoding="async"
     width="320"
     height="180"
     style="aspect-ratio: 16 / 9; object-fit: cover;">

                    <div class="position-absolute top-50 start-50 translate-middle">
                        <span class="bi bi-play-circle-fill display-4 text-white" style="opacity: 0.6;"></span>
                    </div>
                    <span class="badge bg-dark position-absolute top-0 start-0 m-2">${video.categories[0]}</span>
                </div>
                <div class="card-body d-flex flex-column">
    <h3 class="card-title h6">${highlightedTitle}</h3>
    <p class="card-text text-muted small flex-grow-1">${video.description || ''}</p>
    ${video.articleUrl ? `<a href="${video.articleUrl}" class="btn btn-outline-primary btn-sm mt-2">اقرأ المقال الكامل</a>` : ''}
</div>
            </div>
        </div>
    `;
}

        function renderPagination() {
        const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
        paginationNav.classList.toggle('d-none', totalPages <= 1);
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        // --- START: المنطق الجديد للترقيم الذكي ---

        const maxVisibleButtons = 5; // عدد الأزرار الرقمية الظاهرة (يجب أن يكون فرديًا)
        let pages = [];

        // إضافة زر "السابق"
        pages.push({ page: currentPage - 1, text: 'السابق', isDisabled: currentPage === 1 });

        // إضافة زر الصفحة الأولى
        pages.push({ page: 1, text: '1', isActive: currentPage === 1 });

        // حساب نطاق الصفحات المرئية
        let startPage = Math.max(2, currentPage - Math.floor((maxVisibleButtons - 3) / 2));
        let endPage = Math.min(totalPages - 1, currentPage + Math.floor((maxVisibleButtons - 3) / 2));
        
        // تعديل النطاق في الحالات الحدية
        if (currentPage - startPage < Math.floor((maxVisibleButtons - 3) / 2)) {
            endPage = Math.min(totalPages - 1, startPage + (maxVisibleButtons - 3));
        }
        if (endPage - currentPage < Math.floor((maxVisibleButtons - 3) / 2)) {
            startPage = Math.max(2, endPage - (maxVisibleButtons - 3));
        }

        // إضافة النقاط الأولى "..."
        if (startPage > 2) {
            pages.push({ text: '...', isDisabled: true });
        }

        // إضافة أزرار الصفحات في النطاق المحسوب
        for (let i = startPage; i <= endPage; i++) {
            pages.push({ page: i, text: i, isActive: currentPage === i });
        }

        // إضافة النقاط الأخيرة "..."
        if (endPage < totalPages - 1) {
            pages.push({ text: '...', isDisabled: true });
        }

        // إضافة زر الصفحة الأخيرة (إذا كان هناك أكثر من صفحة واحدة)
        if (totalPages > 1) {
            pages.push({ page: totalPages, text: totalPages, isActive: currentPage === totalPages });
        }

        // إضافة زر "التالي"
        pages.push({ page: currentPage + 1, text: 'التالي', isDisabled: currentPage === totalPages });

        // بناء HTML النهائي
        const paginationHtml = pages.map(p => {
            const pageNumAttr = p.page ? `data-page="${p.page}"` : '';
            const text = p.text;
            const isDisabled = p.isDisabled ? 'disabled' : '';
            const isActive = p.isActive ? 'active' : '';
            const href = p.isDisabled ? '#' : `?page=${p.page}`; // تحسين للـ SEO
            
            return `
                <li class="page-item ${isDisabled} ${isActive}">
                    <a class="page-link" href="${href}" ${pageNumAttr}>${text}</a>
                </li>
            `;
        }).join('');

        paginationContainer.innerHTML = paginationHtml;
        
        // --- END: المنطق الجديد ---
    }

    function applyFilters({ page = 1, category = null, search = null }) {
        currentPage = page;
        const currentCategory = category ?? getCurrentCategory();
        const currentSearch = search ?? searchInput.value.trim().toLowerCase();

        filteredVideos = allVideos.filter(video => {
            const matchesCategory = currentCategory === 'الكل' || video.categories.includes(currentCategory);
            const matchesSearch = !currentSearch || video.title.toLowerCase().includes(currentSearch);
            return matchesCategory && matchesSearch;
        });

        renderVideos();
        renderPagination();
        updateActiveCategoryButton(currentCategory);
    }
   
    function getCurrentCategory() {
        const activeButton = categoriesContainer.querySelector('.active');
        return activeButton ? activeButton.dataset.category : 'الكل';
    }

    function updateActiveCategoryButton(category = getCurrentCategory()) {
        categoriesContainer.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
            btn.classList.toggle('btn-primary', btn.dataset.category === category);
            btn.classList.toggle('btn-outline-secondary', btn.dataset.category !== category);
        });
    }

    // Event Listeners
    searchButton.addEventListener('click', () => applyFilters({}));
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') applyFilters({});
    });

    paginationContainer.addEventListener('click', (e) => {
        if (e.target.matches('.page-link')) {
            e.preventDefault();
            const page = parseInt(e.target.dataset.page, 10);
            if (!isNaN(page)) {
                applyFilters({ page: page });
            }
        }
    });
   
    videosContainer.addEventListener('click', (e) => {
    // 1. تحديد ما إذا كانت النقرة على زر "اقرأ المقال"
    const articleLink = e.target.closest('a.btn');

    // 2. إذا كانت النقرة على الزر، لا تفعل شيئًا ودع المتصفح يقوم بعمله
    if (articleLink) {
        return;
    }

    // 3. إذا لم تكن النقرة على الزر، ابحث عن البطاقة وقم بتشغيل الفيديو
    const card = e.target.closest('.video-card');
    if (card) {
        const videoId = card.dataset.videoId;
        const video = allVideos.find(v => v.id === videoId);
        if (video) {
            modalTitle.textContent = video.title;
            modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            videoModal.show();
        }
    }
});

    videoModalEl.addEventListener('hidden.bs.modal', () => {
        modalIframe.src = 'about:blank';
    });
   
    // Initial Render
    render();
});