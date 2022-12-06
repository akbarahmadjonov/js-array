let elRes = document.querySelector(".head");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".inputArr");
let elFirst = document.querySelector(".toFirst");
let elLast = document.querySelector(".toLast");
let elBtn = document.querySelector(".btn");
let array = ["Hyundai", "BMW", "C10", "RANGE-ROVER", "Aston Martin", "Nissan"];

elRes.textContent = array;

elFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
  array.shift(elInput.value);
});
