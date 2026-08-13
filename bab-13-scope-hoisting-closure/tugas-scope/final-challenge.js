function buatAkun(nama, saldoAwal) {
  let saldo = saldoAwal;

  return {
    lihatProfil() {
      console.log("===== PROFIL =====");
      console.log("Nama:", nama);
      console.log();
    },

    cekSaldo() {
      console.log("Saldo: Rp" + saldo);
      console.log();
    },

    tambahSaldo(jumlah) {
      saldo += jumlah;

      console.log("Saldo berhasil ditambahkan.");
      console.log("Saldo sekarang: Rp" + saldo);
      console.log();
    },

    kurangiSaldo(jumlah) {
      if (jumlah > saldo) {
        console.log("Saldo tidak mencukupi.");
        console.log();
        return;
      }

      saldo -= jumlah;

      console.log("Saldo berhasil dikurangi.");
      console.log("Saldo sekarang: Rp" + saldo);
      console.log();
    }
  };
}

const akunBudi = buatAkun("Budi", 100000);
const akunAni = buatAkun("Ani", 500000);

akunBudi.lihatProfil();
akunBudi.cekSaldo();

akunBudi.tambahSaldo(50000);

akunBudi.kurangiSaldo(25000);

akunBudi.cekSaldo();

console.log("===== AKUN ANI =====");
akunAni.lihatProfil();
akunAni.cekSaldo();

akunAni.kurangiSaldo(600000);