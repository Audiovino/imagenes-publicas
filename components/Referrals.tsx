
import React, { useState, useMemo } from 'react';
import useTranslations from '../hooks/useTranslations';
import { referralsData } from '../data/referralsData';
import { neighborhoodsData } from '../data/realEstateData';
import { Testimonial, Referral as ReferralType } from '../types';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial | undefined }) => {
    if (!testimonial) return null;
    return (
        <div className="mt-4 p-4 bg-gray-900/50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-sm italic text-gray-300">"{testimonial.quote}"</p>
            <p className="text-right text-xs font-semibold text-white mt-2">- {testimonial.name}</p>
        </div>
    );
};


const ReferralCard: React.FC<{ referral: ReferralType }> = ({ referral }) => {
    const { t } = useTranslations();
    const testimonials = t('referrals.testimonials');
    const testimonial = referral.testimonialKey ? testimonials[referral.testimonialKey] : undefined;
    
    return (
        <div className="bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{referral.emoji}</span>
                <div>
                    <h3 className="text-xl font-bold text-white">{referral.name}</h3>
                    <p className="text-blue-400 font-semibold">{referral.specialty}</p>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                {referral.rating && <StarRating rating={referral.rating} />}
                {referral.referralsCount && <span>{referral.referralsCount}+ {t('referrals.referralsCount')}</span>}
            </div>

            <TestimonialCard testimonial={testimonial} />
            
            <div className="mt-auto pt-4">
                <a 
                    href={`https://wa.me/${referral.whatsapp.replace(/\D/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8s3.582 8 8 8c4.418 0 8-3.582 8-8a7.854 7.854 0 0 0-2.399-5.674zM8 14.5A6.5 6.5 0 1 1 8 1.5a6.5 6.5 0 0 1 0 13zm.208-10.042c-1.332 0-2.285.83-2.67 1.525-.022.042-.045.082-.066.12l-.01.02c-.046.08-.09.162-.132.242-.04.078-.075.15-.104.22h-1.17v-.07c.02-.37.16-1.045.54-1.688C5.55 3.375 6.64 2.5 8.21 2.5c1.575 0 2.76.84 2.76 2.22 0 1.13-.685 1.77-1.325 2.22-.534.37-.87.65-.87 1.1v.175h-1.12v-.18c0-.425.28-.7.71-1.02.43-.32.925-.61 1.05-.74.32-.33.58-.7.58-1.24 0-.74-.5-1.24-1.24-1.24zM7.125 11.5v-1.12h1.75v1.12z"/></svg>
                    {t('referrals.contact')}
                </a>
            </div>
        </div>
    );
};

const Referrals: React.FC = () => {
    const { t } = useTranslations();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
    
    const availableNeighborhoods = useMemo(() => {
        const referralHoods = new Set(Object.keys(referralsData));
        return neighborhoodsData.filter(hood => referralHoods.has(hood.id));
    }, []);

    const filteredReferrals = useMemo(() => {
        if (selectedNeighborhood === 'all') {
            return Object.values(referralsData).flat();
        }
        return referralsData[selectedNeighborhood] || [];
    }, [selectedNeighborhood]);

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('referrals.title')} subtitle={t('referrals.subtitle')} />
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                 <button 
                    onClick={() => setSelectedNeighborhood('all')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedNeighborhood === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                >
                    {t('referrals.allNeighborhoods')}
                </button>
                {availableNeighborhoods.map(hood => (
                    <button 
                        key={hood.id}
                        onClick={() => setSelectedNeighborhood(hood.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedNeighborhood === hood.id ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                    >
                        {hood.name}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredReferrals.length > 0 ? (
                    filteredReferrals.map((referral, index) => (
                        <ReferralCard key={`${referral.name}-${index}`} referral={referral} />
                    ))
                ) : (
                    <p className="text-gray-400 col-span-full text-center">{t('referrals.noReferrals')}</p>
                )}
            </div>
        </div>
    );
};

export default Referrals;
