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
  'panduan-memilih-souvenir-wedding': {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/#article',
        'headline': 'Panduan Lengkap Memilih Souvenir Wedding yang Tepat untuk Pernikahan',
        'description': 'Pelajari panduan memilih souvenir wedding berdasarkan fungsi, tema pernikahan, jumlah tamu, anggaran, material, dan alur pemesanan custom yang terukur.',
        'image': [
          'https://sekata.web.id/images/koleksi-souvenir-wedding-fungsional.jpg',
          'https://sekata.web.id/images/alur-pemesanan-souvenir-pernikahan-custom.jpg'
        ],
        'inLanguage': 'id-ID',
        'mainEntityOfPage': {
          '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/#webpage'
        },
        'datePublished': '2026-11-10T09:00:00+07:00',
        'dateModified': '2026-11-10T09:00:00+07:00',
        'author': author,
        'publisher': publisher,
        'keywords': 'souvenir wedding, memilih souvenir wedding, souvenir pernikahan custom',
        'about': {
          '@type': 'Thing',
          'name': 'Souvenir Wedding'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/#webpage',
        'url': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/',
        'name': 'Panduan Lengkap Memilih Souvenir Wedding yang Tepat untuk Pernikahan',
        'inLanguage': 'id-ID'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/#breadcrumb',
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
            'name': 'Panduan Lengkap Memilih Souvenir Wedding yang Tepat untuk Pernikahan',
            'item': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sekata.web.id/blog/panduan-memilih-souvenir-wedding/#faq',
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
  }
};

// Aliases untuk slug lama agar jika ada sistem yang mengakses via key lama tetap valid
articleSchemas['souvenir-wedding'] = articleSchemas['panduan-memilih-souvenir-wedding'];
articleSchemas['souvenir-wedding-aesthetic'] = articleSchemas['desain-souvenir-wedding-modern'];
articleSchemas['souvenir-wedding-earth-tone'] = articleSchemas['warna-souvenir-wedding-earth-tone'];
articleSchemas['souvenir-wedding-emboss-vs-printing'] = articleSchemas['emboss-vs-printing-souvenir-wedding'];
