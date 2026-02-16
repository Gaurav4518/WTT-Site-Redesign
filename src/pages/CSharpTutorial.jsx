import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
const loginDemoImage = '/images/scraping/LoginToWebsite.jpg';
import SEO from '../components/common/SEO';

const CSharpTutorial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 overflow-hidden min-h-screen">
            <SEO
                title="C# Web Scraping Tutorial"
                description="Master C# web scraping with our comprehensive, step-by-step guide. Learn the best tools and techniques for modern data extraction."
            />
            {/* Hero Header */}
            <div className="relative py-20 mb-12 overflow-hidden bg-secondary">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="relative z-10 text-center">
                    <Link
                        to="/services/website-scraping"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Web Scraping Service</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Login to Website Programmatically Using C#
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </Container>
            </div>

            {/* Content Section */}
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up space-y-12">

                        {/* Intro Section */}
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <p>
                                In many scenarios, the data you want to scrape is only available after logging in. To reach the page where data is located, you need to implement code in your web scraper that automatically handles authentication by providing a username/email and password.
                            </p>
                            <p>
                                Many third-party web scraping applications provide functionality where you can locate the login URL and set login parameters. This login task is typically handled as the first step of the scraping process.
                            </p>
                        </div>

                        {/* Illustrative Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <img
                                src={loginDemoImage}
                                alt="Login to Website using C# Demo"
                                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                            />
                            <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 italic">
                                Sample C# Login Demo Interface
                            </div>
                        </div>

                        {/* Step 1: HTML Structure */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/30">1</div>
                                <h3 className="text-2xl font-bold text-secondary">The Target HTML Structure</h3>
                            </div>
                            <p className="text-gray-600">To automate a login, we first identify the unique IDs of the input fields and the submit button in the target website's HTML code.</p>
                            <div className="bg-gray-900 rounded-2xl p-6 shadow-inner font-mono text-sm overflow-x-auto text-gray-300 border border-gray-800">
                                <pre><code>{`<form class="form-signin" id="login" method="post" role="form">
  <h3 class="form-signin-heading">Please sign in</h3>
  <input type="email" id="loginEmail" placeholder="Email address" required>
  <input type="password" id="loginPass" placeholder="Password" required>
  <button id="login_submit" type="submit">Sign in</button>
</form>`}</code></pre>
                            </div>
                        </div>

                        {/* Step 2: C# Filling Fields */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/30">2</div>
                                <h3 className="text-2xl font-bold text-secondary">Filling Input Fields with C#</h3>
                            </div>
                            <p className="text-gray-600">By referencing the IDs identified in the HTML, we populate the fields using the WebBrowser control as follows:</p>
                            <div className="bg-gray-900 rounded-2xl p-6 shadow-inner font-mono text-sm overflow-x-auto text-emerald-400 border border-gray-800">
                                <pre><code>{`webBrowser1.Document.GetElementById("loginEmail").InnerText = "your-email@example.com";
webBrowser1.Document.GetElementById("loginPass").InnerText = "your-secure-password";`}</code></pre>
                            </div>
                        </div>

                        {/* Step 3: Triggering Click */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30">3</div>
                                <h3 className="text-2xl font-bold text-secondary">Triggering the Submit Button</h3>
                            </div>
                            <p className="text-gray-600">Finally, we programmatically trigger the login by invoking the click member on the submit button:</p>
                            <div className="bg-gray-900 rounded-2xl p-6 shadow-inner font-mono text-sm overflow-x-auto text-blue-400 border border-gray-800">
                                <pre><code>{`webBrowser1.Document.GetElementById("login_submit").InvokeMember("click");`}</code></pre>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                            <h4 className="text-xl font-bold text-emerald-900 mb-3">Conclusion</h4>
                            <p className="text-emerald-800 leading-relaxed italic">
                                This is a fundamental method for programmatic web interaction. While there are numerous ways to handle web authentication, using the WebBrowser control's Document object is a straightforward and effective approach for many projects.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Need a custom scraping solution?</h3>
                                <p className="text-gray-500">Contact us today for a FREE sample project.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                Contact Our Experts
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CSharpTutorial;
