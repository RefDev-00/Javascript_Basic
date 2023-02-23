/*
 // Every => akan mengembalikan nilai boolean. true pada saat seluruh nilai yang ada pada
            suatu array memilki kriteria yang sama. false jika sebaliknya.

 // Some => mirip dengan every, tapih lebih flexibel. hasilnya akan true jika salah satu isi 
            dari array memiliki kriteria yang sama. akan false jika sama sekali tidak ada yang sesuai kriteria
*/

const numberik = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const aritmatika = numberik.some((nom) => nom < 5); // jika salah satu ada yang benar maka hasilnya TRUE
const aritmatika2 = numberik.every((nom) => nom < 5); // jika ada salah satu nya tidak benar maka hasilnya false
