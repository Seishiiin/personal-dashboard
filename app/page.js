import DaySummaryWidget from "../components/DaySummaryWidget";
import MoodWidget from "../components/MoodWidget";
import NotesWidget from "../components/NotesWidget";
import QuotesWidget from "../components/QuotesWidget";
import TasksWidget from "../components/TasksWidget";
import TimeWidget from "../components/TimeWidget";
import WeatherDetailsWidget from "../components/WeatherDetailsWidget";
import WeatherWidget from "../components/WeatherWidget";


export default function Dashboard() {
    return (
        <main className="bg-black text-white min-h-screen">
            <div className="w-screen h-screen grid grid-cols-12 grid-rows-12 gap-2">
                <div className="col-span-4 row-span-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg">
                    <WeatherWidget className="h-full w-full"/>
                </div>
                <div className="col-span-3 row-span-5 bg-gray-800 rounded-lg shadow-lg">
                    <WeatherDetailsWidget className="h-full w-full"/>
                </div>
                <div className="col-span-5 row-span-5 bg-gray-800 rounded-lg shadow-lg">
                    <TasksWidget className="h-full w-full"/>
                </div>
                <div className="col-span-4 row-span-2 bg-gray-800 rounded-lg shadow-lg">
                    <TimeWidget className="h-full w-full"/>
                </div>
                <div className="col-span-6 row-span-7 bg-gray-800 rounded-lg shadow-lg">
                    <NotesWidget className="h-full w-full"/>
                </div>
                <div className="col-span-4 row-span-4 bg-gray-800 rounded-lg shadow-lg">
                    <QuotesWidget className="h-full w-full"/>
                </div>
                <div className="col-span-2 row-span-4 bg-gray-800 rounded-lg shadow-lg">
                    <MoodWidget className="h-full w-full"/>
                </div>
                <div className="col-span-6 row-span-3 bg-gray-900 rounded-lg shadow-lg">
                    <DaySummaryWidget className="h-full w-full"/>
                </div>
            </div>
        </main>
    );
}
