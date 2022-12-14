import React from "react";
import { motion } from "framer-motion";

const Note = ({ data, deletenote, noteEdit }) => {
  return (
    <div className="container my-5">
      <div className="row">
        {data.map((item) => {
          const { id, title, desc, color, tag } = item;

          return (
            <motion.div
              className="col-lg-4 col-md-3  col-sm-6 my-4"
              key={id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div
                className="card shadow py-1 bg-light  text-light bg-dark "
                id={color}
              >
                <div className="card-body ">
                  <h5 className="card-title py-1">{title}</h5>
                  <p className="card-text">{desc}</p>

                  <div className="d-flex  align-items-center justify-content-between">
                    <div className="d-flex">
                      <button
                        className="card-link btn btn-outline-danger deleteIcon d-flex "
                        onClick={() => deletenote(id)}
                      >
                        {/* <i className="fa-solid fa-trash"></i> */}
                        <lord-icon
    src="https://cdn.lordicon.com/kfzfxczd.json"
    trigger="hover"
    colors="primary:#e4e4e4"
    style={{height:'25px',width:"25px"}}>
</lord-icon>
                      </button>

                      <button
                        className="card-link btn btn-outline-primary btn-delete d-flex deleteIcon"
                        onClick={() => noteEdit(id)}
                      >
                       <lord-icon
    src="https://cdn.lordicon.com/vufjamqa.json"
    trigger="hover"
    colors="primary:#e4e4e4"
    style={{height:'25px',width:"25px"}}>
</lord-icon>
                      </button>
                    </div>
                    <span className=" mt-1">
                      <i className={tag}></i>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Note;
