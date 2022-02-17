let gb = 0
let cc = 0
let sugar = 0 

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb")
const gbMinusBtn = document.querySelector("#minus-gb")

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

gbPlusBtn.addEventListener("click", function () {
 gb++

}); 
console.log('Gingerbread + gbPlusBtn') 

gbMinusBtn.addEventListener("click", function (e) {
  if (gb > 0) {
    gb--
  }
  
});
console.log('Gingerbread - gbMinusBtn') 

const ccPlusBtn = document.querySelector("#add-cc")
const ccMinusBtn = document.querySelector("#minus-cc")

ccPlusBtn.addEventListener("click", function () {
    cc++
   
   }); 
   console.log('ChoclateChip + ccPlusBtn') 

   ccMinusBtn.addEventListener("click", function (e) {
    if (cc > 0) {
      cc--
    }
    
  });
  console.log('ChoclateChip - ccMinusBtn') 

const sugarPlusBtn = document.querySelector("#add-sugar")
const sugarMinusBtn = document.querySelector("#minus-sugar")

sugarPlusBtn.addEventListener("click", function () {
    sugar++
   
   }); 
   console.log('SugarSprinkle + sugarPlusBtn') 

   ccMinusBtn.addEventListener("click", function (e) {
    if (sugar > 0) {
      sugar--
    }
    
  });
  console.log('SugarSprinkle - sugarMinusBtn') 


   
let yourName = "Jolanda Smith"
console.log(yourName) 
const credit = document.querySelector('#credit') 
credit.textContent = `Created by ${yourName}` 
console.log('credit') 