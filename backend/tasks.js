// backend/tasks.js
import db from "./database/db.js";

// Obtener todas las tareas
export async function getAllTasks() {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
}

// Crear tarea
export async function createTask(text) {
  const [result] = await db.query(
    "INSERT INTO tasks (text) VALUES (?)",
    [text]
  );

  return { id: result.insertId, text, completed: 0 };
}

// Editar tarea
export async function updateTask(id, data) {
  await db.query(
    "UPDATE tasks SET text = ?, completed = ? WHERE id = ?",
    [data.text, data.completed, id]
  );

  return { id, ...data };
}

// Eliminar una tarea
export async function deleteTask(id) {
  await db.query("DELETE FROM tasks WHERE id = ?", [id]);
  return true;
}
