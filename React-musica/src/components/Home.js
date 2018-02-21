import React from 'react';
import Hero from './Hero';
import Artists from './Artists';

const artistUrl = 'http://localhost:3001/artists';

class Home extends React.Component {
  state = {
    artists: ''
  };

  componentDidMount = () => {
    fetch(artistUrl)
      .then(res => res.json())
      .then(data =>
        this.setState(() => {
          return { artists: data };
        })
      );
  };

  render() {
    return (
      <div>
        <Hero />
        <Artists artists={this.state.artists} />
      </div>
    );
  }
}

export default Home;
