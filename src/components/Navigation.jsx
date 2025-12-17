const Navigation = ({ isScrolled }) => {
  const menuItems = [
    { label: 'ストーリー', href: '#story' },
    { label: 'ミッション', href: '#mission' },
    { label: 'バリュー', href: '#values' },
    { label: 'お問い合わせ', href: '#contact' }
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">Dosee Wellness</div>
      <ul>
        {menuItems.map(item => (
          <li key={item.href}>
            <a href={item.href} onClick={(e) => handleClick(e, item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;