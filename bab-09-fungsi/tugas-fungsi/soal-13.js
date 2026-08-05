const hitungSubtotal = (harga, jumlah) => harga * jumlah;
const hitungPPN = (subtotal) => subtotal * 0.11;
const hitungTotal = (subtotal, ppn) => subtotal + ppn;
const harga = 25000;
const jumlah = 4;
const subtotal = hitungSubtotal(harga, jumlah);
const ppn = hitungPPN(subtotal);
const total = hitungTotal(subtotal, ppn);

console.log("Subtotal : " + subtotal);
console.log("PPN      : " + ppn);
console.log("Total    : " + total);
