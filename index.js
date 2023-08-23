let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let balance = document.querySelector("button");
const selectArray = document.getElementById("myarray");
const error = document.getElementById("error");

balance.addEventListener("click", function () {
  // get nunber from the input field an convert into an array
  let number = +selectArray.value;

  let digits = number.toString().split("").map(Number);
  const myArray = digits;
  // const newArr = JSON.parse(inputFill.value);

  // return;
  if (
    +firstInput.value <= 0 ||
    +firstInput.value > 20 ||
    +secondInput.value <= 0 ||
    +secondInput.value > 20
  ) {
    error.innerHTML = `<p>numbers should be within the range of 1 and 20</p>`;
    return;
  }

  if (+selectArray.value <= 0) {
    error.innerHTML = `<p>input weights to balance scale eg 1,2,3,4,5,6,7,8,9,0...</p>`;
    return;
  }
  error.innerHTML = ``;

  for (let i = 0; i <= myArray.length; i++) {
    for (let j = 0; j <= myArray.length; j++) {
      if (+firstInput.value + myArray[i] === +secondInput.value + myArray[j]) {
        document.querySelector(
          "p"
        ).innerHTML = `${myArray[i]} and ${myArray[j]}`;
        return;
      }
    }
  }
  document.querySelector("p").innerHTML = ``;
  error.innerHTML = `<p>Scale Imbalanced</p>`;
});
