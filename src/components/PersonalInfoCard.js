import React from "react";
import profilePicture from "../img/testimonial.JPG";

export default function PersonalInfoCard({ skills }) {
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
              <span className="title-s">Profile: </span>{" "}
              <span>Web Programmer</span>
            </p>
            <p>
              <span className="title-s">Email: </span>{" "}
              <span>mohit.in.reallife@gmail.com</span>
            </p>
            <p>
              <span className="title-s">Phone: </span>{" "}
              <span>+91-9765254368</span>
            </p>
          </div>
        </div>
      </div>
      <div className="skill-mf">
        <p className="title-s">Skill</p>
        {skills.map(skill => {
          return (
            <React.Fragment key={skill.skill}>
              <span>{skill.skill}</span>{" "}
              <span className="pull-right">{skill.rating}%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.rating}%` }}
                  aria-valuenow={skill.rating}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
