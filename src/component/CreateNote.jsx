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
  } = useContext(AppContext);

  return (
    <>
      <section className="input mx-auto w-50 mt-5">
        <form action="" onSubmit={setdata}>
          <div className="input-group mb-3">
            <input
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
              <button
                className="btn btn-danger mx-2 rounded-5 "
                id="red"
              ></button>

              <button
                className="btn btn-primary mx-2 rounded-5"
                id="blue"
              ></button>

              <button
                className="btn btn-dark mx-2 rounded-5"
                id="dark"
              ></button>
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
                <i className="fa-solid fa-book tagicon p-2 bg-dark text-light rounded mx-2"></i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> othes  work"
              >
                <i className="fa-solid tagicon fa-pen p-2 bg-dark text-light rounded mx-2"></i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> shopping time"
              >
                <i className="fa-solid tagicon fa-cart-shopping p-2 bg-dark text-light rounded mx-2"></i>
              </span>

              <span
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="--> Birthday"
              >
                <i className="fa-solid tagicon fa-cake-candles  p-2 bg-dark text-light rounded mx-2"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* -------- show note*/}

      {list.length > 0 && (
        <Note data={list} deletenote={deletenote} noteEdit={noteEdit} />
      )}
    </>
  );
};

export default CreateNote;
