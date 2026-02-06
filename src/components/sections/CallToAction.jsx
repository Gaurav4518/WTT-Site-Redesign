import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Vibrant Green Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500"></div>

            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 via-transparent to-teal-500/50 animate-gradient" style={{ backgroundSize: '400% 400%' }}></div>

            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating Orbs */}
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute left-1/3 top-10 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

            <Container className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                    Ready to <span className="text-yellow-300">Elevate</span> Your Business?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Let's discuss how our technology solutions can solve your challenges and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <Button variant="white" size="lg" className="w-full sm:w-auto text-emerald-600 font-bold hover:scale-105">
                            Get a Free Quote
                        </Button>
                    </Link>
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/50 hover:bg-white/10 hover:border-white">
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;

