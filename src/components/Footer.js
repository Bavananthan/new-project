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
function Footer() {
  return (
    
       

<div class="newfooder"> 
    <div class="fooder">
        <div class="fooder1">
                    <div class="imagefooder">
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
                                </div>            
            
                        <div class="fooder_text">
                            <p> Your digital strategy should complement the overall marketing strategy
                            of the company. In online marketing, each component will never work in 
                            isolation and every business needs a different mix. We provide a clear
                                concept and strategic overview to find the most efficient model for
                                your business.</p>
                        </div>
        </div>

                <div class="colom1">
                    <h2>Our Technologies</h2>
                                            <div class="list"  >
                                                <ul>
                                                    <li><a href="#">ReactJS</a></li>
                                                    <li><a href="#">Gatsby</a></li>
                                                    <li><a href="#">NextJS</a></li>
                                                    <li><a href="#">NodeJS</a></li>
                                                    <li><a href="#">GraphQL</a></li>
                                                    <li><a href="#">Laravel</a></li>
                                                </ul>
                                            </div> 
                </div>
                    <div class="colom2">
                        <h2>Our Services</h2>
                                                <ul>
                                                    <li><a href="#">Social Media Marketing</a></li>
                                                    <li><a href="#">Web & Mobile App<br/> Development</a></li>
                                                    <li><a href="#">Data & Analytics</a></li>
                                                    <li><a href="#">Google Marketing Solutions</a></li>
                                                    <li><a href="#">Search Engine Optimization</a></li>
                                                </ul>
                    </div>
                    
    </div>
                        <div class="d4">
                        <hr/>
                                                <p>Privacy policy | Terms & Conditions</p>

                        </div> 
</div>
    
    
  )
}

export default Footer