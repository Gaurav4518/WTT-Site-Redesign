import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Container from '../common/Container';
import Button from '../common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10 || document.documentElement.scrollTop > 10;
            setScrolled(isScrolled);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu to route changes - removed isOpen dependency to fix auto-close bug
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Customers', path: '/customers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${isOpen
                ? 'bg-white py-4 shadow-lg'
                : scrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-emerald-500/5 py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <Container>
                <div className="flex justify-between items-center">
                    {/* Logo - Using Original Logo from web-tech-talk.com */}
                    <Link to="/" className="flex items-center gap-2 md:gap-4 group">
                        <div className="relative">
                            <img
                                src="/images/WTTLogo.png"
                                alt="Web Tech Talk Logo"
                                className="w-10 h-10 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Modern Glow Effect behind logo */}
                            <div className="absolute inset-0 bg-emerald-400/20 blur-xl -z-10 rounded-full group-hover:bg-emerald-400/40 transition-colors duration-300"></div>
                        </div>
                        <span className={`text-lg md:text-2xl font-heading font-bold transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
                            Web Tech<span className="gradient-text"> Talk</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-all duration-300 relative group ${scrolled
                                    ? location.pathname === link.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                    : location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                        <Link to="/contact">
                            <Button size="sm" variant="gradient">
                                Get Quote
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ?
                            <HiX className="text-secondary" /> :
                            <HiMenu className={scrolled ? 'text-secondary' : 'text-secondary'} />
                        }
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-2xl font-heading font-bold text-secondary">
                            Web Tech<span className="gradient-text"> Talk</span>
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-3xl text-gray-500 focus:outline-none hover:text-primary transition-colors"
                        >
                            <HiX />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 items-center flex-grow justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-2xl font-medium transition-colors ${location.pathname === link.path ? 'gradient-text' : 'text-secondary hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="mt-4">
                            <Button size="lg" variant="gradient" className="w-full">
                                Get a Quote
                            </Button>
                        </Link>
                    </nav>

                    <div className="mt-auto text-center text-gray-500 text-sm">
                        © 2026 Web Tech Talk, LLC
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

