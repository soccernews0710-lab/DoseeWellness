import { useRef } from 'react';

const Card3D = ({ image, alt }) => {
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
    <div className="card-3d">
      <div
        ref={cardRef}
        className="card-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-face">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Card3D;