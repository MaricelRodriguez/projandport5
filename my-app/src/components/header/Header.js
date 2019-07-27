import React, { Component } from 'react';

import './Header.css';

import Title from '../title/Title';
import Btn from '../btn/Btn';


class Header extends Component {
  render(){
    return (
      <header>
        <Btn size='miniBtn' onclick={this.props.startOver} text='Start Over'/>
        <Title size='smallTitle' />
      </header>
    );
  }
}

export default Header;
