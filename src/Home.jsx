import React from "react";
import Common from "./Common";
import web from "../src/images/img1.svg";

const Home=()=>{
    return(
    <React.Fragment>
        <Common name="Grow your Business with" image={web} visit="/service" btn="Get Started"/>
    </React.Fragment>
        );
}
export default Home;    