const formPemesanan = document.getElementById("form-pemesanan");

const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputFilm = document.getElementById("film");

const daftarPesanan = document.getElementById("daftar-pesanan");

const pesanStatus = document.getElementById("pesan-status");

const tombolReset = document.getElementById("tombol-reset");

formPemesanan.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const film = inputFilm.value.trim();

  if (nama === "" || email === "" || film === "") {
    pesanStatus.textContent = "⚠️ Nama, email, dan judul film wajib diisi!";

    pesanStatus.style.color = "red";

    return;
  }

  const pesananBaru = document.createElement("li");

  const namaPesanan = document.createElement("div");
  namaPesanan.textContent = nama;
  namaPesanan.classList.add("nama-pesanan");

  const detailPesanan = document.createElement("div");
  detailPesanan.textContent = "Email: " + email + " | Film: " + film;
  detailPesanan.classList.add("detail-pesanan");

  pesananBaru.appendChild(namaPesanan);
  pesananBaru.appendChild(detailPesanan);

  daftarPesanan.appendChild(pesananBaru);

  pesanStatus.textContent = "✅ Tiket berhasil dipesan!";
  pesanStatus.style.color = "green";

  inputNama.value = "";
  inputEmail.value = "";
  inputFilm.value = "";
});

tombolReset.addEventListener("click", function () {
  inputNama.value = "";
  inputEmail.value = "";
  inputFilm.value = "";

  pesanStatus.textContent = "";
});
