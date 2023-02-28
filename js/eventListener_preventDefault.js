/*
    *preventDefault()
    -> sebuah method yang befungsi untuk mencegah terjadinya event bawaan dari sebuah DOM.

    *addEventListener()
    -> sebuah method yang berfungsi untuk membuat event (click, change, mouseout, dll) 
        untuk keperluan manipulasi DOM
*/

const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const notesValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = notesValue;
  list.append(newList);
  input.value = " ";
});
