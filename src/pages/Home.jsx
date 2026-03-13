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
        <div className="page-gradient-bg">
            <SEO
                title="Elite Web & Mobile Development Solutions"
                description="Web Tech Talk is a premier software engineering firm specializing in custom web applications, mobile app development, and AI-driven solutions. Scale your business with our elite tech team."
                keywords="web development, mobile app development, custom software solutions, AI chatbots, cloud computing, systems integration, elite software engineers, business automation"
                type="website"
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
