const Footer = () => {
  const sections = [
    {
      title: 'Dosee Wellness',
      content: <p>健康を愛するすべての人へ。</p>
    },
    {
      title: '企業情報',
      links: ['会社概要', '採用情報']
    },
    {
      title: 'サポート',
      links: ['お問い合わせ', 'よくある質問', '配送について']
    },
    {
      title: 'フォロー',
      links: ['Instagram']
    }
  ];

  return (
    <footer id="contact">
      <div className="footer-content">
        {sections.map((section, i) => (
          <div key={i} className="footer-section">
            <h3>{section.title}</h3>
            {section.content || section.links?.map((link, j) => (
              <a key={j} href="#">{link}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dosee Wellness. All rights reserved. | プライバシーポリシー | 利用規約</p>
      </div>
    </footer>
  );
};

export default Footer;