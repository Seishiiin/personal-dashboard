"use client";

import { useState, useEffect } from "react";
import TemplateWidget from "@/components/TemplateWidget";

export default function TimeWidget() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TemplateWidget emoji={"🕒"} title={"Date et heure"}>
            <div className={"flex justify-between items-start"}>
                <p className={"text-xl font-semibold"}>
                    {time}
                </p>
                <p className={"text-xs font-semibold"}>
                    {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </p>
            </div>
            <p className={"text-sm mt-1"}>
                {date.charAt(0).toUpperCase() + date.slice(1)}
            </p>
        </TemplateWidget>
    );
}