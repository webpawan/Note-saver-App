import React from "react";


const Note = ({data,deletenote,noteEdit}) => {
    console.log(data);
    return  <div className="container py-4 my-3">
                    <div className="row">
             {data.map((item)=>{
  const {id,title,desc} = item;
  return     <div  className="col-lg-4 col-md-3 col-sm-6 my-3" key={id}>
  <div className="card" >
<div className="card-body">
<h5 className="card-title py-2">{title}</h5>
<p className="card-text">{desc}</p>
<button  className="card-link btn btn-outline-danger" onClick={()=>deletenote(id)}><i className="fa-solid fa-trash"></i></button>
<button className="card-link btn btn-outline-primary" onClick={()=>noteEdit(id)}><i className="fa-solid fa-pen-to-square"></i> </button>
</div>
      </div>

</div>  


             })}
            
            
    </div>
</div>

  
     

}

export default Note