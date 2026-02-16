import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import { serviceDetails } from '../data/serviceDetails';
import SEO from '../components/common/SEO';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = serviceDetails[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center">
                <Container>
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-emerald-600 hover:underline">Back to Services</Link>
                </Container>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 overflow-hidden min-h-screen">
            <SEO
                title={service.title}
                description={service.description}
            />
            {/* Hero Header */}
            <div className="relative py-20 mb-12 overflow-hidden bg-secondary">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="relative z-10 text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Services</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        {service.title}
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </Container>
            </div>

            {/* Content Section */}
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up">
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-secondary prose-p:text-gray-600 prose-p:leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: service.content }}
                        />

                        {/* Call to Action */}
                        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Ready to start your project?</h3>
                                <p className="text-gray-500">Contact our experts today for a consultation.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetail;
