import React from "react";
import PersonalInfoCard from "../components/PersonalInfoCard";

export default function About() {
  const skills = [
    {
      skill: "Core Javascript",
      rating: "85"
    },
    {
      skill: "HTML",
      rating: "80"
    },
    {
      skill: "CSS",
      rating: "70"
    },
    {
      skill: "React JS",
      rating: "75"
    },
    {
      skill: "Knockout JS",
      rating: "80"
    },
    {
      skill: "Node JS",
      rating: "75"
    }
  ];
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <PersonalInfoCard skills={skills} />
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About</h5>
                    </div>
                    <p className="lead">
                      Mohit Jain is a Full Stack Web Developer. He strives to
                      build immersive and beautiful web applications through
                      carefully crafted code and user-centric design.
                    </p>
                    <p className="lead">
                      He likes to code things from scratch, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                    <p className="lead">
                      He values simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                    <p className="lead">
                      The work he provides is of highest quality, fully
                      responsive, and tested in a wide range of devices. He
                      takes great care to ensure each project is well-documented
                      and easily maintainable so you can enhance a website as
                      your company grows.
                    </p>
                    <p className="lead">
                      When not online, Mohit can be found in Pune, India
                      searching for the perfect vintage items for his home,
                      trying out a new recipe in the kitchen, experimenting in
                      gardening, or lifting weights in the gymnasium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
