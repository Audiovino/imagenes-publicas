
import React, { useState } from 'react';
import useTranslations from '../hooks/useTranslations';
import { getBlogContent } from '../data/blogContent';
import BlogModal from './BlogModal';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

const BlogCard: React.FC<{ post: any; onReadMore: () => void; readMoreText: string; }> = ({ post, onReadMore, readMoreText }) => (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto"
            loading="lazy"
        />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{post.description}</p>
            <button onClick={onReadMore} className="mt-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors self-start">
                {readMoreText}
            </button>
        </div>
    </div>
);

const Blog: React.FC = () => {
    const { t } = useTranslations();
    const blogPosts = getBlogContent(t);
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
    
    return (
        <>
            <div className="container mx-auto">
                <SectionHeader title={t('blog.title')} subtitle={t('blog.subtitle')} />
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onReadMore={() => setSelectedPostId(post.id)}
                            readMoreText={t('blog.readMore')}
                        />
                    ))}
                </div>
            </div>
            {selectedPostId && (
                <BlogModal postId={selectedPostId} onClose={() => setSelectedPostId(null)} />
            )}
        </>
    );
};

export default Blog;
