import React, { useState } from 'react';
import { CheckCircle2, Copy, Globe, Heading1, Heading2, Mail, Text, RotateCcw } from 'lucide-react';

// Define the shape of the data coming from your Express backend
export interface AnalysisData {
    success: boolean;
    preview: {
        title: string;
        metaDescription: string | null;
        h1s: string[];
        h2s: string[];
    };
    pitch: string;
}

interface AnalysisResultProps {
    data: AnalysisData;
    onReset: () => void; // Function to clear the results and go back
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ data, onReset }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(data.pitch);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!data || !data.success) return null;

    return (
        <div className="w-full max-w-6xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Analysis Complete</h2>
                        <p className="text-sm text-gray-500">Target data successfully scraped and pitch generated.</p>
                    </div>
                </div>
                
                {/* Start Over Button */}
                <button 
                    onClick={onReset}
                    className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Analyze Another URL
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Scraped Data Audit */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <Globe className="w-5 h-5 mr-2 text-blue-500" />
                            Scraped Target Data
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center">
                                    <Text className="w-3 h-3 mr-1" /> Page Title
                                </p>
                                <p className="text-sm text-gray-900 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {data.preview.title || "No title found"}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center">
                                    <Text className="w-3 h-3 mr-1" /> Meta Description
                                </p>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 leading-relaxed">
                                    {data.preview.metaDescription || "No description found"}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                                    <Heading1 className="w-3 h-3 mr-1" /> Primary Headings (H1)
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {data.preview.h1s.length > 0 ? data.preview.h1s.map((h1, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                                            {h1}
                                        </span>
                                    )) : <span className="text-sm text-gray-400">None found</span>}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                                    <Heading2 className="w-3 h-3 mr-1" /> Secondary Headings (H2)
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {data.preview.h2s.length > 0 ? data.preview.h2s.map((h2, index) => (
                                        <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100">
                                            {h2}
                                        </span>
                                    )) : <span className="text-sm text-gray-400">None found</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: AI Generated Pitch */}
                <div className="lg:col-span-7 flex flex-col">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-emerald-500" />
                                Generated Outreach Draft
                            </h3>
                            <button 
                                onClick={handleCopy}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    copied 
                                        ? 'bg-green-100 text-green-700 border border-green-200' 
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm'
                                }`}
                            >
                                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                            </button>
                        </div>

                        <div className="p-6 flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50/50">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full font-sans text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
                                {data.pitch}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalysisResult;