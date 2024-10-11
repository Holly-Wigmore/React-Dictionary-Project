import React from "react";
export default function Dictionary() {
  return (
    <div className="Dictionary">
      <h4>Search For a Word</h4>
      <form>
        <input type="search" placeholder="Enter a Word..." />
        <input type="submit" value="Search" className="btn btn-dark" />
      </form>
    </div>
  );
}
