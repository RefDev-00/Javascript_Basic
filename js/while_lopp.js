// Mempelajari While Dasar

let num = 0;

while (num < 10) {
  console.log(num);
  num++;
}
// hampir sama dengan for
for (let num = 0; num < 10; num++) {
  console.log(num);
}

// while dalam keputusan

const password = "pass123";

let login = prompt(`Input Password`);

// // nb: selama password belum benar maka akan mengulang minta input password kembali
while (login !== password) {
  login = prompt(`Incorrect, Silahkan input password dengan benar`);
}
alert("Password Correct");

// Menggunakan key "Break" pada while dan for
// -- fungsi break adalah untuk menghentikan jalannya program
//while

let inputText = prompt("Input Text bebas ....");

while (true) {
  inputText = prompt(inputText);
  if (inputText.toLowerCase() === "stop") break;
}
alert("Stop sampe sini ya");

// for

for (let number = 0; number <= 100; number++) {
  console.log(number);
  if (number == 50) break;
}
