import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Modern Mesh Background - Light Off-Green */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50/30"></div>
                {/* Animated Gradient Orbs - Green Theme */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-lime-400/10 to-green-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

                    {/* Content */}
                    <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
                        <div className="inline-block px-5 py-2.5 gradient-primary text-white font-semibold rounded-full text-xs md:text-sm mb-6 shadow-lg shadow-emerald-500/25">
                            ✨ IT Solutions for Modern Business
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-secondary leading-tight mb-6">
                            Transforming Ideas into{' '}
                            <span className="gradient-text">Digital Reality</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We specialize in custom web development, mobile apps, and enterprise software solutions.
                            Partner with Web Tech Talk to elevate your business technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/contact">
                                <Button size="lg" variant="gradient" className="w-full sm:w-auto">
                                    Start Project
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="lg:w-1/2 relative hidden md:block">
                        <div className="relative z-10 glass-card p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                            <div className="rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 relative group">
                                {/* Code Abstract UI */}
                                <div className="absolute top-0 left-0 w-full h-8 bg-gray-800/90 flex items-center px-4 gap-2 border-b border-gray-700/50">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                                </div>
                                <div className="p-8 mt-4 font-mono text-sm">
                                    <div className="text-emerald-400">import <span className="text-white">WebTechTalk</span> from <span className="text-amber-300">'solutions'</span>;</div>
                                    <br />
                                    <div className="text-purple-400">const <span className="text-cyan-400">growth</span> = <span className="text-amber-300">async</span> () {`=>`} {`{`}</div>
                                    <div className="pl-4 text-white">
                                        <span className="text-purple-400">await</span> WebTechTalk.<span className="text-cyan-400">build</span>({`{`}
                                    </div>
                                    <div className="pl-8 text-gray-300">quality: <span className="text-rose-400">true</span>,</div>
                                    <div className="pl-8 text-gray-300">scale: <span className="text-amber-300">'unlimited'</span>,</div>
                                    <div className="pl-8 text-gray-300">innovation: <span className="text-cyan-400">MAX</span></div>
                                    <div className="pl-4 text-white">{`}`});</div>
                                    <div className="text-purple-400">{`}`};</div>
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -right-6 -bottom-6 glass p-4 rounded-xl shadow-xl animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                                        <span className="font-bold text-secondary">99.9% Uptime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-emerald-500/20 via-green-500/10 to-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

