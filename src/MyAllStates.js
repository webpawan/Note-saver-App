import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = React.createContext();
const getlocalstorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const keys = ["title", "desc", "color"];

const AppProvider = ({ children }) => {
  const [input, setInput] = useState({ id: "", title: "", desc: "" });
  const [color, setcolor] = useState("");
  const [tags, setTags] = useState({ tag: "" });
  const [list, setList] = useState(getlocalstorage());
  const [isediting, setisediting] = useState(false);
  const [myid, setid] = useState(null);
  const [query, setQuery] = useState("");

  const myinput = useRef("");

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
    } else {
      notify();
    }
  };

  const notify = () => {
    toast.warn("Please write some title", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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

  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });
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
        query,
        setQuery,
        search,
        myinput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
