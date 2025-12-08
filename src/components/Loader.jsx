'use client';

export default function Loader({ text = "Loading..." }) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl border border-white/20">
                {/* Animated gradient spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 animate-spin"></div>
                    <div className="absolute inset-1 rounded-full bg-gray-900"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-3 rounded-full bg-gray-900"></div>
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 animate-pulse"></div>
                    </div>
                </div>
                {/* Loading text */}
                <p className="text-white font-medium text-lg tracking-wide animate-pulse">
                    {text}
                </p>
            </div>
        </div>
    );
}
