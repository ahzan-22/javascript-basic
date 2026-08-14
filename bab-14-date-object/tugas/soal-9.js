const tanggal = new Date(2026, 0, 1);

console.log(tanggal.getMonth());
console.log(tanggal.getDate());
console.log(tanggal.getFullYear());

// Output:
// 0
// 1
// 2026

// Penjelasan:
// Kenapa getMonth menghasilkan output 0? Karena dalam JavaScript, bulan dihitung dari 0 hingga 11,
//  di mana 0 adalah Januari, 1 adalah Februari, dan seterusnya hingga 11 yang merupakan Desember. Jadi ketika kita membuat objek Date dengan bulan 0, itu berarti kita sedang mempresentasikan bulan Januari.