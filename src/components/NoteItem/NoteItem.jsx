export const NoteItem = ({ note, onDeleteNote }) => {
  return (
    <li>
      <h3>{note.title !== "" ? note.title : "Sem título"}</h3>
      <p>{note.content}</p>
      <button>Editar</button>
      <button onClick={() => onDeleteNote(note.id)}>Excluir</button>  
    </li>
  );
};
