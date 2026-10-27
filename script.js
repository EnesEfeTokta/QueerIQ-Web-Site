/**
 * QueerIQ Promotional Website JavaScript
 * Bilingual Engine (TR <-> EN) & Interactive Trivia Simulator
 * Dedicated Legal Pages Navigation (No Popups/Modals)
 * Zero Emojis - Cupertino Minimalist Interactivity
 */

(function () {
  'use strict';

  // ===================================================================
  // Translation Dictionary (Turkish & English)
  // ===================================================================
  const TRANSLATIONS = {
    tr: {
      // Nav
      'nav.features': 'Özellikler',
      'nav.duels': 'Düello & Öğrenme',
      'nav.safety': 'Güvenlik & Gizlilik',
      'nav.community': 'Topluluk',
      'nav.legal': 'Yasal & Şartlar',
      'nav.download': 'Uygulamayı Keşfet',

      // Hero
      'hero.badge': 'Yeni Nesil Kuir Kültür & Öğrenme Platformu',
      'hero.title_part1': 'Kuir Kültürü Keşfet.',
      'hero.title_part2': 'Bilgini Sına.',
      'hero.title_part3': 'Topluluğunla Büyü.',
      'hero.subtitle': 'Tarih, sanat, terimler ve kuir hafızayı interaktif testler, günlük seriler ve dostane düellolarla deneyimle. Tamamen güvenli, kapsayıcı ve anonim.',
      'hero.cta_start': 'Hemen İncele',
      'hero.cta_features': 'Özellikleri Keşfet',
      'hero.meta_safe': 'Uçtan Uca Şifreli',
      'hero.meta_ads': '0 Reklam & Takipçi Yok',
      'hero.meta_community': 'Güvenli Topluluk Alanı',

      // Phone Simulator
      'sim.streak': '14 Gün Seri',
      'sim.category': 'Kuir Tarihi',
      'sim.difficulty': 'Orta Seviye',
      'sim.question': '1969 yılında modern LGBTİ+ hakları hareketinin kıvılcımını ateşleyen ayaklanmalar hangi şehirde gerçekleşti?',
      'sim.opt_a': 'Berlin',
      'sim.opt_b': 'New York (Stonewall)',
      'sim.opt_c': 'Londra',
      'sim.opt_d': 'Paris',
      'sim.feedback_correct': 'Tebrikler! 28 Haziran 1969\'da New York Greenwich Village\'daki Stonewall Inn direnişi, modern onur hareketinin temeli kabul edilir.',
      'sim.feedback_wrong': 'Farklı bir seçenek deneyebilirsin. Tarihi ipucu: Christopher Street ve Greenwich Village.',
      'sim.stat_label': 'Günlük Hedef',
      'sim.stat_val': '3/3 Tamamlandı',
      'sim.lives_label': 'Can Durumu',
      'sim.lives_val': '5/5 Dolu',

      // Metrics
      'metric.q_count': '1000+',
      'metric.q_label': 'Küratörlü Trivia Sorusu',
      'metric.safe_count': '%100',
      'metric.safe_label': 'Uçtan Uca Güvenli & Şifreli',
      'metric.zero_count': '0',
      'metric.zero_label': 'Ticari Reklam & Veri Satışı',
      'metric.cat_count': '5+',
      'metric.cat_label': 'Kapsamlı Bilgi Kategorisi',

      // Features
      'feat.tag': 'Neden QueerIQ?',
      'feat.title': 'Öğrenmeyi Keyifli, Güvenli ve Güçlendirici Kılan Tasarım',
      'feat.desc': 'Apple standartlarında sade bir arayüz, zengin arşiv ve toksisiteden arındırılmış bir topluluk deneyimi.',
      
      'feat.f1_title': 'Günlük Seriler & Mikro-Öğrenme',
      'feat.f1_desc': 'Günde sadece 5 dakikada kuir tarihin dönüm noktalarını, unutulan kahramanları ve güncel hak mücadelelerini keşfet. Serini bozmadan bilgini canlı tut.',
      
      'feat.f2_title': 'Kimlik & Zamir Özgürlüğü',
      'feat.f2_desc': 'Kişisel zamirlerinizi, yönelim ve cinsiyet kimliğinizi profilinizde dilediğiniz gibi yansıtın. Gerçek ad zorunluluğu olmaksızın kendi alanınızı oluşturun.',
      
      'feat.f3_title': 'Zengin Kategori Arşivi',
      'feat.f3_desc': 'Tarih, Kültür & Sanat, Bilim & Sağlık ve Temel Terimler. Uzmanlar ve sivil toplum kaynakları ile doğrulanmış yüzlerce içerik.',
      
      'feat.f4_title': 'Dostane Düello Modu',
      'feat.f4_desc': 'Arkadaşlarınla veya topluluk üyeleriyle eşleşerek gerçek zamanlı bilgi yarışlarına katıl. Rekabet ederken birlikte öğren.',
      
      'feat.f5_title': 'Sıfır Tolerans & Güvenli Alan',
      'feat.f5_desc': 'Nefret söylemine, ayrımcılığa ve siber zorbalığa karşı sıfır tolerans. Saygı, eşitlik ve empati ilkeleriyle korunan dijital vaha.',

      // Categories
      'cat.history': 'Tarih',
      'cat.culture': 'Kültür & Sanat',
      'cat.science': 'Bilim',
      'cat.terms': 'Terimler & Kavramlar',
      'cat.all': 'Genel Kültür',

      // Duels (Iconic Ships / Couples)
      'duel.title': 'Favori Çiftlerinle Düellolara Katıl',
      'duel.desc': 'Tarlos, Malec, Heartstopper ve kuir popüler kültürün ikonik çiftleri trivia arenasında karşılaşıyor! Takımını seç, bilgilerini yarıştır ve liglerde yüksel.',
      'duel.item1_title': 'İkonik Ship Karşılaşmaları: ',
      'duel.item1_text': 'Favori kuir çiftlerini destekleyerek popüler kültür ve tarih sorularında yarış.',
      'duel.item2_title': 'Gerçek Zamanlı Rekabet: ',
      'duel.item2_text': 'Aynı anda aynı sorulara yanıt vererek takımına en yüksek puanı kazandır.',
      'duel.item3_title': 'Haftalık Çiftler Sıralaması: ',
      'duel.item3_text': 'Her hafta en çok puan toplayan fandom ve çiftleri liderlik tablosunun zirvesine taşı.',
      'duel.card_header': 'Canlı Çiftler Düellosu',
      'duel.status_live': 'Canlı Maç',
      'duel.p1_name': 'Tarlos (TK & Carlos)',
      'duel.p1_series': '9-1-1: Lone Star',
      'duel.p2_name': 'Malec (Magnus & Alec)',
      'duel.p2_series': 'Shadowhunters',
      'duel.round_category': 'Popüler Kültür & Kuir Dizi Evreni',
      'duel.round_status': 'İkonik Karşılaşma • Tur 5/5',

      // Safety
      'safety.tag': 'Kuir Güvenlik & Gizlilik Güvencesi',
      'safety.title': 'Gizliliğin Bir Tercih Değil, Temel Hak.',
      'safety.desc': 'QueerIQ, kullanıcılarının fiziksel ve dijital güvenliğini her tasarım kararının merkezine koyar. Gerçek kimliğinizi açıklamadan güvenle öğrenin ve sosyalleşin.',
      'safety.p1_title': 'Anonim Profil Desteği',
      'safety.p1_desc': 'Gerçek adınızı veya telefon numaranızı vermek zorunda değilsiniz. Sadece seçtiğiniz takma ad ve zamirlerinizle var olun.',
      'safety.p2_title': 'Veri Satışı Asla Yok',
      'safety.p2_desc': 'Verileriniz hiçbir üçüncü tarafla, reklam ağıyla veya ticari kuruluşla paylaşılmaz veya satılmaz.',
      'safety.p3_title': 'Şifrelenmiş Altyapı',
      'safety.p3_desc': 'Tüm kullanıcı kimlik bilgileri endüstri standardı şifreleme ile Supabase altyapısında güvenle muhafaza edilir.',
      'safety.p4_title': 'Tek Tıkla Hesap Silme',
      'safety.p4_desc': 'Dilediğiniz anda hesabınızı ve geçmişe dönük tüm verilerinizi sistemden kalıcı olarak silebilirsiniz.',

      // Legal Section (Landing)
      'legal.tag': 'Şeffaflık & İlkeler',
      'legal.title': 'Kullanım Koşulları ve Gizlilik Politikası',
      'legal.desc': 'Topluluk sözleşmemiz ve veri işleme ilkelerimiz hakkında detaylı bilgi edinin.',
      'legal.terms_title': 'Kullanım Şartları',
      'legal.terms_excerpt': 'Topluluk güvenliği yönergeleri, nefret söylemine sıfır tolerans prensibi, fikri mülkiyet hakları ve kullanıcı sorumlulukları.',
      'legal.privacy_title': 'Gizlilik Politikası',
      'legal.privacy_excerpt': 'Uçtan uca şifreleme, veri minimizasyonu taahhüdü, reklam takipçilerinin bulunmaması ve GDPR/KVKK veri silme hakları.',
      'legal.read_more': 'Metnin Tamamını İncele',

      // Dedicated Legal Pages Commons & Previews
      'legal.page_home': 'Ana Sayfa',
      'legal.last_updated': 'Son Güncelleme: 2026',
      'legal.version': 'Sürüm 1.0',
      'legal.switch_to_privacy': 'Gizlilik Politikası',
      'legal.switch_to_terms': 'Kullanım Şartları',
      'legal.btn_back_home': 'Ana Sayfa',
      'legal.terms_card_title': 'Topluluk Standartları & Şartlar',
      'legal.privacy_card_title': 'Veri Güvenliği & Mahremiyet',

      // Dedicated Terms Page
      'terms.title': 'Kullanım Şartları',
      'terms.main_heading': 'Kullanım Şartları ve Topluluk Sözleşmesi',
      'terms.badge': 'QueerIQ Güvenli Alan & Topluluk Yönergeleri',
      'terms.s1_title': '1. Sıfır Tolerans & Güvenli Alan',
      'terms.s1_text': 'QueerIQ; tüm kuir bireyler, müttefikler ve bilgiye saygı duyan herkes için eşit, özgür ve güvenli bir alandır. Nefret söylemi, ayrımcılık, homofobi, transfobi, bifobi, ırkçılık veya herhangi bir taciz eylemine sıfır tolerans uygulanır. İhlalde bulunan hesaplar kalıcı olarak askıya alınır.',
      'terms.s1_callout': 'QueerIQ topluluğunda hiç kimse kimliği, cinsel yönelimi, cinsiyet kimliği veya ifadesi sebebiyle hedef gösterilemez, küçük düşürülemez veya dışlanamaz.',
      'terms.s2_title': '2. Kimliklere ve Zamirlere Saygı',
      'terms.s2_text': 'Her kullanıcının beyan ettiği kimliğine, seçtiği zamirlere ve kişisel sınırlarına koşulsuz saygı duyulması zorunludur. Platformdaki tartışmalar ve dayanışma etkileşimleri yapıcı ve kapsayıcı bir dille yürütülmelidir.',
      'terms.s2_extra': 'Kullanıcıların kendi beyan ettikleri zamir ve adlar geçerlidir. Kasti olarak yanlış zamir kullanma (misgendering) veya kişilerin özel bilgilerini izinsiz ifşa etme (outing/doxxing) kesin hesap kapatma sebebidir.',
      'terms.s3_title': '3. İçerik ve Fikri Mülkiyet',
      'terms.s3_text': 'Uygulamada yer alan dersler, trivia soruları, kültür-sanat arşivleri ve görseller QueerIQ ve lisansörlerinin fikri mülkiyetindedir. Kullanıcıların paylaştığı içerikler telif haklarına ve evrensel etik standartlara uygun olmalıdır.',
      'terms.s3_extra': 'QueerIQ arşivinde yer alan eğitim materyalleri ticari amaçla kopyalanamaz, yeniden satılamaz veya kaynak gösterilmeksizin toplu biçimde çoğaltılamaz.',
      'terms.s4_title': '4. Hesap Güvenliği ve Sorumluluk',
      'terms.s4_text': 'Hesabınızın giriş bilgilerini güvende tutmak sizin sorumluluğunuzdadır. Şüpheli bir durum veya güvenlik açığı fark ettiğinizde lütfen platform yönetimiyle iletişime geçiniz.',
      'terms.s4_extra': 'Her kullanıcı kendi hesabı üzerinden gerçekleştirilen eylemlerden sorumludur. Şifrenizi üçüncü kişilerle paylaşmayınız; güvenli ve karmaşık bir parola tercih ediniz.',
      'terms.s5_title': '5. Yaş Sınırı ve Uygunluk',
      'terms.s5_text': 'Platform 13 yaş ve üzerindeki tüm bireyler için uygundur. Reşit olmayan kullanıcıların esenliği, dijital güvenliği ve maruz kalabileceği her türlü risk platform denetim mekanizmaları ile titizlikle gözetilir.',
      'terms.s6_title': '6. İhlal Bildirimi ve Denetim',
      'terms.s6_text': 'Topluluk yönergelerini ihlal ettiğini düşündüğünüz içerik, kullanıcı veya profil durumunda uygulama içi \'Bildir\' işlevini kullanabilir veya doğrudan destek ekibimizle iletişime geçebilirsiniz. Raporlar 24 saat içinde incelenir.',

      // Dedicated Privacy Page
      'privacy.title': 'Gizlilik Politikası',
      'privacy.main_heading': 'Gizlilik Politikası ve Kişisel Veri Koruma',
      'privacy.badge': 'Veri Gizliliği & Kişisel Haklar Taahhüdü',
      'privacy.gdpr_label': 'GDPR & KVKK Uyumlu',
      'privacy.s1_title': '1. Uçtan Uca Veri Güvenliği & Şifreleme',
      'privacy.s1_text': 'Kullanıcı şifreleriniz ve kişisel verileriniz modern endüstri standardı şifreleme ve güvenli Supabase altyapısıyla korunur. Parolalarınız hiçbir zaman açık metin olarak saklanmaz veya görüntülenemez.',
      'privacy.s1_callout': 'Kimlik doğrulama işlemleri şifrelenmiş oturum anahtarları (tokens) ile yönetilir; veritabanı düzeyinde satır bazlı erişim denetimi (Row Level Security) aktif uygulanır.',
      'privacy.s2_title': '2. Kişisel Veri Satışı Kesinlikle Yapılmaz',
      'privacy.s2_text': 'Kişisel bilgileriniz, trivia yanıtlarınız, zamirleriniz veya e-postanız hiçbir koşulda üçüncü taraflara, veri simsarlarına veya reklam ağlarına satılmaz. Gizliliğiniz tavizsiz temel ilkemizdir.',
      'privacy.s2_extra': 'Uygulamamız reklam takipçisi içermez. Platformumuzun gelir modeli asla kullanıcıların kişisel verilerini ticarileştirmek üzerine kurulmamıştır ve kurulmayacaktır.',
      'privacy.s3_title': '3. Tam Kontrol ve Tek Tıkla Veri Silme Hakkı (GDPR / KVKK)',
      'privacy.s3_text': 'Kullanıcılar diledikleri zaman profil tercihlerini güncelleyebilir veya hesaplarının ve ilişkili tüm kayıtlarının sistemden kalıcı olarak silinmesini talep edebilir (GDPR & KVKK uyumluluğu).',
      'privacy.s3_extra': 'Hesap ayarlarınızdan \'Hesabımı Sil\' butonuna bastığınız anda tüm quiz ilerlemeleriniz, puanlarınız, takma adınız ve ilişkili e-posta kaydınız geri döndürülemez biçimde kalıcı olarak imha edilir.',
      'privacy.s4_title': '4. Anonim Profil & Kimlik Mahremiyeti',
      'privacy.s4_text': 'QueerIQ profilinizde gerçek adınızı veya kişisel telefon numaranızı vermek zorunda değilsiniz. Yalnızca seçtiğiniz bir gösterim adı ve zamirleriniz ile anonim olarak var olabilirsiniz.',
      'privacy.s4_callout': 'Kullanıcılarımızın fiziksel ve çevrim içi güvenliği her şeyden önce gelir. Gerçek kimliğinizi saklama hakkınız platformumuzda koşulsuz korunur.',
      'privacy.s5_title': '5. Anonim Telemetri & Çerez Politikası',
      'privacy.s5_text': 'Yalnızca uygulamanın kararlılığını sağlamak, hata raporlarını gidermek ve kullanıcı deneyimini optimize etmek amacıyla anonimleştirilmiş teknik veriler işlenir. Bu veriler kimliğinizle eşleştirilemez.',
      'privacy.s6_title': '6. Veri Sorumlusu ve İletişim',
      'privacy.s6_text': 'Kişisel verilerinizin korunması veya gizlilik haklarınızla ilgili her türlü soru ve talebiniz için destek kanallarımız üzerinden QueerIQ veri güvenliği ekibiyle doğrudan iletişime geçebilirsiniz.',

      // CTA
      'cta.title': 'Kuir Kültür Hafızasını Birlikte Yaşatalım.',
      'cta.subtitle': 'QueerIQ ile öğrenmeye başla, serini kur ve topluluğunla güçlen. İndir ve hemen aramıza katıl.',
      'cta.app_store_sub': 'App Store\'dan',
      'cta.app_store_title': 'Çok Yakında',
      'cta.google_play_sub': 'Google Play\'den',
      'cta.google_play_title': 'Çok Yakında',

      // Footer
      'footer.brand_desc': 'Kuir kültürünü, tarihini ve dayanışmasını interaktif trivia ve mikro-öğrenme yoluyla herkes için güvenli kılan modern platform.',
      'footer.col_product': 'Ürün',
      'footer.col_safety': 'Güvenlik & İlkeler',
      'footer.col_legal': 'Yasal Belgeler',
      'footer.link_terms': 'Kullanım Şartları',
      'footer.link_privacy': 'Gizlilik Politikası',
      'footer.link_guidelines': 'Topluluk Kuralları',
      'footer.link_contact': 'İletişim & Destek',
      'footer.copy': '© 2026 QueerIQ. Tüm hakları saklıdır.',
      'footer.pride_tag': 'Eşitlik, çeşitlilik ve onur ile geliştirildi.'
    },

    en: {
      // Nav
      'nav.features': 'Features',
      'nav.duels': 'Duels & Learn',
      'nav.safety': 'Safety & Privacy',
      'nav.community': 'Community',
      'nav.legal': 'Terms & Legal',
      'nav.download': 'Explore App',

      // Hero
      'hero.badge': 'Next-Gen Queer Culture & Learning Platform',
      'hero.title_part1': 'Discover Queer Culture.',
      'hero.title_part2': 'Challenge Your Mind.',
      'hero.title_part3': 'Grow Together.',
      'hero.subtitle': 'Experience history, arts, terminology, and queer memory through interactive trivia, daily streaks, and friendly duels. Strictly safe, inclusive, and anonymous.',
      'hero.cta_start': 'Get Started',
      'hero.cta_features': 'Explore Features',
      'hero.meta_safe': 'End-to-End Encrypted',
      'hero.meta_ads': '0 Commercial Ads & Trackers',
      'hero.meta_community': 'Protected Safe Space',

      // Phone Simulator
      'sim.streak': '14 Day Streak',
      'sim.category': 'Queer History',
      'sim.difficulty': 'Intermediate',
      'sim.question': 'In which city did the 1969 uprising that ignited the modern LGBTQ+ rights movement take place?',
      'sim.opt_a': 'Berlin',
      'sim.opt_b': 'New York (Stonewall)',
      'sim.opt_c': 'London',
      'sim.opt_d': 'Paris',
      'sim.feedback_correct': 'Correct! The Stonewall Inn uprising on June 28, 1969 in New York\'s Greenwich Village sparked the modern Pride movement.',
      'sim.feedback_wrong': 'Try another option! Historical hint: Christopher Street and Greenwich Village.',
      'sim.stat_label': 'Daily Goal',
      'sim.stat_val': '3/3 Completed',
      'sim.lives_label': 'Hearts',
      'sim.lives_val': '5/5 Full',

      // Metrics
      'metric.q_count': '1000+',
      'metric.q_label': 'Curated Trivia Challenges',
      'metric.safe_count': '100%',
      'metric.safe_label': 'End-to-End Encrypted',
      'metric.zero_count': '0',
      'metric.zero_label': 'Commercial Ads & Data Sales',
      'metric.cat_count': '5+',
      'metric.cat_label': 'Comprehensive Categories',

      // Features
      'feat.tag': 'Why QueerIQ?',
      'feat.title': 'Engineered to Make Learning Fun, Safe, and Empowering',
      'feat.desc': 'Apple-grade minimalist interface, rich archives, and a toxicity-free community experience designed from the ground up.',
      
      'feat.f1_title': 'Daily Streaks & Micro-Learning',
      'feat.f1_desc': 'Discover queer historical milestones, unsung figures, and modern civil rights in just 5 minutes a day. Keep your streak and your knowledge alive.',
      
      'feat.f2_title': 'Identity & Pronoun Freedom',
      'feat.f2_desc': 'Express your pronouns, orientation, and gender identity freely on your profile. No real-name requirement — create your authentic sanctuary.',
      
      'feat.f3_title': 'Rich Category Archive',
      'feat.f3_desc': 'History, Culture & Arts, Science & Health, and Core Terminology. Verified by educators, historians, and civil society sources.',
      
      'feat.f4_title': 'Friendly Duels Mode',
      'feat.f4_desc': 'Match with friends or global community members for real-time trivia battles. Learn together through friendly competition.',
      
      'feat.f5_title': 'Zero Tolerance & Safe Space',
      'feat.f5_desc': 'Absolute zero tolerance for hate speech, harassment, or discrimination. A digital haven protected by empathy and mutual respect.',

      // Categories
      'cat.history': 'History',
      'cat.culture': 'Culture & Arts',
      'cat.science': 'Science',
      'cat.terms': 'Terms & Concepts',
      'cat.all': 'General Knowledge',

      // Duels (Iconic Ships / Couples)
      'duel.title': 'Compete in Duels with Iconic Ships',
      'duel.desc': 'Tarlos, Malec, Heartstopper, and iconic queer couples clash in the trivia arena! Pick your team, test your pop culture mastery, and climb the fandom leaderboards.',
      'duel.item1_title': 'Iconic Ship Battles: ',
      'duel.item1_text': 'Root for your favorite queer couples and answer pop culture & history trivia.',
      'duel.item2_title': 'Real-Time Showdowns: ',
      'duel.item2_text': 'Answer simultaneous questions to score the highest points for your team.',
      'duel.item3_title': 'Weekly Couples Leaderboard: ',
      'duel.item3_text': 'Propel top-scoring fandoms and ships to the pinnacle of the weekly leaderboard.',
      'duel.card_header': 'Live Ship Duel Arena',
      'duel.status_live': 'Live Match',
      'duel.p1_name': 'Tarlos (TK & Carlos)',
      'duel.p1_series': '9-1-1: Lone Star',
      'duel.p2_name': 'Malec (Magnus & Alec)',
      'duel.p2_series': 'Shadowhunters',
      'duel.round_category': 'Pop Culture & Queer Media',
      'duel.round_status': 'Clash of Ships • Round 5/5',

      // Safety
      'safety.tag': 'Queer Safety & Privacy Assurance',
      'safety.title': 'Your Privacy is a Human Right, Not an Option.',
      'safety.desc': 'QueerIQ places user safety at the center of every architectural decision. Learn, compete, and connect without exposing your real-world identity.',
      'safety.p1_title': 'Anonymous Profile Support',
      'safety.p1_desc': 'No real names or personal phone numbers required. Present yourself solely through chosen pseudonyms and pronouns.',
      'safety.p2_title': 'Zero Data Selling',
      'safety.p2_desc': 'Your personal information is never sold or shared with third-party brokers, advertisers, or monetization networks.',
      'safety.p3_title': 'Encrypted Architecture',
      'safety.p3_desc': 'All credentials and tokens are secured with industry-standard encryption over Supabase infrastructure.',
      'safety.p4_title': 'One-Click Account Deletion',
      'safety.p4_desc': 'You can permanently purge your account and all associated historical records at any time with total autonomy.',

      // Legal Section (Landing)
      'legal.tag': 'Transparency & Standards',
      'legal.title': 'Terms of Service & Privacy Policy',
      'legal.desc': 'Read our complete community agreement and data protection guidelines.',
      'legal.terms_title': 'Terms of Service',
      'legal.terms_excerpt': 'Community safety guidelines, zero hate speech policy, intellectual property rights, and user responsibilities.',
      'legal.privacy_title': 'Privacy Policy',
      'legal.privacy_excerpt': 'End-to-end data security, data minimization commitment, no tracking cookies, and GDPR/CCPA right to erasure.',
      'legal.read_more': 'Read Full Document',

      // Dedicated Legal Pages Commons & Previews
      'legal.page_home': 'Home',
      'legal.last_updated': 'Last updated: 2026',
      'legal.version': 'Version 1.0',
      'legal.switch_to_privacy': 'Privacy Policy',
      'legal.switch_to_terms': 'Terms of Service',
      'legal.btn_back_home': 'Home',
      'legal.terms_card_title': 'Community Standards & Terms',
      'legal.privacy_card_title': 'Data Security & Privacy',

      // Dedicated Terms Page
      'terms.title': 'Terms of Service',
      'terms.main_heading': 'Terms of Service & Community Agreement',
      'terms.badge': 'QueerIQ Safe Space & Community Guidelines',
      'terms.s1_title': '1. Zero Tolerance & Safe Space',
      'terms.s1_text': 'QueerIQ is a safe, inclusive, and empowering space for all queer individuals and allies. There is strictly zero tolerance for hate speech, harassment, homophobia, transphobia, biphobia, racism, or discrimination. Accounts violating these principles will be permanently suspended.',
      'terms.s1_callout': 'Within the QueerIQ community, no one shall be targeted, degraded, or excluded based on their identity, sexual orientation, or gender expression.',
      'terms.s2_title': '2. Respect for Identities & Pronouns',
      'terms.s2_text': 'Respecting every user\'s declared identity, chosen pronouns, and personal boundaries is mandatory. All interactions and discussions must adhere to empathy, kindness, and constructive solidarity.',
      'terms.s2_extra': 'User declared names and pronouns are binding. Intentional misgendering or unauthorized disclosure of another person\'s private identity (outing/doxxing) results in immediate account termination.',
      'terms.s3_title': '3. Content & Intellectual Property',
      'terms.s3_text': 'All educational modules, trivia challenges, cultural archives, and visual assets are the intellectual property of QueerIQ and its partners. Any community-contributed content must respect copyrights and universal ethical standards.',
      'terms.s3_extra': 'Educational materials within the QueerIQ archives may not be commercially repurposed, resold, or bulk-harvested without explicit attribution.',
      'terms.s4_title': '4. Account Security & Responsibilities',
      'terms.s4_text': 'You are responsible for maintaining the confidentiality of your account credentials. If you detect any suspicious activity, please notify platform administration immediately.',
      'terms.s4_extra': 'Each user is accountable for actions performed under their account. Never disclose your credentials to third parties and use a secure passphrase.',
      'terms.s5_title': '5. Age Requirements & Participation',
      'terms.s5_text': 'The platform is intended for users aged 13 and above. Safeguarding the well-being and digital security of minor users is rigorously enforced across all modules.',
      'terms.s6_title': '6. Violation Reporting & Enforcement',
      'terms.s6_text': 'If you encounter any behavior or content that infringes upon these guidelines, utilize the in-app \'Report\' feature or contact our moderation team directly. Reports are audited within 24 hours.',

      // Dedicated Privacy Page
      'privacy.title': 'Privacy Policy',
      'privacy.main_heading': 'Privacy Policy & Data Security',
      'privacy.badge': 'Data Privacy & User Rights Commitment',
      'privacy.gdpr_label': 'GDPR & CCPA Compliant',
      'privacy.s1_title': '1. End-to-End Data Security & Encryption',
      'privacy.s1_text': 'Your passwords and credentials are encrypted using industry-standard hashing and secured via Supabase infrastructure. Passwords are never stored or transmitted in plain text.',
      'privacy.s1_callout': 'Authentication utilizes cryptographically signed session tokens; database operations enforce strict Row Level Security (RLS) policies.',
      'privacy.s2_title': '2. We Never Sell Your Personal Data',
      'privacy.s2_text': 'We never sell your personal information, quiz answers, pronouns, or emails to third-party data brokers or advertisers. Your privacy is a non-negotiable core principle of QueerIQ.',
      'privacy.s2_extra': 'Our applications contain zero advertising telemetry. Our monetization structure is not and will never be built on commercializing personal user data.',
      'privacy.s3_title': '3. Full Control & Right to Erasure (GDPR / KVKK)',
      'privacy.s3_text': 'You retain full ownership of your data. You may update your profile or request the permanent deletion of your account and all associated data at any time (GDPR & KVKK compliant).',
      'privacy.s3_extra': 'Selecting \'Delete Account\' from your profile settings irreversibly purges your quiz records, scores, alias, and linked authentication credentials permanently.',
      'privacy.s4_title': '4. Anonymous Profile & Identity Shield',
      'privacy.s4_text': 'You are never required to provide your real name or personal phone number on QueerIQ. You may exist purely through your chosen handle and pronouns.',
      'privacy.s4_callout': 'The physical and digital well-being of our community is paramount. Your right to maintain an anonymous presence is unconditionally protected.',
      'privacy.s5_title': '5. Anonymous Telemetry & Analytics',
      'privacy.s5_text': 'We only process anonymized technical telemetry to diagnose crashes, ensure application stability, and optimize user experience. These metrics cannot be correlated with your identity.',
      'privacy.s6_title': '6. Data Controller & Inquiries',
      'privacy.s6_text': 'For any questions or requests regarding your personal data protection or rights, you may reach out directly to the QueerIQ data privacy team via our support channels.',

      // CTA
      'cta.title': 'Keep Queer Memory Alive Together.',
      'cta.subtitle': 'Begin learning with QueerIQ, build your streak, and grow with your community. Download and join us today.',
      'cta.app_store_sub': 'Download on the',
      'cta.app_store_title': 'Coming Soon',
      'cta.google_play_sub': 'Get it on',
      'cta.google_play_title': 'Coming Soon',

      // Footer
      'footer.brand_desc': 'A modern platform making queer culture, history, and solidarity safe, engaging, and accessible for everyone through micro-learning.',
      'footer.col_product': 'Product',
      'footer.col_safety': 'Safety & Values',
      'footer.col_legal': 'Legal Documents',
      'footer.link_terms': 'Terms of Service',
      'footer.link_privacy': 'Privacy Policy',
      'footer.link_guidelines': 'Community Guidelines',
      'footer.link_contact': 'Contact & Support',
      'footer.copy': '© 2026 QueerIQ. All rights reserved.',
      'footer.pride_tag': 'Engineered with pride, equality, and diversity.'
    }
  };

  // State
  let currentLanguage = 'tr';

  // ===================================================================
  // Localization Engine
  // ===================================================================
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('queeriq_landing_lang', lang);

    document.documentElement.setAttribute('lang', lang);

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key] !== undefined) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Update active class on language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // ===================================================================
  // Interactive Trivia Simulator (Phone Mockup on Landing Page)
  // ===================================================================
  function setupTriviaSimulator() {
    const optionButtons = document.querySelectorAll('.phone-opt-btn');
    const feedbackBox = document.getElementById('phoneTriviaFeedback');

    if (!optionButtons.length || !feedbackBox) return;

    optionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isCorrect = btn.getAttribute('data-correct') === 'true';

        // Clear previous states
        optionButtons.forEach(function (b) {
          b.classList.remove('correct', 'incorrect');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          feedbackBox.textContent = TRANSLATIONS[currentLanguage]['sim.feedback_correct'];
          feedbackBox.className = 'phone-trivia-feedback visible';
          feedbackBox.style.borderLeftColor = '#16A34A';
          feedbackBox.style.color = '#166534';
          feedbackBox.style.background = '#F0FDF4';
        } else {
          btn.classList.add('incorrect');
          feedbackBox.textContent = TRANSLATIONS[currentLanguage]['sim.feedback_wrong'];
          feedbackBox.className = 'phone-trivia-feedback visible';
          feedbackBox.style.borderLeftColor = '#DC2626';
          feedbackBox.style.color = '#991B1B';
          feedbackBox.style.background = '#FEF2F2';
        }
      });
    });
  }

  // ===================================================================
  // Mobile Navigation Drawer
  // ===================================================================
  function setupMobileNav() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileDrawer');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', function () {
        drawer.classList.toggle('open');
      });

      // Close when clicking any nav link inside drawer
      drawer.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          drawer.classList.remove('open');
        });
      });
    }
  }

  // ===================================================================
  // Language Switch Buttons Event Listeners
  // ===================================================================
  function setupLanguageSwitchers() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
        }
      });
    });
  }

  // ===================================================================
  // Init on DOM Ready
  // ===================================================================
  document.addEventListener('DOMContentLoaded', function () {
    // Check saved language or browser preference
    const savedLang = localStorage.getItem('queeriq_landing_lang');
    if (savedLang === 'en' || savedLang === 'tr') {
      setLanguage(savedLang);
    } else {
      setLanguage('tr'); // Default Turkish
    }

    setupLanguageSwitchers();
    setupTriviaSimulator();
    setupMobileNav();
  });

})();
