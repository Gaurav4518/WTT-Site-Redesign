import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaCheckCircle, FaCode, FaTerminal, FaRocket, FaChevronLeft } from 'react-icons/fa';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';

const loginDemoImage = '/images/scraping/LoginToWebsite.jpg';

const CSharpTutorial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 overflow-hidden min-h-screen bg-gray-50/50">
            <SEO
                title="C# Web Scraping Tutorial | Web Tech Talk"
                description="Learn how to programmatically login to websites using C#. A comprehensive tutorial on automated web authentication for data scraping."
            />

            {/* Hero Section */}
            <div className="relative py-24 md:py-32 bg-secondary overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link
                            to="/services/website-scraping"
                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all mb-10 group bg-emerald-500/10 px-6 py-2 rounded-full border border-emerald-500/20 backdrop-blur-sm"
                        >
                            <FaChevronLeft className="text-sm transform group-hover:-translate-x-1 transition-transform" />
                            <span className="font-semibold tracking-wide uppercase text-xs">Web Scraping Service</span>
                        </Link>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
                            Login to Website Programmatically Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">C#</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            A comprehensive guide on automating authentication for advanced web data extraction projects.
                        </p>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full shadow-lg shadow-emerald-500/20"></div>
                    </div>
                </Container>
            </div>

            {/* Main Content Area */}
            <Container className="-mt-16 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-gray-200/50 border border-white/50 space-y-16">

                        {/* Introduction Card */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-8 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-bold tracking-wide uppercase">
                                    <FaRocket className="text-xs" /> Overview
                                </div>
                                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                    <p className="text-xl text-secondary font-medium leading-relaxed italic">
                                        "In many scenarios, the data you want to scrape is only available after logging in."
                                    </p>
                                    <p>
                                        To reach the page where your target data is located, you need to implement code in your web scraper that automatically handles authentication by providing a username/email and password. Once the login is complete, you can proceed with crawling and parsing as required.
                                    </p>
                                    <p>
                                        Many third-party web scraping applications provide dedicated functionality where you can specify the login URL and set authentication parameters. The login task is then executed automatically whenever the scraper begins its data gathering process.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col gap-6">
                                <h4 className="font-bold text-secondary text-lg flex items-center gap-2">
                                    <FaCheckCircle className="text-emerald-500" /> Key Highlights
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Automated Authentication",
                                        "Credential Management",
                                        "DOM Manipulation",
                                        "Programmatic Interaction"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Interactive Demo Preview */}
                        <div className="relative group max-w-3xl mx-auto">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                                <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="ml-4 bg-white/80 px-4 py-1 rounded-md text-[10px] font-mono text-gray-400 flex items-center gap-2">
                                        <FaTerminal className="text-[8px]" /> CSharpLoginDemo.exe
                                    </div>
                                </div>
                                <img
                                    src={loginDemoImage}
                                    alt="Login to Website using C# Demo"
                                    className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
                                />
                                <div className="p-4 bg-gray-50/80 backdrop-blur-sm text-center text-xs text-gray-500 font-medium italic">
                                    Visual illustration of the programmatic login interface
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step Implementation */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-secondary text-center">Implementation Steps</h3>

                            <div className="grid grid-cols-1 gap-12">
                                {/* Step 1 */}
                                <div className="relative pl-20 group">
                                    <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform">1</div>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-secondary">The Target HTML Structure</h4>
                                        <p className="text-gray-600 leading-relaxed">To automate a login, we first identify the unique IDs of the input fields and the submit button in the target website's HTML code. This allows our C# application to "know" which elements to interact with.</p>
                                        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800 font-mono text-sm group/code relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/code:opacity-20 transition-opacity">
                                                <FaCode className="text-4xl text-white" />
                                            </div>
                                            <pre className="text-slate-300 leading-relaxed"><code>{`<form class="form-signin" id="login" method="post" role="form">
  <h3 class="form-signin-heading">Please sign in</h3>
  <input type="email" id="loginEmail" placeholder="Email address" required>
  <input type="password" id="loginPass" placeholder="Password" required>
  <button id="login_submit" type="submit">Sign in</button>
</form>`}</code></pre>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative pl-20 group">
                                    <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">2</div>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-secondary">Filling Input Fields with C#</h4>
                                        <p className="text-gray-600 leading-relaxed">By referencing the IDs identified in the HTML, we populate the fields using the WebBrowser control's Document object as follows:</p>
                                        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800 font-mono text-sm group/code relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/code:opacity-20 transition-opacity">
                                                <FaCogs className="text-4xl text-white" />
                                            </div>
                                            <pre className="text-emerald-400 leading-relaxed"><code>{`webBrowser1.Document.GetElementById("loginEmail").InnerText = "your-email@example.com";
webBrowser1.Document.GetElementById("loginPass").InnerText = "your-secure-password";`}</code></pre>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative pl-20 group">
                                    <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">3</div>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-secondary">Triggering the Submit Button</h4>
                                        <p className="text-gray-600 leading-relaxed">Finally, we programmatically trigger the login process by invoking the click member on the submit button element:</p>
                                        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800 font-mono text-sm group/code relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/code:opacity-20 transition-opacity">
                                                <FaRocket className="text-4xl text-white" />
                                            </div>
                                            <pre className="text-blue-400 leading-relaxed"><code>{`webBrowser1.Document.GetElementById("login_submit").InvokeMember("click");`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Conclusion */}
                        <div className="p-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2rem] text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4">Conclusion</h4>
                                <p className="text-emerald-50 leading-relaxed text-lg italic">
                                    "This is a fundamental method for programmatic web interaction. While there are numerous ways to handle web authentication, using the WebBrowser control's Document object remains a straightforward and highly effective approach for many data scraping projects."
                                </p>
                            </div>
                        </div>

                        {/* Enhanced CTA Section */}
                        <div className="pt-16 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-secondary mb-3 tracking-tight">Need a custom scraping solution?</h3>
                                <p className="text-gray-500 text-lg">Our experts can handle complex authentication and data extraction for you. Contact us today for a <strong>FREE sample project</strong>.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
                            >
                                <FaRocket /> Get Your Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CSharpTutorial;
