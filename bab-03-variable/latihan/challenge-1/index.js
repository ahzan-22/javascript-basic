const namaProduk = "Kopi Susu";
const hargaSatuan = "20000";
const jumlahDibeli = "3"
const tarifPajak = "0.1";

const subTotal = hargaSatuan * jumlahDibeli;
const pajak = subTotal * tarifPajak;
const totalBayar = subTotal + pajak;

console.log("=== Struk ===");
console.log("Nama Produk   : " + namaProduk);
console.log("Harga Satuan  : " + hargaSatuan);
console.log("Jumlah Beli   : " + jumlahDibeli);
console.log("--------------------------");
console.log("Subtotal      : " + subTotal);
console.log("Pajak         : " + pajak);
console.log("----------------------");
console.log("Total Bayar   : " + totalBayar);

