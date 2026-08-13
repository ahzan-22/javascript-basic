# Jawaban Bab 13 - Scope, Hoisting, & Closure

## Soal 1 - Mengenal Scope

1. `nama` termasuk **Global Scope** karena dibuat di luar function dan block.
2. `bahasa` termasuk **Function Scope** karena dibuat di dalam function `belajar()`.
3. `level` termasuk **Block Scope** karena dibuat di dalam block `if` menggunakan `let`.

### Penjelasan

Scope menentukan bagian program mana yang dapat mengakses sebuah variabel. Variabel yang berada di scope luar dapat diakses dari scope yang lebih dalam, tetapi variabel di dalam scope tidak dapat diakses dari luar scope tersebut.

---

## Soal 2 - Apakah Bisa Diakses?

Baris berikut berhasil dijalankan:

```javascript
console.log(nama);
console.log(umur);
```

yang berada di dalam function, karena `nama` berasal dari Global Scope dan `umur` berada di dalam function.

Setelah function selesai:

```javascript
console.log(nama);
```

tetap berhasil karena `nama` berada di Global Scope.

Sedangkan:

```javascript
console.log(umur);
```

menghasilkan `ReferenceError` karena `umur` hanya tersedia di dalam function `tampilkanNama()`.

---

## Soal 3 - Block Scope

Output pertama:

```text
Halo Santri
```

Kemudian program menghasilkan:

```text
ReferenceError
```

Program tidak berjalan sampai selesai karena variabel `pesan` dibuat menggunakan `let` di dalam block `if`.

Variabel tersebut hanya dapat digunakan di dalam block tersebut. Setelah keluar dari block, `pesan` tidak dapat diakses.

---

## Soal 4 - Scope Chain

Output:

```text
Dalam
Luar
Global
```

`console.log()` pertama berada di dalam function `dalam()`, sehingga JavaScript menemukan `nama` dengan nilai `"Dalam"` pada scope terdekat.

`console.log()` kedua berada di function `luar()`, sehingga menggunakan `nama` dengan nilai `"Luar"`.

`console.log()` terakhir berada di Global Scope, sehingga menggunakan `nama` dengan nilai `"Global"`.

JavaScript mencari variabel melalui Scope Chain dari scope yang paling dekat kemudian menuju scope yang lebih luar.

---

## Soal 5 - Mencari Variabel

1. `pajak` dibuat di Global Scope.
2. `totalPajak` dibuat di dalam function `hitungHarga()`, sehingga termasuk local/function scope.
3. `hitungHarga()` dapat menggunakan `pajak` karena JavaScript dapat mencari variabel ke scope yang lebih luar melalui Scope Chain.
4. `totalPajak` tidak dapat digunakan di luar function karena variabel tersebut hanya tersedia di dalam function `hitungHarga()`.

---

## Soal 6 - Hoisting Function

Output:

```text
Halo Santri!
```

Function `sapa()` dapat dipanggil sebelum deklarasinya karena Function Declaration mengalami hoisting.

JavaScript memproses deklarasi function sebelum menjalankan kode, sehingga function sudah tersedia ketika `sapa()` dipanggil.

---

## Soal 7 - Hoisting `var`

Output:

```text
undefined
Budi
```

`var nama` mengalami hoisting. Deklarasinya dianggap tersedia di awal scope, tetapi nilai `"Budi"` belum diberikan ketika `console.log(nama)` pertama dijalankan.

Secara sederhana, JavaScript memperlakukannya seperti:

```javascript
var nama;

console.log(nama);

nama = "Budi";

console.log(nama);
```

Karena `nama` sudah dideklarasikan tetapi belum memiliki nilai, hasil pertama adalah `undefined`.

---

## Soal 8 - Hoisting `let`

Jawaban yang benar adalah:

**C. `ReferenceError`**

`let` memang mengalami proses hoisting, tetapi variabel tersebut tidak dapat diakses sebelum deklarasinya dijalankan.

Periode antara awal scope sampai deklarasi `let` disebut **Temporal Dead Zone (TDZ)**.

Karena `nama` diakses ketika masih berada dalam TDZ, program menghasilkan `ReferenceError`.

---

## Soal 9 - Hoisting `const`

Kode:

```javascript
console.log(umur);

const umur = 17;
```

menghasilkan:

```text
ReferenceError
```

Sedangkan:

```javascript
console.log(umur);

var umur = 17;
```

menghasilkan:

```text
undefined
```

Perbedaannya adalah `var` dapat diakses sebelum assignment dan menghasilkan `undefined`, sedangkan `let` dan `const` tidak dapat diakses sebelum deklarasinya karena berada dalam Temporal Dead Zone.

---

## Soal 10 - Tebak Output Hoisting

Kode:

```javascript
console.log(a);
var a = 10;

console.log(b);
let b = 20;
```

`console.log(a)` berhasil dan menghasilkan:

```text
undefined
```

Namun `console.log(b)` menghasilkan:

```text
ReferenceError
```

Akibatnya program berhenti ketika mencoba mengakses `b`.

Jadi kedua `console.log()` tidak berhasil dijalankan sampai selesai.

---

## Soal 11 - Perbaiki Kode

Masalahnya adalah function dipanggil sebelum `nama` dan `umur` dideklarasikan menggunakan `const`.

Perbaikannya adalah memindahkan deklarasi `nama` dan `umur` sebelum pemanggilan function.

Kode perbaikan:

```javascript
const nama = "Budi";
const umur = 17;

function tampilkanData() {
  console.log(nama);
  console.log(umur);
}

tampilkanData();
```

Output:

```text
Budi
17
```

---

## Study Case 1 - Sistem Login

`tokenSesi` hanya dapat digunakan di dalam function `prosesLogin()` karena variabel tersebut dibuat di dalam function.

Jika kita menulis:

```javascript
console.log(tokenSesi);
```

di luar function, akan terjadi `ReferenceError`.

Hal tersebut terjadi karena `tokenSesi` memiliki Function Scope.

Agar `namaUser` dapat digunakan di dalam maupun di luar function, variabel tersebut dapat dibuat di Global Scope.

Contoh:

```javascript
const namaUser = "Budi";

function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("User:", namaUser);
  console.log("Token:", tokenSesi);
}

prosesLogin();

console.log("User:", namaUser);
```

---

## Soal 12 - Memahami Closure

Output:

```text
1
2
3
```

### Jawaban

1. Variabel `hitungan` dibuat di dalam function `buatPenghitung()`.
2. `hitungan` masih dapat digunakan setelah `buatPenghitung()` selesai karena function yang dikembalikan membentuk Closure dan tetap mengingat scope tempat function tersebut dibuat.
3. Function yang dikembalikan oleh `buatPenghitung()` adalah function yang mengingat dan mengubah `hitungan`.

---

## Soal 13 - Dua Closure

Output:

```text
1
2
1
3
2
```

`penghitungA` dan `penghitungB` memiliki nilai yang berbeda karena setiap pemanggilan `buatPenghitung()` membuat Closure dan variabel `hitungan` yang baru.

Saat:

```javascript
const penghitungA = buatPenghitung();
```

dibuat satu `hitungan`.

Kemudian:

```javascript
const penghitungB = buatPenghitung();
```

dibuat `hitungan` yang berbeda.

Jadi keduanya tidak berbagi variabel `hitungan` yang sama.

---

# Pertanyaan Refleksi

## 1. Apa yang dimaksud dengan Scope?

Scope adalah batas atau wilayah dalam program yang menentukan di mana sebuah variabel dapat diakses.

## 2. Apa perbedaan Global Scope dan Local Scope?

Global Scope adalah scope yang berada di luar function atau block sehingga variabelnya dapat digunakan dari berbagai bagian program. Local Scope adalah scope yang berada di dalam function atau block sehingga variabelnya hanya dapat digunakan pada wilayah tersebut.

## 3. Apa yang dimaksud dengan Block Scope?

Block Scope adalah scope yang berlaku di dalam block `{ }`. Variabel yang dibuat dengan `let` atau `const` di dalam block hanya dapat digunakan di dalam block tersebut.

## 4. Apa itu Scope Chain?

Scope Chain adalah proses JavaScript mencari sebuah variabel dari scope saat ini kemudian menuju scope yang lebih luar sampai variabel tersebut ditemukan.

## 5. Apa yang dimaksud dengan Hoisting?

Hoisting adalah perilaku JavaScript dalam memproses deklarasi tertentu sebelum kode dijalankan.

## 6. Apa perbedaan hoisting `var` dengan `let` dan `const`?

`var` dapat diakses sebelum assignment dan menghasilkan `undefined`. Sedangkan `let` dan `const` tidak dapat diakses sebelum deklarasinya karena berada dalam Temporal Dead Zone.

## 7. Apa yang dimaksud dengan Closure?

Closure adalah function yang tetap dapat mengakses variabel dari scope tempat function tersebut dibuat, meskipun function luar sudah selesai dijalankan.

## 8. Mengapa Closure dapat digunakan untuk membuat data privat?

Karena variabel dapat disimpan di dalam scope function dan tidak dapat diakses langsung dari luar. Data tersebut hanya dapat digunakan melalui function atau method yang diberikan akses.

## 9. Mengapa dua Closure yang dibuat dari fungsi yang sama dapat memiliki data yang berbeda?

Karena setiap kali function pembuat Closure dipanggil, dibuat scope dan variabel baru. Oleh karena itu masing-masing Closure memiliki data sendiri.

## 10. Menurutmu, apa manfaat Closure dalam aplikasi nyata?

Closure dapat digunakan untuk menyimpan data yang tidak ingin diakses langsung dari luar, seperti saldo rekening, jumlah transaksi, counter, atau data pengguna. Dengan Closure, perubahan data dapat dikontrol melalui function atau method tertentu.
