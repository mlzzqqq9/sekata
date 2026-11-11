export const wa = 'https://wa.me/6282131087971';
export const map = 'https://www.google.com/maps/search/?api=1&query=-7.9907544,112.6804383';
export const hampers = ['Lebaran', 'Ulang Tahun', 'Anak', 'Wisuda', 'Wedding'];
export const souvenirs = [
  'Wedding',
  'Haji Umrah',
  'Sertijab',
  'Rapat Rakor',
  'BUMN',
  'Premium VIP',
  'Kantor',
  'Perusahaan',
  'Tambang',
  'Gathering',
  'Seminar Workshop'
];
export const slug = (s: string) => s.toLowerCase().replace(/ /g, '-');
export const categories = [
  ...hampers.map((n) => ({ name: 'Hampers ' + n, slug: 'hampers-' + slug(n), type: 'Hampers' })),
  ...souvenirs.map((n) => ({ name: 'Souvenir ' + n, slug: 'souvenir-' + slug(n), type: 'Souvenir' }))
];

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  kind: string;
  categorySlug?: string;
  image: string;
  desc: string;
  tagline: string;
  story: string;
  featureHeading: string;
  featureStory: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    id: 'quilted-pouch-star',
    categorySlug: 'souvenir-wedding',
    name: 'Pouch Quilted Star & Tassel',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-quilted-pouch.jpg',
    desc: 'Pouch quilted motif bintang dengan aksen rumbai tassel elegan, dikemas dalam mika transparan berhias pita satin cantik.',
    tagline: 'Sentuhan Quilted Elegan untuk Kenangan Hari Bahagia',
    story: 'Pouch Quilted Star & Tassel menghadirkan kesan hangat dan penuh perhatian sejak pandangan pertama. Bagi generasi masa kini yang mengapresiasi keindahan detail estetik, souvenir ini memadukan tekstur empuk yang menenangkan dengan siluet modern yang effortlessly chic. Lebih dari sekadar cinderamata, pouch ini menjadi ungkapan rasa terima kasih tulus dari kedua mempelai yang akan terus menemani hari-hari para sahabat dan tamu undangan.',
    featureHeading: 'Tekstur Bintang Empuk dengan Aksen Tassel & Kemasan Mika Pita',
    featureStory: 'Dirancang menggunakan material kulit sintetis lembut berjahit quilted bintang presisi. Bagian penarik ritsleting dipercantik rumbai tassel sutra yang anggun. Sangat fungsional sebagai wadah kosmetik harian, essential kit, maupun tempat aksesoris. Setiap unit dikemas dalam boks mika transparan eksklusif dengan simpul pita satin pilihan serta greeting card custom nama kedua mempelai.',
    specs: [
      { label: 'Material Utama', value: 'Quilted Faux Leather Premium & Furing Parasut' },
      { label: 'Dimensi Ukuran', value: '20 cm x 12 cm x 4 cm' },
      { label: 'Aksen Detail', value: 'Rumbai Tassel Sutra & Gold Zipper' },
      { label: 'Pilihan Warna', value: 'Champagne Gold, Rose Dust, Ivory White, Soft Tan' },
      { label: 'Kemasan Default', value: 'Hard Mika Transparan + Pita Satin + Thank You Card' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs (Bisa konsultasi kebutuhan)' }
    ]
  },
  {
    id: 'duo-pouch-canvas-leather',
    categorySlug: 'souvenir-wedding',
    name: 'Duo Pouch Kanvas & Kulit',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-dual-pouch-canvas.jpg',
    desc: 'Pouch kombinasi kanvas premium dan kulit sintetis lembut dengan inisial monogram nama kedua mempelai.',
    tagline: 'Harmoni Kanvas Natural & Kulit Sintetis dengan Monogram Eksklusif',
    story: 'Memadukan nuansa earthy kanvas katun alami dengan kemewahan kulit sintetis lembut, Duo Pouch ini dirancang untuk pasangan yang menginginkan estetika clean, timeless, dan berkarakter. Konsep dua tekstur yang menyatu mencerminkan komitmen dua insan yang saling melengkapi dalam ikatan pernikahan yang suci.',
    featureHeading: 'Personalisasi Monogram Emas & Daya Tahan Jangka Panjang',
    featureStory: 'Material kanvas katun tebal dipadukan dengan aksen kulit sintetis kokoh pada bagian bawah dan tali pergelangan. Nama atau inisial mempelai dicetak presisi menggunakan teknik heat-press foil emas atau deboss tahan lama. Ukurannya dirancang pas untuk kebutuhan mobilitas harian—mulai dari menyimpan ponsel, dompet tipis, hingga perlengkapan esensial lainnya.',
    specs: [
      { label: 'Material Utama', value: 'Kanvas Katun Premium 12oz & Synthetic Leather' },
      { label: 'Dimensi Ukuran', value: '22 cm x 14 cm' },
      { label: 'Metode Personalisasi', value: 'Hot Stamp Foil Emas / Emboss Inisial Monogram' },
      { label: 'Pilihan Warna Kulit', value: 'Classic Tan, Dark Brown, Forest Green, Midnight Black' },
      { label: 'Kemasan Default', value: 'Pouch Dustbag Ramah Lingkungan / Mika + Pita' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'clutch-leather-black',
    categorySlug: 'souvenir-wedding',
    name: 'Clutch Kulit Minimalis Hitam',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-leather-clutch-black.jpg',
    desc: 'Pouch clutch kulit hitam elegan dengan tali jinjing tangan, fungsional dan berkesan eksklusif untuk para tamu.',
    tagline: 'Quiet Luxury yang Fungsional untuk Para Tamu Istimewa',
    story: 'Elegan, sleek, dan versatile. Clutch kulit minimalis hitam Sekata hadir bagi Anda yang mendambakan souvenir dengan aura kemewahan yang tenang (*quiet luxury*). Warnanya yang netral dan berkelas menjadikannya hadiah netral gender yang disukai tamu pria maupun wanita, siap melengkapi penampilan mereka saat menghadiri perayaan formal maupun hangout santai.',
    featureHeading: 'Tali Jinjing Ergonomis & Kompartemen Serbaguna',
    featureStory: 'Dibuat dari faux leather hitam pekat dengan tekstur jeruk halus yang tahan goresan ringan dan cipratan air. Dilengkapi tali tangan ergonomis yang memudahkan genggaman serta resleting logam anti-karat. Bagian dalam dilapisi furing tebal yang lembut, memberikan perlindungan optimal untuk smartphone, dompet kartu, dan kunci kendaraan.',
    specs: [
      { label: 'Material Utama', value: 'PU Leather Tekstur Jeruk Tahan Percikan Air' },
      { label: 'Dimensi Ukuran', value: '21 cm x 13 cm x 2.5 cm' },
      { label: 'Personalisasi', value: 'Deboss Logo / Nama Mempelai di Bagian Depan' },
      { label: 'Fitur', value: 'Hand Strap + Ritsleting Logam Halus' },
      { label: 'Kemasan Default', value: 'Semi-Hardbox Eksklusif / Mika Berpita Gold' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'leather-dopp-kit-trio',
    categorySlug: 'souvenir-wedding',
    name: 'Leather Dopp Kit Series',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-leather-doppkit-trio.jpg',
    desc: 'Pouch kulit serbaguna dengan pilihan warna tan, dark brown, dan hitam, cocok untuk souvenir pernikahan berkelas.',
    tagline: 'Pouch Travel Klasik Berkapasitas Lapang untuk Ragam Momen',
    story: 'Leather Dopp Kit Series terinspirasi dari gaya hidup dinamis yang tetap mengedepankan kerapian. Dengan pilihan warna earthy hangat—Tan, Dark Brown, dan Hitam—souvenir ini merupakan ungkapan terima kasih berkelas tinggi yang sangat bernilai guna bagi tamu yang gemar bepergian maupun beraktivitas padat.',
    featureHeading: 'Konstruksi Kokoh, Water-Repellent, & Travel-Ready',
    featureStory: 'Bodi pouch dirancang memiliki kedalaman ekstra sehingga mampu memuat toiletries, parfum, skincare, charger, hingga kabel gadget dengan tertata rapi. Material kulit sintetis tebal mudah dilap bersih jika terkena noda. Detail jahitan ganda di sepanjang tepi menjamin daya tahan produk hingga bertahun-tahun mendatang.',
    specs: [
      { label: 'Material Utama', value: 'Heavy Duty Faux Leather & Water-Repellent Lining' },
      { label: 'Dimensi Ukuran', value: '23 cm x 12 cm x 8 cm' },
      { label: 'Pilihan Warna', value: 'Warm Tan, Espresso Brown, Onyx Black' },
      { label: 'Personalisasi', value: 'Laser Engrave / Emboss Custom Tipografi' },
      { label: 'Kemasan Default', value: 'Box Kardus Kraft Rustic + Tali Rami / Mika Satin' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'card-holder-wavy',
    categorySlug: 'souvenir-wedding',
    name: 'Card Holder Gelombang Kulit',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-wavy-card-holder.jpg',
    desc: 'Tempat kartu kulit desain lekuk gelombang warna modern dengan monogram inisial emas, ringkas dan bermanfaat.',
    tagline: 'Tempat Kartu Modern Berlekuk Dinamis untuk Gaya Hidup Cashless',
    story: 'Dalam era serba digital dan cashless, Card Holder Gelombang hadir sebagai jawaban estetik untuk membawa esensial harian. Garis lekuk gelombangnya yang playful memberikan nuansa segar, modern, dan tidak kaku, sangat diminati oleh kalangan muda yang menyukai perpaduan fungsionalitas dan tren desain kontemporer.',
    featureHeading: 'Presisi Lekuk Gelombang & Monogram Foil Emas',
    featureStory: 'Dipotong secara presisi dengan tepi yang di-burnishing halus agar tidak mudah terkelupas. Memiliki 4 slot kartu utama dan 1 kantong tengah untuk menyimpan uang tunai terlipat atau struk. Personalisasi inisial nama mempelai dengan foil emas di bagian lekuk bawah memberikan sentuhan mewah yang personal tanpa berlebihan.',
    specs: [
      { label: 'Material Utama', value: 'Smooth Nappa PU Leather' },
      { label: 'Dimensi Ukuran', value: '10.5 cm x 8 cm' },
      { label: 'Kapasitas', value: '4 Slot Kartu + 1 Kompartemen Tengah' },
      { label: 'Pilihan Warna', value: 'Sage Green, Terracotta, Caramel, Nude Cream' },
      { label: 'Kemasan Default', value: 'Paper Sleeve Botani + Pita Ramping' },
      { label: 'Minimum Order', value: 'Mulai 100 pcs' }
    ]
  },
  {
    id: 'card-holder-arch',
    categorySlug: 'souvenir-wedding',
    name: 'Card Holder Arch Curved',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-arch-card-holder.jpg',
    desc: 'Card holder kulit lekuk elegan kombinasi burgundy dan tan, dilengkapi personalisasi inisial foil emas.',
    tagline: 'Siluet Lengkung Arsitektural dalam Nuansa Burgundy & Tan',
    story: 'Card Holder Arch Curved mengambil inspirasi dari lengkungan arsitektur klasik yang memancarkan ketenangan dan keanggunan. Perpaduan warna burgundy yang berani dengan sentuhan tan yang hangat menciptakan kontras visual yang memikat, menjadikannya souvenir pernikahan yang unik dan penuh daya pikat.',
    featureHeading: 'Dual-Tone Elegan & Personalisasi Nama Pasangan',
    featureStory: 'Setiap lekukan dibuat dengan standar presisi tinggi dan jahitan benang nilon kuat yang awet. Desainnya yang tipis sangat nyaman diselipkan ke dalam saku celana maupun tas kecil. Kartu ucapan terima kasih dengan desain floral estetik disertakan dalam kemasan, menyempurnakan cerita cinta yang dibagikan kepada para tamu.',
    specs: [
      { label: 'Material Utama', value: 'Premium Synthetic Leather Dual Tone' },
      { label: 'Dimensi Ukuran', value: '10 cm x 7.5 cm' },
      { label: 'Warna Kombinasi', value: 'Burgundy & Tan, Olive & Cream, Navy & Grey' },
      { label: 'Personalisasi', value: 'Foil Emas / Perak Inisial Mempelai' },
      { label: 'Kemasan Default', value: 'Mika Bening Berhias Tali Emas + Kartu Doa' },
      { label: 'Minimum Order', value: 'Mulai 100 pcs' }
    ]
  },
  {
    id: 'canvas-tote-leather',
    categorySlug: 'souvenir-wedding',
    name: 'Tote Bag Kanvas Aksen Kulit',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-canvas-tote-leather.jpg',
    desc: 'Tas jinjing kanvas tebal dengan bagian bawah dan tali kulit sintetis kokoh berhias inisial monogram pengantin.',
    tagline: 'Tas Jinjing Serbaguna untuk Temani Rutinitas Harian Penuh Makna',
    story: 'Hadiah yang baik adalah hadiah yang terus hidup dan terpakai. Tote bag kanvas aksen kulit ini dirancang untuk mendampingi mobilitas tamu undangan dalam berbagai kesempatan—dari berbelanja kebutuhan, membawa buku dan laptop, hingga liburan santai. Kesan natural berpadu aksen kulit mewah menjadikannya souvenir pernikahan yang sangat bernilai tinggi.',
    featureHeading: 'Alas Kulit Anti-Kotor & Tali Bahu yang Nyaman',
    featureStory: 'Bagian bawah tas dilapisi kulit sintetis kokoh yang memudahkan tas diletakkan tanpa khawatir kotor. Tali pegangan dirancang dengan panjang pas di bahu, tidak membuat pegal meski membawa beban harian. Nama mempelai dapat dicetak dengan sablon grafis estetik atau bordir halus sesuai tema dekorasi pernikahan Anda.',
    specs: [
      { label: 'Material Utama', value: 'Kanvas Katun Super Tebal & Kulit Sintetis' },
      { label: 'Dimensi Ukuran', value: '35 cm x 38 cm x 8 cm' },
      { label: 'Daya Tampung', value: 'Hingga 5-7 kg (Muat laptop 14 inch)' },
      { label: 'Metode Cetak', value: 'Sablon Rubber Awet / Bordir Komputer' },
      { label: 'Kemasan Default', value: 'Pita Satin Melingkar + Hangtag Nama Mempelai' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'wedding-gift-set-exclusive',
    categorySlug: 'souvenir-wedding',
    name: 'Paket Gift Set Wedding Eksklusif',
    kind: 'Gift Set',
    image: 'products/wedding-gift-set-exclusive.jpg',
    desc: 'Paket hadiah lengkap berisi tote bag kanvas personal, pouch monogram, lilin aromaterapi, dan greeting card.',
    tagline: 'Pengalaman Gifting Menyeluruh untuk Bridesmaid & Tamu Terhormat',
    story: 'Kadang satu item saja belum cukup untuk menyampaikan rasa terima kasih yang melimpah. Paket Gift Set Wedding Eksklusif hadir sebagai kurasi hadiah paripurna yang memanjakan mata, sentuhan, dan indra penciuman. Sangat tepat dipersembahkan sebagai bridesmaid proposal box, hadiah keluarga inti, maupun cinderamata untuk tamu kehormatan.',
    featureHeading: 'Kombinasi Harmonis Produk Personal & Lilin Aromaterapi',
    featureStory: 'Dalam satu bingkisan, penerima akan menemukan tote bag kanvas custom, pouch kulit monogram, lilin aromaterapi dari soy wax alami yang wangi menenangkan, serta kartu ucapan berdesain puitis. Semuanya dikemas rapi dalam hardbox kokoh berhias pita satin tebal dan wax seal cap stempel lilin yang megah.',
    specs: [
      { label: 'Isi Paket', value: 'Tote Bag Kanvas + Pouch Kulit + Scented Candle + Greeting Card' },
      { label: 'Material Box', value: 'Rigid Hardbox Premium dengan Kertas Bertekstur' },
      { label: 'Dimensi Box', value: '28 cm x 22 cm x 10 cm' },
      { label: 'Aroma Lilin', value: 'Lavender Chamomile / Vanilla Sandalwood' },
      { label: 'Finishing', value: 'Pita Satin Lebar & Wax Seal Custom' },
      { label: 'Minimum Order', value: 'Mulai 10 paket (Fleksibel)' }
    ]
  },
  {
    id: 'canvas-tote-bag-trio',
    categorySlug: 'souvenir-wedding',
    name: 'Tote Bag Kanvas Custom Nama',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-tote-bag-trio.jpg',
    desc: 'Tote bag kanvas katun lembut dengan tali kulit cokelat, dapat dicetak custom nama mempelai dan tanggal acara.',
    tagline: 'Gaya Simpel, Berkelanjutan, dan Menyatu dengan Gaya Hidup Urban',
    story: 'Mengusung semangat keberlanjutan (*sustainable gifting*), Tote Bag Kanvas Custom Nama adalah pilihan cerdas untuk menggantikan kantong plastik sekali pakai dengan tas belanja yang estetik. Desain tipografinya yang clean dan modern mencerminkan kepribadian pasangan muda yang menghargai kesederhanaan dan kepedulian lingkungan.',
    featureHeading: 'Kanvas Katun Organik dengan Tali Pegangan Kulit Cokelat',
    featureStory: 'Dibuat dari kanvas katun berserat rapat yang lembut di tangan namun tahan beban berat. Tali kulit cokelat memberi aksen vintage kontemporer yang manis. Hasil cetak nama dan tanggal acara menggunakan tinta ramah lingkungan yang tidak mudah luntur meski dicuci berkali-kali.',
    specs: [
      { label: 'Material Utama', value: '100% Kanvas Katun Organik & Faux Leather Strap' },
      { label: 'Dimensi Ukuran', value: '33 cm x 37 cm' },
      { label: 'Pilihan Warna Kanvas', value: 'Natural Broken White, Khaki Sand, Charcoal' },
      { label: 'Personalisasi', value: 'Custom Font Nama & Tanggal Acara' },
      { label: 'Kemasan Default', value: 'Kertas Kraft Cokelat Daur Ulang + Tali Rami' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'satin-flower-scrunchie',
    categorySlug: 'souvenir-wedding',
    name: 'Scrunchie Mawar Satin Kartu Ucapan',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-flower-scrunchie.jpg',
    desc: 'Ikat rambut mawar satin mewah disematkan pada kartu ucapan terima kasih pernikahan bernuansa floral botanic.',
    tagline: 'Perhatian Manis Bertekstur Lembut untuk Sahabat Tersayang',
    story: 'Hadiah kecil yang sarat kelembutan. Scrunchie berbentuk kelopak mawar berbahan satin silk premium ini dirancang untuk menjaga rambut tetap rapi tanpa menyebabkan rasa sakit atau bekas ikatan. Pilihan favorit bagi calon pengantin yang ingin membagikan kebahagiaan manis kepada seluruh sahabat wanita dan kerabat dekat.',
    featureHeading: 'Bahan Silk Satin Lembut Disematkan pada Backing Card Floral',
    featureStory: 'Kilau satin sutra yang elegan berpadu dengan elastisitas karet berkualitas tinggi yang tidak mudah melar. Disajikan pada backing card bermotif ilustrasi botani bertuliskan doa restu dan nama kedua mempelai. Souvenir ini sangat cocok untuk pernikahan bernuansa garden party, intimate gathering, maupun bridal shower.',
    specs: [
      { label: 'Material Utama', value: 'Ultra-Soft Silk Satin Fabric' },
      { label: 'Diameter', value: '± 11 cm (Elastic Stretch)' },
      { label: 'Pilihan Warna', value: 'Champagne, Dusty Rose, Sage, Soft Lilac, Terracotta' },
      { label: 'Backing Card', value: 'Art Carton 310gsm Tekstur Matte Botani' },
      { label: 'Kemasan Default', value: 'Plastik Seal Bening + Backing Card Custom' },
      { label: 'Minimum Order', value: 'Mulai 100 pcs' }
    ]
  },
  {
    id: 'resin-flower-clip',
    categorySlug: 'souvenir-wedding',
    name: 'Jepit Rambut Bunga Resin Frangipani',
    kind: 'Wedding Souvenir',
    image: 'products/wedding-resin-flower-clip.jpg',
    desc: 'Aksesoris jepit rambut bunga kamboja resin kilap dengan kartu ucapan custom nama kedua mempelai.',
    tagline: 'Keindahan Bunga Abadi dalam Balutan Resin Berkilau Indah',
    story: 'Bunga kamboja (frangipani) selalu melambangkan ketulusan, keabadian, dan sukacita yang mekar. Jepit rambut resin ini mengabadikan pesona kelopak kamboja dalam material resin berkilap jernih yang memantulkan cahaya dengan memesona. Cinderamata manis yang membawa nuansa tropis romantis ke hari pernikahan Anda.',
    featureHeading: 'Jepit Logam Anti-Karat dengan Daya Cengkeram Kuat',
    featureStory: 'Material resin tebal tidak mudah pecah dan memiliki permukaan yang halus mulus. Klip penjepit terbuat dari logam alloy anti-karat yang mencengkeram rambut dengan kuat tanpa merusak helai rambut. Dilengkapi kartu tatakan eksklusif yang dipersonalisasi nama kedua mempelai.',
    specs: [
      { label: 'Material Utama', value: 'High Gloss Eco-Resin & Logam Alloy Klip' },
      { label: 'Ukuran Bunga', value: 'Diameter ± 7 cm' },
      { label: 'Pilihan Warna', value: 'Ivory White Core Yellow, Sunset Peach, Pearl Pink' },
      { label: 'Packaging', value: 'Custom Illustrated Card + Plastik Pelindung' },
      { label: 'Minimum Order', value: 'Mulai 100 pcs' }
    ]
  },
  {
    id: 'tasbih-digital-black-gold',
    categorySlug: 'souvenir-haji-umrah',
    name: 'Tasbih Digital Haji & Umroh Gold',
    kind: 'Souvenir Haji Umrah',
    image: 'products/haji-umroh-tasbih-black-gold.jpg',
    desc: 'Tasbih digital counter praktis dipadukan kartu doa kenang-kenangan motif batik islami dan doa Robbana Taqabbal Minna.',
    tagline: 'Untaian Doa dan Syukur Kepulangan Ibadah Tanah Suci',
    story: 'Menyempurnakan kepulangan dari baitullah dengan membagikan keberkahan dzikir kepada sanak saudara. Tasbih Digital Black & Gold Sekata menggabungkan kemudahan teknologi penghitung dzikir modern dengan aura spiritual yang mendalam. Souvenir penuh makna yang akan terus mengalirkan pahala kebaikan di setiap pencetan tombolnya.',
    featureHeading: 'Tombol Responsif dengan Backing Card Kaligrafi Arab & Doa',
    featureStory: 'Body tasbih hitam mengkilap berhias aksen tombol emas yang mewah. Layar counter digital 5 digit dengan tombol reset yang praktis. Dikemas pada tatakan kartu doa bermotif batik islami bernuansa emas bertuliskan ucapan selamat datang haji/umrah dan doa maqbul yang menyentuh kalbu.',
    specs: [
      { label: 'Tipe Produk', value: 'Tasbih Digital Counter 5 Digit (0-99999)' },
      { label: 'Warna Body', value: 'Hitam Mengkilap Aksen Tombol Emas' },
      { label: 'Bahan Kartu', value: 'Ivory Paper 300gsm Foil Emas Kaligrafi' },
      { label: 'Teks Personalisasi', value: 'Nama Jamaah Haji/Umrah, Kloter, & Tahun Hijriyah' },
      { label: 'Kemasan Default', value: 'Mika / Plastik Klip Bening + Pita Emas' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'tasbih-digital-idul-fitri',
    categorySlug: 'souvenir-haji-umrah',
    name: 'Tasbih Digital Kubah Floral Pita',
    kind: 'Souvenir Haji Umrah',
    image: 'products/haji-umroh-tasbih-idul-fitri.jpg',
    desc: 'Tasbih digital cantik dikemas kartu kubah floral berhias pita satin ucapan kenangan ibadah dan Idul Fitri.',
    tagline: 'Silaturahmi Penuh Berkah dalam Bingkisan Ibadah Bernuansa Hangat',
    story: 'Menghadirkan kehangatan hari kemenangan dan momen tasyakuran keluarga dalam satu bingkisan doa yang manis. Tasbih Digital Kubah Floral dirancang khusus untuk memeriahkan syukuran umrah, haji, maupun bingkisan hari raya Idul Fitri bagi kerabat tercinta.',
    featureHeading: 'Kartu Potongan Bentuk Kubah Masjid Berhias Bunga & Pita Satin',
    featureStory: 'Keunikan souvenir ini terletak pada kartu tatakan yang dipotong membentuk kubah masjid berhias ilustrasi bunga cat air yang lembut. Dipermanis dengan pita satin cantik dan teks doa kebaikan. Penghitung digital yang akurat dan ringan sangat nyaman digenggam saat tadarus maupun dzikir pagi petang.',
    specs: [
      { label: 'Tipe Produk', value: 'Tasbih Digital Mini 5 Digit' },
      { label: 'Bentuk Kartu', value: 'Die-Cut Kubah Masjid Floral Water Color' },
      { label: 'Hiasan', value: 'Pita Satin Halus Warna Earthy / Pastel' },
      { label: 'Personalisasi', value: 'Nama Keluarga / Jamaah & Ucapan Tasyakuran' },
      { label: 'Kemasan Default', value: 'Plastik Mika Presisi + Pita' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'tasbih-digital-turkish-blue',
    categorySlug: 'souvenir-haji-umrah',
    name: 'Tasbih Digital Umroh Motif Turki',
    kind: 'Souvenir Haji Umrah',
    image: 'products/haji-umroh-tasbih-turkish-blue.jpg',
    desc: 'Tasbih digital putih dipadukan kartu ornamen floral biru khas Turki, lengkap dengan doa keberkahan ibadah Tanah Suci.',
    tagline: 'Keindahan Ornamen Iznik Turki untuk Kenangan Ibadah Berkesan',
    story: 'Terinspirasi oleh kemegahan keramik Iznik dan kubah biru Istanbul yang legendaris. Tasbih Digital motif Turki menghadirkan ketenangan visual yang khas, membawa kenangan perjalanan spiritual napak tilas sejarah Islam ke rumah setiap tamu yang Anda hormati.',
    featureHeading: 'Warna Turkish Blue yang Syahdu & Desain Ringkas Elegan',
    featureStory: 'Warna putih bersih pada body tasbih berpadu kontras dengan kartu tatakan berpola ornamen floral biru khas Turki yang agung. Tombol klik yang empuk dan layar counter yang tajam memudahkan para sesepuh maupun generasi muda untuk senantiasa mengingat asma Allah di setiap kesempatan.',
    specs: [
      { label: 'Tipe Produk', value: 'Tasbih Counter Digital 5 Digit' },
      { label: 'Desain Kartu', value: 'Iznik Ceramic Motif Turkish Blue Art' },
      { label: 'Fitur', value: 'Display LCD Tajam & Tombol Reset Otomatis' },
      { label: 'Personalisasi', value: 'Custom Doa Haji/Umrah Mabrur & Nama Jamaah' },
      { label: 'Kemasan Default', value: 'Bungkus Mika Rapi + Pita Emas / Biru' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'tasbih-digital-finger-strap',
    categorySlug: 'souvenir-haji-umrah',
    name: 'Tasbih Digital Tali Jari Minimalis',
    kind: 'Souvenir Haji Umrah',
    image: 'products/haji-umroh-tasbih-finger-strap.jpg',
    desc: 'Tasbih digital ringkas dengan tali silikon pas di jari, disajikan pada kartu doa minimalis bersih dan berkelas.',
    tagline: 'Ergonomis, Praktis di Jari, Temani Dzikir Sepanjang Waktu',
    story: 'Didesain untuk generasi aktif yang mengutamakan kepraktisan tanpa melupakan esensi ibadah. Tasbih Digital Finger Strap memiliki tali silikon lentur yang dapat dikaitkan pas di jari tangan, membuat aktivitas berdzikir terasa effortless saat di perjalanan, bekerja, maupun di waktu luang.',
    featureHeading: 'Tali Silikon Fleksibel & Tampilan Minimalis Modern',
    featureStory: 'Material silikon lembut tidak menimbulkan iritasi di kulit meski dipakai seharian. Tombol hitung berpenampang pas dengan bunyi klik lembut yang memuaskan. Disajikan pada kartu ucapan bergaya minimalis modern bernuansa putih-krem yang bersih dan elegan.',
    specs: [
      { label: 'Material Utama', value: 'ABS Halus & Tali Silikon Fleksibel' },
      { label: 'Ukuran Strap', value: 'Adjustable untuk Segala Ukuran Jari' },
      { label: 'Pilihan Warna Body', value: 'Pure White, Soft Grey, Warm Beige, Muted Black' },
      { label: 'Personalisasi', value: 'Nama Jamaah / Acara pada Kartu Doa' },
      { label: 'Kemasan Default', value: 'Plastik Seal Tebal + Greeting Card Minimalis' },
      { label: 'Minimum Order', value: 'Mulai 50 pcs' }
    ]
  },
  {
    id: 'botanical-glass-treats',
    name: 'Botanical Glass & Treats',
    kind: 'Hampers Lebaran',
    categorySlug: 'hampers-lebaran',
    image: 'products/hampers-botanical-glass-treats.jpg',
    desc: 'Gelas kaca bergaris estetik, matcha tea premium, dan cookies renyah dalam boks eksklusif bermotif botanical masjid.',
    tagline: 'Kesegaran & Manisnya Silaturahmi dalam Balutan Botanical Eksklusif',
    story: 'Perpaduan rasa alami untuk hari kemenangan. Botanical Glass & Treats dirancang untuk menghadirkan kehangatan silaturahmi Idul Fitri yang bermakna. Kemasan hardbox kokoh berhias ilustrasi arsitektur masjid dan flora botani menyimpan gelas kaca bertekstur, boks teh matcha aromatik, serta cookies lezat siap santap.',
    featureHeading: 'Gelas Kaca Estetik, Teh Matcha & Cookies dalam Boks Rigid',
    featureStory: 'Setiap elemen dikurasi cermat dengan fungsi harian nyata: gelas kaca bergaris elegan untuk menyajikan minuman segar saat open house, matcha tea pilihan, dan cookies renyah. Lengkap dengan kartu ucapan Selamat Hari Raya Idul Fitri yang dapat dipersonalisasi nama keluarga atau logo perusahaan.',
    specs: [
      { label: 'Kemasan Luar', value: 'Hardbox Rigid Tebal Motif Botanical Masjid' },
      { label: 'Isi Paket', value: '1x Gelas Kaca Bergaris, 1x Box Matcha Tea, 1x Box Cookies' },
      { label: 'Personalisasi', value: 'Greeting Card Custom Nama Keluarga / Logo Kantor' },
      { label: 'Minimum Order', value: 'Mulai 10 pcs (Konsultasikan kebutuhan)' }
    ]
  },
  {
    id: 'jasmine-mug-cookies',
    name: 'Jasmine Mug & Cookies',
    kind: 'Hampers Lebaran',
    categorySlug: 'hampers-lebaran',
    image: 'products/hampers-jasmine-mug-cookies.jpg',
    desc: 'Cangkir keramik elegan bergagang hitam, seduhan teh melati wangi, dan cookies dalam hardbox eksklusif bernuansa hangat Lebaran.',
    tagline: 'Aroma Melati yang Menenangkan untuk Menyambut Hari Kemenangan',
    story: 'Menghidangkan kehangatan teh di pagi hari raya menjadi tradisi manis yang selalu dinanti. Set Jasmine Mug & Cookies menyajikan kombinasi cangkir keramik berkualitas dengan teh melati aromatik dan kue kering pilihan. Hadiah fungsional yang memberikan kesan mendalam bagi kerabat dan mitra bisnis.',
    featureHeading: 'Cangkir Keramik Fungsional, Teh Melati & Boks Eksklusif',
    featureStory: 'Cangkir keramik berkapasitas ideal dengan handle ergonomis hitam yang kontras dan berkelas. Dipadukan dengan sekotak jasmine tea beraroma menenangkan dan cookies lezat. Disajikan rapi dalam hardbox kokoh bertema arsitektur masjid dan flora khas Lebaran.',
    specs: [
      { label: 'Kemasan Luar', value: 'Hardbox Eksklusif Rigid Bertema Fitri' },
      { label: 'Isi Paket', value: '1x Cangkir Keramik Handle Hitam, 1x Box Jasmine Tea, 1x Box Cookies' },
      { label: 'Personalisasi', value: 'Greeting Card & Hangtag Custom Nama' },
      { label: 'Minimum Order', value: 'Mulai 10 pcs' }
    ]
  },
  {
    id: 'samica-ceramic-duo',
    name: 'Samica Ceramic Duo',
    kind: 'Hampers Lebaran',
    categorySlug: 'hampers-lebaran',
    image: 'products/hampers-samica-ceramic-duo.jpg',
    desc: 'Set keramik premium sepasang cangkir bertekstur vertikal dan satu saucer lepek dalam hardbox Samica Mubarak.',
    tagline: 'Keanggunan Keramik Bertekstur untuk Cinderamata Idul Fitri Berkelas',
    story: 'Dirancang bagi Anda yang menginginkan hadiah Lebaran bernuansa mewah, abadi, dan prestisius. Samica Ceramic Duo menghadirkan dua cangkir keramik putih susu bertekstur lekuk vertikal dengan satu piring lepek (saucer) elegan. Simbol kebersamaan dua cangkir yang menyatu dalam kehangatan silaturahmi hari raya.',
    featureHeading: 'Duo Cangkir Keramik, Saucer & Hardbox Samica Mubarak',
    featureStory: 'Dibuat dari keramik stoneware bermutu tinggi dengan lapisan glasir halus dan tahan panas. Ditata presisi pada dudukan busa custom dalam hardbox Samica berhias foil emas dan motif ornamen islami kontemporer. Sangat cocok sebagai corporate gifting untuk direksi, pejabat, dan mitra bisnis penting.',
    specs: [
      { label: 'Material Utama', value: 'High-Grade Glazed Stoneware Ceramic' },
      { label: 'Isi Paket', value: '2x Cangkir Keramik Tekstur Vertikal, 1x Saucer Piring Keramik' },
      { label: 'Kemasan', value: 'Exclusive Hardbox Samica Mubarak + Custom Sleeve' },
      { label: 'Minimum Order', value: 'Mulai 10 pcs' }
    ]
  },
  {
    id: 'eid-everyday-totebag',
    name: 'Eid Everyday Totebag',
    kind: 'Hampers Lebaran',
    categorySlug: 'hampers-lebaran',
    image: 'products/hampers-eid-everyday-totebag.jpg',
    desc: 'Totebag kanvas tebal dengan list kulit cokelat elegan dan grafis Eid Mubarak, fungsional untuk membawa hantaran maupun pemakaian harian.',
    tagline: 'Tas Jinjing Kanvas & Kulit Mewah yang Selalu Berguna Sepanjang Tahun',
    story: 'Hadiah Lebaran yang tidak hanya cantik saat diserahkan, tetapi akan terus dipakai berulang kali. Eid Everyday Totebag memadukan kekuatan kanvas katun tebal dengan kemewahan tali jinjing dan bibir tas berbahan kulit sintetis cokelat bertekstur. Menjadi wadah hampers yang ramah lingkungan sekaligus tas harian yang stylish dan fungsional.',
    featureHeading: 'Kapasitas Luas 40x12x35 cm dengan Sentuhan Aksen Kulit Sintetis',
    featureStory: 'Berdimensi lapang (40 cm x 12 cm x 35 cm), tas ini mampu memuat aneka toples kue kering, sirup, sajadah, hingga perlengkapan esensial lainnya. Dicetak dengan grafis kaligrafi Selamat Hari Raya Eid Fitr dan siluet masjid yang anggun. Jahitan rapi berkekuatan tinggi memastikan tas awet digunakan untuk berbelanja maupun bepergian.',
    specs: [
      { label: 'Material Utama', value: 'Kanvas Katun Tebal 14oz + Aksen Kulit Sintetis Cokelat' },
      { label: 'Dimensi Ukuran', value: '40 cm x 12 cm x 35 cm' },
      { label: 'Desain', value: 'Grafis Eid Fitr + Ilustrasi Kubah Masjid Anggun' },
      { label: 'Personalisasi', value: 'Bisa Custom Sablon Nama / Logo Instansi di Sisi Belakang' },
      { label: 'Minimum Order', value: 'Mulai 25 pcs' }
    ]
  }
];

export const articles = [
  {
    slug: 'panduan-memilih-hampers-lebaran',
    metaTitle: 'Hampers Lebaran 2027 Panduan Memilih dan Memesan | Sekata',
    title: 'Hampers Lebaran 2027 Panduan Lengkap Memilih Jenis Anggaran dan Cara Pesan',
    category: 'Hampers Guide',
    image: 'hampers-lebaran-custom-sekata.jpg',
    excerpt: 'Panduan hampers lebaran 2027 meliputi jenis, cara memilih sesuai penerima, anggaran, kemasan, dan jadwal pesan ideal untuk Idulfitri.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-11',
    readTime: '8'
  },
  {
    slug: 'isi-hampers-lebaran',
    metaTitle: 'Isi Hampers Lebaran Ide per Penerima dan Budget | Sekata',
    title: 'Isi Hampers Lebaran per Penerima dan Anggaran',
    category: 'Hampers Guide',
    image: 'isi-hampers-lebaran-keluarga.jpg',
    excerpt: 'Bingung memilih isi hampers lebaran? Simak ide isi per penerima, tips menjaga mutu makanan, dan cara memastikan status halal produk.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-11',
    readTime: '6'
  },
  {
    slug: 'hampers-lebaran-perusahaan',
    metaTitle: 'Hampers Lebaran Perusahaan Panduan Custom Logo | Sekata',
    title: 'Hampers Lebaran Perusahaan Custom Logo untuk Karyawan dan Klien',
    category: 'Corporate Gifting',
    image: 'hampers-lebaran-perusahaan-logo.jpg',
    excerpt: 'Panduan hampers lebaran perusahaan untuk karyawan dan klien meliputi kurasi isi, desain logo, kartu ucapan, dan jadwal produksi tepat waktu.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-11',
    readTime: '7'
  },
  {
    slug: 'hampers-lebaran-malang',
    metaTitle: 'Pesan Hampers Lebaran Malang Jadwal dan Pengiriman | Sekata',
    title: 'Pesan Hampers Lebaran Malang Jadwal Alur dan Area Pengiriman 2027',
    category: 'Hampers Guide',
    image: 'pesan-hampers-lebaran-malang.jpg',
    excerpt: 'Cara pesan hampers lebaran Malang dengan jadwal ideal, alur dari konsultasi WhatsApp hingga kirim, serta jangkauan area Malang, Batu, dan Kepanjen.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-11',
    readTime: '6'
  },
  {
    slug: 'panduan-memilih-souvenir-wedding',
    metaTitle: 'Panduan Memilih Souvenir Wedding yang Tepat dan Fungsional',
    title: 'Panduan Lengkap Memilih Souvenir Wedding yang Tepat untuk Pernikahan',
    category: 'Wedding Guide',
    image: 'koleksi-souvenir-wedding-fungsional.jpg',
    excerpt: 'Pelajari panduan memilih souvenir wedding berdasarkan fungsi, tema pernikahan, jumlah tamu, anggaran, material, dan alur pemesanan custom yang terukur.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-10',
    readTime: '8'
  },
  {
    slug: 'desain-souvenir-wedding-modern',
    metaTitle: '7 Detail Desain Souvenir Wedding Modern agar Tampak Elegan',
    title: '7 Detail Desain Souvenir Wedding Modern yang Membuatnya Lebih Elegan',
    category: 'Wedding Guide',
    image: 'detail-monogram-dan-tipografi-souvenir-modern.jpg',
    excerpt: 'Pelajari tujuh detail desain souvenir wedding modern mulai dari hierarki tipografi, skala monogram, ruang kosong, keselarasan komponen, hingga finishing agar tampak elegan.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-10',
    readTime: '6'
  },
  {
    slug: 'warna-souvenir-wedding-earth-tone',
    metaTitle: 'Inspirasi Perpaduan Warna Earth Tone untuk Souvenir Wedding',
    title: 'Inspirasi Perpaduan Warna Earth Tone untuk Souvenir Wedding',
    category: 'Wedding Guide',
    image: 'kombinasi-palet-sage-green-cream-dan-taupe.jpg',
    excerpt: 'Temukan inspirasi perpaduan warna earth tone seperti sage green, cream, taupe, olive, dan terracotta untuk souvenir wedding beserta penerapan pada material dan pencahayaan.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-10',
    readTime: '6'
  },
  {
    slug: 'emboss-vs-printing-souvenir-wedding',
    metaTitle: 'Perbedaan Emboss dan Printing untuk Souvenir Wedding Custom',
    title: 'Perbedaan Emboss dan Printing untuk Souvenir Wedding Custom',
    category: 'Wedding Guide',
    image: 'perbandingan-hasil-deboss-dan-printing-tinta.jpg',
    excerpt: 'Pahami perbedaan emboss, deboss, dan printing untuk souvenir wedding custom dari sisi tekstur, ketahanan, kecocokan bahan, syarat file artwork, dan faktor biaya.',
    author: 'Tim Editorial',
    reviewedBy: 'Editor Konten',
    dateModified: '2026-11-10',
    readTime: '7'
  },
  {
    slug: 'panduan-memilih-souvenir-pernikahan',
    title: 'Souvenir kecil, kenangan yang panjang.',
    category: 'Wedding Guide',
    image: 'products/wedding-quilted-pouch.jpg',
    excerpt: 'Panduan memilih souvenir pernikahan yang berguna, personal, dan sesuai rencana anggaran.'
  },
  {
    slug: 'hampers-yang-lebih-personal',
    title: 'Seni memberi hadiah yang terasa personal.',
    category: 'Gifting Ideas',
    image: 'products/wedding-gift-set-exclusive.jpg',
    excerpt: 'Mulai dari penerima, pilih isi, lalu satukan cerita lewat kemasan.'
  },
  {
    slug: 'persiapan-souvenir-acara',
    title: 'Sebelum memesan, siapkan lima hal ini.',
    category: 'Tips & Cerita',
    image: 'products/wedding-dual-pouch-canvas.jpg',
    excerpt: 'Brief sederhana agar konsultasi souvenir lebih terarah.'
  }
];

export const config = {
  heroImage: '/images/hero.jpg',
  heroVideo: '/images/background%20beranda%20sekata.mp4',
  clients: [] as { name: string; logo: string }[],
  testimonials: [] as { name: string; quote: string; event: string }[],
  social: { instagram: '', tiktok: '', email: '' }
};
