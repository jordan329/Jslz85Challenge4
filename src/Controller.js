import React, { Component } from 'react';
import View from './View';

class Controller extends Component {
  constructor(props) {
    super(props);
    var values = localStorage.getItem('values');

    this.state = {
      fields: {
        students:
          values !== undefined ? JSON.parse(values) : [],
      }
    }

  }
  remove = updatedValue => {
    var i = 0;
    var array = [];
    array = this.state.fields.students;
    for (i = 0; i < this.state.fields.students.length; i++) {
      if (updatedValue.currentObjId === array[i].studentNumber) {
        array.splice(i, 1)
        this.setState({
          fields: {
            ...this.state.fields,
            students: array
          }
        }, this.replaceLocal())
      }
    }
  }

  replaceLocal = () => {
    localStorage.setItem("values", JSON.stringify(this.state.fields.students))
  }
  passStudent = updatedValue => {
    var flag = false;
    var i;
    var array = [];
    array = this.state.fields.students;
    for (i = 0; i < this.state.fields.students.length; i++) {
      if (updatedValue.studentNumber === array[i].studentNumber) {
        flag = true;
        array[i] = updatedValue;
        this.setState({
          fields: {
            ...this.state.fields,
            students: array
          }
        }, this.replaceLocal())
      }
    }
    if (!flag) {
      this.setState({
        fields: {
          ...this.state.fields,
          students: array.concat(updatedValue)
        }
      }, this.replaceLocal()
      );
    }
  }
  render() {
    return (
      <div className="App">
        <View current={this.state.fields.currentObj} remove={this.remove} passStudent={this.passStudent} students={this.state.fields.students} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
          <br />
        </p>
      </div>
    );
  }
}

export default Controller;
