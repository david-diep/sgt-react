import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { grades: [] };
  }

  getAverageGrade() {
    var allGrades = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      allGrades += this.state.grades[i].grade;
    }
    allGrades = allGrades / this.state.grades.length;
    return Math.ceil(allGrades);
  }

  componentDidMount() {
    fetch('/api/grades', { method: 'GET' }).then(res => res.json()).then(data => this.setState({ grades: data }));
  }

  render() {
    return <>
      <div className="container">
        <Header average={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades} />
      </div>
    </>;
  }
}

export default App;
