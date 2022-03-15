import { useState } from "react";

import "./App.css";
import flatSymbol from "../../images/flat.png";
import sharpSymbol from "../../images/sharp.png";
import notes from "./audio/notes.wav";

import Keyboard from "../Keyboard";
import ChordDisplay from "../Chord Display";
import useSound from "use-sound";

function App() {
  const [isFlat, setIsFlat] = useState(true);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [play] = useSound(notes, {
    sprite: {
      C4: [0, 2500],
      Db4: [2500, 2500],
      D4: [5000, 2500],
      Eb4: [7500, 2500],
      E4: [10000, 2500],
      F4: [12500, 2500],
      Gb4: [15000, 2500],
      G4: [17500, 2500],
      Ab4: [20000, 2500],
      A4: [22500, 2500],
      Bb4: [25000, 2500],
      B4: [27500, 2500],
    },
  });

  function toggleSelected(note) {
    console.log(note);
    if (!note.selected) {
      setSelectedNotes([...selectedNotes, note.id]);
      play({ id: `${note.id}4` });
    } else {
      const index = selectedNotes.indexOf(note.id);
      setSelectedNotes([...selectedNotes.slice(0, index), ...selectedNotes.slice(index + 1)]);
    }
  }

  function clearSelected() {
    setSelectedNotes([]);
  }

  function toggleFlats() {
    setIsFlat(!isFlat);
  }

  return (
    <div className="noselect" id="app">
      <header>
        <h1>CHORD ANALYSER</h1>
      </header>

      <main>
        <h2>Enter some notes and see the chord name below!</h2>

        <div className="controls">
          <button className="btn" id="sharps-flats-btn" onClick={toggleFlats}>
            {isFlat ? (
              <img src={sharpSymbol} width="50%" alt="" />
            ) : (
              <img src={flatSymbol} width="40%" alt="" />
            )}
          </button>
          <button className="btn" id="clear-btn" onClick={clearSelected}>
            Clear
          </button>
        </div>

        <Keyboard isFlat={isFlat} selectedNotes={selectedNotes} toggleSelected={toggleSelected} />
        <ChordDisplay isFlat={isFlat} selectedNotes={selectedNotes} />
      </main>

      <footer>Created by Liam Burton © 2022</footer>
    </div>
  );
}

export default App;
