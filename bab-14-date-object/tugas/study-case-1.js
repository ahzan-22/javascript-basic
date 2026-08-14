const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const selisih = deadline.getTime() - sekarang.getTime();

const satuHari = 1000 * 60 * 24;
const sisaHari = selisih / satuHari;

console.log("deadline: 20 Agustus 2026");

if (sisaHari > 0) {
    console.log("Sisa waktu:", sisaHari, "hari lagi");
} else {
    console.log("Deadline sudah lewat.")
}