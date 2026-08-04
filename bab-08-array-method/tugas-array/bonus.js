let playlist = [];
playlist.push("Lagu B", "Lagu C", "Lagu D", "Lagu E", "Lagu F");
playlist.pop();
playlist.unshift("Lagu A");
console.log("=== Playlist Saya ===\n");

for (let i = 0; i < playlist.length; i++) {
  console.log((i + 1) + ". " + playlist[i]);
}

console.log();
console.log("Total Lagu : " + playlist.length);
