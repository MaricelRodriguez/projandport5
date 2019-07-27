import React, { Component } from 'react';

class Recipes extends Component {
  render(){
    return (
      <div className='flexWrapper'>
        {this.props.recipes}
      </div>
    );
  }
}

export default Recipes;
