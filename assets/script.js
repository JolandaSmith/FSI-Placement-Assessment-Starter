let gb = 0
let cc = 0
let sugar = 0 

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb")
const gbMinusBtn = document.querySelector("#minus-gb")

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

gbPlusBtn.addEventListener("click", function () {
  gb++
let UpdateQuantity = +1
UpdateQuantity = +1 
}); 
console.log('Gingerbread + gbPlusBtn') 

gbMinusBtn.addEventListener("click", function (e) {
  if (gb > 0) {
    gb--
  }
  let UpdateQuantity = -1
  UpdateQuantity = -1  
});
console.log('Gingerbread - gbMinusBtn') 

let yourName = "Jolanda Smith"
console.log(yourName) 
const credit = document.querySelector('#credit') 
credit.textContent = `Created by ${yourName}` 
console.log('credit') 