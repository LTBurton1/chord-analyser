import { useEffect, useState } from "react";

import "./Chord Display.css";
import { chords } from "../../data";

function ChordDisplay({ isFlat, selectedNotes }) {
  const [foundChords, setFoundChords] = useState([]);

  useEffect(() => {
    function getChords() {
      const found = chords.filter(
        chord =>
          chord[2].length === selectedNotes.length &&
          chord[2].every(note => selectedNotes.includes(note))
      );

      setFoundChords(found);
    }
    getChords();
  }, [selectedNotes]);

  return foundChords.length > 0 ? (
    <div id="ChordDisplay">
      {foundChords.map(chord => (
        <p key={chord}>{isFlat ? chord[0] : chord[1]}</p>
      ))}
    </div>
  ) : (
    <></>
  );
}

export default ChordDisplay;
