import React, { Component } from 'react';

import './Ingredient.css';

class Ingredient extends Component {
  render(){
    return (
      <div className='ingredient' data-index={this.props.index}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Ingredient;
