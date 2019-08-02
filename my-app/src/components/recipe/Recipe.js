import React, { Component } from 'react';

import './Recipe.css';

import Header from '../header/Header';

class Recipe extends Component {
  render(){
    let bgStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    }
    return (
      <div className='fullHeight instructionFlex' data-id={this.props.id}>
        <div style={bgStyle}>
          <div className='overlay paddingAround'>
            <Header startOver={this.props.startOver}/>
            <div className='recipeTitle'>
              <p>{this.props.time} minutes</p>
              <h3>{this.props.title}</h3>
            </div>
          </div>
        </div>

        <div className='paddingAround instructions'>
          <ul>
            {this.props.ingredientList}
          </ul>
          <ol>
            {this.props.instructionList}
          </ol>
        </div>
      </div>
    );
  }
}

export default Recipe;
