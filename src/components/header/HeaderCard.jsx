import Navbar from "./Navbar/Navbar"

export default function HeaderCard() {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="max-w-4xl mx-auto flex justify-center items-center">
                <h1 className="text-3xl font-bold mr-8">Richard Song</h1>
                <Navbar />
            </div>
        </header>
    );
};