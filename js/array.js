// Materi dasar Array Javascript

// ===============================================
// Bentuk Array 1
let arraySaya = [];

arraySaya[0] = "Nol";
arraySaya[1] = "Satu";
arraySaya[2] = "Dua";
arraySaya[3] = "Tiga";
arraySaya[4] = "Empat";

console.log(arraySaya);
// ===============================================
// Bentuk Array 2

let arraySaya2 = ["Nol", "Satu", "Dua", "Tiga", "Empat"];
console.log(arraySaya2);

// ===============================================

// Bentuk Array 3
let arraySaya3 = new Array();
arraySaya3[0] = "Nol";
arraySaya3[2] = "Dua";

console.log(arraySaya3);
// Hasil dari contoh ke tiga array tersebut hasil sama saja

// ===============================================

// fungsi Method Array
let arrayFood = ["🍕", "🍔", "🍟", "🌭", "🍿"];
const junkFood = arrayFood.includes("🍔"); // fungsi mencari apakah makanan tersebut ada atau tidak

// console.log(posisiFood);

//logika dasar
if (junkFood == true) {
  const posisiFood = arrayFood.indexOf("🍔"); // fungsi mencari di posisi ke index berapa makanan tersebut
  const firstFood = arrayFood[0]; // Mencari data makanan pertama
  console.log(`Makanan Pertama adalah ${firstFood}`); // Menampilkan makanan pertama
  const endFood = arrayFood[arrayFood.length - 1]; // Mencari data makanan terakhir
  console.log(`Makanan terakhir adalah ${endFood}`); // Menampilkan makanan terakhir
  const indexBefore = posisiFood + 1; // mencari tahu makanan sebelum burger
  const before = arrayFood[indexBefore]; // menampilkan data array makanan sebelum burger
  const indexAfter = posisiFood - 1; // mencari tahu makanan sesudah burger
  const after = arrayFood[indexAfter]; // menampilkan data array makanan sesudah burger
  console.log(`Posisi sebelum makanan burger adalah buah ${before}`);
  console.log(`Posisi sesudah makanan burger adalah buah ${after}`);

  console.log(
    `Posisi makanan burger berada pada posisi index ke ${posisiFood}`
  );
} else {
  console.log("Tidak tau di posisi ke berapa");
}

// ===============================================

// KEY Array
// Custom key index Array
const keyArray = ["Burger", "Pizza", "Potato"];

keyArray["Burger"] = "🍔";
keyArray["Pizza"] = "🍕";
keyArray["Potato"] = "🍟";

console.log(keyArray);

// ===============================================
// Kopi Array

// jika ada original data array yang tidak boleh di ubah2 tetapi kita ingi memodifikasinya maka megguanakan kopi value
const originalArray = ["🍕", "🍔", "🍟", "🌭", "🍿"];
const kwArray = [...originalArray];
console.log({ originalArray });
console.log({ kwArray });

kwArray[0] = "🥓";

// Berbagai isi data dalam array
const arrayGadoGado = [
  "Tempe", // data string
  "Tahu", // data string
  { kuah: "diaduk" }, // data objek (key : value)
  {
    // data objek dan terdapat function
    sambel: function () {
      console.log("diaduk dulu baru makan");
    },
  },
  [("enak", "tidak enak")], // data array di dalam array
];

console.log(arrayGadoGado[3].sambel);

// ===============================================

const dataSiswa = [
  {
    names: "Refsi Maulana Siregar",
    number: 8020170342,
    major: "Teknik Informatika",
  },
  {
    names: "Wahyu Rahmadi",
    number: 8020170343,
    major: "Teknik Komputer",
  },
  {
    names: "Arif Kurniawan",
    number: 8020170344,
    major: "Sistem Informasi",
  },
];

dataSiswa.map((values, index) => console.log(values)); // memapping data
dataSiswa.map((values, index) => console.log(values.names)); // memapping data tampil hanya nama
dataSiswa // sorting data 
  .sort((a, b) => a.number - b.number)
  .map((values) => console.log(values));
