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
