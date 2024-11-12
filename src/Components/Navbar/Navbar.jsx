import React, { useState, useRef } from 'react'
import './Navbar.css'
import underline from '../../assets/underline4.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/icons8-menu-48.png'
import menu_close from '../../assets/icons8-close-window-40.png'
import logo from '../../assets/icons8-attract-customers-48.png';
const Navbar = () => {
const [menu,setMenu] =useState("home");
const menuRef = useRef();
const openMenu =()=> {
  menuRef.current.style.right="0";
}
const closeMenu =()=> {
  menuRef.current.style.right="-360px";
}
  return (
      <div className='navbar'>
<div className="logo-container">
<h1>Haileeyesus</h1>
    <img src={logo} alt="Logo" className="navbar-logo" />
   
  </div>
  <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open' />
<ul  ref={menuRef} className="nav-menu">
<img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
  <li><AnchorLink  className='anchor_link' offset={50}  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
  <li><AnchorLink  className='anchor_link' offset={50}  href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
  <li><AnchorLink  className='anchor_link' offset={50}  href='#services'><p onClick={()=>setMenu("service")}>Services</p></AnchorLink>{menu==="service"?<img src={underline} alt=''/>:<></>}</li>
  <li><AnchorLink  className='anchor_link' offset={50}  href='#mywork'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=''/>:<></>}</li>
  <li><AnchorLink  className='anchor_link' offset={50}  href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
</ul>
<div className="nav-connect"><AnchorLink  className='anchor_link' offset={50}  href='#contact'>Connect With Me</AnchorLink></div>

</div>
    
  )
}

export default Navbar
