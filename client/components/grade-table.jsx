import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  render() {
    return (<>
      <table className="table col-12 col-md-9">
        <thead className="thead-light">
          <tr>
            <th scope="col" >Student Name</th>
            <th scope="col" >Course</th>
            <th scope="col" >Grades</th>
            <th scope="col" >Operations</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {this.props.grades.map(grade =>
            <Grade key={grade.id} grade={grade} deleteGrade={this.props.deleteGrade}/>
          )}
        </tbody>
      </table>

      {/* more rows */}

      {this.props.grades.length === 0 && <p>No grades recorded</p>}</>
    );
  }
}
export default GradeTable;
