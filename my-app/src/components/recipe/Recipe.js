import React, { Component } from 'react';

class Recipe extends Component {
  render(){
    return (
      <div data-id={this.props.id}>
        <div>
          <p>{this.props.time}</p>
          <h3>{this.props.title}</h3>
          <img src={this.props.image} alt={this.props.title}/>
        </div>
        {this.props.ingredientList}
        {this.props.instructionsList}
      </div>
    );
  }
}

export default Recipe;
