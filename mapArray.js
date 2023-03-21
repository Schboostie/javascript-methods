const keys = ['name', 'age', 'location'];
const values = ['John', 30, 'New York'];

const result = keys.reduce((obj, key, index) => {
  obj[key] = values[index];
  return obj;
}, {});

console.log(result); // Output: { name: "John", age: 30, location: "New York" }

/* In the above example, we define two arrays keys and values. We then use the reduce() method on the keys array to create a new object.

In each iteration of the reduce() method, we assign the corresponding value from the values array to the current key and return the modified object.

After the reduce() method finishes executing, the resulting object contains the mappings between the keys and values from the two arrays. 

Finally, we print out the resulting object using console.log().*/

//Use the reduce method to sum an array

const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers using reduce method
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

/*In the above example, we define an array numbers that contains five numbers. 

We then use the reduce() method on this array to compute the sum of all the numbers.

The reduce() method takes a callback function as its first argument. 

This callback function takes two arguments: accumulator and currentValue.

In each iteration of the reduce() method, the accumulator variable is initialized to the initial value provided as the second argument to the reduce() method (in this case, 0), and the currentValue variable is set to the current element of the array being iterated.

In the callback function, we simply add the accumulator and currentValue variables and return the result. 

The reduce() method then uses the result of each iteration as the accumulator for the next iteration until all elements of the array have been processed.

Finally, we print out the resulting sum using console.log().*/


