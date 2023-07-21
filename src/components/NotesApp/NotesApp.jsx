import { useState } from "react";
import { NoteList } from "../NoteList/NoteList";
import { NoteForm } from "../NoteForm/NoteForm";
// import styles from "./notesApp.module.css";

export const NotesApp = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = (noteAdded) => {
        const newNote = noteAdded
        newNote.id = Math.floor(Date.now() * Math.random()).toString(36)
        setNotes([...notes, newNote])
    }

    const handleDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    return (
        <div>
            <p>{notes.length} notes</p>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
        </div>
    );
}