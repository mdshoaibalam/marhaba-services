import React, { Component } from 'react';
import './app.css'; 
import coverBg1 from "./images/cover_bg_1.jpg";
import coverBg2 from "./images/cover_bg_2.jpg";
import coverBg3 from "./images/cover_bg_3.jpg";
import coverBg4 from "./images/cover_bg_4.jpg";


import Macca1 from "./images/macca1.jpg";
import Macca2 from "./images/macca2.jpg";
import Macca3 from "./images/macca3.jpg";
import Safarmarwa from "./images/safamarwa.jpg";
import abraham from "./images/abraham.jpg";
import madina from "./images/madina.jpg";

export default class Home extends Component {
 constructor(props){
   super(props);
    
 }    

  render() {
     
    return (
        <div>
        <div className="fh5co-hero">
        <div className="fh5co-overlay"></div>
        <div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(src/client/images/cover_bg_1.jpg)'}}>
            <div className="desc">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-md-5">
                            <div className="tabulation animate-box">
    
                                    
                        <div style={{height:'290px',width:'380px'}}>                              
                                 <div className="neat">
    <div>
        <img style={{height:'440px',width:'459px'}} src={Macca1} />
        <img style={{height:'440px',width:'459px'}} src={Safarmarwa}/>
        <img style={{height:'440px',width:'459px'}} src={abraham}/>
        <img style={{height:'440px',width:'459px'}} src={madina}/>
    </div>
</div>
                                </div>
    
                            </div>
                        </div>
                        <div className="desc2 animate-box">
                            <div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                                <h3>Makkah - 600 MTRS & MADINA 200 MTRS</h3>
                                <span className="price">&#8377; 63,000</span>
                             <p><a className="btn btn-primary btn-lg" href="#">Hurry ! </a></p>
                             <h2>Exclusive Limited Time Offer</h2>
                            </div>
                            
                        </div>       
                          
                    </div>
                </div>
            </div>
        </div>    
    </div>    
    <div id="fh5co-blog-section" className="fh5co-section-gray">
   <div className="container">
      <div className="row">
     
         <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Exclusive Packages</h3>
            <p>Call now for a quote, let British Hajj and Umrah secure your Umrah 2018 package for you today.</p>            
         </div>
      </div>
   </div>
   <div className="container">
      <div className="row row-bottom-padded-md">
         <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-blog animate-box">
               <a href="#"><img style={{height:'240px'}}  className="img-responsive" src={Macca1} alt="" /></a>
               <div className="blog-text">
                  <div className="prod-title">
                     <h3><a href="#">Ramzan Umrah Package </a></h3>
                     <h4>(Delux Class)</h4>
                     <span className="posted_by">1st - 15th Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 95,000/-</a></span>
                     <span className="posted_by">15th - 30th Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 1,15,000/-</a></span>
                     <span className="posted_by">Entire Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 1,30,000/-</a></span>
                      <p><a href="#">Learn More...</a></p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-blog animate-box">
               <a href="#"><img style={{height:'240px'}} className="img-responsive" src={Macca2} alt="Not available" /></a>
               <div className="blog-text">
               <div className="prod-title">
                     <h3><a href="#">Ramzan Umrah Package </a></h3>
                     <h4>(Economy Class)</h4>
                     <span className="posted_by">1st - 15th Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 78,000/-</a></span>
                     <span className="posted_by">15th - 30th Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 95,000/-</a></span>
                     <span className="posted_by">Entire Ramzan</span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 1,10,000/-</a></span>
                      <p><a href="#">Learn More...</a></p>
                  </div>
               </div>
            </div>
         </div>
         <div className="clearfix visible-sm-block"></div>
         <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-blog animate-box">
               <a href="#"><img style={{height:'240px'}}  className="img-responsive" src={Macca3} alt="" /></a>
               <div className="blog-text">
               <div className="prod-title">
                     <h3><a href="#">Umrah with Dubai Tour</a></h3>
                     <h4>(5 Night stay at Hotel)</h4>
                     <span className="posted_by">Just pay extra </span> 
                     <span className="comment"><a style={{color:'#F78536'}} href="">&#8377; 35,000/-</a></span>                      
                     <p>Apply on both Delux and Economy Class</p>
                     <br /><br/>
                      <p><a href="#">Learn More...</a></p>
                  </div>
               </div>
            </div>
         </div>
         <div className="clearfix visible-md-block"></div>
      </div>
      <div className="col-md-12 text-center animate-box">
         <p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Packages <i className="icon-arrow-right22"></i></a></p>
      </div>
   </div>
</div>
    <div id="fh5co-testimonial" style={{backgroundImage:coverBg1}}>
    <div className="container">
        <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Why you should choose Marhaba Services ?</h2> <br /> <br />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="box-testimony animate-box">
                    <blockquote>
                        <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                        <p>&ldquo;We beleive in 100% customer Satisfaction . We provide best service from day 1 to till last day our experts will be with you. &rdquo;</p>
                    </blockquote>
                    <p className="author">Ikhlaque Ahmed, CEO  <span className="subtext">Creative Director</span></p>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className="box-testimony animate-box">
                    <blockquote>
                        <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                        <p>&ldquo;We are proud of the high standards we achieve and the value for money we offer. &rdquo;</p>
                    </blockquote>
                    <p className="author">Khalid Hussain, Manager </p>
                </div>
                
                
            </div>
            <div className="col-md-4">
                <div className="box-testimony animate-box">
                    <blockquote>
                        <span className="quote"><span><i className="icon-quotes-right"></i></span></span>
                        <p>&ldquo;The support of expert road crew is especially important in countries where the language and culture is very different from our own and our expert will be there with you each & every moment. &rdquo;</p>
                    </blockquote>
                    <p className="author">Ikhlaque Ahmed, CEO </p>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>      
    );
  }
}
