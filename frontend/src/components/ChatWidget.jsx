import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { askAI } from '../services/api';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Naseem's AI assistant. Ask me anything about his RAG pipelines, FastAPI backends, or production experience!"
        }
    ]);

    // Reference to the DOM node used for scrolling
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Quick suggestion prompts
    const suggestions = [
        "What is Arca AI?",
        "Explain his RAG expertise",
        "Why hire Naseem?"
    ];

    const handleSend = async (textToSend) => {
        const query = textToSend || input;
        if (!query.trim() || loading) return;

        // 1. Optimistic update: Display the user's message immediately
        const newMessages = [...messages, { role: 'user', content: query }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            // 2. Send previous messages as history (the backend handles the system prompt)
            const historyPayload = messages.map(m => ({
                role: m.role,
                content: m.content
            }));

            const data = await askAI(query, historyPayload);

            // 3. Add the AI's reply
            setMessages([...newMessages, { role: 'assistant', content: data.answer }]);
        } catch (err) {
            console.error("AI Error:", err);
            setMessages([
                ...newMessages,
                { role: 'assistant', content: "Sorry, I ran into an issue connecting to Naseem's AI service. Please try again!" }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* 1. Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-dark font-bold shadow-lg shadow-primary/25 hover:bg-emerald-400 hover:scale-105 transition-all duration-200"
                >
                    <Bot size={22} />
                    <span>Chat with AI</span>
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-dark"></span>
                    </span>
                </button>
            )}

            {/* 2. Interactive Chat Window */}
            {isOpen && (
                <div className="w-[360px] sm:w-[400px] h-[520px] bg-card border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">

                    {/* Header */}
                    <div className="bg-dark/80 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white leading-tight">Naseem AI Agent</h3>
                                <p className="text-[11px] text-primary flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                                    Grounded on Resume & Projects
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] text-xs md:text-sm p-3 rounded-xl leading-relaxed ${msg.role === 'user'
                                            ? 'bg-primary text-dark font-medium rounded-br-none'
                                            : 'bg-dark/90 text-gray-200 border border-gray-800 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-dark/90 text-gray-400 p-3 rounded-xl border border-gray-800 flex items-center gap-2 text-xs">
                                    <Loader2 size={14} className="animate-spin text-primary" />
                                    <span>Thinking...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestions (Display when there are only 1-2 messages) */}
                    {messages.length <= 2 && (
                        <div className="px-3 py-1.5 bg-dark/40 flex flex-wrap gap-1.5 border-t border-gray-800/60">
                            {suggestions.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSend(suggestion)}
                                    className="text-[10px] bg-card hover:border-primary/40 border border-gray-700 text-gray-300 px-2.5 py-1 rounded-full transition-colors"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Box */}
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="p-3 bg-dark/80 border-t border-gray-800 flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my AI experience..."
                            className="flex-1 bg-card border border-gray-700 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="p-2 bg-primary text-dark rounded-lg hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </form>

                </div>
            )}

        </div>
    );
};

export default ChatWidget;
