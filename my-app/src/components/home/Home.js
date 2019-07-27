import React, { Component } from 'react';

import './Home.css';

import Title from '../title/Title';
import Btn from '../btn/Btn';

class Home extends Component {

  render(){
    return (
      <div className='flexWrapper home'>
        <Title/>
        <div>
          <p>Find recipes from ingredients you already have at home.</p>
          <Btn size='largeBtn' onclick={this.props.onclick} text='Get Started'/>
        </div>
      </div>
    );
  }
}

export default Home;
