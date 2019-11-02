

import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Discover from './Discover';

import helsinki from './resources/helsinki.png'




const App = () => {




  	return (
    	<Router>
    	  	<div className="topBottom">
    	    	<div className='top'>
              <div>
                 <img src={helsinki} alt='logo' style={{width:"80px"}}></img>
              </div>
              <div style={{fontSize:"16px"}}>
                 MY Helsinki Adventure
              </div>
              <div className='controls'>
                <div className='control'>
                  <Link to='/'>Home</Link>    	        		
                </div>    
    	        		<div className='control'>
    	          			<Link to='/discover'>Discover</Link>
    	        		</div>
    	      		</div>
    	    	</div>
    	    	<Route path='/discover' render={() => <Discover/>}/>
    		</div>
    	</Router>
  	);
}

export default App;
