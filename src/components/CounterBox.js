import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const CounterBox = ({ count, counterText, icon }) => {
  return (
    <div className="counter-box pt-4 pt-md-0">
      <div className="counter-ico">
        <span className="ico-circle">{icon}</span>
      </div>
      <div className="counter-num">
        <p className="counter">
          <CountUp end={count} duration={5} />
        </p>
        <span className="counter-text">{counterText}</span>
      </div>
    </div>
  );
};

CounterBox.propTypes = {
  count: PropTypes.number.isRequired,
  counterText: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default CounterBox;
