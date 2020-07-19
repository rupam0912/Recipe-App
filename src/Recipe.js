import React from "react";
import  "./recipe.css";

// destructuring
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    // style with CSS module
    <div className="recipe">
      <h1>{title}</h1>
      {/* map through ingredients */}
      <h3> -- Ingredients -- </h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      {/* display calories */}
      <p> calories: {calories}</p>
      {/* style with CSS module */}
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;