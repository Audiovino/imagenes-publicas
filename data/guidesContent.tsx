
import React from 'react';

const GuideHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400">{subtitle}</p>
    </div>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const GuideCard: React.FC<{ title: string, question:string, icon:string, category:string, children: React.ReactNode }> = ({ title, question, icon, category, children }) => (
    <div className="bg-gray-700 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-800 flex items-center gap-4">
            <span className="text-2xl">{icon}</span>
            <div>
                <span className="text-xs font-bold uppercase text-purple-400">{category}</span>
                <h3 className="font-bold text-white">{title}</h3>
            </div>
        </div>
        <div className="p-4 md:p-6">
            <p className="font-semibold text-white mb-4">{question}</p>
            {children}
        </div>
    </div>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const GuideSection: React.FC<{ title: string; icon: string; colorClass: string; children: React.ReactNode; }> = ({ title, icon, colorClass, children }) => (
    <div className={`bg-gray-700 rounded-lg p-6 border-l-4 ${colorClass}`}>
        <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl">{icon}</span>
            <h3 className="font-bold text-white text-xl">{title}</h3>
        </div>
        <div>{children}</div>
    </div>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const NumberedListItem: React.FC<{ number: number; children: React.ReactNode; }> = ({ number, children }) => (
    <li className="flex items-start mb-2">
        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-teal-500 text-white font-bold rounded-full mr-3">{number}</span>
        <span className="text-gray-300">{children}</span>
    </li>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const InfoBox: React.FC<{ type: 'tip' | 'warning' | 'info'; children: React.ReactNode; }> = ({ type, children }) => {
    const styles = {
        tip: { icon: '💡', classes: 'bg-blue-900/50 border-blue-500' },
        warning: { icon: '⚠️', classes: 'bg-yellow-900/50 border-yellow-500' },
        info: { icon: 'ℹ️', classes: 'bg-gray-700 border-gray-500' }
    };
    return (
        <div className={`mt-4 p-4 rounded-lg border-l-4 text-gray-300 ${styles[type].classes}`}>
            <strong>{styles[type].icon} {type.charAt(0).toUpperCase() + type.slice(1)}:</strong> {children}
        </div>
    );
};

const PriceTag = ({ value, description }: { value: string, description?: string }) => (
    <span className="font-semibold">
        <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-2 py-1 rounded">{value}</span>
        {description && <span className="text-sm text-gray-400 ml-2">{description}</span>}
    </span>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const DataBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-purple-900/50 border-l-4 border-purple-500 p-4 rounded-lg my-4 text-gray-300 space-y-1">
        {children}
    </div>
);

const Disclaimer = () => (
    <p className="text-xs text-gray-500 mt-4 italic">
        ⚠️ Los datos presentados son aproximados y sujetos a verificación. Consulta con tu asesor inmobiliario o escribano para obtener información actualizada.
    </p>
);

// FIX: Added `children` to the component's props type to allow it to accept child elements.
const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <span className="text-green-400 mr-3 mt-1">✓</span>
        <span className="text-gray-300">{children}</span>
    </li>
);

export const getGuidesContent = (t: (key: string) => any) => ({
  comprador: {
    title: t('guides.content.comprador.title'),
    content: (
      <div className="space-y-6">
        <GuideHeader title={t('guides.content.comprador.title')} subtitle="Guía Visual con Datos Clave para 2025" />
        <GuideCard title={t('guides.content.comprador.card1_costs.title')} question={t('guides.content.comprador.card1_costs.question')} icon="🏠" category="COMPRADOR">
            <ul className="space-y-3">
                {t('guides.content.comprador.card1_costs.items').map((item: any, i:number) => (
                    <li key={i}><strong>{item.label}</strong> <PriceTag value={item.value} description={item.description} /></li>
                ))}
            </ul>
            <p className="mt-4"><strong>{t('guides.content.comprador.card1_costs.important')}</strong></p>
            <InfoBox type="tip">{t('guides.content.comprador.card1_costs.tip')}</InfoBox>
            <Disclaimer />
        </GuideCard>
        <GuideCard title={t('guides.content.comprador.card2_docs.title')} question={t('guides.content.comprador.card2_docs.question')} icon="📄" category="COMPRADOR">
            <ul className="space-y-2 list-disc list-inside text-gray-300">
                {t('guides.content.comprador.card2_docs.items').map((item: string, i:number) => <li key={i}>{item}</li>)}
            </ul>
            <InfoBox type="warning">{t('guides.content.comprador.card2_docs.warning')}</InfoBox>
            <Disclaimer />
        </GuideCard>
        <GuideCard title={t('guides.content.comprador.card3_tips.title')} question={t('guides.content.comprador.card3_tips.question')} icon="💡" category="COMPRADOR">
            <ul className="space-y-2 list-disc list-inside text-gray-300">
                {t('guides.content.comprador.card3_tips.items').map((item: string, i:number) => <li key={i}>{item}</li>)}
            </ul>
            <InfoBox type="tip">{t('guides.content.comprador.card3_tips.tip')}</InfoBox>
            <Disclaimer />
        </GuideCard>
        <GuideCard title={t('guides.content.comprador.card4_prices.title')} question={t('guides.content.comprador.card4_prices.question')} icon="💰" category="COMPRADOR">
            <DataBox>
              <p><strong>Precio promedio por m²:</strong> <span className="text-blue-400">{t('guides.content.comprador.card4_prices.data.avg_price')}</span> <span className="text-green-400 text-sm">{t('guides.content.comprador.card4_prices.data.avg_change')}</span></p>
              <p><strong>Monoambiente:</strong> <span className="text-blue-400">{t('guides.content.comprador.card4_prices.data.studio')}</span></p>
              <p><strong>Dos ambientes:</strong> <span className="text-blue-400">{t('guides.content.comprador.card4_prices.data.one_bed')}</span></p>
              <p><strong>Tres ambientes:</strong> <span className="text-blue-400">{t('guides.content.comprador.card4_prices.data.two_bed')}</span></p>
            </DataBox>
            <p className="font-semibold text-white mt-4">Barrios más caros:</p>
            <ul className="list-disc list-inside text-gray-300">
                {t('guides.content.comprador.card4_prices.most_expensive').map((item: string, i:number) => <li key={i}>{item}</li>)}
            </ul>
            <p className="font-semibold text-white mt-4">Barrios más accesibles: <span className="font-normal text-gray-300">{t('guides.content.comprador.card4_prices.most_accessible')}</span></p>
            <InfoBox type="tip">{t('guides.content.comprador.card4_prices.tip')}</InfoBox>
            <Disclaimer />
        </GuideCard>
      </div>
    )
  },
  vendedor: {
    title: t('guides.content.vendedor.title'),
    content: (
        <div className="space-y-6">
            <GuideHeader title="Guía del Vendedor" subtitle="Guía Visual con Datos Clave para 2025" />
            <GuideCard title="Checklist Esencial Antes de Vender" question="¿Qué debe preparar un vendedor antes de listar su propiedad en CABA (2025)?" icon="📋" category="VENDEDOR">
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                    <li>Regularizar expensas y servicios (luz, gas, agua)</li>
                    <li>Tener escritura y plano actualizados</li>
                    <li>Obtener certificados legales (informe de dominio, deudas)</li>
                    <li>Preparar recibos recentes de luz, agua, gas</li>
                    <li>Mostrar planos y reglamento si es PH o departamento</li>
                    <li>Actualizar documentación fiscal (AFIP, IIBB)</li>
                </ul>
                <InfoBox type="info">{t('guides.important')}: Si vendés con crédito hipotecario, asegurate de que el comprador tenga preaprobación.</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title="Costos y Comisiones de Venta" question="¿Qué costos enfrenta un vendedor en CABA 2025?" icon="💰" category="VENDEDOR">
                <ul className="space-y-3">
                    <li><strong>Comisión inmobiliaria:</strong> <PriceTag value="1-3%" description="(estándar 3%) + IVA" /></li>
                    <li><strong>Certificados e informes legales:</strong> <PriceTag value="0,2-1%" /></li>
                    <li><strong>Impuesto de sellos:</strong> <PriceTag value="1,75%" description="(a cargo del vendedor en muchos casos)" /></li>
                    <li><strong>Honorarios de escribanía:</strong> <PriceTag value="1-2%" description="(depende del valor)" /></li>
                    <li><strong>Impuestos a ganancias:</strong> Aplicable si hay plusvalía significativa</li>
                </ul>
                <InfoBox type="tip">{t('guides.tip')}: Negociá la comisión inmobiliaria. En mercados activos como 2025, algunos agentes están dispuestos a bajarla.</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title="Estrategias para Vender Más Rápido" question="¿Cómo maximizar el valor y velocidad de venta de tu propiedad en 2025?" icon="⚡" category="VENDEDOR">
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                    <li>Mejorá la presentación: pintura, limpieza profunda, arreglos menores</li>
                    <li>Agilizá trámites con toda la documentación lista y actualizada</li>
                    <li>Aceptá visitas fuera de horario comercial (noches y fines de semana)</li>
                    <li>Tomá fotos profesionales y videos virtuales (muy importantes en 2025)</li>
                    <li>Destacá ventajas únicas: ubicación, amenities, conectividad, seguridad</li>
                    <li>Considerá precios competitivos (no sobrevalorar en un mercado reactivado)</li>
                </ul>
                <InfoBox type="warning">{t('guides.warning')}: Evitá “vender por debajo del mercado” solo por urgencia. En 2025, con demanda creciente, podés conseguir buenos precios si tenés paciencia.</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title="Tendencias del Mercado de Ventas 2025" question="¿Qué impulsa las ventas en CABA en 2025?" icon="📈" category="VENDEDOR">
                <ul className="space-y-2 text-gray-300">
                    <CheckListItem>Regreso de créditos hipotecarios (principal motor de demanda)</CheckListItem>
                    <CheckListItem>Derogación de la Ley de Alquileres (mayor confianza para inversores)</CheckListItem>
                    <CheckListItem>Escrituras <span className="text-blue-400 font-bold">+22% interanual</span>, <span className="text-blue-400 font-bold">+51% en lo que va del año</span></CheckListItem>
                    <CheckListItem>Mayor demanda por PH en Palermo, Caballito y Belgrano</CheckListItem>
                    <CheckListItem>Enfoque en propiedades bien ubicadas, con servicios y buena administración</CheckListItem>
                </ul>
                <DataBox>
                    <p><strong>📊 Datos clave:</strong></p>
                    <p>Las escrituras en 2025 recuperaron niveles no vistos desde 2018, impulsadas por la reactivación económica y la estabilidad cambiaria.</p>
                </DataBox>
                <Disclaimer />
            </GuideCard>
        </div>
    )
  },
  inversion: {
    title: t('guides.content.inversion.title'),
    content: (
       <div className="space-y-6">
        <GuideHeader title={t('guides.content.inversion.title')} subtitle="Guía Visual con Datos Clave para 2025" />
        
        <GuideCard title={t('guides.content.inversion.card1_roi.title')} question={t('guides.content.inversion.card1_roi.question')} icon="📈" category="INVERSIÓN">
            <DataBox>
              {t('guides.content.inversion.card1_roi.data').map((item: string, i: number) => <p key={i}><strong>{item.split(':')[0]}:</strong> <span className="text-purple-300">{item.split(':')[1]}</span></p>)}
            </DataBox>
            <p className="mt-4 font-semibold text-white">{t('guides.content.inversion.card1_roi.important_title')}</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {t('guides.content.inversion.card1_roi.cost_items').map((item: string, i: number) => <li key={i}><span className="font-semibold text-white">{item.split(':')[0]}:</span> <span className="text-purple-300">{item.split(':')[1]}</span></li>)}
            </ul>
            <InfoBox type="tip">{t('guides.content.inversion.card1_roi.tip')}</InfoBox>
            <Disclaimer />
        </GuideCard>

        <GuideCard title={t('guides.content.inversion.card2_checklist.title')} question={t('guides.content.inversion.card2_checklist.question')} icon="📋" category="INVERSIÓN">
            <ul className="space-y-2">
                {t('guides.content.inversion.card2_checklist.items').map((item: string, i: number) => <CheckListItem key={i}>{item}</CheckListItem>)}
            </ul>
            <InfoBox type="info">{t('guides.important')}: {t('guides.content.inversion.card2_checklist.important')}</InfoBox>
            <Disclaimer />
        </GuideCard>

        <GuideCard title={t('guides.content.inversion.card3_opportunities.title')} question={t('guides.content.inversion.card3_opportunities.question')} icon="🗺️" category="INVERSIÓN">
             <ul className="list-disc list-inside text-gray-300 space-y-2">
                {t('guides.content.inversion.card3_opportunities.items').map((item: string, i: number) => <li key={i}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>)}
            </ul>
            <InfoBox type="tip">{t('guides.content.inversion.card3_opportunities.tip')}</InfoBox>
            <Disclaimer />
        </GuideCard>

        <GuideCard title={t('guides.content.inversion.card4_rent.title')} question={t('guides.content.inversion.card4_rent.question')} icon="💲" category="INVERSIÓN">
            <DataBox>
              <p><strong>Aumento anual:</strong> <span className="text-green-400">{t('guides.content.inversion.card4_rent.data.increase')}</span> (superó inflación del <span className="text-green-400">{t('guides.content.inversion.card4_rent.data.inflation')}</span>)</p>
              <p><strong>Monoambiente:</strong> <span className="text-blue-400">{t('guides.content.inversion.card4_rent.data.studio')}</span></p>
              <p><strong>Dos ambientes:</strong> <span className="text-blue-400">{t('guides.content.inversion.card4_rent.data.one_bed')}</span></p>
              <p><strong>Tres ambientes:</strong> <span className="text-blue-400">{t('guides.content.inversion.card4_rent.data.two_bed')}</span></p>
            </DataBox>
            <p className="font-semibold text-white mt-4">Barrios con alquileres más altos:</p>
            <ul className="list-disc list-inside text-gray-300">
                {t('guides.content.inversion.card4_rent.most_expensive').map((item: string, i:number) => <li key={i}><span className="font-semibold text-white">{item.split(':')[0]}:</span> <span className="text-blue-400">{item.split(':')[1]}</span></li>)}
            </ul>
            <p className="font-semibold text-white mt-4">{t('guides.content.inversion.card4_rent.most_accessible_label')} <span className="font-normal text-blue-400">{t('guides.content.inversion.card4_rent.most_accessible_value')}</span></p>
            <InfoBox type="warning">{t('guides.content.inversion.card4_rent.warning')}</InfoBox>
            <Disclaimer />
        </GuideCard>
      </div>
    )
  },
  dueno: {
    title: t('guides.content.dueno.title'),
    content: (
      <div className="space-y-6">
        <GuideHeader title={t('guides.content.dueno.title')} subtitle={t('guides.content.dueno.subtitle')} />
        <GuideSection title={t('guides.content.dueno.prosConsTitle')} icon="⚖️" colorClass="border-yellow-500">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold text-lg text-green-400 mb-2">Pros</h3>
                    <ul className="space-y-2 text-gray-300">
                        {t('guides.content.dueno.pros').map((item: string, i: number) => <li key={i} className="flex items-start"><span className="mr-2 mt-1 text-green-400">+</span><span>{item}</span></li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-red-400 mb-2">Contras</h3>
                    <ul className="space-y-2 text-gray-300">
                        {t('guides.content.dueno.cons').map((item: string, i: number) => <li key={i} className="flex items-start"><span className="mr-2 mt-1 text-red-400">-</span><span>{item}</span></li>)}
                    </ul>
                </div>
            </div>
        </GuideSection>
        <GuideSection title={t('guides.content.dueno.stepsTitle')} icon="📝" colorClass="border-blue-500">
            <ul className="space-y-2 text-gray-300">
                {t('guides.content.dueno.steps').map((item: string, i: number) => <CheckListItem key={i}>{item}</CheckListItem>)}
            </ul>
        </GuideSection>
      </div>
    )
  },
  extranjero: {
    title: t('guides.content.extranjero.title'),
    content: (
        <div className="space-y-6">
            <GuideHeader title={t('guides.content.extranjero.title')} subtitle={t('guides.content.extranjero.subtitle')} />
            <GuideCard title={t('guides.content.extranjero.card1_reqs.title')} question={t('guides.content.extranjero.card1_reqs.question')} icon="📄" category="EXTRANJERO">
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                    {t('guides.content.extranjero.card1_reqs.items').map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>
                <InfoBox type="tip">{t('guides.content.extranjero.card1_reqs.tip')}</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title={t('guides.content.extranjero.card2_steps.title')} question={t('guides.content.extranjero.card2_steps.question')} icon="➡" category="EXTRANJERO">
                <ol className="space-y-3">
                    {t('guides.content.extranjero.card2_steps.items').map((item: string, i: number) => <NumberedListItem key={i} number={i + 1}>{item}</NumberedListItem>)}
                </ol>
                <InfoBox type="warning">{t('guides.content.extranjero.card2_steps.warning')}</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title={t('guides.content.extranjero.card3_costs.title')} question={t('guides.content.extranjero.card3_costs.question')} icon="💰" category="EXTRANJERO">
                <ul className="space-y-3">
                    {t('guides.content.extranjero.card3_costs.items').map((item: any, i: number) => (
                        <li key={i}><strong>{item.label}</strong> <PriceTag value={item.value} description={item.description} /></li>
                    ))}
                </ul>
                <InfoBox type="tip">{t('guides.content.extranjero.card3_costs.tip')}</InfoBox>
                <Disclaimer />
            </GuideCard>
            <GuideCard title={t('guides.content.extranjero.card4_tips.title')} question={t('guides.content.extranjero.card4_tips.question')} icon="💡" category="EXTRANJERO">
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                    {t('guides.content.extranjero.card4_tips.items').map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>
                <InfoBox type="tip">{t('guides.content.extranjero.card4_tips.tip')}</InfoBox>
                <Disclaimer />
            </GuideCard>
        </div>
    )
  }
});
