export default function TemplateWidget({emoji, title, children}) {
    return (
        <div className={"bg-[#EAEAEA] rounded-lg p-5"}>
            <header className={"flex items-center gap-2"}>
                <span className={"text-lg"}>{emoji}</span>
                <h2 className={"text-lg text-[#212121] font-semibold"}>{title}</h2>
            </header>
            <div className={"border-t border-[#212121] text-[#606060] font-bold mt-3 pt-3"}>
                {children}
            </div>
        </div>
    );
}