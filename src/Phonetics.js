import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <br />
      <div className="Phonetics-text">{props.phonetic.text}</div>
    </div>
  );
}
