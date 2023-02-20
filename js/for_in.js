// hampir sama dengan for of tapi terbatas

let studentScore = {
  Refsi: 100,
  Angga: 80,
  citra: 100,
};

for (let student in studentScore) {
  console.log(`nama student : ${student} dengan skor ${studentScore[student]}`);
}

let total = 0;
let scores = Object.values(studentScore); // untuk merubah tipe objek ke array

for (let totalScore of scores) {
  total += totalScore;
}
console.log(total / scores.length);
