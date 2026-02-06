import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary leading-tight">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
