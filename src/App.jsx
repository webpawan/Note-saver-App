import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="content mainBody mx-auto">
            <Header />
            <CreateNote />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
