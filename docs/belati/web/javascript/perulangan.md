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
