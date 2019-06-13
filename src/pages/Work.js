import React from "react";
import WorkCard from "../components/WorkCard";
import logo1 from "../img/work-1.jpeg";
import logo2 from "../img/work-2.jpg";
import logo3 from "../img/work-3.png";

export default function Work() {
  const workDetails = [
    {
      companyUrl: "https://www.mediaocean.com/",
      companyLogo: logo3,
      companyName: "Mediaocean",
      designation: "Senior Software Developer",
      role:
        "Develop and enhance features of several modules for the core integrated product for Agencies in the Advertising domain using ReactJs, Angular, Knockout"
    },
    {
      companyUrl: "https://www.amdocs.com/",
      companyLogo: logo2,
      companyName: "Amdocs",
      designation: "Software Developer",
      role:
        "As a part of R & D team worked on the core products related to Telecom domain with tech stack including Backbone and Knockout."
    },
    {
      companyUrl: "https://www.infosys.com/",
      companyLogo: logo1,
      companyName: "Infosys",
      designation: "Systems Engineer",
      role:
        "Worked as Functional SAP consultant initially and then moved into Web Development projects and worked primarily on Core Javascript"
    }
  ];
  return (
    <section id="work" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Professional Career</h3>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          {workDetails.map(work => (
            <WorkCard key={work.companyName} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
