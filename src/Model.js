import React, { Component } from 'react';
import Controller from './Controller';

class Model extends Component {

  state = {
    fields: {
      currentObjId: ',',
      students:
        [
          {
            name: "s1",
            studentNumber: "s2",
            address: "s3",
            phoneNumber: "s4",
            GPA: "s5",
            academicPlan: "s6",
            level: "s7",
          }
        ],
      books: [{
        ISBN: "b1",
        name: "b2",
        author: "b3",
        publisher: "b4",
        year: "b5",
        type: "b6",
        edition: "b7",
      }],
    }
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
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
        <Controller students={this.state.fields.students} books={this.state.fields.books} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
          <br />
        </p>
      </div>
    );
  }
}

export default Model;
