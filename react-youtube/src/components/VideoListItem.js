import React from 'react';
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const VideoListItem = ({ video, onVideoClick }) => (
  // const imageUrl = video.snippet.thumbnails.default.url;
  <li
    className="list-group-item"
    onClick={() => onVideoClick(video)}
    onKeyDown={() => onVideoClick(video)}
  >
    <div className="video-list media">
      <div className="media-left">
        <img
          src={video.snippet.thumbnails.default.url}
          alt=""
          className="media-object"
        />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </div>
  </li>
);
export default VideoListItem;
