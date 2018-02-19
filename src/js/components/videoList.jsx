import React from 'react';
import VideoListEntry from './videoListEntry';
export default class VideoList extends React.Component {
  
	constructor(props){
		super(props);

	}

	createList(){
		return this.props.videoList.map((item, i)=>{
			return <VideoListEntry 
						key={i} 
						video={item} 
						handleSelectedVideo={this.props.handleSelectedVideo}/>
		})
	}

  render() {
  	let { videoList, handleSelectedVideo } = this.props;
  	return (
      <div className="videoList">
      	{ this.createList() }
      </div>
    )
  }
};