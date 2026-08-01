let totalBelanja = 320000;
let persentaseDiskon = 0;

if (totalBelanja >= 500000) {
    persentaseDiskon = 20;
} else if (totalBelanja >= 250000) {
    persentaseDiskon = 10;
} else {
    persentaseDiskon = 0;
}

let potongan = (persentaseDiskon / 100) * totalBelanja;
let totalBayar = totalBelanja - potongan;

console.log("Diskon : " + persentaseDiskon + "%");
console.log("Potongan : " + potongan);
console.log("Total Bayar : " + totalBayar);
