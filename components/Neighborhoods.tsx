import React, { useState, useEffect, useRef } from 'react';
import useTranslations from '../hooks/useTranslations';
import { neighborhoodsData, pointsOfInterestData } from '../data/realEstateData';
import { POI } from '../types';

// TypeScript declaration for Leaflet, since it's loaded from a script tag.
declare const L: any;

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto">{subtitle}</p>
    </div>
);

// Haversine formula to calculate distance between two lat/lon points
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

const Neighborhoods: React.FC = () => {
    const { t } = useTranslations();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<typeof neighborhoodsData[0] | null>(null);
    const [searchResults, setSearchResults] = useState<{ pois: POI[], title: string } | null>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | POI['category']>('all');
    
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);
    const userMarker = useRef<any>(null);
    const poiMarkers = useRef<any[]>([]);

    const allPois = Object.values(pointsOfInterestData).flat();

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current, {
                scrollWheelZoom: false,
                attributionControl: false
            }).setView([-34.6037, -58.3816], 12);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(mapInstance.current);

            L.Control.geocoder({
                defaultMarkGeocode: false,
                placeholder: 'Buscar dirección...',
                errorMessage: 'No se encontraron resultados.'
            }).on('markgeocode', function(e: any) {
                const { center, name } = e.geocode;
                mapInstance.current.fitBounds(e.geocode.bbox);
                if (userMarker.current) {
                    userMarker.current.setLatLng(center);
                } else {
                    userMarker.current = L.marker(center).addTo(mapInstance.current);
                }
                userMarker.current.bindPopup(name).openPopup();

                const nearbyPois = allPois
                    .map(poi => ({ ...poi, distance: calculateDistance(center.lat, center.lng, poi.lat, poi.lon) }))
                    .filter(poi => poi.distance <= 1.5) // 1.5 km radius
                    .sort((a, b) => a.distance - b.distance);
                
                setSelectedNeighborhood(null);
                setActiveFilter('all');
                setSearchResults({ pois: nearbyPois, title: t('neighborhoods.poiTitleNearby') });
            }).addTo(mapInstance.current);
        }
    }, []);
    
    useEffect(() => {
        // Clear previous POI markers
        poiMarkers.current.forEach(marker => marker.remove());
        poiMarkers.current = [];

        let poisToDisplay: POI[] = [];
        if (searchResults) {
            poisToDisplay = searchResults.pois;
        } else if (selectedNeighborhood) {
            poisToDisplay = pointsOfInterestData[selectedNeighborhood.id] || [];
        }

        if (activeFilter !== 'all') {
            poisToDisplay = poisToDisplay.filter(poi => poi.category === activeFilter);
        }

        poisToDisplay.forEach(poi => {
            const marker = L.marker([poi.lat, poi.lon]).addTo(mapInstance.current)
                .bindPopup(`<b>${poi.name}</b><br>${poi.address}`);
            poiMarkers.current.push(marker);
        });
    }, [selectedNeighborhood, searchResults, activeFilter]);
    
    const handleNeighborhoodSelect = (neighborhood: typeof neighborhoodsData[0]) => {
        setSelectedNeighborhood(neighborhood);
        setSearchResults(null);
        setActiveFilter('all');
        if (userMarker.current) {
            userMarker.current.remove();
            userMarker.current = null;
        }
        mapInstance.current.flyTo([neighborhood.lat, neighborhood.lon], 15);
    };

    const handleClearSearch = () => {
        setSelectedNeighborhood(null);
        setSearchResults(null);
        setActiveFilter('all');
        if (userMarker.current) {
            userMarker.current.remove();
            userMarker.current = null;
        }
        poiMarkers.current.forEach(marker => marker.remove());
        poiMarkers.current = [];
        mapInstance.current.flyTo([-34.6037, -58.3816], 12);
    };
    
    let currentPois: POI[] = [];
    let poiTitle = '';

    if (searchResults) {
        currentPois = searchResults.pois;
        poiTitle = searchResults.title;
    } else if (selectedNeighborhood) {
        currentPois = pointsOfInterestData[selectedNeighborhood.id] || [];
        poiTitle = `${t('neighborhoods.poiTitle')} ${selectedNeighborhood.name}`;
    }

    const filteredPois = activeFilter === 'all' ? currentPois : currentPois.filter(poi => poi.category === activeFilter);

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('neighborhoods.title')} subtitle={t('neighborhoods.subtitle')} />
            
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
                    {neighborhoodsData.map(hood => (
                        <div key={hood.id} onClick={() => handleNeighborhoodSelect(hood)}
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${selectedNeighborhood?.id === hood.id ? 'bg-blue-600 border-blue-500' : 'bg-gray-700 border-gray-700 hover:bg-gray-600 hover:border-gray-500'}`}>
                            <h3 className="text-lg font-bold text-white">{hood.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-2 h-[600px] rounded-lg z-10" ref={mapRef} id="map"></div>
            </div>

            {(selectedNeighborhood || searchResults) && (
                <div className="mt-12">
                    <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                        <h3 className="text-2xl font-bold text-white">{poiTitle}</h3>
                        <button onClick={handleClearSearch} className="text-sm text-blue-400 hover:underline">{t('neighborhoods.clearSearch')}</button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {(Object.keys(t('neighborhoods.poiCategories')) as ('all' | POI['category'])[]).map(category => (
                            <button key={category} onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeFilter === category ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}>
                                {t(`neighborhoods.poiCategories.${category}`)}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPois.length > 0 ? filteredPois.map(poi => (
                            <div key={poi.name} className="bg-gray-700 p-4 rounded-lg">
                                <h4 className="font-bold text-white">{poi.name}</h4>
                                <p className="text-sm text-gray-400">{poi.address}</p>
                                {poi.link && poi.link !== '#' && (
                                     <a href={poi.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 inline-block">{t('neighborhoods.visitWebsite')}</a>
                                )}
                            </div>
                        )) : <p className="text-gray-400 col-span-full">No se encontraron puntos de interés para esta categoría.</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Neighborhoods;