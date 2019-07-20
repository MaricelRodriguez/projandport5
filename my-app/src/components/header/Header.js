import React, { Component } from 'react';

import Title from '../title/Title';
import Btn from '../btn/Btn';


class Header extends Component {
  render(){
    return (
      <header>
        <Btn onclick={this.props.startOver} text='Start Over'/>
        <Title />
      </header>
    );
  }
}

export default Header;
