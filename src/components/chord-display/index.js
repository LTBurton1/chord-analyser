import { useEffect, useState } from "react";

import "./chord-display.css";

import useNotes from "../../hooks/useNotes.js";

function ChordDisplay({ isFlat, selectedNotes }) {
  const [chords, setChords] = useState([]);
  const { playChord, getChords } = useNotes();

  useEffect(() => {
    setChords(getChords(selectedNotes, isFlat));
    // eslint-disable-next-line
  }, [selectedNotes, isFlat]);

  return (
    chords && (
      <div id="ChordDisplay">
        {chords.map(chord => (
          <p key={chord} onClick={() => playChord(selectedNotes)}>
            {chord}
          </p>
        ))}
      </div>
    )
  );
}

export default ChordDisplay;
