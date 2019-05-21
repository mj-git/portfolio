import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";

export default class NavBar extends Component {
  state = {
    navbar: "navbar-trans"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  handleScroll = () => {
    this.setState({
      navbar: window.pageYOffset > 50 ? "navbar-reduce" : "navbar-trans"
    });
  };
  toggleNavbar = () => {};

  render() {
    return (
      <>
        <nav
          className={`navbar navbar-b navbar-expand-md fixed-top ${
            this.state.navbar
          }`}
          id="mainNav"
        >
          <div className="container">
            <span className="navbar-brand" onClick={this.scrollToTop}>
              Portfolio
            </span>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNavbar}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                {this.props.items.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      activeClass="active"
                      className="nav-link"
                      to={item.hash}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired
    })
  )
};

NavBar.defaultProps = {
  items: [
    { name: "Home", hash: "home" },
    { name: "About", hash: "about" },
    { name: "Services", hash: "service" },
    { name: "Work", hash: "work" },
    { name: "Blog", hash: "blog" },
    { name: "Contact", hash: "contact" }
  ]
};
