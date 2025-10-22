
// Fix: Consolidate static blog data (like images) and provide a function to merge it with translated content.
// This resolves the data inconsistency between different parts of the application.
const blogStaticData = [
  {
    id: 'tendencias-inmobiliarias',
    image: 'https://audiovino.github.io/imagenes-publicas/tendencias_inmobiliarias.webp',
  },
  {
    id: 'compradores-primerizos',
    image: 'https://audiovino.github.io/imagenes-publicas/compradores_primerizos_copia.webp',
  },
  {
    id: 'palermo',
    // NOTE: Using the 'barrios_emergentes' image for the 'palermo' post as it's the available asset.
    image: 'https://audiovino.github.io/imagenes-publicas/barrios_emergentes_copia.webp',
  },
];

// Type for the translated post object from translations.ts, ensuring all properties are accounted for.
type TranslatedPost = {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
};

/**
 * Retrieves and merges static blog data (like images) with translated blog content.
 * @param t - The translation function from useTranslations hook.
 * @returns An array of fully-formed blog post objects, combining static and translated data.
 */
export const getBlogContent = (t: (key: string) => any): (TranslatedPost & { image: string })[] => {
    const translatedPosts = t('blog.posts') as TranslatedPost[];

    return translatedPosts.map((post) => {
        const staticData = blogStaticData.find(p => p.id === post.id);
        return {
            ...post,
            image: staticData ? staticData.image : '',
        };
    });
};
