const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

const namaBersih = namaProduk.trim();

const namaTampil = namaBersih
.split(" ")
.map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
.join(" ");

const harga = parseFloat(hargaProduk);

console.log("==== Data Produk ====");
console.log("Nama :", namaTampil);
console.log("Harga : Rp" + harga.toFixed(2));
console.log("Kode :", kodeProduk);
console.log("========================");

if (namaBersih.length === 0) {
    console.log("Nama produk tidak boleh kosong.");
}

if (isNaN(harga)) {
    console.log("Harga harus berupa Number.");
}

if (!kodeProduk.startsWith("PROD-")) {
    console.log("Kode produk harus dimulai dengan PROD.");
}

if (!kodeProduk.endsWith("-001")) {
    console.log("Kode produk harus diakhiri dengan -001.");
}