/*
FILTER
=> function yang akan mengembalikan nilai array lagi yang sudah
dimanipulasikan sesuai dengan kriteria yang ditetapkan 
*/

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const angkaGanjil = angka.filter((n) => {
  return n % 2 === 1;
});

console.log(angkaGanjil);
