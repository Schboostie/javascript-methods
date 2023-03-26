//Example 1: Appending values of a single key to an array

const obj = {a: 1, b: 2, c: 3};
const arr = [];

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    arr.push(obj[key]);
  }
}

console.log(arr); // Output: [1, 2, 3]


// Example 2: Appending values of multiple keys to an array

const obj = {a: 1, b: 2, c: 3};
const arr = [];

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    if (key === 'a' || key === 'c') { // Only append values of keys 'a' and 'c'
      arr.push(obj[key]);
    }
  }
}

console.log(arr); // Output: [1, 3]




// Example 3: Using Object.values() to append all values to an array

const obj = {a: 1, b: 2, c: 3};
const arr = Object.values(obj);

console.log(arr); // Output: [1, 2, 3]


// Example 4: Using Object.keys() and forEach() to append values to an array

const obj = {a: 1, b: 2, c: 3};
const arr = [];

Object.keys(obj).forEach((key) => {
  arr.push(obj[key]);
});

console.log(arr); // Output: [1, 2, 3]





//Example 5: Using Object.entries() and map() to append values to an array


const obj = {a: 1, b: 2, c: 3};
const arr = Object.entries(obj).map(([key, value]) => value);

console.log(arr); // Output: [1, 2, 3]
