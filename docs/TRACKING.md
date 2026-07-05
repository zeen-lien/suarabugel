# 📋 Suara Bugel – Project Tracking

> Platform Aspirasi Digital Desa Bugel, Kec. Kedung, Kab. Jepara
> Dibuat untuk keperluan KKN · Stack: HTML + CSS + Vanilla JS · Deploy: Vercel (free)
> Repo: https://github.com/zeen-lien/suarabugel

---

## 🗂️ Struktur Project

```
bugel/
├── index.html                  ← Single page utama
├── vercel.json                 ← Config deploy Vercel
├── assets/
│   ├── css/
│   │   └── style.css           ← Semua styling + responsive
│   ├── js/
│   │   └── script.js           ← Interaktivitas, animasi, AOS
│   ├── images/
│   │   ├── logobugel.png       ← Logo utama Suara Bugel (circular, white bg)
│   │   ├── filosofilogo.png    ← Logo lama (backup)
│   │   └── desabugel.jpg       ← Foto hero & visi background
│   └── fonts/                  ← (kosong, pakai Google Fonts CDN)
└── docs/
    ├── TRACKING.md             ← File ini
    └── data.xlsx               ← Data referensi desa
```

---

## ✅ Sudah Selesai & Live

### Infrastruktur
- [x] Repo GitHub: `zeen-lien/suarabugel`
- [x] Deploy pipeline via Vercel (auto-deploy setiap push)
- [x] `vercel.json` config (rewrites + headers)
- [x] Struktur folder profesional (`assets/css`, `assets/js`, `assets/images`, `docs/`)

### Navbar & Navigation
- [x] Navbar fixed + transparent → navy blur saat scroll
- [x] Logo circular dengan white background + navy border
- [x] Nama "Suara Bugel" + subtitle "Desa Bugel · Jepara"
- [x] Desktop: nav links dengan underline animasi orange
- [x] Mobile: sidebar slide dari kanan (width 300px)
- [x] Sidebar header "NAVIGASI" + accent border orange
- [x] Backdrop blur + klik backdrop untuk tutup sidebar
- [x] **Bug fix**: hamburger z-index (tidak tertutup section lain saat scroll)
- [x] **Bug fix**: body scroll lock saat sidebar buka (tidak loncat posisi)
- [x] Active nav link highlight saat scroll per section
- [x] Back to top button (muncul setelah scroll 400px)
- [x] Smooth scroll ke semua anchor

### Hero Section
- [x] Background foto desa asli (`desabugel.jpg`)
- [x] Overlay cinematic: kiri gelap (area teks) → kanan terang (foto keliatan)
- [x] Ken Burns animation (slow zoom)
- [x] Parallax scroll pada foto background
- [x] Floating particles animasi (orange & putih)
- [x] Layout left-aligned, konten di kiri layar
- [x] Eyebrow label pill (lokasi desa) dengan dot pulse animasi
- [x] Judul "Suara Bugel" font Playfair Display — satu baris, besar
- [x] Divider line orange gradient setelah judul
- [x] Slogan dengan border-left orange
- [x] Deskripsi singkat platform
- [x] Tombol: "Kirim Aspirasi" (orange) + "Tentang Desa" (ghost)
- [x] Mini stats frosted glass card (4+ Sektor / 100% Gratis / 24/7)
- [x] Bottom fade transisi ke stats strip
- [x] Responsive mobile: konten bottom-aligned, foto keliatan di atas

### Stats Strip
- [x] 4 item dengan ikon SVG (Desa Bugel, Komunitas, Digital, Potensi)
- [x] Divider antar item, responsive collapse di mobile

### Tentang Desa
- [x] Gambaran umum teks
- [x] Info grid: Kecamatan, Kabupaten, Provinsi, Iklim
- [x] Batas wilayah 4 arah dengan ikon SVG panah
- [x] Hover effect pada kartu batas wilayah

### Visi & Sejarah
- [x] Visi Desa dengan parallax foto background
- [x] Overlay navy semi-transparan
- [x] Font Playfair Display italic untuk kutipan visi
- [x] Sejarah nama Bugel — kisah Syekh Maulana Mangun Sejati
- [x] Kartu sejarah dengan border-left orange

### Potensi Desa
- [x] 4 kartu: Pertanian, Perikanan, UMKM, Budaya & Sosial
- [x] Ikon SVG per kartu
- [x] Hover: ikon background orange, kartu naik + shadow
- [x] List poin per kategori

### Perangkat Desa
- [x] Grid 6 slot (Kepala Desa + 5 staf)
- [x] Kartu Kepala Desa highlight navy dengan aksen orange
- [x] Semua slot masih **dummy** — menunggu data asli dari lapangan

### Aspirasi
- [x] 2 jalur: WhatsApp (green) + Google Form (orange)
- [x] Tombol WA dengan pre-filled text template
- [x] Toast notification jika Google Form belum ada link
- [x] QR Code section — ilustratif SVG placeholder
- [x] Step-by-step scan QR

### FAQ
- [x] 5 Q&A relevan
- [x] Accordion smooth dengan ikon plus/close SVG

### Footer
- [x] Logo circular + tagline + visi
- [x] Navigasi kolom
- [x] Kontak: lokasi, WA, email, jam operasional (semua ikon SVG)
- [x] Copyright

### Animasi & UX
- [x] AOS custom lightweight (IntersectionObserver, zero library)
- [x] Semua ikon inline SVG — tidak ada emoji, tidak ada icon font
- [x] Font: Poppins (body) + Playfair Display (judul & visi)
- [x] Responsive: desktop 1200px / tablet 1024px / mobile 768px / kecil 480px / mini 360px

---

## 🔴 Belum Selesai / Perlu Action

### 🔑 Data Wajib (butuh observasi lapangan)

| Item | Status | Cara Update |
|------|--------|-------------|
| Nama Kepala Desa | ❌ Dummy | Cari `[ Nama Kepala Desa ]` di `index.html` |
| Nama Sekretaris Desa | ❌ Dummy | Cari `[ Nama Sekdes ]` |
| Nama Kaur Keuangan | ❌ Dummy | Cari `[ Nama Kaur ]` |
| Nama Kaur Umum | ❌ Dummy | Cari `[ Nama Kaur ]` |
| Nama Kasi Pelayanan | ❌ Dummy | Cari `[ Nama Kasi ]` |
| Nama Kasi Kesejahteraan | ❌ Dummy | Cari `[ Nama Kasi ]` |
| Nomor WA Desa | ❌ Placeholder | Cari `628XXXXXXXXXX` (2 tempat) |
| Email Desa | ⚠️ Belum konfirmasi | Cari `desa.bugel@jepara.go.id` |

### 🔗 Integrasi Eksternal

| Item | Status | Langkah |
|------|--------|---------|
| Google Form aspirasi | ❌ Belum dibuat | Buat di Google Forms, paste link ke `id="formBtn"` |
| QR Code real | ❌ Masih SVG ilustratif | Generate di qrcode-monkey.com setelah URL Vercel fix |
| URL Vercel final | ⚠️ Perlu konfirmasi | Update `qr-sublabel` di hero section |

### 🟡 Maintenance Aktif

| Item | Status |
|------|--------|
| Hero layout mobile | ⚠️ Masih perlu fine-tuning visual di berbagai HP |
| Foto background hero | ⚠️ Foto saat ini bukan foto Desa Bugel asli — perlu diganti foto asli lapangan |
| Logo pecah/blur | ⚠️ File PNG resolusi perlu dicek — idealnya gunakan SVG atau PNG min 512px |

### 🔵 Fitur Opsional (future / jika ada waktu)

| Fitur | Prioritas | Keterangan |
|-------|-----------|------------|
| Favicon | Tinggi | Buat dari logo, format `.ico` + `.png` 32px |
| Foto perangkat desa | Sedang | Tambah foto asli per slot di section perangkat |
| Galeri foto desa | Rendah | Butuh koleksi foto dari lapangan |
| Section program KKN | Sedang | Dokumentasi kegiatan KKN selama di desa |
| Google Maps embed | Rendah | Tampilkan lokasi desa di peta |

---

## 🔧 Panduan Update Konten

### Nomor WhatsApp
```
Cari: 628XXXXXXXXXX
Ganti: 6281234567890 (format internasional, tanpa + atau spasi)
Ada di: section aspirasi + footer kontak
```

### Link Google Form
```html
<!-- Cari tombol dengan id="formBtn" -->
<a href="#" id="formBtn"> → ganti href="#" dengan URL Google Form
```

### Nama Perangkat Desa
```
Cari: [ Nama Kepala Desa ], [ Nama Sekdes ], [ Nama Kaur ], [ Nama Kasi ]
Ganti dengan nama asli masing-masing
```

### Ganti QR Code (setelah URL live)
```html
<!-- Simpan QR sebagai assets/images/qr.png lalu ganti: -->
<div class="qr-placeholder">
  <img src="assets/images/qr.png" alt="QR Suara Bugel"
       style="width:100%;height:100%;object-fit:contain;" />
</div>
```

### Tambah Favicon
```html
<!-- Tambahkan di dalam <head> index.html -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.png">
<link rel="apple-touch-icon" href="assets/images/favicon.png">
```

---

## 🚀 Status Deploy

| Platform | Status | URL |
|----------|--------|-----|
| GitHub | ✅ Live | https://github.com/zeen-lien/suarabugel |
| Vercel | ⚠️ Proses deploy | Pending konfirmasi URL |

### Auto-deploy
Setiap `git push` ke branch `main` → Vercel otomatis rebuild & deploy.

---

## 🎨 Design System

| Token | Nilai | Digunakan untuk |
|-------|-------|-----------------|
| `--navy` | `#0f172a` | Background dark, navbar |
| `--navy-mid` | `#1e3a5f` | Gradient, card kepala desa |
| `--orange` | `#f97316` | Aksen, CTA, highlight |
| `--orange-dark` | `#ea6c0a` | Hover state button |
| `--white` | `#ffffff` | Background card, teks |
| `--gray-50` | `#f8fafc` | Background section alternatif |
| Font body | Poppins (300–800) | Semua teks umum |
| Font display | Playfair Display (700–800) | Hero title, visi quote |

---

## 📝 Commit History

| Commit | Keterangan |
|--------|------------|
| `22831f1` | init: project pertama kali di-push |
| `5ae2e45` | fix: logo navbar & footer style |
| `ce83c02` | fix: vercel.json invalid header pattern |
| `728093f` | fix: mobile sidebar scroll lock & hamburger z-index |

---

*Last updated: Juli 2025 · KKN Desa Bugel, Kec. Kedung, Kab. Jepara*
