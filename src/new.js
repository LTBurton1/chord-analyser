const selectedNotes = ["A", "C", "E", "G"];

const foundChords = findChords(selectedNotes);
const formattedChords = formatChords(foundChords, selectedNotes);

if (formattedChords.length === 0) console.log("No chords found");
else console.log(formattedChords);
