import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
    this.ref6 = React.createRef();
    this.ref7 = React.createRef();
    this.state = {}
  }
  changeStudent = e => {
    // e.preventDefault()
    e.persist()
    this.props.changeStudent({ currentObjId: e._targetInst.key })
  }
  passStudent = e => {
    e.preventDefault();
    this.props.passStudent({
      name: this.ref1.current.value,
      studentNumber: this.ref2.current.value,
      address: this.ref3.current.value,
      phoneNumber: this.ref4.current.value,
      GPA: this.ref5.current.value,
      academicPlan: this.ref6.current.value,
      level: this.ref7.current.value,
    })
  }
  render() {
    // let buttons = this.props.students.map((student, i) => {
    //   return (
    //     <button key={student.studentNumber} onClick={this.changeStudent} name={student.id}>{student.name}</button>
    //   );
    // })
    let list = this.props.students.map((student, i) => {
      return (
        <div key={student.studentNumber}><h4>index #{i+1}</h4>
          <p>Name: {student.name},
          studentNumber: {student.studentNumber},
          address: {student.address},
          phoneNumber: {student.phoneNumber},
          GPA: {student.GPA},
          academicPlan: {student.academicPlan},
          level: {student.level}</p>
          <button key={student.studentNumber} onClick={this.changeStudent} name={student.id}>Remove {student.name}</button>

        </div>);
    })
    return (
      <div className="App">
        {/* <div name="remove">
          <h5>select a student to Remove</h5>
          {buttons}
        </div> */}
        <form>
          <input defaultValue={this.props.current.name} ref={this.ref1} type="text" placeholder="Name" name="name" />
          <br />
          <input defaultValue={this.props.current.studentNumber} ref={this.ref2} type="number" placeholder="Student Number" name="studentNumber" />
          <br />
          <input defaultValue={this.props.current.address} ref={this.ref3} type="text" placeholder="Address" name="address" />
          <br />
          <input defaultValue={this.props.current.phoneNumber} ref={this.ref4} type="tel" placeholder="Phone Number" name="phoneNumber" />
          <br />
          <input defaultValue={this.props.current.GPA} ref={this.ref5} type="number" placeholder="GPA" name="GPA" />
          <br />
          <input defaultValue={this.props.current.academicPlan} ref={this.ref6} type="text" placeholder="Academic Plan" name="academicPlan" />
          <br />
          <input defaultValue={this.props.current.level} ref={this.ref7} type="text" placeholder="Level" name="level" />
          <input type="submit" onClick={this.passStudent} />
        </form>
        <div name="list">
          <h3>Students</h3>
          {list}
        </div>
      </div>
    );
  }
}

export default View;
