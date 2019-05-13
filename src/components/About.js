import React from 'react';
import PersonalInfoCard from './PersonalInfoCard';

export default function About() {
  return (
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <PersonalInfoCard />
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">About me</h5>
                    </div>
                    <p class="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at sem. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt.
                    </p>
                    <p class="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. porttitor at sem.
                    </p>
                    <p class="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                      pretium ut lacinia in, elementum id enim. Nulla porttitor
                      accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a.
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
