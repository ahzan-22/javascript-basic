let saldo = 150000;
let tarikTunai = 100000;

if (saldo >= tarikTunai) {
  saldo = saldo - tarikTunai;
  console.log("Penarikan berhasil");
  console.log("Sisa saldo : " + saldo);
} else {
  console.log("Saldo tidak mencukupi");
}
