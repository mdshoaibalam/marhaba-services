import React, { Component } from 'react';
import './app.css';   
export default class Gallery extends Component {
 constructor(props){
   super(props);    
 }    

  render() {
     
    return (
        <div>
<div id="fh5co-car" className="fh5co-section-gray">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>Its all About Us</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>
        <div className="row row-bottom-padded-md">
            <div className="col-md-4 col-xs-12 animate-box">
                <div className="car">
                    <div className="one-4">
                        <h3>Akhlaque Ahmad</h3>
                        <span className="price">Designation:<small> Chairmane and CEO</small></span>
                        <span className="price">Mobile # <small>+91 9830406589 </small></span>
                         
                    </div>
                    <div className="one-1" style={{backgroundImage: 'url(src/client/images/car-1.jpg)'}}>
                    </div>
                </div>
            </div>
            <div className="col-md-4  col-xs-12 animate-box">
                <div className="car">
                    <div className="one-4">
                        <h3> Khalid Husain</h3>
                        <span className="price">Designation:<small> Manager & Executive</small></span>
                        <span className="price">Mobile #<small> +91 9831652207</small></span>
                         
                    </div>
                    <div className="one-1" style={{backgroundImage: 'url(src/client/images/car-2.jpg)'}}>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xs-12 animate-box">
                <div className="car">
                    <div className="one-4">
                        <h3>Md Jamal</h3>
                        <span className="price">Designation:<small> Manager & Executive</small></span>
                        <span className="price">Mobile #<small> +91 7439572267</small></span>
                         
                    </div>
                    <div className="one-1" style={{backgroundImage: 'url(src/client/images/car-2.jpg)'}}>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
        </div>      
    );
  }
}
