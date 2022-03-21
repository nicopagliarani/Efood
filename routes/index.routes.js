const router = require("express").Router();
const axios = require("axios");
const async = require("hbs/lib/async");
const { RecipeSearchClient } = require("edamam-api");

/* GET home page */
router.get("/", async (req, res, next) => {
  res.render("index");
});

// const recipeApi = new RecipeApi({
//   clienId: process.env.CLIENT_ID,
//   clienSecret: process.env.SESSION_SECRET,
// });

const client = new RecipeSearchClient({
  appId: process.env.CLIENT_ID,
  appKey: process.env.SESSION_SECRET,
});

router.post("/search", async (req, res) => {
  const results = await client.search({ query: "beef" });
  // let searchName = req.body.name;
  // searchName == "" ? (searchName = "beef") : (searchName = req.body.searchBar);
  // let responseApi = await axios.get(
  //   `https://api.edamam.com/api/recipes/v2?type=public&q=${searchName}&app_id=ba8593df&app_key=66b63b0b31b038fb4db02ba8d6f8f9da&random=false&field=image`
  // );
  console.log(results);
  //console.log(responseApi.data.hits[0]._links);
});

module.exports = router;

//let pathToImg = responseApi.data.hits[0].recipe;
