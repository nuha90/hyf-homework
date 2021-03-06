const express = require("express");
const app = express();

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

//1
const mealsRouter = require("./routes/meals.js");
app.use("/meals", mealsRouter);
//2
const cheap_meal_router = require("./routes/cheap-meals.js");
app.use("/cheap-meals", cheap_meal_router);
//3
const large_meals_router = require("./routes/large-meals.js");
app.use("/large-meals", large_meals_router);
//4
const mealRouter = require("./routes/meal.js");
app.use("/meal", mealRouter);
//5
const reservationsRouter = require("./routes/reservations.js");
app.use("/reservations", reservationsRouter);
// //6
const reservationRouter = require("./routes/reservation.js");
app.use("/reservation", reservationRouter);

module.exports = app;
