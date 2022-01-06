export const notes = [
  { name: "C" },
  { name: "Db", alternate: "C#" },
  { name: "D" },
  { name: "Eb", alternate: "D#" },
  { name: "E" },
  { name: "F" },
  { name: "Gb", alternate: "F#" },
  { name: "G" },
  { name: "Ab", alternate: "G#" },
  { name: "A" },
  { name: "Bb", alternate: "A#" },
  { name: "B" },
];

export const chords = [
  // C Chords
  ["C", "C", ["C", "E", "G"]],
  ["Cm", "Cm", ["C", "Eb", "G"]],
  ["C°", "C°", ["C", "Eb", "Gb"]],
  ["C+", "C+", ["C", "E", "Ab"]],
  ["Csus2", "Csus2", ["C", "D", "G"]],
  ["Csus4", "Csus4", ["C", "F", "G"]],
  ["C6", "C6", ["C", "E", "G", "A"]],
  ["Cm6", "Cm6", ["C", "Eb", "G", "A"]],
  ["Cadd9", "Cadd9", ["C", "D", "E", "G"]],
  ["Cmaj7", "Cmaj7", ["C", "E", "G", "B"]],
  ["Cm7", "Cm7", ["C", "Eb", "G", "Bb"]],
  ["C7", "C7", ["C", "E", "G", "Bb"]],
  ["Cm7b5", "Cm7b5", ["C", "Eb", "Gb", "Bb"]],
  ["C°7", "C°7", ["C", "Eb", "Gb", "A"]],
  ["Cmin(maj7)", "Cmin(maj7)", ["C", "Eb", "G", "B"]],

  // Db/C# Chords
  ["Db", "C#", ["Db", "F", "Ab"]],
  ["Dbm", "C#m", ["Db", "E", "Ab"]],
  ["Db°", "C#°", ["Db", "E", "G"]],
  ["Db+", "C#+", ["Db", "F", "A"]],
  ["Dbsus2", "C#sus2", ["Db", "Eb", "Ab"]],
  ["Dbsus4", "C#sus4", ["Db", "Gb", "Ab"]],
  ["Db6", "C#6", ["Db", "F", "Ab", "Bb"]],
  ["Dbm6", "C#m6", ["Db", "E", "Ab", "Bb"]],
  ["Dbadd9", "C#add9", ["Db", "Eb", "F", "Ab"]],
  ["Dbmaj7", "C#maj7", ["Db", "F", "Ab", "C"]],
  ["Dbm7", "C#m7", ["Db", "E", "Ab", "B"]],
  ["Db7", "C#7", ["Db", "F", "Ab", "B"]],
  ["Dbm7b5", "C#m7b5", ["Db", "E", "G", "B"]],
  ["Db°7", "C#°7", ["Db", "E", "G", "Bb"]],
  ["Dbmin(maj7)", "C#min(maj7)", ["Db", "E", "Ab", "C"]],

  // D Chords
  ["D", "D", ["D", "Gb", "A"]],
  ["Dm", "Dm", ["D", "F", "A"]],
  ["D°", "D°", ["D", "F", "Ab"]],
  ["D+", "D+", ["D", "Gb", "Bb"]],
  ["Dsus2", "Dsus2", ["D", "E", "A"]],
  ["Dsus4", "Dsus4", ["D", "G", "A"]],
  ["D6", "D6", ["D", "Gb", "A", "B"]],
  ["Dm6", "Dm6", ["D", "F", "A", "B"]],
  ["Dadd9", "Dadd9", ["D", "E", "Gb", "A"]],
  ["Dmaj7", "Dmaj7", ["D", "Gb", "A", "Db"]],
  ["Dm7", "Dm7", ["D", "F", "A", "C"]],
  ["D7", "D7", ["D", "Gb", "A", "C"]],
  ["Dm7b5", "Dm7b5", ["D", "F", "Ab", "C"]],
  ["D°7", "D°7", ["D", "F", "Ab", "B"]],
  ["Dmin(maj7)", "Dmin(maj7)", ["D", "F", "A", "Db"]],

  // Eb/D# Chords
  ["Eb", "D#", ["Eb", "G", "Bb"]],
  ["Ebm", "D#m", ["Eb", "Gb", "Bb"]],
  ["Eb°", "D#°", ["Eb", "Gb", "A"]],
  ["Eb+", "D#+", ["Eb", "G", "B"]],
  ["Ebsus2", "D#sus2", ["Eb", "F", "Bb"]],
  ["Ebsus4", "D#sus4", ["Eb", "Ab", "Bb"]],
  ["Eb6", "D#6", ["Eb", "G", "Bb", "C"]],
  ["Ebm6", "D#m6", ["Eb", "Gb", "Bb", "C"]],
  ["Ebadd9", "D#add9", ["Eb", "F", "G", "Bb"]],
  ["Ebmaj7", "D#maj7", ["Eb", "G", "Bb", "D"]],
  ["Ebm7", "D#m7", ["Eb", "Gb", "Bb", "Db"]],
  ["Eb7", "D#7", ["Eb", "G", "Bb", "Db"]],
  ["Ebm7b5", "D#m7b5", ["Eb", "Gb", "A", "Db"]],
  ["Eb°7", "D#°7", ["Eb", "Gb", "A", "C"]],
  ["Ebmin(maj7)", "D#min(maj7)", ["Eb", "Gb", "Bb", "D"]],

  // E Chords
  ["E", "E", ["E", "Ab", "B"]],
  ["Em", "Em", ["E", "G", "B"]],
  ["E°", "E°", ["E", "G", "Bb"]],
  ["E+", "E+", ["E", "Ab", "C"]],
  ["Esus2", "Esus2", ["E", "Gb", "B"]],
  ["Esus4", "Esus4", ["E", "A", "B"]],
  ["E6", "E6", ["E", "Ab", "B", "Db"]],
  ["Em6", "Em6", ["E", "G", "B", "Db"]],
  ["Eadd9", "Eadd9", ["E", "Gb", "Ab", "B"]],
  ["Emaj7", "Emaj7", ["E", "Ab", "B", "Eb"]],
  ["Em7", "Em7", ["E", "G", "B", "D"]],
  ["E7", "E7", ["E", "Ab", "B", "D"]],
  ["Em7b5", "Em7b5", ["E", "G", "Bb", "D"]],
  ["E°7", "E°7", ["E", "G", "Bb", "Db"]],
  ["Emin(maj7)", "Emin(maj7)", ["E", "G", "B", "Eb"]],

  // F Chords
  ["F", "F", ["F", "A", "C"]],
  ["Fm", "Fm", ["F", "Ab", "C"]],
  ["F°", "F°", ["F", "Ab", "B"]],
  ["F+", "F+", ["F", "A", "Db"]],
  ["Fsus2", "Fsus2", ["F", "G", "C"]],
  ["Fsus4", "Fsus4", ["F", "Bb", "C"]],
  ["F6", "F6", ["F", "A", "C", "D"]],
  ["Fm6", "Fm6", ["F", "Ab", "C", "D"]],
  ["Fadd9", "Fadd9", ["F", "G", "A", "C"]],
  ["Fmaj7", "Fmaj7", ["F", "A", "C", "E"]],
  ["Fm7", "Fm7", ["F", "Ab", "C", "Eb"]],
  ["F7", "F7", ["F", "A", "C", "Eb"]],
  ["Fm7b5", "Fm7b5", ["F", "Ab", "B", "Eb"]],
  ["F°7", "F°7", ["F", "Ab", "B", "D"]],
  ["Fmin(maj7)", "Fmin(maj7)", ["F", "Ab", "C", "E"]],

  // Gb/F# Chords
  ["Gb", "F#", ["Gb", "Bb", "Db"]],
  ["Gbm", "F#m", ["Gb", "A", "Db"]],
  ["Gb°", "F#°", ["Gb", "A", "C"]],
  ["Gb+", "F#+", ["Gb", "Bb", "D"]],
  ["Gbsus2", "F#sus2", ["Gb", "Ab", "Db"]],
  ["Gbsus4", "F#sus4", ["Gb", "B", "Db"]],
  ["Gb6", "F#6", ["Gb", "Bb", "Db", "Eb"]],
  ["Gbm6", "F#m6", ["Gb", "A", "Db", "Eb"]],
  ["Gbadd9", "F#add9", ["Gb", "Ab", "Bb", "Db"]],
  ["Gbmaj7", "F#maj7", ["Gb", "Bb", "Db", "F"]],
  ["Gbm7", "F#m7", ["Gb", "A", "Db", "E"]],
  ["Gb7", "F#7", ["Gb", "Bb", "Db", "E"]],
  ["Gbm7b5", "F#m7b5", ["Gb", "A", "C", "E"]],
  ["Gb°7", "F#°7", ["Gb", "A", "C", "Eb"]],
  ["Gbmin(maj7)", "F#min(maj7)", ["Gb", "A", "Db", "F"]],

  // G Chords
  ["G", "G", ["G", "B", "D"]],
  ["Gm", "Gm", ["G", "Bb", "D"]],
  ["G°", "G°", ["G", "Bb", "Db"]],
  ["G+", "G+", ["G", "B", "Eb"]],
  ["Gsus2", "Gsus2", ["G", "A", "D"]],
  ["Gsus4", "Gsus4", ["G", "C", "D"]],
  ["G6", "G6", ["G", "B", "D", "E"]],
  ["Gm6", "Gm6", ["G", "Bb", "D", "E"]],
  ["Gadd9", "Gadd9", ["G", "A", "B", "D"]],
  ["Gmaj7", "Gmaj7", ["G", "B", "D", "Gb"]],
  ["Gm7", "Gm7", ["G", "Bb", "D", "F"]],
  ["G7", "G7", ["G", "B", "D", "F"]],
  ["Gm7b5", "Gm7b5", ["G", "Bb", "Db", "F"]],
  ["G°7", "G°7", ["G", "Bb", "Db", "E"]],
  ["Gmin(maj7)", "Gmin(maj7)", ["G", "Bb", "D", "Gb"]],

  // Ab/G# Chords
  ["Ab", "G#", ["Ab", "C", "Eb"]],
  ["Abm", "G#m", ["Ab", "B", "Eb"]],
  ["Ab°", "G#°", ["Ab", "B", "D"]],
  ["Ab+", "G#+", ["Ab", "C", "E"]],
  ["Absus2", "G#sus2", ["Ab", "Bb", "Eb"]],
  ["Absus4", "G#sus4", ["Ab", "Db", "Eb"]],
  ["Ab6", "G#6", ["Ab", "C", "Eb", "F"]],
  ["Abm6", "G#m6", ["Ab", "B", "Eb", "F"]],
  ["Abadd9", "G#add9", ["Ab", "Bb", "C", "Eb"]],
  ["Abmaj7", "G#maj7", ["Ab", "C", "Eb", "G"]],
  ["Abm7", "G#m7", ["Ab", "B", "Eb", "Gb"]],
  ["Ab7", "G#7", ["Ab", "C", "Eb", "Gb"]],
  ["Abm7b5", "G#m7b5", ["Ab", "B", "D", "Gb"]],
  ["Ab°7", "G#°7", ["Ab", "B", "D", "F"]],
  ["Abmin(maj7)", "G#min(maj7)", ["Ab", "B", "Eb", "G"]],

  // A Chords
  ["A", "A", ["A", "Db", "E"]],
  ["Am", "Am", ["A", "C", "E"]],
  ["A°", "A°", ["A", "C", "Eb"]],
  ["A+", "A+", ["A", "Db", "F"]],
  ["Asus2", "Asus2", ["A", "B", "E"]],
  ["Asus4", "Asus4", ["A", "D", "E"]],
  ["A6", "A6", ["A", "Db", "E", "Gb"]],
  ["Am6", "Am6", ["A", "C", "E", "Gb"]],
  ["Aadd9", "Aadd9", ["A", "B", "Db", "E"]],
  ["Amaj7", "Amaj7", ["A", "Db", "E", "Ab"]],
  ["Am7", "Am7", ["A", "C", "E", "G"]],
  ["A7", "A7", ["A", "Db", "E", "G"]],
  ["Am7b5", "Am7b5", ["A", "C", "Eb", "G"]],
  ["A°7", "A°7", ["A", "C", "Eb", "Gb"]],
  ["Amin(maj7)", "Amin(maj7)", ["A", "C", "E", "Ab"]],

  // Bb/A# Chords
  ["Bb", "A#", ["Bb", "D", "F"]],
  ["Bbm", "A#m", ["Bb", "Db", "F"]],
  ["Bb°", "A#°", ["Bb", "Db", "E"]],
  ["Bb+", "A#+", ["Bb", "D", "Gb"]],
  ["Bbsus2", "A#sus2", ["Bb", "C", "F"]],
  ["Bbsus4", "A#sus4", ["Bb", "Eb", "F"]],
  ["Bb6", "A#6", ["Bb", "D", "F", "G"]],
  ["Bbm6", "A#m6", ["Bb", "Db", "F", "G"]],
  ["Bbadd9", "A#add9", ["Bb", "C", "D", "F"]],
  ["Bbmaj7", "A#maj7", ["Bb", "D", "F", "A"]],
  ["Bbm7", "A#m7", ["Bb", "Db", "F", "Ab"]],
  ["Bb7", "A#7", ["Bb", "D", "F", "Ab"]],
  ["Bbm7b5", "A#m7b5", ["Bb", "Db", "E", "Ab"]],
  ["Bb°7", "A#°7", ["Bb", "Db", "E", "G"]],
  ["Bbmin(maj7)", "A#min(maj7)", ["Bb", "Db", "F", "A"]],

  // B Chords
  ["B", "B", ["B", "Eb", "Gb"]],
  ["Bm", "Bm", ["B", "D", "Gb"]],
  ["B°", "B°", ["B", "D", "F"]],
  ["B+", "B+", ["B", "Eb", "G"]],
  ["Bsus2", "Bsus2", ["B", "Db", "Gb"]],
  ["Bsus4", "Bsus4", ["B", "E", "Gb"]],
  ["B6", "B6", ["B", "Eb", "Gb", "Ab"]],
  ["Bm6", "Bm6", ["B", "D", "Gb", "Ab"]],
  ["Badd9", "Badd9", ["B", "Db", "Eb", "Gb"]],
  ["Bmaj7", "Bmaj7", ["B", "Eb", "Gb", "Bb"]],
  ["Bm7", "Bm7", ["B", "D", "Gb", "A"]],
  ["B7", "B7", ["B", "Eb", "Gb", "A"]],
  ["Bm7b5", "Bm7b5", ["B", "D", "F", "A"]],
  ["B°7", "B°7", ["B", "D", "D", "Ab"]],
  ["Bmin(maj7)", "Bmin(maj7)", ["B", "D", "Gb", "Bb"]],
];
