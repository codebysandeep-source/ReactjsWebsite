import React from "react";
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
    return(
    <React.Fragment>
        <section id="header" className=" d-flex align-item-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
        <div className="row">
        <div className="des col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justift-content-center">
            <h2><b>{props.name}</b> <strong className="brand-name"><br/>SanDev</strong></h2>
            <h4 className="cgray my-3">We are the team talented developer making website</h4>
            <div className="mt-3">
                <NavLink to={props.visit} className="btn btn-outline-success ">{props.btn}</NavLink>
            </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
         <img src={props.image} className="animated" />
        </div>
        
        </div>
                
                </div>
            </div>
        </div>
        </section>
    </React.Fragment>
        );
}
export default Common;