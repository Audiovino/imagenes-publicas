import React, { useState } from 'react';
import useTranslations from '../hooks/useTranslations';
import { virtualToursData } from '../data/realEstateData';

const PlayIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({className, style}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <path d="M5 3l14 9-14 9V3z"/>
    </svg>
);

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
);

const MapPinIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);


const VirtualTours: React.FC = () => {
    const { t } = useTranslations();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const toursContent = t('virtualTours.tours');
    const tours = virtualToursData.map(tourData => {
        const content = toursContent.find((c: any) => c.id === tourData.id) || {};
        const duration = tourData.durationKey ? t(`virtualTours.durations.${tourData.durationKey}`) : '';
        return {
            ...tourData,
            ...content,
            duration,
        };
    });

    const handleWatchVideo = (videoId: string) => {
        setSelectedVideo(videoId);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(t('virtualTours.copySuccess'));
        }).catch(() => {
            alert(t('virtualTours.copyError'));
        });
    };

    return (
        <div className="bg-gray-800 py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('virtualTours.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('virtualTours.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                                <div className="absolute inset-0 bg-black opacity-20"></div>
                                <PlayIcon className="w-16 h-16 text-white z-10" />
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                    {tour.duration}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start gap-2 mb-2">
                                    <MapPinIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-white">
                                        {tour.name}
                                    </h3>
                                </div>
                                <p className="text-gray-300 mb-3">{tour.description}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                    <span>{t('virtualTours.viewsText').replace('{views}', tour.views)}</span>
                                    <span>• ManuTrip</span>
                                </div>
                                <button
                                    onClick={() => handleWatchVideo(tour.videoId)}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold"
                                >
                                    <PlayIcon className="w-5 h-5" />
                                    {t('virtualTours.watchTour')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-700 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-900 bg-opacity-50 p-3 rounded-full">
                            <PlayIcon className="w-6 h-6 text-blue-300" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {t('virtualTours.tipTitle')}
                            </h3>
                            <p className="text-gray-300">
                                {t('virtualTours.tipContent')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full p-8 relative">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold"
                        >
                            ×
                        </button>
                        <div className="text-center space-y-6">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <PlayIcon className="w-10 h-10 text-white" style={{ marginLeft: '0.25rem' }} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('virtualTours.modalTitle')}</h3>
                            <p className="text-gray-300 mb-6">{t('virtualTours.modalInstruction')}</p>
                            <div className="bg-gray-700 rounded-lg p-4 mb-6">
                                <input
                                    type="text"
                                    value={`https://www.youtube.com/watch?v=${selectedVideo}`}
                                    readOnly
                                    className="w-full bg-transparent text-white text-center font-mono text-sm select-all border-none outline-none cursor-pointer"
                                    onClick={(e) => e.currentTarget.select()}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => copyToClipboard(`https://www.youtube.com/watch?v=${selectedVideo}`)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-semibold"
                                >
                                    <ExternalLinkIcon className="w-5 h-5" />
                                    {t('virtualTours.copyLink')}
                                </button>
                                <a
                                    href={`https://www.youtube.com/watch?v=${selectedVideo}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 font-semibold"
                                >
                                    <PlayIcon className="w-5 h-5" />
                                    {t('virtualTours.openInYouTube')}
                                </a>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">{t('virtualTours.modalTip')}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VirtualTours;