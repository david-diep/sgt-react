import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var grade = { name: this.state.name, course: this.state.course, grade: this.state.grade };
    this.props.newGrade(grade);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleGrade(event) {
    this.setState({ grade: event.target.value });
  }

  render() {
    return (
      <form className="col-12 col-md-3" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
          </div>
          <input onChange={this.handleName}type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fa fa-list-alt" aria-hidden="true"></i></span>
          </div>
          <input onChange={this.handleCourse}type="text" className="form-control" placeholder="Course" aria-label="Course" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>
          </div>
          <input onChange={this.handleGrade}type="text" className="form-control" placeholder="Grade" aria-label="Grade" aria-describedby="basic-addon1" />
        </div>
        <div className="row justify-content-end">
          <button className="btn btn-primary" type = "submit" value="Submit">Add</button>
          <button className="btn btn-secondary cancel-button" type="reset" value="Reset">Cancel</button>
        </div>
      </form>
    );
  }

}

export default GradeForm;
