import React from 'react';
import { FaRegComments, FaUserTie, FaHandHoldingUsd } from 'react-icons/fa';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const features = [
    {
        icon: <FaRegComments />,
        title: "Communication",
        description: "We believe in transparent and continuous communication. You are involved in every step of the development process.",
        gradient: "from-emerald-500 to-green-600"
    },
    {
        icon: <FaUserTie />,
        title: "Experienced Team",
        description: "Our developers are industry veterans with deep expertise in their respective technologies.",
        gradient: "from-teal-500 to-cyan-500"
    },
    {
        icon: <FaHandHoldingUsd />,
        title: "Effective Cost",
        description: "We deliver premium quality software solutions at competitive rates, ensuring high ROI for your business.",
        gradient: "from-lime-500 to-green-500"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decorations - Green Theme */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-green-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-teal-400/10 to-cyan-400/5 rounded-full blur-3xl"></div>

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <SectionTitle
                            title="Why Partner With Us?"
                            subtitle="Our Core Values"
                            centered={false}
                        />
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At Web Tech Talk, we don't just write code; we build relationships and solutions that last.
                            Our commitment to quality and client satisfaction sets us apart in the crowded tech landscape.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-5 p-4 rounded-2xl hover:bg-white/60 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center text-xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-secondary mb-2">{feature.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="gradient-primary text-white p-8 rounded-3xl sm:rounded-br-[4rem] mt-6 sm:mt-10 shadow-2xl shadow-emerald-500/25 animate-fade-in-up hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl sm:text-5xl font-bold mb-2">10+</div>
                                <div className="text-white/80 font-medium">Years Experience</div>
                            </div>
                            <div className="bg-secondary text-white p-8 rounded-3xl sm:rounded-tl-[4rem] shadow-2xl shadow-black/20 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.15s' }}>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                                <div className="text-white/60 font-medium">Client Satisfaction</div>
                            </div>
                            <div className="glass-card text-secondary p-8 rounded-3xl sm:rounded-tr-[4rem] animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                                <div className="text-4xl sm:text-5xl font-bold mb-2 gradient-text">24/7</div>
                                <div className="text-gray-500 font-medium">Support Available</div>
                            </div>
                            <div className="gradient-accent text-white p-8 rounded-3xl sm:rounded-bl-[4rem] mt-0 sm:mt-[-2rem] shadow-2xl shadow-teal-500/25 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.45s' }}>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
                                <div className="text-white/90 font-medium">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;

