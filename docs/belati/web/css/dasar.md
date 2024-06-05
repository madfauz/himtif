---
sidebar_position: 1
---

# Chapter 1 : Dasar CSS

CSS, atau Cascading Style Sheets, adalah bahasa stylesheet yang digunakan untuk mengatur tampilan dan format dokumen yang ditulis dalam bahasa markup seperti HTML. CSS digunakan untuk memisahkan konten dari presentasi visual, memungkinkan pengembang web untuk mengontrol tata letak, warna, font, dan berbagai aspek visual lainnya dari halaman web secara efisien.

## CSS Selector

Untuk menyeleksi / menetapkan elemen HTML mana yang ingin dimanipulasi dengan CSS ada berbagai tipe seleksi diantaranya :

### Element Selector

Langsung sebutkan saja tag apa yang mau di manipulasi. Misalnya contoh dibawah tag `<div>` ingin ditambahkan warna latar merah, menggunakan properti `background-color`.

```
div {
    background-color : red;
}
```

### Id Selector

Menggunakan atribut `id` dari HTML elemen untuk menyeleksi elemen secara spesifik dengan menuliskan tanda `#` diikuti nilai dari `id` yang ingin diseleksi.

Atribut `id` dari sebuah elemen bersifat unik ( hanya dimiliki satu elemen saja ) untuk setiap elemen HTML. Misalnya ingin menyeleksi sebuah elemen yang memiliki `id` bernilai "item-1" kemudian diubah tipe font nya menjadi "Courier New" maka penulisannya adalah :

```
#item-1 {
    font-family: 'Courier New';
}
```

### Class Selector

Berbeda dengan Id Selector yang hanya bisa menyeleksi satu elemen, Class Selector bisa menyeleksi lebih dari satu elemen. Menggunakan atribut `class` dari elemen HTML yang ingin diseleksi, cara penulisannya memakai tanda `.` diikuti nilai dari `class` tersebut.

Misalnya ingin mengganti warna text menggunakan properti `color` dan menambahkan garis tepi menggunakan properti `border` pada elemen `<li>` yang memiliki attribut `class` dengan nilai "menu".

```
.menu {
    color: aquamarine;
    border: 1px solid black;
}
```

### Grouping Selector

Menyeleksi banyak elemen sekaligus bisa menggunakan tanda `,` sebagai pemisah. Misalnya ingin mengubah posisi elemen `<div>` yang memiliki atribut `id` bernilai "root" dan elemen `<input>` menjadi posisi "absolut" menggunakan properti `position`.

```
#root, input {
    position: absolute;
}
```

## Jenis Jenis Penempatan CSS

Untuk menambahkan CSS di file HTML kita ada beberapa cara yang dapat dilakukan yaitu :

### Inline CSS

Inline CSS merupakan metode penataan yang mana properti secara langsung diterapkan pada elemen HTML dalam bagian body dengan menggunakan atribut “style”. Metode ini memungkinkan penataan spesifik untuk setiap elemen.

```bash
<!DOCTYPE html>
<html>
  <head>
    <title>Latihan CSS</title>
  </head>
  <body>
    <h1 style="color:red; font-size:20px">Contoh Text</h1>
  </body>
</html>
```

### Internal CSS

Ini dapat digunakan ketika satu dokumen HTML harus memiliki gaya yang unik. Set aturan CSS harus ada dalam file HTML di bagian head yaitu CSS yang tersemat dalam tag `<style>` di dalam bagian head file HTML.

```bash
<!DOCTYPE html>
<html>
  <head>
    <title>Latihan CSS</title>
    <style>
      h1 {
            color: red;
            font-size: 20px;
         }
    </style>
  </head>
  <body>
    <h1>Contoh Text</h1>
  </body>
</html>
```

### External CSS

Eksternal CSS berisi file terpisah yang hanya berisi properti gaya dengan bantuan atribut tag (contohnya class, id, heading). Properti ini ditulis dalam file terpisah dengan ekstensi `.css` dan harus dihubungkan ke dokumen HTML menggunakan tag `<link>`.

`index.html`

```bash
<!DOCTYPE html>
<html>
<head>
<title>Latihan CSS</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Contoh Text</h1>

</body>
</html>
```

`style.css`

```bash
h1 {
  color: red;
  font-size: 20px;
}
```

## Tambahan

Untuk menambahkan border / stroke di tag `<table>` kalian bisa menggunakan ini properti `border` dan `border-collapse`.

```js title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Latihan css</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <table>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Grade</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Emie</td>
        <td>A</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>B</td>
      </tr>
    </table>
  </body>
</html>

```

```js title="style.css"
table,
th,
td,
tr {
  border: 1px solid black;
  border-collapse: collapse;
}
```
