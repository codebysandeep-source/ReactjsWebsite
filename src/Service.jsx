import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service=()=>{
    return(
        <React.Fragment>
            <div className="my-5">
            <h3 className="text-center"><b>Our Services</b></h3>
            </div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
            Sdata.map((val,ind)=>{
                return(
                    <Card key={ind} imgsan={val.imgsan} titlesan={val.titlesan} btnsan={val.btnsan}/>
                    );
            })
        }
          </div>
          </div>
          </div>
          </div>
 
        </React.Fragment>
    );
}
export default Service;