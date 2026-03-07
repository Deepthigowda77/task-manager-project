const db = require("../config/db");

exports.createTask = (title, description, userId) => {
  return db.promise().query(
    "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, userId]
  );
};

exports.getTasksByUser = (userId) => {
  return db.promise().query(
    "SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC",
    [userId]
  );
};

exports.updateTask = (id, title, description, status) => {
  return db.promise().query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
    [title, description, status, id]
  );
};

exports.deleteTask = (id) => {
  return db.promise().query("DELETE FROM tasks WHERE id=?", [id]);
};