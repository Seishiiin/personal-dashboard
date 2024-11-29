"use client";

import {useEffect, useState} from "react";

export default function WeatherWidget({className}) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const city = process.env.NEXT_PUBLIC_CITY || "Paris";
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

        if (!apiKey) {
            setError("La clé API OpenWeather est manquante.");
            return;
        }

        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`);
                if (!res.ok) throw new Error("Erreur lors de la récupération des données météo.");
                const data = await res.json();
                setWeather(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchWeather();
    }, []);

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center p-4 ${className}`}>
                <p className="text-red-500">Erreur : {error}</p>
            </div>
        );
    }

    if (!weather) {
        return (
            <div className={`flex flex-col items-center justify-center p-4 ${className}`}>
                <p>Chargement...</p>
            </div>
        );
    }

    const {main, weather: weatherDetails, name} = weather;
    const {description, icon} = weatherDetails[0];

    let bgColor;
    let emoji;

    if (icon.startsWith("01")) {
        bgColor = "from-blue-400 to-blue-600";
        emoji = "☀️";
    } else if (icon.startsWith("02") || icon.startsWith("03") || icon.startsWith("04")) {
        bgColor = "from-gray-400 to-gray-600";
        emoji = "☁️";
    } else if (icon.startsWith("09") || icon.startsWith("10")) {
        bgColor = "from-blue-800 to-blue-900";
        emoji = "🌧️";
    } else if (icon.startsWith("11")) {
        bgColor = "from-black to-gray-700";
        emoji = "⛈️";
    } else if (icon.startsWith("13")) {
        bgColor = "from-blue-100 to-blue-300";
        emoji = "❄️";
    } else {
        bgColor = "from-gray-500 to-gray-700";
        emoji = "🌫️";
    }

    return (
        <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-gradient-to-br ${bgColor} text-white ${className}`}>
            <div className="text-6xl mb-2">{emoji}</div>
            <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
            <p className="text-xl capitalize">{description}</p>
            <p className="text-sm text-gray-300">{name}</p>
        </div>
    );
}
