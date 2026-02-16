import React, { useEffect } from 'react';
import Container from '../components/common/Container';
import ServicesSection from '../components/sections/Services';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <SEO
                title="Expert Services"
                description="Explore our full range of services including Custom Software Development, Mobile Apps, System Integration, and Professional Consulting."
            />
            {/* ═══════════════ HERO ═══════════════ */}
            <div className="pt-28">
                <PageHero
                    badge="Our Services"
                    title="Technology That"
                    highlightedTitle="Drives Growth"
                    description="Comprehensive technology solutions tailored to your specific business needs.l"
                >
                </PageHero>
            </div>

            {/* ═══════════════ WHY WTT — VALUE PROPOSITION ═══════════════ */}
            <section className="py-20 md:py-28 bg-white relative">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — Text */}
                        <div>
                            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">Why Web Tech Talk</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary leading-tight mb-6">
                                A Powerful Choice for <span className="text-emerald-500">Your Business</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Web Tech Talk offers a range of Services and wide variety of Software platforms including leading Technologies.
                                We bring high quality software services to several medium and small Customers across the Globe.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                The combination of focus on Technology Area, competitive pricing (cost plus model), exceptional service and most importantly
                                onsite/offshore Project Management experience makes WTT a powerful choice for our clients.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                We offer both <strong className="text-secondary">Fixed Cost</strong> and <strong className="text-secondary">Time & Materials</strong> pricing model,
                                based on the projects needs and customers preference, any pricing model can be selected and we will ensure to provide
                                high quality work delivered in both cases.
                            </p>
                        </div>

                        {/* Right — Feature cards stack */}
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Technology Focus",
                                    desc: "Deep expertise across .NET, PHP, React, PLC automation, mobile platforms, and modern web technologies.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    )
                                },
                                {
                                    title: "Competitive Pricing",
                                    desc: "Our cost-plus model and flexible pricing ensures maximum value with high-quality software delivery.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    )
                                },
                                {
                                    title: "Project Management",
                                    desc: "Onsite/offshore experience ensures seamless communication, risk mitigation, and on-time delivery.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    )
                                }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════ BUSINESS VERTICALS ═══════════════ */}
            <section className="py-20 md:py-28 bg-gray-50/80 relative">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">Proven Track Record</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                            Successfully Delivered Across <span className="text-emerald-500">Industries</span>
                        </h2>
                        <p className="text-gray-500">
                            Our team has strong functional and technical knowledge to execute high-level application development
                            across the following business verticals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { title: "Auto and Home Insurance", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
                            { title: "Product Manufacturing (ERP)", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
                            { title: "Web & Kiosk Reservation System", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /> },
                            { title: "Sales & Financial Dashboard", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
                            { title: "Book Library System", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                            { title: "Digital Website Data Scraping", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /> },
                            { title: "NQDC Swap Administrator", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
                            { title: "Time & Expense System", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                            { title: "Trade-In System", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /> }
                        ].map((item, i) => (
                            <div key={i} className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                                <div className="w-11 h-11 rounded-xl bg-emerald-50 group-hover:bg-emerald-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-secondary text-sm">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════ ONSITE / OFFSHORE ═══════════════ */}
            <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]"></div>

                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-emerald-400 font-semibold text-sm mb-6 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Global Delivery
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            Onsite / Offshore <span className="gradient-text">Development Model</span>
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed">
                            We offer onsite and offshore development model options to customers who prefer to have technical expertise
                            at lower cost without compromising quality. Our delivery model optimizes the efficiency and cost of software development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Onsite */}
                        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                                    <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">On-Site Team</h3>
                                    <p className="text-emerald-400 text-sm font-medium">Client Location</p>
                                </div>
                            </div>
                            <p className="text-white/50 leading-relaxed mb-6">
                                Our specially trained on-site personnel handle requirement gathering, analysis, testing and
                                deployment. They ensure necessary assurance on mission-critical issues while maintaining
                                direct communication with stakeholders.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Requirements", "Analysis", "Testing", "Deployment", "Risk Mitigation"].map((t, i) => (
                                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Offshore */}
                        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                                    <svg className="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Off-Shore Center</h3>
                                    <p className="text-teal-400 text-sm font-medium">Development Hub</p>
                                </div>
                            </div>
                            <p className="text-white/50 leading-relaxed mb-6">
                                Our off-shore development centers are responsible for the actual development and providing support
                                to the on-site team. This provides clients with flexible and scalable services,
                                access to the best technology, resources and infrastructure.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Development", "Support", "Scalability", "Infrastructure", "Cost Efficiency"].map((t, i) => (
                                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom benefit text */}
                    <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <p className="text-white/50 text-center leading-relaxed max-w-4xl mx-auto">
                            This model enables customers to have <strong className="text-white/80">better communication</strong> through our on-site team
                            and <strong className="text-white/80">cost savings</strong> through our off-shore development center.
                            It is preferable for long-term projects where frequent specification changes require an on-site team for
                            real-time risk analysis and mitigation, while the customer also gets access to the best resources globally.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ═══════════════ CORE EXPERTISE GRID ═══════════════ */}
            <ServicesSection />
        </div>
    );
};

export default Services;
