import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { grades: [] };
  }

  componentDidMount() {
    fetch('/api/grades', { method: 'GET' }).then(res => res.json()).then(data => this.setState({ grades: data }));
  }

  render() {
    return <>
      <Header />
      <GradeTable grades={this.state.grades}/>
    </>;
  }
}

export default App;
