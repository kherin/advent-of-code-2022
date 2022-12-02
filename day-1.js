const fs = require("fs");
const path = require("path");

// default values
let calorieTotalList = [];
let maxCalorieTotal = 0;
let maxCalorieElf = 1;

fs.readFile(path.join(__dirname, "assets/data-1.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log("Failed to read file. Error: ", err);
    return;
  }

  const caloriesPerElf = data.split("\n\n");
  caloriesPerElf.map((calories, elf) => {
    const groupedCalories = calories
      .split(/\n/)
      .map((calorie) => Number.parseInt(calorie))
      .reduce((sum, current) => (sum += current), 0);

    calorieTotalList.push(groupedCalories);
    if (groupedCalories > maxCalorieTotal) {
      maxCalorieTotal = groupedCalories;
      maxCalorieElf = elf;
    }
  });
  console.log("Sum is: ", maxCalorieTotal);
  console.log("Elf is: ", maxCalorieElf);

  const reversedCalorieTotalList = calorieTotalList.sort((a, b) => b - a);

  const firstTotal = reversedCalorieTotalList[0];
  const secondTotal = reversedCalorieTotalList[1];
  const thirdTotal = reversedCalorieTotalList[2];

  console.log("1st: ", firstTotal);
  console.log("2nd: ", secondTotal);
  console.log("3rd: ", thirdTotal);
  console.log("First 3 totals: ", firstTotal + secondTotal + thirdTotal);
});
