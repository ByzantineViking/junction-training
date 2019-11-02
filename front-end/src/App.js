import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { getData } from './services/Server';
import './App.css';

const App = () => {

  const Helsinki = [60.170833, 24.9375];
  
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    getData().then(response => setMarkers(response))
  }, []);
  return (
    <div className="App">
      <h2 className='AppHeader'>Ran Ranin karttapalvelut</h2>
      <Map id='Map' center={Helsinki} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {markers.map(marker => {
          return <Marker position={[marker.lon, marker.lat]}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        })}
      </Map>
    </div>
  );
}

export default App;
