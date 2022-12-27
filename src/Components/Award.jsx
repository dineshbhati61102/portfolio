import React from 'react'

const Award = () => {
  return (
    <>
      {/* <!--====================================================
                           AWARDS
    ======================================================-->        */}
    <div class="container-fluid p-0">
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div className="row my-auto">
              <div className="col-12">
                <h2 className="  text-center">Awards</h2>
                <div className="mb-5 heading-border"></div>
              </div> 
              <div className="main-award" id="award-box">
                  <div className="award">
                      <div className="award-icon"></div>
                      <div className="award-content">
                          <span className="date">Oct 2019 - Feb 2020</span>
                          <h5 className="title">Frontend Certified Developer</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                  </div>
                  <div className="award">
                      <div className="award-icon"></div>
                      <div className="award-content">
                          <span className="date">Jul 2022 - Dec 2022</span>
                          <h5 className="title">Mern Stack Certified Developer</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>  
    </div>
    </>
  )
}

export default Award
