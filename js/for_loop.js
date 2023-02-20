for (let i = 1; i <= 5; i++) {
  console.log(`saya sedang berada di nomor ke - ${i}`);
}

for (let i = 10; i <= 100000; i *= 10) {
  console.log(i);
}

// Memanggil data Array menggunakan Foor Loop
let peopleName = ["Refsi", "Maulana", "Siregar"];

for (let i = 0; i < peopleName.length; i++) {
  console.log("Isi Array Indek Ke = " + [i], peopleName[i]);
}

// Nested Looping (Looping di dalam Looping)

let nama = "ABCDE";

for (let i = 1; i <= 5; i++) {
  console.log(`${i}. Soal Ke. ${i}`);
  for (let j = 0; j < nama.length; j++) {
    console.log(`   ${nama[j]}. Jawaban`);
  }
}

// Mendapatkan data dari Nested Array dengan Nested Loop
const studentRow = [
  ["Refsi", "Maulana", "Siregar"],
  ["Maulana", "Refsi", "Siregar"],
  ["Refsi", "Maulana", "Siregar"],
  ["Refsi", "Maulana", "Siregar"],
];

for (let i = 0; i < studentRow.length; i++) {
  console.log(`Seat ke ${i + 1}`);
  const row = studentRow[i];
  for (let j = 0; j < row.length; j++) {
    console.log(`   ${row[j]}`);
  }
}
