/*
SetTimeOut & SetInterval
=> callback function yang bukan berasal dari array. 
fungsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan

=> settimeout - proses akan dieksekusi sesuai waktu yang ditentukan
=> setinterval - proses akan dieksekusi secara berulang

*/

// setTimeOut
console.log("Halo...");
setTimeout(() => {
  console.log("Masih disana gak?");
}, 5000);
console.log("Saya pergi ya ...");

// setInterval
const interval = setInterval(() => {
  console.log(Math.random());
}, 2000);
