const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let currentId = 1;

// Create Task
app.post("/tasks", (req, res) => {
  const { name, desc } = req.body;
  const newTask = { id: currentId++, name, desc };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Update Task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { name, desc } = req.body;
  const task = tasks.find((t) => t.id == id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.name = name;
  task.desc = desc;
  res.json(task);
});

// Delete Task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id != id);
  res.status(204).send();
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
