const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};

for (let kunci in kelas) {
  console.log(kunci + " : " + kelas[kunci]);
}

kelas.ruangan = "Lab Komputer";

for (let kunci in kelas) {
  console.log(kunci + " : " + kelas[kunci]);
}