import "./App.css";
import { notes, chords } from "./data";

import Key from "./components/Key";

function App() {
  return (
    <div id="app">
      <header>
        <h1>CHORD ANALYSER</h1>
      </header>

      <main>
        <h2>Enter some notes and see the chord name below!</h2>
        <div id="keys">
          {notes.map(({ name, alternate }) => (
            <Key key={name} note={name} color={alternate ? "black" : "white"} />
          ))}
        </div>
      </main>

      <footer>Created by Liam Burton © 2022</footer>
    </div>
  );
}

export default App;
