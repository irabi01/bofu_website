import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navigation fixed-top">
            <Link className="navbar-brand" to="/">Bofu Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="cpBtn">
                <div></div>
                <div></div>
                <div></div>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/showcases">Showcase</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contacts</Link>
                    </li>
                    </ul>
                </div>
            </nav>
      </div>
    )
  }
}

export default Navigation
