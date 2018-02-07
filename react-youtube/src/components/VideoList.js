import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => (
  <ul className="list-group col-md-4">
    {videos.map(video => (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoClick={onVideoSelect}
      />
    ))}
  </ul>
);

export default VideoList;
