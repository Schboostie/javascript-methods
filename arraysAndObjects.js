let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};


//create each day as an object
const weeklyMealPlanArray = [];

for (const day in weeklyMealPlan) {
  const meals = weeklyMealPlan[day];
  const dayObject = Object.assign({}, { [day]: meals });
  weeklyMealPlanArray.push(dayObject);
}

console.log(weeklyMealPlanArray)


//return an arrau for specified keys

const mondayMeals = weeklyMealPlan.monday;
const tuesdayMeals = weeklyMealPlan.tuesday;
const wednesdayMeals = weeklyMealPlan.wednesday;

const combinedMeals = [...mondayMeals, ...tuesdayMeals, ...wednesdayMeals];

console.log(combinedMeals);


//return the first item in each of the days
const firstItemsArray = [];

for (const day in weeklyMealPlan) {
  const meals = weeklyMealPlan[day];
  const firstItem = meals[0];
  firstItemsArray.push(firstItem);
}

console.log(firstItemsArray);




