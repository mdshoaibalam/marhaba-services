import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  
import ReactImage from './react.png';
import "./header.css"
export default class Footer extends Component {
 

  componentDidMount() {
 
  }

  render() {
		 
		const isAccessableLink = 1==1 ? <li><Link to={'/orders'}>Orders</Link></li> : '';
    return (
		 
     
         <header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					 
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Marhaba Services</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarNavDropdown">
    <ul class="navbar-nav">
       
       							<li className="nav-item active font-effect"><Link to={'/home'}>Home</Link></li>
							<li className="nav-item font-effect"><Link to={'/packages'}>package</Link></li>
							<li className="nav-item font-effect"><Link to={'/ourservice'}>Our Service</Link></li>								
							<li className="nav-item font-effect"><Link to={'/gallery'}>Gallery</Link></li>
							<li className="nav-item font-effect"><Link to={'/contact'}>contact</Link></li>
    </ul>
  </div>
</nav>
				</div>
			</div>
		</header> 
       
		 
    );
  }
}
