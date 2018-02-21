import React from 'react';
import { Link } from 'react-router-dom';

const Artists = props => {
  console.log(props);
  console.log(props.artists);
  return (
    <div className="artists__list">
      <h4>Browse the artists</h4>
      {props.artists &&
        props.artists.map(artist => (
          <Link
            to={`/artist/${artist.id}`}
            key={artist.id}
            style={{
              background: `url(/images/covers/${artist.cover}.jpg) no-repeat`
            }}
            className="artist"
          >
            <h5 className="artist__name">{artist.name}</h5>
          </Link>
        ))}
    </div>
  );
};

export default Artists;
