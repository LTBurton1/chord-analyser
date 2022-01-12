import { useEffect, useState } from "react";

import "./Key.css";

function Key({ id, note, color, handleClick, selectedNotes }) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedNotes.length === 0) setIsSelected(false);
  }, [selectedNotes]);

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
