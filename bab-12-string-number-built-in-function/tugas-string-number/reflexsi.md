# Jawaban Pertanyaan Refleksi Bab 12

### 1. Mengapa input perlu dibersihkan dengan `.trim()`?

Input perlu dibersihkan dengan `.trim()` karena terkadang pengguna memberikan spasi tambahan di awal atau akhir teks. Dengan `.trim()`, spasi tersebut dapat dihapus sehingga data menjadi lebih rapi dan mudah diproses.

### 2. Apa perbedaan `.replace()` dan `.replaceAll()`?

`.replace()` digunakan untuk mengganti satu kemunculan teks, biasanya kemunculan pertama. Sedangkan `.replaceAll()` digunakan untuk mengganti semua kemunculan teks yang dicari.

### 3. Apa perbedaan `parseInt()` dan `parseFloat()`?

`parseInt()` digunakan untuk mengubah teks menjadi bilangan bulat, sedangkan `parseFloat()` digunakan untuk mengubah teks menjadi bilangan yang dapat memiliki angka desimal.

### 4. Kapan `Number()` lebih cocok digunakan?

`Number()` lebih cocok digunakan ketika ingin mengubah sebuah nilai menjadi tipe data Number dan nilai tersebut memang berupa angka yang valid.

### 5. Mengapa `.toFixed()` menghasilkan String?

`.toFixed()` digunakan untuk memformat angka dengan jumlah angka di belakang koma tertentu. Hasil dari `.toFixed()` berupa String karena method tersebut menghasilkan nilai dalam bentuk teks.

### 6. Mengapa `.toLowerCase()` berguna untuk fitur pencarian?

`.toLowerCase()` berguna agar pencarian tidak membedakan huruf besar dan huruf kecil. Dengan begitu, pengguna dapat mencari kata dengan lebih mudah.

### 7. Method mana yang paling sering digunakan dalam aplikasi nyata?

Menurut saya, `.trim()`, `.toLowerCase()`, `.includes()`, `.split()`, dan `.replace()` merupakan beberapa method yang sering digunakan karena berguna untuk membersihkan, mencari, memisahkan, dan mengubah data dari input pengguna.
