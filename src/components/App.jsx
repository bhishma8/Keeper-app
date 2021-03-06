import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote(text) {
  return <Note title={text.title} content={text.content} />;
}

function App() {
  return (
    <div>
      <Header />
      <div>{notes.map(createNote)}</div>
      <Footer />
    </div>
  );
}
export default App;
