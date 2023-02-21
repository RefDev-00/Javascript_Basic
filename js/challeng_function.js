// /*
// TUGAS :
// 1. MEMBUAT PERHITUNGAN MATEMATIKA
//     - LUAS LINGKARAN
//     - LUAS SEGITIGA
//     - LUAR PERSEGI PANJANG
//     - LUAS JAJARGENJANG

// 2. MENGHITUNG TOTAL GAJI YANG DI DAPAT
// DALAM SATU BULAN DENGAN INPUT MANUAL :
//     - nama karyawan
//     - gaji perhari
//     - jumlah hari masuk kerja
// */

// // Tugas 1
// // Rumus L = Pi x r x r
// const Pi = 3.14;
// const r1 = prompt("Input jari jari lingkaran 1");
// const r2 = prompt("Input jari-jari lingkaran 2");
// const totalLuasLingkaran = alert(`Luas Lingkaran adalah ${Pi * r1 * r2}`);

// // Tugas 2
// // Rumus L = 1/2 x a x t
// const setengah = 1 / 2;
// const alas = prompt("Input Alas Segitiga");
// const tinggi = prompt("Input Tinggi Segitiga");
// const totalLuasSegitiga = alert(
//   `Luas Lingkaran segitiga adalah ${setengah * alas * tinggi}`
// );

// // Tugas 3
// // Rumus L = P x L
// const Panjang = prompt("Input Panjang ");
// const Lebar = prompt("Input Lebar ");
// const totalLuasPersegiPanjang = alert(
//   `Luas Persegi Panjang adalah ${Panjang * Lebar}`
// );

// // Tugas 4
// // Rumus L = 2 x (a + b)
// const luas = prompt("Input luas ");
// const a = prompt("Input a ");
// const b = prompt("Input b ");
// const totalLuasJajarGenjang = luas * (a + b);
// alert(totalLuasJajarGenjang);

// Tugas 5
// Menghitung Gaji Karyawan dan percentasi kenaikan gaji

function employeeSalary() {
  const gajiLama = 2000000;
  const gajiPerhari = 1000000;
  let hariKerja = prompt(
    `Input jumlah hari kerja hasil akan di kalikan dengan gaji perhari anda senilai Rp. ${gajiPerhari}`
  );
  const totalGaji = gajiPerhari * hariKerja;

  if (totalGaji > gajiLama) {
    alert(`Gaji Kamu naik dari bulan lalu sebesar Rp.${totalGaji}`);
  } else if (totalGaji < gajiLama) {
    alert(`Gaji Kamu turun dari bulan lalu sebesar Rp.${totalGaji}`);
  } else {
    alert(`Gaji Kamu masih sama dari bulan lalu sebesar Rp.${totalGaji}`);
  }
  alert(`Gaji Lama sebesar Rp.${gajiLama}`);
}
employeeSalary();
