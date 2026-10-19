console.log("Javascript berhasil dijalankan!");

const kampus = "PLAI Budi Mulia Dua";
let jumlahPendaftar = 5;

console.log("Kampus:", kampus);
console.log("Jumlah Pendaftar:", jumlahPendaftar);

jumlahPendaftar = jumlahPendaftar + 1;
console.log("Jumlah Pendaftar:", jumlahPendaftar);


const form = document.querySelector("#form-registrasi");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");

console.log(form);
console.log(username);
console.log(nama);

const statusHalaman = document.querySelector("#status-halaman");

statusHalaman.textContent = "Form registrasi siap digunakan."
statusHalaman.style.color = "green";

const previewUsername = document.querySelector("#preview-username");

username.addEventListener("input", function() {
    previewUsername.textContent = "Username: " + username.value;
});

console.log(previewUsername);

const jumlahKarakter = document.querySelector("#jumlah-karakter");

password.addEventListener("input", function(){
    jumlahKarakter.textContent = "Jumlah Karakter: " + password.value.length; 
});

const togglePassword = document.querySelector("#toggle-password")

togglePassword.addEventListener("click", function(){
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Sembunyikan Password";
    } else {
        password.type = "password";
        togglePassword.textContent = "Tampilkan Password"
    }
});