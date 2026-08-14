const tanggalTransaksi = new Date("2026-08-13");

const jatuhTempo = new Date(tanggalTransaksi);
jatuhTempo.setDate(jatuhTempo.getDate() + 7);

console.log(
  "Tanggal Transaksi :",
  tanggalTransaksi.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);

console.log(
  "Jatuh Tempo       :",
  jatuhTempo.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);