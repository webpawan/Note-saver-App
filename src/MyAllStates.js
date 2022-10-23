import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

const getlocalstorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [input, setInput] = useState({ id: "", title: "", desc: "" });
  const [color, setcolor] = useState("");
  const [tags, setTags] = useState({ tag: "" });
  const [list, setList] = useState(getlocalstorage());
  const [isediting, setisediting] = useState(false);
  const [myid, setid] = useState(null);

  const setdata = (e) => {
    e.preventDefault();
    if (isediting) {
      setList(
        list.map((item) => {
          if (item.id === myid) {
            return {
              ...item,
              title: input.title,
              desc: input.desc,
              color: color,
              tag: tags.tag,
            };
          }
          return item;
        })
      );
      setisediting(false);
      setcolor(" ");
      setTags({ tag: " " });
      setInput({ id: "", title: "", desc: "" });
    } else if (input.title !== "") {
      let newdata = {
        ...input,
        id: new Date().getTime().toString(),
        color,
        ...tags,
      };
      setList([...list, newdata]);
      setcolor("white");
      setTags({ tag: "" });
      setInput({ id: "", title: "", desc: "" });
    }
  };

  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const pickcolor = (e) => {
    setcolor(e.target.id);
  };
  const pickTag = (e) => {
    let mytag = e.target.className;
    setTags({ tag: mytag });
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
    <AppContext.Provider
      value={{
        input,
        setInput,
        inputhandler,
        color,
        setcolor,
        pickcolor,
        tags,
        setTags,
        pickTag,
        setdata,
        deletenote,
        noteEdit,
        list,
        setList,
        isediting,
        setisediting,
        myid,
        setid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
