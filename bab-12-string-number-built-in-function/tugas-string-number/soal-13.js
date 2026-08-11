console.log(Number("42px"));
console.log(parseInt("42px"));

// Output:
// NaN
// 42

// Number() mengembalikan NaN karena "42px" bukan angka yang valid.
// parseInt() mengembalikan 42 karena ia mengambil angka dari awal string hingga menemukan karakter non-angka.