const hargaBarang = "125000.50";
const jumlah = "3";

const harga = parseFloat(hargaBarang);
const jumlahBarang = Number(jumlah);

const subtotal = harga * jumlahBarang;

console.log("Harga Barang: Rp" + harga.toFixed(2));
console.log("Jumlah Barang:", jumlahBarang);
console.log("Subtotal: Rp" + subtotal.toFixed(2));