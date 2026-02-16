import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const services = [
    {
        slug: "web-app-development",
        image: "/images/services/web-app.png",
        title: "Web App Development",
        description: "Web Tech Talk is specialized in developing dynamic websites in PHP and ASP.Net using modern web technologies like HTML5, Javascript, AJAX, jQuery and CSS. Our web development service includes web application development, custom CMS development and e-commerce website development. We create a new and innovative business model for Web Development, which can serve most of the solutions. We take every assignment and client as top priority, which help us in delivering the solution on timely basis."
    },
    {
        slug: "windows-app-development",
        image: "/images/services/windows-app.png",
        title: "Windows App Development",
        description: "Web Tech Talk has rich experience in developing Microsoft Windows based .NET desktop applications. We are a Microsoft .Net Development company and we specialize in custom application development of Microsoft .Net framework and applications. We have developed many windows based desktop applications in the various categories like business, accounting, library software, inventory management software."
    },
    {
        slug: "plc-programming",
        image: "/images/services/plc.png",
        title: "PLC Programming",
        description: "Web Tech Talk is specialized in PLC based programming and application development. We have successfully created custom applications / components to automated the manufacturing procedures controlled by PLC devices like (Siemens, Allen Brandley, Yokogawa, Adam, Velchem, S7, PLC/SLC 5, GM10, MW100, ) etc. over MODBUSS TCP and Ethernet IP. We design custom application to extract data from PLC, providing solution to control and capture the data from PLC devices based on the business model procedures and trigger driven action."
    },
    {
        slug: "mobile-app-development",
        image: "/images/services/mobile-app.png",
        title: "Mobile App Development",
        description: "Web Tech Talk Mobile development team is skilled at developing rich, beautiful and scalable native apps for Android/iPhone Devices including phones, tablets and phablets. We have experience in developing a variety of apps in various domains in the industry. Our expertise spans across cross-platform frameworks and native development to deliver high-performance, user-centric mobile solutions that drive engagement. Whether you need a simple utility app or a complex enterprise-grade mobile platform, we provide end-to-end development from conceptualization and UI/UX design to deployment and ongoing maintenance."
    },
    {
        slug: "website-scraping",
        image: "/images/services/scraping.jpg",
        title: "Website Scraping",
        description: "Web Tech Talk offers affordable 100% risk-free and accurate web data scraping service or data extraction/scraping. It is also known as Web Data Extraction, Web Content Extraction, Web Harvesting, Web Data Grabbing, Web Data Mining and Screen Scraping. We offers Web Data Scraping Service, Data Extraction/Scraping, Text Parsing, Screen Scraping, Web Data Extraction, and Web Data Scraping and custom scraping development service to large companies as well as medium size companies which need data to be processed. We have stand alone product to manage multiple vendor sites data extracting processing, it has some key feature like Secure Application Access, Easy Configuration of Vendors Credential Information using UI Interface, Automate/On Demand Digital Data Download Processing, Email Notification (Success / Warning / Error), Processing Tracking Module, No Database Requirement, Login Credential Information stored in Encrypted format etc."
    },
    {
        slug: "api-integration",
        image: "/images/services/seo.png",
        title: "API & System Integration",
        description: "Web Tech Talk empowers businesses by unifying fragmented software ecosystems. We specialize in building high-performance APIs and secure middleware that bridges the gap between modern cloud platforms and legacy systems. Our integration experts automate complex workflows—from Payment Gateways and CRM syncs to ERP orchestration—eliminating data silos and manual overhead. With a 'Security by Design' approach, we ensure your data moves with absolute integrity, unlocking the true potential of your digital infrastructure for seamless, scalable growth."
    }
];

const Services = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden" id="services">
            {/* Background - Subtle Green Mesh */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/8 to-green-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-400/8 to-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <Container>
                <SectionTitle
                    title="Our Expertise"
                    subtitle="What We Do"
                />
            </Container>

            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/15 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Hover Accent Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/30 transition-all duration-500 pointer-events-none z-20"></div>

                            {/* Image Section */}
                            <div className="relative h-56 overflow-hidden flex-shrink-0">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Number Badge - Positioned on Image */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg font-heading">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-7 flex flex-col flex-grow">
                                {/* Title with Accent Line */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-heading font-bold text-secondary group-hover:text-emerald-600 transition-colors duration-300 mb-3">
                                        {service.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                                </div>

                                {/* Description - 10 lines with line-clamp */}
                                <p className="text-gray-600 leading-relaxed text-sm font-sans line-clamp-4 md:line-clamp-[10] mb-6">
                                    {service.description}
                                </p>

                                {/* Know More Link */}
                                <div className="flex items-center mt-auto">
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                                    >
                                        <span>Know More</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
