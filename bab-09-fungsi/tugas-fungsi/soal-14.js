function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas + uts + uas) / 3;
}

const nilaiAkhir = hitungNilaiAkhir(80, 85, 81);

let status;
if (nilaiAkhir >= 75) {
  status = "Lulus";
} else {
  status = "Tidak Lulus";
}

console.log("Nilai Akhir : " + nilaiAkhir);
console.log("Status      : " + status);
