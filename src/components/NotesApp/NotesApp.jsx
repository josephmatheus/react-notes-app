import { useState } from "react";
import { NoteList } from "../NoteList/NoteList";
import { NoteForm } from "../NoteForm/NoteForm";
import { NoteEditForm } from "../NoteEditForm/NoteEditForm";
// import styles from "./notesApp.module.css";

export const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  const handleAddNote = () => {
    setShowForm(true)
  }

  const handleSaveNote = (noteAdded) => {
    const newNote = noteAdded;
    newNote.id = Math.floor(Date.now() * Math.random()).toString(36);
    setNotes([...notes, newNote]);
    setShowForm(false);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleEditFormSubmit = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditingNote(null);
  };

  return (
    <div>
      <p>{notes.length} notes</p>
      {!showForm && (
        <button onClick={handleAddNote}>Adicionar</button>
      )}
      {showForm && (
        <NoteForm onAddNote={handleSaveNote} />
      )}
      <NoteList
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditNote={handleEditNote}
      />
      {editingNote && (
        <NoteEditForm note={editingNote} onSubmit={handleEditFormSubmit} />
      )}
    </div>
  );
};
