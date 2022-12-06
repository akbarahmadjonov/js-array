//* Selected selectors
var elForm = document.querySelector(".form");
var elArr = document.querySelector(".arr");
var elInput1 = document.querySelector(".input1");
var elInput2 = document.querySelector(".input2");
var elStartBtn = document.querySelector(".st-btn");
var elEndBtn = document.querySelector(".end-btn");

//* Car names
var cars = ["KIA", " Tesla", " McLaren", " Ferrari", " Lamborghini"];

cars.length === 0
  ? (elArr.textContent = "Mashinalar tugadi:(")
  : (elArr.textContent = cars);
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  elArr.textContent = cars;

  if (elInput1.value !== "") {
    cars.unshift(elInput1.value);
  }
  if (elInput2.value !== "") {
    cars.push(elInput2.value);
    return;
  }
});

//* Thats
elStartBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  cars.shift();

  elArr.textContent = cars;
  return;
});

elEndBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  cars.pop();

  elArr.textContent = cars;
  return;
});
