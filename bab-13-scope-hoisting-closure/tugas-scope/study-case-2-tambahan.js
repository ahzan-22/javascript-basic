function buatSession(username) {
  let isLogin = true;

  return {
    cekStatus() {
      console.log("User:", username);
      console.log("Status:", isLogin ? "Login" : "Logout");
      console.log();
    },

    logout() {
      isLogin = false;
      console.log("Logout berhasil.");
      console.log();
    },

    login() {
      isLogin = true;
      console.log("Login berhasil.");
      console.log();
    }
  };
}

const sessionBudi = buatSession("budi123");

sessionBudi.cekStatus();

sessionBudi.logout();

sessionBudi.cekStatus();

const sessionAni = buatSession("ani456");

sessionBudi.logout();

sessionBudi.cekStatus();
sessionAni.cekStatus();

console.log("isLogin:", sessionBudi.isLogin);