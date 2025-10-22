
import React from 'react';
import useTranslations from '../hooks/useTranslations';
import { propertiesData } from '../data/realEstateData';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

// FIX: Update PropertyCardProps to accept separate static and translated content.
interface PropertyCardProps {
  property: typeof propertiesData[0];
  content: {
    name: string;
    location: string;
    beds: number;
    baths: number;
    area: number;
  };
}

// FIX: Refactor PropertyCard to use both property (static) and content (translated) props.
const PropertyCard: React.FC<PropertyCardProps> = ({ property, content }) => {
    const { t } = useTranslations();
    
    return (
        <a href={property.whatsappLink} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="relative">
                    <img src={property.image} alt={content.name} className="w-full h-auto" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">{t(`properties.types.${property.type}`)}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white">{content.name}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                        <span>{content.location}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 border-t border-gray-600 pt-4 mt-auto">
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM3 3h10v1H3zm0 2h10v7H4a1 1 0 0 0-1 1zm-1-1h1v1H2z"/></svg>
                            <span>{content.beds} hab</span>
                        </div>
                        <div className="flex items-center space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m3 0a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5m3 .5a.5.5 0 0 0-1 0v8.5a.5.5 0 0 0 1 0z"/></svg>
                            <span>{content.baths} baños</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m10.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 3.5 10.146.854a.5.5 0 0 1 0-.708M5.854 15.854a.5.5 0 0 1 0-.708L3.207 12.5l2.647-2.646a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/><path d="m13.5 10.146-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L9.793 11.793l2.647-2.647a.5.5 0 0 1 .708.708m-9-9-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L3.207 4.5l2.647-2.647a.5.5 0 0 0-.708-.708"/></svg>
                            <span>{content.area} m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};


// FIX: Refactor Properties component to fetch translated content and pass it to PropertyCard.
const Properties: React.FC = () => {
    const { t } = useTranslations();
    const propertiesContent = t('properties.items');

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('properties.title')} subtitle={t('properties.subtitle')} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertiesData.map((property, index) => (
                    <PropertyCard key={property.id} property={property} content={propertiesContent[index]} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
