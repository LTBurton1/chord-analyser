import useSound from "use-sound";
import notes from "../audio/notes.wav";

export default function useNotes() {
  const [play] = useSound(notes, {
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

  return { playNote, playChord };
}
