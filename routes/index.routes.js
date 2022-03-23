const router = require("express").Router();
const axios = require("axios");
const async = require("hbs/lib/async");
const { RecipeSearchClient } = require("edamam-api");
//hello
/* GET home page */

const client = new RecipeSearchClient({
  appId: process.env.CLIENT_ID,
  appKey: process.env.CLIENT_SECRET,
});

router.get("/", async (req, res, next) => {
  res.render("index"); return
});

router.get("/search", (req, res) => {
  res.render("SearchRecipes"); return
});

router.post("/search", async (req, res) => {
  //Calling the API
  const search = await client.search({ query: req.body.search }); //Search through the api

  //console.log(search.hits); //See where we are in the API
  //const recipes = search.hits.recipe.ingredients;
  const ApiValues = search.hits; //Storing or position
  //console.log("the name :", ApiValues);
  res.render("SearchRecipes", { ApiValues }); return //Send the api to the hbs to iterate over
});

router.get("/usa", (req, res) => {
  res.render("usa"); return
});

router.post("/usa", async (req, res) => {
  //const results = await client.search({ cuisineType: "American" }); //Search through the api
  //console.log(results.hits); //See where we are in the API
});

router.get("/indian", (req, res) => {
  res.render("indian"); return
});

router.get("/italien", (req, res) => {
  res.render("italien"); return
});

router.get("/mexican", (req, res) => {
  res.render("mexican"); return
});

module.exports = router;
