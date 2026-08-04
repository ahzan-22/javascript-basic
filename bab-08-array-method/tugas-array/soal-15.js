let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

let posisiKeyboard = inventaris.indexOf("Keyboard");
let adaPrinter = inventaris.includes("Printer");
let posisiMouse = inventaris.indexOf("Mouse");
inventaris[posisiMouse] = "Headset";
let duaTerakhir = inventaris.slice(-2);

console.log("Inventaris terbaru:", inventaris);
console.log("Posisi Keyboard:", posisiKeyboard);
console.log("Apakah Printer ada?:", adaPrinter);
console.log("Dua barang terakhir:", duaTerakhir);
