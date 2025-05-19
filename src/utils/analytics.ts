
/**
 * Utility functions for Google Analytics tracking
 */

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  // Add the script tags to the document
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-67VWJXCLHJ';
  document.head.appendChild(script1);

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-67VWJXCLHJ');
  
  // Expose gtag to the window object
  (window as any).gtag = gtag;
};

/**
 * Track a page view
 * @param path The page path to track
 * @param title The page title
 */
export const trackPageView = (path: string, title?: string) => {
  if (!(window as any).gtag) return;
  
  (window as any).gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  });
};

/**
 * Track an event
 * @param action The event action
 * @param category The event category
 * @param label The event label
 * @param value The event value
 */
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (!(window as any).gtag) return;
  
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
