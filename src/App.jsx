import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Card3D from './components/Card3D';
import FloatingCard from './components/FloatingCard';
import InteractiveSection from './components/InteractiveSection';
import Circles from './components/Circles';
import Footer from './components/Footer';
import './styles/globals.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <ParticlesCanvas />
      <Navigation isScrolled={isScrolled} />
      
      <HeroSection />

      <InteractiveSection id="story" className="text-center">
        <h2>1994年、世界初の<br /><span className="highlight">クリーンエアサロン</span></h2>
        <Card3D 
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200" 
          alt="Natural ingredients"
        />
        <p>化学物質を一切使用しない、新しい美の形を追求して。</p>
      </InteractiveSection>

      <InteractiveSection id="mission" className="text-center">
        <h2>いまも変わらない<span className="highlight">想い</span></h2>
        <p>心地よい美しさをつないでいくために。</p>
      </InteractiveSection>

      <div className="parallax-section">
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 200, marginBottom: '2rem' }}>
            自然は私たちに幸福感をもたらす
          </h2>
        </div>
      </div>

      <InteractiveSection id="values">
        <h2 className="text-center">
          あなたが感じた<span className="highlight">美しさや心地よさ</span>
        </h2>
        <div className="cards-grid">
          <FloatingCard 
            image="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" 
            title="持続可能な農業"
          />
          <FloatingCard 
            image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600" 
            title="クリーンビューティー"
          />
          <FloatingCard 
            image="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600" 
            title="コミュニティ支援"
          />
        </div>
        <Circles />
      </InteractiveSection>

      <section className="section cta-section">
        <div className="section-content text-center">
          <h2>人、自然、地球のつながりを大切に</h2>
          <p>想いが循環する営みを。</p>
          <a href="#contact" className="cta-button">私たちの活動を見る</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;