import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Dynamically updates document title and meta tags.
 * 
 * @param {string} title - The title for the current page
 * @param {string} description - The meta description for the current page
 */
const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        // Base title for the site
        const baseTitle = "Web Tech Talk";
        const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

        // Update document title
        document.title = fullTitle;

        // Update meta tags for SEO and Social Sharing
        const updateMetaTag = (property, content, isProperty = false) => {
            if (!content) return;
            const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
            let element = document.querySelector(selector);

            if (element) {
                element.setAttribute('content', content);
            }
        };

        // Update description
        updateMetaTag('description', description);
        updateMetaTag('og:title', fullTitle, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('twitter:title', fullTitle, true);
        updateMetaTag('twitter:description', description, true);

    }, [title, description, location]);

    return null; // This component doesn't render any UI
};

export default SEO;
