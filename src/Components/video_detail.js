import React from 'react';

const VideoDetail = ({video}) => {
if (!video) {                //(!video) === NO VIDEO - that is video is not defined
  return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //ES6 Syntax instead of writing "Url" + videoId
  // we use `https://www.youtube.com/embed/${videoId}`
  //` --- this sign is essential `   `    `zaraz nad tyldą
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className= "embed-responsive-item" src={url}></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
