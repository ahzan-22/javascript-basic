const email = "budi.santoso@gmail.com";

const posisi = email.indexOf("@");
const username = email.slice(0, posisi);

console.log("Username:", username);