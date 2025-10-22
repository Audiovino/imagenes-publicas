import { Translations } from '../types';

export const translations: Translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
      barrios: 'Barrios',
      virtualTours: 'Tours Virtuales',
      financialTools: 'Herramientas',
      referidos: 'Mi Red de Confianza',
      guias: 'Guías',
      blog: 'Blog',
      faq: 'FAQ',
      contacto: 'Contacto',
    },
    hero: {
      subheading: 'AGENTE INMOBILIARIO EN BUENOS AIRES',
      heading: 'Gerardo Leiserson',
      description: 'Te ayudo a encontrar la propiedad de tus sueños y a navegar el mercado inmobiliario de Buenos Aires con confianza y conocimiento experto.',
      ctaAppointment: 'Agendar Reunión',
      ctaWhatsapp: 'Contactar por WhatsApp',
      talkWithUs: '¡Hablemos!'
    },
    experience: {
        title: 'Mi Experiencia a Tu Servicio',
        subtitle: 'Más de una década transformando transacciones en relaciones duraderas.',
        cards: [
            {
                title: '10+ Años de Experiencia',
                description: 'Una década en el dinámico mercado de Buenos Aires, especializándome en encontrar oportunidades únicas para mis clientes.',
            },
            {
                title: '200+ Transacciones Exitosas',
                description: 'Cada operación es una historia de éxito, guiando a familias e inversores a alcanzar sus objetivos inmobiliarios.',
            },
            {
                title: 'Enfoque Personalizado',
                description: 'Entiendo que cada cliente es único. Mi servicio se adapta a tus necesidades, asegurando una experiencia transparente y sin estrés.',
            },
        ],
    },
    properties: {
        title: 'Propiedades Destacadas',
        subtitle: 'Una selección de propiedades exclusivas en las mejores zonas de la ciudad.',
        types: {
            apartment: 'Departamento',
            ph: 'PH',
            house: 'Casa',
        },
        items: [
            {
                name: 'Moderno Departamento en Palermo',
                location: 'Palermo, Buenos Aires',
                beds: 3,
                baths: 2,
                area: 120,
            },
            {
                name: 'PH con Encanto en Belgrano',
                location: 'Belgrano, Buenos Aires',
                beds: 4,
                baths: 3,
                area: 180,
            },
            {
                name: 'Elegante Casa en Recoleta',
                location: 'Recoleta, Buenos Aires',
                beds: 5,
                baths: 4,
                area: 300,
            },
        ],
    },
    neighborhoods: {
        title: 'Explorá los Barrios de Buenos Aires',
        subtitle: 'Descubrí lo que cada barrio tiene para ofrecer. Seleccioná un barrio para ver sus puntos de interés o buscá una dirección para encontrar lugares cercanos.',
        poiTitle: 'Puntos de Interés en',
        poiTitleNearby: 'Puntos de Interés Cercanos',
        poiCategories: {
            all: 'Todos',
            food: 'Gastronomía',
            shopping: 'Compras',
            culture: 'Cultura',
            health: 'Salud',
            education: 'Educación',
        },
        visitWebsite: 'Visitar sitio web',
        clearSearch: 'Limpiar búsqueda',
    },
    topNeighborhoods: {
        title: 'Barrios en Demanda',
        subtitle: 'Descubrí las zonas más buscadas de Buenos Aires.',
    },
    virtualTours: {
        title: 'Recorridos Virtuales 360°',
        subtitle: 'Explorá los barrios más icónicos de Buenos Aires desde la comodidad de tu hogar con nuestros tours inmersivos.',
        tours: [
            { id: "palermo", name: "Palermo", description: "El barrio más grande y verde, conocido por sus bosques, vida nocturna y diseño." },
            { id: "belgrano", name: "Belgrano", description: "Residencial y elegante, con casonas señoriales, parques y una vibrante zona comercial." },
            { id: "recoleta", name: "Recoleta", description: "La 'París' de Sudamérica, famosa por su arquitectura, cementerio y museos." },
            { id: "villacrespo", name: "Villa Crespo", description: "Un barrio con identidad propia, outlets de cuero y una creciente escena gastronómica." },
            { id: "colegiales", name: "Colegiales", description: "Tranquilo, con calles arboladas y un ambiente familiar cerca de todo." },
            { id: "nunez", name: "Núñez", description: "Moderno y deportivo, hogar del estadio de River Plate y amplios espacios verdes." },
            { id: "villaurquiza", name: "Villa Urquiza", description: "Un barrio en auge que combina tradición con nuevos emprendimientos." },
            { id: "caballito", name: "Caballito", description: "El corazón geográfico de la ciudad, con gran conectividad y vida comercial." },
            { id: "puertomadero", name: "Puerto Madero", description: "El barrio más moderno, con rascacielos, restaurantes de lujo y vistas al río." },
            { id: "santelmo", name: "San Telmo", description: "El alma histórica de Buenos Aires, con sus calles empedradas, ferias y tango." },
            { id: "saavedra", name: "Saavedra", description: "Un oasis de tranquilidad con uno de los parques más grandes de la ciudad." },
            { id: "chacarita", name: "Chacarita", description: "Un polo audiovisual y gastronómico en constante crecimiento y evolución." }
        ],
        durations: {
            short: "5-10 min",
            medium: "10-15 min",
            long: "15-20 min",
            extraLong: "20+ min"
        },
        viewsText: "{views} vistas",
        watchTour: "Ver Recorrido",
        copySuccess: "¡Enlace copiado!",
        copyError: "Error al copiar",
        tipTitle: "¿Cómo funcionan los Tours Virtuales?",
        tipContent: "Los tours son realizados por ManuTrip y pueden verse en su enlace de 'Ver tour' que lo llevará a su página de YouTube.",
        modalTitle: "Redireccionando a YouTube",
        modalInstruction: "El video se abrirá en una nueva pestaña de YouTube. Podés copiar el enlace o abrirlo directamente.",
        copyLink: "Copiar Enlace",
        openInYouTube: "Abrir en YouTube",
        modalTip: "¡No olvides activar la calidad 4K para la mejor experiencia!",
    },
    financialTools: {
        title: 'Herramientas Financieras',
        subtitle: 'Calculadoras y datos útiles para planificar tu inversión inmobiliaria en Buenos Aires.',
        converter: {
            title: 'Conversor de Moneda',
            disclaimer: 'Tasa de cambio de referencia (MEP): 1 USD ≈ {rate} ARS. Valores aproximados.',
        },
        costOfLiving: {
            title: 'Costo de Vida (Estimado)',
            family: 'Familia de 4',
            single: 'Persona Sola',
            viewDetails: 'Ver Detalle Completo',
            source: 'Fuente: Expatistan.com',
            updated: 'Actualizado 2024',
        },
        dolarOficial: {
            title: 'Cotización Dólar en Argentina',
        }
    },
    referrals: {
        title: 'Mi Red de Confianza',
        subtitle: 'Te conecto con profesionales de primer nivel que complementan mi servicio, asegurando que cada aspecto de tu operación esté en las mejores manos.',
        selectNeighborhood: 'Filtrar por barrio:',
        allNeighborhoods: 'Todos los barrios',
        searchPlaceholder: 'Buscar por rubro o nombre...',
        contact: 'Contactar por WhatsApp',
        noReferrals: 'No hay referidos para esta selección. Probá con otro barrio o búsqueda.',
        referralsCount: 'referencias',
        viewTestimonial: 'Ver Testimonio',
        closeTestimonial: 'Ocultar Testimonio',
        refers: 'Refiere',
        shareContact: 'Recomendar',
        disclaimer: {
          title: 'INFORMACIÓN IMPORTANTE',
          text: 'Los comercios y servicios aquí referidos aparecen por voluntad propia. Ellos eligen aparecer en este sitio y ser contactados por usuarios finales.',
          ctaTitle: '¿QUERÉS APARECER EN MIS REFERIDOS?',
          ctaSubtitle: 'Completá el formulario para solicitar aparecer en nuestro directorio',
          ctaQrText: 'Escaneame para completar el formulario',
          ctaButton: 'Completar Formulario'
        },
        quotes: {
            carlosRodriguez: '"El Estudio López manejó nuestra sucesión con una profesionalidad y empatía increíbles. Nos sentimos acompañados en todo momento."',
            sofiaMartinez: '"Gerardo revolucionó nuestra estrategia de marketing. Entendió perfectamente el mercado y nos posicionó como líderes en la zona. ¡Resultados increíbles!"',
            anaGarcia: '"La atención en la Clínica Dental Belgrano es de primer nivel. Me sentí segura y los resultados fueron excelentes. ¡Muy recomendados!"'
        }
    },
     guides: {
        title: 'Guías Inmobiliarias 2025',
        subtitle: 'Información clave y consejos prácticos para tomar las mejores decisiones.',
        download: 'Ver Guía Completa',
        cards: [
            { id: 'comprador', title: 'Guía para Compradores', description: 'Todo lo que necesitás saber para comprar tu propiedad en Buenos Aires: costos, documentos y precios de mercado.' },
            { id: 'vendedor', title: 'Guía para Vendedores', description: 'Maximizá el valor de tu propiedad con estrategias de venta, checklist de preparación y análisis de tendencias.' },
            { id: 'inversion', title: 'Guía de Inversión', description: 'Descubrí oportunidades de inversión, rentabilidad por barrio y las claves del mercado de alquileres.' },
            { id: 'dueno', title: 'Dueño Vende vs. Inmobiliaria', description: 'Analizamos los pros y contras de vender por tu cuenta o con un profesional para que elijas la mejor opción.' },
            { id: 'extranjero', title: 'Guía para Extranjeros', description: 'El proceso de compra para no residentes explicado paso a paso: requisitos, costos y consejos clave.' }
        ],
        content: {
            important: "Importante",
            tip: "Consejo",
            warning: "Atención",
            comprador: {
                title: "Guía del Comprador",
                card1_costs: {
                    title: "Costos y Comisiones de Compra",
                    question: "¿Qué costos adicionales tiene un comprador en CABA (2025)?",
                    items: [
                        { label: "Honorarios Inmobiliarios:", value: "4% + IVA", description: "Sobre el valor de la propiedad" },
                        { label: "Escribanía (Escritura):", value: "1-2%", description: "Varía según el valor" },
                        { label: "Impuesto de Sellos:", value: "1.75%", description: "Generalmente compartido" },
                        { label: "Tasas de Registro:", value: "0.2%", description: "" },
                        { label: "Certificados:", value: "~$200 USD", description: "Aproximado" }
                    ],
                    important: "Total estimado: Esperá sumar entre un 7% y 9% al precio de compra.",
                    tip: "Algunos costos, como el Impuesto de Sellos, pueden negociarse. ¡Consultame!"
                },
                card2_docs: {
                    title: "Documentación Requerida",
                    question: "¿Qué documentos necesita un comprador?",
                    items: ["DNI o Pasaporte vigente", "Constancia de CUIT/CUIL/CDI", "Justificación de fondos (requerido por ley)", "Datos personales completos"],
                    warning: "La 'Clave de Identificación' (CDI) es esencial para extranjeros sin residencia. Se tramita en AFIP."
                },
                card3_tips: {
                    title: "Consejos para Comprar",
                    question: "¿Cómo hacer una compra exitosa en 2025?",
                    items: ["Obtené una pre-aprobación de crédito si es necesario", "Visitá la propiedad en diferentes horarios", "Revisá las expensas y actas de consorcio", "Contratá un agrimensor si comprás un lote o casa"],
                    tip: "¡No te apures! El mercado está activo, pero siempre hay buenas oportunidades. Analisemos juntos las opciones."
                },
                card4_prices: {
                    title: "Precios de Referencia (m²)",
                    question: "¿Cuál es el valor promedio del m² en CABA (2025)?",
                    data: {
                        avg_price: "USD 2,155 / m²",
                        avg_change: "(+4% anual)",
                        studio: "USD 75,000 - 95,000",
                        one_bed: "USD 100,000 - 150,000",
                        two_bed: "USD 160,000 - 250,000"
                    },
                    most_expensive: ["Puerto Madero: USD 5,500/m²", "Palermo: USD 2,900/m²", "Belgrano: USD 2,700/m²"],
                    most_accessible: "Flores, Villa Urquiza, Caballito.",
                    tip: "Los precios varían mucho por ubicación, estado y amenities. Estos son promedios para darte una idea."
                }
            },
            vendedor: {
                title: "Guía del Vendedor"
            },
            inversion: {
                title: "Guía de Inversión",
                card1_roi: {
                    title: "Rentabilidad y ROI",
                    question: "¿Cuál es el retorno de inversión (ROI) promedio en CABA 2025?",
                    data: [
                        "Rentabilidad Anual (Alquiler): 4.5% - 6% en USD",
                        "Apreciación Anual (Valor): 3% - 5% en USD",
                        "ROI Total Estimado: 7.5% - 11% en USD"
                    ],
                    important_title: "Costos a considerar para el inversor:",
                    cost_items: [
                        "ABL y Aysa: ~0.5% anual",
                        "Expensas: 1-2% anual",
                        "Mantenimiento: ~1% anual"
                    ],
                    tip: "La rentabilidad es mayor en unidades pequeñas (monoambientes y 2 ambientes) bien ubicadas."
                },
                card2_checklist: {
                    title: "Checklist del Inversor",
                    question: "¿Qué analizar antes de invertir?",
                    items: [
                        "Ubicación y conectividad (subte, colectivos, avenidas)",
                        "Potencial de crecimiento del barrio",
                        "Calidad de construcción y antigüedad",
                        "Estado de las expensas y del consorcio",
                        "Demanda de alquiler en la zona",
                        "Proyectos de desarrollo urbano cercanos"
                    ],
                    important: "Una buena administración del consorcio es clave para proteger tu inversión a largo plazo."
                },
                card3_opportunities: {
                    title: "Zonas de Oportunidad",
                    question: "¿Dónde están las mejores oportunidades de inversión en 2025?",
                    items: [
                        "Villa Crespo / Chacarita: El 'nuevo Palermo', con gran potencial de revalorización.",
                        "Caballito: Alta demanda de alquiler por su ubicación céntrica y servicios.",
                        "Saavedra / Coghlan: Zonas residenciales en crecimiento, atractivas para familias.",
                        "Barracas: Distrito de diseño con desarrollos modernos y buena accesibilidad."
                    ],
                    tip: "Comprar en pozo puede ofrecer un retorno de hasta un 30% en USD, pero implica mayores riesgos. ¡Consultame para analizar proyectos!"
                },
                card4_rent: {
                    title: "Mercado de Alquileres",
                    question: "¿Cómo se comportan los precios de alquiler en CABA 2025?",
                    data: {
                        increase: "+250% anual en pesos",
                        inflation: "211%",
                        studio: "$350,000 - $450,000 ARS",
                        one_bed: "$480,000 - $600,000 ARS",
                        two_bed: "$650,000 - $850,000 ARS"
                    },
                    most_expensive: ["Palermo: $550,000 (2 amb)", "Núñez: $520,000 (2 amb)"],
                    most_accessible_label: "Barrios más accesibles:",
                    most_accessible_value: "Balvanera, San Cristóbal",
                    warning: "Tras la derogación de la Ley de Alquileres, los contratos se pactan con mayor flexibilidad. Es clave tener un buen asesoramiento legal."
                }
            },
            dueno: {
                title: "Dueño Vende vs. Inmobiliaria",
                subtitle: "Una comparación para que tomes la mejor decisión.",
                prosConsTitle: "Pros y Contras: ¿Qué camino elegir?",
                pros: [
                    "Ahorro en comisiones (potencialmente)",
                    "Control total sobre el proceso",
                    "Contacto directo con compradores"
                ],
                cons: [
                    "Menor exposición y alcance",
                    "Dificultad para fijar un precio correcto",
                    "Riesgos legales y de negociación",
                    "Inversión de tiempo y esfuerzo significativos",
                    "Filtrado de interesados poco serios"
                ],
                stepsTitle: "Pasos que cubre un profesional inmobiliario:",
                steps: [
                    "Valoración profesional del inmueble.",
                    "Estrategia de marketing y difusión en portales.",
                    "Fotografía y videos profesionales.",
                    "Filtrado y calificación de interesados.",
                    "Coordinación y gestión de visitas.",
                    "Negociación experta y defensa de tus intereses.",
                    "Asesoramiento legal y administrativo hasta el cierre."
                ]
            },
            extranjero: {
                title: "Guía para Extranjeros",
                subtitle: "Comprar una propiedad en Buenos Aires siendo no residente.",
                card1_reqs: {
                    title: "Requisitos Clave",
                    question: "¿Qué necesita un extranjero para comprar en Argentina?",
                    items: [
                        "Pasaporte vigente.",
                        "Obtener una CDI (Clave de Identificación) en AFIP. Es un trámite simple y gratuito.",
                        "Demostración del origen de los fondos (requerido por la UIF - Unidad de Información Financiera)."
                    ],
                    tip: "No necesitás ser residente para comprar una propiedad. El proceso es relativamente sencillo con el asesoramiento adecuado."
                },
                card2_steps: {
                    title: "Proceso de Compra Simplificado",
                    question: "¿Cuáles son los pasos para la compra?",
                    items: [
                        "Búsqueda y selección de la propiedad.",
                        "Realización de una oferta de compra formal (Reserva).",
                        "Firma del Boleto de Compraventa (se paga ~30% del valor).",
                        "Gestión de la transferencia de fondos a Argentina.",
                        "Firma de la Escritura traslativa de dominio ante escribano público (se paga el 70% restante)."
                    ],
                    warning: "La transferencia de fondos es un paso crítico. Es fundamental planificarlo con antelación para evitar demoras."
                },
                card3_costs: {
                    title: "Costos para Extranjeros",
                    question: "¿Los costos son diferentes para los extranjeros?",
                    items: [
                        { label: "Honorarios y Escribanía:", value: "Igual que para locales", description: "(ver Guía del Comprador)" },
                        { label: "Transferencia de Fondos:", value: "Varía", description: "Depende del banco/método" },
                        { label: "Impuestos:", value: "Los mismos", description: "No hay impuestos adicionales por ser extranjero" }
                    ],
                    tip: "Recomiendo utilizar servicios financieros especializados para la transferencia de fondos para asegurar un proceso transparente y eficiente."
                },
                card4_tips: {
                    title: "Consejos Esenciales",
                    question: "¿Qué más debería saber un comprador extranjero?",
                    items: [
                        "Contratá un escribano de confianza. Es una figura imparcial clave en el proceso.",
                        "Si no hablás español fluido, considerá un traductor público para los documentos legales.",
                        "Entendé el mercado local. Los precios y dinámicas pueden ser diferentes a los de tu país.",
                        "Planificá tus viajes para estar presente en la firma de la escritura, o tramitá un poder notarial."
                    ],
                    tip: "Estoy aquí para guiarte en cada paso, desde la obtención de tu CDI hasta la entrega de las llaves. ¡Hagámoslo fácil!"
                }
            }
        }
    },
    blog: {
        title: 'Blog Inmobiliario',
        subtitle: 'Análisis, noticias y consejos sobre el mercado de bienes raíces en Buenos Aires.',
        readMore: 'Leer más',
        posts: [
            {
                id: 'compradores-primerizos',
                title: 'Guía para Compradores Primerizos en Buenos Aires',
                description: 'Consejos prácticos para quienes buscan su primera propiedad: desde la financiación hasta la elección del barrio ideal.',
                date: '2025-10-18',
                author: 'Gerardo Leiserson',
                tags: ['Consejos', 'Primer Hogar', 'Financiación'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Comprar tu primera propiedad es un paso emocionante, pero también puede ser abrumador. Buenos Aires ofrece un mercado diverso y dinámico, y estar bien preparado es clave para tomar la mejor decisión. Esta guía te ayudará a navegar el proceso con confianza.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Definí tu Presupuesto Real</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Antes de empezar a mirar propiedades, es fundamental saber cuánto podés pagar. No se trata solo del precio de venta; considerá los costos adicionales que pueden sumar entre un 7% y un 9% al valor del inmueble. Esto incluye honorarios inmobiliarios, gastos de escribanía, impuestos y sellos. Si vas a solicitar un crédito hipotecario, obtené una pre-aprobación bancaria para saber tu límite y tener una ventaja al negociar.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Elegí el Barrio Adecuado para Vos</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">La ubicación es uno de los factores más importantes. ¿Priorizás la cercanía a tu trabajo, espacios verdes, vida nocturna o buenas escuelas? Visitá los barrios que te interesan en diferentes horarios para sentir su atmósfera. Pensá a largo plazo: un barrio en crecimiento puede ser una excelente inversión.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. La Búsqueda y las Visitas</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Sé claro sobre tus "no negociables" (ej. cantidad de ambientes, balcón) y tus "deseables" (ej. amenities, piso alto). Durante las visitas, prestá atención a los detalles: la luz natural, el estado de las instalaciones, la presión del agua y posibles ruidos. No dudes en preguntar sobre las expensas, las reglas del consorcio y si se planean arreglos importantes en el edificio.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. De la Oferta al Cierre</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Una vez que encontrás la propiedad ideal, llega el momento de hacer una oferta. Un buen asesor inmobiliario te ayudará a presentar una propuesta competitiva basada en un análisis de mercado. Si la oferta es aceptada, el proceso continúa con la firma del boleto de compraventa (donde se abona un anticipo, generalmente del 30%) y, finalmente, la escritura, donde te convertís oficialmente en propietario.</p>
                    <p class="mt-6 italic text-gray-400">Comprar tu primer hogar es una maratón, no una carrera. Tomate tu tiempo, investigá y buscá asesoramiento profesional. ¡Estoy para ayudarte en cada paso de este increíble viaje!</p>
                `
            },
            {
                id: 'tendencias-inmobiliarias',
                title: 'Tendencias del Mercado Inmobiliario Porteño en 2025',
                description: 'Descubrí las últimas tendencias del mercado inmobiliario, qué barrios están en alza y qué buscar al invertir.',
                date: '2025-10-10',
                author: 'Equipo Editorial',
                tags: ['Mercado', 'Inversión', 'Crédito'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">El mercado inmobiliario de la Ciudad de Buenos Aires transita 2025 con claroscuros: tras un fuerte repunte durante el primer semestre, la llegada del calendario electoral y la suba de las tasas de interés hipotecarias pausaron el ritmo de las operaciones y generaron un clima de máxima cautela tanto entre compradores como vendedores.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Expectativa electoral y parálisis en la compraventa</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">A diferencia del entusiasmo de comienzos de año, hoy el mercado está marcado por la espera. El impacto de las elecciones legislativas de octubre se siente con fuerza: la incertidumbre sobre el rumbo económico y la volatilidad del dólar llevó a muchos a posponer decisiones de compra e inversión. El acceso al crédito hipotecario, que había sido motor del crecimiento meses atrás, se frenó por el aumento de las tasas —que llegan al 17% anual en algunos bancos— y por mayores requisitos de ingreso y scoring.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Alza de precios pero caída en la demanda</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">El precio promedio del metro cuadrado en CABA sigue mostrando subas interanuales y se ubicó cerca de USD 2.450 en septiembre, aunque con gran disparidad según zona. Sectores premium como Puerto Madero y Palermo lideran el ranking de valores, mientras que barrios como Lugano y Parque Patricios ofrecen alternativas más accesibles. Sin embargo, la demanda efectiva cayó y los tiempos para cerrar operaciones se alargaron: hoy, comprar una propiedad puede demorar meses, mientras que los créditos hipotecarios suelen demorar entre 60 y 120 días en ser aprobados.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Perspectivas a futuro</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Especialistas coinciden en que el resultado electoral definirá si el financiamiento vuelve a dinamizar el sector y si la confianza retorna a los compradores. Mientras tanto, el mercado atraviesa una etapa de “meseta” y adaptación, con precios firmes pero menor volumen de transacciones y operaciones de compraventa en suspenso.</p>
                `
            },
            {
                id: 'palermo',
                title: 'Palermo: El Corazón Vibrante de Buenos Aires',
                description: 'Explorá Palermo, uno de los barrios más vibrantes de Buenos Aires, ideal para vivir o invertir en propiedades modernas.',
                date: '2025-10-05',
                author: 'Gerardo Leiserson',
                tags: ['Palermo', 'Cultura', 'Inversión', 'Estilo de Vida'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Palermo no es solo un barrio, es un universo en sí mismo. Como el más extenso de Buenos Aires, se divide en varias "sub-zonas", cada una con su propia identidad, lo que lo convierte en un lugar increíblemente diverso y atractivo tanto para vivir como para invertir.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Soho: Diseño y Vanguardia</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Es el epicentro de la moda, el arte y la gastronomía. Sus calles empedradas están repletas de boutiques de diseñadores, galerías de arte y algunos de los mejores bares y restaurantes de la ciudad. Ideal para jóvenes profesionales y turistas, la demanda de alquileres temporarios aquí es altísima, lo que lo convierte en una excelente opción de inversión.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Hollywood: El Polo Audiovisual y Gastronómico</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Nombrado así por la concentración de productoras de cine y televisión, Hollywood es hoy un polo gastronómico de primer nivel. Ofrece una vida nocturna vibrante y una mezcla de edificios modernos con antiguos PHs reciclados. Es una zona muy buscada por quienes trabajan en la industria creativa y aman salir a comer.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Chico y los Bosques: Exclusividad y Naturaleza</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Esta es la cara más residencial y lujosa de Palermo. Con sus imponentes embajadas, edificios de categoría y la cercanía a los Bosques de Palermo, el pulmón verde de la ciudad, es una de las zonas más cotizadas. Aquí se encuentran propiedades de alta gama, ideales para familias que buscan tranquilidad y estatus sin renunciar a la ubicación céntrica.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">¿Por qué invertir en Palermo?</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Invertir en Palermo es apostar a un valor seguro. Su constante demanda, tanto de locales como de extranjeros, garantiza una alta rentabilidad y una apreciación sostenida del valor de la propiedad. La conectividad, la seguridad y la inigualable oferta cultural y de ocio hacen que Palermo sea siempre una de las mejores decisiones inmobiliarias en Buenos Aires.</p>
                `
            }
        ]
    },
    faq: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Respuestas a las dudas más comunes sobre la compra y venta de propiedades en Buenos Aires.',
        questions: [
            { q: "¿Qué gastos tengo que considerar al comprar una propiedad?", a: "Además del precio de la propiedad, debés considerar los honorarios de la inmobiliaria (generalmente 4% + IVA), gastos de escribanía (aproximadamente 2-3%), impuesto de sellos (3.6% sobre el valor, a menudo compartido 50/50 con el vendedor) y costos de informes de dominio y certificados." },
            { q: "¿Cuánto tiempo toma el proceso de compra?", a: "Desde la reserva hasta la firma de la escritura, el proceso puede tomar entre 30 y 90 días. Esto depende de la complejidad de la documentación y si la compra es con o sin crédito hipotecario." },
            { q: "¿Necesito ser residente argentino para comprar una propiedad?", a: "No, los extranjeros pueden comprar propiedades en Argentina. Solo necesitás obtener un CDI (Clave de Identificación) de la AFIP, que es un trámite sencillo. Te puedo guiar en todo el proceso." },
            { q: "¿Qué es el ITI y quién lo paga?", a: "El ITI (Impuesto a la Transferencia de Inmuebles) es un impuesto que paga el vendedor si la propiedad no es su única vivienda. Si es su única vivienda y va a comprar otra en el lapso de un año, puede solicitar la exención." },
            { q: "¿Es un buen momento para invertir en Buenos Aires?", a: "Actualmente, el mercado muestra signos de recuperación con precios competitivos. La combinación de una demanda creciente y valores que aún no alcanzaron sus picos históricos presenta una excelente ventana de oportunidad para inversores." },
        ],
    },
    aiAssistant: {
        title: '¿Necesitás ayuda?',
        description: 'Mi asistente con IA está disponible 24/7 para responder tus preguntas sobre propiedades y el mercado.',
        button: 'Chatear Ahora',
    },
    contact: {
        title: 'Contacto',
        subtitle: '¿Listo para dar el siguiente paso? Hablemos. Estoy aquí para ayudarte a alcanzar tus objetivos inmobiliarios.',
        form: {
            title: 'Enviame un Mensaje',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre completo',
            email: 'Email',
            emailPlaceholder: 'tu.email@ejemplo.com',
            phone: 'Teléfono (Opcional)',
            phonePlaceholder: 'Tu número de teléfono',
            inquiryType: 'Tipo de Consulta',
            inquiryOptions: {
                buy: 'Quiero comprar',
                sell: 'Quiero vender',
                invest: 'Quiero invertir',
                other: 'Otra consulta',
            },
            message: 'Mensaje',
            messagePlaceholder: 'Contame más sobre tu búsqueda o consulta...',
            charCount: 'Máximo 500 caracteres',
            submit: 'Enviar Mensaje',
        },
        info: {
            title: 'Mi Información',
            whatsapp: 'WhatsApp',
            email: 'Email',
            location: 'Ubicación',
            locationValue: 'Buenos Aires, Argentina',
            hours: 'Horarios de Atención',
            hoursValue: 'Lunes a Viernes, 9am - 6pm',
        },
        quickActions: {
            title: 'Acciones Rápidas',
            schedule: 'Agendar una reunión virtual',
            join: 'Sumate a mi grupo de Novedades',
            call: 'Llamame ahora',
        },
    },
    footer: {
        description: 'Asesoramiento inmobiliario profesional y personalizado en Buenos Aires. Compra, venta e inversiones.',
        contact: 'Contacto Rápido',
        consult: 'Consultar por WhatsApp',
        rights: '© 2024 LeisersonGerardo. Todos los derechos reservados.',
    },
    chatbox: {
        initialMessage: '¡Hola! Soy el asistente virtual de Gerardo. ¿Estás buscando comprar, vender o invertir? Contame un poco más sobre lo que necesitás y te ayudaré a encontrar la mejor solución.',
        headerTitle: 'Asistente Inmobiliario',
        inputPlaceholder: 'Escribí tu mensaje...'
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      experiencia: 'Experience',
      barrios: 'Neighborhoods',
      virtualTours: 'Virtual Tours',
      financialTools: 'Tools',
      referidos: 'My Network',
      guias: 'Guides',
      blog: 'Blog',
      faq: 'FAQ',
      contacto: 'Contact',
    },
    hero: {
      subheading: 'REAL ESTATE AGENT IN BUENOS AIRES',
      heading: 'Gerardo Leiserson',
      description: 'I help you find your dream property and navigate the Buenos Aires real estate market with confidence and expert knowledge.',
      ctaAppointment: 'Schedule Meeting',
      ctaWhatsapp: 'Contact on WhatsApp',
      talkWithUs: 'Let\'s Talk!'
    },
    experience: {
        title: 'My Experience at Your Service',
        subtitle: 'Over a decade transforming transactions into lasting relationships.',
        cards: [
            {
                title: '10+ Years of Experience',
                description: 'A decade in the dynamic Buenos Aires market, specializing in finding unique opportunities for my clients.',
            },
            {
                title: '200+ Successful Transactions',
                description: 'Every operation is a success story, guiding families and investors to achieve their real estate goals.',
            },
            {
                title: 'Personalized Approach',
                description: 'I understand that every client is unique. My service adapts to your needs, ensuring a transparent and stress-free experience.',
            },
        ],
    },
    properties: {
        title: 'Featured Properties',
        subtitle: 'A selection of exclusive properties in the best areas of the city.',
        types: {
            apartment: 'Apartment',
            ph: 'PH (Townhouse)',
            house: 'House',
        },
        items: [
            {
                name: 'Modern Apartment in Palermo',
                location: 'Palermo, Buenos Aires',
                beds: 3,
                baths: 2,
                area: 120,
            },
            {
                name: 'Charming PH in Belgrano',
                location: 'Belgrano, Buenos Aires',
                beds: 4,
                baths: 3,
                area: 180,
            },
            {
                name: 'Elegant House in Recoleta',
                location: 'Recoleta, Buenos Aires',
                beds: 5,
                baths: 4,
                area: 300,
            },
        ],
    },
    neighborhoods: {
        title: 'Explore the Neighborhoods of Buenos Aires',
        subtitle: 'Discover what each neighborhood has to offer. Select a neighborhood to see its points of interest or search for an address to find nearby places.',
        poiTitle: 'Points of Interest in',
        poiTitleNearby: 'Nearby Points of Interest',
        poiCategories: {
            all: 'All',
            food: 'Gastronomy',
            shopping: 'Shopping',
            culture: 'Culture',
            health: 'Health',
            education: 'Education',
        },
        visitWebsite: 'Visit website',
        clearSearch: 'Clear search',
    },
    topNeighborhoods: {
        title: 'In-Demand Neighborhoods',
        subtitle: 'Discover the most sought-after areas in Buenos Aires.',
    },
    virtualTours: {
        title: '360° Virtual Tours',
        subtitle: 'Explore the most iconic neighborhoods of Buenos Aires from the comfort of your home with our immersive tours.',
        tours: [
             { id: "palermo", name: "Palermo", description: "The largest and greenest neighborhood, known for its forests, nightlife, and design." },
            { id: "belgrano", name: "Belgrano", description: "Residential and elegant, with stately homes, parks, and a vibrant commercial area." },
            { id: "recoleta", name: "Recoleta", description: "The 'Paris' of South America, famous for its architecture, cemetery, and museums." },
            { id: "villacrespo", name: "Villa Crespo", description: "A neighborhood with its own identity, leather outlets, and a growing gastronomic scene." },
            { id: "colegiales", name: "Colegiales", description: "Quiet, with tree-lined streets and a family atmosphere close to everything." },
            { id: "nunez", name: "Núñez", description: "Modern and sporty, home to the River Plate stadium and large green spaces." },
            { id: "villaurquiza", name: "Villa Urquiza", description: "A booming neighborhood that combines tradition with new developments." },
            { id: "caballito", name: "Caballito", description: "The geographical heart of the city, with great connectivity and commercial life." },
            { id: "puertomadero", name: "Puerto Madero", description: "The most modern neighborhood, with skyscrapers, luxury restaurants, and river views." },
            { id: "santelmo", name: "San Telmo", description: "The historic soul of Buenos Aires, with its cobbled streets, fairs, and tango." },
            { id: "saavedra", name: "Saavedra", description: "An oasis of tranquility with one of the largest parks in the city." },
            { id: "chacarita", name: "Chacarita", description: "An audiovisual and gastronomic hub in constant growth and evolution." }
        ],
        durations: {
            short: "5-10 min",
            medium: "10-15 min",
            long: "15-20 min",
            extraLong: "20+ min"
        },
        viewsText: "{views} views",
        watchTour: "Watch Tour",
        copySuccess: "Link copied!",
        copyError: "Failed to copy",
        tipTitle: "How do Virtual Tours work?",
        tipContent: "The tours are made by ManuTrip and can be seen on their 'Watch Tour' link that will take you to their YouTube page.",
        modalTitle: "Redirecting to YouTube",
        modalInstruction: "The video will open in a new YouTube tab. You can copy the link or open it directly.",
        copyLink: "Copy Link",
        openInYouTube: "Open in YouTube",
        modalTip: "Don't forget to enable 4K quality for the best experience!",
    },
     financialTools: {
        title: 'Financial Tools',
        subtitle: 'Useful calculators and data to plan your real estate investment in Buenos Aires.',
        converter: {
            title: 'Currency Converter',
            disclaimer: 'Reference exchange rate (MEP): 1 USD ≈ {rate} ARS. Approximate values.',
        },
        costOfLiving: {
            title: 'Cost of Living (Estimated)',
            family: 'Family of 4',
            single: 'Single Person',
            viewDetails: 'View Full Details',
            source: 'Source: Expatistan.com',
            updated: 'Updated 2024',
        },
        dolarOficial: {
            title: 'Dollar Exchange Rate in Argentina',
        }
    },
    referrals: {
        title: 'My Trusted Network',
        subtitle: 'I connect you with top-tier professionals who complement my service, ensuring every aspect of your operation is in the best hands.',
        selectNeighborhood: 'Filter by neighborhood:',
        allNeighborhoods: 'All neighborhoods',
        searchPlaceholder: 'Search by specialty or name...',
        contact: 'Contact on WhatsApp',
        noReferrals: 'No referrals for this selection. Try another neighborhood or search.',
        referralsCount: 'referrals',
        viewTestimonial: 'View Testimonial',
        closeTestimonial: 'Hide Testimonial',
        refers: 'Refers',
        shareContact: 'Recommend',
        disclaimer: {
          title: 'IMPORTANT INFORMATION',
          text: 'The businesses and services listed here appear voluntarily. They choose to be featured on this site and to be contacted by end-users.',
          ctaTitle: 'WANT TO BE FEATURED IN MY REFERRALS?',
          ctaSubtitle: 'Fill out the form to request to be featured in our directory',
          ctaQrText: 'Scan me to fill out the form',
          ctaButton: 'Complete Form'
        },
        quotes: {
            carlosRodriguez: '"The López Law Firm handled our family succession with incredible professionalism and empathy. We felt supported at all times."',
            sofiaMartinez: '"Gerardo revolutionized our marketing strategy. He perfectly understood the market and positioned us as leaders in the area. Incredible results!"',
            anaGarcia: '"The care at Belgrano Dental Clinic is top-notch. I felt safe and the results were excellent. Highly recommended!"'
        }
    },
    guides: {
        title: 'Real Estate Guides 2025',
        subtitle: 'Key information and practical advice to make the best decisions.',
        download: 'View Full Guide',
        cards: [
            { id: "comprador", title: "Buyer's Guide", description: "Everything you need to know to buy your property in Buenos Aires: costs, documents, and market prices." },
            { id: "vendedor", title: "Seller's Guide", description: "Maximize your property's value with sales strategies, a preparation checklist, and trend analysis." },
            { id: "inversion", title: "Investment Guide", description: "Discover investment opportunities, profitability by neighborhood, and the keys to the rental market." },
            { id: "dueno", title: "For Sale By Owner vs. Agency", description: "We analyze the pros and cons of selling on your own versus with a professional so you can choose the best option." },
            { id: "extranjero", title: "Foreigner's Guide", description: "The buying process for non-residents explained step-by-step: requirements, costs, and key tips." }
        ],
        content: {
            important: "Important",
            tip: "Tip",
            warning: "Warning",
            comprador: {
                title: "Buyer's Guide",
                card1_costs: {
                    title: "Purchase Costs and Fees",
                    question: "What additional costs does a buyer face in CABA (2025)?",
                    items: [
                        { label: "Real Estate Fees:", value: "4% + VAT", description: "On the property value" },
                        { label: "Notary (Deed):", value: "1-2%", description: "Varies by value" },
                        { label: "Stamp Duty:", value: "1.75%", description: "Usually shared" },
                        { label: "Registration Fees:", value: "0.2%", description: "" },
                        { label: "Certificates:", value: "~$200 USD", description: "Approximate" }
                    ],
                    important: "Total estimate: Expect to add between 7% and 9% to the purchase price.",
                    tip: "Some costs, like Stamp Duty, can be negotiated. Ask me!"
                },
                card2_docs: {
                    title: "Required Documentation",
                    question: "What documents does a buyer need?",
                    items: ["Valid ID or Passport", "CUIT/CUIL/CDI proof", "Proof of funds (required by law)", "Complete personal data"],
                    warning: "The 'Identification Key' (CDI) is essential for non-resident foreigners. It's processed at AFIP."
                },
                card3_tips: {
                    title: "Tips for Buying",
                    question: "How to make a successful purchase in 2025?",
                    items: ["Get a mortgage pre-approval if needed", "Visit the property at different times of day", "Review the building fees (expensas) and meeting minutes", "Hire a surveyor if buying a lot or house"],
                    tip: "Don't rush! The market is active, but there are always good opportunities. Let's analyze the options together."
                },
                card4_prices: {
                    title: "Reference Prices (m²)",
                    question: "What is the average value per m² in CABA (2025)?",
                    data: {
                        avg_price: "USD 2,155 / m²",
                        avg_change: "(+4% annually)",
                        studio: "USD 75,000 - 95,000",
                        one_bed: "USD 100,000 - 150,000",
                        two_bed: "USD 160,000 - 250,000"
                    },
                    most_expensive: ["Puerto Madero: USD 5,500/m²", "Palermo: USD 2,900/m²", "Belgrano: USD 2,700/m²"],
                    most_accessible: "Flores, Villa Urquiza, Caballito.",
                    tip: "Prices vary greatly by location, condition, and amenities. These are averages to give you an idea."
                }
            },
            vendedor: {
                title: "Seller's Guide"
            },
            inversion: {
                title: "Investment Guide",
                card1_roi: {
                    title: "Profitability and ROI",
                    question: "What is the average return on investment (ROI) in CABA 2025?",
                    data: [
                        "Annual Return (Rental): 4.5% - 6% in USD",
                        "Annual Appreciation (Value): 3% - 5% in USD",
                        "Estimated Total ROI: 7.5% - 11% in USD"
                    ],
                    important_title: "Costs for the investor to consider:",
                    cost_items: [
                        "ABL & Aysa (Taxes): ~0.5% annually",
                        "Expensas (HOA): 1-2% annually",
                        "Maintenance: ~1% annually"
                    ],
                    tip: "Profitability is higher in small, well-located units (studios and 1-bedrooms)."
                },
                card2_checklist: {
                    title: "Investor's Checklist",
                    question: "What to analyze before investing?",
                    items: [
                        "Location and connectivity (subway, buses, avenues)",
                        "Neighborhood growth potential",
                        "Construction quality and age",
                        "Status of building fees and the homeowners' association",
                        "Rental demand in the area",
                        "Nearby urban development projects"
                    ],
                    important: "A good homeowners' association management is key to protecting your long-term investment."
                },
                card3_opportunities: {
                    title: "Opportunity Zones",
                    question: "Where are the best investment opportunities in 2025?",
                    items: [
                        "Villa Crespo / Chacarita: The 'new Palermo', with great potential for appreciation.",
                        "Caballito: High rental demand due to its central location and services.",
                        "Saavedra / Coghlan: Growing residential areas, attractive for families.",
                        "Barracas: Design district with modern developments and good accessibility."
                    ],
                    tip: "Buying off-plan can offer returns up to 30% in USD, but it involves higher risks. Consult me to analyze projects!"
                },
                card4_rent: {
                    title: "Rental Market",
                    question: "How are rental prices behaving in CABA 2025?",
                    data: {
                        increase: "+250% annually in pesos",
                        inflation: "211%",
                        studio: "$350,000 - $450,000 ARS",
                        one_bed: "$480,000 - $600,000 ARS",
                        two_bed: "$650,000 - $850,000 ARS"
                    },
                    most_expensive: ["Palermo: $550,000 (1-bed)", "Núñez: $520,000 (1-bed)"],
                    most_accessible_label: "Most accessible neighborhoods:",
                    most_accessible_value: "Balvanera, San Cristóbal",
                    warning: "After the repeal of the Rental Law, contracts are agreed upon with more flexibility. Having good legal advice is key."
                }
            },
            dueno: {
                title: "For Sale By Owner vs. Agency",
                subtitle: "A comparison to help you make the best decision.",
                prosConsTitle: "Pros and Cons: Which path to choose?",
                pros: [
                    "Savings on commissions (potentially)",
                    "Full control over the process",
                    "Direct contact with buyers"
                ],
                cons: [
                    "Less exposure and reach",
                    "Difficulty in setting a correct price",
                    "Legal and negotiation risks",
                    "Significant investment of time and effort",
                    "Filtering out non-serious inquiries"
                ],
                stepsTitle: "Steps a real estate professional covers:",
                steps: [
                    "Professional property valuation.",
                    "Marketing strategy and portal distribution.",
                    "Professional photography and videos.",
                    "Screening and qualifying interested parties.",
                    "Coordination and management of viewings.",
                    "Expert negotiation and defense of your interests.",
                    "Legal and administrative advice until closing."
                ]
            },
            extranjero: {
                title: "Foreigner's Guide",
                subtitle: "Buying a property in Buenos Aires as a non-resident.",
                card1_reqs: {
                    title: "Key Requirements",
                    question: "What does a foreigner need to buy in Argentina?",
                    items: [
                        "Valid passport.",
                        "Obtain a CDI (Identification Key) from AFIP. It's a simple and free process.",
                        "Proof of the origin of funds (required by the UIF - Financial Information Unit)."
                    ],
                    tip: "You don't need to be a resident to buy a property. The process is relatively straightforward with the right advice."
                },
                card2_steps: {
                    title: "Simplified Purchase Process",
                    question: "What are the steps to purchase?",
                    items: [
                        "Search and selection of the property.",
                        "Making a formal purchase offer (Reserva).",
                        "Signing the preliminary sales agreement (Boleto de Compraventa), paying ~30% of the value.",
                        "Managing the transfer of funds to Argentina.",
                        "Signing the final property deed (Escritura) before a public notary, paying the remaining 70%."
                    ],
                    warning: "The fund transfer is a critical step. It is essential to plan it in advance to avoid delays."
                },
                card3_costs: {
                    title: "Costs for Foreigners",
                    question: "Are the costs different for foreigners?",
                    items: [
                        { label: "Fees and Notary:", value: "Same as for locals", description: "(see Buyer's Guide)" },
                        { label: "Fund Transfer:", value: "Varies", description: "Depends on the bank/method" },
                        { label: "Taxes:", value: "The same", description: "There are no additional taxes for being a foreigner" }
                    ],
                    tip: "I recommend using specialized financial services for fund transfers to ensure a transparent and efficient process."
                },
                card4_tips: {
                    title: "Essential Tips",
                    question: "What else should a foreign buyer know?",
                    items: [
                        "Hire a trusted notary. They are a key impartial figure in the process.",
                        "If you are not fluent in Spanish, consider a public translator for legal documents.",
                        "Understand the local market. Prices and dynamics can be different from your country.",
                        "Plan your trips to be present for the signing of the deed, or arrange for a power of attorney."
                    ],
                    tip: "I am here to guide you every step of the way, from obtaining your CDI to handing over the keys. Let's make it easy!"
                }
            }
        }
    },
    blog: {
        title: 'Real Estate Blog',
        subtitle: 'Analysis, news, and advice on the real estate market in Buenos Aires.',
        readMore: 'Read more',
        posts: [
            {
                id: 'compradores-primerizos',
                title: 'First-Time Homebuyer\'s Guide in Buenos Aires',
                description: 'Practical tips for those looking for their first property: from financing to choosing the ideal neighborhood.',
                date: '2025-10-18',
                author: 'Gerardo Leiserson',
                tags: ['Tips', 'First Home', 'Financing'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Buying your first property is an exciting step, but it can also be overwhelming. Buenos Aires offers a diverse and dynamic market, and being well-prepared is key to making the best decision. This guide will help you navigate the process with confidence.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Define Your Real Budget</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Before you start looking at properties, it's essential to know how much you can afford. It's not just about the sale price; consider the additional costs that can add between 7% and 9% to the property's value. This includes real estate fees, notary expenses, taxes, and stamps. If you're applying for a mortgage, get a pre-approval from a bank to know your limit and have an advantage when negotiating.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Choose the Right Neighborhood for You</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Location is one of the most important factors. Do you prioritize proximity to work, green spaces, nightlife, or good schools? Visit the neighborhoods that interest you at different times to get a feel for their atmosphere. Think long-term: a growing neighborhood can be an excellent investment.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. The Search and Viewings</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Be clear about your "non-negotiables" (e.g., number of rooms, balcony) and your "desirables" (e.g., amenities, high floor). During viewings, pay attention to details: natural light, the condition of the utilities, water pressure, and potential noises. Don't hesitate to ask about building fees (expensas), condo rules, and if any major repairs are planned for the building.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. From Offer to Closing</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Once you find the ideal property, it's time to make an offer. A good real estate advisor will help you present a competitive proposal based on a market analysis. If the offer is accepted, the process continues with the signing of the preliminary sales agreement (boleto de compraventa), where a down payment is made (usually 30%), and finally, the deed (escritura), where you officially become the owner.</p>
                    <p class="mt-6 italic text-gray-400">Buying your first home is a marathon, not a sprint. Take your time, do your research, and seek professional advice. I'm here to help you every step of this incredible journey!</p>
                `
            },
            {
                id: 'tendencias-inmobiliarias',
                title: 'Buenos Aires Real Estate Market Trends in 2025',
                description: 'Discover the latest real estate market trends, which neighborhoods are on the rise, and what to look for when investing.',
                date: '2025-10-10',
                author: 'Editorial Team',
                tags: ['Market', 'Investment', 'Credit'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">The Buenos Aires real estate market is navigating 2025 with mixed signals: after a strong recovery in the first half of the year, the election calendar and rising mortgage interest rates have slowed the pace of transactions, creating a climate of maximum caution among both buyers and sellers.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Election Expectations and Sales Paralysis</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Unlike the enthusiasm at the beginning of the year, the market is now characterized by a wait-and-see attitude. The impact of the October legislative elections is strongly felt: uncertainty about the economic direction and the volatility of the dollar have led many to postpone purchasing and investment decisions. Access to mortgage credit, which had driven growth months ago, has stalled due to rising rates—reaching 17% annually at some banks—and stricter income and scoring requirements.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Price Increases but a Drop in Demand</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">The average price per square meter in CABA continues to show year-over-year increases, reaching around USD 2,450 in September, albeit with significant disparity by area. Premium sectors like Puerto Madero and Palermo lead the value rankings, while neighborhoods like Lugano and Parque Patricios offer more accessible alternatives. However, effective demand has fallen, and the time to close deals has lengthened: today, buying a property can take months, while mortgage approvals typically take between 60 and 120 days.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Future Outlook</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Experts agree that the election outcome will determine whether financing returns to energize the sector and if confidence returns to buyers. In the meantime, the market is going through a "plateau" and adaptation phase, with firm prices but lower transaction volumes and sales operations on hold.</p>
                `
            },
            {
                id: 'palermo',
                title: 'Palermo: The Vibrant Heart of Buenos Aires',
                description: 'Explore Palermo, one of the most vibrant neighborhoods in Buenos Aires, ideal for living or investing in modern properties.',
                date: '2025-10-05',
                author: 'Gerardo Leiserson',
                tags: ['Palermo', 'Culture', 'Investment', 'Lifestyle'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Palermo is not just a neighborhood; it's a universe in itself. As the largest in Buenos Aires, it's divided into several "sub-zones," each with its own identity, making it an incredibly diverse and attractive place to live and invest.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Soho: Design and Avant-Garde</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">This is the epicenter of fashion, art, and gastronomy. Its cobblestone streets are lined with designer boutiques, art galleries, and some of the city's best bars and restaurants. Ideal for young professionals and tourists, the demand for short-term rentals here is extremely high, making it an excellent investment option.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Hollywood: The Audiovisual and Gastronomic Hub</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Named for its concentration of film and television production companies, Hollywood is now a top-tier gastronomic hub. It offers a vibrant nightlife and a mix of modern buildings with old, renovated PHs (townhouses). It's a highly sought-after area for those working in the creative industry who love to dine out.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Chico and the Bosques: Exclusivity and Nature</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">This is the most residential and luxurious side of Palermo. With its imposing embassies, high-end buildings, and proximity to the Bosques de Palermo, the city's green lung, it is one of the most valued areas. Here you will find high-end properties, ideal for families seeking tranquility and status without giving up a central location.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Why Invest in Palermo?</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Investing in Palermo is a safe bet. Its constant demand, from both locals and foreigners, guarantees high profitability and sustained property value appreciation. The connectivity, security, and unparalleled cultural and leisure offerings make Palermo always one of the best real estate decisions in Buenos Aires.</p>
                `
            }
        ]
    },
    faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to the most common doubts about buying and selling properties in Buenos Aires.',
        questions: [
            { q: "What expenses should I consider when buying a property?", a: "In addition to the property price, you should consider real estate agency fees (usually 4% + VAT), notary expenses (approximately 2-3%), stamp duty (3.6% of the value, often shared 50/50 with the seller), and costs for title reports and certificates." },
            { q: "How long does the buying process take?", a: "From the reservation to the signing of the deed, the process can take between 30 and 90 days. This depends on the complexity of the documentation and whether the purchase is with or without a mortgage." },
            { q: "Do I need to be an Argentine resident to buy a property?", a: "No, foreigners can buy property in Argentina. You just need to obtain a CDI (Identification Key) from AFIP, which is a simple procedure. I can guide you through the entire process." },
            { q: "What is the ITI and who pays it?", a: "The ITI (Property Transfer Tax) is a tax paid by the seller if the property is not their only home. If it is their only home and they are going to buy another within a year, they can apply for an exemption." },
            { q: "Is it a good time to invest in Buenos Aires?", a: "Currently, the market shows signs of recovery with competitive prices. The combination of growing demand and values that have not yet reached their historical peaks presents an excellent window of opportunity for investors." },
        ],
    },
    aiAssistant: {
        title: 'Need help?',
        description: 'My AI assistant is available 24/7 to answer your questions about properties and the market.',
        button: 'Chat Now',
    },
    contact: {
        title: 'Contact',
        subtitle: 'Ready to take the next step? Let\'s talk. I am here to help you achieve your real estate goals.',
        form: {
            title: 'Send me a Message',
            name: 'Name',
            namePlaceholder: 'Your full name',
            email: 'Email',
            emailPlaceholder: 'your.email@example.com',
            phone: 'Phone (Optional)',
            phonePlaceholder: 'Your phone number',
            inquiryType: 'Inquiry Type',
            inquiryOptions: {
                buy: 'I want to buy',
                sell: 'I want to sell',
                invest: 'I want to invest',
                other: 'Other inquiry',
            },
            message: 'Message',
            messagePlaceholder: 'Tell me more about your search or inquiry...',
            charCount: 'Maximum 500 characters',
            submit: 'Send Message',
        },
        info: {
            title: 'My Information',
            whatsapp: 'WhatsApp',
            email: 'Email',
            location: 'Location',
            locationValue: 'Buenos Aires, Argentina',
            hours: 'Office Hours',
            hoursValue: 'Monday to Friday, 9am - 6pm',
        },
        quickActions: {
            title: 'Quick Actions',
            schedule: 'Schedule a virtual meeting',
            join: 'Join my News group',
            call: 'Call me now',
        },
    },
    footer: {
        description: 'Professional and personalized real estate consulting in Buenos Aires. Buying, selling, and investments.',
        contact: 'Quick Contact',
        consult: 'Consult on WhatsApp',
        rights: '© 2024 LeisersonGerardo. All rights reserved.',
    },
     chatbox: {
        initialMessage: 'Hi! I\'m Gerardo\'s virtual assistant. Are you looking to buy, sell, or invest? Tell me a bit more about what you need, and I\'ll help you find the best solution.',
        headerTitle: 'Real Estate Assistant',
        inputPlaceholder: 'Type your message...'
    }
  },
  pt: {
    nav: {
      inicio: 'Início',
      experiencia: 'Experiência',
      barrios: 'Bairros',
      virtualTours: 'Tours Virtuais',
      financialTools: 'Ferramentas',
      referidos: 'Minha Rede',
      guias: 'Guias',
      blog: 'Blog',
      faq: 'FAQ',
      contacto: 'Contato',
    },
    hero: {
      subheading: 'CORRETOR DE IMÓVEIS EM BUENOS AIRES',
      heading: 'Gerardo Leiserson',
      description: 'Eu te ajudo a encontrar o imóvel dos seus sonhos e a navegar no mercado imobiliário de Buenos Aires com confiança e conhecimento especializado.',
      ctaAppointment: 'Agendar Reunião',
      ctaWhatsapp: 'Contatar por WhatsApp',
      talkWithUs: 'Fale conosco!'
    },
    experience: {
        title: 'Minha Experiência a Seu Serviço',
        subtitle: 'Mais de uma década transformando transações em relacionamentos duradouros.',
        cards: [
            {
                title: '10+ Anos de Experiência',
                description: 'Uma década no dinâmico mercado de Buenos Aires, especializando-me em encontrar oportunidades únicas para meus clientes.',
            },
            {
                title: '200+ Transações de Sucesso',
                description: 'Cada operação é uma história de sucesso, guiando famílias e investidores a alcançar seus objetivos imobiliários.',
            },
            {
                title: 'Abordagem Personalizada',
                description: 'Entendo que cada cliente é único. Meu serviço se adapta às suas necessidades, garantindo uma experiência transparente e sem estresse.',
            },
        ],
    },
    properties: {
        title: 'Imóveis em Destaque',
        subtitle: 'Uma seleção de imóveis exclusivos nas melhores áreas da cidade.',
        types: {
            apartment: 'Apartamento',
            ph: 'PH (Casa geminada)',
            house: 'Casa',
        },
        items: [
            {
                name: 'Moderno Apartamento em Palermo',
                location: 'Palermo, Buenos Aires',
                beds: 3,
                baths: 2,
                area: 120,
            },
            {
                name: 'PH Charmoso em Belgrano',
                location: 'Belgrano, Buenos Aires',
                beds: 4,
                baths: 3,
                area: 180,
            },
            {
                name: 'Casa Elegante na Recoleta',
                location: 'Recoleta, Buenos Aires',
                beds: 5,
                baths: 4,
                area: 300,
            },
        ],
    },
    neighborhoods: {
        title: 'Explore os Bairros de Buenos Aires',
        subtitle: 'Descubra o que cada bairro tem a oferecer. Selecione um bairro para ver seus pontos de interesse ou pesquise um endereço para encontrar lugares próximos.',
        poiTitle: 'Pontos de Interesse em',
        poiTitleNearby: 'Pontos de Interesse Próximos',
        poiCategories: {
            all: 'Todos',
            food: 'Gastronomia',
            shopping: 'Compras',
            culture: 'Cultura',
            health: 'Saúde',
            education: 'Educação',
        },
        visitWebsite: 'Visitar site',
        clearSearch: 'Limpar busca',
    },
    topNeighborhoods: {
        title: 'Bairros em Demanda',
        subtitle: 'Descubra as áreas mais procuradas de Buenos Aires.',
    },
     virtualTours: {
        title: 'Passeios Virtuais 360°',
        subtitle: 'Explore os bairros mais icônicos de Buenos Aires do conforto da sua casa com nossos tours imersivos.',
        tours: [
            { id: "palermo", name: "Palermo", description: "O maior e mais verde bairro, conhecido por seus bosques, vida noturna e design." },
            { id: "belgrano", name: "Belgrano", description: "Residencial e elegante, com casarões imponentes, parques e uma vibrante área comercial." },
            { id: "recoleta", name: "Recoleta", description: "A 'Paris' da América do Sul, famosa por sua arquitetura, cemitério e museus." },
            { id: "villacrespo", name: "Villa Crespo", description: "Um bairro com identidade própria, outlets de couro e uma crescente cena gastronômica." },
            { id: "colegiales", name: "Colegiales", description: "Tranquilo, com ruas arborizadas e um ambiente familiar perto de tudo." },
            { id: "nunez", name: "Núñez", description: "Moderno e esportivo, lar do estádio do River Plate e amplos espaços verdes." },
            { id: "villaurquiza", name: "Villa Urquiza", description: "Um bairro em expansão que combina tradição com novos empreendimentos." },
            { id: "caballito", name: "Caballito", description: "O coração geográfico da cidade, com grande conectividade e vida comercial." },
            { id: "puertomadero", name: "Puerto Madero", description: "O bairro mais moderno, com arranha-céus, restaurantes de luxo e vista para o rio." },
            { id: "santelmo", name: "San Telmo", description: "A alma histórica de Buenos Aires, com suas ruas de paralelepípedos, feiras e tango." },
            { id: "saavedra", name: "Saavedra", description: "Um oásis de tranquilidade com um dos maiores parques da cidade." },
            { id: "chacarita", name: "Chacarita", description: "Um polo audiovisual e gastronômico em constante crescimento e evolução." }
        ],
        durations: {
            short: "5-10 min",
            medium: "10-15 min",
            long: "15-20 min",
            extraLong: "20+ min"
        },
        viewsText: "{views} visualizações",
        watchTour: "Ver Passeio",
        copySuccess: "Link copiado!",
        copyError: "Erro ao copiar",
        tipTitle: "Como funcionam os Tours Virtuais?",
        tipContent: "Os tours são realizados por ManuTrip e podem ser vistos no link 'Ver Tour' que o levará à sua página do YouTube.",
        modalTitle: "Redirecionando para o YouTube",
        modalInstruction: "O vídeo abrirá em uma nova aba do YouTube. Você pode copiar o link ou abri-lo diretamente.",
        copyLink: "Copiar Link",
        openInYouTube: "Abrir no YouTube",
        modalTip: "Não se esqueça de ativar a qualidade 4K para a melhor experiência!",
    },
    financialTools: {
        title: 'Ferramentas Financeiras',
        subtitle: 'Calculadoras e dados úteis para planejar seu investimento imobiliário em Buenos Aires.',
        converter: {
            title: 'Conversor de Moedas',
            disclaimer: 'Taxa de câmbio de referência (MEP): 1 USD ≈ {rate} ARS. Valores aproximados.',
        },
        costOfLiving: {
            title: 'Custo de Vida (Estimado)',
            family: 'Família de 4',
            single: 'Pessoa Solteira',
            viewDetails: 'Ver Detalhes Completos',
            source: 'Fonte: Expatistan.com',
            updated: 'Atualizado em 2024',
        },
        dolarOficial: {
            title: 'Cotação do Dólar na Argentina',
        }
    },
    referrals: {
        title: 'Minha Rede de Confiança',
        subtitle: 'Eu conecto você com profissionais de alto nível que complementam meu serviço, garantindo que cada aspecto da sua operação esteja nas melhores mãos.',
        selectNeighborhood: 'Filtrar por bairro:',
        allNeighborhoods: 'Todos os bairros',
        searchPlaceholder: 'Buscar por especialidade ou nome...',
        contact: 'Contatar por WhatsApp',
        noReferrals: 'Não há indicações para esta seleção. Tente outro bairro ou busca.',
        referralsCount: 'referências',
        viewTestimonial: 'Ver Depoimento',
        closeTestimonial: 'Ocultar Depoimento',
        refers: 'Indica',
        shareContact: 'Recomendar',
        disclaimer: {
          title: 'INFORMAÇÃO IMPORTANTE',
          text: 'Os comércios e serviços aqui indicados aparecem por vontade própria. Eles escolhem aparecer neste site e ser contatados por usuários finais.',
          ctaTitle: 'QUER APARECER NA MINHA REDE?',
          ctaSubtitle: 'Preencha o formulário para solicitar aparecer em nosso diretório',
          ctaQrText: 'Escaneie para preencher o formulário',
          ctaButton: 'Preencher Formulário'
        },
        quotes: {
            carlosRodriguez: '"O Escritório López cuidou da nossa sucessão familiar com incrível profissionalismo e empatia. Nos sentimos apoiados em todos os momentos."',
            // FIX: Removed trailing parentheses from the string that was causing a TypeError.
            sofiaMartinez: '"Gerardo revolucionou nossa estratégia de marketing. Ele entendeu perfeitamente o mercado e nos posicionou como líderes na área. Resultados incríveis!"',
            anaGarcia: '"O atendimento na Clínica Odontológica Belgrano é de primeira. Senti-me segura e os resultados foram excelentes. Super recomendados!"'
        }
    },
     guides: {
        title: 'Guias Imobiliários 2025',
        subtitle: 'Informações importantes e conselhos práticos para tomar as melhores decisões.',
        download: 'Ver Guia Completo',
        cards: [
            { id: "comprador", title: "Guia do Comprador", description: "Tudo o que você precisa saber para comprar seu imóvel em Buenos Aires: custos, documentos e preços de mercado." },
            { id: "vendedor", title: "Guia do Vendedor", description: "Maximize o valor do seu imóvel com estratégias de venda, checklist de preparação e análise de tendências." },
            { id: "inversion", title: "Guia de Investimento", description: "Descubra oportunidades de investimento, rentabilidade por bairro e as chaves do mercado de aluguéis." },
            { id: "dueno", title: "Venda Direta vs. Imobiliária", description: "Analisamos os prós e contras de cada opção para que você escolha a melhor estratégia." },
            { id: "extranjero", title: "Guia para Estrangeiros", description: "O processo de compra para não residentes explicado passo a passo: requisitos, custos e dicas." }
        ],
        content: {
            important: "Importante",
            tip: "Dica",
            warning: "Atenção",
            comprador: {
                title: "Guia do Comprador",
                card1_costs: {
                    title: "Custos e Comissões de Compra",
                    question: "Quais custos adicionais um comprador enfrenta em CABA (2025)?",
                    items: [
                        { label: "Honorários Imobiliários:", value: "4% + IVA", description: "Sobre o valor do imóvel" },
                        { label: "Cartório (Escritura):", value: "1-2%", description: "Varia com o valor" },
                        { label: "Imposto de Selo:", value: "1.75%", description: "Geralmente compartilhado" },
                        { label: "Taxas de Registro:", value: "0.2%", description: "" },
                        { label: "Certidões:", value: "~$200 USD", description: "Aproximado" }
                    ],
                    important: "Total estimado: Espere adicionar entre 7% e 9% ao preço de compra.",
                    tip: "Alguns custos, como o Imposto de Selo, podem ser negociados. Fale comigo!"
                },
                card2_docs: {
                    title: "Documentação Necessária",
                    question: "Quais documentos um comprador precisa?",
                    items: ["RG ou Passaporte válido", "Comprovante de CUIT/CUIL/CDI", "Comprovação de origem dos fundos (exigido por lei)", "Dados pessoais completos"],
                    warning: "A 'Chave de Identificação' (CDI) é essencial para estrangeiros não residentes. É tramitada na AFIP."
                },
                card3_tips: {
                    title: "Dicas para Comprar",
                    question: "Como fazer uma compra bem-sucedida em 2025?",
                    items: ["Obtenha uma pré-aprovação de crédito, se necessário", "Visite o imóvel em horários diferentes", "Revise as despesas do condomínio (expensas) e atas de reunião", "Contrate um agrimensor se comprar um terreno ou casa"],
                    tip: "Não se apresse! O mercado está ativo, mas sempre há boas oportunidades. Vamos analisar as opções juntos."
                },
                card4_prices: {
                    title: "Preços de Referência (m²)",
                    question: "Qual é o valor médio do m² em CABA (2025)?",
                    data: {
                        avg_price: "USD 2,155 / m²",
                        avg_change: "(+4% anual)",
                        studio: "USD 75,000 - 95,000",
                        one_bed: "USD 100,000 - 150,000",
                        two_bed: "USD 160,000 - 250,000"
                    },
                    most_expensive: ["Puerto Madero: USD 5,500/m²", "Palermo: USD 2,900/m²", "Belgrano: USD 2,700/m²"],
                    most_accessible: "Flores, Villa Urquiza, Caballito.",
                    tip: "Os preços variam muito por localização, condição e comodidades. Estas são médias para lhe dar uma ideia."
                }
            },
            vendedor: {
                title: "Guia do Vendedor"
            },
            inversion: {
                title: "Guia de Investimento",
                card1_roi: {
                    title: "Rentabilidade e ROI",
                    question: "Qual é o retorno sobre o investimento (ROI) médio em CABA 2025?",
                    data: [
                        "Rentabilidade Anual (Aluguel): 4.5% - 6% em USD",
                        "Apreciação Anual (Valor): 3% - 5% em USD",
                        "ROI Total Estimado: 7.5% - 11% em USD"
                    ],
                    important_title: "Custos a considerar para o investidor:",
                    cost_items: [
                        "ABL e Aysa (Impostos): ~0.5% anual",
                        "Expensas (Condomínio): 1-2% anual",
                        "Manutenção: ~1% anual"
                    ],
                    tip: "A rentabilidade é maior em unidades pequenas e bem localizadas (estúdios e apartamentos de 1 quarto)."
                },
                card2_checklist: {
                    title: "Checklist do Investidor",
                    question: "O que analisar antes de investir?",
                    items: [
                        "Localização e conectividade (metrô, ônibus, avenidas)",
                        "Potencial de crescimento do bairro",
                        "Qualidade da construção e idade",
                        "Situação das despesas do condomínio",
                        "Demanda de aluguel na área",
                        "Projetos de desenvolvimento urbano próximos"
                    ],
                    important: "Uma boa administração do condomínio é fundamental para proteger seu investimento a longo prazo."
                },
                card3_opportunities: {
                    title: "Zonas de Oportunidade",
                    question: "Onde estão as melhores oportunidades de investimento em 2025?",
                    items: [
                        "Villa Crespo / Chacarita: O 'novo Palermo', com grande potencial de valorização.",
                        "Caballito: Alta demanda de aluguel por sua localização central e serviços.",
                        "Saavedra / Coghlan: Zonas residenciais em crescimento, atraentes para famílias.",
                        "Barracas: Distrito de design com empreendimentos modernos e boa acessibilidade."
                    ],
                    tip: "Comprar na planta pode oferecer um retorno de até 30% em USD, mas envolve maiores riscos. Fale comigo para analisar projetos!"
                },
                card4_rent: {
                    title: "Mercado de Aluguéis",
                    question: "Como se comportam os preços dos aluguéis em CABA 2025?",
                    data: {
                        increase: "+250% anual em pesos",
                        inflation: "211%",
                        studio: "$350,000 - $450,000 ARS",
                        one_bed: "$480,000 - $600,000 ARS",
                        two_bed: "$650,000 - $850,000 ARS"
                    },
                    most_expensive: ["Palermo: $550,000 (2 qts)", "Núñez: $520,000 (2 qts)"],
                    most_accessible_label: "Bairros mais acessíveis:",
                    most_accessible_value: "Balvanera, San Cristóbal",
                    warning: "Após a revogação da Lei de Aluguéis, os contratos são acordados com mais flexibilidade. É fundamental ter uma boa assessoria jurídica."
                }
            },
            dueno: {
                title: "Venda Direta vs. Imobiliária",
                subtitle: "Uma comparação para ajudá-lo a tomar a melhor decisão.",
                prosConsTitle: "Prós e Contras: Qual caminho escolher?",
                pros: [
                    "Economia em comissões (potencialmente)",
                    "Controle total sobre o processo",
                    "Contato direto com compradores"
                ],
                cons: [
                    "Menor exposição e alcance",
                    "Dificuldade em definir um preço correto",
                    "Riscos legais e de negociação",
                    "Investimento significativo de tempo e esforço",
                    "Filtragem de interessados pouco sérios"
                ],
                stepsTitle: "Etapas que um profissional imobiliário cobre:",
                steps: [
                    "Avaliação profissional do imóvel.",
                    "Estratégia de marketing e divulgação em portais.",
                    "Fotografia e vídeos profissionais.",
                    "Triagem e qualificação de interessados.",
                    "Coordenação e gestão de visitas.",
                    "Negociação especializada e defesa de seus interesses.",
                    "Assessoria jurídica e administrativa até o fechamento."
                ]
            },
            extranjero: {
                title: "Guia para Estrangeiros",
                subtitle: "Comprar um imóvel em Buenos Aires como não residente.",
                card1_reqs: {
                    title: "Requisitos Principais",
                    question: "O que um estrangeiro precisa para comprar na Argentina?",
                    items: [
                        "Passaporte válido.",
                        "Obter um CDI (Chave de Identificação) na AFIP. É um processo simples e gratuito.",
                        "Comprovação da origem dos fundos (exigido pela UIF - Unidade de Informação Financeira)."
                    ],
                    tip: "Você não precisa ser residente para comprar um imóvel. O processo é relativamente simples com a assessoria adequada."
                },
                card2_steps: {
                    title: "Processo de Compra Simplificado",
                    question: "Quais são os passos para a compra?",
                    items: [
                        "Busca e seleção do imóvel.",
                        "Realização de uma oferta de compra formal (Reserva).",
                        "Assinatura do contrato preliminar de compra e venda (Boleto de Compraventa), pagando ~30% do valor.",
                        "Gestão da transferência de fundos para a Argentina.",
                        "Assinatura da escritura definitiva de propriedade perante um tabelião público, pagando os 70% restantes."
                    ],
                    warning: "A transferência de fundos é uma etapa crítica. É essencial planejá-la com antecedência para evitar atrasos."
                },
                card3_costs: {
                    title: "Custos para Estrangeiros",
                    question: "Os custos são diferentes para estrangeiros?",
                    items: [
                        { label: "Honorários e Cartório:", value: "Igual aos locais", description: "(ver Guia do Comprador)" },
                        { label: "Transferência de Fundos:", value: "Varia", description: "Depende do banco/método" },
                        { label: "Impostos:", value: "Os mesmos", description: "Não há impostos adicionais por ser estrangeiro" }
                    ],
                    tip: "Recomendo usar serviços financeiros especializados para a transferência de fundos para garantir um processo transparente e eficiente."
                },
                card4_tips: {
                    title: "Dicas Essenciais",
                    question: "O que mais um comprador estrangeiro deve saber?",
                    items: [
                        "Contrate um tabelião de confiança. Ele é uma figura imparcial fundamental no processo.",
                        "Se você não fala espanhol fluentemente, considere um tradutor público para os documentos legais.",
                        "Entenda o mercado local. Os preços e dinâmicas podem ser diferentes dos do seu país.",
                        "Planeje suas viagens para estar presente na assinatura da escritura, ou providencie uma procuração."
                    ],
                    tip: "Estou aqui para guiá-lo em cada passo, desde a obtenção do seu CDI até a entrega das chaves. Vamos facilitar!"
                }
            }
        }
    },
    blog: {
        title: 'Blog Imobiliário',
        subtitle: 'Análises, notícias e dicas sobre o mercado imobiliário em Buenos Aires.',
        readMore: 'Leia mais',
        posts: [
            {
                id: 'compradores-primerizos',
                title: 'Guia para Compradores de Primeira Viagem em Buenos Aires',
                description: 'Dicas práticas para quem procura seu primeiro imóvel: do financiamento à escolha do bairro ideal.',
                date: '2025-10-18',
                author: 'Gerardo Leiserson',
                tags: ['Dicas', 'Primeira Casa', 'Financiamento'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Comprar seu primeiro imóvel é um passo emocionante, mas também pode ser esmagador. Buenos Aires oferece um mercado diverso e dinâmico, e estar bem preparado é fundamental para tomar a melhor decisão. Este guia ajudará você a navegar pelo processo com confiança.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Defina seu Orçamento Real</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Antes de começar a procurar imóveis, é essencial saber quanto você pode pagar. Não se trata apenas do preço de venda; considere os custos adicionais que podem somar entre 7% e 9% ao valor do imóvel. Isso inclui honorários imobiliários, despesas de cartório, impostos e selos. Se você for solicitar um financiamento imobiliário, obtenha uma pré-aprovação bancária para saber seu limite e ter uma vantagem ao negociar.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Escolha o Bairro Certo para Você</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">A localização é um dos fatores mais importantes. Você prioriza a proximidade do trabalho, áreas verdes, vida noturna ou boas escolas? Visite os bairros que lhe interessam em horários diferentes para sentir a atmosfera. Pense a longo prazo: um bairro em crescimento pode ser um excelente investimento.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. A Busca e as Visitas</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Seja claro sobre seus "não negociáveis" (ex: número de quartos, varanda) e seus "desejáveis" (ex: comodidades, andar alto). Durante as visitas, preste atenção aos detalhes: luz natural, estado das instalações, pressão da água e possíveis ruídos. Não hesite em perguntar sobre as despesas do condomínio (expensas), as regras do prédio e se há grandes reformas planejadas.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. Da Oferta ao Fechamento</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Depois de encontrar o imóvel ideal, é hora de fazer uma oferta. Um bom corretor de imóveis o ajudará a apresentar uma proposta competitiva com base em uma análise de mercado. Se a oferta for aceita, o processo continua com a assinatura do contrato preliminar de compra e venda (boleto de compraventa), onde um sinal é pago (geralmente 30%), e, finalmente, a escritura, onde você se torna oficialmente o proprietário.</p>
                    <p class="mt-6 italic text-gray-400">Comprar sua primeira casa é uma maratona, não uma corrida. Leve o seu tempo, pesquise e procure aconselhamento profissional. Estou aqui para ajudá-lo em cada passo desta incrível jornada!</p>
                `
            },
            {
                id: 'tendencias-inmobiliarias',
                title: 'Tendências do Mercado Imobiliário de Buenos Aires em 2025',
                description: 'Descubra as últimas tendências do mercado imobiliário, quais bairros estão em alta e o que procurar ao investir.',
                date: '2025-10-10',
                author: 'Equipe Editorial',
                tags: ['Mercado', 'Investimento', 'Crédito'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">O mercado imobiliário da cidade de Buenos Aires em 2025 apresenta sinais mistos: após uma forte recuperação no primeiro semestre, o calendário eleitoral e o aumento das taxas de juros dos financiamentos imobiliários desaceleraram o ritmo das transações, criando um clima de máxima cautela entre compradores e vendedores.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Expectativa Eleitoral e Paralisia nas Vendas</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Diferente do entusiasmo do início do ano, o mercado agora é caracterizado pela espera. O impacto das eleições legislativas de outubro é fortemente sentido: a incerteza sobre a direção econômica e a volatilidade do dólar levaram muitos a adiar decisões de compra e investimento. O acesso ao crédito imobiliário, que impulsionou o crescimento meses atrás, estagnou devido ao aumento das taxas — chegando a 17% ao ano em alguns bancos — e a requisitos mais rigorosos de renda e pontuação.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Aumento de Preços, mas Queda na Demanda</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">O preço médio por metro quadrado em CABA continua a mostrar aumentos anuais, atingindo cerca de US$ 2.450 em setembro, embora com grande disparidade por área. Setores premium como Puerto Madero e Palermo lideram os rankings de valor, enquanto bairros como Lugano e Parque Patricios oferecem alternativas mais acessíveis. No entanto, a demanda efetiva caiu e o tempo para fechar negócios aumentou: hoje, a compra de um imóvel pode levar meses, enquanto a aprovação de hipotecas normalmente leva de 60 a 120 dias.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Perspectivas Futuras</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Especialistas concordam que o resultado da eleição determinará se o financiamento voltará a impulsionar o setor e se a confiança retornará aos compradores. Enquanto isso, o mercado passa por uma fase de "platô" e adaptação, com preços firmes, mas menor volume de transações e operações de venda suspensas.</p>
                `
            },
            {
                id: 'palermo',
                title: 'Palermo: O Coração Vibrante de Buenos Aires',
                description: 'Explore Palermo, um dos bairros mais vibrantes de Buenos Aires, ideal para morar ou investir em imóveis modernos.',
                date: '2025-10-05',
                author: 'Gerardo Leiserson',
                tags: ['Palermo', 'Cultura', 'Investimento', 'Estilo de Vida'],
                content: `
                    <p class="mb-4 text-gray-300 leading-relaxed">Palermo não é apenas um bairro; é um universo em si. Sendo o maior de Buenos Aires, é dividido em várias "subzonas", cada uma com sua própria identidade, tornando-o um lugar incrivelmente diverso e atraente para morar e investir.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Soho: Design e Vanguarda</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Este é o epicentro da moda, arte e gastronomia. Suas ruas de paralelepípedos estão repletas de butiques de designers, galerias de arte e alguns dos melhores bares e restaurantes da cidade. Ideal para jovens profissionais e turistas, a demanda por aluguéis de curto prazo aqui é extremamente alta, tornando-o uma excelente opção de investimento.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Hollywood: O Polo Audiovisual e Gastronômico</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Nomeado pela concentração de produtoras de cinema e televisão, Hollywood é hoje um polo gastronômico de primeira linha. Oferece uma vida noturna vibrante e uma mistura de edifícios modernos com antigos PHs (casas geminadas) reformados. É uma área muito procurada por quem trabalha na indústria criativa e adora sair para jantar.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Palermo Chico e os Bosques: Exclusividade e Natureza</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Este é o lado mais residencial e luxuoso de Palermo. Com suas imponentes embaixadas, edifícios de alto padrão e a proximidade com os Bosques de Palermo, o pulmão verde da cidade, é uma das áreas mais valorizadas. Aqui você encontrará imóveis de luxo, ideais para famílias que buscam tranquilidade e status sem abrir mão de uma localização central.</p>
                    <h2 class="text-2xl font-bold text-white mt-8 mb-4">Por que Investir em Palermo?</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Investir em Palermo é uma aposta segura. Sua demanda constante, tanto de locais quanto de estrangeiros, garante alta rentabilidade e valorização sustentada do imóvel. A conectividade, a segurança e a incomparável oferta cultural e de lazer fazem de Palermo sempre uma das melhores decisões imobiliárias em Buenos Aires.</p>
                `
            }
        ]
    },
    faq: {
        title: 'Perguntas Frequentes',
        subtitle: 'Respostas para as dúvidas mais comuns sobre a compra e venda de imóveis em Buenos Aires.',
        questions: [
            { q: "Quais despesas devo considerar ao comprar um imóvel?", a: "Além do preço do imóvel, você deve considerar os honorários da imobiliária (geralmente 4% + IVA), despesas de cartório (aproximadamente 2-3%), imposto de selo (3.6% sobre o valor, muitas vezes dividido 50/50 com o vendedor) e custos de certidões e registros." },
            { q: "Quanto tempo leva o processo de compra?", a: "Desde a reserva até a assinatura da escritura, o processo pode levar de 30 a 90 dias. Isso depende da complexidade da documentação e se a compra é com ou sem financiamento imobiliário." },
            { q: "Preciso ser residente argentino para comprar um imóvel?", a: "Não, estrangeiros podem comprar imóveis na Argentina. Você só precisa obter um CDI (Chave de Identificação) na AFIP, que é um processo simples. Posso orientá-lo em todo o processo." },
            { q: "O que é o ITI e quem o paga?", a: "O ITI (Imposto sobre a Transferência de Imóveis) é um imposto pago pelo vendedor se o imóvel não for sua única residência. Se for sua única residência e ele for comprar outra dentro de um ano, pode solicitar a isenção." },
            { q: "É um bom momento para investir em Buenos Aires?", a: "Atualmente, o mercado mostra sinais de recuperação com preços competitivos. A combinação de uma demanda crescente e valores que ainda não atingiram seus picos históricos apresenta uma excelente janela de oportunidade para investidores." },
        ],
    },
    aiAssistant: {
        title: 'Precisa de ajuda?',
        description: 'Meu assistente de IA está disponível 24/7 para responder às suas perguntas sobre imóveis e o mercado.',
        button: 'Conversar Agora',
    },
    contact: {
        title: 'Contato',
        subtitle: 'Pronto para dar o próximo passo? Vamos conversar. Estou aqui para ajudá-lo a alcançar seus objetivos imobiliários.',
        form: {
            title: 'Envie-me uma Mensagem',
            name: 'Nome',
            namePlaceholder: 'Seu nome completo',
            email: 'Email',
            emailPlaceholder: 'seu.email@exemplo.com',
            phone: 'Telefone (Opcional)',
            phonePlaceholder: 'Seu número de telefone',
            inquiryType: 'Tipo de Consulta',
            inquiryOptions: {
                buy: 'Quero comprar',
                sell: 'Quero vender',
                invest: 'Quero investir',
                other: 'Outra consulta',
            },
            message: 'Mensagem',
            messagePlaceholder: 'Conte-me mais sobre sua busca ou consulta...',
            charCount: 'Máximo de 500 caracteres',
            submit: 'Enviar Mensagem',
        },
        info: {
            title: 'Minhas Informações',
            whatsapp: 'WhatsApp',
            email: 'Email',
            location: 'Localização',
            locationValue: 'Buenos Aires, Argentina',
            hours: 'Horário de Atendimento',
            hoursValue: 'Segunda a Sexta, 9h - 18h',
        },
        quickActions: {
            title: 'Ações Rápidas',
            schedule: 'Agendar uma reunião virtual',
            join: 'Participe do meu grupo de Novidades',
            call: 'Ligue para mim agora',
        },
    },
    footer: {
        description: 'Assessoria imobiliária profissional e personalizada em Buenos Aires. Compra, venda e investimentos.',
        contact: 'Contato Rápido',
        consult: 'Consultar por WhatsApp',
        rights: '© 2024 LeisersonGerardo. Todos os direitos reservados.',
    },
    chatbox: {
        initialMessage: 'Olá! Sou o assistente virtual do Gerardo. Você está procurando comprar, vender ou investir? Conte-me um pouco mais sobre o que você precisa e eu o ajudarei a encontrar a melhor solução.',
        headerTitle: 'Assistente Imobiliário',
        inputPlaceholder: 'Escreva sua mensagem...'
    }
  },
};
