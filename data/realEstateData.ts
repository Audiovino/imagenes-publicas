
// FIX: Changed import to be relative
import type { POI } from '../types';

export const neighborhoodsData = [
  {
    id: 'palermo',
    name: 'Palermo',
    priceM2: 4000,
    growth: 8,
    image: 'https://audiovino.github.io/imagenes-publicas/palermo.png',
    lat: -34.5885,
    lon: -58.4233,
  },
  {
    id: 'belgrano',
    name: 'Belgrano',
    priceM2: 3800,
    growth: 5,
    image: 'https://audiovino.github.io/imagenes-publicas/belgrano_copia.png',
    lat: -34.562,
    lon: -58.454,
  },
   {
    id: 'recoleta',
    name: 'Recoleta',
    priceM2: 4200,
    growth: 7,
    image: 'https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lat: -34.589,
    lon: -58.393,
  },
  {
    id: 'nunez',
    name: 'Nuñez',
    priceM2: 3600,
    growth: 6,
    image: 'https://audiovino.github.io/imagenes-publicas/nunez.png',
    lat: -34.545,
    lon: -58.465,
  },
  {
    id: 'villa_crespo',
    name: 'Villa Crespo',
    priceM2: 2700,
    growth: 5,
    image: 'https://audiovino.github.io/imagenes-publicas/villa_crespo.png',
    lat: -34.597,
    lon: -58.446,
  },
  {
    id: 'chacarita',
    name: 'Chacarita',
    priceM2: 2500,
    growth: 7,
    image: 'https://audiovino.github.io/imagenes-publicas/chacarita_copia.webp',
    lat: -34.585,
    lon: -58.453,
  },
    {
    id: 'colegiales',
    name: 'Colegiales',
    priceM2: 3200,
    growth: 5,
    image: 'https://images.unsplash.com/photo-1620392496263-33604f857865?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lat: -34.575,
    lon: -58.450,
  },
  {
    id: 'villa_urquiza',
    name: 'Villa Urquiza',
    priceM2: 3100,
    growth: 4,
    image: 'https://audiovino.github.io/imagenes-publicas/villa_urquiza.png',
    lat: -34.567,
    lon: -58.490,
  },
    {
    id: 'caballito',
    name: 'Caballito',
    priceM2: 2800,
    growth: 6,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a2ed3cd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lat: -34.619,
    lon: -58.444,
  },
  {
    id: 'puerto_madero',
    name: 'Puerto Madero',
    priceM2: 6500,
    growth: 10,
    image: 'https://audiovino.github.io/imagenes-publicas/puerto_madero.png',
    lat: -34.617,
    lon: -58.363,
  },
    {
    id: 'santelmo',
    name: 'San Telmo',
    priceM2: 2600,
    growth: 8,
    image: 'https://images.unsplash.com/photo-1592518453538-422a5a5f6e81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lat: -34.623,
    lon: -58.373,
  },
  {
    id: 'saavedra',
    name: 'Saavedra',
    priceM2: 2900,
    growth: 3,
    image: 'https://audiovino.github.io/imagenes-publicas/saavedra.png',
    lat: -34.550,
    lon: -58.495,
  },
  {
    id: 'coghlan',
    name: 'Coghlan',
    priceM2: 3000,
    growth: 4,
    image: 'https://audiovino.github.io/imagenes-publicas/coghlan_copia.png',
    lat: -34.561,
    lon: -58.481,
  },
];

export const pointsOfInterestData: { [key: string]: POI[] } = {
  palermo: [
    { name: 'MALBA', address: 'Av. Pres. Figueroa Alcorta 3415', category: 'culture', lat: -34.5803, lon: -58.4020, link: 'https://www.malba.org.ar/' },
    { name: 'Jardín Japonés', address: 'Av. Casares 2966', category: 'culture', lat: -34.5750, lon: -58.4110, link: 'https://jardinjapones.org.ar/' },
    { name: 'Don Julio Parrilla', address: 'Guatemala 4699', category: 'food', lat: -34.5850, lon: -58.4280, link: 'https://www.parrilladonjulio.com/' },
    { name: 'Distrito Arcos', address: 'Paraguay 4979', category: 'shopping', lat: -34.5830, lon: -58.4290, link: 'https://www.distritoarcos.com/' },
    { name: 'Bosques de Palermo', address: 'Av. Infanta Isabel 410', category: 'culture', lat: -34.5702, lon: -58.4137, link: '#' },
    { name: 'Museo Evita', address: 'Lafinur 2988', category: 'culture', lat: -34.5794, lon: -58.4158, link: 'https://museoevita.org.ar/' },
    { name: 'La Carnicería', address: 'Thames 2317', category: 'food', lat: -34.5833, lon: -58.4284, link: '#' },
    { name: 'Alto Palermo Shopping', address: 'Av. Santa Fe 3253', category: 'shopping', lat: -34.5907, lon: -58.4089, link: '#' },
    { name: 'ICANA - Sede Palermo', address: 'Aráoz 2838', category: 'education', lat: -34.588, lon: -58.415, link: 'https://www.icana.org.ar' },
    { name: 'Colegio Bayard', address: 'Arce 950', category: 'education', lat: -34.5723, lon: -58.432, link: 'https://www.bayard.org.ar/' },
  ],
  belgrano: [
    { name: 'Museo de Arte Español Enrique Larreta', address: 'Av. Juramento 2291', category: 'culture', lat: -34.5570, lon: -58.4540, link: 'https://museos.buenosaires.gob.ar/larreta' },
    { name: 'Barrio Chino', address: 'Arribeños 2100', category: 'shopping', lat: -34.5520, lon: -58.4510, link: '#' },
    { name: 'Parrilla El Pobre Luis', address: 'Arribeños 2393', category: 'food', lat: -34.5490, lon: -58.4530, link: '#' },
    { name: 'Clínica Zabala', address: 'Av. Cabildo 1295', category: 'health', lat: -34.5635, lon: -58.4501, link: 'https://www.clinicazabala.com.ar/'},
    { name: 'Barrancas de Belgrano', address: 'Echeverría 1800', category: 'culture', lat: -34.555, lon: -58.448, link: '#'},
    { name: 'Iglesia Inmaculada Concepción (La Redonda)', address: 'Vuelta de Obligado 2042', category: 'culture', lat: -34.559, lon: -58.453, link: '#'},
    { name: 'Belgrano Day School', address: 'Av. Federico Lacroze 1947', category: 'education', lat: -34.574, lon: -58.448, link: 'https://www.bds.edu.ar/'},
    { name: 'St. Catherine\'s Moorlands School', address: 'Carbajal 4550', category: 'education', lat: -34.562, lon: -58.458, link: 'https://www.stcatherines.edu.ar/'},
    { name: 'CUI - Centro Universitario de Idiomas', address: 'Av. Cabildo 2440', category: 'education', lat: -34.565, lon: -58.459, link: 'https://cui.edu.ar/'},
    { name: 'FLENI', address: 'Montañeses 2325', category: 'health', lat: -34.551, lon: -58.452, link: 'https://www.fleni.org.ar/'}
  ],
  recoleta: [
    { name: 'Cementerio de la Recoleta', address: 'Junín 1760', category: 'culture', lat: -34.5880, lon: -58.3930, link: '#' },
    { name: 'El Ateneo Grand Splendid', address: 'Av. Santa Fe 1860', category: 'shopping', lat: -34.5970, lon: -58.3940, link: 'https://www.yenny-elateneo.com/' },
    { name: 'Hospital Alemán', address: 'Av. Pueyrredón 1640', category: 'health', lat: -34.5940, lon: -58.4010, link: 'https://www.hospitalaleman.org.ar/' },
    { name: 'Museo Nacional de Bellas Artes', address: 'Av. del Libertador 1473', category: 'culture', lat: -34.584, lon: -58.392, link: 'https://www.bellasartes.gob.ar/'},
    { name: 'Centro Cultural Recoleta', address: 'Junín 1930', category: 'culture', lat: -34.587, lon: -58.391, link: 'https://centroculturalrecoleta.org/'},
    { name: 'Floralis Genérica', address: 'Av. Pres. Figueroa Alcorta 2301', category: 'culture', lat: -34.583, lon: -58.393, link: '#'},
    { name: 'La Biela', address: 'Av. Quintana 600', category: 'food', lat: -34.587, lon: -58.394, link: '#'},
    { name: 'Patio Bullrich', address: 'Posadas 1245', category: 'shopping', lat: -34.589, lon: -58.388, link: 'https://www.patiobullrich.com.ar/'},
    { name: 'AACI - Asociación Argentina de Cultura Inglesa', address: 'Suipacha 1333', category: 'education', lat: -34.594, lon: -58.378, link: 'https://www.aaci.org.ar/'},
    { name: 'Champagnat', address: 'Montevideo 1050', category: 'education', lat: -34.596, lon: -58.388, link: 'https://www.champagnat.com.ar/'}
  ],
  nunez: [
    { name: 'Estadio River Plate', address: 'Av. Pres. Figueroa Alcorta 7597', category: 'culture', lat: -34.5453, lon: -58.4497, link: 'https://www.cariverplate.com.ar/' },
    { name: 'CeNARD', address: 'Miguel B. Sánchez 1050', category: 'health', lat: -34.5422, lon: -58.4545, link: 'https://www.argentina.gob.ar/turismoydeportes/cenard' },
    { name: 'Espacio Memoria y Derechos Humanos (ex ESMA)', address: 'Av. del Libertador 8151', category: 'culture', lat: -34.538, lon: -58.460, link: 'http://www.espaciomemoria.ar/'},
    { name: 'Parque de los Niños', address: 'Av. Cantilo 1429', category: 'culture', lat: -34.519, lon: -58.450, link: '#'},
    { name: 'Club Ciudad de Buenos Aires', address: 'Av. del Libertador 7501', category: 'culture', lat: -34.543, lon: -58.451, link: 'https://www.club-ciudad.com/'},
    { name: 'Tiro Federal Argentino', address: 'Av. del Libertador 6935', category: 'culture', lat: -34.547, lon: -58.447, link: '#'},
    { name: 'Universidad Torcuato Di Tella', address: 'Av. Figueroa Alcorta 7350', category: 'education', lat: -34.546, lon: -58.448, link: 'https://www.utdt.edu/'},
    { name: 'Instituto Cardenal Copello', address: 'Av. del Libertador 7875', category: 'education', lat: -34.541, lon: -58.454, link: 'https://www.copello.edu.ar/'},
    { name: 'C.U.B.A.', address: 'Av. Cantilo 3215', category: 'culture', lat: -34.532, lon: -58.455, link: 'https://cuba.org.ar/'},
    { name: 'Clínica Fleni', address: 'Montañeses 2325', category: 'health', lat: -34.550, lon: -58.452, link: 'https://www.fleni.org.ar/'}
  ],
  villa_crespo: [
    { name: 'Movistar Arena', address: 'Humboldt 450', category: 'culture', lat: -34.5901, lon: -58.4468, link: 'https://www.movistararena.com.ar/'},
    { name: 'Serrano 1414', address: 'Serrano 1414', category: 'food', lat: -34.5947, lon: -58.4398, link: 'https://www.instagram.com/serrano1414_/'},
    { name: 'Parque Centenario', address: 'Av. Díaz Vélez 4800', category: 'culture', lat: -34.606, lon: -58.441, link: '#'},
    { name: 'La Crespo', address: 'Thames 612', category: 'food', lat: -34.596, lon: -58.440, link: '#'},
    { name: 'Outlet Calle Murillo', address: 'Murillo 600', category: 'shopping', lat: -34.598, lon: -58.447, link: '#'},
    { name: 'Café San Bernardo', address: 'Av. Corrientes 5436', category: 'food', lat: -34.600, lon: -58.438, link: '#'},
    { name: 'Hospital Naval Dr. Pedro Mallo', address: 'Av. Patricias Argentinas 351', category: 'health', lat: -34.603, lon: -58.440, link: '#'},
    { name: 'Scholem Aleijem', address: 'Serrano 341', category: 'education', lat: -34.598, lon: -58.436, link: 'https://www.sholem.edu.ar/'},
    { name: 'Instituto de Idiomas YES!', address: 'Av. Corrientes 4573', category: 'education', lat: -34.602, lon: -58.430, link: 'https://www.yesinstitute.com.ar/'},
    { name: 'Galpón de Guevara', address: 'Guevara 326', category: 'culture', lat: -34.591, lon: -58.451, link: 'https://www.galpondeguevara.com/'}
  ],
  puerto_madero: [
    { name: 'Puente de la Mujer', address: 'Juana Manuela Gorriti', category: 'culture', lat: -34.6083, lon: -58.3644, link: '#'},
    { name: 'Faena Art Center', address: 'Aimé Painé 1169', category: 'culture', lat: -34.6186, lon: -58.3639, link: 'https://www.faenaart.org/'},
    { name: 'Cabaña Las Lilas', address: 'Av. Alicia Moreau de Justo 516', category: 'food', lat: -34.6088, lon: -58.3667, link: 'http://www.laslilas.com/'},
    { name: 'Reserva Ecológica Costanera Sur', address: 'Av. Tristán Achával Rodríguez 1550', category: 'culture', lat: -34.617, lon: -58.355, link: '#'},
    { name: 'Colección de Arte Amalia Lacroze de Fortabat', address: 'Olga Cossettini 141', category: 'culture', lat: -34.606, lon: -58.363, link: 'https://www.coleccionfortabat.org.ar/'},
    { name: 'Casino Buenos Aires', address: 'Av. Elvira Rawson de Dellepiane s/n', category: 'culture', lat: -34.629, lon: -58.361, link: 'https://www.casinobuenosaires.com.ar/'},
    { name: 'UCA - Universidad Católica Argentina', address: 'Av. Alicia Moreau de Justo 1300', category: 'education', lat: -34.617, lon: -58.364, link: 'https://uca.edu.ar/'},
    { name: 'Colegio Nacional de Buenos Aires', address: 'Bolívar 263', category: 'education', lat: -34.612, lon: -58.373, link: 'https://www.cnba.uba.ar/'},
    { name: 'Yacht Club Argentino', address: 'Victoria Ocampo 1', category: 'culture', lat: -34.602, lon: -58.362, link: 'https://www.yca.org.ar/'},
    { name: 'Lola Mora Fountain', address: 'Av. Dr. Tristán Achával Rodríguez 1401', category: 'culture', lat: -34.614, lon: -58.362, link: '#'}
  ],
  santelmo: [
    { name: 'Plaza Dorrego', address: 'Humberto 1º 400', category: 'culture', lat: -34.625, lon: -58.373, link: '#'},
    { name: 'Mercado de San Telmo', address: 'Defensa 963', category: 'shopping', lat: -34.621, lon: -58.372, link: '#'},
    { name: 'El Zanjón de Granados', address: 'Defensa 755', category: 'culture', lat: -34.619, lon: -58.371, link: 'https://www.elzanjon.com.ar/'},
    { name: 'MACBA', address: 'Av. San Juan 328', category: 'culture', lat: -34.622, lon: -58.370, link: 'https://macba.com.ar/'},
    { name: 'La Brigada Parrilla', address: 'Estados Unidos 465', category: 'food', lat: -34.623, lon: -58.373, link: '#'},
    { name: 'El Federal Bar', address: 'Carlos Calvo 599', category: 'food', lat: -34.621, lon: -58.376, link: '#'},
    { name: 'Monumento a Mafalda', address: 'Defensa & Chile', category: 'culture', lat: -34.617, lon: -58.372, link: '#'},
    { name: 'UADE', address: 'Lima 775', category: 'education', lat: -34.619, lon: -58.383, link: 'https://www.uade.edu.ar/'},
    { name: 'Alianza Francesa', address: 'Av. Córdoba 946', category: 'education', lat: -34.598, lon: -58.381, link: 'https://www.alianzafrancesa.org.ar/'},
    { name: 'Hospital Británico', address: 'Perdriel 74', category: 'health', lat: -34.634, lon: -58.389, link: 'https://www.hospitalbritanico.org.ar/'}
  ],
  caballito: [
      { name: 'Parque Rivadavia', address: 'Av. Rivadavia 4900', category: 'culture', lat: -34.616, lon: -58.435, link: '#'},
      { name: 'Parque Centenario', address: 'Av. Díaz Vélez 4800', category: 'culture', lat: -34.606, lon: -58.441, link: '#'},
      { name: 'Mercado del Progreso', address: 'Av. Rivadavia 5430', category: 'shopping', lat: -34.618, lon: -58.442, link: '#'},
      { name: 'Club Ferro Carril Oeste', address: 'Cucha Cucha 350', category: 'culture', lat: -34.613, lon: -58.450, link: 'https://www.ferrocarriloeste.org.ar/'},
      { name: 'Village Cines Caballito', address: 'Av. Rivadavia 5071', category: 'shopping', lat: -34.617, lon: -58.437, link: 'https://www.villagecines.com/'},
      { name: 'Colegio Marianista', address: 'Av. Rivadavia 5652', category: 'education', lat: -34.620, lon: -58.444, link: 'https://www.marianista.edu.ar/'},
      { name: 'Instituto Cultural Argentino Norteamericano (ICANA)', address: 'Av. Acoyte 125', category: 'education', lat: -34.613, lon: -58.436, link: 'https://www.icana.org.ar/'},
      { name: 'Hospital Italiano', address: 'Gascón 450', category: 'health', lat: -34.607, lon: -58.425, link: 'https://www.hospitalitaliano.org.ar/'},
      { name: 'Tranvía Histórico de Buenos Aires', address: 'Emilio Mitre 500', category: 'culture', lat: -34.622, lon: -58.437, link: '#'},
      { name: 'Patio de los Lecheros', address: 'Donato Álvarez 175', category: 'food', lat: -34.612, lon: -58.452, link: '#'}
  ]
};

export const virtualToursData = [
    { id: "palermo", videoId: "bOa55nXRioE", views: "1.2M", durationKey: "medium" },
    { id: "belgrano", videoId: "iqldeMAwE_U", views: "980K", durationKey: "medium" },
    { id: "recoleta", videoId: "yM0hK8PzQ9Y", views: "1.5M", durationKey: "long" },
    { id: "villacrespo", videoId: "91DzIGdOkYU", views: "750K", durationKey: "short" },
    { id: "colegiales", videoId: "91DzIGdOkYU", views: "600K", durationKey: "short" },
    { id: "nunez", videoId: "iqldeMAwE_U", views: "820K", durationKey: "medium" },
    { id: "villaurquiza", videoId: "91DzIGdOkYU", views: "910K", durationKey: "medium" },
    { id: "caballito", videoId: "NvxqA-S2L3Q", views: "1.1M", durationKey: "long" },
    { id: "puertomadero", videoId: "R-p-I2UhNlU", views: "2.1M", durationKey: "extraLong" },
    { id: "santelmo", videoId: "yM0hK8PzQ9Y", views: "1.8M", durationKey: "long" },
    { id: "saavedra", videoId: "NvxqA-S2L3Q", views: "550K", durationKey: "short" },
    { id: "chacarita", videoId: "91DzIGdOkYU", views: "680K", durationKey: "short" }
];

export const propertiesData = [
  {
    id: 'depto-palermo',
    type: 'apartment',
    image: 'https://audiovino.github.io/imagenes-publicas/palermo.png',
    whatsappLink: 'https://wa.me/5491163601511?text=Hola,%20estoy%20interesado%20en%20el%20departamento%20en%20Palermo'
  },
  {
    id: 'ph-belgrano',
    type: 'ph',
    image: 'https://audiovino.github.io/imagenes-publicas/belgrano_copia.png',
    whatsappLink: 'https://wa.me/5491163601511?text=Hola,%20estoy%20interesado%20en%20el%20PH%20en%20Belgrano'
  },
  {
    id: 'casa-recoleta',
    type: 'house',
    image: 'https://images.unsplash.com/photo-1599507663297-8a36c6447b4d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    whatsappLink: 'https://wa.me/5491163601511?text=Hola,%20estoy%20interesado%20en%20la%20casa%20en%20Recoleta'
  }
];
