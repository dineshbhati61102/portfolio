import React from 'react'

const Contact = () => {
  return (
    <>
     
    {/* <!--====================================================
                          CONTACT
    ======================================================-->        */}
    <div class="container-fluid p-0">
    <section className="resume-section p-3 p-lg-5 d-flex flex-column">
          <div className="row my-auto" id="contact"> 
            <div className="col-md-8">
              <div className="contact-cont">
                <h3>CONTACT Us</h3>
                <div className="heading-border-light"></div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
              </div>   
              <div className="row con-form">
                <div className="col-md-12">
                  <input type="text" name="full-name" placeholder="Full Name" className="form-control"/>
                </div>
                <div className="col-md-12">
                  <input type="text" name="email" placeholder="Email Id" className="form-control"/>
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" placeholder="Subject" className="form-control"/>
                </div>
                <div className="col-md-12"><textarea name="" id=""></textarea></div>
                <div className="col-md-12 sub-but"><button className="btn btn-general btn-white" role="button">Send</button></div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-5"> 
              <div className="contact-cont2"> 
                <div className="contact-add contact-box-desc">
                  <h3><i className="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                  <p>Madhu Vihar, Khora Colony <br/>
                  Noida, India <br/></p>
                </div>
                <div className="contact-phone contact-side-desc contact-box-desc">
                  <h3><i className="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                  <p>931 026 7227 <br/>926 799 2162</p>
                </div>
                <div className="contact-mail contact-side-desc contact-box-desc">
                  <h3><i className="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
                <address className="address-details-f"> 
                  Email: <a href="mailto:info@themsbit.com" className="">dineshbhati61102@gmail.com</a>
                </address>
                <ul className="list-inline social-icon-f top-data">
                  <li><a href="https://www.facebook.com/Dineshbhati6110/" target="_empty"><i className="fa top-social fa-facebook" style={{color:" #4267b2", borderColor:"#4267b2"}}></i></a></li>
                  <li><a href="https://twitter.com/dineshbhati611" target="_empty"><i className="fa top-social fa-twitter" style={{color:" #4AB3F4", borderColor:"#4AB3F4"}}></i></a></li>
                  <li><a href="https://www.instagram.com/dinesh_bhati___jbm/" target="_empty"><i className="fa fa-brands fa-instagram" style={{color:" #e24343", borderColor:"#c545f3"}}></i></a></li> 
                </ul>
                </div>
              </div>
            </div> 
          </div>
      </section>

      <section className=" d-flex flex-column" id="maps">
        <div id="map">
          <div className="map-responsive m-3">
             <iframe iframe-has-title="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.9055979355383!2d77.34248244789507!3d28.615085887383284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e1e96a36d9%3A0xc496dfb21970d9c0!2sRajput%20Traders!5e0!3m2!1sen!2sin!4v1672146431057!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:"0"}}  allowFullScreen loading="lazy" ></iframe>
          </div>
        </div>
      </section>
</div>

    
    </>
  )
}

export default Contact
