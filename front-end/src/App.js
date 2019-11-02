import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const App = () => {

  const position = [60.17, 24.935];

  return (
    <div className="App">
      <h2 className='AppHeader'>Ran Ranin karttapalvelut</h2>
      <Map id='Map' center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default App;
