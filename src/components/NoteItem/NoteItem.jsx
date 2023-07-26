import styles from "./noteItem.module.css";

export const NoteItem = ({ note, onDeleteNote, onEditNote }) => {
  return (
    <li className={styles.noteItem}>
      <h3>{note.title !== "" ? note.title : "Sem título"}</h3>
      <p>{note.content}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => onEditNote(note)} className={styles.editBtn}>Editar</button>
        <button onClick={() => onDeleteNote(note.id)} className={styles.deleteBtn}>Excluir</button>
      </div>  
    </li>
  );
};
