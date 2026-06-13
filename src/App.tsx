import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

function App() {
    return (
        <div className="flex flex-col h-screen bg-gray-50 font-sans">
            <div className="flex-1 overflow-hidden">
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;