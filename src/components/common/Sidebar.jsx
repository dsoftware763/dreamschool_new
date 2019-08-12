import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

const Sidebar = (props) => {
  const {Menu, path} = props
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={path}>
              <img src={Logo} alt="logo"/>
          </Link>
    
        
          <hr className="sidebar-divider my-0"/>
    
          <Menu/>

         
    
       
    
        </ul>
        )
        //  End of Sidebar
    
}

export default Sidebar;