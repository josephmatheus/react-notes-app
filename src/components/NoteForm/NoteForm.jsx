import { useForm } from "react-hook-form";
import styles from "./noteForm.module.css";

export const NoteForm = ({ onAddNote }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    onAddNote(data);
    reset({
      title: "",
      content: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.noteForm}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Título</label>
          <input
            {...register("title")}
            className={styles.noteTitle}
            name="title"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Anotação</label>
        <textarea
          {...register("content")}
          className={styles.noteContent}
          name="content"
        />
        </div>
        <button type="submit" className={styles.noteSubmit}>
          Salvar
        </button>
      </form>
    </div>
  );
};
