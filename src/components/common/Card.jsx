import React from 'react';

const Card = ({ children, className = '', hover = true, glass = false }) => {
    const baseStyles = glass
        ? 'glass-card rounded-2xl overflow-hidden'
        : 'bg-white rounded-2xl overflow-hidden border border-gray-100/50';

    const hoverStyles = hover
        ? 'transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-indigo-200/50'
        : 'shadow-sm';

    return (
        <div className={`${baseStyles} ${hoverStyles} shadow-lg shadow-gray-200/50 ${className}`}>
            {children}
        </div>
    );
};

export default Card;

