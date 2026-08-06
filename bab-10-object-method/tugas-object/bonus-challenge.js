const playlist = {
  namaPlaylist: "Lagu Favorit",
  lagu: [],

  tambahLagu(judul) {
    this.lagu.push(judul);
  },

  hapusLagu(index) {
    this.lagu.splice(index, 1);
  },

  tampilkanPlaylist() {
    console.log("=== PLAYLIST ===");
    
    for (let i = 0; i < this.lagu.length; i = i + 1) {
      let nomor = i + 1;
      console.log(nomor + ". " + this.lagu[i]);
    }
  }
};

playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");
playlist.tampilkanPlaylist();