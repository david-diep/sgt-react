import React from 'react';
import Grade from './Grade';

class GradeTable extends React.Component {

  render() {
    return (<>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" className="col-3"> Student Name</th>
            <th scope="col" className="col-3"> Course</th>
            <th scope="col" className="col-3"> Grades</th>
          </tr>
        </thead>
        <tbody className="table-striped table-hover">
          {this.props.grades.map((grade, index) =>
            <Grade key={index} grade={grade} />
          )}
        </tbody>
      </table>

      {/* more rows */}

      {(this.props.grades) ? <></> : <p>No grades recorded</p>}</>
    );
  }
}
export default GradeTable;
