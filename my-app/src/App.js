import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/searchForm/SearchForm';

class App extends Component {

  searchRecipe(e){
    e.preventDefault();
    let search = document.querySelector('#recipeAPI input').value.trim();
    const base = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?';
    let url = base + 'number=1&ingredients=' + search;
    let config = {
      method:'GET',
      headers:{
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7f47278606msh2f4decc70aaedf7p196c3ejsn7af7ba58ab09'
      }
    }
    fetch(url, config)
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let results = document.querySelector('#recipeAPI .results');
      results.innerHTML = 'Recipe Found: ' + data[0].title;
    })
    .catch(function(error){
      console.log('Something went wrong: ' + error);
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Project Proof of Concept</h1>
        <h3>Maricel Rodriguez</h3>
        <p>I decided to test all three right off the bat in case I ran into any problems. The first two worked well. The third was a bit of trouble. I'm confident with the following two:</p>
        <section id="recipeAPI">
          <h2>Recipe API Example</h2>
          <p>Search for a recipe containing:</p>
          <SearchForm submit={this.searchRecipe} default="eggs"/>
          <p className='results'></p>
        </section>
    );
  }
}

export default App;
