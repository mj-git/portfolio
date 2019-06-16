import React from "react";
import bgImg from "../img/overlay-bg.jpg";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoIosMail
} from "react-icons/io";

export default function Contact() {
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row justify-content-md-center">
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        I am open for work. If you think there is something we
                        can build together or if you want to get the job done or
                        if you are looking out for a collaborator, please feel
                        free to reach out.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <IoIosMail />{" "}
                          <a
                            href="mailto:mohit.in.reallife@gmail.com"
                            target="_top"
                          >
                            mohit.in.reallife@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://www.instagram.com/mohit.ka.insta/"
                            target="blank"
                          >
                            <span className="ico-circle">
                              <IoLogoInstagram />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/mohit.jain.75098"
                            target="blank"
                          >
                            <span className="ico-circle">
                              <IoLogoFacebook />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/mj2112" target="blank">
                            <span className="ico-circle">
                              <IoLogoTwitter />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/ui-master/"
                            target="blank"
                          >
                            <span className="ico-circle">
                              <IoLogoLinkedin />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>Mohit Jain</strong>{" "}
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
