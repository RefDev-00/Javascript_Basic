// fot of merupakan cara sederhana lagi dibandingkan menggunakan for biasa
// let animals = ["gajah", "semut", "sapi", "kecoa"];

// for (let animal of animals) {
//   console.log(animal);
// }

// contoh lain nested looping pada array

let students = [
  ["arif", "arga", "dia"],
  ["apa", "iya", "dia"],
  ["arif", "arga", "dia"],
];

for (let student of students) {
  for (let row of student) {
    console.log(row);
  }
}
