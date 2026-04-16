import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-card">
        <p className="eyebrow">PROP FIRM PROMO</p>
        <h1>用更清晰的规则视图，选择适合你的 PropFirm 路线</h1>
        <p>
          PropFirm 是一种交易员资金评估与放大模式。你通过规则考核后，可使用平台提供的资金交易，并按约定比例分润。
          这个网站聚焦于帮助你快速理解平台规则、费用、回撤与出金机制。
        </p>
      </section>

      <section className="platforms">
        <h2>选择平台</h2>
        <div className="platform-grid">
          <article className="platform-card">
            <h3>YRM</h3>
            <p>查看 YRM 的 Starter 与 Instant 规则、出金机制和关键注意事项。</p>
            <Link to="/platforms/yrm" className="cta">查看 YRM 规则</Link>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
