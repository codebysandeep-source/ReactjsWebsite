import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import  "./index.css";
import {BrowserRouter} from "react-router-dom";
import Service from "./Service";

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
,document.getElementById("root"));

