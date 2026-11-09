import React, { useState, useEffect } from 'react';
import { getSkills } from '../services/api';
import { Code2, Loader } from 'lucide-react';

const Skills = () => {
    // 1. Define the component's state
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Make an API call when the component loads using useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSkills();
                setSkills(data);
                setLoading(false);
            } catch (err) {
                console.error("API Error:", err);
                setError("Failed to load skills. Please ensure backend is running.");
                setLoading(false);
            }
        };

        fetchData();
    }, []); // An empty array [] means this runs only once when the component mounts

    return (
        <section id="skills" className="scroll-mt-16 border-t border-white/[0.06] bg-dark px-5 py-16 sm:px-6 md:py-20">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-9 flex items-end justify-between gap-5 md:mb-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"><Code2 className="text-primary" size={20} /></div>
                        <div>
                            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Capabilities</p>
                            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Technical Arsenal</h2>
                        </div>
                    </div>
                    <p className="hidden max-w-xs text-right text-sm leading-relaxed text-gray-500 sm:block">A focused stack for reliable AI products.</p>
                </div>

                {/* Loading & Error States */}
                {loading && (
                    <div className="flex items-center justify-center py-10 text-primary">
                        <Loader className="animate-spin" size={40} />
                    </div>
                )}

                {error && (
                    <div className="text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                        {error}
                    </div>
                )}

                {/* Skills Grid Display */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                // Highlight core strengths with a different design
                                className={`group relative overflow-hidden rounded-xl border px-4 py-3.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg ${skill.is_core_strength
                                        ? 'border-primary/25 bg-primary/[0.06] hover:border-primary/55 hover:shadow-primary/[0.08]'
                                        : 'border-white/[0.08] bg-card/55 hover:border-white/20 hover:bg-card hover:shadow-black/20'
                                    }`}
                            >
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary/80 transition-transform duration-300 group-hover:scale-x-100" />
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-[15px] font-semibold tracking-tight text-white transition-colors group-hover:text-primary">{skill.name}</h3>
                                    {skill.is_core_strength && (
                                        <span className="shrink-0 rounded-full border border-primary/15 bg-primary/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-primary">
                                            Core Strength
                                        </span>
                                    )}
                                </div>
                                <p className="mt-1.5 text-[11px] font-medium text-gray-500 transition-colors group-hover:text-gray-400">{skill.category}</p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Skills;

