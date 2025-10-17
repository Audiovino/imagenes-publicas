

import React, { useRef, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Neighborhoods from './components/Neighborhoods';
import TopNeighborhoods from './components/TopNeighborhoods';
import Guides from './components/Guides';
import Blog from './components/Blog';
import Faq from './components/Faq';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import Chatbox from './components/Chatbox';
import VirtualTours from './components/VirtualTours';
import FinancialTools from './components/FinancialTools';
// FIX: Changed import to be relative
import Referrals from './components/Referrals';

const App: React.FC = () => {
  const refs: { [key: string]: React.RefObject<HTMLElement> } = {
    inicio: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    barrios: useRef<HTMLElement>(null),
    virtualTours: useRef<HTMLElement>(null),
    financialTools: useRef<HTMLElement>(null),
    referidos: useRef<HTMLElement>(null),
    guias: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const scrollToRef = (refName: string) => {
    refs[refName]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-gray-300 font-sans">
        <Header scrollToRef={scrollToRef} />
        <main>
          <section ref={refs.inicio}>
            <Hero scrollToContact={() => scrollToRef('contacto')} />
          </section>

          <section ref={refs.experiencia} className="py-20 px-4 md:px-8 bg-gray-900">
            <Experience />
          </section>

          <section ref={refs.barrios} className="py-20 px-4 md:px-8 bg-gray-900">
            <TopNeighborhoods />
            <div className="mt-20">
              <Neighborhoods />
            </div>
          </section>

          <section ref={refs.virtualTours} className="py-20 px-4 md:px-8 bg-gray-800">
            <VirtualTours />
          </section>

          <section ref={refs.financialTools} className="py-20 px-4 md:px-8 bg-gray-900">
            <FinancialTools />
          </section>

          <section ref={refs.referidos} className="py-20 px-4 md:px-8 bg-gray-800">
            <Referrals />
          </section>

          <section ref={refs.guias} className="py-20 px-4 md:px-8 bg-gray-900">
            <Guides />
          </section>

          <section ref={refs.blog} className="py-20 px-4 md:px-8 bg-gray-800">
            <Blog />
          </section>

          <section ref={refs.faq} className="py-20 px-4 md:px-8 bg-gray-900">
            <Faq />
          </section>

          <section className="py-8 px-4 md:px-8 bg-gray-800">
            <AiAssistant onOpenChat={() => setIsChatboxOpen(true)} />
          </section>

          <section ref={refs.contacto} className="py-20 px-4 md:px-8 bg-gray-900">
            <Contact />
          </section>
        </main>

        <Footer />
        <FloatingChatButton onOpenChat={() => setIsChatboxOpen(true)} />
        <Chatbox isOpen={isChatboxOpen} onClose={() => setIsChatboxOpen(false)} />
      </div>
    </LanguageProvider>
  );
};

export default App;