import React,{useState,useEffect} from 'react'
import {Link} from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png';


function Navbar(){
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
         window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false); 
         })
    },[])

    const[mobileMenu,setMobileMenu]=useState(false);
    function togglemenu(){
        mobileMenu? setMobileMenu(false):setMobileMenu(true)

    }

    return(
        <nav className={ `container ${sticky? 'dark-nav':''}`}>
          <div className="logo-sec"><img src={logo} className="logo" alt=""/>
            <h1>SparkSity</h1></div>  
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testiminials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon'  onClick={togglemenu}/>
        </nav>

    )
}
export default Navbar;