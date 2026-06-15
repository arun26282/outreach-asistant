import React, { useState } from "react";
import { Globe, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import Layout from "../components/main-layout/Layout";
import QuickStart from "../components/main/QuickStart";
import AnalysisResult, { type AnalysisData } from "./Result";
import LoadingSequence from "../components/main/LoadingSequence";

const validateAndNormalizeUrl = (input: string): string | null => {
    let formattedUrl = input.trim().toLowerCase();
    
    if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = `https://${formattedUrl}`;
    }

    try {
        const parsedUrl = new URL(formattedUrl);
        if (!parsedUrl.hostname.includes('.')) {
            return null;
        }
        return formattedUrl;
    } catch (error) {
        console.error("URL validation error:", error);
        return null;
    }
};

const Index = () => {
    const [url, setUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState('');
    const [resultData, setResultData] = useState<AnalysisData | null>(null);

    const demoUrls = ["nuweb.in", "apex-marketing.com", "elevate-digital.io"];

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        if (error) setError('');
    };

    const handleQuickStart = (selectedUrl: string) => {
        setUrl(`${selectedUrl}`);
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!url.trim()) return;

        const finalUrl = validateAndNormalizeUrl(url);

        if (!finalUrl) {
            setError('Please enter a valid website domain (e.g., nuweb.in or https://nuweb.in)');
            return;
        }

        setIsAnalyzing(true);
        setError('');

        const response = await fetch(`http://127.0.0.1:8000/api/analyze-target`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: finalUrl })
        });

        const res = await response.json(); 

        if (response.ok) {
            console.log("API Response:", res);
            setResultData(res);
            setIsAnalyzing(false);
        } else {
            setError(res.error || 'An error occurred while analyzing the URL.');
            setIsAnalyzing(false);
        }
    };

    const handleReset = () => {
        setResultData(null);
        setUrl("");
    };

    return (
        <Layout>
            {resultData ? (
                <AnalysisResult data={resultData} onReset={handleReset} />
            ) : (
                <div className="w-full max-w-3xl animate-fade-in-up">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                            <Sparkles className="w-4 h-4 mr-2" />
                            1-Click Outreach AI Assistant
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center tracking-tight">
                        Who are we pitching today?
                    </h1>
                    <p className="text-lg text-gray-500 text-center mb-10 max-w-xl mx-auto">
                        Drop in a target agency's website. We'll extract their core services
                        and draft a hyper-personalized email pitching your development
                        solutions.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className={`relative bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-200 flex items-center p-2 
                            ${error 
                                ? 'border-red-400 focus-within:ring-4 focus-within:ring-red-50' 
                                : 'border-gray-200 focus-within:border-blue-400 focus-within:shadow-lg focus-within:ring-4 focus-within:ring-blue-50'
                            }`}
                    >
                        <div className={`pl-4 pr-2 ${error ? 'text-red-400' : 'text-gray-400'}`}>
                            <Globe className="w-6 h-6" />
                        </div>

                        <input
                            type="text"
                            className="flex-1 h-14 bg-transparent text-lg text-gray-800 placeholder-gray-400 focus:outline-none px-2"
                            placeholder="https://target-agency.com"
                            value={url}
                            onChange={handleUrlChange}
                            autoFocus
                            disabled={isAnalyzing}
                        />

                        <button
                            type="submit"
                            disabled={url.length < 4 || isAnalyzing}
                            className={`flex items-center justify-center h-12 px-6 rounded-xl font-medium transition-all duration-200 ${
                                url.length >= 4 && !isAnalyzing
                                ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-95"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            {isAnalyzing ? (
                                <span className="flex items-center animate-pulse">
                                    Analyzing...
                                </span>
                            ) : (
                                <>
                                    <span>Analyze</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </>
                            )}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-3 flex items-center text-red-500 text-sm font-medium animate-fade-in-up px-2">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </div>
                    )}

                    {isAnalyzing ? (
                        <LoadingSequence />
                    ) : (
                        <div className="mt-8">
                            <QuickStart demoUrls={demoUrls} setUrl={handleQuickStart} />
                        </div>
                    )}
                </div>
            )}
        </Layout>
    );
};

export default Index;
