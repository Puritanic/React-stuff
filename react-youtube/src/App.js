import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount = () => {
    this.videoSearch('WoT');
  };

  videoSearch = (term) => {
    YTSearch({ key: process.env.REACT_APP_YOUTUBE_API_KEY, term }, (videos) => {
      this.setState(() => ({ videos, selectedVideo: videos[0] }));
    });
  };

  render() {
    // debounce throttles function calling
    const search = _.debounce((term) => {
      this.videoSearch(term);
    }, 500);
    return (
      <div className="container">
        <SearchBar onSearchTermChange={search} />
        <div className="row">
          {this.state.videos.length > 1 ? (
            <VideoDetail video={this.state.selectedVideo} />
          ) : (
            <div>Loading...</div>
          )}
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

export default App;
