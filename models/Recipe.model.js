const { Schema, model } = require("mongoose");
const User = require("./User.model");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  description: {
    type: String,
  },
  url: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
