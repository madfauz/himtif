---
sidebar_position: 3
---

# Chapter 3 : Pengkondisian

Dalam suatu program tentunya akan ada suatu keputusan yang diambil untuk menjalankan perintah selanjutnya. Misalnya jika grade mahasiswa diatas C maka dinyatakan lulus dan jika dibawah C akan mengulang mata kuliah.

Di Javascript ada 2 jenis statement yang biasa digunakan untuk mengambil keputusan di suatu kondisi.

## if else statement

Di Javascript untuk melakukan aksi berbeda untuk setiap pilihan yang beda, kita bisa menggunakan if else statement. Terdapat 3 syntax yaitu `if`, `else` dan `else if`.

### Contoh if statement 1

```jsx title="script.js"
let nilai = 80;
if (nilai > 75) {
  console.log("Selamat anda lulus");
}
```

:::info Penjelasan
Dari contoh diatas ketika nilai lebih besar dari 75, maka akan di cetak ke console "Selamat anda lulus".

Untuk menentukan kondisi dapat ditulis didalam tanda kurung `()` , lalu ketika hasil kondisi bernilai `true` maka instruksi yang berada didalam kurung kurawal `{}` akan dikerjakan.
:::

### Contoh if statement 2

```jsx title="script.js"
let nilai = 80;
if (nilai > 75) {
  console.log("Selamat anda lulus");
} else {
  console.log("Anda tidak lulus");
}
```

:::info Penjelasan
Berbeda dengan contoh `if stamement 1`, Di contoh `if stamement 2` terdapat syntax `else` yang selalu ditempatkan diakhir dan karna posisinya yang selalu diakhir maka tidak membutuhkan tanda kurung `()` dan lansung menulis kurung kurawal `{}`.

Dari contoh diatas ketika nilai tidak lebih dari 75, maka instruksi yang berada pada kurung kurawal dibagian else akan dijalankan, yaitu `console.log("anda tidak lulus")`
:::

### Contoh if statement 3

```jsx title="script.js"
let nilai = 90;
if (nilai > 95) {
  console.log("Selamat anda lulus dengan nilai memuaskan!");
} else if (nilai > 75) {
  console.log("Selamat anda lulus");
} else {
  console.log("Anda tidak lulus");
}
```

:::info Penjelasan
Berbeda dengan 2 contoh sebelumnya, di contoh `if statement 3` terdapat syntax tambahan yaitu `else if` yang digunakan ketika ingin membuat kondisi lebih dari 2.

Dari contoh diatas ketika nilai lebih dari 90, maka instruksi `console.log("Selamat anda lulus dengan nilai memuaskan!")` akan dijalankan. Namun jika tidak, maka akan di cek lagi dengan kondisi selanjutnya yaitu apakah nilai lebih besar dari 75.

Jika masih tidak sesuai maka akan di cek lagi dengan kondisi dibawahnya ( `else if` lainnya jika ada ). Jika tetap tidak ada kondisi yang sesuai, maka yang akan di eksekusi adalah baris perintah di kurung kurawal `else`.
:::

## switch statement

Sama seperti `if else stamement` yang digunakan untuk melakukan pengkondisian. `swicth statement` melakukan pengkondisian dengan format sederhana.

Terdapat 3 syntax yang digunakan dalam `switch statement` yaitu `switch`, `case`, `break`.

```jsx title="script.js"
let grade = "B";
let msg;
switch (grade) {
  case "A":
    console.log("Nilai kamu Sangat Bagus!");
    break;
  case "B":
    console.log("Nilai kamu Bagus!");
    break;
  case "C":
    console.log("Nilai kamu Cukup!");
    break;
  default:
    console.log("Kamu tidak lulus");
}
```

:::info Penjelasan

- Syntax `switch` digunakan untuk memulai statement pengkondisian.
- Didalam tanda kurung `()` ditulis nilai yang akan ditentukan kondisinya.
- Didalam kurung kurawal terdapat syntax `case` yang diikuti dengan nilai dari tiap tiap kondisi yang diharapkan.
- Syntax `break` digunakan untuk menghentikan pengkondisian switch.
- Syntax `default` digunakan mirip dengan syntax `else` yang selalu ditempatkan diakhir, jika tidak ada kondisi yang memenuhi.

:::
