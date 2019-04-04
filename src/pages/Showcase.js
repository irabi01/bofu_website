import React, { Component } from 'react'

export class Showcase extends Component {
  render() {
    return (
      <div>
        <div className="showcase_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Our projects</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="project_list">
          <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-sm m-2 in_hand">In-hand</button>
              <button className="btn btn-sm m-2 under_taken">Under-taken</button>
            </div>
          </div>
            <div className="row my-4">
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img1.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img4.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img3.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img1.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img4.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project_details">
                    <img src={require('../images/img3.jpeg')} alt="bofu-project" className="img-fluid"/>
                    <h1>Type: residential house</h1>
                    <p>Location: Tabata Segerea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase
