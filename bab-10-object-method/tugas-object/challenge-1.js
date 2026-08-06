const biodata = {
  nama: "Ahmad Zaky",
  umur: 19,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

function tampilkanBiodata(data) {
  console.log("=== Biodata ===");
  console.log("Nama      :", data.nama);
  console.log("Umur      :", data.umur);
  console.log("Pekerjaan :", data.pekerjaan);
  console.log("Kota      :", data.kota);
  console.log("==============");
}

tampilkanBiodata(biodata);