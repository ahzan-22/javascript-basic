function buatKeranjang() {
  let items = [];

  return {
    tambah(nama, harga) {
      items.push({
        nama: nama,
        harga: harga
      });
    },

    hapus(nama) {
      const index = items.findIndex((item) => item.nama === nama);

      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${nama} berhasil dihapus.`);
        console.log();
      }
    },

    lihatKeranjang() {
      console.log("===== KERANJANG =====");

      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
      });

      console.log();
    },

    hitungTotal() {
      return items.reduce((total, item) => total + item.harga, 0);
    },

    jumlahItem() {
      return items.length;
    }
  };
}

const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

console.log("Total:", keranjang.hitungTotal());
console.log("Jumlah item:", keranjang.jumlahItem());

console.log("Data langsung:", keranjang.items);