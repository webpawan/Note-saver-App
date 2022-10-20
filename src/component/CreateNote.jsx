import React, { useEffect, useState } from "react";
import Note from "./Note";

const getlocalstorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const CreateNote = () => {
  const [input, setInput] = useState({ id: "", title: "", desc: ""});
  const [list, setList] = useState(getlocalstorage());
  const [isediting, setisediting] = useState(false);
  const [myid, setid] = useState(null);
const [color, setcolor] = useState('white');

  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const pickcolor = (e) =>{
setcolor(e.target.id);

  }


  

  const setdata = (e) => {
    
    e.preventDefault();
    if (isediting) {
      setList(
        list.map((item) => {
          if (item.id === myid) {
            return { ...item, title: input.title, desc: input.desc };
          }
          return item;
        })
      );
      setisediting(false);
      setcolor('white');
      setInput({ id: "", title: "", desc: ""});
     
    } else {
      let newdata = { ...input, id: new Date().getTime().toString(),color };
      setList([...list, newdata]);
      setcolor('white');
      setInput({ id: "", title: "", desc: ""});
      
    }
  };

  const deletenote = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const noteEdit = (id) => {
    const edititem = list.find((item) => item.id === id);
    setisediting(true);
    setInput({ title: edititem.title, desc: edititem.desc });
    setid(id);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  

  return (
    <>
      <section className="input mx-auto w-50 my-5 ">
        <form action="" onSubmit={setdata} >
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
        <div className="d-flex align-items-center mt-3">
        <button type="submit" onClick={setdata}  className="btn btn-outline-primary my-2 me-5 d-inline">
            {!isediting ? (
              <i className="fa-solid fa-plus"></i>
            ) : (
              <i className="fa-solid fa-pen-to-square"></i>
            )}
          </button>
          
          <div className="d-flex mycolors " onClick={pickcolor}>
            <button className="btn btn-outline-primar y" >select colors</button>
            <button className="btn btn-danger mx-2 rounded-5"   id="red" ></button>
      
          <button className="btn btn-primary mx-2 rounded-5"  id="blue"></button>
         
          <button className="btn btn-dark mx-2 rounded-5"  id="dark"></button>
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
