import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { grades: [] };
    this.addNewGrade = this.addNewGrade.bind(this);
  }

  getAverageGrade() {
    var allGrades = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      allGrades += parseInt(this.state.grades[i].grade, 10);
    }
    allGrades = allGrades / this.state.grades.length;
    return Math.ceil(allGrades);
  }

  addNewGrade(grade) {
    fetch('/api/grades', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(grade) }).then(res => res.json()).then(newGrade => {
      var newGrades = [...this.state.grades];
      newGrades.push(newGrade);
      this.setState({ grades: newGrades });
    });
  }

  componentDidMount() {
    fetch('/api/grades').then(res => res.json()).then(data => this.setState({ grades: data }));
  }

  render() {
    return <>
      <div className="container">
        <Header average={this.getAverageGrade()} />
        <div className="row flex-nowrap">
          <GradeTable grades={this.state.grades} />
          <GradeForm className="col-12 col-md-4" newGrade={this.addNewGrade}/>
        </div>
      </div>
    </>;
  }
}

export default App;
