import { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  const handleEdit = () => {
    if (isEditing && nuevoTexto.trim() !== "") {
      editarTarea(tarea.id, nuevoTexto);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      {isEditing ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          className="border p-1 rounded flex-1"
        />
      ) : (
        <span className={tarea.completed ? "line-through text-gray-400" : ""}>
          {tarea.text}
        </span>
      )}

      <input
        className="w-4 h-4"
        type="checkbox"
        checked={tarea.completed}
        onChange={() => toggleCompleted(tarea.id)}
      />

      <button onClick={handleEdit}>
        <PencilSquareIcon className="w-5 h-5 text-blue-500" />
      </button>

      <button onClick={() => eliminarTarea(tarea.id)}>
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}
