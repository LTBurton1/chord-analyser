import React from "react";
import "./Key.css";

function Key({ note, color }) {
  return (
    <div id={note} className={`key ${color}`}>
      {note}
    </div>
  );
}

export default Key;
