import React from 'react';
export default class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch(){
  	this.props.getSearchVideos(this.state.value)
  	this.setState({
  		value: ''
  	})
  }

  render() {
  // 	console.log(this.props)
		// let {getSearchVideos, searchedVideo} = this.props
    return (
      <div className="search col-md-6 col-md-offset-3 form-inline">
      	<input 
      		type="text" 
      		value={this.state.value} 
      		onChange={this.handleChange} 
      		className="form-control" 
      	/>
      	<span
      	 	className="btn glyphicon glyphicon-search" 
      		onClick={this.handleSearch}
      	>
      	</span>
      </div>
    )
  }
};