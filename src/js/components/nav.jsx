import React from 'react';
import Search from './search';
export default class Nav extends React.Component {
  render() {
  	return (
      <div className="nav">
      	<Search 
      		getSearchVideos = {this.props.getSearchVideos} 
      		searchedVideo = {this.props.searchedVideo} /> 
      </div>
    )
  }
};