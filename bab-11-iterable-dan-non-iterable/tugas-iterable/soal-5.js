const nilai = [90, 80, 85, 100, 95];
let total = 0;
for (let nilaiSeluruh of nilai) {
  total += nilaiSeluruh;
}

const rataRata = total / nilai.length;
console.log("Rata-rata :", rataRata);