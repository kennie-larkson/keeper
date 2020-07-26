import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "./../notes";

const createNote = (note) => {
  return <Note key={note.id} title={note.title} content={note.content} />;
};

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
};

export default App;
