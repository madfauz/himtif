const peserta = [
  {
    nama: "Ethan Raka",
    nim: 2247589109,
    jurusan: "Teknik Informatika",
  },
  {
    nama: "Juwita Malaka",
    nim: 2278907162,
    jurusan: "Sistem Informasi",
  },
];

for (data of peserta) {
  console.log(`Nama peserta : ${data["nama"]} | NIM : ${data["nim"]}`);
}
