import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';

const App = () => {

  const position = [51.505, -0.09];

  return (
    <div className="App">
      <h2 className='AppHeader'>Ran Ranin karttapalvelut</h2>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </div>
  );
}

export default App;
