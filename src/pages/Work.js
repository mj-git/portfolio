import React from "react";
import WorkCard from "../components/WorkCard";
import logo1 from "../img/work-1.jpeg";
import logo2 from "../img/work-2.jpg";
import logo3 from "../img/work-3.png";

export default function Work() {
  const workDetails = [
    {
      companyUrl: "https://www.infosys.com/",
      companyLogo: logo1,
      companyName: "Infosys",
      designation: "Systems Engineer",
      role:
        "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
    },
    {
      companyUrl: "https://www.amdocs.com/",
      companyLogo: logo2,
      companyName: "Amdocs",
      designation: "Software Developer",
      role:
        "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
    },
    {
      companyUrl: "https://www.mediaocean.com/",
      companyLogo: logo3,
      companyName: "Mediaocean",
      designation: "Senior Software Developer",
      role:
        "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
    }
  ];
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Professional Career</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
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
