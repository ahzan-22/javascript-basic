// Soal 1
const panjang = 15;
const lebar = 8;

const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

console.log("Luas      : " + luas);
console.log("Keliling  : " + keliling);


// Soal 2
const angka = 29;

const sisa2 = angka % 2;
const sisa4 = angka % 4;
const sisa5 = angka % 5;

console.log(angka + " % 2 = " + sisa2);
console.log(angka + " % 4 = " + sisa4);
console.log(angka + " % 5 = " + sisa5);


// Soal 3
let stock = 20;
stock += 5;
stock -= 5;

console.log(stock);


// Soal 4
let saldo = 100000;

saldo += 50000;
saldo -= 25000;
saldo /= 5;
saldo *= 2;

console.log("Saldo Akhir: " + saldo);


//soal 5
let harga = 18000;
let jumlah = 6;
let diskon = 10000;

let subtotalnya = harga * jumlah;
let total = subtotalnya - diskon;

console.log("Subtotalnya :", subtotalnya);
console.log("Total    :", total);


// Soal 6
console.log(10 > 5);      //True
console.log(10 < 5);      //False
console.log(10 >= 10);    //True
console.log(5 <= 3);      //False
console.log(8 != 8);      //False
console.log(12 !== "12"); //True


// Soal 7
/*
1.)"True", karena String "10" diubah menjadi angka 10, sehingga perbandingannya menjadi 10 == 10.
2.)"False", Karena tipe datanya beda, langsung menghasilkan false.
3.)"True", Karena nilai boolean false disamakan menjadi angka 0. Perbandingannya menjadi 0 == 0.
4/)"False", Karena Sisi kiri bertipe Boolean (false) dan sisi kanan bertipe Number (0). Tipe datanya berbeda, sehingga dianggap tidak identik.
5.)"True", Karena Operator == memperlakukan null dan undefined selevel/setara karena keduanya mewakili nilai yang "tidak ada/kosong".
6.)"False", karena Tipe datanya berbeda. null memiliki tipe data tersendiri (dianggap objek/null), sedangkan undefined memiliki tipe data undefined.
*/


// Soal 8
let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk = sudahLogin && sudahVerifikasi;
let dapatFiturPremium = premium || sudahVerifikasi;

console.log("bolehMasuk        : " + bolehMasuk);
console.log("dapatFiturPremium : " + dapatFiturPremium);


// Soal 9
let lampuNyala = true;
console.log(!lampuNyala);


// Soal 10
console.log(8 + 4 * 2);            //perkalian di dahulukan
console.log((8 + 4) * 2);          //dalam kurung lebih di dahulukan dibanding perkalian
console.log(20 / 5 + 3 * 2);       //Pembagian dan perkalian dikerjakan terlebih dahulu sebelum penjumlahan.


// Soal 11
      //hasilnya25
      //Karena baris angka + 5 itu cuma numpang ngitung, tapi hasilnya nggak disimpan ke mana-mana.
let angkanya = 20;
angkanya += 5;
console.log(angka);


// Soal 12
let umur = "18";

console.log(umur > 17);
console.log(umur === 18);
// outputnya:True, kemudian False.
// 1.) karena operator perbandingan otomatis mengubah string menjadi angka, dan 18 lebih besar dari 17
// 2.) karena operator identitas mengecek nilai sekaligus tipe datanya. dan keduanya berbeda type sehingga di anggap tidak sama.


// Soal 13
let umurnya = 20;
let punyaKTP = true;
let sudahDaftar = true;

let lolos =(umur >= 17)  && punyaKTP && sudahDaftar;

console.log(lolos);


// Soal 14
let hargaBuku = 45000;
let jumlahBeli = 4;
const diskonnya = 15000;

const subtotal = hargaBuku * jumlahBeli;
const totalBayar = subtotal - diskonnya;

console.log("Subtotal     : Rp " + subtotal);
console.log("Total Bayar  : Rp " + totalBayar);


// Soal 15
/*
Awal : 12
Setelah += 8 :20
Setelah *= 2 :40
Setelah --   :39
Setelah /= 3 :13
Hasil akhir  :13
*/


// Bonus Challenge
const tugas = 80;
const uts = 75;
const uas = 90;
const nilaiAkhir = (tugas + uts + uas) / 3;
const isLulus = nilaiAkhir >= 75;

console.log("Nilai Akhir : " + nilaiAkhir);
console.log("Lulus       : " + isLulus);


// Bonus Challenge 2
let Umur = 20;
let Uang = 200000;
const hargaTiket = 150000;
const biayaAdmin = 10000;

let totalBayarnya = hargaTiket + biayaAdmin;
let sisaUang = Uang - totalBayarnya;
const cukupUmur = Umur >= 18;
const cukupUang = Uang >= totalBayarnya;
const bisaBeliTiket = cukupUmur && cukupUang;
const transaksiGagal = !cukupUmur || !cukupUang;

console.log("=== SISTEM PEMBELIAN TIKET KONSER ===");
console.log("Total Yang Harus Dibayar : Rp" + totalBayar);
console.log("Bisa Beli Tiket          : " + bisaBeliTiket);
console.log("Transaksi Gagal          : " + transaksiGagal);
console.log("Sisa Uang Pembeli        : Rp" + sisaUang);
