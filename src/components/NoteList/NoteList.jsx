import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDeleteNote={onDeleteNote} onEditNote={onEditNote} />
      ))}
    </ul>
  );
};
