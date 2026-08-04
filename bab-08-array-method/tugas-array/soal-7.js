let antrian = [
  "Budi",
  "Ani",
  "Joko",
];

let dilayani = antrian.shift();
console.log("Sedang dilayani:", dilayani);
console.log("Sisa antrian:", antrian);

antrian.unshift("Dewi (Prioritas)");
console.log("Setelah sisipan prioritas:", antrian);
