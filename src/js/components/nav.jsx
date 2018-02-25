import React from 'react';
import Search from './search';
export default class Nav extends React.Component {
  render() {
  	// const { getSearchVideos } = this.props
  	return (
      <div className="nav">
      	<Search 
      		{...this.props} 
      		/> 
      </div>
    )
  }
};