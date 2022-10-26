import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AppContext } from "../MyAllStates";
import Note from "./Note";

const CreateNote = () => {
  const {
    input,
    inputhandler,
    pickcolor,
    pickTag,
    setdata,
    deletenote,
    noteEdit,
    list,
    isediting,
    search,
  } = useContext(AppContext);

  return (
    <>
      <section className="input mx-auto w-75 mt-5">
        <form action="" onSubmit={setdata}>
          <motion.div className="input-group mb-3" initial={{x:'10vw',opacity:0}} animate={{x:'0',opacity:1}} transition={{
  delay: 0.5,
 
}}>
            <input
              type="text"
              className="form-control"
              required
              onChange={inputhandler}
              value={input.title}
              name="title"
              placeholder="Title"
            />
          </motion.div>
          <motion.div className="input-group" initial={{x:'-10vw',opacity:0}} animate={{x:'0',opacity:1}} transition={{
  delay: 0.8,
 
}}>
            <textarea
              className="form-control m-50"
              onChange={inputhandler}
              value={input.desc}
              name="desc"
              placeholder="write your note"
            ></textarea>
          </motion.div>
        </form>

        <motion.div className=" row  d-flex align-items-center justify-content-between p-2 flex-wrap" initial={{opacity:0,y:'-50px'}} animate={{opacity:1,y:'0px'}} transition={{
  delay: 1,  duration: 1,
 
}}>
          <div className=" col-2 mx-auto text-center col-md-2 col-lg-2 ">
            <button
              type="submit"
              onClick={setdata}
              className="btn btn-outline-primary plus-btn "
            >
              {!isediting ? (
                <i className="fa-solid fa-plus"></i>
              ) : (
                <i className="fa-solid fa-pen-to-square"></i>
              )}
            </button>
          </div>

          <div className=" col-10 col-md-10 col-lg-10 d-flex align-items-center text-center justify-content-center mx-atuo  flex-wrap">
            <div className="d-flex mycolors  p-2" onClick={pickcolor}>
              <button className="btn btn-outline-primar ">
                select colors
                <i className="fa-sharp fa-solid fa-paintbrush"></i>
              </button>
              <motion.button
                whileInView={{
                  boxShadow: " 3px 3px 7px rgba(255, 0, 0, 0.755)",
                }}
                whileTap={{
                  boxShadow: "1px 1px 8px rgba(255, 0, 0, 0.455)",
                  transition: { duration: 0.1 },

                  y: "2px",
                }}
                whileHover={{ y: "-5px", scale: 1.1 }}
                className="btn btn-danger m-2  rounded-5 element-size "
                id="red"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="red"
              ></motion.button>

              <motion.button
                whileHover={{ y: "-5px", scale: 1.1 }}
                whileInView={{
                  boxShadow: " 3px 3px 7px rgba(0, 255, 255, 0.741)",
                }}
                whileTap={{
                  boxShadow: "1px 1px 4px rgba(0, 255, 255, 0.441)",
                  transition: { duration: 0.1 },
                  scale: 0.9,
                  y: "2px",
                }}
                className="btn btn-primary m-2 rounded-5  element-size "
                id="blue"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="blue"
              ></motion.button>

              <motion.button
                whileHover={{ y: "-5px", scale: 1.1 }}
                whileInView={{ boxShadow: " 3px 3px 10px rgba(0, 0, 0, 0.8)" }}
                whileTap={{
                  boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.432)",
                  scale: 0.9,
                  y: "2px",
                }}
                className="btn btn-dark m-2  rounded-5  element-size "
                id="red-blue"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="red-blue"
              ></motion.button>
            </div>

            <div className="d-flex mycolors   flex-wrap align-items-center">
              <span className="mx-2">
                Tag<i className="fa-sharp fa-solid fa-tag "></i>
              </span>

              <div className="" onClick={pickTag}>
                <motion.i
                 data-bs-toggle="tooltip"
                 data-bs-placement="bottom"
                 title="coding time"
                  whileInView={{
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.532)",
                  }}
                  whileHover={{ y: "-5px", scale: 1.1 }}
                  whileTap={{
                    scale: 0.9,
                    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.232)",
                  }}
                  className="fa-solid fa-code p-2 bg-dark  text-light tagicon  rounded m-2 "
                ></motion.i>

                <motion.i
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="exercise time"
                  whileInView={{
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.532)",
                  }}
                  whileHover={{ y: "-5px", scale: 1.1 }}
                  whileTap={{
                    scale: 0.9,
                    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.232)",
                  }}
                  className="fa-solid bg-dark text-light fa-dumbbell p-2  rounded m-2"
                ></motion.i>

                <motion.i
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Shopping "
                  whileInView={{
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.532)",
                  }}
                  whileHover={{ y: "-5px", scale: 1.1 }}
                  whileTap={{
                    scale: 0.9,
                    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.232)",
                  }}
                  className="fa-solid tagicon fa-cart-shopping p-2 bg-dark text-light rounded m-2"
                ></motion.i>

                <motion.i
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Birthday "
                  whileInView={{
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.532)",
                  }}
                  whileHover={{ y: "-5px", scale: 1.1 }}
                  whileTap={{
                    scale: 0.9,
                    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.232)",
                  }}
                  className="fa-solid tagicon fa-cake-candles  p-2 bg-dark text-light rounded m-2"
                ></motion.i>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* -------- show note*/}

      <motion.div initial={{opacity:0,scale:1.5 }} animate={{opacity:1,scale:1}} transition={{
  delay: 1.5,  duration: 3  ,
  type: "spring",
      
  stiffness: 100
}}>
      {list.length > 0 && (
        <Note data={search(list)} deletenote={deletenote} noteEdit={noteEdit} />
      )}
      </motion.div>
    </>
  );
};

export default CreateNote;
