import React, { Component } from 'react';

import './Title.css';

class Title extends Component {
  render(){
    return (
      <div>
        <h1 className={this.props.size}>At Home<br/><em>Recipes</em></h1>
      </div>
    );
  }
}

export default Title;
