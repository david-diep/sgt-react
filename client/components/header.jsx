import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="d-flex justify-content-between">
          <div className="col-12 col-md-7">
            <h1 className="title">Student Grade Table</h1>
          </div>
          <div className="col-12 col-md-5 average">
            <h3>Average Grade <span className="badge badge-secondary">{this.props.average}</span></h3>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
