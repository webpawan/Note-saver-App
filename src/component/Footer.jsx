import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  let date = new Date();
  let show = date.getFullYear();

  return (
    <>
      <motion.h5 initial={{opacity:0}} animate={{opacity:1}} className="bg-light py-2 mb-0 footer text-center">
        <i className="fa fa-copyright copyright mb-1 mx-1"></i>note-saver {show}
      </motion.h5>
    </>
  );
};

export default Footer;
