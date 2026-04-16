import { Link, NavLink } from 'react-router-dom';

function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="wrap nav-wrap">
          <Link to="/" className="brand">PropFirm Hub</Link>
          <nav>
            <NavLink to="/" end>首页</NavLink>
            <NavLink to="/platforms/yrm">YRM规则</NavLink>
          </nav>
        </div>
      </header>

      <main className="wrap site-main">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>PropFirm 宣传网站</p>
          <p>仅作规则信息整理，实际以平台官方为准。</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
