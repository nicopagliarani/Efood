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
  res.render("index");
  return;
});

router.get("/search", (req, res) => {
  res.render("SearchRecipes");
  return;
});

router.post("/search", async (req, res) => {
  //Calling the API
  const search = await client.search({ query: req.body.search }); //Search through the api

  //console.log(search.hits); //See where we are in the API
  //const recipes = search.hits.recipe.ingredients;
  const ApiValues = search.hits; //Storing or position
  //console.log("the name :", ApiValues);
  res.render("SearchRecipes", { ApiValues });
  return; //Send the api to the hbs to iterate over
});

router.post("/usa", async (req, res) => {
  const results = await client.search({ query: 'American' });
  const apiPath = results.hits;
  console.log("Inside API =>", apiPath);
  res.render("usa", {apiPath});
});

router.post("/indian", async (req, res) => {
  //const results = await client.search({ query: 'Indian' });
  //const ApiValues = search.hits;
  res.render("indian");
  return;
});

router.post("/italian", async (req, res) => {
  const results = await client.search({ query: 'Italian' });
  //const ApiValues = search.hits;
  res.render("italian");
  return;
});

router.post("/mexican", async (req, res) => {
  //const results = await client.search({ query: 'Mexican' });
  //const ApiValues = search.hits;
  res.render("mexican");
  return;
});

module.exports = router;
