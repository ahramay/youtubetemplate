import React from 'react';
export default class VideoListEntry extends React.Component {
  render() {

    let { video, handleSelectedVideo } = this.props;
    // console.log(this.props)
    return (
      <div className="videoListItem">
      	<div className="media">
          <div className="media-left media-middle">
            <img 
              className="media-object" 
              src={video.snippet.thumbnails.default.url} 
            />
          </div>
          <div className="media-body">
            <h4 
              className="media-heading"
              onClick={() => handleSelectedVideo(video)}
              >
              {video.snippet.title}
            </h4>
            <p className="media-description">{video.snippet.description}</p>
          </div>
        </div>
      </div>
    )
  }
};