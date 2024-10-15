import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchWord(event) {
    event.preventDefault();
    search();
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <h4>Search For a Word</h4>
          <form className="Dictionary-form" onSubmit={searchWord}>
            <input
              type="search"
              placeholder={word}
              className="form-control"
              onChange={getWord}
            />
            <p className="hint">Suggested words: cat, tennis, travelling...</p>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
