import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";



const App = () => {
  return (
    <div>
      <Header />
      <Note className="note" />
      <Footer />
    </div>
  );
};

export default App;