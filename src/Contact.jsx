import React, { useState} from "react";

const Contact=()=>{

    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });

    const inputeventsan = (event) => {
        const {name,value} = event.target;

        setData((previousValuesan)=>{
            return({
                ...previousValuesan,
                [name] : value,
            });
        });

    };

    const formsubmitsan = (e) => {
        e.preventDefault();
        alert(`FullName : ${data.fullname} , PhoneNumber : ${data.phone} , Email : ${data.email} , Message : ${data.message} `);
    };
    return(
        <React.Fragment>
            <div className="my-5">
                <h3 className="text-center">Contact Us</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                    <form onSubmit={formsubmitsan}>
    <div className="mb-3">
    <label className="form-label">Full Name</label>
    <input type="text" value={data.fullname} onChange={inputeventsan} name="fullname" placeholder="Enter full name" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number</label>
    <input type="tel" value={data.phone} onChange={inputeventsan} name="phone" placeholder="Enter phone number" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" value={data.email}  onChange={inputeventsan} name="email" placeholder="Enter email address" className="form-control" />
    <div className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Message/Comment</label>
    <textarea name="message" value={data.message} onChange={inputeventsan} placeholder="Enter text here..."></textarea>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-success">Submit</button>
</form><br/>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Contact;