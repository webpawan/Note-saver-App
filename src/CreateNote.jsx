import React, { useEffect, useState } from "react";
import Note from "./Note";

const getlocalstorage = () =>{

let list = localStorage.getItem('list');
if(list){
return JSON.parse(localStorage.getItem('list'))
}else{
return []
}

}


const CreateNote = () => {
const [input, setInput] = useState({id:'',title:'',desc:''});
const [list, setList] = useState(getlocalstorage());
const [isediting, setisediting] = useState(false);
const [myid, setid] = useState(null);

const inputhandler = (e) =>{
const {name,value} = e.target;
setInput({...input,[name]:value});
}
 
const setdata = (e) =>{
  e.preventDefault();
if(isediting){

 setList(
  list.map((item)=>{
    if(item.id === myid){
      return {...item,title:input.title,desc:input.desc}
    }
    return item
  })
 )

  setisediting(false)
  setInput({id:'',title:'',desc:''}); 
}else{

let newdata = {...input,id:new Date().getTime().toString()};
setList([...list,newdata]);
setInput({id:'',title:'',desc:''});

}

}


const deletenote = (id) =>{
setList(list.filter((item)=>item.id !== id));
}

const noteEdit = (id) =>{
const edititem = list.find((item)=>item.id===id);
setisediting(true)
setInput({title:edititem.title,desc:edititem.desc})
setid(id);
}


useEffect(()=>{
localStorage.setItem('list',JSON.stringify(list));
},[list])


    return (
        <>
          <section className="input mx-auto w-50 my-5">
           <form action="" onSubmit={setdata}>
           <div className="input-group mb-3">
            <input type="text" className="form-control" required onChange={inputhandler} value={input.title} name='title' placeholder="Title" />
        </div>
        <div className="input-group">
        <textarea className="form-control m-50" onChange={inputhandler}  value={input.desc} name='desc'placeholder="write your note"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary my-2" >
            {!isediting ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-pen-to-square"></i>}
                </button>
           </form>
          </section>
          {/* -------- show note*/}
         {list.length > 0 && <Note data={list} deletenote={deletenote} noteEdit={noteEdit}/>}
       
        </>
  )



}

export default CreateNote;