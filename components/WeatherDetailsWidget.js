"use client";

import {useEffect, useState} from "react";
import {WiHumidity, WiStrongWind, WiBarometer, WiThermometer} from "react-icons/wi";

export default function WeatherDetailsWidget({className}) {
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

    const {main, wind, weather: weatherDetails} = weather;
    const {icon} = weatherDetails[0];

    let bgColor;

    if (icon.startsWith("01")) {
        bgColor = "from-blue-400 to-blue-600";
    } else if (icon.startsWith("02") || icon.startsWith("03") || icon.startsWith("04")) {
        bgColor = "from-gray-400 to-gray-600";
    } else if (icon.startsWith("09") || icon.startsWith("10")) {
        bgColor = "from-blue-800 to-blue-900";
    } else if (icon.startsWith("11")) {
        bgColor = "from-black to-gray-700";
    } else if (icon.startsWith("13")) {
        bgColor = "from-blue-100 to-blue-300";
    } else {
        bgColor = "from-gray-500 to-gray-700";
    }

    return (
        <div className={`p-6 rounded-lg shadow-md bg-gradient-to-br ${bgColor} text-white ${className}`}>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Détails Météo</h3>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <WiThermometer className="text-3xl mr-2"/>
                    <span className="text-lg">Ressenti : <strong>{Math.round(main.feels_like)}°C</strong></span>
                </li>
                <li className="flex items-center">
                    <WiHumidity className="text-3xl mr-2"/>
                    <span className="text-lg">Humidité : <strong>{main.humidity}%</strong></span>
                </li>
                <li className="flex items-center">
                    <WiBarometer className="text-3xl mr-2"/>
                    <span className="text-lg">Pression : <strong>{main.pressure} hPa</strong></span>
                </li>
                <li className="flex items-center">
                    <WiStrongWind className="text-3xl mr-2"/>
                    <span className="text-lg">Vent : <strong>{wind.speed} m/s</strong></span>
                </li>
            </ul>
        </div>
    );
}
