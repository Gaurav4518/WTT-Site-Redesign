import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const Strategy = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress to the vertical position of the rocket
    // The rocket will move from 0% to 100% of the timeline height
    const y = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    // Opacity for the trail
    const trailHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    const steps = [
        {
            title: "Onboarding",
            description: "We assign a dedicated onboarding specialist who guides you through building your team with a well-defined project management framework, from initial planning to final launch.",
            number: "01"
        },
        {
            title: "Sourcing",
            description: "We identify and attract the right talent by combining AI-driven recruitment tools with proactive headhunting, building a team specifically aligned with your business goals.",
            number: "02"
        },
        {
            title: "Training",
            description: "Customized training programs and certification pathways are developed to equip your team with the skills and knowledge required to perform with confidence.",
            number: "03"
        },
        {
            title: "Production",
            description: "Your team functions as an extension of your business, fully supported and managed, while performance, efficiency, and outcomes are continuously measured.",
            number: "04"
        },
        {
            title: "Continuous Improvement",
            description: "An experienced customer success manager partners with you to refine processes, implement improvements, and maintain seamless project and team coordination.",
            number: "05"
        },
        {
            title: "Growth",
            description: "Strengthen your business by scaling operations, optimizing efficiency, and driving sustainable profitability.",
            number: "06"
        }
    ];

    return (
        <section ref={containerRef} className="py-12 relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white">
            <Container>
                <SectionTitle
                    title="Our Effective Strategy"
                    subtitle="How We Work"
                    className="mb-8"
                />

                <div className="relative">
                    {/* Central Line Track */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

                    {/* Progress Line (Trail) */}
                    <motion.div
                        style={{ height: trailHeight }}
                        className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-brand transform md:-translate-x-1/2 rounded-full origin-top z-10"
                    ></motion.div>

                    {/* Rocket Indicator */}
                    <motion.div
                        style={{ top: y }}
                        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                    >
                        {/* Professional Car Icon - Top Down View */}
                        <div className="relative w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-180">
                                {/* Car Body */}
                                <path
                                    d="M30 20 Q30 10 50 10 Q70 10 70 20 L75 80 Q75 90 50 90 Q25 90 25 80 L30 20 Z"
                                    fill="url(#carGradient)"
                                    className="drop-shadow-sm"
                                />
                                {/* Windshield */}
                                <path
                                    d="M32 25 Q50 20 68 25 L66 40 Q50 38 34 40 Z"
                                    fill="#1e293b"
                                    opacity="0.8"
                                />
                                {/* Rear Window */}
                                <path
                                    d="M34 65 Q50 62 66 65 L64 75 Q50 78 36 75 Z"
                                    fill="#1e293b"
                                    opacity="0.8"
                                />
                                {/* Roof */}
                                <path
                                    d="M34 42 L66 42 L64 63 L36 63 Z"
                                    fill="currentColor"
                                    className="text-emerald-500 opacity-20"
                                />

                                <defs>
                                    <linearGradient id="carGradient" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#10B981" /> {/* Emerald */}
                                        <stop offset="100%" stopColor="#06B6D4" /> {/* Cyan */}
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Headlight Beams (functioning as forward path illumination) */}
                            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-full w-0.5 h-16 bg-gradient-to-t from-emerald-400/0 to-emerald-400/40"></div>
                            <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-full w-0.5 h-16 bg-gradient-to-t from-emerald-400/0 to-emerald-400/40"></div>
                        </div>
                    </motion.div>

                    {/* Timeline Steps */}
                    <div className="space-y-8 md:space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                                {/* Text Content */}
                                <div className={`md:w-1/2 px-4 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12 md:pl-0'} text-left pl-20 mb-2 md:mb-0`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-bold mb-2 tracking-wider">
                                            STEP {step.number}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className={`text-gray-600 leading-snug text-base max-w-md mx-auto ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Spacer for center line */}
                                <div className="w-8 md:w-0"></div>

                                {/* Mirror Content (Empty for layout balance) */}
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <style jsx>{`
                .bg-gradient-brand {
                    background: linear-gradient(180deg, #10B981 0%, #06B6D4 100%);
                }
                @keyframes flame {
                    0% { opacity: 0.6; transform: translateX(-50%) scaleY(1); }
                    50% { opacity: 1; transform: translateX(-50%) scaleY(1.2); }
                    100% { opacity: 0.6; transform: translateX(-50%) scaleY(1); }
                }
                .animate-flame {
                    animation: flame 0.2s infinite;
                }
            `}</style>
        </section>
    );
};

export default Strategy;
