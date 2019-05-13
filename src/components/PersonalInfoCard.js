import React from 'react';
import profilePicture from '../img/testimonial.JPG';

export default function PersonalInfoCard() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-6 col-md-5">
          <div className="about-img">
            <img
              src={profilePicture}
              className="img-fluid rounded b-shadow-a"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-7">
          <div className="about-info">
            <p>
              <span className="title-s">Name: </span> <span>Mohit Jain</span>
            </p>
            <p>
              <span className="title-s">Profile: </span>{' '}
              <span>Web Programmer</span>
            </p>
            <p>
              <span className="title-s">Email: </span>{' '}
              <span>mohit.in.reallife@gmail.com</span>
            </p>
            <p>
              <span className="title-s">Phone: </span>{' '}
              <span>+91-9765254368</span>
            </p>
          </div>
        </div>
      </div>
      <div className="skill-mf">
        <p className="title-s">Skill</p>
        <span>HTML</span> <span className="pull-right">85%</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '85%' }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <span>CSS3</span> <span className="pull-right">75%</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '75%' }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <span>PHP</span> <span className="pull-right">50%</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '50%' }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '90%' }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
