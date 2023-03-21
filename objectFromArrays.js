const keys = ["name", "age", "gender"];
const values = ["John", 30, "Male"];
const objects = [];

for (let i = 0; i < keys.length; i++) {
  const obj = {[keys[i]]: values[i]};
  objects.push(obj);
 
}

console.log(objects);

//A codewars solution is progress

function numObj(s){
  
let strArr = []
let charArr = []

function turnNumtoStr(){
for (let i = 0; i< s.length; i++ ){
//console.log(`${arr[i]}`)
strArr.push(`${s[i]}`)
}
console.log(strArr)
}

turnNumtoStr(s)

function findCharCode(){
for (let i = 0; i< s.length; i++ ){
charArr.push(String.fromCharCode(s[i]))
}
console.log(charArr)
}

findCharCode(s)

let newArrayFun = strArr.reduce((acc, curr, index) => {
  acc[curr] = charArr[index];
  return acc;
}, {});

console.log(newArrayFun);

let newArrayEnd = []

for (const key in newArrayFun) {
  if (newArrayFun.hasOwnProperty(key)) {
    const newObject = {};
    newObject[key] = newArrayFun[key];
    newArrayEnd.push(newObject);
  }
  console.log(newArrayEnd)
}

return newArrayEnd;

  
}

//The function is supposed to take an array of numbers and then return objects in an array with the number as a string in the key and then the charCode from that number as the value. I created two arrays mapped them and then separated the keys of one object into separate objects in a new array.
