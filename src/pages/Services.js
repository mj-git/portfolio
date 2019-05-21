import React from "react";
import countersBg from "../img/counters-bg.jpg";
import CounterBox from "../components/CounterBox";
import {
  IoMdDesktop,
  IoIosCodeWorking,
  IoMdCamera,
  IoIosPhonePortrait,
  IoMdBrush,
  IoIosCheckmark
} from "react-icons/io";
import ServiceCard from "../components/ServiceCard";

export default function Services({ services, counters }) {
  return (
    <React.Fragment>
      <section id="service" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <ServiceCard {...service} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div
        className="section-counter paralax-mf bg-image"
        style={{ backgroundImage: `url(${countersBg})` }}
      >
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => {
              return (
                <div className="col-sm-3 col-lg-3" key={index}>
                  <CounterBox {...counter} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Services.defaultProps = {
  services: [
    {
      icon: IoMdDesktop,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    },
    {
      icon: IoIosCodeWorking,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    },
    {
      icon: IoMdCamera,
      title: "Photography",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    },
    {
      icon: IoIosPhonePortrait,
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    },
    {
      icon: IoMdBrush,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    },
    {
      icon: IoMdBrush,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
    }
  ],
  counters: [
    {
      icon: <IoIosCheckmark size="2em" style={{ strokeWidth: 15 }} />,
      count: 10,
      counterText: "Years of Experience"
    },
    {
      icon: <IoIosCheckmark />,
      count: 10,
      counterText: "Years of Experience"
    },
    {
      icon: <IoIosCheckmark />,
      count: 10,
      counterText: "Years of Experience"
    },
    {
      icon: <IoIosCheckmark />,
      count: 10,
      counterText: "Years of Experience"
    }
  ]
};
