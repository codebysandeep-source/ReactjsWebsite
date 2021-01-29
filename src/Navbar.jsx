import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar=()=>{

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/"><b>SanDev</b></NavLink>
    
   
      <div className="navbar-nav ml-auto mb-2 mb-lg-0">

          <NavLink exact className="nav-link" activeClassName="menu_active" to="/">Home</NavLink>
          <NavLink exact className="nav-link" activeClassName="menu_active" to="/service">Service</NavLink>
          <NavLink exact className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink> 
          <NavLink exact className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
        
      </div>
    
    </div>

</nav>

</div>
</div>
</div>
        </React.Fragment>
    );
}
export default Navbar;