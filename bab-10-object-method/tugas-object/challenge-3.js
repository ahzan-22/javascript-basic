const rekening = {
  pemilik: "Zaky",
  saldo: 1000000,

  setor(jumlah) {
    this.saldo = this.saldo + jumlah;
    console.log("Setor Rp" + jumlah);
    this.cekSaldo();
  },

  tarik(jumlah) {
    if (this.saldo >= jumlah) {
      this.saldo = this.saldo - jumlah;
      console.log("Tarik Rp" + jumlah);
      this.cekSaldo();
    } else {
      console.log("Saldo tidak mencukupi.");
    }
  },

  cekSaldo() {
    console.log("Saldo : Rp" + this.saldo);
  }
};

rekening.cekSaldo();
rekening.setor(500000);
rekening.tarik(200000);