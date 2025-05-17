
import { useEffect, useState } from 'react';
import { fetchSeoMetadata, applySeoMetadata, SeoMetadata } from '@/utils/seoUtils';

/**
 * Hook to apply SEO metadata to the current page
 */
export const useSEO = (pagePath: string, fallbackMetadata?: Partial<SeoMetadata>) => {
  const [metadata, setMetadata] = useState<SeoMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadSEO = async () => {
      try {
        setLoading(true);
        const data = await fetchSeoMetadata(pagePath);
        
        if (data) {
          setMetadata(data);
          applySeoMetadata(data);
        } else if (fallbackMetadata) {
          const defaultMetadata = {
            title: fallbackMetadata.title || 'UDDA - Weirdly Positive Mental Health Conversations',
            meta_description: fallbackMetadata.meta_description || 'Not therapy. Just absurdly helpful AI-guided conversations.',
            ...fallbackMetadata
          } as SeoMetadata;
          
          setMetadata(defaultMetadata);
          applySeoMetadata(defaultMetadata);
        }
      } catch (err) {
        console.error('Error in useSEO hook:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    
    loadSEO();
  }, [pagePath, fallbackMetadata]);

  return { metadata, loading, error };
};
