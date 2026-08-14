const tanggal = new Date("2026-08-17");

function formatTanggal(tanggal) {
  const tgl = String(tanggal.getDate()).padStart(2, "0");
  const bln = String(tanggal.getMonth() + 1).padStart(2, "0");
  const thn = tanggal.getFullYear();
  return `${tgl}/${bln}/${thn}`;
}

console.log(formatTanggal(tanggal));
