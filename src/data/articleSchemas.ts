// JSON-LD Schemas untuk 4 artikel pilar dan kluster souvenir wedding (Revisi Final SEO & Google Rich Results Valid)

const publisher = {
  '@type': 'Organization',
  'name': 'Sekata',
  'url': 'https://sekata.web.id/',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://sekata.web.id/images/logo.webp'
  }
};

const author = {
  '@type': 'Organization',
  'name': 'Tim Editorial',
  'url': 'https://sekata.web.id/sekata/'
};

export const articleSchemas: Record<string, any> = {
  'panduan-memilih-souvenir-pernikahan': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/#article',
        'headline': 'Panduan Memilih Souvenir Pernikahan yang Tepat dan Bermanfaat',
        'description': 'Pelajari panduan memilih souvenir pernikahan dan souvenir wedding berdasarkan fungsi, tema pernikahan, jumlah tamu, anggaran, material, dan alur pemesanan custom yang terukur.',
        'image': [
          'https://sekata.web.id/images/koleksi-souvenir-wedding-fungsional.jpg',
          'https://sekata.web.id/images/alur-pemesanan-souvenir-pernikahan-custom.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/#webpage'
        },
        'datePublished': '2026-11-10T09:00:00+07:00',
        'dateModified': '2026-11-12T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'souvenir pernikahan, souvenir wedding, memilih souvenir pernikahan, cinderamata pernikahan, souvenir pernikahan fungsional',
        'about': {
          '@type': 'Thing',
          'name': 'Souvenir Pernikahan'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/#webpage',
        'url': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/',
        'name': 'Panduan Memilih Souvenir Pernikahan yang Tepat dan Bermanfaat',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Panduan Memilih Souvenir Pernikahan',
            'item': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-pernikahan/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Kapan waktu paling ideal untuk mulai memesan souvenir wedding?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Waktu pemesanan bergantung pada tingkat kerumitan custom dan antrean produksi vendor. Sebaiknya konsultasi dimulai setelah tanggal acara, estimasi jumlah tamu, dan konsep warna pernikahan ditetapkan, sehingga proses persetujuan mockup dan pengiriman tidak terburu-buru.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah souvenir wedding selalu harus mencantumkan nama lengkap pengantin?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tidak wajib. Banyak pasangan memilih monogram inisial berukuran kecil atau memindahkan nama lengkap dan tanggal pernikahan ke kartu ucapan di dalam kemasan agar barangnya lebih nyaman dipakai tamu dalam aktivitas sehari-hari.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana membedakan souvenir satuan dan wedding gift set?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Souvenir satuan terdiri atas satu jenis produk fungsional yang dikemas untuk dibagikan kepada seluruh tamu umum. Sementara itu, wedding gift set menggabungkan dua atau lebih produk serasi dalam satu kotak penyajian, yang umumnya dialokasikan untuk keluarga inti, pengiring pengantin, atau tamu kehormatan.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah memesan dalam jumlah jauh lebih banyak selalu menurunkan harga satuan secara signifikan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pada produk custom yang memerlukan biaya cetakan khusus di awal, penambahan jumlah pesanan memang membagi biaya persiapan tetap tersebut sehingga beban per unitnya turun. Namun, harga material dasar dan ongkos jahit per satuan tetap mengikuti ketentuan struktur biaya masing-masing vendor.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah warna produk pada foto katalog pasti sama dengan hasil jadinya?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tidak selalu identik seratus persen. Perbedaan pengaturan layar gawai, pencahayaan pemotretan studio, serta pergantian batch pewarnaan gulungan kain atau kulit di pabrik dapat memengaruhi tampilan warna akhir. Memeriksa sampel bahan asli sangat dianjurkan sebelum menyepakati produksi.'
            }
          }
        ]
      }
    ]
  },
  'souvenir-pernikahan-fungsional': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/#article',
        'headline': '10 Ide Souvenir Pernikahan Fungsional yang Pasti Dipakai Tamu (Budget 50rb–100rb)',
        'description': 'Cari souvenir pernikahan murah tapi bermanfaat? Ini 10 ide fungsional budget 50–100 ribu dengan Skor Pakai, supaya tidak berakhir di laci tamu.',
        'image': [
          'https://sekata.web.id/images/souvenir-pernikahan-fungsional.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/#webpage'
        },
        'datePublished': '2026-11-12T09:00:00+07:00',
        'dateModified': '2026-11-12T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'souvenir pernikahan fungsional, ide souvenir pernikahan, souvenir pernikahan bermanfaat, souvenir pernikahan 50rb 100rb, souvenir wedding fungsional',
        'about': {
          '@type': 'Thing',
          'name': 'Souvenir Pernikahan'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/#webpage',
        'url': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/',
        'name': '10 Ide Souvenir Pernikahan Fungsional yang Pasti Dipakai Tamu (Budget 50rb–100rb)',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '10 Ide Souvenir Pernikahan Fungsional',
            'item': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/souvenir-pernikahan-fungsional/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Souvenir pernikahan apa yang paling sering dipakai tamu?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Barang yang dipakai hampir tiap hari, seperti tote bag, tumbler, dan pouch. Semakin jelas fungsinya dalam rutinitas harian, semakin kecil kemungkinan souvenir itu disimpan di laci.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Berapa budget souvenir pernikahan yang wajar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tidak ada angka tunggal. Rp50.000–Rp100.000 per pcs adalah kisaran yang umum dicari, tetapi yang penting adalah total anggaran dibagi jumlah undangan, setelah dikurangi alokasi cadangan sekitar 5–10%.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana menghitung budget souvenir untuk 300 tamu?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Kalikan harga per pcs dengan jumlah souvenir. Misalnya 300 pcs di Rp50.000 adalah Rp15.000.000, dan di Rp100.000 adalah Rp30.000.000. Hitung per undangan atau keluarga, bukan per kepala, untuk menghemat.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apa bedanya souvenir 50 ribuan dan 100 ribuan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Secara umum, kisaran 100 ribuan memberi ruang untuk bahan lebih baik, kemasan lebih rapi, dan personalisasi lebih detail. Barang di kisaran 50 ribuan tetap bisa bagus asalkan fungsinya tepat dan desainnya rapi.'
            }
          }
        ]
      }
    ]
  },
  'desain-souvenir-wedding-modern': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/#article',
        'headline': '7 Detail Desain Souvenir Wedding Modern yang Membuatnya Lebih Elegan',
        'description': 'Pelajari tujuh detail desain souvenir wedding modern mulai dari hierarki tipografi, skala monogram, ruang kosong, keselarasan komponen, hingga finishing agar tampak elegan.',
        'image': [
          'https://sekata.web.id/images/detail-monogram-dan-tipografi-souvenir-modern.jpg',
          'https://sekata.web.id/images/finishing-jahitan-dan-proporsi-kemasan-souvenir.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/#webpage'
        },
        'datePublished': '2026-11-10T09:00:00+07:00',
        'dateModified': '2026-11-10T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'desain souvenir wedding modern, detail desain souvenir pernikahan, monogram souvenir',
        'about': {
          '@type': 'Thing',
          'name': 'Desain Souvenir Wedding Modern'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/#webpage',
        'url': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/',
        'name': '7 Detail Desain Souvenir Wedding Modern yang Membuatnya Lebih Elegan',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '7 Detail Desain Souvenir Wedding Modern yang Membuatnya Lebih Elegan',
            'item': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/desain-souvenir-wedding-modern/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Berapa jumlah jenis huruf yang aman dipakai pada satu paket souvenir?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sebaiknya batasi penggunaan huruf maksimal dua keluarga font dalam satu rangkaian produk dan kartu ucapan. Satu huruf berkarakter khas dapat dipakai untuk monogram atau nama pasangan, sedangkan huruf polos yang mudah dibaca dipakai untuk informasi tanggal atau kalimat terima kasih di kartu kemasan.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah tanggal pernikahan wajib dicantumkan di badan produk utama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tidak wajib. Mencantumkan tanggal lengkap pada badan produk sering membuat barang terasa seperti perlengkapan acara khusus. Jika ingin mempertahankan kenangan tanggal pernikahan tanpa mengurangi kenyamanan pemakaian ulang, letakkan tanggal tersebut pada hang tag, pita segel, atau kartu ucapan di dalam box.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana menjaga desain minimalis agar tidak terlihat polos biasa saja?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Kualitas visual desain minimalis tidak ditopang oleh banyaknya grafis, melainkan oleh tekstur material dan kerapian komponennya. Menggabungkan bahan bertekstur halus, jahitan yang presisi, hardware senada, serta paper sleeve berpotongan pas sudah cukup membentuk karakter modern yang kuat.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Mengapa desain yang tampak tajam di file komputer terkadang terlihat kurang jelas saat dicetak?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Penyebab utamanya adalah perbedaan antara resolusi layar dengan batas fisik alat cetak atau permukaan bahan yang berpori. Garis desain yang lebih tipis dari batas toleransi alat produksi akan menyatu atau terputus saat diterapkan pada serat kain maupun tekstur kulit.'
            }
          }
        ]
      }
    ]
  },
  'warna-souvenir-wedding-earth-tone': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/#article',
        'headline': 'Inspirasi Perpaduan Warna Earth Tone untuk Souvenir Wedding',
        'description': 'Temukan inspirasi perpaduan warna earth tone seperti sage green, cream, taupe, olive, dan terracotta untuk souvenir wedding beserta penerapan pada material dan pencahayaan.',
        'image': [
          'https://sekata.web.id/images/kombinasi-palet-sage-green-cream-dan-taupe.jpg',
          'https://sekata.web.id/images/perpaduan-warna-terracotta-olive-dan-beige-outdoor.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/#webpage'
        },
        'datePublished': '2026-11-10T09:00:00+07:00',
        'dateModified': '2026-11-10T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'warna souvenir wedding earth tone, palet warna earth tone, souvenir sage green',
        'about': {
          '@type': 'Thing',
          'name': 'Warna Souvenir Wedding Earth Tone'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/#webpage',
        'url': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/',
        'name': 'Inspirasi Perpaduan Warna Earth Tone untuk Souvenir Wedding',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Inspirasi Perpaduan Warna Earth Tone untuk Souvenir Wedding',
            'item': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/warna-souvenir-wedding-earth-tone/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Apakah warna sage green tetap cocok dipadukan dengan dekorasi emas atau champagne?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ya. Sage green yang lembut dapat dipasangkan dengan aksen logam bernuansa emas redup (muted gold) atau champagne pada kartu ucapan dan tarikan resleting, selama porsi warnanya dijaga sebagai aksen kecil agar karakter natural palet tetap terasa.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apa perbedaan visual paling mencolok antara beige, cream, dan taupe?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cream mengandung bias kuning hangat yang paling terang mendekati putih gading. Beige sedikit lebih gelap dan berpasir, sedangkan taupe memiliki campuran unsur abu-abu dan cokelat sehingga tampilannya lebih netral, kalem, dan tidak kekuningan.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah palet earth tone hanya cocok untuk acara outdoor atau rustic?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tidak. Dengan memilih pasangan taupe, putih tulang, dan abu kecokelatan yang diterapkan pada bahan berstruktur rapi, palet earth tone juga sangat serasi untuk pernikahan formal di dalam ruangan maupun ballroom hotel.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana cara menjaga warna tetap seragam jika produk dan kemasannya dibuat di tempat berbeda?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Minta potongan fisik (swatch) bahan produk utama terlebih dahulu sebelum mencetak kotak kemasan atau kartu ucapan. Bawa potongan bahan tersebut ke percetakan kemasan sebagai patokan visual untuk mencocokkan warna kertas dan tinta cetak di bawah cahaya normal.'
            }
          }
        ]
      }
    ]
  },
  'emboss-vs-printing-souvenir-wedding': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/#article',
        'headline': 'Perbedaan Emboss dan Printing untuk Souvenir Wedding Custom',
        'description': 'Pahami perbedaan emboss, deboss, dan printing untuk souvenir wedding custom dari sisi tekstur, ketahanan, kecocokan bahan, syarat file artwork, dan faktor biaya.',
        'image': [
          'https://sekata.web.id/images/perbandingan-hasil-deboss-dan-printing-tinta.jpg',
          'https://sekata.web.id/images/matras-kuningan-dan-artwork-vektor-emboss.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/#webpage'
        },
        'datePublished': '2026-11-10T09:00:00+07:00',
        'dateModified': '2026-11-10T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'emboss dan printing souvenir wedding, perbedaan emboss dan deboss, sablon souvenir wedding',
        'about': {
          '@type': 'Thing',
          'name': 'Teknik Personalisasi Souvenir Wedding'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/#webpage',
        'url': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/',
        'name': 'Perbedaan Emboss dan Printing untuk Souvenir Wedding Custom',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Perbedaan Emboss dan Printing untuk Souvenir Wedding Custom',
            'item': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/emboss-vs-printing-souvenir-wedding/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Apakah pelat matras kuningan deboss bisa dibawa pulang setelah pesanan selesai?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Biasanya bisa, tergantung kebijakan masing-masing vendor. Karena matras dibuat khusus sesuai desain inisial Anda dan biayanya telah dibayarkan, Anda dapat memintanya kepada vendor sebagai kenang-kenangan atau untuk pemakaian ulang di kemudian hari.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah hasil cetak deboss bisa luntur jika terkena air?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Blind deboss tidak menggunakan tinta sama sekali, sehingga tidak ada zat warna yang bisa luntur saat basah. Namun pada deboss yang menggunakan foil emas (hot stamping foil), gesekan keras berulang dengan benda tajam dapat mengikis lapisan tipis foil tersebut seiring waktu.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Mengapa sablon kain terkadang terasa kaku dan mudah retak?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Kondisi tersebut biasanya disebabkan oleh pemakaian jenis tinta plastisol atau pasta karet yang terlalu tebal tanpa takaran pengencer dan suhu pengeringan (curing) yang pas. Tinta sablon berbasis air (waterbased) yang meresap halus ke pori kain umumnya lebih lentur dan tidak kaku saat dilipat.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana cara memeriksa kejelasan desain sebelum pelat logam dibuat?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Mintalah vendor mencetak pratinjau file pada ukuran 100 persen dalam format PDF atau kertas film. Periksa apakah ada huruf yang saling menempel atau garis lengkung yang terlalu tipis sebelum memberi persetujuan pembuatan cetakan logam.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah warna foil emas pada deboss tersedia dalam berbagai tingkatan kilau?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ya. Lembaran foil emas umumnya tersedia dalam pilihan emas mengkilap (glossy gold), emas redup bernuansa satin (matte gold), emas kemerahan (rose gold), serta tembaga (copper). Pilihan matte gold sering dipilih pada konsep modern karena kilaunya lebih tenang dan elegan.'
            }
          }
        ]
      }
    ]
  },
  'panduan-memilih-hampers-lebaran': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/#article',
        'headline': 'Hampers Lebaran 2027 Panduan Lengkap Memilih Jenis Anggaran dan Cara Pesan',
        'description': 'Panduan hampers lebaran 2027 meliputi jenis, cara memilih sesuai penerima, anggaran, kemasan, dan jadwal pesan ideal untuk Idulfitri.',
        'image': [
          'https://sekata.web.id/images/hampers-lebaran-custom-sekata.jpg',
          'https://sekata.web.id/images/jenis-isi-hampers-lebaran.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/#webpage'
        },
        'datePublished': '2026-11-11T09:00:00+07:00',
        'dateModified': '2026-11-11T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'hampers lebaran, hampers lebaran 2027, parcel lebaran, hampers custom, hampers idul fitri',
        'about': {
          '@type': 'Thing',
          'name': 'Hampers Lebaran'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/#webpage',
        'url': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/',
        'name': 'Hampers Lebaran 2027 Panduan Lengkap Memilih Jenis Anggaran dan Cara Pesan',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Hampers Lebaran 2027 Panduan Lengkap Memilih Jenis Anggaran dan Cara Pesan',
            'item': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-hampers-lebaran/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Kapan waktu terbaik memesan hampers lebaran 2027?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Waktu paling ideal memesan hampers lebaran 2027 adalah antara H-45 hingga H-20 sebelum Idulfitri, yaitu sekitar akhir Januari hingga pertengahan Februari 2027, agar proses kustomisasi dan pengiriman kargo tidak terganggu lonjakan arus mudik.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apa isi hampers lebaran yang paling umum dan aman dibagikan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Isi paling umum dan aman mencakup aneka kue kering khas hari raya, kurma kualitas premium, sirup buah, serta barang fungsional tahan lama seperti cangkir keramik, gelas kaca bergaris, dan tas jinjing kanvas.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Berapa kisaran anggaran yang wajar untuk satu paket hampers?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Besaran anggaran ditentukan oleh jenis barang dan skala acara. Mulai dari paket ringkas kue kering seharga puluhan ribu hingga gift set keramik eksklusif ratusan ribu rupiah. Kuncinya adalah menetapkan batas per paket sebelum memilih isi.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah hampers lebaran bisa dipersonalisasi dengan monogram atau logo perusahaan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Bisa. Penyedia hampers custom seperti Sekata menyediakan layanan aplikasi logo, inisial monogram foil emas, deboss pada aksen kulit, hingga kartu ucapan cetak khusus sesuai konsep brand atau keluarga Anda.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah hampers lebaran untuk korporat berbeda dengan bingkisan personal?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ya. Hampers korporat lebih mengutamakan citra profesional, keseragaman bentuk kemasan, penyematan logo perusahaan, dan ketepatan faktur pembelian, sedangkan hampers personal lebih menitikberatkan pada preferensi selera pribadi penerima.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah bingkisan hampers lebaran bisa dikirimkan ke luar kota?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Bisa. Layanan Sekata melayani pengiriman hampers ke Malang, Batu, Kepanjen, seluruh Jawa Timur, hingga pengiriman luar pulau dengan perlindungan bubble wrap tebal dan opsi packing kayu.'
            }
          }
        ]
      }
    ]
  },
  'isi-hampers-lebaran': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/isi-hampers-lebaran/#article',
        'headline': 'Isi Hampers Lebaran per Penerima dan Anggaran',
        'description': 'Bingung memilih isi hampers lebaran? Simak ide isi per penerima, tips menjaga mutu makanan, dan cara memastikan status halal produk.',
        'image': [
          'https://sekata.web.id/images/isi-hampers-lebaran-keluarga.jpg',
          'https://sekata.web.id/images/isi-hampers-lebaran-mug-kukis.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/isi-hampers-lebaran/#webpage'
        },
        'datePublished': '2026-11-11T09:00:00+07:00',
        'dateModified': '2026-11-11T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'isi hampers lebaran, kue kering lebaran, hampers sembako, mug lebaran, ide isi hampers',
        'about': {
          '@type': 'Thing',
          'name': 'Isi Hampers Lebaran'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/isi-hampers-lebaran/#webpage',
        'url': 'https://sekata.web.id/blog/isi-hampers-lebaran/',
        'name': 'Isi Hampers Lebaran per Penerima dan Anggaran',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/isi-hampers-lebaran/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Isi Hampers Lebaran per Penerima dan Anggaran',
            'item': 'https://sekata.web.id/blog/isi-hampers-lebaran/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/isi-hampers-lebaran/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Apa isi hampers lebaran yang paling hemat untuk anggaran terbatas?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Kombinasi kue kering klasik ukuran sedang bersama kemasan sirup rasa buah atau biskuit kaleng merupakan opsi paling ekonomis. Dikemas dalam keranjang anyam sederhana atau paper box berhias pita cantik, bingkisan tetap tampil sopan dan layak.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah hampers sembako masih relevan dibagikan saat Lebaran modern?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sangat relevan, terutama jika ditujukan kepada yayasan sosial, masyarakat sekitar lingkungan kerja, atau keluarga besar yang membutuhkan bahan pokok menyambut hidangan hari raya. Kuncinya adalah memilih merk sembako berkualitas prima.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana menyikapi penerima hampers yang memiliki selera berbeda-beda?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pilihlah kurasi isi yang bercita rasa klasik dan berkarakter netral, seperti nastar butter dan cangkir keramik polos. Hindari rasa yang terlalu eksentrik atau produk beraroma tajam bila Anda belum mengenal preferensi pribadi mereka.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah isi produk non-makanan bisa dipersonalisasi nama keluarga?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tentu bisa. Melalui layanan cenderamata custom Sekata, cangkir keramik, bodi totebag, hingga sampul buku catatan dapat dihiasi inisial monogram atau logo keluarga Anda.'
            }
          }
        ]
      }
    ]
  },
  'hampers-lebaran-perusahaan': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/#article',
        'headline': 'Hampers Lebaran Perusahaan Custom Logo untuk Karyawan dan Klien',
        'description': 'Panduan hampers lebaran perusahaan untuk karyawan dan klien meliputi kurasi isi, desain logo, kartu ucapan, dan jadwal produksi tepat waktu.',
        'image': [
          'https://sekata.web.id/images/hampers-lebaran-perusahaan-logo.jpg',
          'https://sekata.web.id/images/hampers-lebaran-karyawan-klien.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/#webpage'
        },
        'datePublished': '2026-11-11T09:00:00+07:00',
        'dateModified': '2026-11-11T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'hampers lebaran perusahaan, hampers lebaran custom logo, hampers kantor, hampers klien',
        'about': {
          '@type': 'Thing',
          'name': 'Hampers Lebaran Perusahaan'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/#webpage',
        'url': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/',
        'name': 'Hampers Lebaran Perusahaan Custom Logo untuk Karyawan dan Klien',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Hampers Lebaran Perusahaan Custom Logo untuk Karyawan dan Klien',
            'item': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-perusahaan/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Berapa jumlah minimum pemesanan untuk hampers lebaran berlogo perusahaan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Jumlah minimum pesanan (MOQ) menyesuaikan jenis paket yang dipilih. Mulai dari puluhan pcs untuk paket standar hingga kuantitas fleksibel untuk paket VIP. Hubungi customer support Sekata di WhatsApp untuk mendapatkan penawaran yang disesuaikan dengan kuota kantor Anda.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Berapa lama proses produksi hampers perusahaan dalam skala besar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Waktu produksi berkisar antara 2 hingga 4 minggu setelah persetujuan mockup desain dan pembayaran uang muka, tergantung pada tingkat kerumitan kustomisasi kemasan hardbox dan antrean bengkel produksi.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bisakah perusahaan memesan pengiriman terpisah langsung ke alamat rumah masing-masing klien?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Bisa. Sekata melayani pengiriman multi-alamat langsung ke rumah klien atau mitra bisnis di berbagai kota, asalkan data nama, alamat lengkap, dan nomor kontak penerima telah disiapkan dalam lembar kerja spreadsheet yang rapi.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Format file logo apa yang harus disiapkan agar hasil cetak tajam?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Disarankan mengirimkan file master logo berbasis vektor berformat PDF, Adobe Illustrator (.ai), atau CorelDraw (.cdr). File raster seperti PNG transparan beresolusi minimal 300 DPI juga dapat diproses untuk teknik sablon atau print warna.'
            }
          }
        ]
      }
    ]
  },
  'hampers-lebaran-malang': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#article',
        'headline': 'Pesan Hampers Lebaran Malang Jadwal Alur dan Area Pengiriman 2027',
        'description': 'Cara pesan hampers lebaran Malang dengan jadwal ideal, alur dari konsultasi WhatsApp hingga kirim, serta jangkauan area Malang, Batu, dan Kepanjen.',
        'image': [
          'https://sekata.web.id/images/pesan-hampers-lebaran-malang.jpg',
          'https://sekata.web.id/images/pengiriman-hampers-lebaran-malang-batu-kepanjen.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#webpage'
        },
        'datePublished': '2026-11-11T09:00:00+07:00',
        'dateModified': '2026-11-11T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'pesan hampers lebaran malang, hampers lebaran malang, parcel lebaran malang, hampers batu kepanjen',
        'about': {
          '@type': 'LocalBusiness',
          '@id': 'https://sekata.web.id/#organization',
          'name': 'Sekata Malang',
          'url': 'https://sekata.web.id/',
          'telephone': '+6282131087971',
          'priceRange': '1.000.000',
          'image': 'https://sekata.web.id/images/pesan-hampers-lebaran-malang.jpg',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Jalan Bandara Palmerah',
            'addressLocality': 'Malang',
            'addressRegion': 'Jawa Timur',
            'postalCode': '65138',
            'addressCountry': 'ID'
          }
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#webpage',
        'url': 'https://sekata.web.id/blog/hampers-lebaran-malang/',
        'name': 'Pesan Hampers Lebaran Malang Jadwal Alur dan Area Pengiriman 2027',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Beranda',
            'item': 'https://sekata.web.id/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://sekata.web.id/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Pesan Hampers Lebaran Malang Jadwal Alur dan Area Pengiriman 2027',
            'item': 'https://sekata.web.id/blog/hampers-lebaran-malang/'
          }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#howto',
        'name': 'Alur Pemesanan Hampers Lebaran di Malang',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Pilih Inspirasi Katalog',
            'text': 'Buka katalog hampers lebaran Sekata dan simpan tangkapan layar produk yang diminati.'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Konsultasi WhatsApp',
            'text': 'Diskusikan konsep, kuantitas paket, pagu anggaran, dan logo perusahaan bersama tim Sekata.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Persetujuan Mockup dan DP 50%',
            'text': 'Periksa simulasi visual 3D desain kemasan lalu konfirmasikan pembayaran uang muka 50%.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Pengendalian Mutu dan Pengiriman',
            'text': 'Paket diproduksi, dicek mutunya, dipacking aman ganda, dan dikirimkan ke alamat tujuan.'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/hampers-lebaran-malang/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Kapan batas akhir memesan hampers lebaran custom di Sekata Malang?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Batas akhir pemesanan custom idealnya adalah H-20 sebelum hari raya Idulfitri (sekitar 17-18 Februari 2027). Setelah tanggal tersebut, antrean produksi biasanya telah ditutup dan hanya menyisakan paket bingkisan siap kirim dalam jumlah terbatas.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah saya bisa mengambil langsung pesanan hampers di workshop Sekata Malang?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Bisa. Bagi Anda yang berdomisili di Malang, Anda dipersilakan mengambil langsung pesanan di lokasi workshop kami di Jalan Bandara Palmerah, Cemorokandang, Malang, atau menggunakan jasa kurir roda empat lokal yang kami sediakan.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bagaimana sistem pembayaran pemesanan hampers di Sekata?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sistem pembayaran menerapkan skema DP 50% di awal saat persetujuan mockup desain, dan pelunasan sisa 50% dilakukan saat seluruh paket telah selesai dikerjakan, dicek kualitasnya, dan siap untuk dikirimkan.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Apakah ada jaminan garansi jika toples atau keramik pecah dalam perjalanan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sekata menerapkan protokol pengemasan ganda dengan bubble wrap tebal dan busa penyekat. Apabila terjadi kerusakan akibat penanganan ekspedisi, kami menyediakan layanan garansi penggantian barang sesuai syarat dokumentasi video unboxing saat paket tiba.'
            }
          }
        ]
      }
    ]
  }
};

// Aliases untuk slug lama agar jika ada sistem yang mengakses via key lama tetap valid
articleSchemas['souvenir-wedding'] = articleSchemas['panduan-memilih-souvenir-pernikahan'];
articleSchemas['panduan-memilih-souvenir-wedding'] = articleSchemas['panduan-memilih-souvenir-pernikahan'];
articleSchemas['souvenir-wedding-aesthetic'] = articleSchemas['desain-souvenir-wedding-modern'];
articleSchemas['souvenir-wedding-earth-tone'] = articleSchemas['warna-souvenir-wedding-earth-tone'];
articleSchemas['souvenir-wedding-emboss-vs-printing'] = articleSchemas['emboss-vs-printing-souvenir-wedding'];
articleSchemas['hampers-lebaran'] = articleSchemas['panduan-memilih-hampers-lebaran'];
