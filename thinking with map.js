//Using map 


function greetDevelopers(list) {
  return list.map(dev => {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return dev;
  });
}

//Doing the below array manipulation with map!

/* 

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


function greetDevelopers(list) {
  let listArr = []
  let arrGreeting = []
  let finalArr = []
  // thank you for checking out my kata :)
  for (let i = 0; i<list.length;i++){
  arrGreeting.push(`Hi ${list[i].firstName}, what do you like most about ${list[i].language}`)
  listArr.push(list[i]) 
}
console.log(arrGreeting)
console.log(listArr) 

for (let j=0;j<list.length;j++){
list[j].greeting = arrGreeting[j]
}

console.log(list)
return list

  }
  
  
  greetDevelopers(list1)
  
  */



//Some methods on the above array with map 

//1. Map over the list1 array and create a new array with just the first names:

const firstNames = list1.map((developer) => developer.firstName);
console.log(firstNames); // Output: ['Sofia', 'Lukas', 'Madison']

//2. Map over the list1 array and create a new array with just the full names:

const fullNames = list1.map((developer) => `${developer.firstName} ${developer.lastName}`);
console.log(fullNames); // Output: ['Sofia I.', 'Lukas X.', 'Madison U.']


//3. Map over the list1 array and create a new array with just the countries:

const countries = list1.map((developer) => developer.country);
console.log(countries); // Output: ['Argentina', 'Croatia', 'United States']

//4. Map over the list1 array and create a new array with just the greetings:

const greetings = list1.map((developer) => `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`);
console.log(greetings); // Output: ['Hi Sofia, what do you like the most about Java?', 'Hi Lukas, what do you like the most about Python?', 'Hi Madison, what do you like the most about Ruby?']


function filterByKeys(arr, keys) {
  // Use the filter method to loop through the array and return a new array with filtered objects
  const filteredArray = arr.filter((obj) => {
    // Use the every method to check if all the keys in the keys array match the corresponding values in the object
    return keys.every((key) => obj[key]);
  });
  // Return the filtered array
  return filteredArray;
}
In this function, the every method is used to check if all the keys in the keys array match the corresponding values in the object. If all keys match, the object is included in the new array returned by filter.

To use this function with the list1 array provided, you could call it like this:


const filteredList = filterByKeys(list1, ['firstName', 'age']);
console.log(filteredList);
This would create a new array called filteredList that only includes objects where the firstName and age keys are present and have a truthy value. The output would be:


[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]
//In this case, all objects in the original array are included in the filtered array because all of them have both firstName and age keys with truthy values.




















