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
    <div className={styles.formContainer}>
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.noteForm}>
      <div className={styles.formGroup}>
      <input
        {...register("title")}
        defaultValue={note.title}
        placeholder="Título"
        className={styles.noteTitle}
      />
    </div>
    <div className={styles.formGroup}>
      <textarea
        {...register("content")}
        defaultValue={note.content}
        placeholder="Anotação"
        className={styles.noteContent}
      />
    </div>
      <button type="submit" className={styles.noteSubmit}>
        Salvar
      </button>
    </form>
    </div>
  );
};
