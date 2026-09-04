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
        <section id="skills" className="py-20 px-6 bg-dark border-t border-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex items-center gap-3 mb-12">
                    <Code2 className="text-primary" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                // Highlight core strengths with a different design
                                className={`p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${skill.is_core_strength
                                        ? 'border-primary/50 bg-primary/10'
                                        : 'border-gray-800 bg-card hover:border-gray-600'
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                    {skill.is_core_strength && (
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">
                                            Core Strength
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-400 mt-2">{skill.category}</p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Skills;

