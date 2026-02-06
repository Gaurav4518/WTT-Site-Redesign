import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20">
            {/* Unified Hero Section - Premium Design */}
            <div className="relative py-24 mb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-secondary"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    {/* Animated grid overlay for texture */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20">
                        Contact Center
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed">
                        Let's discuss your project and turn your ideas into digital reality.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <SectionTitle
                            title="Get In Touch"
                            subtitle="Contact Details"
                            centered={false}
                        />
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            We are always ready to help you. There are many ways to contact us.
                            You may drop us a line, give us a call or send an email, choose what suits you most.
                        </p>

                        <div className="grid grid-cols-1 gap-6 mt-8">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />,
                                    title: "Visit Us",
                                    detail: "Charlotte, NC, USA",
                                    color: "text-emerald-600",
                                    bg: "bg-emerald-50",
                                    border: "hover:border-emerald-200"
                                },
                                {
                                    icon: <FaPhone />,
                                    title: "Call Us",
                                    detail: "+1 704.302.1222",
                                    color: "text-cyan-600",
                                    bg: "bg-cyan-50",
                                    border: "hover:border-cyan-200"
                                },
                                {
                                    icon: <FaEnvelope />,
                                    title: "Email Us",
                                    detail: "connect@web-tech-talk.com",
                                    color: "text-teal-600",
                                    bg: "bg-teal-50",
                                    border: "hover:border-teal-200"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className={`group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-6 ${item.border}`}>
                                    <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                                        <p className="text-lg font-bold text-secondary group-hover:text-emerald-600 transition-colors duration-300">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-secondary mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
