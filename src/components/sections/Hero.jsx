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

            {/* Walking Robot Animation Background */}
            <div className="absolute bottom-5 md:bottom-12 left-0 right-0 w-full h-[250px] -z-10 overflow-hidden opacity-80 select-none pointer-events-none">
                <div className="absolute bottom-0 h-full animate-walk-across flex items-end w-[220px]">
                    {/* SVG Walking Robot (Scaled up, color-coordinated, and facing Right) - REVERTED TO CLEAN STYLE */}
                    <svg width="220" height="264" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        {/* Shadow */}
                        <ellipse cx="60" cy="115" rx="30" ry="5" fill="#10B981" opacity="0.15"/>
                        {/* Back Arm */}
                        <g className="animate-[arm-swing-reverse_1s_infinite_ease-in-out] origin-[60px_45px]">
                            <rect x="55" y="40" width="10" height="40" rx="5" fill="#047857"/>
                            <circle cx="60" cy="80" r="6" fill="#34D399"/>
                        </g>
                        {/* Back Leg */}
                        <g className="animate-[leg-swing-reverse_1s_infinite_ease-in-out] origin-[60px_75px]">
                            <rect x="52" y="70" width="12" height="40" rx="6" fill="#064E3B"/>
                            <rect x="50" y="105" width="20" height="8" rx="4" fill="#022C22"/>
                        </g>
                        {/* Body */}
                        <rect x="45" y="35" width="30" height="45" rx="10" fill="#F8FAFC" stroke="#10B981" strokeWidth="2.5"/>
                        <rect x="50" y="45" width="20" height="25" rx="5" fill="white" stroke="#059669" strokeWidth="1.5"/>
                        {/* Head */}
                        <g className="animate-idle-breathe">
                            <rect x="45" y="10" width="30" height="20" rx="8" fill="#F8FAFC" stroke="#10B981" strokeWidth="2.5"/>
                            {/* Eye screen */}
                            <rect x="50" y="15" width="20" height="10" rx="3" fill="#022C22"/>
                            {/* Blinking eyes */}
                            <g className="animate-[eye-blink_4s_infinite]">
                                <circle cx="55" cy="20" r="2" fill="#38BDF8" className="animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 2px #38BDF8)' }}/>
                                <circle cx="65" cy="20" r="2" fill="#38BDF8" className="animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 2px #38BDF8)' }}/>
                            </g>
                        </g>
                        {/* Front Leg */}
                        <g className="animate-[leg-swing_1s_infinite_ease-in-out] origin-[60px_75px]">
                            <rect x="56" y="70" width="12" height="40" rx="6" fill="#10B981"/>
                            <rect x="54" y="105" width="20" height="8" rx="4" fill="#064E3B"/>
                            <circle cx="62" cy="75" r="4" fill="#A7F3D0"/>
                        </g>
                        {/* Front Arm */}
                        <g className="animate-[arm-swing_1s_infinite_ease-in-out] origin-[60px_45px]">
                            <rect x="45" y="40" width="10" height="40" rx="5" fill="#34D399"/>
                            <circle cx="50" cy="80" r="6" fill="#059669"/>
                            <circle cx="50" cy="45" r="4" fill="white"/>
                        </g>
                    </svg>
                </div>
            </div>

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
                            We specialize in AI-powered solutions, custom web development, mobile apps, and enterprise software. 
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
                                        <span className="text-purple-400">await</span> Web Tech Talk<span className="text-cyan-400">build</span>({`{`}
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

                        {/* Sitting King Robot & Chat Bubble */}
                        <div className="absolute -top-[160px] right-10 z-30 pointer-events-none drop-shadow-2xl">
                             {/* Chatbot Message Bubble */}
                             <div className="absolute -left-64 top-4 glass-card p-4 rounded-2xl rounded-tr-none shadow-2xl border border-emerald-500/20 w-[260px] animate-fade-in-up flex items-start gap-3 backdrop-blur-xl bg-white/95">
                                    {/* AI Icon in Bubble */}
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1.5 pt-0.5 w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">AI Assistant</span>
                                            <span className="relative flex h-2 w-2">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        </div>
                                        <p className="text-[13px] text-gray-800 font-medium leading-relaxed">
                                            <span className="inline-block animate-typing whitespace-nowrap overflow-hidden border-r-2 border-emerald-500" style={{ animationDuration: '4s', width: '100%' }}>
                                                Hi, I'm your AI assistant.
                                            </span>
                                            <br/>
                                            <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                                                We build AI-powered applications and chatbots.
                                            </span>
                                        </p>
                                    </div>
                                    {/* Bubble Tail */}
                                    <div className="absolute top-0 -right-[10px] w-0 h-0 border-l-[10px] border-l-white/95 border-b-[10px] border-b-transparent border-t-[0px] border-t-transparent filter drop-shadow-[2px_0_2px_rgba(16,185,129,0.1)]"></div>
                                </div>

                            {/* Floating Code Blocks Base */}
                            <div className="absolute top-[80px] left-[20px] w-[140px] animate-float">
                                {/* Top Block */}
                                <div className="absolute -top-4 -left-6 w-16 h-8 bg-gray-800 border border-gray-600 rounded-md shadow-lg transform -rotate-12 opacity-80 backdrop-blur-sm flex items-center px-2 z-0 animate-bounce-slow">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1"></div>
                                    <div className="w-4 h-1 rounded bg-green-400/50"></div>
                                </div>
                                {/* Stacked Block */}
                                <div className="absolute top-2 -right-4 w-20 h-10 bg-gray-900 border border-gray-700 rounded-md shadow-xl transform rotate-6 opacity-90 backdrop-blur-sm p-1.5 z-10 animate-pulse-glow" style={{ animationDuration: '5s' }}>
                                     <div className="w-full h-1.5 bg-gray-700 rounded mb-1 w-3/4"></div>
                                     <div className="w-full h-1.5 bg-emerald-500/30 rounded mb-1 w-1/2"></div>
                                     <div className="w-full h-1.5 bg-cyan-500/30 rounded w-full"></div>
                                </div>
                            </div>

                            <svg width="180" height="180" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-idle-breathe relative z-20" style={{ animationDuration: '6s' }}>
                                {/* Sitting Legs with Mechanical Detail */}
                                <g>
                                    {/* Back hip joint */}
                                    <circle cx="85" cy="105" r="5" fill="#065F46" />
                                    {/* Back leg draping over */}
                                    <g className="origin-[85px_105px] animate-[dangle-leg_3s_infinite_ease-in-out_reverse]">
                                        <rect x="80" y="105" width="10" height="25" rx="3" fill="#047857" />
                                        <circle cx="85" cy="118" r="3" fill="#059669" />
                                        <rect x="76" y="130" width="18" height="8" rx="4" fill="#022C22" />
                                    </g>

                                    {/* Thigh (flat on block) */}
                                    <rect x="60" y="98" width="35" height="14" rx="7" fill="#10B981" />
                                    <circle cx="65" cy="105" r="4" fill="#059669" />

                                    {/* Front hip joint */}
                                    <circle cx="70" cy="105" r="6" fill="#059669" />
                                    {/* Front leg draping over */}
                                    <g className="origin-[70px_105px] animate-[dangle-leg_3s_infinite_ease-in-out]">
                                        {/* Calf and Joint */}
                                        <rect x="63" y="105" width="14" height="30" rx="4" fill="#34D399" />
                                        <circle cx="70" cy="122" r="4.5" fill="#6EE7B7" />
                                        <rect x="67" y="122" width="6" height="1" fill="#059669" />
                                        {/* Boot */}
                                        <rect x="60" y="138" width="22" height="11" rx="5" fill="#064E3B" />
                                        <rect x="62" y="145" width="18" height="2" rx="1" fill="#10B981" opacity="0.4" />
                                    </g>
                                </g>

                                {/* Body with paneling */}
                                <rect x="55" y="55" width="45" height="55" rx="12" fill="#F8FAFC" stroke="#10B981" strokeWidth="2.5"/>
                                <line x1="55" y1="82" x2="100" y2="82" stroke="#10B981" strokeWidth="1" opacity="0.2"/>
                                <circle cx="58" cy="58" r="1.2" fill="#10B981" opacity="0.4"/>
                                <circle cx="97" cy="58" r="1.2" fill="#10B981" opacity="0.4"/>
                                
                                {/* Chest Plate */}
                                <rect x="63" y="65" width="28" height="30" rx="5" fill="#022C22" />
                                <circle cx="77" cy="80" r="7" fill="#38BDF8" className="animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 3px #38BDF8)' }}/>
                                
                                {/* Arms with mechanical joints */}
                                <g>
                                    {/* Back arm */}
                                    <circle cx="100" cy="65" r="4" fill="#047857" /> {/* Shoulder */}
                                    <path d="M100 65 L115 90 L100 100" stroke="#047857" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    <circle cx="115" cy="90" r="3.5" fill="#059669" /> {/* Elbow */}
                                    
                                    {/* Front arm */}
                                    <circle cx="55" cy="65" r="5" fill="#34D399" /> {/* Shoulder */}
                                    <path d="M55 65 L40 90 L55 100" stroke="#34D399" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    <circle cx="40" cy="90" r="4.5" fill="#6EE7B7" /> {/* Elbow */}
                                </g>

                                {/* Head with bolts */}
                                <g className="animate-bounce-slow" style={{ animationDuration: '8s' }}>
                                    <rect x="50" y="20" width="55" height="35" rx="12" fill="#F8FAFC" stroke="#10B981" strokeWidth="2.5"/>
                                    <circle cx="53" cy="23" r="1" fill="#10B981" opacity="0.4"/>
                                    <circle cx="102" cy="23" r="1" fill="#10B981" opacity="0.4"/>
                                    {/* Visor */}
                                    <rect x="55" y="26" width="45" height="18" rx="5" fill="#022C22"/>
                                    <g className="animate-[eye-blink_6s_infinite]">
                                        {/* Cute smiling eyes */}
                                        <path d="M60 35 Q65 30 70 35" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" style={{ filter: 'drop-shadow(0 0 2px #38BDF8)' }}/>
                                        <path d="M85 35 Q90 30 95 35" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" style={{ filter: 'drop-shadow(0 0 2px #38BDF8)' }}/>
                                    </g>
                                    
                                    {/* Antenna / Small Crown */}
                                    <rect x="75" y="5" width="4" height="15" fill="#10B981"/>
                                    <circle cx="77" cy="5" r="5" fill="#38BDF8" className="animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 4px #38BDF8)' }}/>
                                </g>
                            </svg>
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

