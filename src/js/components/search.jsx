import React from 'react';
export default class Search extends React.Component {
  render() {
    return (
      <div className="search col-md-6 col-md-offset-3 form-inline">
      	<input type="text" className="form-control" />
      	<span className="btn glyphicon glyphicon-search"></span>
      </div>
    )
  }
};