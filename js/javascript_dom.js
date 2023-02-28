// MANIPULATION DATA
document.title = "Refsi Maulana"; //document title (mengganti title yang ada di html menggunakan javascript)
const body = document.body; //variabel document body

// Membuat variabel untuk element h1 menggunakan textcontent
const h1 = document.createElement("h1");
h1.textContent = "Ini Belajar Javascript Dasar";

// Membuat variabel untuk element <p> menggunakan innerHTML
const paragraf = document.createElement("p");
paragraf.innerHTML = "<marquee>lorem ipsum dolor ya gays ya</marquee>";

// Membuat variabel untuk element h2 menggunakan innertext
const h2 = document.createElement("h2");
h2.innerText = "Ini judul javascript yang ke 2 ya gays ya";

//untuk memanggil variabel agar masuk ke dalam body HTML
body.append(h1);
body.append(paragraf);
body.append(h2);

// EVENT & STYLING

// membuat variabel untuk class yang ada di button HTML
const btnOKe = document.getElementById("btn_oke");
const btnCancel = document.querySelector(".btn_cancel");
// kalau mencari element ID menggunakan #
// kalau mencari element Class menggunakan .



const oriText = "Oke";
btnOKe.innerText = oriText;

const add_text = document.createElement("p");
add_text.textContent = "Disentuh";

btnOKe.style.border = "none";
btnOKe.style.fontSize = "30px";
btnOKe.style.color = "white";
btnOKe.style.background = "blue";

btnCancel.style.border = "none";
btnCancel.style.fontSize = "30px";
btnCancel.style.color = "white";
btnCancel.style.background = "blue";

function tekanTombolOke() {
  const newText = document.createElement("p");
  newText.textContent = "Ini udah disave bro";
  body.append(newText);
}

function tekanTombolCancel() {
  alert("Saya di cancel");
}

function gantiText() {
  btnOKe.textContent = "Cancel";
}

function textOri() {
  btnOKe.textContent = oriText;
}

function addText() {
  body.append(add_text);
}

function berubahWarna() {
  const addtext2 = document.createElement("p");
  addtext2.textContent = "Dilepas";
  addtext2.style.color = "red";
  body.append(addtext2);

  add_text.style.color = "blue";
}
