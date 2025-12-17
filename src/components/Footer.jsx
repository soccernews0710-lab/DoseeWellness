import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dosee Wellness</h3>
          <p>こころ・からだ・肌を整える、<br />日々の一杯を。</p>
        </div>
        
        <div className="footer-section">
          <h3>Products</h3>
          <Link to="/wellcha">WellCha</Link>
          <Link to="/dosee">DoSee</Link>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/about">会社概要</Link>
          <a href="mailto:info@dosee-wellness.com">お問い合わせ</a>
        </div>
        
        <div className="footer-section">
          <h3>Follow</h3>
          <a href="https://www.instagram.com/isamisushi.yvr" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; 2025 Dosee Wellness. All rights reserved. | {' '}
          <Link to="/privacy" style={{color: 'inherit', textDecoration: 'underline'}}>Privacy Policy</Link> | {' '}
          <Link to="/terms" style={{color: 'inherit', textDecoration: 'underline'}}>Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;