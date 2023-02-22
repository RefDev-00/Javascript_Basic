// Membuat function di Javascript

// Cara 1 Standar Function
// function menggunakan argument(parameter)
function addName(firstname, lastname) {
  console.log(firstname, lastname);
}

// Cara 2 Keyword New Function
const sum1 = Function("x", "y", "console.log(x+y)");

// Cara 3 menggunakan Arrow Function
const sum2 = (x, y) => {
  console.log(x + y);
};

addName("Refsi Maulana", "Siregar");
sum1(2, 3);
sum2(5, 8);

function calculate(x, y) {
  const total = x + y;
  if (total > 10) {
    console.log("sesuai dengan prediksi dengan angka ", total);
  } else {
    console.log(total);
  }
}
calculate(2, 9);

// membuat pengejaan dengan function javascript
let bahasaPemrograman = "Dart";

function basicLanguage() {
  let bahasaPemrograman = prompt("Input Bahasa Pemrograman");
  for (let i = 0; i < bahasaPemrograman.length; i++) {
    const row = bahasaPemrograman[i];
    if (bahasaPemrograman.toLowerCase() == "dart") {
      alert(`Huruf ke ${i + 1} ${row}`);
    } else {
      alert(bahasaPemrograman);
    }
  }
  alert(`maka hasilnya adalah huruf "${bahasaPemrograman}"`);
}

basicLanguage(bahasaPemrograman);
console.log(bahasaPemrograman);

// Function Expression
// membuat fungsi menjadi lebih ringkas
const hasilPerkalian = function (nilaiA, nilaiB) {
  return nilaiA * nilaiB;
};
console.log(hasilPerkalian(2, 3));

// Function di dalam functiom
function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  const nilai = Math.floor(Math.random() * 6) + 1;
  console.log(`Hasil Dari lempar dadu menggunakan 2 function adalah ${nilai}`);
}

duaKali(lemparDadu);

// Method
// sebuh function yang ada di dalam objek

const Aritmatika = {
  perkalian: function (x, y) {
    return x * y;
  },
};

console.log(
  `Hasil dari method perkalian adalah ${Aritmatika.perkalian(10, 10)}`
);
