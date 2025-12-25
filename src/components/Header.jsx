import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md candy-cane-border-b shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="santa-hat-overlay"
                >
                    <h1 className="text-2xl font-bold font-christmas text-primary tracking-wide">
                        GlowVedda
                    </h1>
                </motion.div>
                <nav className="hidden md:flex gap-6 items-center">
                    <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors">Home</a>
                    <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors">Shop</a>
                    <a href="#" className="font-medium text-gray-700 hover:text-primary transition-colors">About</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
