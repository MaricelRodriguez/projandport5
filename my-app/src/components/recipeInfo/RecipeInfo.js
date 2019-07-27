import React, { Component } from 'react';

class RecipeInfo extends Component {
  render(){
    return (
      <div id='flexWrapper'>
        {this.props.recipe}
      </div>
    );
  }
}

export default RecipeInfo;
