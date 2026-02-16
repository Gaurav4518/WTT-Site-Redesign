import React, { useEffect } from 'react';
import { FaRocket, FaHandshake, FaLightbulb, FaUsers, FaCheckCircle, FaAward, FaCogs, FaClock } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { icon: <FaCheckCircle />, label: "Projects Delivered", value: "250+" },
        { icon: <FaUsers />, label: "Happy Clients", value: "120+" },
        { icon: <FaAward />, label: "Years Experience", value: "10+" },
        { icon: <FaClock />, label: "Support", value: "24/7" },
    ];

    const values = [
        {
            icon: <FaLightbulb className="text-yellow-500" />,
            title: "Innovation",
            description: "We don't just follow trends; we set them by utilizing the latest technologies like React, Node.js, and advanced automation."
        },
        {
            icon: <FaHandshake className="text-blue-500" />,
            title: "Integrity",
            description: "Transparency and honesty are the foundations of our partnerships. We treat your project with the same care as our own."
        },
        {
            icon: <FaRocket className="text-emerald-500" />,
            title: "Excellence",
            description: "From pixel-perfect UI designs to robust backend architectures, we strive for excellence in every line of code we write."
        },
        {
            icon: <FaUsers className="text-purple-500" />,
            title: "Client-Centric",
            description: "Your success is our success. We prioritize your business goals and work closely with you to achieve them."
        }
    ];

    return (
        <div className="pt-28 pb-20">
            <SEO
                title="Our Identity & Story"
                description="Learn about Web Tech Talk's journey, our mission for digital excellence, and the team behind our innovative solutions."
            />
            {/* --- Hero Section via Component --- */}
            <PageHero
                badge="Our Identity"
                title="Pioneering"
                highlightedTitle="Digital Excellence"
                description="We bridge the gap between complex technology and business needs, delivering modern solutions that scale."
            />

            <Container>
                {/* --- Who We Are Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/images/about-team.png"
                            alt="Professional tech team collaborating"
                            className="relative rounded-2xl shadow-2xl w-full h-64 md:h-[500px] object-cover"
                        />
                    </div>
                    <div>
                        <SectionTitle
                            title="Transforming Ideas into Reality"
                            subtitle="Who We Are"
                            centered={false}
                            className="mb-8"
                        />
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Web Tech Talk is a premier software development power-house dedicated to delivering high-quality, scalable, and innovative technology solutions.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team of passionate engineers and designers specialize in modern web apps, enterprise software, and industrial automation. We don't just build software; we build the future of your business.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-2xl text-primary">{stat.icon}</div>
                                    <div>
                                        <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-32">
                {/* --- Core Values Section --- */}
                <div className="mb-32">
                    <SectionTitle
                        title="What Drives Us"
                        subtitle="Core Values"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <Card key={i} className="p-8 hover-lift flex flex-col items-center text-center">
                                <div className="text-4xl mb-6">{v.icon}</div>
                                <h3 className="text-xl font-bold text-secondary mb-4">{v.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{v.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* --- Mission & Vision --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="glass-card p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-6xl text-emerald-500/5 group-hover:scale-110 transition-transform">
                            <FaRocket />
                        </div>
                        <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                            Our Mission
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To empower businesses with state-of-the-art technology solutions that drive efficiency, growth, and competitive advantage in the digital era.
                        </p>
                    </div>
                    <div className="glass-card p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-6xl text-blue-500/5 group-hover:scale-110 transition-transform">
                            <FaLightbulb />
                        </div>
                        <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                            Our Vision
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be a globally recognized leader in software innovation, known for our integrity, quality, and customer-centric approach.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
