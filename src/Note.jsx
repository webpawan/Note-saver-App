import React from "react";


const Note = (props) => {

  const deletenote = () => {
    props.deleteitem(props.id);
}

    return (
        <>
        
                   <div className="container py-4 my-3">
                    <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-6 my-3">
                        <div className="card" >
  <div className="card-body">
    <h5 className="card-title py-2">{props.title}</h5>
                  <p className="card-text">{ props.content}</p>
    <a href="" className="card-link" onClick={deletenote}><i className="fa-solid fa-trash"></i></a>
    <a href="" className="card-link"><i className="fa-solid fa-pen-to-square"></i> </a>
  </div>
</div>
            </div>
    </div>
</div>

        
        </>
    )

}

export default Note