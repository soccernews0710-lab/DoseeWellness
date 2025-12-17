import { useRef } from 'react';

const FloatingCard = ({ image, title }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div
      className="floating-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="floating-card-inner">
        <img src={image} alt={title} />
        <div className="floating-card-overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;