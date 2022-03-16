import "./Keyboard.css";

import { notes } from "../../data";

import Key from "../Key/index.js";

function Keyboard({ isFlat, selectedNotes, toggleSelected }) {
  return (
    <div id="Keyboard">
      {notes.map(({ name, alternate }) => (
        <Key
          id={name}
          key={name}
          note={isFlat ? name : alternate}
          color={name === alternate ? "white" : "black"}
          handleClick={toggleSelected}
          selectedNotes={selectedNotes}
        />
      ))}
    </div>
  );
}

export default Keyboard;
