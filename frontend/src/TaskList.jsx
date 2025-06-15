import React, { useState } from "react";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDesc, setEditedDesc] = useState("");

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedName(task.name);
    setEditedDesc(task.desc);
  };

  const handleSave = (id) => {
    onUpdate(id, { name: editedName, desc: editedDesc });
    setEditingId(null);
  };

  return (
    <div className="space-y-4 w-1/3 mx-auto">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 border rounded flex justify-between items-start bg-white shadow-sm"
        >
          {editingId === task.id ? (
            <div className="flex flex-col w-full space-y-2">
              <input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="border px-2 py-1 rounded"
              />
              <input
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                className="border px-2 py-1 rounded"
              />
              <button
                onClick={() => handleSave(task.id)}
                className="self-start bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <div>
                <p className="font-bold">{task.name}</p>
                <p className="text-gray-600">{task.desc}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="border px-3 py-1 rounded hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="border px-3 py-1 rounded text-red-600 border-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
