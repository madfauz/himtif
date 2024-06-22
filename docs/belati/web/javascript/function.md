---
sidebar_position: 5
---

# Chapter 5 : Function

Function adalah sebuah blok kode yang digunakan untuk menjalankan suatu tugas tertentu dan akan dieksekusi jika function tersebut dipanggil

## Basic Function

Jenis Function standar yang biasa digunakan di program.

### Contoh basic function

```jsx title="script.js"
function sayHi() {
  document.writeln("Hallo semua");
}

sayHi();
```

## Parameter dan Argument Function

Terkadang ketika memanggil function untuk dieksekusi, kita memerlukan data dari luar function juga. Didalam `tanda kurung ( )` pada function digunakan untuk inisialisasi variabel yang akan dibutuhkan dari luar function dan dijalankan didalam function (Disebut Parameter).

Sedangkan Argument adalah nilai yang dimasukan di dalam `tanda kurung ( )` ketika memanggil function.

### Contoh penggunaan Parameter dan Argument

```jsx title="script.js"
function sayHi(nama) {
  document.writeln(`Halo ${nama}`);
}

sayHi("Yuki");
```

## Return statement

Sebuah function yang dipanggil akan menghasilkan sebuah nilai dari `return` statement.

### Contoh return statement

```jsx title="script.js"
function sayHi(nama) {
  return `Halo ${nama}`;
}

document.writeln(sayHi("Yuki"));
```

## Anonymous Function

Sesuai namanya function ini tidak memiliki nama function, atau istilahnya adalah anonymous function. Digunakan dalam sebuah variable atau bisa untuk mengisi parameter.

### Contoh Anonymous Function 1

```jsx title="script.js"
const sayHi = function (nama) {
  document.writeln(`Hi ${nama}`);
};

sayHi("Juwita");
```

### Contoh Anonymous Function 2

```jsx title="script.js"
function cetak(sayHi) {
  sayHi("Kayla");
}

cetak(function (nama) {
  document.writeln(`Hai ${nama}`);
});
```

## Arrow Function

Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya.

Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
Dinamakan arrow function karena menggunakan tanda => (seperti panah)
Berikut contoh beberapa kekurangan arrow function :

### Contoh Arrow Function 1

```jsx title="script.js"
const sayBye = (nama) => {
  document.writeln(`Good bye ${nama}`);
};

sayBye("Emi");
```

### Contoh Arrow Function 2

```jsx title"script.js"
const sayBye = (nama) => document.writeln(`Good bye ${nama}`);

sayBye("Emi");
```
