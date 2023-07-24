import { useForm } from "react-hook-form";

export const NoteEditForm = ({ note, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    const updatedNote = { ...note, ...data };
    onSubmit(updatedNote);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="noteForm">
      <input {...register("title")} defaultValue={note.title} />
      <textarea {...register("content")} defaultValue={note.content} />
      <button type="submit">Salvar</button>
    </form>
  );
};
