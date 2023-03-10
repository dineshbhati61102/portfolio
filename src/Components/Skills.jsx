import React from 'react'

const Skills = () => {
  return (
    <>
     
     {/* <!--====================================================
                        SKILLS
    ======================================================-->        */}
    <div class="container-fluid p-0">
      <section class=" d-flex flex-column mt-5" id="skills">
         <div class="p-lg-5 p-3 skill-cover">
          <h3 class="text-center text-white">Coding Skills</h3>
          <div class="row text-center my-auto "> 
              <div class="col-md-3 col-sm-6">
                  <div class="skill-item">
                      <i class="fa fa-html5 fa-5x"></i>
                      <h2><span class="counter"> 84 </span><span>%</span></h2>
                      <p>HTML5</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="skill-item">
                      <i class="fa fa-css3 fa-5x"></i>
                      <h2><span class="counter"> 95 </span><span>%</span></h2>
                      <p>CSS3</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="skill-item">
                      <i class="fa fa-code fa-5x"></i>
                      <h2><span class="counter"> 65 </span><span>%</span></h2>
                      <p>REACT</p>
                  </div>
              </div>
              <div class="col-md-3 col-sm-6">
                  <div class="skill-item">
                      <i class="fa fa-globe fa-5x"></i>
                      <h2><span class="counter"> 89 </span><span>%</span></h2>
                      <p>JAVASCRIPT</p>
                  </div>
              </div>
          </div>
         </div> 
      </section>    
      </div>
      </>
  )
}

export default Skills
