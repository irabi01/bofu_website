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
                            <h1>about bofu</h1>
                            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="other_contents">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="vision">
                            <h1>Vision</h1>
                            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mission">
                            <h1>Mission</h1>
                            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="objective">
                            <h1>Objective</h1>
                            <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto </p>
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
