const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

console.log("===== BIODATA =====");

for (let kunci in biodata) {
  console.log(kunci + " : " + biodata[kunci]);
}

console.log("===================");