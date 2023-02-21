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

function calculate(x,y) {
  const total = x + y;
  if (total > 10) {
    console.log("sesuai dengan prediksi dengan angka ", total);
  } else {
    console.log(total);
  }
}
calculate(2,9);
