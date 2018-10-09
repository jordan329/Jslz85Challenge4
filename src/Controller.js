import React, { Component } from 'react';
import View from './View';

class Controller extends Component {
  
  render() {
    return (
      <div className="App">
        <p>
        </p>
        <View students={this.props.students} onChange={this.onChange}/>
      </div>
    );
  }
}

export default Controller;
