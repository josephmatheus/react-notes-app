export const NoteItem = ({ note, onDeleteNote, onEditNote }) => {
  return (
    <li>
      <h3>{note.title !== "" ? note.title : "Sem título"}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEditNote(note)}>Editar</button>
      <button onClick={() => onDeleteNote(note.id)}>Excluir</button>  
    </li>
  );
};
