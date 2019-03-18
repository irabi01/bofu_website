import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
    <div>
      <div className="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Our services</h1>
                </div>
            </div>
        </div>
      </div>
      <div className="service_list">
          <div className="row">
            <div className="col-md-6">
              <i class="fas fa-cogs"></i>
              <h1>Renovation</h1>
              <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della</p>
            </div>
            <div className="col-md-6">
              <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-6">
              <i class="fas fa-cogs"></i>
              <h1>Renovation</h1>
              <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della</p>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default Services
