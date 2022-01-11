import { useState } from "react";

import "./App.css";
import flatSymbol from "../../images/flat.png";
import sharpSymbol from "../../images/sharp.png";

import Keyboard from "../Keyboard";
import ChordDisplay from "../Chord Display";

function App() {
  const [isFlat, setIsFlat] = useState(true);
  const [selectedNotes, setSelectedNotes] = useState([]);

  function toggleSelected(note) {
    if (!note.selected) setSelectedNotes([...selectedNotes, note.id]);
    else {
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
            <i className="fas fa-x"></i>
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
