import React, { useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);
  const handleSearch = async (query) => {
    try {
      setLoader(true);
      setRecipes([]); //ensuring recipes is an empty array
      const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "mYIXyNUUGgbMBpBpIX7hYg==ob2wtpJvERzAmrZn", 
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setRecipes(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div>
      <h1>Recipe app</h1>
      <Header loader={loader} handleSearch={handleSearch} />
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipe key={recipe.index || index} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default App;
