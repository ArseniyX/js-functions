// 1. check number
const isTwoNumEqual = (a, b) => a === b
console.log(1, isTwoNumEqual(3, 4))

// 2. in the order
const isTwoNumInOrder = (a, b) => a < b
console.log(2, isTwoNumInOrder(2, 3))

// 3. check if number even or not
const isNumEven = a => a % 2 === 0
console.log(3, isNumEven(3))

// 4. check if number even or not
const isNumOdd = a => a % 2 !== 0
console.log(4, isNumOdd(3))

// 5. return object of personal info
const returnObject = (firstName, lastName, age) => ({firstName, lastName, age})
console.log(5, returnObject("Arseniy", "X", 23));

// 6. from object to variable
const readObject = (obj) => obj.firstName
console.log(6, readObject({firstName: "Arseniy"}))

// 7. check name from 2 objects
const isNameTheSame = (obj, obj2) => obj.firstName === obj2.firstName
console.log(7, isNameTheSame({firstName: "Arseniy"}, {firstName: "Arseniy"}))

// 8. return function
const returnFunc = (obj1) => () => obj1.firstName
console.log(8, returnFunc({ firstName: "Arseniy" })());