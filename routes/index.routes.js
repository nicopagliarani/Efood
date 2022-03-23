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

//                      FLAGS
router.post("/usa", async (req, res) => {
  const results = await client.search({ query: "American" });
  const apiPath = results.hits;
  console.log("Inside API =>", apiPath);
  res.render("usa", { apiPath });
});

router.post("/indian", async (req, res) => {
  const results = await client.search({ query: "Indian" });
  const apiPath = results.hits;
  res.render("indian", { apiPath });
  return;
});

router.post("/italian", async (req, res) => {
  const results = await client.search({ query: "Italian" });
  const apiPath = results.hits;
  res.render("italian", { apiPath });
  return;
});

router.post("/mexican", async (req, res) => {
  const results = await client.search({ query: "Mexican" });
  const apiPath = results.hits;
  res.render("mexican", { apiPath });
  return;
});

router.post("/japanese", async (req, res) => {
  const results = await client.search({ query: "Japanese" });
  const apiPath = results.hits;
  res.render("japanese", { apiPath });
  return;
});
module.exports = router;
