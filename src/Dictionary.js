import React, { useState } from "react";
import Definition from "./Definition";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  function searchWord(event) {
    event.preventDefault();
  }
  function getWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h4>Search For a Word</h4>
      <form className="Dictionary-form" onSubmit={searchWord}>
        <input type="search" placeholder="Enter a Word..." onChange={getWord} />
        <input type="submit" value="Search" className="btn btn-dark" />
      </form>
      <Definition word={word} />
    </div>
  );
}
