import React, { Component } from 'react';

import Btn from '../btn/Btn';


class Header extends Component {
  render(){
    return (
      <div data-index={this.props.index}>
        <p>{this.props.text}</p>
        <Btn hidden onClick={this.props.removeIngredient} type='button' text='X'/>
      </div>
    );
  }
}

export default Header;
