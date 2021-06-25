/* Arrow functions */

const add = primary => primary + primary


// /* Basic arrow function syntax with one argument and an expression in the body */

// // 1. Remove the word "function" and place arrow between 
// //    the argument and opening body bracket

// const add = (primary) => {
//   const answer = primary + primary
//   return answer
// }



// // 2. Remove the body brackets and word "return" -- the return is implied.

// const add = (primary) => primary + primary


// // 3. Remove the argument parentheses

// const add = primary => primary + primary


// /* With one or more arguments we need to have parenthesis around arguments */

// const add = () => console.log('hey')
// const add = (primary, secondary) => primary + secondary



/* If the body requires additional lines of processing, 
   we need to add curly braces around function body and keyword return */



const products = [
  { name: "Clean Code", price: 33, currency: '$', almostSoldOut: true},
  { name: "Seven habits", price: 14, currency: '$', almostSoldOut: true},
  { name: "Harry Potter", price: 15, currency: '$', almostSoldOut: false}
]

const students = ["Waheed", "Marju", "Yasmin"]

for(let i = 0; i < students.length; i++){
  const student = students[i]
  console.log(student)
}

const logItem = (item)=>{
  console.log(item)
}

students.forEach(logItem)


/* Use forEach method to alert the user for every item that is almost sold out*/

const alertIfAlmostSoldOut = (product, index) => {
  if(product.almostSoldOut){
    // alert(`${index + 1} - This product is almost sold out`)
  }   
}

products.forEach(alertIfAlmostSoldOut) 

/* Use map method to make a new array where price and currency are in British pound */

const productsInPounds = products.map((product) => {
  return {
    name: product.name, 
    almostSoldOut: product.almostSoldOut, 
    currency: '£', 
    price: product.price * 0.72
  }
})


/* Use filter method to make a new array which only has products,
    where price is less than 15 dollars
*/

const productsCostingLessThan15 = products.map((product) => {
  return product.price < 15
})


/* Spread operator */

/* Make a copy of the products array, add another product */


/* Make a copy of the first product, change the name value */



/* Destructuring */

/* Save the first products name, price, currency and almostSoldOut into variables of the same name */


/* Make a copy of the first product, change the name value */













