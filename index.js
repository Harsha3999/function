const data = require ("./foodList.json");
//list all the food items

const allFoodItems = function (data){
    return data;

};


// list all the food items with category vegetables
const vegetables = function (data){
     return data.filter((item) => item.category === "Vegetable");

};

//list all the fruits items with category fruits

const fruits = function(data){
    return data.filter ((item) => item.category === "Fruit");
    
};

// list all the protien items with category protien
const protein = function(data){
    return data.filter ((item)=> item.category === "Protein");
};

// list all the nuts items with category nuts
const nuts = function(data){
    return data.filter ((item)=> item.category === "Nuts");
};

//list all the grains items with grains nuts
const grains = function(data){
    return data.filter ((item)=> item.category === "Grain");
};

// list all the dairy items with dairy nuts
const dairy = function(data){
    return data.filter ((item)=> item.category === "Dairy");
};

// list all the food items calorie above 100
const calorieAbove100 = function(data){
    return data.filter ((item)=> item.calorie > 100);
};

// 
//list all the food items calorie below 100

const calorieBelow100 = function(data){
    return data.filter ((item)=> item.calorie < 100);
};

//list all the food items with highest protein content to lowest

const proteinHighToLow = function (data) {
    return data.sort((a, b) => b.protiens - a.protiens);
};

//list all the food items with lowest cab content to lowest

const cabLowtoHigh = function(data){
    return data.sort((a, b) => a.cab - b.cab);
};

// change the function name to check every function in the console.
console.log(allFoodItems(data));
console.log(vegetables(data));
console.log(fruits(data));
console.log(protein(data));
console.log(nuts(data));
console.log(grains(data));
console.log(dairy(data));
console.log(calorieAbove100(data));
console.log(calorieBelow100(data));
console.log(proteinHighToLow(data));
console.log(cabLowtoHigh(data));





