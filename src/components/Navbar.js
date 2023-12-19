import React from 'react'
import White  from '../images/White Secondary Logo.png'
import Vector1  from '../images/Vector (1).png'
import Vector2  from '../images/Vector (2).png'
import Vector3  from '../images/Vector (3).png'
import Vector4  from '../images/Vector (4).png'
import Vector5  from '../images/Vector (5).png'
import Vector6  from '../images/Vector (6).png'
import Vector7  from '../images/Vector (7).png'
import Vector8  from '../images/Vector (8).png'
import Vector  from '../images/Vector.png'

function Navbar() {
  return (
    
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div className='atdigit'>
            <a class="navbar-brand" href="#">
            <img src={White} alt="Logo" class="logo"/>
                            <img src={Vector1} alt="Logo" class="logo1"/> 
                            <img src={Vector2} alt="Logo" class="logo2"/> 
                            <img src={Vector6} alt="Logo" class="logo3"/>
                            <img src={Vector5} alt="Logo" class="logo4"/> 
                            <img src={Vector4} alt="Logo" class="logo5"/> 
                            <img src={Vector3} alt="Logo" class="logo6"/>  
                            <img src={Vector7} alt="Logo" class="logo7"/> 
                            <img src={Vector8} alt="Logo" class="logo8"/> 
                            <img src={Vector} alt="Logo" class="logo9"/> 
                
            </a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto"> 
                <li class="nav-item active">
                  <a class="nav-link1" href="#">SERVICES </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link2" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link3" href="#">CONTACT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link4" href="#">CAREERS</a>
                </li>
              </ul>
            </div>

           
          </nav>

    
  )
}

export default Navbar