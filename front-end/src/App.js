import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const App = () => {

  const Helsinki = [60.170833, 24.9375];
  const mockLocations = [
    Helsinki,
    [61.162253,24.922169],
    [62.155534,24.924101],
    [63.147018, 24.913987],
    [64.151775,24.903101],
    [65.155356,24.901513],
    [66.158474,24.90265],
    [67.161862,24.914016]
  ];
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    setLocations(mockLocations);
  }, []);
  return (
    <div className="App">
      <h2 className='AppHeader'>Ran Ranin karttapalvelut</h2>
      <Map id='Map' center={Helsinki} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {locations.map(loc => {
          return <Marker position={loc}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        })}
      </Map>
    </div>
  );
}

export default App;
