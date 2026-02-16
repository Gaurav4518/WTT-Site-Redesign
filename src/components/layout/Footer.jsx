import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../common/Container';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 relative overflow-hidden">
            {/* Gradient accent at top - Green Theme */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>

            {/* Background orbs - Green Theme */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"></div>

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 relative z-10">
                    {/* Company Info */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-2xl font-heading font-bold text-white">
                                Web Tech<span className="gradient-text"> Talk</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transforming businesses with cutting-edge web and mobile solutions. We deliver quality, performance, and innovation.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-sm" title="LinkedIn">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-sm" title="Twitter">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-sm" title="Facebook">
                                <FaFacebook size={18} />
                            </a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>Services</Link></li>
                            <li><Link to="/customers" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>Our Customers</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services/web-app-development" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    Web Application Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/mobile-app-development" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    Mobile App Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/windows-app-development" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    Windows Applications
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/website-scraping" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    Website Scraping
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/plc-programming" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    PLC Programming
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/api-integration" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all"></span>
                                    System Integration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 group">
                                <FaMapMarkerAlt className="mt-1 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <span>Charlotte, NC, USA</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group">
                                <FaPhone className="text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+17043021222" className="hover:text-white transition-colors">+1 704.302.1222</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 group">
                                <FaEnvelope className="text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:connect@web-tech-talk.com" className="hover:text-white transition-colors">connect@web-tech-talk.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                    <p className="text-gray-500 text-sm italic">© 2016-{new Date().getFullYear()} Web Tech Talk, LLC. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-emerald-400 text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

