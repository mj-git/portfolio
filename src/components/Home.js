import React, { Component } from 'react';
import bgImage from '../img/work-7.jpg';
import Typed from 'react-typed';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }
  subtitle = [
    'Human Being',
    'Web Programmer',
    'Sports Enthusiast',
    'Freelancer'
  ];
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
                <strong className="text-slider">
                  <Typed
                    strings={this.subtitle}
                    typeSpeed={40}
                    loop={true}
                    backDelay={1100}
                    backSpeed={30}
                  />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
