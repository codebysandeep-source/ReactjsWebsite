import React from "react";
import Common from "./Common";
import web from "../src/images/img2.svg";

const About=()=>{
    return(
        <React.Fragment>
            <Common name="Welcome to About page" image={web} visit="/contact" btn="Contact Now"/>
            </React.Fragment>
        );
}
export default About;