import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import restaurant from './resources/restaurant.png'
import museum from './resources/museum.png'


const App = () => {

  const position = [65.505, 30.09];

  return (
    
      <div className="topBottom">
        <div className='top'>
          <div>
            Your Helsinki adventure
          </div>
          <div className='controls'>
            <div className='control'>
              Home
            </div>
            <div className='control'>
              Discover
            </div>
          </div>
        </div>
        <div className='leftRight'>
          <Map id='Map' center={position} zoom={13}>
            <TileLayer
              url='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=fue2uCQRMjY6rZxp3yEq'
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
          <div className='grid'>
            <div className='header'>
            I'm in the mood for...
            
            </div>
            <div className='filters'>
                <div>
                  <input type='image' src={restaurant} style={{width:"40px"}}></input>
                  
                </div>
                <div>
                  Museums
                </div>
                <div>
                  Stores
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
