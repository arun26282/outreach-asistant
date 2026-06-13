import React, { useState, useEffect } from 'react';

const LoadingSequence = () => {
    const messages = [
        "Connecting to target server...",
        "Scraping website architecture...",
        "Extracting core value propositions...",
        "Feeding data to Gemini AI...",
        "Drafting hyper-personalized pitch... almost there!" // Added a little flavor to the final state
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (index >= messages.length - 1) return;

        const timer = setTimeout(() => {
            setFade(false);
            
            setTimeout(() => {
                setIndex((prevIndex) => prevIndex + 1);
                setFade(true);
            }, 500); 

        }, 2500);
        return () => clearTimeout(timer);
    }, [index, messages.length]);

    return (
        <div className="mt-12 flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            
            <p className={`text-lg font-medium text-gray-600 transition-opacity duration-500 ease-in-out ${
                fade ? 'opacity-100' : 'opacity-0'
            }`}>
                {messages[index]}
            </p>
        </div>
    );
};

export default LoadingSequence;