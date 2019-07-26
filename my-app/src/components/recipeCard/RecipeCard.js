import React, { Component } from 'react';

class RecipeCard extends Component {
  render(){
    return (
      <div onClick={(e) => this.props.select(e, this.props.id)} data-id={this.props.id}>
        <h3>{this.props.title}</h3>
        <img src={this.props.image} alt={this.props.title}/>
      </div>
    );
  }
}

export default RecipeCard;
