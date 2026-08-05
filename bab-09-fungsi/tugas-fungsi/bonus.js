function hitungBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

let berat = 65;
let tinggi = 1.7;

const bmi = hitungBMI(berat, tinggi);
const bmiBulat = bmi.toFixed(2);

console.log("BMI Saya : " + bmiBulat);
