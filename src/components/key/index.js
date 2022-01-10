import { useState } from "react";

import "./Key.css";

function Key({ id, note, color, handleClick }) {
  const [isSelected, setIsSelected] = useState(false);

  function toggleSelected(e) {
    setIsSelected(!isSelected);
    handleClick(e.target);
  }

  return (
    <div
      id={id}
      className={`key ${color} ${isSelected ? "selected" : ""}`}
      onClick={toggleSelected}
      selected={isSelected}
    >
      {note}
    </div>
  );
}

export default Key;
