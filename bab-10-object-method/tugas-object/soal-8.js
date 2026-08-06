const lampu = {
  warna: "Merah",
  nyalakan: function () {
    console.log("Lampu berwarna " + this.warna + " menyala.");
  }
};

lampu.nyalakan();