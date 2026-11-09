import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.06] bg-dark/80 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between">

                {/* Brand Logo */}
                <a href="#" aria-label="Back to top" className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-primary transition-all hover:border-primary/40 hover:bg-primary/10">
                    <Terminal size={19} strokeWidth={2.25} />
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
                    <a href="#skills" className="transition-colors hover:text-white">Skills</a>
                    <a href="#projects" className="transition-colors hover:text-white">Case Studies</a>
                    <a href="#contact" className="transition-colors hover:text-white">Contact</a>
                </nav>

                {/* Social / Action Links (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="https://github.com/Naseem-tahir123"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="GitHub"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/naseem-tahir-balti"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="LinkedIn"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <div className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[11px] font-bold tracking-wide text-primary shadow-[0_0_20px_rgba(16,185,129,0.12)]" title="Naseem Tahir" aria-label="Naseem Tahir">
                        NT
                    </div>
                    <a
                        href="mailto:naseemtahir507@gmail.com"
                        className="ml-1 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-dark"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-bold tracking-wide text-primary" aria-label="Naseem Tahir">NT</div>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 transition-colors hover:text-white" aria-label="Toggle navigation">
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden border-b border-white/[0.06] bg-[#101b30]/95 px-6 py-5 space-y-4 backdrop-blur-xl">
                    <a
                        href="#skills"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-primary font-medium"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-primary font-medium"
                    >
                        Case Studies
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-primary font-medium"
                    >
                        Contact
                    </a>
                    <div className="pt-3 border-t border-white/10 flex gap-4">
                        <a href="https://github.com/Naseem-tahir123" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/naseem-tahir-balti" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                            <FiLinkedin size={20} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
