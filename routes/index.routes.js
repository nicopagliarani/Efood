const router = require("express").Router();
const express = require("express");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/profile", (req, res, next) => {
  res.render("profile");
});


module.exports = router;
