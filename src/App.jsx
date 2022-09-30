import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
const App = () => {
    const [additem, setadditem] = useState([]);
    const addnote = (note) => {
        setadditem((prevdata) => {
        return [...prevdata,note]
        })
    }
    
    const ondelete = (id) => {
        setadditem((olddata) => {
            olddata.filter(( curdata, index )=> {
    return index !== id;
            })
        })
    }


    return (
        <>
            <div className="main">
            <div className="row">
                <div className=" mainBody mx-auto">
                <Header/>
                <CreateNote passnote={addnote}> </CreateNote>
                        {/* <Note />  */}

                        {additem.map((curdata, index) => {
                            return <Note
                                key={index}
                                id={index}
                                title={curdata.title}
                                content={curdata.content}
                                deleteitem = {ondelete}/>
                           
                        })}
                        
                       
                <Footer /> 
                </div>
            </div> 
        </div>
            

        </>

    )

}

export default App;