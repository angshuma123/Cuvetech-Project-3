/*You task is to apply different arrays methods to get the desired following result.

- [ ]  list all the food items
- [ ]  list all the food items with category vegetables
- [ ]  list all the food items with category fruit
- [ ]  list all the food items with category protien
- [ ]  list all the food items with category nuts
- [ ]  list all the food items with category grains
- [ ]  list all the food items with category dairy
- [ ]  list all the food items with calorie above 100
- [ ]  list all the food items with calorie below 100
- [ ]  list all the food items with highest protien content to lowest
- [ ]  list all the food items with lowest cab content to highest

Note: You will need to create functions for different operations and you will pass the original data as the input to the function and the function should return the desired result*/

let File = require("./MyJSON");
//Printing all food items
let FoodItems = (File) => {
  return File.map((a) => a.foodname);
};
console.log(FoodItems(File));
//Printing all vegetable items
let Vegetables = (File) => {
  return File.filter((a) => {
    return a.category === "Vegetable";
  }).map((a) => a.foodname);
};
console.log(Vegetables(File));
//List of Fruits
let Fruits = (File) => {
  return File.filter((a) => {
    return a.category === "Fruit";
  }).map((a) => a.foodname);
};
console.log(Fruits(File));
//list all the food items with category protien
let Proteins = (File) => {
  return File.filter((a) => {
    return a.category === "Protein";
  }).map((a) => {
    return a.foodname;
  });
};
console.log(Proteins(File));
//list all the food items with category nuts
let Nuts = (File) => {
  return File.filter((a) => {
    return a.category === "Nuts";
  }).map((a) => a.foodname);
};
console.log(Nuts(File));

// list all the food items with category grains
let Grains = (File) => {
  return File.filter((a) => {
    return a.category === "Grain";
  }).map((a) => a.foodname);
};
console.log(Grains(File));
//list all the food items with category dairy
let Dairy = (File) => {
  return File.filter((a) => {
    return a.category === "Dairy";
  }).map((a) => a.foodname);
};
console.log(Dairy(File));
//list all the food items with calorie above 100
let HighCal = (File) => {
  return File.filter((a) => {
    return a.calorie > 100;
  }).map((a) => a.foodname);
};
console.log(HighCal(File));
//list all the food items with calorie below 100
let LowCal = (File) => {
  return File.filter((a) => {
    return a.calorie < 100;
  }).map((a) => a.foodname);
};
console.log(LowCal(File));
//list all the food items with highest protien content to lowest
let Descending = (File) => {
  return File.sort((a, b) => {
    return b.protiens - a.protiens;
  }).map((a) => a.foodname);
};
console.log(Descending(File));
//list all the food items with lowest cab content to highest
let Ascending = (File) => {
  return File.sort((a, b) => {
    return a.protiens - b.protiens;
  }).map((a) => a.foodname);
};
console.log(Ascending(File));
