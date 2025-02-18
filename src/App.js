import React, { useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const handleSearch = async (query) => {
    try {
      const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "mYIXyNUUGgbMBpBpIX7hYg==ob2wtpJvERzAmrZn",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setRecipes(data.hits);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Recipe app</h1>
      <Header handleSearch={handleSearch} />
      {recipes.map(( recipe ) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
