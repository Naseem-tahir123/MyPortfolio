import React from 'react';
import { Terminal, ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-24 sm:px-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_58%)]" />
            <div className="relative mx-auto max-w-4xl space-y-7 text-center md:space-y-8">

                {/* Availability / Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs font-medium text-gray-300 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Building Production-Ready AI Systems
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl md:text-7xl">
                    Hi, I'm <span className="text-primary">Naseem Tahir</span>
                </h1>

                {/* Value Proposition (Positioning from Phase 1) */}
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl md:text-2xl">
                    Applied AI Engineer specializing in <span className="text-white font-semibold">LLMs, Hybrid RAG</span>, and secure <span className="text-white font-semibold">FastAPI backends</span>. I turn AI research into real-world software.
                </p>

                {/* Call To Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#projects" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-dark shadow-lg shadow-primary/15 transition-colors duration-200 hover:bg-emerald-400 sm:px-7">
                        <Terminal size={20} />
                        View Projects
                    </a>

                    {/* This button will open our AI chatbot in future */}
                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-card/70 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:border-primary/50 hover:bg-card sm:px-7">
                        <Bot size={20} className="text-primary" />
                        Chat with my Resume
                    </button>
                </div>

                {/* Small Tech Stack indicator */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-8 text-xs font-medium text-gray-500 sm:pt-10 sm:text-sm">
                    <p>Powered by:</p>
                    <div className="flex gap-4">
                        <span>FastAPI</span>
                        <span>•</span>
                        <span>PostgreSQL (pgvector)</span>
                        <span>•</span>
                        <span>React</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
