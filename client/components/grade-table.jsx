import React from 'react';
import Grade from './Grade';

class GradeTable extends React.Component {

  render() {
    return (<>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" > Student Name</th>
            <th scope="col" > Course</th>
            <th scope="col" > Grades</th>
          </tr>
        </thead>
        <tbody className="table-striped table-hover">
          {this.props.grades.map(grade =>
            <Grade key={grade.id} grade={grade} />
          )}
        </tbody>
      </table>

      {/* more rows */}

      {this.props.grades.length === 0 && <p>No grades recorded</p>}</>
    );
  }
}
export default GradeTable;
