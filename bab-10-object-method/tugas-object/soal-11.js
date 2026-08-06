const game = {
  pemain: "Bima",
  nyawa: 100,

  terkenaSerangan: function (damage) {
    this.nyawa -= damage;
  },

  tampilkanStatus: function () {
    console.log("=== Status Karakter ===");
    console.log("Nama  :", this.pemain);
    console.log("Nyawa " + "awal :", this.nyawa + 30);
    console.log("Nyawa " + "sekarang :" + this.nyawa);
  },
};

game.terkenaSerangan(30);
game.tampilkanStatus();
