import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <th scope="col" className="col-3">{this.props.grade.name}</th>
        <th scope="col" className="col">{this.props.grade.course}</th>
        <th scope="col" className="col">{this.props.grade.grade}</th>
      </tr>
    );
  }
}

export default Grade;
