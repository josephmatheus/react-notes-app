import { useState, useEffect } from "react";
import { NoteList } from "../NoteList/NoteList";
import { NoteForm } from "../NoteForm/NoteForm";
// import styles from "./notesApp.module.css";

export const NotesApp = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = (newNote) => {
        const teste = newNote
        teste.id = notes.length + 1;
        setNotes([...notes, teste])
    }

    useEffect(() => {
        console.log(notes);
    })

    return (
        <div>
            <p>{notes.length} notes</p>
            <NoteList notes={notes} />
            <NoteForm onAddNote={handleAddNote} />
        </div>
    );
}