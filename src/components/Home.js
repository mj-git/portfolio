import React, { Component } from 'react';
import bgImage from '../img/intro-bg.jpg';
import Typed from 'typed.js';

export default class Home extends Component {
  subtitle = ['Web Programmer', 'UI Developer', 'Freelancer'];
  typed = new Typed(this.el, {
    strings: this.subtitle,
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am Mohit Jain</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">
                  CEO DevFolio,Web Developer,Web Designer,Frontend
                  Developer,Graphic Designer
                </span>
                <strong className="text-slider" ref={el => this.el = el} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
