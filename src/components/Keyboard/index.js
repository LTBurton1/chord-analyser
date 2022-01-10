import "./Keyboard.css";

import { notes } from "../../data";

import Key from "../Key";

function Keyboard({ isFlat, toggleSelected }) {
  return (
    <div id="Keyboard">
      {notes.map(({ name, alternate }) => (
        <Key
          id={name}
          key={name}
          note={isFlat ? name : alternate}
          color={name === alternate ? "white" : "black"}
          handleClick={toggleSelected}
        />
      ))}
    </div>
  );
}

export default Keyboard;
