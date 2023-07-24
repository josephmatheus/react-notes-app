import { useForm } from "react-hook-form";
import styles from "./noteEditForm.module.css";

export const NoteEditForm = ({ note, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    const updatedNote = { ...note, ...data };
    onSubmit(updatedNote);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.noteForm}>
      <input {...register("title")} defaultValue={note.title} placeholder="Título" className={styles.noteTitle} />
      <textarea {...register("content")} defaultValue={note.content} placeholder="Anotação" className={styles.noteContent} />
      <button type="submit" className={styles.noteSubmit}>Salvar</button>
    </form>
  );
};
