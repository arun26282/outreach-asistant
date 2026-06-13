import { 
    LayoutDashboard, 
    Megaphone, 
    Menu, 
    Settings, 
    ShoppingBag 
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => 
{
    return(
        <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}>
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                {isOpen && <span className="text-xl font-bold text-gray-800 tracking-tight">DataHub</span>}
                <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                <Menu className="w-5 h-5" />
                </button>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
            {[
                { icon: <LayoutDashboard />, label: "Overview", active: true },
                { icon: <Megaphone />, label: "Ads Manager" },
                { icon: <ShoppingBag />, label: "Store Analytics" },
                { icon: <Settings />, label: "Settings" }
            ].map((item, index) => (
                <a 
                key={index} 
                href="#" 
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                >
                <span className="w-5 h-5">{item.icon}</span>
                {isOpen && <span className="font-medium">{item.label}</span>}
                </a>
            ))}
            </nav>
        </aside>
    );
}


export default Sidebar;