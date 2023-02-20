// challeng menebak angka dengan for, while

let targetNumber = prompt("Masukkan Angka Target Anda dari 1-100? ");

while (!targetNumber) {
  targetNumber = prompt("Ayo isi dong cuman 1-100");
}
console.log(targetNumber);

let tebakAngka = prompt("Masukkan Angka tebakan pertama mu ?");
let percobaan = 0;

while (tebakAngka !== targetNumber) {
  percobaan++;
  if (tebakAngka > targetNumber) {
    tebakAngka = prompt("Wah masih ketinggian ni");
  } else {
    tebakAngka = prompt(" :( Terlalu Rendah");
  }
}

alert(`Yeayyy tebakan kamu benar! dengan tebakan ${percobaan} kali`);
