import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <div className="about_page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About Bofu</h1>
                    </div>
                    <div className="col-md-6">
                        <h1>Images here</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="about_content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                     <img src={require('../images/bg2.jpg')} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="about_desc">
                            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default About
