import React from "react";
import Header from "./component/Header";
import CreateNote from "./component/CreateNote";
import Footer from "./component/Footer";

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
