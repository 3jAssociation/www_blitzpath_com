import React,{useState} from 'react'
import logo from '../../images/image_logo.png'
//import logo1 from '../../images/image_logo.png'
import {Link} from 'react-router-dom'
import "./Navbar.css"
// import DayNightToggle from 'react-day-and-night-toggle'
function Navbar({isDarkMode,setIsDarkMode}) {
  const [open,setOpen] = useState(false)
  const handleOpen = (e)=>{
    const name = e.target.name
    if(name==='image'){
      setOpen(false)
    }
    else{

      setOpen(!open)
    }
  }
  return (
    <div className="container">
    <header className="nav-item" id = "items">
        <div className="logo-section">
          <div className="logo">
          <Link to="/">
            <img src={logo} onClick={handleOpen} name='image' alt="" />
            </Link>
            </div>
           
        </div>
        <nav className='desktop-device'>
            <ul  className='navlink'>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/customer_stories">Customer Stories</Link></li>
                <li><Link to="/about/#about">About Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <button className='loginbutton'><li><Link to="http://app.blitzpath.in/">Login</Link></li></button>
            </ul>
        </nav>
        <nav className='mobile-device'>
            <div className="nav-container">
              <div className="dropdown" style={{border: "none"}}>
                <button className="dropbtn" onClick={handleOpen} >
                <div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                  </div></button>
                <div className="dropdown-content" style={{display:open?'block':'none'}}>

                  
                  <span onClick={handleOpen}><Link to="/services">Services</Link></span>
                  <span onClick={handleOpen}><Link to="/customer_stories">Customer Stories</Link></span>
                  <span onClick={handleOpen}><Link to="/about">About Us</Link></span>
                  <span onClick={handleOpen}><Link to="/career">Careers</Link></span>
                  <span onClick={handleOpen}><Link to="/contact">Contact</Link></span>
                  <span onClick={handleOpen}><Link to="http://app.blitzpath.in/">Login</Link></span>
                </div>
              </div>
            </div>
          </nav>
    </header>
    </div>
  )
}

export default Navbar
