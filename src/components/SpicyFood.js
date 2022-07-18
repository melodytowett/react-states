const SpicyFoods = [
  { id: 1, name: "buffalo wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "MApo Tofu", cuisine: "Suchuan", heatLevel: 5 },
];
let nextId = 3;
const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 3 },
  { name: "Enchaladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

function getNewRandomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[1] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

export { SpicyFoods, getNewRandomSpicyFood}