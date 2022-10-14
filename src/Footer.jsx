import React from "react";


const Footer = () => {
    let date = new Date();
    let show = date.getFullYear(); 
    return (
        <>
            <h5 className="bg-light py-2 mb-0 footer"><i className="fa fa-copyright "></i>note-saver {show}</h5>
        </>
)

}

export default Footer