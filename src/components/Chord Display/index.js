import { useEffect, useState } from "react";

import "./Chord Display.css";

import useNotes from "../../hooks/useNotes";

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
