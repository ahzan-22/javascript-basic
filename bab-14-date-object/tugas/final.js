const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date("2026-08-13");

const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

console.log("===== DAFTAR TUGAS =====");
console.log();

tugas.forEach((item, index) => {
  const deadline = new Date(item.deadline);

  const selisih = deadline.getTime() - sekarang.getTime();
  const satuHari = 1000 * 60 * 60 * 24;
  const sisaHari = Math.round(selisih / satuHari);

  const tanggal = deadline.getDate();
  const bulan = namaBulan[deadline.getMonth()];
  const tahun = deadline.getFullYear();
  const hari = namaHari[deadline.getDay()];

  const tanggalTampil = deadline.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  console.log(`${index + 1}. ${item.nama}`);
  console.log(`   Deadline: ${tanggalTampil}`);

  if (sisaHari > 0) {
    console.log(`   Status  : ${sisaHari} hari lagi`);
  } else {
    console.log("   Status  : Deadline sudah terlewat.");
  }

  console.log();
});