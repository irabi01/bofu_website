import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>our contact</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_page_second_part">
          <div className="container">
            <h1>Quick contacts</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="email">
                  <i className="fa fa-envelope"></i>
                  <p>info@bofu.co.tz</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="phone">
                  <i className="fa fa-phone"></i>
                  <p>+255 7889966</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="location">
                  <i className="fa fa-map-marker"></i>
                  <p>Magomeni DSM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7309141812384!2d39.24633806978292!3d-6.802553947867357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0f57c1d445%3A0xa05a8c1da7c4d0d8!2sKibaruani!5e0!3m2!1sen!2stz!4v1554273302713!5m2!1sen!2stz" frameborder="0" allowfullscreen className="google_map" title="google-map"/>
        </div>
      </div>
    )
  }
}

export default Contact
