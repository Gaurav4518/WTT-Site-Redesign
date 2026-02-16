import React from 'react';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

const Privacy = () => {
    return (
        <div className="pt-28 pb-20">
            <PageHero
                badge="Legal"
                title="Privacy"
                highlightedTitle="Policy"
                description="Your privacy is important to us. This policy outlines how we collect, use, and protect your information."
            />

            <Container>
                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            Information Collection
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This information may include: name, email, phone number, postal address, profile picture, and other information you choose to provide.
                        </p>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            Use of Information
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the information we collect about you to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Provide, maintain, and improve our Services;</li>
                            <li>Perform internal operations, including, for example, to prevent fraud and abuse of our Services;</li>
                            <li>Send you communications we think will be of interest to you;</li>
                            <li>Personalize and improve the Services.</li>
                        </ul>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            Cookies and Tracking
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We use cookies and other identification technologies on our apps, websites, emails, and online ads for purposes described in this Policy. Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements.
                        </p>
                    </section>

                    <section className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            Data Sharing
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We may share the information we collect about you as described in this Policy or as described at the time of collection or sharing, including with third-party service providers, vendors, and consultants who need access to such information to carry out work on our behalf.
                        </p>
                    </section>

                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                        <p className="text-emerald-800 italic">
                            Last updated: February 13, 2026. If you have any questions about this Privacy Policy, please contact us at <a href="mailto:connect@web-tech-talk.com" className="font-bold border-b border-emerald-500">connect@web-tech-talk.com</a>.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Privacy;
