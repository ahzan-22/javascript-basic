const tahunLahir = 2008;

const tanggalLahir = new Date();
const tahunSekarang = tanggalLahir.getFullYear();

const umur = tahunSekarang - tahunLahir;

console.log("Umur :", umur, "tahun");