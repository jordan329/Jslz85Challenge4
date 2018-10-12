import React, { Component } from 'react';
import View from './View';

class Controller extends Component {

  state = {
    fields: {
      currentObjId: "",
      
      students:
        [
          {
            name: "s1",
            studentNumber: "234",
            address: "s3",
            phoneNumber: "314-555-5555",
            GPA: "4.0",
            academicPlan: "s6",
            level: "s7",
          }
        ],
    }
  }
  remove = updatedValue => {
    var i = 0;
    var array = [];
    array = this.state.fields.students;
    for (i = 0; i < this.state.fields.students.length; i++) {
      if (updatedValue.currentObjId === array[i].studentNumber) {
        array.splice(i,1)
        this.setState({
          fields: {
            ...this.state.fields,
            students: array
          }
        })
      }
    }
    // this.setState({
    //   fields: {
    //     ...this.state.fields,
    //     ...updatedValue,
    //   }
    // });
  }
  // componentWillMount() {
  //   var values = localStorage.getItem(this.state);
  //   this.setState({ values: JSON.parse(values) })
  // }
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
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
        })
      }
    }
    if (!flag) {
      this.setState({
        fields: {
          ...this.state.fields,
          students: array.concat(updatedValue)
        }
      });
    }
    // localStorage.setItem("values", JSON.stringify(this.state))
  }
  onClick = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
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
