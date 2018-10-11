import React, { Component } from 'react';
import View from './View';

class StudentController extends Component {
  click = e => {
    e.preventDefault()
    this.props.onChange({ currentObj: e.target.name });
  }
  passStudent = updatedValue => {
    this.props.passStudent(updatedValue)
  }
  render() {
    return (
      <div className="App">
        <p>
        </p>
        <View passStudent={this.passStudent} students={this.props.students} onClick={this.click} />
      </div>
    );
  }
}

export default StudentController;
