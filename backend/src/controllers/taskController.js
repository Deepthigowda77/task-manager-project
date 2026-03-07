// const Task = require("../models/taskModel");

// exports.createTask = async (req, res) => {
//   const { title, description } = req.body;
//   try {
//     await Task.createTask(title, description, req.user.id);
//     res.json({ message: "Task Created Successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.getTasks = async (req, res) => {
//   try {
//     const [tasks] = await Task.getTasksByUser(req.user.id);
//     res.json(tasks);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.updateTask = async (req, res) => {
//   const { title, description, status } = req.body;
//   try {
//     await Task.updateTask(req.params.id, title, description, status);
//     res.json({ message: "Task Updated Successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.deleteTask = async (req, res) => {
//   try {
//     await Task.deleteTask(req.params.id);
//     res.json({ message: "Task Deleted Successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


const db = require("../config/db");

exports.createTask = async (req, res) => {

const { task } = req.body;
const userId = req.user.id;

try{

await db.query(
"INSERT INTO tasks (user_id, title) VALUES (?, ?)",
[userId, task]
);

res.json({message:"Task created successfully"});

}catch(err){

console.log(err);
res.status(500).json({message:"Server error"});

}

};

exports.getTasks = async (req,res)=>{

const userId = req.user.id;

try{

const [tasks] = await db.query(
"SELECT * FROM tasks WHERE user_id=?",
[userId]
);

res.json(tasks);

}catch(err){

console.log(err);
res.status(500).json({message:"Server error"});

}

};

exports.deleteTask = async (req,res)=>{

const taskId = req.params.id;

try{

await db.query(
"DELETE FROM tasks WHERE id=?",
[taskId]
);

res.json({message:"Task deleted"});

}catch(err){

console.log(err);
res.status(500).json({message:"Server error"});

}

};