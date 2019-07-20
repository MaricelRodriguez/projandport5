import React, { Component } from 'react';

import Header from '../header/Header';
import Btn from '../btn/Btn';
import Ingredient from '../ingredient/Ingredient';

class Form extends Component {

  render(){
    return (
      <div>
        <Header/>
        <form onSubmit={this.props.submit}>
          <input id='addIngredient' type='text' required/>
          <Btn type='submit' text='Add'/>
        </form>
        <div id='#ingredients'>
          {this.props.ingredients.length === 0 &&
            <p>Try adding ingredients that you have at home!</p>
          }
          {this.props.ingredients.map(function(ingredient, index){
              return <Ingredient index={index} key={index} text={ingredient}/>
            })
          }
        </div>
        <Btn type='button' onclick={this.props.search} text='Next'/>
      </div>
    );
  }
}

export default Form;
