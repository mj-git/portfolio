import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ServiceCard extends Component {
  render() {
    return (
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">
            <this.props.icon />
          </span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{this.props.title}</h2>
          <p className="s-description text-center">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

ServiceCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
