import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </ul>
  );
};
