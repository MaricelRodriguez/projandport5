import React, { Component } from 'react';

import './RecipeCard.css';

class RecipeCard extends Component {
  render(){
    let bgStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    }
    return (
      <div className='bgWrap'>
        <div className='recipe' style={bgStyle} onClick={(e) => this.props.select(e, this.props.id)} data-id={this.props.id}>
          <div>
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
