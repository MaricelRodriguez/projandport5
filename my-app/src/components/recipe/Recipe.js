import React, { Component } from 'react';

import './Recipe.css';

import Header from '../header/Header';

class Recipe extends Component {
  render(){
    let bgStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    }
    return (
      <div className='paddingAround' data-id={this.props.id}>
        <div style={bgStyle}>
          <Header/>
          <div>
            <p>{this.props.time}</p>
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <ul>
          {this.props.ingredientList}
        </ul>
        <ol>
          {this.props.instructionList}
        </ol>
      </div>
    );
  }
}

export default Recipe;
