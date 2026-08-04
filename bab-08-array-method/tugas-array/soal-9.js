let role = [
  "admin",
  "editor",
  "viewer",
];

let editor = role.includes("editor");
console.log("Apakah 'editor' ada?", editor);

let owner = role.includes("owner");
console.log("Apakah 'owner' ada?", owner);
