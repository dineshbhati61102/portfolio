import React from "react";

const About = () => {
  return (
    <>
      {/* <!--====================================================
                        ABOUT
    ======================================================--> */}
      <div class="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex d-column"
          id="about">
          <div className="my-auto">
            <img
              src="assets/img/logo-s.png"
              className="img-fluid mb-3"
              alt=""
            />
            <h1 className="mb-0">
              dinesh
              <span className="text-primary"> bhati</span>
            </h1>
            <div className="subheading mb-5">
              THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH
              <a href="#">THEMSBIT</a>
            </div>
            <p className="mb-5" style={{ maxWidth: "500px" }}>
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Dineshbhati6110/" target='_blank'>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/dineshbhati611/" target='_blank'>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/dinesh_bhati___jbm/" target='_blank'>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/dineshbhati61102" target='_blank'>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
