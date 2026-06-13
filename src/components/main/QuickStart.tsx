const QuickStart = ({ demoUrls, setUrl }: { demoUrls: string[]; setUrl: (url: string) => void }) => {
    return(
        <div className="mt-8 text-center">
            <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                Or try a demo URL
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
                {demoUrls.map((demo, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => setUrl(`https://${demo}`)}
                        className="px-4 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-600 rounded-full hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm active:bg-blue-100 flex items-center"
                    >
                        {demo}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuickStart;