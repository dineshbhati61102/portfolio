import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return ( <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Link className="navbar-brand " to="/">
        <span className="d-block d-lg-none  mx-0 px-0"><img src="assets/img/logo-white.png" alt="" className="img-fluid"/></span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt=""/>
        </span>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link " to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/award">Awards</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/contact">Contact</Link>
                </li>
            
            </ul>
        </div>
    </nav>

    


   


   


    </>)}

export default Navbar
