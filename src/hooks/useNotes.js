import useSound from "use-sound";
import noteAudio from "../audio/notes.wav";
import { notes, noteNames, intervals, chords } from "../data.js";

export default function useNotes() {
  const [play] = useSound(noteAudio, {
    sprite: {
      C: [0, 2500],
      Db: [2500, 2500],
      D: [5000, 2500],
      Eb: [7500, 2500],
      E: [10000, 2500],
      F: [12500, 2500],
      Gb: [15000, 2500],
      G: [17500, 2500],
      Ab: [20000, 2500],
      A: [22500, 2500],
      Bb: [25000, 2500],
      B: [27500, 2500],
    },
  });

  function playNote(note) {
    play({ id: note });
  }

  function playChord(notes) {
    notes.forEach(note => {
      play({ id: note });
    });
  }

  function findIntervalFormula(selectedNotes) {
    selectedNotes.sort((a, b) => (noteNames.indexOf(a) > noteNames.indexOf(b) ? 1 : -1));

    const indices = selectedNotes.map(note => {
      return noteNames.indexOf(note);
    });

    let intervalFormula = indices.map((num, index) => {
      const interval = indices[index + 1] - num;
      if (interval < 0) return interval + noteNames.length;
      else return interval;
    });

    intervalFormula = intervalFormula.slice(0, intervalFormula.length - 1);

    intervalFormula = intervalFormula.map(interval => {
      return intervals[interval];
    });

    return intervalFormula;
  }

  function getChords(selectedNotes, isFlat) {
    const intervalFormula = findIntervalFormula(selectedNotes);

    const foundChords = chords.filter(chord => {
      const formula = chord[1];
      return (
        selectedNotes.length === formula.length + 1 &&
        formula.every((interval, index) => interval === intervalFormula[index])
      );
    });

    if (!isFlat) {
      selectedNotes = selectedNotes.map(note => {
        const index = noteNames.indexOf(note);
        return notes[index].alternate;
      });
    }

    return formatChords(foundChords, selectedNotes);
  }

  function formatChords(chords, selectedNotes) {
    const formattedChords = chords.map(chord => {
      let rootNote;
      const chordQuality = chord[0];
      if (chordQuality.includes("1st inversion")) {
        rootNote = selectedNotes[selectedNotes.length - 1];
      } else if (chordQuality.includes("2nd inversion")) {
        rootNote = selectedNotes[selectedNotes.length - 2];
      } else if (chordQuality.includes("3rd inversion")) {
        rootNote = selectedNotes[selectedNotes.length - 3];
      } else rootNote = selectedNotes[0];

      return rootNote + chordQuality;
    });
    // Sort root position chords first in the list where possible
    return formattedChords.sort(a => (a[0] === selectedNotes[0] ? -1 : 0));
  }

  return { playNote, playChord, getChords };
}
