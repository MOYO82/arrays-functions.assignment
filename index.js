// 1.	What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
// List 5 array methods that fall under each of them.

// Anwser:
// Mutation arrays method changes the array itself without returning a new array with the new changes while 
// Non-Mutation returns a completely new array with all the changes.

// mutation methods change object when is in use while on the other hand nonmutation does not 
//cause any change on the object.


// Examples of mutation array method
// (1) array.pop()
// (2) array.push()
// (3) array.splice()
// (4) array.shift()
// (5) array.unshift()

// Examples of nonmutation array method
// (1) array.concat()
// (2) array.indexOf()
// (3) array.include()
// (4) array.joint()
// (5) array.slice()

//question 2.	Here is an array of languages: 
//[‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// 1.	Add ‘Kotlin’ to the end of the array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.push('Kotlin');
console. log(languages)

// 2.	Add ‘Java’ after ‘Ruby’
let languages1 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages1.splice(3, 0, 'Java');
console. log(languages1)

// 3.	Remove the first item in the array
let languages2 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages2.shift();
console. log(languages2)

// 4.	Add ’Scala’ and ‘Swift’ to the beginning of the array
let languages3 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages3.unshift('Scala', 'Swift');
console. log(languages3)

// 5.	Replace ‘PHP’ with ‘Go’ and ‘Rust’
let languages4 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages4.splice(3, 1, 'Go','Rush')
console. log(languages4)
  

// 3.	What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit(fruit))
//answer
['apple', 'mango','orange']

// 4.	Write a function that accepts an array of numbers as an argument. Return the maximum
//value in the array. e.g., max([4, 5, 10, -2]) // maximum value is 10

//Answer
let arrMax = [4, 5, 10, -2];
function FindMaxNum(arr) {
    let maxNum = []
    for (let i =1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
         maxNum = arr[i]
        }
    }
    return maxNum;
}
console.log(FindMaxNum(arrMax))
//result [10]

//5.	Write a function called valTimesIndex which accepts an array of numbers and returns a new 
//array with each value multiplied by the index it is at in the array: e.g.,valTimesIndex([1,2,3]) // [0,2,6]
//valTimesIndex([5,10,15]) // [0,10,30]

//Answer 
const valTimesIndex = [5, 10, 15, 25, 30];
const newValTimesIndex = valTimesIndex.map((num, index) => {
    let result = num * index;
    return result;
})
console.log(newValTimesIndex)
//[0, 10, 30, 75, 120]