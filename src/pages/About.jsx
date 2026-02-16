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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/about-team.png"
                                alt="Professional tech team collaborating"
                                className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex gap-8 text-white">
                                    {stats.slice(0, 2).map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-3xl font-bold">{stat.value}</div>
                                            <div className="text-sm opacity-80">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionTitle
                            title="Your Vision, Our Expertise"
                            subtitle="Who We Are"
                            centered={false}
                            className="mb-8"
                        />
                        <div className="space-y-6">
                            <p className="text-xl text-secondary font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                                Web Tech Talk designs, develops, markets, and supports enterprise applications that meet the critical requirements of modern businesses.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team consists of experienced web designers, developers, and SEO experts dedicated to generating custom solutions that fulfill every business need. We pride ourselves on using a <strong>modern agile workflow</strong> and <strong>scrum development methodology</strong>.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                This ensures that the solutions we build are as beautiful as they are functional, delivered with meticulous attention to detail and a focus on long-term scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* --- Specialized Expertise: Web Scraping --- */}
            <div className="bg-gray-50 py-24 mb-32">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <SectionTitle
                            title="Industry Leading Web Data Extraction"
                            subtitle="Core Specialization"
                        />
                    </div>
                    <Card className="p-10 md:p-16 border-none shadow-xl bg-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-1">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl">
                                    <FaCogs />
                                </div>
                            </div>
                            <div className="lg:col-span-11">
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Web Tech Talk is a group of IT professionals to help find solutions for any type of Web Development, Windows Development, and Mobile Application Development. We have expertise in Web Design & Development, Mobile Application Development, and Website Scraping.
                                </p>
                                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mb-8">
                                    <h4 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                                        <FaCheckCircle className="text-primary text-xl" />
                                        100% Risk-Free & Accurate Scraping
                                    </h4>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Website Scraping is one of our core services. We offer affordable, accurate web scraping service or data extraction/scraping. It is also known as Web Data Extraction, Web Content Extraction, Web Harvesting, Web Data Grabbing, Web Data Mining and Screen Scraping.
                                    </p>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We offer website scraping service, data extraction/scraping, text parsing, screen scraping, web data extraction, and website scraping and custom scraping development service to large companies as well as medium size companies which need data to be processed. Please navigate to our service section to know more about list of services we offer.
                                </p>
                            </div>
                        </div>
                    </Card>
                </Container>
            </div>

            <Container className="mb-32">
                {/* --- Core Expertise Grid --- */}
                <div className="mb-32">
                    <SectionTitle
                        title="What Drives Us"
                        subtitle="Core Values"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <Card key={i} className="p-8 hover-lift flex flex-col items-center text-center border-none shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">{v.icon}</div>
                                <h3 className="text-xl font-bold text-secondary mb-4">{v.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{v.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* --- Mission & Vision --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group p-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl h-full">
                        <div className="bg-white p-12 rounded-[22px] h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-6xl text-emerald-500/5 group-hover:scale-110 transition-transform">
                                <FaRocket />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                                <span className="w-2 h-10 bg-emerald-500 rounded-full"></span>
                                Our Mission
                            </h3>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                To empower businesses with state-of-the-art technology solutions that drive efficiency, growth, and competitive advantage in the digital era.
                            </p>
                        </div>
                    </div>
                    <div className="group p-1 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl h-full">
                        <div className="bg-white p-12 rounded-[22px] h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-6xl text-blue-500/5 group-hover:scale-110 transition-transform">
                                <FaLightbulb />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                                <span className="w-2 h-10 bg-blue-500 rounded-full"></span>
                                Our Vision
                            </h3>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                To be a globally recognized leader in software innovation, known for our integrity, quality, and customer-centric approach.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
