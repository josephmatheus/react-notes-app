import { useForm } from "react-hook-form";
import styles from "./noteForm.module.css";

export const NoteForm = ({ onAddNote }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    onAddNote(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.noteForm}>
      <input
        {...register("title")}
        className={styles.noteTitle}
        placeholder="Título"
      />
      <textarea
        {...register("content")}
        className={styles.noteContent}
        placeholder="Anotação"
      />
      <input type="submit" className={styles.noteSubmit} />
    </form>
  );
};
