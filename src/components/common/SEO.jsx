import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Dynamically updates document title and meta tags.
 * 
 * @param {string} title - The title for the current page
 * @param {string} description - The meta description for the current page
 */
const SEO = ({ title, description, keywords, canonical, type = 'website', robots = 'index, follow' }) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "Web Tech Talk";
        const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
        const siteUrl = "https://web-tech-talk.com";
        const currentUrl = `${siteUrl}${location.pathname}`;
        const canonicalUrl = canonical || currentUrl;

        // Update document title
        document.title = fullTitle;

        // Helper to update or create meta tags
        const updateMetaTag = (attr, value, content, isProperty = false) => {
            if (!content) return;
            const selector = isProperty ? `meta[property="${attr}"]` : `meta[name="${attr}"]`;
            let element = document.querySelector(selector);
            if (element) {
                element.setAttribute('content', content);
            }
        };

        // Update Standard Meta Tags
        updateMetaTag('description', null, description);
        updateMetaTag('keywords', null, keywords);
        updateMetaTag('robots', null, robots);
        updateMetaTag('author', null, 'Web Tech Talk, LLC');

        // Update Social (OG) Meta Tags
        updateMetaTag('og:title', null, fullTitle, true);
        updateMetaTag('og:description', null, description, true);
        updateMetaTag('og:type', null, type, true);
        updateMetaTag('og:url', null, currentUrl, true);
        updateMetaTag('og:site_name', null, baseTitle, true);

        // Update Twitter Meta Tags
        updateMetaTag('twitter:title', null, fullTitle, true);
        updateMetaTag('twitter:description', null, description, true);
        updateMetaTag('twitter:url', null, currentUrl, true);

        // Canonical Link Handling
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute('href', canonicalUrl);
        } else {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            linkCanonical.setAttribute('href', canonicalUrl);
            document.head.appendChild(linkCanonical);
        }

        // Structured Data (JSON-LD) Injection
        const schemaId = 'seo-structured-data';
        let schemaScript = document.getElementById(schemaId);
        
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Web Tech Talk",
            "url": siteUrl,
            "logo": `${siteUrl}/images/WTTLogo.png`,
            "sameAs": [
                "https://www.linkedin.com/company/web-tech-talk",
                "https://twitter.com/webtechtalk"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-704-302-1222",
                "contactType": "customer service",
                "areaServed": ["US", "IN"],
                "availableLanguage": "en"
            }
        };

        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Web Tech Talk",
            "url": siteUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/services?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };

        const combinedSchema = [organizationSchema, websiteSchema];

        if (schemaScript) {
            schemaScript.textContent = JSON.stringify(combinedSchema);
        } else {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            schemaScript.textContent = JSON.stringify(combinedSchema);
            document.head.appendChild(schemaScript);
        }

    }, [title, description, keywords, canonical, type, robots, location]);

    return null; // This component doesn't render any UI
};

export default SEO;
