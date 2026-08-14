const nilai = [80, 90, 75, 95, 85];

function prosesNilai(...nilai) {
  const nilaiTertinggi = Math.max(...nilai);
  const nilaiTerendah = Math.min(...nilai);
  const totalNilai = nilai.reduce((total, angka) => total + angka, 0);

  return {
    nilaiTertinggi,
    nilaiTerendah,
    totalNilai,
  };
}

const hasil = prosesNilai(...nilai);

const { nilaiTertinggi, nilaiTerendah, totalNilai } = hasil;

console.log("Nilai tertinggi :", nilaiTertinggi);
console.log("Nilai terendah  :", nilaiTerendah);
console.log("Total nilai     :", totalNilai);