const router = require("express").Router();
const { RecipeSearchClient } = require("edamam-api");
const { route } = require("./index.routes");

router.get("/profile", (req, res, next) => {
  res.render("profile");
});

router.post("/profile", (req, res) => {
  const client = new RecipeSearchClient({
    appId: process.env.CLIENT_ID,
    appKey: process.env.CLIENT_SECRET,
  });
});
