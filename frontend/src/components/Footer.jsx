import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark border-t border-gray-800/80 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left: Branding */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Terminal size={18} className="text-primary" />
                    <span>Crafted by <strong className="text-white">Naseem Tahir</strong></span>
                </div>

                {/* Center: Tech Stack Attribution */}
                <div className="text-xs text-gray-500">
                    Built with <span className="text-primary font-medium">FastAPI</span> + <span className="text-primary font-medium">PostgreSQL</span> + <span className="text-primary font-medium">React</span>
                </div>

                {/* Right: Direct Contact */}
                <div className="text-xs text-gray-400 flex items-center gap-4">
                    <a href="mailto:naseemtahir507@gmail.com" className="hover:text-primary transition-colors">
                        naseemtahir507@gmail.com
                    </a>
                    <span>•</span>
                    <span>Islamabad, Pakistan</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;