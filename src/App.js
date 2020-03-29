import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () =>{
  const App_ID = "27356d42"
  const App_key = "bc2e19744b8da6eef239b009ae329095"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(  `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`);
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
      }
    getRecipes();
    
  },[query]);

 
  const getSearch = (e) =>{
       e.preventDefault();
       setQuery(search);
       setSearch("");
  }

 const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={handleChange}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="main">
      {recipes.map(recipe => (
        <Recipe
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
        />
      ))}
      </div>
    </div>

    
  );
}

export default App;
