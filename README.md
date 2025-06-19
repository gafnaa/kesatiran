#  Kesatiran

web sirkel

## Deskripsi Proyek

**Halaman yang Tersedia:**
*   **Homepage (`/`)**: Halaman utama yang menampilkan navigasi, bagian hero, kartu anggota, kartu proyek, dan footer.
*   **Halaman Anggota (`/member`)**: Menampilkan daftar anggota.
*   **Halaman Proyek (`/projects`)**: Menampilkan daftar proyek.
*   **Halaman Tentang Kami (`/about`)**: Memberikan informasi tentang "Kesatiran".

## Struktur Direktori

Berikut adalah struktur direktori utama proyek ini untuk memudahkan kolaborasi:

```
.
├── public/
│   └── images/             # Direktori untuk gambar anggota dan proyek
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Ikon favorit situs
│   │   ├── globals.css     # Gaya CSS global (Tailwind CSS)
│   │   ├── layout.tsx      # Layout utama aplikasi (termasuk font dan metadata)
│   │   ├── page.tsx        # Halaman utama (Homepage)
│   │   ├── about/
│   │   │   └── page.tsx    # Halaman Tentang Kami
│   │   ├── member/
│   │   │   └── page.tsx    # Halaman Anggota
│   │   └── projects/
│   │       └── page.tsx    # Halaman Proyek
│   └── components/         # Direktori untuk komponen React yang dapat digunakan kembali
│       ├── Footer.tsx      # Komponen Footer
│       ├── HeroSection.tsx # Komponen Hero Section untuk Homepage
│       ├── MemberCard.tsx  # Komponen kartu untuk menampilkan anggota
│       ├── Navbar.tsx      # Komponen Navbar (dengan menu hamburger responsif)
│       ├── OurMembers.tsx  # Komponen bagian "Our Members" untuk Homepage
│       ├── OurWorks.tsx    # Komponen bagian "Our Works" untuk Homepage
│       └── ProjectCard.tsx # Komponen kartu untuk menampilkan proyek
├── .gitignore              # File yang diabaikan oleh Git
├── eslint.config.mjs       # Konfigurasi ESLint
├── next.config.ts          # Konfigurasi Next.js
├── package-lock.json       # Kunci dependensi Node.js
├── package.json            # Metadata proyek dan dependensi
├── postcss.config.mjs      # Konfigurasi PostCSS
├── README.md               # File ini
└── tsconfig.json           # Konfigurasi TypeScript
```

## Memulai Proyek

Untuk menjalankan proyek ini di lingkungan pengembangan Anda:

1.  **Instal Dependensi:**
    Pastikan Anda memiliki Node.js dan npm (atau yarn/pnpm/bun) terinstal. Kemudian, instal semua dependensi proyek:
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

2.  **Jalankan Server Pengembangan:**
    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    ```

    Aplikasi akan berjalan di `http://localhost:3000` (atau port lain jika 3000 sudah digunakan).

## Catatan Penting untuk Kolaborator

*   **Gambar Placeholder:** Direktori `public/images/` telah dibuat. Harap tambahkan gambar anggota (misalnya, `member1.jpg`, `member2.jpg`, `member3.jpg`) dan gambar proyek (misalnya, `project1.jpg`, `project2.jpg`, `project3.jpg`) ke direktori ini agar tampilan situs lengkap.
*   **Font "Helvetica Now Text":** Saat ini, font "Inter" digunakan sebagai placeholder di `src/app/globals.css`. Jika Anda memiliki file font "Helvetica Now Text" yang sebenarnya, harap ganti import font dan properti `font-family` di `globals.css` sesuai kebutuhan.
*   **Komponen Reusable:** Manfaatkan komponen yang ada di `src/components/` untuk menjaga konsistensi desain dan mempercepat pengembangan.
*   **Tailwind CSS:** Proyek ini menggunakan Tailwind CSS untuk styling. Biasakan diri Anda dengan utilitas Tailwind untuk membuat perubahan gaya.
*   **Next.js App Router:** Proyek ini menggunakan App Router Next.js. Pahami konsep `layout.tsx` dan `page.tsx` untuk pengembangan halaman.
*   **Client Components:** Beberapa komponen, seperti `Navbar.tsx`, ditandai dengan `"use client"` karena menggunakan React Hooks (misalnya `usePathname`). Pastikan Anda memahami kapan harus menggunakan direktif ini.


