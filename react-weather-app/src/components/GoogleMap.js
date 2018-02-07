import React, { Component } from 'react';

/* eslint-disable no-new */
/* eslint-disable react/no-string-refs */
class GoogleMap extends Component {
  componentDidMount = () => {
    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  };

  render() {
    return <div ref="map">map</div>;
  }
}

export default GoogleMap;
