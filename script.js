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

username.addEventListener("input", function () {
    previewUsername.textContent = "Username: " + username.value;

    if (username.value.length > 0 && username.value.length < 4) {
        previewUsername.style.color = "red";
    } else {
        previewUsername.style.color = "green";
    }
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

const pesanPassword = document.querySelector("#pesan-password");

const pesanForm = document.querySelector("#pesan-form");
const btnDaftar = document.querySelector("#btn-daftar");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (event.submitter !== btnDaftar) {
        pesanForm.textContent = "Draft disimpan sementara (simulasi).";
        pesanForm.style.color = "gray";
        return;
    }

    if (password.value.length < 8 || !/\d/.test(password.value)) {
        pesanForm.textContent = "Password minimal 8 karakter dan mengandung angka.";
        pesanForm.style.color = "red";
        return;
    }

    pesanForm.textContent = "Registrasi " + nama.value + " berhasil divalidasi!";
    pesanForm.style.color = "green";
});

form.addEventListener("reset", function () {
    previewUsername.textContent = "";
    jumlahKarakter.textContent = "";
    pesanPassword.textContent = "";
    pesanForm.textContent = "";
    password.type = "password";
    togglePassword.textContent = "Tampilkan Password";
});
