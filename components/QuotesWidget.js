"use client";

import {useState, useEffect} from "react";

const quotes = [
    {text: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg"},
    {text: "Faites de votre vie un rêve, et d’un rêve, une réalité.", author: "Antoine de Saint-Exupéry"},
    {text: "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.", author: "Georges Clemenceau"},
    {text: "Le succès, c’est tomber sept fois et se relever huit.", author: "Proverbe japonais"},
    {text: "La connaissance s’acquiert par l’expérience, tout le reste n’est que de l’information.", author: "Albert Einstein"},
    {text: "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.", author: "Martin Luther King"},
    {text: "La simplicité est la sophistication suprême.", author: "Leonard de Vinci"},
    {text: "Le seul endroit où le succès précède le travail, c’est dans le dictionnaire.", author: "Vidal Sassoon"},
];

export default function QuoteWidget({className}) {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <div className={`p-6 rounded-lg shadow-md bg-gradient-to-br from-purple-300 to-purple-500 text-white ${className}`}>
            <h3 className="text-xl font-bold mb-4">Citation Inspirante</h3>
            {quote ? (
                <div>
                    <p className="text-lg italic">&quote;{quote.text}&quote;</p>
                    <p className="text-sm text-right mt-4">- {quote.author}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
}
