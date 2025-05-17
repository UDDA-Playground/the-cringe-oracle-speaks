
import { supabase } from "@/integrations/supabase/client";

export type SeoMetadata = {
  title: string;
  meta_description: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image_url?: string;
  keywords?: string;
  structured_data?: Record<string, any>;
};

/**
 * Fetches SEO metadata for a specific page
 */
export const fetchSeoMetadata = async (pagePath: string) => {
  const { data, error } = await supabase
    .from('seo_metadata')
    .select('*')
    .eq('page_path', pagePath)
    .maybeSingle();
  
  if (error && error.code !== 'PGSQL_NO_ROWS_RETURNED') {
    console.error('Error fetching SEO metadata:', error);
    return null;
  }
  
  return data;
};

/**
 * Applies SEO metadata to current page
 */
export const applySeoMetadata = (metadata: SeoMetadata) => {
  // Set page title
  document.title = metadata.title;
  
  // Update meta tags
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', metadata.meta_description);
  
  // Set keywords if available
  if (metadata.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords);
  }
  
  // Set canonical URL if available
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (metadata.canonical_url) {
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', metadata.canonical_url);
  }
  
  // Set Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metadata.og_title || metadata.title },
    { property: 'og:description', content: metadata.og_description || metadata.meta_description },
    { property: 'og:image', content: metadata.og_image_url || '' },
    { property: 'og:type', content: 'website' }
  ];
  
  ogTags.forEach(({ property, content }) => {
    if (!content) return;
    
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });
  
  // Apply structured data if available
  if (metadata.structured_data) {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(metadata.structured_data);
  }
};
