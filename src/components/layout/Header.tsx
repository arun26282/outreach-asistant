import { Bell, Search } from "lucide-react";

const Header = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center w-96 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3" />
            <input 
              type="text" 
              placeholder="Search campaigns, stores..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
              A
            </div>
          </div>
        </header>
    );
}

export default Header;