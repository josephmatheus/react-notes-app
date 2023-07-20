import { NoteItem } from "../NoteItem/NoteItem";

export const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </ul>
  );
};
