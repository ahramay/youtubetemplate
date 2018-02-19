import React from 'react';
export default class VideoPlayer extends React.Component {
  render() {
  	let { selectedVideo } = this.props;
  	if(selectedVideo){
  		var selectedVideoURL = 'https://www.youtube.com/embed/'+ selectedVideo.id.videoId
  	}
    return (
      <div className="videoPlayer"> 
      	<div className="player embed-responsive embed-responsive-16by9">
      		<iframe 
      		className="embed-responsive-item" 
      		src={selectedVideoURL} 
      		allowFullScreen
      		/>
      	</div>
      	<div className="video-details">
      			<h4 className="video-title">
      				{selectedVideo ? selectedVideo.snippet.title : ""}
      			</h4>
      			<p className="video-description">
      				{selectedVideo ? selectedVideo.snippet.description : ""}
      			</p>
      		</div>	
      </div>
    )
  }
};