import React from 'react';

import _ from 'lodash'

export default class Search extends React.Component {

  constructor(){
    super();
    this.state = {

    }
    this.localHandler = this.localHandler.bind(this);
    this.localHandler = _.debounce(this.localHandler, 500)

  }

  localHandler(e) {
    const { getVideos, cbUpdateVideos } = this.props
    getVideos(this.input.value, cbUpdateVideos)
  }

  render() {
  	// console.log(this.props)
		// let {getSearchVideos, searchedVideo} = this.props
    return (
      <div className="search col-md-6 col-md-offset-3 form-inline">
      	<input 
      		type="text" 
          ref={(elem)=>this.input=elem}
      		onChange={this.localHandler} 
      		className="form-control" 
      	/>
      	<span
      	 	className="btn glyphicon glyphicon-search" 
      	>
      	</span>
      </div>
    )
  }
};