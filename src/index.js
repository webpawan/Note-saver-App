import React from "react";
import ReactDom from "react-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './Style.css';
ReactDom.render(
    <>
        <App/>
    </>,
    document.getElementById('root')
)
