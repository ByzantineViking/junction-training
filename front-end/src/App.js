
import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Discover from './Discover';

const App = () => {

  	return (
    	<Router>
    	  	<div className="topBottom">
    	    	<div className='top'>
    	      		<div>
    	        		Your Helsinki adventure
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
