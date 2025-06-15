import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc) return;
    onAdd({ name, desc });
    setName("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 w-1/3 m-auto">
      <div className="task flex items-center space-x-2">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-1/3 "
      >
        Add Task
      </button>
      </div>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none"
      />
      
    </form>
  );
};

export default TaskForm;
