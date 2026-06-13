import { Sparkles } from "lucide-react";

const MainHeader = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="font-black text-xl tracking-tighter text-gray-900">
                OutReachAssistant<span className="text-blue-600">.ai</span>
            </div>

            <p
                className="flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
            >
            <Sparkles className="w-8 h-8 mr-2 text-amber-400" />
                Looks Cool
            </p>
        </header>
    );
}

export default MainHeader;