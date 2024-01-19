import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
      <div style={{marginBottom:40}}>
         <nav className = "navbar navbar-expand-lg bg-body-tertiary">
           <div className = "container-fluid">
                     <a className = "navbar-brand" href="#"><b>YumKingdom</b></a>
               <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className = "navbar-toggler-icon"></span>
              </button>
                 <div className = "collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                        <li className = "nav-item">
                            <NavLink to={"/home"} className = "nav-link " aria-current="page" >Home</NavLink>
                        </li> 
                        <li className = "nav-item">
                             <NavLink to={"/category"} className = "nav-link  "       aria-current="page" >Category</NavLink>
                        </li> 
                     </ul>
                     <ul className = 'navbar-nav d-flex'>
                         <li className = "nav-item">
                             <NavLink className = "nav-link active" aria-current="page" href="#">About Us</NavLink>
                         </li>
                     </ul>
                 </div>
            </div>
           </nav>
    </div>
  )
}
export default Navbar