import { useRef } from 'react';

const InteractiveSection = ({ id, children, className = '' }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    bgRef.current.style.setProperty('--mouse-x', `${x}%`);
    bgRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div ref={bgRef} className="interactive-bg" />
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default InteractiveSection;