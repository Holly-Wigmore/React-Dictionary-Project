import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${word} definiton`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
