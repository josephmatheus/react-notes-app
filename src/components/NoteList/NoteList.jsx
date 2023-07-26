import { NoteItem } from "../NoteItem/NoteItem";
import styles from "./noteList.module.css";

export const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <ul className={styles.noteList}>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDeleteNote={onDeleteNote} onEditNote={onEditNote} />
      ))}
    </ul>
  );
};
