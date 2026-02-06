import React from 'react';
import Container from '../common/Container';

const clients = [
    { name: "Funder America", logo: "/images/customers/Funder.jpg" },
    { name: "Global Systems Group", logo: "/images/customers/GSG.png" },
    { name: "Foothill Gold Line", logo: "/images/customers/FoothillGoldLine.jpg" },
    { name: "OnIndus", logo: "/images/customers/Onindus.png" },
    { name: "SDUHSD", logo: "/images/customers/SDUHSD.png" },
    { name: "UIC", logo: "/images/customers/UIC.png" }
];

const Clients = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-secondary overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="shrink-0">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Trusted By</span>
                    </div>
                    <div className="flex-grow overflow-hidden w-full max-w-full">
                        <div className="flex items-center gap-12 md:gap-20 animate-scrolling transition-all duration-700">
                            {/* Duplicate logos for seamless looping */}
                            {clients.concat(clients).map((client, index) => (
                                <img
                                    key={index}
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Clients;
