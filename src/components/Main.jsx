import React, { useState, useEffect } from "react"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { logo } from '../assets'
import bgVideo from '../assets/bgVideo.mp4'
import About from '../components/About'


const Main = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='mainbg'>
    {/* <div className='vidoverlay'></div> */}
    <video autoPlay loop muted id='bg-video'>
        <source src={bgVideo} type="video/mp4" />
    </video>
      
          <div className='imgcontent'>
            
            <img src={logo} alt="gracelogo" className="w-[450px] h-[50px]" class='center'/> 
            <nav className='navbar'>
              <div className='navbar-container'>
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item1'>
                    <button></button>
                    <navLink
                      to='/'
                      className='nav-links1'
                    >
                      
                      <a href={`#`}>Home</a>
                    </navLink>
                  </li>
                  <li className='nav-item2'>
                    <button></button>
                    <navLink
                      
                      className='nav-links'
                     
                    >
                      <a href={`#aboutus`}>About us</a>
                    </navLink>
                    

                  </li>
                  <li className='nav-item3'>
                    <button></button>
                      <navLink
                        className='nav-links1'
                      >
                        
                        <a href={`#services`}>Services</a>
                      </navLink>
                  </li>
                  <li className='nav-item4'>
                      <button></button>
                        <navLink
                          className='nav-links'
                        >
                            
                            <a href={`#portfolio`}>Portfolio</a>

                        </navLink>
                  </li>
                  <li className='nav-item1'>
                    <button></button>
                    <navLink
                      className='nav-links1'
                    >
                     
                      <a href={`#contact`}>Contact</a>

                    </navLink>
                  </li>
                </ul>
              </div>
            </nav>

          
   
          
          </div>
          <div className="mulu">
          <p>Inspired by {" "}
            <span>
              <a href="//www.mulu.love" target="_blank">
                mulu.love
              </a>  
            </span>
          </p>
          </div>
          
        
    </div>
  )
}

 export default Main