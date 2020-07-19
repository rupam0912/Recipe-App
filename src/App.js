import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "b4b7c625";
  const APP_KEY = "cc3867b7430b206c28fbf2203120c2a7";

  // state hook
  const [recipes, setRecipes] = useState([]);

  // the state of the input
  const [search, setSearch] = useState("");

  // the state of the final input
  const [query, setQuery] = useState("chicken");

  // call get recipes function when the browser loads
  useEffect(() => {
    getRecipes();
  }, [query]);

  // fetch recipes from api
  const getRecipes = async () => {
    // wait for information to load
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // set data from the response and turn into into a JSON object
    const data = await response.json();
    // set state of recipes = the array of recipes
    setRecipes(data.hits);
  };

  // set search = to whatever is being typed
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // set the final search = to state of search
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // reset search to empty string
    setSearch("");
  };

  return (
    <div className="App">
      {/* pass props down */}
      <form onSubmit={getSearch} className="search-form" action="">
        <input
          value={search}
          onChange={updateSearch}
          className="search-bar"
          type="text"
          placeholder="Which Dish you want to prepare today?"
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* map through recipes */}
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
