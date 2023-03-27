const originalArray = [1, 2, 3, 4, 5];
const multipliedArray = originalArray.map(element => element * 2);
console.log(multipliedArray); // [2, 4, 6, 8, 10]

const originalArray = ["apple", "banana", "cherry"];
const uppercaseArray = originalArray.map(element => element.toUpperCase());
console.log(uppercaseArray); // ["APPLE", "BANANA", "CHERRY"]


const originalArray = [{name: "John", age: 30}, {name: "Mary", age: 25}, {name: "Peter", age: 40}];
const nameArray = originalArray.map(element => element.name);
console.log(nameArray); // ["John", "Mary", "Peter"]


const originalArray = [1, 2, 3, 4, 5];
const filteredArray = originalArray.map(element => {
  if (element % 2 === 0) {
    return element;
  }
});
console.log(filteredArray); // [undefined, 2, undefined, 4, undefined]



const originalArray = [{name: "John", age: 30}, {name: "Mary", age: 25}, {name: "Peter", age: 40}];
const selectedPropertiesArray = originalArray.map(element => {
  return {
    name: element.name,
    age: element.age
  };
});
console.log(selectedPropertiesArray); // [{name: "John", age: 30}, {name: "Mary", age: 25}, {name: "Peter", age: 40}]




// More advanced examples

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.map(element => element.flat());
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]


const originalArray = [{name: "John", age: 30}, {name: "Mary", age: 25}, {name: "Peter", age: 40}];
const calculatedPropertiesArray = originalArray.map(element => {
  return {
    name: element.name,
    age: element.age,
    birthYear: new Date().getFullYear() - element.age
  };
});
console.log(calculatedPropertiesArray);
// [{name: "John", age: 30, birthYear: 1993}, {name: "Mary", age: 25, birthYear: 1998}, {name: "Peter", age: 40, birthYear: 1983}]


const originalArray = [{name: "John", age: 30}, {name: "Mary", age: 25}, {name: "Peter", age: 40}];
const calculatedPropertiesArray = originalArray.map(element => {
  return {
    name: element.name,
    age: element.age,
    birthYear: new Date().getFullYear() - element.age
  };
});
console.log(calculatedPropertiesArray);
// [{name: "John", age: 30, birthYear: 1993}, {name: "Mary", age: 25, birthYear: 1998}, {name: "Peter", age: 40, birthYear: 1983}]


let originalArray = [1, 2, 3, 4, 5];
originalArray = originalArray.map((element, index, array) => {
  if (index === 2) {
    array[index + 1] = 999;
  }
  return element * 2;
});
console.log(originalArray); // [2, 4, 6, 999, 10]


const originalArray = ["apple", "banana", "cherry"];
const propertyName = "fruits";
const newArray = originalArray.map(element => {
  const obj = {};
  obj[propertyName] = element;
  return obj;
});
console.log(newArray);
// [{fruits: "apple"}, {fruits: "banana"}, {fruits: "cherry"}]



