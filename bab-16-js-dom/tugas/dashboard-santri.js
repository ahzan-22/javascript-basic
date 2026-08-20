const santri = {
  nama: "Budi Santoso",
  kelas: "XI RPL",
  status: "Aktif"
};

const aktivitas = [
  "Login ke aplikasi",
  "Membaca materi JavaScript",
  "Mengerjakan latihan",
  "Mengumpulkan tugas"
];

const namaSantri = document.getElementById("nama-santri");
const kelasSantri = document.getElementById("kelas-santri");
const statusSantri = document.getElementById("status-santri");

const daftarAktivitas = document.getElementById("daftar-aktivitas");
const jumlahAktivitas = document.getElementById("jumlah-aktivitas");

namaSantri.textContent = santri.nama;
kelasSantri.textContent = santri.kelas;
statusSantri.textContent = santri.status;

function tampilkanJumlah() {
  jumlahAktivitas.textContent =
    "Total aktivitas: " + daftarAktivitas.children.length;
}

for (let kegiatan of aktivitas) {
  const itemAktivitas = document.createElement("li");

  const teksAktivitas = document.createElement("span");
  teksAktivitas.textContent = "✅ " + kegiatan;

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";

  tombolHapus.classList.add("tombol-hapus");

  tombolHapus.addEventListener("click", function () {
    itemAktivitas.remove();

    tampilkanJumlah();
  });

  itemAktivitas.appendChild(teksAktivitas);
  itemAktivitas.appendChild(tombolHapus);

  daftarAktivitas.appendChild(itemAktivitas);
}

tampilkanJumlah();