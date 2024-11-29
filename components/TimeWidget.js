"use client";

import {useEffect, useState} from "react";

export default function TimeWidget({className}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    let bgColor;
    let textColor;

    if (hours >= 6 && hours < 12) {
        bgColor = "from-yellow-400 to-orange-500";
        textColor = "text-black";
    } else if (hours >= 12 && hours < 18) {
        bgColor = "from-blue-300 to-blue-500";
        textColor = "text-black";
    } else {
        bgColor = "from-purple-600 to-purple-800";
        textColor = "text-white";
    }

    return (
        <div className={`p-6 flex flex-col items-center justify-center rounded-lg shadow-md bg-gradient-to-br ${bgColor} ${textColor} ${className}`}>
            <p className="text-4xl font-bold">{time.toLocaleTimeString()}</p>
            <p className="text-lg">{time.toLocaleDateString()}</p>
        </div>
    );
}
