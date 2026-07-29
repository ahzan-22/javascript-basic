//Soal Nomor 1
const nama = "Ahmad Zaky Nashrullah"; //Ini String
let umur = 18; //Ini Number
let sudahLulus = true; //Ini Booelean
let alamat = null; //Ini Null
let nomorTelepon; //Ini Undefined

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Sudah Lulus:", sudahLulus);
console.log("Alamat:", alamat);
console.log("Nomor Telepon:", nomorTelepon);


//Soal Nomor 2
let myHobby = ["Naik Sepeda", "Main ML", "Jalan-Jalan", "Jajan", "Nyecrol"];

console.log(myHobby[0]);
console.log(myHobby[2]);
console.log(myHobby[4]);


//Soal Nomor 3
let profil = {
    nama: "Wiwok Detok",
    umur: 52,
    sekolah: "Solo Man Learning Center",
    jurusan: "Pria Solo",
    aktif: true
};

console.log("Nama : " + profil.nama);
console.log("Umur : " + profil.umur);
console.log("Sekolah : " + profil.sekolah);
console.log("Jurusan : " + profil.jurusan);
console.log("Status : " + (profil.aktif ? "Aktif" : "Tidak Aktif"));


//Soal Nomor 4
console.log(typeof nama);
console.log(typeof umur);
console.log(typeof sudahLulus);
console.log(typeof alamat);
console.log(typeof nomorTelepon);
console.log(typeof myHobby);
console.log(typeof profil);


//Soal Nomor 5
console.log(typeof "Hello");    //String
console.log(typeof 100);        //Number
console.log(typeof true);       //Boolean
console.log(typeof null);       //Null Atau Object
console.log(typeof []);         //Object
console.log(typeof {});         //Object
console.log(typeof undefined);  //Undefined


//Soal Nomor 6
const tahun = "2026";
const umur = 17;
const aktif = true;

console.log(typeof tahun);
console.log(typeof umur);
console.log(typeof aktif);

console.log(tahun + 1);
console.log(umur + 1);

/* 
   SOAL NOMOR 6
   1. 'tahun' bernilai string karena dibungkus petik ("2026").
   2. 'tahun + 1' menghasilkan "20261" karena operator + pada string melakukan penggabungan teks.
   3. 'umur' bernilai number (17), sehingga 'umur + 1' menghasilkan penjumlahan (18).
   4. 'typeof' berfungsi untuk mengetahui tipe data suatu nilai/variabel.
*/


//Bonus
const kelas = {
    namaKelas: "C",
    jumlahSiswa: 9,
    ketuaKelas: "Radhitya Kurniawan",
    daftarMapel: ["Ngoding", "Ngoding Lagi", "Ngoding Lagi", "Ngoding Lagi", "Dan Ngoding Lagi"]
};

console.log("Nama Kelas : " + kelas.namaKelas);
console.log("Jumlah Siswa : " + kelas.jumlahSiswa);
console.log("Ketua Kelas : " + kelas.ketuaKelas);

console.log("Mapel Pertama : " + kelas.daftarMapel[0]);
console.log("Mapel Terakhir : " + kelas.daftarMapel[4]);


