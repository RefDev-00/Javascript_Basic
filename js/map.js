/*
 fungsi methos map pada javascript adalah untuk membuat array baru dari memanggil sebuah function
pada setiap element Array.
*/

const buah = ["pisang", "mangga", "semangka", "durian"];
const buahBuahan = buah.map(function (fruit) {
  console.log(`${fruit.toUpperCase()} RASANYA ENAK`);
});

const artimatika = [20, 30, 40, 50, 60, 70];
const perkalian = artimatika.map(function (kali) {
  console.log(`${kali * 5}`);
});
