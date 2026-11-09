# Sekata — Astro

Website statis Astro untuk sekata.web.id, dengan Poppins lokal, katalog, pencarian, keranjang localStorage, dan ringkasan WhatsApp.

## Menjalankan

```sh
npm install
npm run dev
npm run build
```

Hasil build ada di `dist/` dan dapat dipasang ke hosting statis. Hubungkan domain sekata.web.id di layanan hosting/domain Anda.

## Mengganti konten

- `src/data/site.ts`: koleksi, kategori, artikel, WhatsApp, URL sosial, hero foto/video, logo klien, testimoni asli.
- `src/styles/global.css`: warna dan tampilan responsif.
- `src/pages/index.astro`: beranda.
- `src/pages/[...page].astro`: halaman kategori dan informasi.
- `src/pages/temukan-solusi/[slug].astro`: artikel.
- `public/images/`: aset lokal.

Isi `config.heroVideo` dengan path video MP4 untuk memakai latar video. HeroImage digunakan sebagai poster/fallback.
Isi `config.clients` dengan objek `{name,logo}` untuk mengaktifkan logo marquee otomatis.
Isi `config.testimonials` dengan objek `{name,quote,event}` untuk menampilkan ulasan asli.
Isi `config.social` dengan tautan akun Instagram/TikTok dan alamat email asli. Tidak dibuat tautan akun rekaan.

## Data yang perlu dilengkapi

Produk masih merupakan konsep koleksi dengan foto ilustrasi Unsplash, bukan bukti hasil produksi atau spesifikasi produk aktual. Ganti dengan produk dan foto asli sebelum pemasaran. Tambahkan testimoni berizin dan logo pelanggan yang boleh ditampilkan. Klaim 250+ brand & institusi berasal dari brief pemilik dan perlu bukti pendukung sebelum peluncuran publik.

Harga tidak ditampilkan. Jumlah minimum, jadwal, material, biaya, dan kebijakan transaksi dikonfirmasi admin Ayu. Kebijakan privasi dan syarat merupakan draf operasional awal yang perlu disesuaikan dengan praktik aktual.

## SEO

Canonical domain sekata.web.id, sitemap.xml, robots.txt, Open Graph, Store, FAQPage, dan BlogPosting JSON-LD. Tidak ada harga, rating, atau ulasan fiktif. Artikel menampilkan penulis M. Maulana Ishaq dan halaman profilnya. Optimasi teknis tidak menjamin ranking atau kutipan mesin generatif.

Foto ilustrasi: images.unsplash.com, IDs photo-1607344645866-009c320b63e0, photo-1490312278390-ab64016e0aa9, photo-1513885535751-8b9238bd345a, photo-1553062407-98eeb64c6a62. Logo dari pemilik Sekata.
