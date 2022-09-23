import React from "react";

const CreateNote = () => {
    return (
        <>
          <section className="input mx-auto w-50 my-5">
            <div className="input-group mb-3">
            <input type="text" className="form-control " placeholder="Username" />
        </div>
        <div className="input-group ">
        <textarea className="form-control m-50" placeholder="write your note"></textarea>
                </div>
                <button className="btn btn-outline-primary my-2">
                <i className="fa-solid fa-plus"></i>
                </button>

          </section>

        </>
  )



}

export default CreateNote;