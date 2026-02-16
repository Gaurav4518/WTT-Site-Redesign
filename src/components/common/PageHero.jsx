import React from 'react';
import Container from './Container';

const PageHero = ({ badge, title, highlightedTitle, description, children }) => {
    return (
        // Consistent Wrapper Padding should be handled by the parent page or integrated here?
        // The user wants the TOP aligned to be uniform. 
        // About.jsx has <div className="pt-28 pb-20"> wrapper around the whole page.
        // The Hero itself is <div className="relative py-24 mb-20 overflow-hidden">

        <div className="relative py-24 mb-20 overflow-hidden bg-secondary">
            {/* Background Decoration Standardized from About.jsx */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-secondary"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            </div>

            <Container className="text-center relative z-10">
                {badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 text-white leading-tight animate-fade-in-up">
                    {title} <span className="gradient-text">{highlightedTitle}</span>
                </h1>
                <p className="text-xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                    {description}
                </p>
                {children}
            </Container>
        </div>
    );
};

export default PageHero;
