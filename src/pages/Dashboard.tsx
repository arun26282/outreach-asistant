import { Megaphone, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

function Dashboard() {

  // Sample aggregate data
    const kpis = [
        { title: "Total Ad Spend", value: "$12,450", change: "+14%", icon: <Megaphone className="w-6 h-6 text-blue-500" /> },
        { title: "Store Revenue", value: "$48,200", change: "+22%", icon: <ShoppingBag className="w-6 h-6 text-emerald-500" /> },
        { title: "Active Campaigns", value: "24", change: "+2", icon: <TrendingUp className="w-6 h-6 text-purple-500" /> },
        { title: "Total Conversions", value: "1,842", change: "+8%", icon: <Users className="w-6 h-6 text-orange-500" /> }
    ];

    return (
        <DashboardLayout>

            <div className="flex-1 overflow-auto p-8">
                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Performance Overview</h1>
                        <p className="text-gray-500 mt-1">Aggregated metrics across all connected platforms.</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Generate Report
                    </button>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {kpis.map((kpi, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</h3>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    {kpi.icon}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm">
                                <span className="text-green-600 font-medium">{kpi.change}</span>
                                <span className="text-gray-400 ml-2">vs last month</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Chart/Table Area Placeholder */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 min-h-[400px]">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue vs Spend</h3>
                        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 text-gray-400">
                            Chart Component Goes Here
                        </div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Campaigns</h3>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-50">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            C{i}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Campaign {i}</p>
                                            <p className="text-xs text-gray-500">ROAS: 2.{i}x</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">${(i * 1200).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard
