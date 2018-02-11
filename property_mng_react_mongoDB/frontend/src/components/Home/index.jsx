import React, { Component } from 'react';


export default class Home extends Component {
  render() {
    return (
      <div>
     
        <div>    
          <h3 className="home_page_header1">BAYCC <br/>
          <span className="home_page_header2">(Bay Area Cultural Connections)</span>
          <br/>Property Management</h3>
          <h4 className="home_page_text">
            Bay Area Cultural Connections is a 501(c)(3) nonprofit organization that was founded in 2002 by a group of volunteers comprised of business people, engineers, academicians, and students. 
            Our mission is formed specifically to promote an academic way of life by  teaching great universal values such as love, truth, faith, brotherhood, solidarity, and sharing; to build ideal good relationships and strong family values among the society;  
            to bring acceptable good morals and ethics to our community; and to help establish a happy lively, believing, and tolerant society.
          </h4>
        </div>
         <div>
           <img src={require("../../img/baycc_fest.jpg")} className="home_page_img1"  alt="house"/>
        </div>
       
        <footer className="home_page_footer">
          <hr/>
            <div className="container"> 
              <div className="row">
                <div className="col-md-4">
                    <p className="h_p_footer1">
                        Baycc
                      <div className="h_p_footer2">
                        1257 Tasman Dr Unit A B, Sunnyvale, CA 94089
                        </div>
                    </p>
                  </div>

                  <div className="col-md-1">
                  </div> 

                  <div className="col-md-3">
                    <a href="https://www.facebook.com/">
                      <img src={require("../../img/face.png")} alt="twitter" style={{margin:5}} width="20"/>
                    </a>
                    <a href="https://twitter.com/">
                      <img src={require("../../img/twitter.png")} alt="twitter"  width="20"/>
                    </a>
                  </div>
                  
                  <div className="col-md-2">         
                    <div>
                      <p className="h_p_footer1">
                        <div>
                        Contact Us
                        </div>
                        <div className="h_p_footer2">
                          Phone : (408) 752-2965
                          <br/>
                          Email : <a href="mailto:contact@baycc.org" target="_top">contact@baycc.org</a>
                        </div>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <hr/>
          </footer>
      </div>
    );
  }
}