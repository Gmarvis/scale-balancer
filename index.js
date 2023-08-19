const firstInput = document.getElementById('firstinput')
const secondInput = document.getElementById('secondinput')
// let inputFill = document.getElementById('inputFill')
const balance = document.querySelector('button')

const myArray = Array(20)
  .fill()
  .map(() => Math.floor(20 * Math.random()))
console.log(myArray)

// let sum = myArray.reduce(function(a, b){
//     return a + b
// })

balance.addEventListener('click', function () {
  // const newArr = JSON.parse(inputFill.value);

  for (let i = 0; i <= myArray.length; i++) {
    for (let j = 0; j <= myArray.length; j++) {
      if (+firstInput.value + myArray[i] === +secondInput.value + myArray[j]) {
        document.querySelector(
          'p'
        ).innerHTML = `${myArray[i]} and ${myArray[j]}`
      }
      // return;
      else if (
        +firstInput.value <= 0 ||
        +firstInput.value > 20 ||
        +secondInput.value <= 0 ||
        +secondInput.value > 20
      ) {
        document.querySelector('p').innerHTML =
          'numbers should be within the range of 1 and 20'
      }
    }
  }
})
