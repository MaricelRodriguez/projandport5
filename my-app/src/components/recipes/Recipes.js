import React, { Component } from 'react';

import './Recipes.css';

import Header from '../header/Header';
import Btn from '../btn/Btn';

class Recipes extends Component {
  render(){
    return (

        <div className='flexWrapper'>
          <Header/>
          <div className='bgWrap'>
            {this.props.recipes}
          </div>
          <Btn size='largeBtn' type='button' text='Back'/>
        </div>
    );
  }
}

export default Recipes;
