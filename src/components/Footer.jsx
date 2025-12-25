import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white pt-10 pb-6 candy-cane-border-t">
            <div className="container mx-auto px-4 text-center space-y-4">
                <h2 className="text-2xl font-christmas text-primary font-bold">GlowVedda</h2>
                <p className="text-gray-600">
                    Premium Natural Skincare for your holiday glow.
                </p>
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-500">
                        Made with ❤️ and ❄️ in Surat.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        &copy; {new Date().getFullYear()} GlowVedda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
