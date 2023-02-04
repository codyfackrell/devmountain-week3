// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function addToZero(arr) {
    for(i = 0; i < arr.length; i++) {
      for(z = 0; z < arr.length; z++) {
        if(i !== z) {
            if(arr[i] + arr[z] === 0)
            return true
        }
      }
    }
  return false
}

console.log(addToZero(array))