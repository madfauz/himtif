---
sidebar_position: 1
---

# Chapter 1 : Struktur HTML

## Pengenalan HTML

HTML (Hyper Markup Language) adalah bahasa markup yang digunakan untuk membuat dan menyusun konten pada halaman web. HTML digunakan untuk mendefinisikan struktur dan tampilan halaman web serta mengintegrasikan elemen-elemen multimedia seperti gambar, video, audio, dan hyperlink.

Pada dasarnya, HTML menggunakan **markup** atau tanda-tanda khusus yang disebut **tag** untuk memberikan instruksi kepada browser tentang bagaimana menyajikan konten pada halaman web. Setiap tag biasanya memiliki awalan dan penutupan yang berarti tag tersebut membentuk suatu elemen yang dibungkus oleh tanda pembuka dan penutup.

### Struktur dasar HTML

```jsx title="index.html"
<!DOCTYPE html>
<html>
  <head>

    <title>Page Title</title>

    ...

  </head>
  <body>

    ...

  </body>
</html>
```

:::info Tambahan

- `<!DOCTYPE html>` untuk mendefinisikan bahwa dokumen ini adalah dokumen HTML5
- `<html>` elemen adalah elemen akar halaman HTML
- `<head>` elemen berisi informasi meta tentang halaman HTML
- `<title>` elemen menentukan judul untuk halaman HTML (yang ditampilkan di tab halaman)
- `<body>` elemen mendefinisikan isi dokumen, dan merupakan wadah untuk semua konten yang terlihat, seperti judul, paragraf, gambar, hyperlink, tabel, daftar, dll.

:::
