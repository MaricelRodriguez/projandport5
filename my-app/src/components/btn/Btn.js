import React, { Component } from 'react';

import './Btn.css';

class Btn extends Component {

  render(){
    return (
      <button disabled={this.props.disabled} className={this.props.size} onClick={this.props.onclick} type={this.props.type}>{this.props.text}</button>
    );
  }
}

export default Btn;
