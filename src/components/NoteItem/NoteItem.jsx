export const NoteItem = ({ note }) => {
  return (
    <li>
      <h3>{note.title !== "" ? note.title : "Sem título"}</h3>
      <p>{note.content}</p>
    </li>
  );
};
