const express = require("express");
const app = express();

//joi is for server side validation
const joi = require("joi");

//for our file uploads
const multer = require("multer");

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

//for cross domain
const cors = require("cors");
app.use(cors());

//my recipe list
let recipes = [
  {
    _id: 1,
    name: "Banana Bread",
    description: "Extra soft and bannanny",
    img: "images/banana-bread.jpg",
    rating: 4,
    ingredients: [
      "3 very ripe bananas, (medium/large)",
      "½ cup unsalted butter, (8 Tbsp) at room temperature",
      "3/4 cup granulated sugar",
      "2 large eggs, lightly beaten",
      "1 ½ cups all-purpose flour",
      "1 tsp baking soda",
      "½ tsp salt",
      "½ tsp vanilla extract",
      "1 cup walnuts",
      "½ cup raisins",
    ],
  },
  {
    _id: 2,
    name: "Chocolate Chip Cookies",
    img: "images/chocolate-chip.jpg",
    description: "Very chocolately cookies",
    ingredients: [
      "1 cup salted butter softened",
      "1 cup granulated sugar",
      "1 cup light brown sugar packed",
      "2 teaspoons pure vanilla extract",
      "2 large eggs",
      "3 cups all-purpose flour",
      "1 teaspoon baking soda",
      "½ teaspoon baking powder",
      "1 teaspoon sea salt",
      "2 cups chocolate chips (14 oz)",
    ],
  },
  {
    _id: 3,
    name: "Vanilla Cake",
    description: "Real vanilla bean in a cake",
    img: "images/vanilla-cake.jpg",
    ingredients: [
      "3 and 2/3 cups (433g) cake flour (spoon & leveled)",
      "1 teaspoon salt",
      "2 teaspoons baking powder",
      "3/4 teaspoon baking soda",
      "1 and 1/2 cups (345g) unsalted butter, softened to room temperature",
      "2 cups (400g) granulated sugar",
      "3 large eggs + 2 additional egg whites, at room temperature*",
      "1 Tablespoon pure vanilla extract (yes, Tbsp!)",
      "1 and 1/2 cups (360ml) buttermilk, at room temperature*",
    ],
  },
];

//show our index file when they go to the root of our website
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(3000, () => {
  console.log("I'm listening");
});
