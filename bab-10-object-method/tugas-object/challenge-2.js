const produk = {
  nama: "Laptop",
  harga: 15000000,
  stok: 5,

  tambahStok(jumlah) {
    this.stok = this.stok + jumlah;
  },

  kurangiStok(jumlah) {
    this.stok = this.stok - jumlah;
  },

  tampilkanInfo() {
    console.log("Nama  : " + this.nama);
    console.log("Harga : " + this.harga);
    console.log("Stok  : " + this.stok);
  }
};

// Pemanggilan
produk.tampilkanInfo();
produk.tambahStok(10);
produk.kurangiStok(3);
produk.tampilkanInfo();