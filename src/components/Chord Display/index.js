import { useEffect, useState } from "react";

import "./Chord Display.css";
import { chordsData } from "../../data";

import useNotes from "../../hooks/useNotes";

function ChordDisplay({ isFlat, selectedNotes }) {
  const [chords, setChords] = useState([]);
  const { playChord } = useNotes();

  useEffect(() => {
    function getChords() {
      const found = chordsData.filter(
        chord =>
          chord[2].length === selectedNotes.length &&
          chord[2].every(note => selectedNotes.includes(note))
      );

      setChords(found);
    }
    getChords();
  }, [selectedNotes]);

  return chords.length > 0 ? (
    <div id="ChordDisplay">
      {chords.map(chord => (
        <p key={chord} onClick={() => playChord(selectedNotes)}>
          {isFlat ? chord[0] : chord[1]}
        </p>
      ))}
    </div>
  ) : (
    <></>
  );
}

export default ChordDisplay;
