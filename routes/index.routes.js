const router = require("express").Router();
const axios = require("axios");
const async = require("hbs/lib/async");

/* GET home page */
router.get("/", async (req, res, next) => {
  res.render("index");
  // try {
  //   const { RecipeSearchClient } = require("edamam-api");
  //   const client = new RecipeSearchClient({
  //     appId: `${process.env.CLIENT_ID}`,
  //     appKey: `${process.env.CLIENT_SECRET}`,
  //   });
  //   console.log("here :", apiResponse.data);
  //   res.render("index");
  // } catch (err) {
  //   console.log(err);
  // }
});

router.post("/search", async (req, res) => {
  let searchName = req.body.name;
  searchName == "" ? (searchName = "chiken") : (searchName = req.body.name);
  let responseApi = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${searchName}&app_id=ba8593df&app_key=66b63b0b31b038fb4db02ba8d6f8f9da&random=false&field=image`
  );

  console.log(responseApi.data.hits[0].recipe);
});

module.exports = router;

//let pathToImg = responseApi.data.hits[0].recipe;
