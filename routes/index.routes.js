const router = require("express").Router();
const axios = require("axios");
const async = require("hbs/lib/async");
const { RecipeSearchClient } = require("edamam-api");
//hello
/* GET home page */
router.get("/", async (req, res, next) => {
  res.render("index");
});

router.post("/search", async (req, res) => {
  //Calling the API
  const client = new RecipeSearchClient({
    appId: process.env.CLIENT_ID,
    appKey: process.env.CLIENT_SECRET,
  });

  const results = await client.search({ query: req.body.search }); //Search through the api
  console.log(results.hits); //See where we are in the API

  const ApiValues = results.hits; //Storing or position
  res.render("SearchRecipes", { ApiValues }); //Send the api to the hbs to iterate over
});

module.exports = router;
