import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const text = 'Dosee Wellness';
    setTimeout(() => {
      setChars(text.split(''));
    }, 500);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1>
          {chars.map((char, i) => (
            <span
              key={i}
              className="split-char"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="subtitle">小さな積み重ねが、あなたの健康を作る。</p>
      </div>
      <div className="scroll-indicator">SCROLL</div>
    </section>
  );
};

export default HeroSection;