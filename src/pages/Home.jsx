import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CallToAction from '../components/sections/CallToAction';

import Clients from '../components/sections/Clients';
import Strategy from '../components/sections/Strategy';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <Clients />
            <Services />
            <WhyChooseUs />
            <Strategy />
            <CallToAction />
        </main>
    );
};

export default Home;
