import React, { Component } from 'react';

class View extends Component {

  componentWillMount() {
    
  }
  render() {
    let list = this.props.students.map((student) => {
      return <button onClick={this.props.onClick} name={student.id}>{student.name}</button>
    })
    return (
      <div className="App">
        <div name="list">
          <p>
            {list}
          </p>
        </div>

        <input onChange={this.props.onChange}placeholder="Name" name="name" />
        <br />
        <input onChange={this.props.onChange}placeholder="Student Number" name="studentNumber" />
        <br />
        <input onChange={this.props.onChange}placeholder="Address" name="address" />
        <br />
        <input onChange={this.props.onChange}placeholder="Phone Number" name="phoneNumber" />
        <br />
        <input onChange={this.props.onChange}placeholder="GPA" name="GPA" />
        <br />
        <input onChange={this.props.onChange}placeholder="Academic Plan" name="academicPlan" />
        <br />
        <input onChange={this.props.onChange}placeholder="Level" name="level" />
      </div>
    );
  }
}

export default View;
