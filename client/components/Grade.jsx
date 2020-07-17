import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr scope="row">

        <td className="col-12 col-md-3">{this.props.grade.name}</td>
        <td className="col-12 col-md-3">{this.props.grade.course}</td>
        <td className="col-12 col-md-3">{this.props.grade.grade}</td>
      </tr>
    );
  }
}

export default Grade;
