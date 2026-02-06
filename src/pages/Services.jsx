import React, { useEffect } from 'react';
import Container from '../components/common/Container';
import ServicesSection from '../components/sections/Services';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 overflow-hidden">
            {/* Unified Hero Section - Premium Design */}
            <div className="relative py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-secondary"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    {/* Animated grid overlay for texture */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20">
                        Our Expertise
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                        Innovative <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive technology solutions tailored to your specific business needs.
                    </p>
                </Container>
            </div>

            {/* We reuse the section component but we could expand here if needed */}
            <ServicesSection />
        </div>
    );
};

export default Services;
