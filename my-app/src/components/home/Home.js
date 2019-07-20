import React, { Component } from 'react';

import Title from '../title/Title';
import Btn from '../btn/Btn';

class Home extends Component {

  render(){
    return (
      <div>
        <Title/>
        <p>Find recipes from ingredients you already have at home.</p>
        <Btn onclick={this.props.onclick} text='Get Started'/>
      </div>
    );
  }
}

export default Home;
