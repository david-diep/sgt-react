import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.deleteId = this.deleteId.bind(this);

  }

  deleteId() {
    this.props.deleteGrade(this.props.grade.id);
  }

  render() {
    return (
      <tr scope="row">

        <td >{this.props.grade.name}</td>
        <td >{this.props.grade.course}</td>
        <td >{this.props.grade.grade}</td>
        <td> <button onClick={this.deleteId} className="btn btn-danger"><i className="fa fa-trash text-light" aria-hidden="true"></i>DELETE</button></td>
      </tr>
    );
  }
}

export default Grade;
