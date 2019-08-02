import React, { Component } from 'react';

import './Recipes.css';

import Header from '../header/Header';
import Loader from '../loader/Loader';
import Btn from '../btn/Btn';

class Recipes extends Component {
  render(){
    return (

        <div className=' fullHeight flexWrapper paddingAround'>
          <Header startOver={this.props.startOver}/>
          <div className='bgWrap'>
            {this.props.loaded === false &&
              <Loader/>
            }
            {this.props.loaded === true &&
              <div>{this.props.recipes}</div>
            }
          </div>
          <Btn size='largeBtn' type='button' text='Back'/>
        </div>
    );
  }
}

export default Recipes;
