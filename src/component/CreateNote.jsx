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
    myinput
  } = useContext(AppContext);




  return (
    <>
      <section className="input mx-auto w-50 mt-5">
        <form action="" onSubmit={setdata}>
          <div className="input-group mb-3">
            <input
ref={myinput}
              type="text"
              className="form-control"
              required
              onChange={inputhandler}
              value={input.title}
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="input-group">
            <textarea
              className="form-control m-50"
              onChange={inputhandler}
              value={input.desc}
              name="desc"
              placeholder="write your note"
            ></textarea>
          </div>
        </form>
        <div className="d-flex align-items-center my-3">
          <button
            type="submit"
            onClick={setdata}
            className="btn btn-outline-primary my-2 me-5 d-inline"
          >
            {!isediting ? (
              <i className="fa-solid fa-plus"></i>
            ) : (
              <i className="fa-solid fa-pen-to-square"></i>
            )}
          </button>

          <div className="d-md-flex align-items-center justify-content-center mx-atuo">
            <div
              className="d-flex mycolors pickcolorsize  py-2 px-2"
              onClick={pickcolor}
            >
              <button className="btn btn-outline-primar ">
                select colors
                <i className="fa-sharp fa-solid fa-paintbrush"></i>
              </button>
              <motion.button whileInView={{boxShadow:' 3px 3px 7px red'} } whileTap={{boxShadow:'1px 1px 4px red',transition: { duration: .1 } ,y:'2px'}}
                className="btn btn-danger mx-2 rounded-5 "
                id="red"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="red"
              ></motion.button>

              <motion.button whileInView={{boxShadow:' 3px 3px 7px cyan'} } whileTap={{boxShadow:'1px 1px 4px cyan',transition: { duration: .1 } ,y:'2px'}}
                className="btn btn-primary mx-2 rounded-5"
                id="blue"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="blue"
              ></motion.button>

              <motion.button whileInView={{boxShadow:' 3px 3px 7px #6b0303'} } whileTap={{boxShadow:'1px 1px 4px #6b0303',transition: { duration: .1 } ,y:'2px'}}
                className="btn btn-dark mx-2 rounded-5"
                id="red-blue"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="red-blue"
              ></motion.button>
            </div>

            <span className="mx-2">
              Tag<i className="fa-sharp fa-solid fa-tag "></i>
            </span>

            <div
              className="d-flex mycolors pickcolorsize  p-2"
              onClick={pickTag}
            >
              <span 
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> study time"
              >
                <motion.i   whileInView={{boxShadow:' 3px 3px 7px black'} } whileTap={{y:'-30px'}} className="fa-solid fa-book tagicon p-2 bg-dark text-light rounded mx-2"></motion.i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> othes  work"
              >
                <motion.i whileInView={{boxShadow:' 3px 3px 7px black'} } whileTap={{boxShadow:'1px 1px 4px black',y:'-30px'}} className="fa-solid tagicon fa-pen p-2 bg-dark text-light rounded mx-2"></motion.i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> shopping time"
              >
                <motion.i whileInView={{boxShadow:' 3px 3px 7px black'} } whileTap={{boxShadow:'1px 1px 4px black',y:'-30px'}} className="fa-solid tagicon fa-cart-shopping p-2 bg-dark text-light rounded mx-2"></motion.i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> Birthday"
              >
                <motion.i whileInView={{boxShadow:' 3px 3px 7px black'} } whileTap={{boxShadow:'1px 1px 4px black',y:'-30px'}} className="fa-solid tagicon fa-cake-candles  p-2 bg-dark text-light rounded mx-2"></motion.i>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* -------- show note*/}

      {list.length > 0 && (
        <Note data={search(list)} deletenote={deletenote} noteEdit={noteEdit} />
      )}
    </>
  );
};

export default CreateNote;
