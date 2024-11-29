"use client";

import {useState, useEffect} from "react";

const habitsList = [
    {id: 1, text: process.env.NEXT_PUBLIC_HABIT_1 || "Faire 30 minutes de sport"},
    {id: 2, text: process.env.NEXT_PUBLIC_HABIT_2 || "Lire 10 pages d’un livre"},
    {id: 3, text: process.env.NEXT_PUBLIC_HABIT_3 || "Prendre un moment de méditation"},
];

export default function HabitsWidget({className}) {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        let savedHabits = JSON.parse(localStorage.getItem("habits"));

        if (!savedHabits || savedHabits.length === 0) {
            console.log("Aucune donnée sauvegardée trouvée, initialisation avec habitsList.");
            savedHabits = habitsList.map((habit) => ({
                ...habit,
                completed: false,
            }));
        }

        const lastUpdate = localStorage.getItem("lastUpdate");
        const today = new Date().toISOString().split("T")[0];

        if (lastUpdate !== today) {
            console.log("Nouvelle journée détectée, réinitialisation des habitudes.");
            savedHabits = savedHabits.map((habit) => ({...habit, completed: false}));
            localStorage.setItem("lastUpdate", today);
        }

        localStorage.setItem("habits", JSON.stringify(savedHabits));
        setHabits(savedHabits);
    }, []);

    useEffect(() => {
        if (habits.length > 0) {
            localStorage.setItem("habits", JSON.stringify(habits));
        }
    }, [habits]);

    const toggleComplete = (id) => {
        const updatedHabits = habits.map((habit) =>
            habit.id === id ? {...habit, completed: !habit.completed} : habit
        );
        setHabits(updatedHabits);
    };

    return (
        <div className={`p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-200 to-blue-400 text-black ${className}`}>
            <h3 className="text-xl font-bold mb-4">Habitudes quotidiennes</h3>
            <ul className="space-y-2">
                {habits.map((habit) => (
                    <li key={habit.id} className={`flex items-center justify-between p-2 rounded-lg shadow ${habit.completed ? "bg-green-300" : "bg-white"}`}>
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => toggleComplete(habit.id)}>
                            <span className={`inline-block w-6 h-6 border rounded ${habit.completed ? "bg-green-600 border-green-600" : "border-gray-400"}`}>
                                {habit.completed ? "✅" : ""}
                            </span>
                            <span className={`${habit.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                                {habit.text}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            {habits.length === 0 && (
                <p className="text-gray-500 text-center mt-4">Aucune habitude définie.</p>
            )}
        </div>
    );
}
