import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.setState({ location: { lat: location.lat(), lng: location.lng() } });
    this.props.callback({ lat: location.lat(), lng: location.lng() });
  };

  render() {
    return (
      <div style={{ width: "100%", height: 440 }}>
        <Map
          google={this.props.google}
          className={"map"}
          zoom={this.props.zoom}
          initialCenter={this.props.center}
          onClick={this.handleMapClick}
        >
          <Marker
            position={this.state.location}
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyABE73_yhKYUV7eJm5kly5nyFI20SrnRro",
  libraries: []
})(MapContainer);
