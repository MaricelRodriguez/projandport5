import React, { Component } from 'react';

class Btn extends Component {

  render(){
    return (
      <button onClick={this.props.onclick} type={this.props.type}>{this.props.text}</button>
    );
  }
}

export default Btn;
