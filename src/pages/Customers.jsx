import React, { useEffect } from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

const clients = [
    {
        name: "Funder America, Inc.",
        logo: "/images/customers/Funder.jpg",
        description: "Innovative funding solutions for business growth.",
        tag: "Finance"
    },
    {
        name: "Global Systems Group",
        logo: "/images/customers/GSG.png",
        description: "World leader in bedding industry technology.",
        tag: "Technology"
    },
    {
        name: "Foothill Gold Line",
        logo: "/images/customers/FoothillGoldLine.jpg",
        description: "Major transportation infrastructure development.",
        tag: "Public Sector"
    },
    {
        name: "OnIndus",
        logo: "/images/customers/Onindus.png",
        description: "Transforming capital project delivery and operations.",
        tag: "SaaS"
    },
    {
        name: "San Dieguito UHSD",
        logo: "/images/customers/SDUHSD.png",
        description: "Excellence in educational digital infrastructure.",
        tag: "Education"
    },
    {
        name: "Universal Insurance Company",
        logo: "/images/customers/UIC.png",
        description: "Reliable insurance and risk management solutions.",
        tag: "Insurance"
    },
    {
        name: "Cherokee Auto Auction",
        logo: "/images/customers/Cherokee.png",
        description: "Advanced automotive dealership solutions.",
        tag: "Automotive"
    },
    {
        name: "Seibels",
        logo: "/images/customers/Seibels.png",
        description: "Strategic BPO and insurance technology services.",
        tag: "Insurance"
    }
];

const Customers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 overflow-hidden">
            {/* Header Section */}
            <div className="relative py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-secondary"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    {/* Animated grid overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20">
                        Our Success
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                        Trusted by <span className="gradient-text">Global Brands</span>
                    </h1>
                    <p className="text-xl text-emerald-50/80 max-w-3xl mx-auto leading-relaxed">
                        We take pride in partnering with industry leaders to deliver transformative digital solutions across the globe.
                    </p>
                </Container>
            </div>

            <Container>
                {/* Intro Section */}
                <div className="mb-20">
                    <SectionTitle
                        title="Diverse Industry Expertise"
                        subtitle="Industry Coverage"
                        centered={true}
                    />
                </div>

                {/* Client Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
                    {clients.map((client, index) => (
                        <div key={index} className="glass-card p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden group/item">
                            {/* Decorative background element */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover/item:bg-emerald-500/10 transition-colors"></div>

                            {/* Client Category Tag */}
                            <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded">
                                {client.tag}
                            </span>

                            {/* Logo Container */}
                            <div className="w-full h-24 flex items-center justify-center mb-8 relative">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-[140px] max-h-[80px] object-contain transition-all duration-500"
                                />
                            </div>

                            <h3 className="text-lg font-heading font-bold text-secondary mb-3 group-hover/item:text-emerald-600 transition-colors">
                                {client.name}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {client.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-12 rounded-[3rem] gradient-primary relative overflow-hidden text-center text-white shadow-2xl shadow-emerald-500/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl -ml-20 -mb-20"></div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">Join Our Circle of Success</h2>
                    <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 relative z-10">
                        Ready to elevate your business with cutting-edge technology? Let's write your success story together.
                    </p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-white text-emerald-600 font-bold rounded-full shadow-xl hover:bg-emerald-50 hover:scale-105 transition-all duration-300 relative z-10">
                        Start Your Project
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Customers;
