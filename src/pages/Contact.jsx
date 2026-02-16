import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        // Backend expects 'name', 'email', 'subject', 'message'
        const payload = {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            source: 'Web Tech Talk'
        };

        try {
            const response = await fetch('https://timetrax-api-dj50.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message. Please try again later.');
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    return (
        <div className="pt-28 pb-20">
            <SEO
                title="Contact Our Team | Professional Digital Consultations"
                description="Ready to transform your business? Get in touch with Web Tech Talk for expert web development, mobile solutions, and system integration consultations. Reach out today."
            />
            {/* Unified Hero Section - Premium Design via Component */}
            <PageHero
                badge="Contact Center"
                title="Get In"
                highlightedTitle="Touch"
                description="Let's discuss your project and turn your ideas into digital reality."
            />

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

                        <div className="space-y-4">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />,
                                    title: "USA Office",
                                    detail: "2258 Elendil Ln, Charlotte, NC - 28269",
                                    color: "text-emerald-500",
                                    bg: "bg-emerald-500/10",
                                },
                                {
                                    icon: <FaMapMarkerAlt />,
                                    title: "India Office",
                                    detail: "Suite 303, Sector-77, Noida, UP - 201301",
                                    color: "text-teal-500",
                                    bg: "bg-teal-500/10",
                                },
                                {
                                    icon: <FaPhone />,
                                    title: "Direct Call",
                                    detail: "+1 704.302.1222",
                                    color: "text-cyan-500",
                                    bg: "bg-cyan-500/10",
                                },
                                {
                                    icon: <FaEnvelope />,
                                    title: "Email Us",
                                    detail: "connect@web-tech-talk.com",
                                    color: "text-primary",
                                    bg: "bg-primary/10",
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-0.5">{item.title}</h4>
                                        <p className="text-sm md:text-base font-bold text-secondary group-hover:text-emerald-600 transition-colors duration-300">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form - Shifted down with mt-12 */}
                    <div className="lg:mt-12 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 overflow-hidden relative">
                        {/* Accent line at top */}
                        <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary"></div>

                        <div className="p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-secondary mb-2">Send us a message</h3>
                            <p className="text-gray-500 text-sm mb-8">We'll get back to you within 24 business hours.</p>

                            {status.success && (
                                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <FaCheckCircle className="shrink-0" />
                                    <p>Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            {status.error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <FaExclamationCircle className="shrink-0" />
                                    <p>{status.error}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    size="xl"
                                    className="w-full flex items-center justify-center gap-3 font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    disabled={status.loading}
                                >
                                    {status.loading ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
