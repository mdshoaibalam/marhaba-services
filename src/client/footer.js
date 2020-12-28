import React, { Component } from 'react';
import AITA from "./images/IATA.png";
import TAFI from "./images/TAFI.png";
import AIHUTOA from "./images/AIHUTOA.png";
  
import ReactImage from './react.png';

export default class Footer extends Component {
 

  componentDidMount() {
 
  }

  render() {
     
    return (
     
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row row-bottom-padded-md">
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>About Marhaba Tours & Services</h3>
                <p>Hajj and Umrah Services is the trading name of Marhaba Tours and Services is registered in India .</p>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Accreditations</h3>
                <ul>
                  <li><img src={AITA} style={{width:90,background:'white'}} /></li>
                  {/* <li><img src={TAFI} style={{width:90,background:'white'}} /></li> */}
                  {/* <li><img src={AIHUTOA} style={{width:90,background:'white'}} /></li> */}
                 
                  
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Top Hotels</h3>
                <ul>
                  <li><a href="#">Boracay Hotel</a></li>
                  <li><a href="#">Dubai Hotel</a></li>
                  <li><a href="#">Singapore Hotel</a></li>
               
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Passport assitance</a></li>
                  <li><a href="#">Visa Stamping assitance</a></li>
                  <li><a href="#">Budget Travel</a></li>
                  <li><a href="#">Hajj and Umrah Package</a></li>
                  
                </ul>
              </div>
             
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Affordable</h3>
                <ul>
                  <li><a href="#">Food &amp; Drink</a></li>
                  <li><a href="#">Fare Flights</a></li>
                </ul>
              </div>

              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Contact Us</h3>
                <ul>
                  <li>Email: <a href="mailto: marhaba5974@gmail.com"> marhaba5974@gmail.com </a></li>
                  <li><div>Mobile: </div><a href="#"><div>+91 3323457149,</div><div> +91 9830406589,</div><div>+91 9831162488,</div> <div>+91 9831652207,</div><div>+91 7439572267</div></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <p className="fh5co-social-icons">
                  <a href="#"><i className="icon-twitter2" /></a>
                  <a href="#"><i className="icon-facebook2" /></a>
                  <a href="#"><i className="icon-instagram" /></a>
                  <a href="#"><i className="icon-dribbble2" /></a>
                  <a href="#"><i className="icon-youtube" /></a>
                </p>
                <p>Copyright 2018 Marhaba Travels. All Rights Reserved. <br />Developed and maintain <i className="icon-heart3" /> by <a href="mailto:mdshoaib.alam22@gmail.com" target="_blank">Md Shoaib Alam</a> </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    
      
    );
  }
}
