const nilai = [75, 90, 88, 100, 67, 95];

let tertinggi = nilai[0];

for (let n of nilai) {
  if (n > tertinggi) {
    tertinggi = n;
  }
}

console.log("Nilai tertinggi : " + tertinggi);