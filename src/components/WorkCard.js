import React from "react";
import PropTypes from "prop-types";

function WorkCard({ companyUrl, companyLogo, companyName, designation, role }) {
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-img">
          <a href={companyUrl}>
            <img src={companyLogo} alt="" className="img-fluid" />
          </a>
        </div>
        <div className="card-body">
          <div className="card-category-box">
            <div className="card-category">
              <h6 className="category">{companyName}</h6>
            </div>
          </div>
          <h3 className="card-title">{designation}</h3>
          <p className="card-description">{role}</p>
        </div>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  companyUrl: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default WorkCard;
