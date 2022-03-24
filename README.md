# Efood
Description
Search Cooking Recipes you like.

User stories
404 - As a user I want to see a  404 page when I go to a page that doesn’t exist so that I know it was my fault.
login-signup - As a user I want to see a welcome page that gives me the option to either log in as an existing user, or sign up with a new account.
add-signup - As a user I want to sign up with my full information so that I can start seeing the recipes I'd like to prepare and eat.
homepage - As a user I want to see the adviced recipes and searching for a recipe that I like.In the navbar I can see my favourite recipes.
Search Recipes - As a user I want to see the search results with a preview image, the title, the ingredients, a button to save my favorites recipes in my page "Favorites", and a link which,when clicked, makes you go to an external webpage with the desired recipe.
Flag - As a user I want to see more information about the recipes by Country and when I click on a certain flag, I will be redirect in a page with all the recipes of that country.
Favorites - As a user I can see in the "Favorites" page all the recipe I saved, and click a button to be redirect to an external webpage with the desired recipe.
Meal Type - As a user, when I am in my homepage, I can click on the dropdown menu in the navbar to check all the meal types divided by hours of the day: "Breakfast, Lunch, Dinner, Snack, Teatime". When I click in one of the dropdown menu items, I will be redirect in a page with all the recipes of that Meal type. If I click the button to have more informations about the recipe, I will be redirect to an external webpage with the desired meal type.

API routes (back-end)

GET: /signup,/login,/saveRecipe,/favorites,/index,/searchRecipes,/profile,/vegan,/vegetarian,/teatime,/snack,/lunch,/search

POST:/signup,/login,/logout,/search,/mexican,/japanese,/italian,/indian,/french,/chinese,/british,/saveRecipe

HBS Pages
breakfast.hbs, british.hbs, chinese.hbs, dinner.hbs, error.hbs, favorites.hbs, french.hbs, index.hbs, indian.hbs, italian.hbs, japanese.hbs, layout.hbs, login.hbs, lunch.hbs, mexican.hbs, not-found.hbs, profile.hbs, SearchRecipes.hbs, signup.hbs, snack.hbs, teatime.hbs, usa.hbs, vegan.hbs, vegetarian.hbs

Models
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  favoriteRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

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


Heroku
https://efood-ironhack.herokuapp.com/

Slides
https://docs.google.com/presentation/d/1GZE8l028YJygDvhSTmeQ3GxuIYoEi2dOVOkKmOyGq28/edit?usp=sharing