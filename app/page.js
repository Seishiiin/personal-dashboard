import TimeWidget from "@/components/TimeWidget";
import QuotesWidget from "@/components/QuotesWidget";

export default function Dashboard() {
    return (
        <main className={"w-screen h-screen p-5 bg-[#FAFAFA] grid grid-cols-12 gap-5"}>
            <div className={"col-span-3"}>
                <TimeWidget />
            </div>
            <div className={"col-span-5"}>
                <QuotesWidget />
            </div>
        </main>
    );
}
