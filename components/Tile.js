export default function Tile({ title, children }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {children}
        </div>
    );
}
