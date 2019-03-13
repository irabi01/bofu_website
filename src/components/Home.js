import React, { Component } from 'react'

// import {Router,tLink} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>bofu construction limited</h1>
                
                <div className="top_div"></div>
                <h2>We build the truth</h2>
                <div className="bottom_div"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_bofu">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="top_row">
                  <h1>We design, We build, We Maintain</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="contents">
                  <h1>Innovation</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contents">
                  <h1>Integrity</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contents">
                  <h1>Safety</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-4">
                <div className="contents">
                  <h1>Team Work</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contents">
                  <h1>Excellence</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contents">
                  <h1>Comitment</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="heading">
                    <h1>About us</h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="description">
                    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="quotation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Constant development of new technologies</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="container">
            <h1>Our services</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="service_content">
                  <i class="fas fa-cogs"></i>
                  <h1>Design</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_content">
                  <i class="fas fa-cogs"></i>
                  <h1>Renovation</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service_content">
                  <i class="fas fa-cogs"></i>
                  <h1>Construction</h1>
                  <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4 offset-md-4">
                 <a href="/" className="service_link">More services</a>
              </div>
            </div>
          </div>
        </div>

        <div className="our_projects">
          <div className="container">
            <h1>Our Projects</h1>
            <div className="row">
              <div className="col-md-3">
               <img src={require('../images/bg1.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg1.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/ramani.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg1.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-3">
               <img src={require('../images/bg1.jpg')} className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <i className="fas fa-list"></i>
                <h2>100+</h2>
                <h1>Pojects done</h1>
              </div>
              <div className="col-md-3">
                <i className="fas fa-align-center"></i>
                <h2>100+</h2>
                <h1>Ongoing Projects</h1>
              </div>
              <div className="col-md-3">
                <i className="fas fa-user"></i>
                <h2>400+</h2>
                <h1>Happy Clients</h1>
              </div>
              <div className="col-md-3">
                <i className="fas fa-user-clock"></i>
                <h2>24/7/365</h2>
                <h1>Working Hours</h1>
              </div>
            </div>
          </div>
        </div>
      

      </div>
    )
  }
}

export default Home
