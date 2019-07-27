import React, { Component } from 'react';

import './Form.css';

import Header from '../header/Header';
import Btn from '../btn/Btn';
import Ingredient from '../ingredient/Ingredient';

class Form extends Component {

  render(){
    return (
      <div className='flexWrapper'>
        <Header/>
        <div className='wrapper'>
          <h2>Add Ingredients</h2>
          <form onSubmit={this.props.submit}>
            <input id='addIngredient' type='text' required/>
            <Btn size='smallBtn' type='submit' text='Add'/>
          </form>
          <div id='ingredients'>
            {this.props.ingredients.length === 0 &&
              <p className='empty'>Try adding ingredients that you have at home!</p>
            }
            {this.props.ingredients.map(function(ingredient, index){
                return <Ingredient index={index} key={index} text={ingredient}/>
              })
            }
          </div>
        </div>
        <Btn disabled={this.props.disabled} size='largeBtn' type='button' onclick={this.props.search} text='Next'/>
      </div>
    );
  }
}

export default Form;
