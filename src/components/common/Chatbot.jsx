import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

/**
 * =========================================================================
 * AI CHATBOT ENGINE v2.0
 * 
 * Features:
 * 1. Context Memory: Remembers the last topic discussed.
 * 2. Intent Scoring: Uses regex word boundaries to avoid false positives.
 * 3. Rich Text Rendering: Parses **bold** and bullet points for elegant UI.
 * 4. Fallback Routing: Connects confused users dynamically to humans.
 * =========================================================================
 */

// --- 1. THE KNOWLEDGE GRAPH ---
const KNOWLEDGE_GRAPH = [
    // Greeting Intent
    {
        id: 'greeting',
        keywords: ['hi', 'hii', 'hiii', 'hello', 'hey', 'greetings', 'morning', 'afternoon', 'sup'],
        answer: "**Hello! 👋 Welcome to Web Tech Talk.**\n\nI'm your dedicated AI Assistant. I can help you with:\n• Our Services & Technologies\n• Pricing & Custom Quotes\n• Company History & Success Stories\n• Contacting our human experts\n\nHow can I accelerate your business today?",
        setsContext: 'general'
    },
    // Company Intent
    {
        id: 'company_overview',
        keywords: ['about us', 'about wtt', 'about web tech talk', 'about the company', 'about your company', 'company', 'who are you', 'what is wtt', 'background', 'introduction'],
        answer: "**About Web Tech Talk**\n\nWe are a premium software engineering firm specializing in modern **Agile & Scrum** development.\n• **Experience**: 10+ Years\n• **Projects**: 500+ Delivered successfully\n• **Clients**: 120+ Happy partners globally\n• **Methodology**: Professional Scrum workflow for all projects.\n\nWe bridge the gap between complex technology and business needs with meticulous attention to detail.",
        setsContext: 'company'
    },
    // --- ALL SERVICES (Detailed) ---
    {
        id: 'services_all',
        keywords: ['services', 'offer', 'expertise', 'capabilities', 'what do you do', 'solutions'],
        answer: "**Our Core Expertise** 🚀\n\nWe provide end-to-end technical excellence across multiple domains:\n• **AI & Automation**: Custom Chatbots, LLMs, and RAG systems.\n• **Web & Mobile**: Scalable platforms and native/cross-platform apps.\n• **Industrial (PLC)**: Factory automation and data capture.\n• **Data Scraping**: High-performance enterprise extraction.\n• **UI/UX & DevOps**: Human-centric design and robust cloud pipelines.\n\nWhich area should we deep-dive into?",
        setsContext: 'general'
    },
    {
        id: 'service_ai',
        keywords: ['ai', 'artificial intelligence', 'chatbots', 'chatbot', 'gpt', 'llm', 'machine learning', 'machine', 'learning', 'ml', 'models', 'automation', 'nlp', 'rag', 'ai chatbot', 'ai research', 'intelligent systems', 'predictive', 'analytics', 'ai integration', 'ai process', 'solutions', 'ai expertise', 'your ai', 'ai services', 'ai solutions', 'ai capabilities'],
        answer: "**AI & Conversational Engineering** 🤖\n\nWe provide cutting-edge AI solutions tailored to your business:\n• **Custom AI Chatbots**: Context-aware bots powered by GPT-4, Claude, and Gemini.\n• **RAG Systems**: Bots that answer specifically from your business documents.\n• **Predictive ML Models**: Turning raw data into demand and trend forecasts.\n\n**Our 4-Step Integration Process:**\n1. **Data Audit**: Analyzing your data readiness.\n2. **Strategy**: Defining KPIs and architecture.\n3. **Development**: Building and fine-tuning your model.\n4. **Deployment**: Seamless integration and 24/7 monitoring.",
        setsContext: 'ai'
    },
    {
        id: 'service_design',
        keywords: ['ui', 'ux', 'design', 'user interface', 'user experience', 'figma', 'prototype', 'wireframe', 'branding', 'graphics', 'ui design', 'ux design', 'web design', 'mobile design'],
        answer: "**UI/UX Design & Branding** 🎨\n\nWe craft stunning, human-centric digital experiences:\n• **Research**: User personas and journey mapping.\n• **Prototyping**: High-fidelity interactive wireframes in Figma.\n• **Visual Design**: Modern aesthetics (Glassmorphism, Dark Mode).\n• **Usability**: Rigorous testing to ensure seamless navigation.",
        setsContext: 'design'
    },
    {
        id: 'service_devops',
        keywords: ['devops', 'operations', 'ops', 'cloud', 'aws', 'azure', 'google cloud', 'ci/cd', 'docker', 'kubernetes', 'infrastructure', 'deployment', 'server', 'sysadmin', 'cloud computing', 'cloud infrastructure'],
        answer: "**Cloud & DevOps Engineering** ☁️\n\nAccelerating your delivery with robust infrastructure:\n• **Cloud Migration**: Seamless transitions to AWS, Azure, or GCP.\n• **CI/CD**: Fully automated build and deployment pipelines.\n• **Containerization**: Scaling with Docker and Kubernetes.\n• **Infrastructure as Code**: Terraform and Ansible for reliability.",
        setsContext: 'devops'
    },
    {
        id: 'service_web',
        keywords: ['web', 'website', 'frontend', 'backend', 'full stack', 'react', 'node', 'php', 'javascript', 'html', 'css', 'cms', 'ecommerce', 'dev', 'development', 'software', 'coding', 'programming', 'web development', 'web application', 'custom website'],
        answer: "**Web Application Development** 🌐\n\nWe engineer fast, secure, and scalable web platforms:\n• **Frontend**: React.js, Tailwind, modern animation libraries\n• **Backend**: Node.js, PHP, ASP.NET, Spring Boot\n• **Ecommerce**: Custom checkout and inventory solutions\n• **Architecture**: Microservices and headless CMS.",
        setsContext: 'web'
    },
    {
        id: 'service_mobile',
        keywords: ['mobile', 'app', 'apps', 'ios', 'android', 'iphone', 'react native', 'flutter', 'handheld', 'tablet', 'application', 'mobile app', 'ios app', 'android app', 'mobile development'],
        answer: "**Mobile App Development** 📱\n\nReach your customers direct on any device:\n• **Native**: Swift (iOS) and Kotlin (Android)\n• **Cross-Platform**: React Native and Flutter experts\n• **Scalability**: Optimized for millions of users\n• **UI/UX**: Intuitive, gesture-driven interfaces.",
        setsContext: 'mobile'
    },
    {
        id: 'service_scraping',
        keywords: ['scrape', 'scraping', 'extraction', 'mining', 'harvesting', 'crawler', 'data grab', 'screen scraping', 'web scraping', 'web extraction', 'data extraction', 'data mining'],
        answer: "**Enterprise Data Extraction** 🔍\n\nWe offer affordable, 100% risk-free, and accurate web data scraping or data extraction/scraping.\n\n**Our Stand-Alone Extraction Product:**\nWe manage multiple vendor sites with our custom-built engine which features:\n• **Secure Access**: Encrypted credential storage and secure application access.\n• **Easy Setup**: UI Interface for quick configuration of Vendor Credentials.\n• **Automated Processing**: On-demand or automated digital data download.\n• **Real-time Tracking**: Dedicated Tracking Module with Email Notifications (Success/Warning/Error).\n• **Infrastructure**: Lightweight design with no database requirement for the standalone product.",
        setsContext: 'scraping'
    },
    {
        id: 'service_plc',
        keywords: ['plc', 'industrial', 'manufacturing', 'automation', 'siemens', 'allen bradley', 'modbus', 'ethernet ip', 'factory'],
        answer: "**Industrial PLC Programming** ⚙️\n\nWe specialize in PLC-based automation and manufacturing systems:\n• **Supported Hardware**: Siemens, Allen Bradley, Yokogawa, S7, Adam, Velchem.\n• **Protocols**: MODBUS TCP, Ethernet IP, and Serial communication.\n• **Data Capture**: Real-time extraction of factory floor data to business systems.\n• **Trigger Systems**: Custom logic for automated trigger-driven actions.",
        setsContext: 'plc'
    },
    {
        id: 'service_integration',
        keywords: ['api', 'integration', 'middleware', 'gateway', 'crm', 'erp', 'sync', 'orchestration', 'integration process'],
        answer: "**API & System Integration Process** 🔗\n\nWe unify fragmented ecosystems through a proven 4-step roadmap:\n1. **Audit**: Mapping all existing data touchpoints and silos.\n2. **Design**: Architecting secure, scalable API schemas.\n3. **Build**: Coding robust middleware logic and connectors.\n4. **Monitor**: 24/7 uptime tracking and real-time error handling.\n\nWe ensure **Security by Design** using OAuth2, JWT, and encrypted pipelines.",
        setsContext: 'integration'
    },
    {
        id: 'service_windows',
        keywords: ['windows', 'desktop', '.net', 'c#', 'wpf', 'winforms', 'accounting software'],
        answer: "**Windows Desktop Applications** 🖥️\n\nHigh-performance Microsoft .NET development:\n• Custom accounting, inventory, and library software\n• WPF and WinForms expertise\n• Legacy .NET framework migration and support\n• Offline-first desktop business tools.",
        setsContext: 'windows'
    },
    // ... existing stats, clients, strategy ...
    // Restricting the chunk for standard replace
    // --- CLIENTS & PORTFOLIO ---
    {
        id: 'clients',
        keywords: ['clients', 'client', 'customers', 'customer', 'partners', 'partner', 'who you work with', 'portfolio', 'funder america', 'gsg', 'onindus', 'who are customer', 'who are your customers', 'who is your customer', 'client list', 'customer base'],
        answer: "**Our Trusted Partners** 🤝\n\nWe work with industry leaders and innovative startups, including:\n**Funder America**\n**Global Systems Group (GSG)**\n**Foothill Gold Line**\n**OnIndus**\n**SDUHSD**\n**UIC**\n\nWe handle projects for both large enterprises and growing medium-sized firms.",
        setsContext: 'company'
    },
    // --- COMPANY STATS ---
    {
        id: 'company_stats',
        keywords: ['stats', 'statistics', 'numbers', 'how many', 'experience', 'projects', 'clients', 'track record', 'success rate'],
        answer: "**Web Tech Talk by the Numbers** 📊\n\n• **500+** Projects Successfully Delivered\n• **120+** Long-term Global Happy Clients\n• **10+** Years of Technical Excellence\n• **100%** Client Satisfaction Guarantee\n• **24/7** Priority Support Available",
        setsContext: 'company'
    },

    // Methodology & Strategy
    {
        id: 'strategy',
        keywords: ['strategy', 'process', 'workflow', 'how you work', 'steps', 'methodology', 'agile', 'scrum'],
        answer: "**Our Effective Strategy: The 6-Step Workflow** 🚀\n\nWe follow a strict **Modern Agile & Scrum** methodology to ensure quality:\n1. **Onboarding**: Dedicated specialists guide you through team building.\n2. **Sourcing**: Combining AI recruitment with proactive headhunting.\n3. **Training**: Custom pathways to equip teams with project-specific skills.\n4. **Production**: Functioning as an extension of your business with continuous measurement.\n5. **Continuous Improvement**: Customer Success Managers refine your workflow daily.\n6. **Growth**: Scaling operations and driving sustainable profitability.",
        setsContext: 'strategy'
    },
    // Support & Trust
    {
        id: 'support',
        keywords: ['support', 'help', 'maintenance', 'fix', 'bug', 'working hours', 'availability'],
        answer: "**24/7 Support & Maintenance** 🛟\n\nWe don't just launch and leave. We provide:\n• Constant monitoring and security patching\n• Dedicated support channels for rapid issue resolution\n• Performance optimization as your user count grows.\n\nNeed help right now? Email **connect@web-tech-talk.com**.",
        setsContext: 'contact'
    },
    {
        id: 'contact_details',
        keywords: ['contact', 'email', 'phone', 'call', 'reach', 'address', 'location', 'where', 'offices', 'usa', 'india'],
        answer: "**Let's Connect!** 🌍\n\nWe operate globally with teams ready to deploy:\n\n🇺🇸 **USA Headquarters**\n2258 Elendil Ln, Charlotte, NC\n📞 +1 704.302.1222\n\n🇮🇳 **India Innovation Hub**\nSuite 303, Sector-77, Noida, UP\n\n📧 **Email**: connect@web-tech-talk.com\n\n*We reply to all inquiries within 24 business hours.*",
        setsContext: 'contact'
    },
    {
        id: 'why_choose_us',
        keywords: ['why choose', 'why you', 'advantage', 'better', 'unique', 'different', 'benefits', 'convince', 'convience', 'convance', 'why partner', 'choose wtt', 'value', 'trust'],
        answer: "**Why Partner with Web Tech Talk?** 🏆\n\nWe don't just write code; we build lasting relationships and solutions:\n• **Deep Communication**: We listen and understand your business to ensure effective design.\n• **Experienced Team**: Specialized PMs, designers, and programmers for top-tier results.\n• **Cost-Effective**: High-quality solutions that fit your budget and timeline.\n• **Proven Track Record**: 10+ Years, 500+ Projects, and 100% Client Satisfaction.\n\nWe provide **24/7 Support** to ensure your success never sleeps.",
        setsContext: 'company'
    },
    {
        id: 'careers',
        keywords: ['career', 'job', 'hiring', 'internship', 'vacancy', 'apply', 'work for'],
        answer: "**Join the WTT Team!** 💼\n\nWe are always looking for exceptional engineers, designers, and AI specialists.\n\n• **How to apply**: Send your resume to **connect@web-tech-talk.com**.\n• **Roles**: Web/Mobile Devs, AI Engineers, Scraping Experts, and Project Managers.\n• **Culture**: Innovation-driven, remote-friendly, and continuous learning focused.",
        setsContext: 'careers'
    }
];

// --- Contextual Responses (The Brain's Memory) ---
const CONTEXT_AWARE_RESPONSES = {
    // If user asks "How much?" and the context is AI
    price: {
        ai: "AI integrations typically start from a few thousand dollars depending on whether you need a simple ChatGPT wrapper or a custom-trained RAG model. I can get a human expert to provide a precise quote. Would you like our email?",
        web: "Web development ranges from simple landing pages to complex corporate portals. A custom web app architecture is highly variable. Email us your requirements at connect@web-tech-talk.com for a free architectural review and quote.",
        mobile: "Mobile apps require API backends and dual-platform scaling. Costs usually depend on screen count and backend complexity. Want a quick estimate? Email your wireframes or ideas to connect@web-tech-talk.com.",
        scraping: "Scraping costs depend on the target website's defenses (like Cloudflare) and data volume. We offer both one-off extractions and monthly managed APIs. Send us the target URL for a 24-hour quote!",
        general: "Pricing depends heavily on your technical requirements. We pride ourselves on highly competitive, transparent billing. The best way to get an exact number is to email us at **connect@web-tech-talk.com** with your project scope."
    }
};

// =========================================================================
// 2. THE NLP ENGINE
// =========================================================================
const analyzeIntent = (input, currentContext) => {
    const rawInput = input.toLowerCase();

    // Check for CONTEXT-AWARE questions first
    const isPriceQuestion = /price|cost|quote|budget|how much|estimate|fee|charge/.test(rawInput);
    if (isPriceQuestion) {
        // Return context-specific price, or general if no context matches
        return CONTEXT_AWARE_RESPONSES.price[currentContext] || CONTEXT_AWARE_RESPONSES.price.general;
    }

    let bestMatch = null;
    let highestScore = 0;

    // Evaluate against Knowledge Graph using Regex boundaries for precision
    for (const intent of KNOWLEDGE_GRAPH) {
        let score = 0;

        for (const kw of intent.keywords) {
            try {
                // If the keyword contains \b, treat as literal boundary regex
                const regex = kw.includes('\\b')
                    ? new RegExp(kw, 'i')
                    : new RegExp(`\\b${kw}\\b`, 'i'); // Auto-add boundaries for safety

                if (regex.test(rawInput)) {
                    // Weight: Multi-word phrases are worth exponentially more
                    const wordCount = kw.replace(/\\b/g, '').split(' ').length;
                    score += Math.pow(wordCount, 2) + 2;
                }
            } catch (e) {
                // Fallback basic includes if regex fails (e.g. strange characters)
                if (rawInput.includes(kw.replace(/\\b/g, ''))) score += 1;
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = intent;
        }
    }

    if (bestMatch && highestScore > 0) {
        return { answer: bestMatch.answer, newContext: bestMatch.setsContext };
    }

    // Default Fallback
    return {
        answer: "That's a very specific question! 🤔 While I'm deeply trained on Web Tech Talk's capabilities, human context is sometimes needed for complex queries.\n\nCould you please email our expert team at **connect@web-tech-talk.com**? They respond extremely fast.",
        newContext: currentContext
    };
};

// =========================================================================
// 3. RICH TEXT RENDERER
// Converts simple markdown into styled HTML elements inside React
// =========================================================================
const formatText = (text) => {
    return text.split('\n').map((line, index) => {
        // Handle bold text (**text**)
        const boldParts = line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-emerald-800 font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });

        // Handle Bullet Points
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
                <div key={index} className="flex gap-2 my-1 pl-2">
                    <span className="text-emerald-500 font-bold mt-0.5">•</span>
                    <span>{boldParts.map((bp, i) => <React.Fragment key={i}>{bp}</React.Fragment>)}</span>
                </div>
            );
        }

        // Standard lines (with a small margin between paragraphs)
        return (
            <span key={index} className="block mb-2 last:mb-0">
                {boldParts.map((bp, i) => <React.Fragment key={i}>{bp}</React.Fragment>)}
            </span>
        );
    });
};

// =========================================================================
// 4. MAIN CHATBOT UI
// =========================================================================
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [context, setContext] = useState('general'); // Memory State
    const [messages, setMessages] = useState([
        {
            id: 'init',
            text: KNOWLEDGE_GRAPH[0].answer,
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping, isOpen]);

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        // 1. Add User Message
        const newUserMsg = {
            id: Date.now(),
            text,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        // 2. Compute AI Response 
        // We calculate delay based on "thinking" and "typing" time (length of response)
        const analysis = analyzeIntent(text, context);
        const finalAnswer = typeof analysis === 'string' ? analysis : analysis.answer;

        if (typeof analysis === 'object' && analysis.newContext) {
            setContext(analysis.newContext); // Update Bot Memory
        }

        // Simulate human-like reaction time (min 800ms, max 2500ms based on length)
        const typingDelay = Math.min(Math.max(800, finalAnswer.length * 10), 2500);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: finalAnswer,
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
        }, typingDelay);
    };

    const quickReplies = [
        "What services do you offer? 💼",
        "How much does it cost? 💰",
        "Tell me about your AI expertise 🤖",
        "Where are your offices? 🌍",
        "Who are your clients? 🤝"
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full gradient-primary text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group relative ${isOpen ? 'rotate-90 scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
                aria-label="Open AI Assistant"
            >
                <FaRobot size={28} className="group-hover:animate-bounce" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            {/* Main Chat Interface */}
            <div className={`absolute bottom-0 right-0 w-[360px] sm:w-[420px] h-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200/60 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}`}>

                {/* Header Profile */}
                <div className="p-4 gradient-primary text-white flex items-center justify-between shrink-0 shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-0.5 shadow-md">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-100 to-green-50 flex items-center justify-center text-emerald-600">
                                    <FaRobot size={22} />
                                </div>
                            </div>
                            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-emerald-500 rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-base leading-tight">WTT Consultant AI</h3>
                            <p className="text-xs text-emerald-100 font-medium mt-0.5 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                                Chat with us
                            </p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Close chat">
                        <FaTimes size={16} />
                    </button>
                </div>

                {/* Message Scroll Area */}
                <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50/70 space-y-5 thin-scrollbar scroll-smooth">
                    {/* Timestamp Center */}
                    <div className="flex justify-center mb-6">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Today</span>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-4 shadow-sm relative text-sm leading-relaxed ${msg.sender === 'user'
                                ? 'bg-emerald-600 text-white rounded-2xl rounded-tr-sm'
                                : 'bg-white text-gray-700 rounded-2xl rounded-tl-sm border border-gray-100/80 shadow-emerald-500/5'
                                }`}>
                                {msg.sender === 'bot' ? formatText(msg.text) : msg.text}
                                <span className={`text-[9px] font-bold mt-2 block opacity-40 uppercase tracking-wider ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Intelligent Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-100/80 py-4 px-5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-1">Analyzing</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0s' }}></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Intelligent Suggestions (Context Driven) */}
                {!isTyping && messages[messages.length - 1]?.sender === 'bot' && (
                    <div className="px-3 py-2.5 flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap bg-white/95 border-t border-gray-100 shrink-0">
                        {quickReplies.map((reply, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(reply.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').trim())} // strip emojis for input
                                className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[11px] font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] shrink-0"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {/* Advanced Input Module */}
                <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0 relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your strategic query..."
                        className="flex-grow py-3 px-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-sans placeholder-gray-400"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={!inputValue.trim()}
                        className="w-12 h-12 rounded-xl gradient-primary text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg disabled:cursor-not-allowed"
                        aria-label="Send message"
                    >
                        <FaPaperPlane size={16} className="ml-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
