const keranjangA = [
  "Keyboard",
  "Mouse",
];

const keranjangB = [
  "Monitor",
  "Headset",
];

const seluruhKeranjang = [
  ...keranjangA,
  ...keranjangB,
];

const [produkPertama, produkKedua, , produkTerakhir] = seluruhKeranjang;

console.log("Produk pertama :", produkPertama);
console.log("Produk kedua   :", produkKedua);
console.log("Produk terakhir:", produkTerakhir);