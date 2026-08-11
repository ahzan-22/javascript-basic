const username = "   BUDI123   ";

const usernameBersih = username.trim().toLowerCase();
console.log("Username bersih:", usernameBersih);

if (usernameBersih.length >= 5) {
    console.log("Username valid.");
} else {
    console.log("Username terlalu pendek.");
}