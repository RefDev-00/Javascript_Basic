/* 
Perulangan Foreach biasanya digunakan untuk mencetak item di dalam array.
perulangan ini termasuk dalam perulangan counted loop, karena jumlah perulangannya akan ditentukan oleh panjang dari array.
*/

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el * el);
  }
});

const animes = [
  {
    title: "Naruto",
    rating: 84,
  },
  {
    title: "Jijutsu Khaisen",
    rating: 90,
  },
  {
    title: "One Piece",
    rating: 70,
  },
  {
    title: "Doraemon",
    rating: 99,
  },
];

animes.forEach(function (anime) {
  if (anime.rating > 80) {
    console.log(`${anime.title} - ${anime.rating}`);
  }
});
