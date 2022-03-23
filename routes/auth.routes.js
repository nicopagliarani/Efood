const router = require("express").Router();
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");
const bcrypt = require("bcrypt");
const { populate } = require("../models/User.model");
const {
  requireLogin,
  requireToBeLoggedOut,
} = require("../middlewares/route-guard");

router.get("/signup", (req, res, next) => {
  res.render("signup");
  return;
});
router.post("/signup", async (req, res) => {
  //console.log(req.body);
  try {
    const userExists = await User.exists({
      username: req.body.username,
    });
    if (userExists) {
      res.render("signup", { error: "Hey username already exists" });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hash,
      fullName: req.body.fullName,
    });

    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    res.render("signup", { error: "Some kind of error happened" });
  }
});

router.use("/login", requireToBeLoggedOut);
router.get("/login", (req, res, next) => {
  res.render("login");
  return;
});
router.post("/login", async (req, res) => {
  try {
    //console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    //console.log(user);
    const hashFromDb = user.password;
    const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
    //console.log(passwordCorrect ? "Yes" : "No");
    if (!passwordCorrect) {
      throw Error("Password incorrect");
    }
    req.session.currentUser = user;
    res.redirect("/profile");
  } catch (err) {
    res.render("login", { error: "Wrong username or password" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);

    res.redirect("/login");
  });
});

router.get("/saveRecipe", (req, res) => {
  res.render("/");
  return;
});

router.post("/saveRecipe", async (req, res) => {
  //console.log(req.body.title);
  const newRecipe = new Recipe({
    name: req.body.title,
    image: req.body.image,
    url: req.body.url,
  });

  //let currentUser = User.findById(req.session.currentUser.id);
  await newRecipe.save();
  const userId = req.session.currentUser._id;
  const user = await User.findById({ _id: userId });
  console.log(newRecipe._id);
  user.favoriteRecipes.push(newRecipe._id);
  await user.save();

  res.redirect("/search");
});

router.get("/favorites", async (req, res) => {
  const userId = req.session.currentUser._id;
  const user = await User.findById({ _id: userId }).populate("favoriteRecipes");
  showFavorites = user.favoriteRecipes;
  console.log(showFavorites);
  res.render("favorites", { showFavorites });
  return;
});


module.exports = router;
