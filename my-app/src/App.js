import React, { Component } from 'react';
import './App.css';

import Home from './components/home/Home';
import Form from './components/form/Form';
import RecipeCard from './components/recipeCard/RecipeCard';
import Recipe from './components/recipe/Recipe';
import Recipes from './components/recipes/Recipes';
import RecipeInfo from './components/recipeInfo/RecipeInfo';

class App extends Component {
  constructor(props){
    super(props);

    //Sets the default states
    this.state = {
      page: 'home',
      ingredients: [],
      btnDisabled: true,
      recipes: [],
      recipe: 0,
      loaded: false
    }

    //Binds 'this' to each function to avoid issues.
    this.displayHome = this.displayHome.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  /* displayHome: Changes the page state to display the home page. */
  displayHome(){
    this.setState({page: 'home'});
  }

  /* displayForm: Changes the page state to display the ingredients page. */
  displayForm(){
    this.setState({page: 'ingredients'});
  }

  /* addIngredient: Retrieves the entered ingredient value and adds it to the
  ingredients list. */
  addIngredient(e){
    e.preventDefault();

    let ingredientList = this.state.ingredients;
    let newIngredient = document.querySelector('#addIngredient').value.trim();
    ingredientList.push(newIngredient);

    if(ingredientList.length > 0){
      this.setState({btnDisabled: false});
    }

    this.setState({ingredients: ingredientList});
  }

  /* startOver: Changes the page state to display the ingredients page, removes
  any existing ingredients, and disables the button on that page via the state. */
  startOver(){
    this.setState({page: 'ingredients', ingredients: [], btnDisabled: true});
  }

  /* searchRecipe: Communicates with the recipes API and returns recipes based
  on the ingredients given. */
  searchRecipe(e){
    e.preventDefault();

    const base = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=';

    let ingredients = this.state.ingredients;

    let search = ingredients[0];
    for(let i = 1; i < ingredients.length; i++){
      search += '%2C' + ingredients[i];
    }
    console.log('searching for: ' + search);

    let url = base + search;

    let config = {
      method:'GET',
      headers:{
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7f47278606msh2f4decc70aaedf7p196c3ejsn7af7ba58ab09'
      }
    };

    var _this = this;

    fetch(url, config)
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data){
      console.log(data);
      _this.setState({page: 'recipes', loaded:false});

      let recipeList = [];

      for(let i = 0; i < data.length; i++){
        data[i].select = _this.selectRecipe;
        recipeList.push(data[i]);
      }

      let recipes = recipeList.map(function(recipe, index){
        return <RecipeCard key={index} select={recipe.select} id={recipe.id} title={recipe.title} image={recipe.image}/>
      });

      _this.setState({recipes: recipes, loaded: true});
    })
    .catch(function(error){
      console.log('Something went wrong: ' + error);
    })

  }

  /* selectRecipe: Communicates with the recipes API and returns specific recipe
  data based on the recipe ID given. */
  selectRecipe(e, id){
    e.preventDefault();

    console.log('recipe selected: ' + id);

    const base = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/';

    let url = base + id + '/information';

    let config = {
      method:'GET',
      headers:{
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7f47278606msh2f4decc70aaedf7p196c3ejsn7af7ba58ab09'
      }
    };

    console.log('Before Fetch this: ' + this);
    var _this = this;
    console.log('Before Fetch _this' + _this);
    fetch(url, config)
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data){
      console.log(data);

      let ingredientData = data.extendedIngredients;
      let listItem;
      let ingredientList = [];
      for(let i=0; i< ingredientData.length; i++){
        listItem = <li key={'ingredient' + i}>{ingredientData[i].original}</li>;
        ingredientList.push(listItem);
      }

      let instructionData = data.analyzedInstructions[0].steps;
      let instructionItem;
      let instructionsList = [];
      for(let i=0; i < instructionData.length; i++){
        instructionItem = <li key={'instruction' + i}>{instructionData[i].step}</li>;
        instructionsList.push(instructionItem);
      }

      let r = <Recipe startOver={_this.startOver} data-id={data.id} title={data.title} time={data.readyInMinutes} image={data.image} ingredientList={ingredientList} instructionList={instructionsList} />;

      _this.setState({recipe: r});
      _this.setState({page: 'recipeInfo'});
    })
    .catch(function(error){
      console.log('Something went wrong: ' + error);
    })


  }

  render(){
    return (
      <div id='container'>
        {this.state.page === 'home' &&
          <Home onclick={this.displayForm}/>
        }

        {this.state.page === 'ingredients' &&
          <Form startOver={this.startOver} removeIngredient={this.removeIngredient} disabled={this.state.btnDisabled} ingredients={this.state.ingredients} submit={this.addIngredient} search={this.searchRecipe}/>
        }

        {this.state.page === 'recipes' &&
          <Recipes startOver={this.startOver} loaded={this.state.loaded} recipes={this.state.recipes}/>
        }

        {this.state.page === 'recipeInfo' &&
          <RecipeInfo recipe={this.state.recipe}/>
        }
      </div>
    );
  }
}

export default App;
