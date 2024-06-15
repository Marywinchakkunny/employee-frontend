import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className="container row">
               <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div className="row">
                       <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <nav className="navbar navbar-expand-lg bg-body-tertiary">
                               <div className="container-fluid">
                                   <a className="navbar-brand" href="#">EMPLOYEE FORM</a>
                                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                       <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div className="collapse navbar-collapse" id="navbarNav">
                                       <ul className="navbar-nav">

                                           <li className="nav-item">
                                               <Link class="nav-link" to="/">EMPLOYEE DETAILS</Link>
                                           </li>
                                           <li className="nav-item">
                                               <Link class="nav-link" to="/Searchemployee">SEARCH</Link>
                                           </li>
                                           <li className="nav-item">
                                               <Link class="nav-link" to="/Viewall">VIEW</Link>
                                           </li>


                                       </ul>
                                   </div>
                               </div>
                           </nav>



                       </div>
                   </div>
               </div>
           </div>





       </div>
  )
}

export default Navbar
