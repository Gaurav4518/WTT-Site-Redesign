import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CallToAction from '../components/sections/CallToAction';
import Clients from '../components/sections/Clients';
import Strategy from '../components/sections/Strategy';
import SEO from '../components/common/SEO';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <SEO
                title="Elite Web & Mobile Development"
                description="Web Tech Talk delivers premium web application development, mobile solutions, and system integrations. Transform your business with our elite engineering expertise."
            />
            <Hero />
            <Clients />
            <Services />
            <WhyChooseUs />
            <Strategy />
            <CallToAction />
        </div>
    );
};

export default Home;
