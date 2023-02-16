// let username = prompt("Username");
// let password = prompt("Password");

// if (password.length >= 6) {
//   alert(`Username Anda : ${username} \nPassword Anda : ${password}`);
// } else {
//   alert("Password tidak valid");
// }

const gajiTertinggi = 3000000;
const gajiTerendah = 2000000;
let jabatan = prompt("Input jabatan");
const naikGaji = 500000;
const gajiManager = gajiTertinggi + naikGaji;
const gajiStaff = gajiTerendah + naikGaji;

if (jabatan == "Manager") {
  alert(
    `Gaji kamu dinaikin sebesar Rp.500.000 dan menjadi sebesar = Rp. ${gajiManager}`
  );
} else if (jabatan == "Staff") {
  alert(
    `Gaji kamu dinaikin sebesar Rp.500.000 dan menjadi sebesar = Rp. ${gajiStaff}`
  );
} else {
  alert("Rajin-rajin bekerja ya");
}
