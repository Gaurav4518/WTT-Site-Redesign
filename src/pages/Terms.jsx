import React from 'react';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';

const Terms = () => {
    return (
        <div className="pt-28 pb-20">
            <PageHero
                badge="Legal"
                title="Terms &"
                highlightedTitle="Conditions"
                description="Please read these terms and conditions carefully before using our services."
            />

            <Container>
                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            1. Acceptance of Terms
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing and using the services provided by Web Tech Talk, LLC ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.
                        </p>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            2. Use of Services
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all persons who access our services through your internet connection are aware of these Terms and comply with them.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>You must not use our services in any way that violates any applicable federal, state, local, or international law.</li>
                            <li>You must not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services.</li>
                            <li>You must not attempt to gain unauthorized access to any part of our systems or networks.</li>
                        </ul>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            3. Intellectual Property Rights
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            The services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by the Company, its licensors, or other providers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            4. Limitation of Liability
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services.
                        </p>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            5. Governing Law
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms and Conditions are governed by and construed in accordance with the laws of the State of North Carolina, USA, without regard to its conflict of law principles.
                        </p>
                    </section>

                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                        <p className="text-emerald-800 italic">
                            These terms were last updated on February 13, 2026. Continued use of our platform constitutes acceptance of the updated terms.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Terms;
