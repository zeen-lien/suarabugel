# 📊 Laporan Progres Web Suara Bugel
**Untuk:** Tim KKN Desa Bugel
**Tanggal:** Juli 2025
**Dibuat oleh:** Divisi IT / Web

---

## 🟢 Status Keseluruhan: 70% Selesai

Website **Suara Bugel** sudah berhasil dibangun dan di-deploy ke GitHub.
Saat ini dalam tahap finalisasi konten dan integrasi eksternal sebelum siap digunakan warga.

---

## ✅ Yang Sudah Beres

### Website & Tampilan
Website sudah **100% jalan secara teknis**. Semua halaman, animasi, dan fitur UI sudah bekerja dengan baik di desktop maupun HP.

Yang sudah ada di website:
- Halaman profil lengkap Desa Bugel (gambaran umum, batas wilayah, sejarah, visi)
- Potensi desa: pertanian, perikanan, UMKM, budaya
- Section aspirasi dengan 2 jalur kirim (WhatsApp + Google Form)
- QR Code placeholder untuk akses cepat
- FAQ untuk warga
- Footer dengan info kontak desa
- Tampilan bagus di semua ukuran HP dan komputer

### Teknis
- Kode sudah di-upload ke GitHub: `github.com/zeen-lien/suarabugel`
- Siap di-deploy ke Vercel (gratis, tanpa biaya server)
- Setiap update kode langsung otomatis live di website

---

## 🔴 Yang Masih Perlu Dilengkapi Tim

### 1. Data Perangkat Desa *(Prioritas Tinggi)*
Saat ini nama perangkat desa masih menggunakan **data dummy/placeholder**.
Perlu dikonfirmasi dan diisi dengan data asli hasil observasi lapangan:

- [ ] Nama Kepala Desa
- [ ] Nama Sekretaris Desa
- [ ] Nama Kaur Keuangan
- [ ] Nama Kaur Umum
- [ ] Nama Kasi Pelayanan
- [ ] Nama Kasi Kesejahteraan

> **Cara update:** Sampaikan nama-nama di atas ke tim IT, nanti langsung diupdate di website dan push ke live.

---

### 2. Nomor WhatsApp Desa *(Prioritas Tinggi)*
Tombol "Chat via WhatsApp" di halaman aspirasi belum terhubung ke nomor resmi.
Saat ini masih menggunakan nomor placeholder.

- [ ] Konfirmasi nomor WA aktif kantor desa / perangkat yang bertugas

> **Cara update:** Kirim nomor WA ke tim IT dalam format: `08xxxxxxxxxx`

---

### 3. Google Form Aspirasi *(Prioritas Tinggi)*
Tombol "Isi Formulir Aspirasi" belum terhubung ke form manapun.
Perlu dibuat Google Form khusus aspirasi warga.

**Isi form yang disarankan:**
- Nama (opsional/boleh anonim)
- Nomor HP (opsional)
- Kategori aspirasi (dropdown: Infrastruktur / Kebersihan / Keamanan / Pelayanan / Sosial)
- Judul aspirasi
- Isi aspirasi (wajib)
- Lokasi (opsional)

**Cara buat Google Form:**
1. Buka `forms.google.com`
2. Buat form dengan kolom di atas
3. Di Settings → aktifkan "Collect email addresses" → OFF (biar bisa anonim)
4. Klik Share → copy link
5. Kirim link ke tim IT untuk dipasang di website

> **Bonus:** Google Form otomatis kirim notifikasi email ke admin setiap ada respons baru — tanpa biaya tambahan.

---

### 4. Foto Latar Website *(Prioritas Sedang)*
Foto background hero saat ini **bukan foto Desa Bugel yang sebenarnya**.
Sangat disarankan diganti dengan foto asli desa agar lebih autentik dan berkesan.

- [ ] Ambil foto panorama/landscape desa saat observasi lapangan
- [ ] Pastikan foto landscape (horizontal), resolusi minimal 1920x1080px
- [ ] Format: JPG, ukuran file idealnya di bawah 1MB

> Kirim foto ke tim IT, nanti langsung diganti di website.

---

### 5. QR Code *(Prioritas Sedang)*
QR Code di website masih berupa ilustrasi. Setelah website live di Vercel dan dapat URL resmi, QR Code asli perlu dibuat dan dipasang.

- [ ] Konfirmasi URL website yang akan dipakai
- [ ] Generate QR Code di: `qrcode-monkey.com`
- [ ] Print dan tempel di: balai desa, papan pengumuman, pos kamling

---

### 6. Email Desa *(Prioritas Rendah)*
- [ ] Konfirmasi apakah `desa.bugel@jepara.go.id` aktif atau perlu diganti

---

## 🟡 Dalam Maintenance Aktif

| Item | Keterangan |
|------|------------|
| Tampilan mobile hero | Terus disempurnakan agar nyaman di semua ukuran HP |
| Logo | Sudah diganti logo baru, sedang dioptimasi kualitas tampilan |
| Sidebar mobile | Bug scroll sudah diperbaiki |

---

## 🔵 Fitur Tambahan (Jika Ada Waktu)

Ini bukan prioritas utama, tapi bisa ditambahkan untuk nilai lebih:

| Fitur | Manfaat |
|-------|---------|
| Foto perangkat desa | Website terasa lebih personal dan terpercaya |
| Section dokumentasi KKN | Rekam jejak kegiatan tim KKN selama di desa |
| Google Maps lokasi desa | Warga dan pendatang mudah menemukan desa |
| Galeri foto desa | Menampilkan keindahan dan potensi visual desa |

---

## 📱 Cara Akses Website

**Lokal (testing):**
Buka browser → `http://localhost/bugel`

**Online (setelah deploy):**
URL akan berbentuk: `suarabugel.vercel.app` atau sesuai nama project di Vercel

**GitHub repo:**
`https://github.com/zeen-lien/suarabugel`

---

## 📞 Kontak Tim IT

Untuk update data, pertanyaan teknis, atau permintaan perubahan website, hubungi divisi IT tim KKN.

---

*Dokumen ini akan diperbarui seiring perkembangan project.*
*Suara Bugel · KKN Desa Bugel · Kec. Kedung · Kab. Jepara · 2025*
