import React, { useState } from "react";
import Note from "./Note";

const CreateNote = () => {
const [input, setInput] = useState({id:'',title:'',desc:''});
const [list, setList] = useState([]);

const inputhandler = (e) =>{
const {name,value} = e.target;
setInput({...input,[name]:value});
}
 
const setdata = (e) =>{
e.preventDefault();
let newdata = {...input,id:new Date().getTime().toString()};
setList([...list,newdata]);
}

    return (
        <>
          <section className="input mx-auto w-50 my-5">
           <form action="" onSubmit={setdata}>
           <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={inputhandler} value={input.title} name='title' placeholder="Title" />
        </div>
        <div className="input-group">
        <textarea className="form-control m-50" onChange={inputhandler}  value={input.desc} name='desc'placeholder="write your note"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary my-2" >
                <i className="fa-solid fa-plus"></i>
                </button>
           </form>
          </section>
          {/* -------- show note*/}
          <Note/>
        </>
  )



}

export default CreateNote;