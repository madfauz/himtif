---
sidebar_position: 4
---

# Chapter 4 : Perulangan

Dalam suatu program tentunya akan ada saat dimana harus mencetak banyak data sekaligus. Misalnya jika membuat list nama peserta sebanyak 100 data, tentunya mencetak secara manual (satu per satu) bukanlah solusi yang tepat.

Di Javascript ada beberapa jenis statement yang biasa digunakan untuk melakukan perulangan, supaya tidak perlu dibuat secara manual (satu per satu) data yang akan dicetak.

## Perulangan for

Di Javascript untuk melakukan perulangan kita bisa menggunakan syntax `for` lalu diikuti dengan `tanda kurung ( )` dan `tanda kurung kurawal { }`.

### Contoh perulangan for

```jsx title="script.js"
for (let i = 1; i <= 100; i++) {
  console.log(`Peserta ke ${i}`);
}
```

:::info Penjelasan
Dari contoh akan mencetak string "Peserta ke 1" sampai "Peserta ke 100". Didalam `tanda kurung ( )` terdapat 3 jenis perintah yaitu inisialisasi variabel, Pengecekan kondisi dan Increment. Sedangkan didalam `tanda kurung kurawal { }` adalah perintah yang akan dijalankan selama kondisi terpenuhi.
:::

## Perulangan for in

Jenis perulangan ini digunakan untuk mengiterasi seluruh data property di object atau index di array.

Meskipun bisa dipakai di object dan array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of.

### Contoh perulangan for in

```jsx title="script.js"
const peserta = {
  nama: "Ethan Raka",
  nim: 2247589109,
  jurusan: "Teknik Informatika",
};

for (const data in peserta) {
  document.writeln(`${peserta[data]} |`);
}
```

:::info Penjelasan
Dari contoh diatas variabel bernama "data" digunakan untuk mengakses property pada object (jika di array akan mengakses index) dan bukan nilainya langsung.
:::

## Perulangan for of

Perulangan ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain-lain.

For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

### Contoh perulangan for of

```jsx title="script.js"
const peserta = ["Ethan", "Juwita", "Mina", "Very"];

for (const data of peserta) {
  document.writeln(`${data} |`);
}
```
