"use client";

import {useState, useEffect} from "react";
import {FaSmile, FaMeh, FaSadTear} from "react-icons/fa";

const moods = [
    {emoji: <FaSmile className="text-6xl text-yellow-500"/>, label: "Heureux", bgColor: "bg-yellow-100"},
    {emoji: <FaMeh className="text-6xl text-gray-500"/>, label: "Neutre", bgColor: "bg-gray-200"},
    {emoji: <FaSadTear className="text-6xl text-blue-600"/>, label: "Triste", bgColor: "bg-blue-300"},
];

export default function MoodWidget({className}) {
    const [currentMood, setCurrentMood] = useState(null);

    useEffect(() => {
        const savedMood = localStorage.getItem("mood");
        if (savedMood) {
            const mood = moods.find((m) => m.label === savedMood);
            setCurrentMood(mood);
        }
    }, []);

    const handleMoodChange = (mood) => {
        setCurrentMood(mood);
        localStorage.setItem("mood", mood.label);
    };

    const handleMoodReset = () => {
        setCurrentMood(null);
        localStorage.removeItem("mood");
    };

    return (
        <div className={`p-6 flex flex-col items-center justify-center rounded-lg shadow-md transition-all duration-300 ${currentMood?.bgColor || "bg-gray-800"} ${className}`}>
            <h3 className="text-2xl font-bold text-white mb-4">Humeur</h3>
            {currentMood ? (
                <>
                    {currentMood.emoji}
                    <p className="text-lg text-gray-800 text-center mt-4">Vous êtes <span className="font-bold">{currentMood.label.toLowerCase()}</span> aujourd’hui.</p>
                    <button onClick={handleMoodReset} className="mt-4 px-4 py-2 text-sm border  bg-gray-100 text-gray-700 rounded shadow-sm">Annuler</button>
                </>
            ) : (
                <>
                    <p className="text-lg text-gray-300 text-center mb-4">Aucune humeur définie.</p>
                    <div className="flex justify-around w-full">
                        {moods.map((mood) => (
                            <button key={mood.label} onClick={() => handleMoodChange(mood)} className="transition-transform hover:scale-110">{mood.emoji}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
