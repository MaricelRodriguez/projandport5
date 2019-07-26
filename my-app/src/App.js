import React, { Component } from 'react';
import './App.css';

import Home from './components/home/Home';
import Form from './components/form/Form';
import RecipeCard from './components/recipeCard/RecipeCard';
import Recipe from './components/recipe/Recipe';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 'home',
      ingredients: [],
      recipes: [],
      recipe: 0
    }

    this.displayHome = this.displayHome.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
  }

  displayHome(){
    this.setState({page: 'home'});
    /*
    console.log('Displaying Home');
    //CHANGE STATE INSTEAD
    ReactDOM.render(
      <Home onclick={this.displayForm}/>,
      document.querySelector('#container')
    );
    */
  }

  displayForm(){
    this.setState({page: 'ingredients'});
    /*
    let container = document.querySelector('#container');
    console.log(this);

    ReactDOM.render(
      <Form ingredients={this.state.ingredients} submit={this.addIngredient}/>, container
    );
    */
  }

  addIngredient(e){
    e.preventDefault();
    let ingredientList = this.state.ingredients;
    let newIngredient = document.querySelector('#addIngredient').value.trim();
    ingredientList.push(newIngredient);
    this.setState({ingredients: ingredientList});
  }

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
      let recipeList = [];

      for(let i = 0; i < data.length; i++){
        data[i].select = _this.selectRecipe;
        recipeList.push(data[i]);
      }

      _this.setState({recipes: recipeList});
      _this.setState({page: 'recipes'});
    })
    .catch(function(error){
      console.log('Something went wrong: ' + error);
    })
  }

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
      let ingredientList = document.createElement('ul');
      for(let i=0; i< ingredientData.length; i++){
        listItem = document.createElement('li');
        listItem.innerHTML = ingredientData[i].metaInformation.original;
        ingredientList.append(listItem);
      }

      let instructionData = data.analyzedInstructions[0].steps;
      let instructionItem;
      let instructionsList = document.createElement('ol');
      for(let i=0; i < instructionData.length; i++){
        instructionItem = document.createElement('li');
        instructionItem.innerHTML = instructionData[i].step;
        instructionsList.append(instructionItem);
      }

      let r = <Recipe data-id={data.id} title={data.title} time={data.readyInMinutes} image={data.image} ingredientList={ingredientList} instructionList={instructionsList} />;

      console.log('In Fetch this: ' + this);
      console.log('In Fetch _this: ' + _this);
      _this.setState({recipe: r});
      _this.setState({page: 'recipe'});
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
          <Form ingredients={this.state.ingredients} submit={this.addIngredient} search={this.searchRecipe}/>
        }

        {this.state.page === 'recipes' &&
          this.state.recipes.map(function(recipe, index){
            return <RecipeCard key={index} select={recipe.select} id={recipe.id} title={recipe.title} image={recipe.image}/>
          })
        }

        {this.state.page === 'recipe' &&
          this.state.recipe
        }
      </div>
    );
  }
}

export default App;
