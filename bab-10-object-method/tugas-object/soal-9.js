const akunBank = {
  pemilik: "Budi Santoso",
  saldo: 1000000,

  setor(jumlah) {
    this.saldo += jumlah;
    console.log("Saldo sekarang :", this.saldo);
  },
};

akunBank.setor(500000);
