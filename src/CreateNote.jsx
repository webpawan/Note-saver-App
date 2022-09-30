import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: '',
    content:'',
  });

  const InputEvent = (e) => {
    // const value = e.target.value; 
    // const name = e.target.name; 
  
    // es6 array des.. 
    const { name, value } = e.target;

    setnote((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
   
  }

  const addevent = () => {
    props.passnote(note);
    setnote({
      title: '',
      content:'',
    })
}

    return (
        <>
          <section className="input mx-auto w-50 my-5">
            <div className="input-group mb-3">
            <input type="text" className="form-control" name="title" onChange={InputEvent} value={note.title} placeholder="Title" />
        </div>
        <div className="input-group">
        <textarea className="form-control m-50" name="content" onChange={InputEvent} value={note.content} placeholder="write your note"></textarea>
                </div>
                <button className="btn btn-outline-primary my-2" onClick={addevent}>
                <i className="fa-solid fa-plus"></i>
                </button>

          </section>

        </>
  )



}

export default CreateNote;