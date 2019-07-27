import React, { Component } from 'react';

import './Ingredient.css';

import Btn from '../btn/Btn';


class Ingredient extends Component {
  render(){
    return (
      <div className='ingredient' data-index={this.props.index}>
        <p>{this.props.text}</p>
        <div className='btnWrap'>
          <Btn size='closeBtn' onClick={this.props.removeIngredient} type='button' text='X'/>
        </div>
      </div>
    );
  }
}

export default Ingredient;
