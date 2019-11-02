import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { places } from './mockLocations';
import './App.css';

const App = () => {

  const Helsinki = [60.170833, 24.9375];
  
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    setMarkers(places.data);
  }, []);
  return (
    <div className="App">
      <h2 className='AppHeader'>Ran Ranin karttapalvelut</h2>
      <Map id='Map' center={Helsinki} zoom={13}>
        <TileLayer
          url='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=fue2uCQRMjY6rZxp3yEq'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {markers.map(marker => {
          return (
            <Marker key={marker.id} position={[marker.location.lat, marker.location.lon]}>
              <Popup>
                <h4>{marker.name.fi}</h4>
                <a href={marker.info_url} target='_blank' rel="noopener noreferrer">{marker.info_url}</a>
              </Popup>
            </Marker>
          )
        })}
      </Map>
    </div>
  );
}

export default App;
