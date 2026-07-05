# 📋 Suara Bugel – Project Tracking

> Platform Aspirasi Digital Desa Bugel, Kec. Kedung, Kab. Jepara  
> Dibuat untuk keperluan KKN · Stack: HTML + CSS + Vanilla JS · Deploy: Vercel (free)

---

## 🗂️ Struktur Project

```
bugel/
├── index.html                  ← Single page utama
├── vercel.json                 ← Config deploy Vercel
├── assets/
│   ├── css/
│   │   └── style.css           ← Semua styling
│   ├── js/
│   │   └── script.js           ← Interaktivitas & animasi
│   ├── images/
│   │   ├── logobugel.png       ← Logo utama Suara Bugel
│   │   ├── filosofilogo.png    ← Logo filosofi (backup)
│   │   └── desabugel.jpg       ← Foto hero & visi background
│   └── fonts/                  ← (kosong, font via Google Fonts)
└── docs/
    └── TRACKING.md             ← File ini
```

---

## ✅ Fitur yang Sudah Ada

### Layout & UI
- [x] Navbar sticky + scroll effect (transparent → navy blur)
- [x] Hamburger menu full-screen overlay (mobile)
- [x] Active nav link highlight saat scroll
- [x] Back to top button
- [x] Smooth scroll ke semua anchor
- [x] Responsive: desktop / tablet / HP / HP kecil (360px+)

### Hero Section
- [x] Background foto desa nyata (`desabugel.jpg`)
- [x] Parallax scroll pada hero bg image
- [x] Animasi ken burns (zoom slow) pada bg foto
- [x] Floating particles animasi (orange & white)
- [x] Light sweep overlay animasi
- [x] Logo besar dengan glow ring animasi
- [x] Logo floating animation (naik-turun)
- [x] Judul pakai font **Playfair Display** (serif elegan)
- [x] Slogan dengan garis dekorasi kiri-kanan
- [x] Scroll indicator animasi

### Konten Desa
- [x] Stats strip (ikon SVG, bukan emoji)
- [x] Tentang Desa – gambaran umum
- [x] Batas wilayah 4 arah dengan ikon SVG
- [x] Info grid (kecamatan, kabupaten, provinsi, iklim)
- [x] Visi Desa – parallax dengan foto desa bg
- [x] Sejarah nama Bugel (Syekh Maulana Mangun Sejati)
- [x] Potensi Desa – 4 kartu (Pertanian, Perikanan, UMKM, Budaya)
- [x] Perangkat Desa – 6 slot (1 kepala + 5 staf, semua dummy)

### Aspirasi
- [x] Kartu WhatsApp → link `wa.me` dengan pre-filled text
- [x] Kartu Google Form → placeholder (link belum ada)
- [x] Toast notification kalau Google Form belum ada link-nya
- [x] QR Code section (ilustratif SVG, belum link real)
- [x] Langkah scan QR step-by-step

### FAQ
- [x] 5 pertanyaan + jawaban
- [x] Accordion dengan animasi smooth

### Footer
- [x] Logo + tagline + visi
- [x] Navigasi
- [x] Kontak desa (semua ikon SVG)
- [x] Copyright

### Animasi & UX
- [x] AOS (Animate On Scroll) – custom lightweight, zero library
- [x] Semua ikon pakai **inline SVG** (bukan emoji, bukan font icon)
- [x] Hover state konsisten di semua kartu
- [x] Font: Poppins (body) + Playfair Display (judul)

---

## ⏳ Yang Belum / Perlu Diupdate

### Data Konten (butuh observasi lapangan)
- [ ] **Nama Kepala Desa** – ganti `[ Nama Kepala Desa ]` di `index.html`
- [ ] **Nama-nama perangkat desa** – 5 slot masih dummy
- [ ] **Nomor WA desa** – ganti `628XXXXXXXXXX` (ada 2 tempat: aspirasi + footer)
- [ ] **Email desa** – konfirmasi `desa.bugel@jepara.go.id` valid/tidak
- [ ] **Foto perangkat desa** – opsional, bisa tambah foto asli per slot

### Integrasi Eksternal
- [ ] **Google Form** – buat form aspirasi, paste link ke `href="#"` di tombol "Isi Formulir Aspirasi"
- [ ] **QR Code real** – generate setelah domain/URL final diketahui
  - Bisa pakai: [qr-code-generator.com](https://www.qr-code-generator.com) atau [qrcode-monkey.com](https://qrcode-monkey.com)
  - Ganti file SVG placeholder dengan gambar QR asli di `assets/images/qr.png`
- [ ] **URL subdomain** – setelah deploy ke Vercel, update `qr-sublabel` di HTML

### Fitur Opsional (future)
- [ ] Foto galeri desa (butuh koleksi foto dari lapangan)
- [ ] Section program KKN (dokumentasi kegiatan)
- [ ] Google Maps embed lokasi desa
- [ ] Favicon dari logo Suara Bugel

### Deploy
- [ ] Push ke GitHub repo
- [ ] Connect repo ke Vercel
- [ ] Set custom domain (opsional, jika mau beli domain)

---

## 🔧 Cara Update Konten

### Ganti nomor WA
Cari `628XXXXXXXXXX` di `index.html`, ganti dengan nomor aktif format internasional (tanpa +, tanpa spasi).

### Tambah link Google Form
Cari `id="formBtn"` di `index.html`, ganti `href="#"` dengan link Google Form.

### Ganti nama perangkat desa
Cari `[ Nama Kepala Desa ]`, `[ Nama Sekdes ]`, dst di `index.html`.

### Ganti QR Code
Simpan gambar QR sebagai `assets/images/qr.png`, lalu di `index.html` ganti:
```html
<div class="qr-placeholder">
  <img src="assets/images/qr.png" alt="QR Suara Bugel" style="width:100%;height:100%;object-fit:contain;" />
</div>
```

---

## 🚀 Cara Deploy ke Vercel

1. Buat akun di [vercel.com](https://vercel.com) (gratis)
2. Push folder `bugel/` ke GitHub repo baru
3. Di Vercel: **New Project** → import dari GitHub → deploy
4. URL otomatis: `nama-repo.vercel.app`

---

## 🎨 Design System

| Token       | Nilai       | Digunakan untuk           |
|-------------|-------------|---------------------------|
| `--navy`    | `#0f172a`   | Background utama, teks    |
| `--orange`  | `#f97316`   | Aksen, CTA, highlight     |
| `--white`   | `#ffffff`   | Background card, teks     |
| `--gray-50` | `#f8fafc`   | Background section alt    |
| Font body   | Poppins     | Semua teks umum           |
| Font judul  | Playfair Display | Hero title, visi      |

---

*Last updated: Juli 2025 · KKN Desa Bugel*
