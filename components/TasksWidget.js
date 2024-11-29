"use client";

import {useState, useEffect} from "react";
import {FaCheck, FaTrash} from "react-icons/fa";

export default function TasksWidget({className}) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!newTask.trim() || tasks.length >= 3) return;
        setTasks([...tasks, {id: Date.now(), text: newTask.trim(), completed: false}]);
        setNewTask("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") addTask();
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className={`p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white ${className}`}>
            <h3 className="text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4">Liste de tâches</h3>
            <div className="flex items-center mb-6">
                <input type="text" placeholder="Ajouter une tâche..." value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleKeyDown} className="flex-1 p-3 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button onClick={addTask} className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all disabled:opacity-50" disabled={!newTask.trim() || tasks.length >= 3}>Ajouter</button>
            </div>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className={`flex justify-between items-center px-4 py-1 rounded-lg shadow-md ${task.completed ? "bg-green-600" : "bg-gray-700"} transition-all`}>
                        <div className="flex items-center justify-center space-x-3 cursor-pointer" onClick={() => toggleComplete(task.id)}>
                            <span className={`w-6 h-6 flex justify-center items-center border rounded-full ${task.completed ? "bg-green-400 border-green-400" : "border-gray-500"} transition-all`}>
                                {task.completed && <FaCheck className="text-white"/>}
                            </span>
                            <span className={`text-lg ${task.completed ? "line-through text-gray-300" : "text-white"} transition-all`}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-500 transition-all" title="Supprimer la tâche">
                            <FaTrash/>
                        </button>
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && (
                <p className="text-gray-400 text-center mt-4">Aucune tâche pour le moment.</p>
            )}
            {tasks.length >= 3 && (
                <p className="text-yellow-400 text-center mt-4">Vous ne pouvez pas ajouter plus de trois tâches principales.</p>
            )}
        </div>
    );
}
