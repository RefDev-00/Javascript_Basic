// Tugas Kecil

/*
    1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
    2. Menentukan hari dari tanggal yang ada saat ini di PC Kalian

    answer :
*/

// soal no 1
let saldoAwal = prompt("Inputkan Saldo Anda");
let hargaBarang = prompt("Inputkan Harga Barang");
let sisaSaldo = saldoAwal - hargaBarang;

alert(
  `Maka saldo awal ${saldoAwal} di kurangi harga beli ${hargaBarang} adalah sebesar ${sisaSaldo}`
);

// soal no 2

let hari = new Date().getDay();

if (hari == 1) {
  hari = "Senin";
} else if (hari == 2) {
  hari = "Selasa";
} else if (hari == 3) {
  hari = "Rabu";
} else if (hari == 4) {
  hari = "Kamis";
} else if (hari == 5) {
  hari = "Jumat";
} else if (hari == 6) {
  hari = "Sabtu";
} else if (hari == 7) {
  hari = "Minggu";
}
alert(`Hari ini adalah hari ${hari}`);
