import React from 'react';
import Header from './Header';

const artistUrl = 'http://localhost:3001/artists';

class Artists extends React.Component {
  state = {
    artist: ''
  };

  componentDidMount = () => {
    const id = this.props.match.params.artistId;
    fetch(artistUrl)
      .then(res => res.json())
      .then(data =>
        this.setState(() => {
          return { artist: data[id] };
        })
      );
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.artist && (
          <div className="artist__info">
            <img
              src={`/images/covers/${this.state.artist.cover}.jpg`}
              alt={this.state.artist.name}
              className="artist__image"
            />
            <p className="artist__bio">{this.state.artist.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Artists;
