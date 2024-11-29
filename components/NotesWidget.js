"use client";

import {useState, useEffect} from "react";
import {FaStickyNote} from "react-icons/fa";

export default function NotesWidget({className}) {
    const [note, setNote] = useState("");

    useEffect(() => {
        const savedNote = localStorage.getItem("note");
        if (savedNote) setNote(savedNote);
    }, []);

    const handleNoteChange = (e) => {
        const newNote = e.target.value;
        setNote(newNote);
        localStorage.setItem("note", newNote);
    };

    return (
        <div className={`p-6 rounded-lg shadow-md bg-gradient-to-br from-green-300 to-blue-400 text-black transition-all duration-300 hover:shadow-lg ${className}`}>
            <div className="flex items-center mb-4">
                <FaStickyNote className="text-3xl text-gray-800 mr-2"/>
                <h3 className="text-2xl font-bold">Bloc-Notes</h3>
            </div>
            <textarea value={note} onChange={handleNoteChange} placeholder="Écrivez quelque chose..." className="w-full h-[calc(100%-48px)] p-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white bg-gray-50 text-gray-800 shadow-inner transition-all duration-300"/>
        </div>
    );
}
